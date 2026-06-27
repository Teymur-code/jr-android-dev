import React, { useState, useEffect, useRef } from "react";
import { 
  BookOpen, 
  CheckCircle, 
  ChevronRight, 
  Code, 
  HelpCircle, 
  MessageSquare, 
  Play, 
  Settings, 
  Sparkles, 
  Trophy, 
  AlertTriangle, 
  FileText, 
  ExternalLink,
  ChevronDown,
  RotateCcw,
  Check,
  Send,
  User,
  GitBranch,
  Github,
  Smartphone,
  Star,
  Award,
  Search,
  BookMarked,
  Layers,
  Sparkle
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { getFullRoadmap, Month, Week, Day, InterviewQA } from "./data/roadmapIndex";
import MarkdownView from "./components/MarkdownView";

export default function App() {
  const roadmap = getFullRoadmap();

  // State managers
  const [selectedMonthId, setSelectedMonthId] = useState<number>(1);
  const [selectedWeekId, setSelectedWeekId] = useState<number>(1);
  const [selectedDayId, setSelectedDayId] = useState<number>(1);
  const [activeTab, setActiveTab] = useState<"lessons" | "sandbox" | "portfolio" | "career">("lessons");

  // Local persistence for progress
  const [completedDays, setCompletedDays] = useState<number[]>(() => {
    const saved = localStorage.getItem("bootcamp_completed_days");
    return saved ? JSON.parse(saved) : [];
  });

  const [completedWeeks, setCompletedWeeks] = useState<number[]>(() => {
    const saved = localStorage.getItem("bootcamp_completed_weeks");
    return saved ? JSON.parse(saved) : [];
  });

  const [selfAssessment, setSelfAssessment] = useState<Record<string, number>>(() => {
    const saved = localStorage.getItem("bootcamp_self_assessment");
    return saved ? JSON.parse(saved) : {
      kotlin: 3,
      compose: 2,
      coroutines: 2,
      databases: 1,
      di: 1,
      testing: 1
    };
  });

  const [studyHours, setStudyHours] = useState<number>(() => {
    const saved = localStorage.getItem("bootcamp_study_hours");
    return saved ? parseInt(saved) : 0;
  });

  // AI Mentor state
  const [dayLessonContent, setDayLessonContent] = useState<Record<number, string>>({});
  const [loadingLessonId, setLoadingLessonId] = useState<number | null>(null);
  const [isChatOpen, setIsChatOpen] = useState<boolean>(false);
  const [chatMessages, setChatMessages] = useState<{ role: "user" | "assistant"; text: string }[]>(() => {
    const saved = localStorage.getItem("bootcamp_chat");
    return saved ? JSON.parse(saved) : [
      { 
        role: "assistant", 
        text: "Greetings, Cadet! I am your Senior Android Tech Lead and Mentor. I have over 15 years of experience building scalable applications. Feel free to ask me anything about Kotlin, Jetpack Compose, Coroutines, MVVM, or how to tackle today's homework!" 
      }
    ];
  });
  const [userInput, setUserInput] = useState<string>("");
  const [isSendingMessage, setIsSendingMessage] = useState<boolean>(false);

  // Quiz active states
  const [selectedQuizAnswers, setSelectedQuizAnswers] = useState<Record<string, number>>({});
  const [quizScore, setQuizScore] = useState<Record<number, number>>({});

  // Flashcards state
  const [revealedFlashcards, setRevealedFlashcards] = useState<Record<string, boolean>>({});

  // Code review checklist state
  const [checklistCompleted, setChecklistCompleted] = useState<Record<string, boolean>>(() => {
    const saved = localStorage.getItem("bootcamp_checklist");
    return saved ? JSON.parse(saved) : {};
  });

  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  // Save states to local storage
  useEffect(() => {
    localStorage.setItem("bootcamp_completed_days", JSON.stringify(completedDays));
  }, [completedDays]);

  useEffect(() => {
    localStorage.setItem("bootcamp_completed_weeks", JSON.stringify(completedWeeks));
  }, [completedWeeks]);

  useEffect(() => {
    localStorage.setItem("bootcamp_self_assessment", JSON.stringify(selfAssessment));
  }, [selfAssessment]);

  useEffect(() => {
    localStorage.setItem("bootcamp_study_hours", studyHours.toString());
  }, [studyHours]);

  useEffect(() => {
    localStorage.setItem("bootcamp_chat", JSON.stringify(chatMessages));
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatMessages]);

  useEffect(() => {
    localStorage.setItem("bootcamp_checklist", JSON.stringify(checklistCompleted));
  }, [checklistCompleted]);

  // Derived calculations
  const activeMonth = roadmap.find((m) => m.id === selectedMonthId) || roadmap[0];
  const activeWeek = activeMonth.weeks.find((w) => w.id === selectedWeekId) || activeMonth.weeks[0];
  const activeDay = activeWeek.days.find((d) => d.id === selectedDayId) || activeWeek.days[0];

  const totalDays = 120;
  const totalWeeks = 20;
  const progressPercent = Math.round((completedDays.length / totalDays) * 100);

  // Compute junior readiness score
  const avgAssessment = (Object.values(selfAssessment) as number[]).reduce((a: number, b: number) => a + b, 0) / Object.keys(selfAssessment).length;
  const projectCompletionWeight = (completedWeeks.length / totalWeeks) * 40; // max 40%
  const dayCompletionWeight = (completedDays.length / totalDays) * 40; // max 40%
  const assessmentWeight = (avgAssessment / 5) * 20; // max 20%
  const readinessPercentage = Math.round(projectCompletionWeight + dayCompletionWeight + assessmentWeight);

  const getRank = () => {
    if (progressPercent < 15) return { name: "Kotlin Cadet", color: "text-slate-600 bg-slate-100 border border-slate-200" };
    if (progressPercent < 35) return { name: "Compose Apprentice", color: "text-sky-600 bg-sky-50 border border-sky-200" };
    if (progressPercent < 55) return { name: "Reactive Ranger", color: "text-indigo-600 bg-indigo-50 border border-indigo-200" };
    if (progressPercent < 80) return { name: "Architecture Master", color: "text-amber-600 bg-amber-50 border border-amber-200" };
    return { name: "Strong Junior Hero", color: "text-emerald-600 bg-emerald-50 border border-emerald-200" };
  };

  const currentRank = getRank();

  // Progress modification functions
  const toggleDayCompletion = (dayId: number) => {
    setCompletedDays((prev) => {
      if (prev.includes(dayId)) {
        const next = prev.filter((id) => id !== dayId);
        setStudyHours((h) => Math.max(0, h - 7));
        return next;
      } else {
        setStudyHours((h) => h + 7);
        return [...prev, dayId];
      }
    });
  };

  const toggleWeekCompletion = (weekId: number) => {
    setCompletedWeeks((prev) => 
      prev.includes(weekId) ? prev.filter((id) => id !== weekId) : [...prev, weekId]
    );
  };

  // call server endpoint for day detail expansion
  const handleExplainDay = async (day: Day) => {
    if (dayLessonContent[day.id]) return; // already loaded
    
    setLoadingLessonId(day.id);
    try {
      const response = await fetch("/api/mentor/explain", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          dayId: day.id,
          dayTitle: day.title,
          focus: day.focus,
          theory: day.theory,
          practice: day.practice,
          homework: day.homework,
          miniChallenge: day.miniChallenge
        })
      });
      
      const data = await response.json();
      if (response.ok) {
        setDayLessonContent((prev) => ({ ...prev, [day.id]: data.content }));
      } else {
        alert(data.error || "Failed to contact your Mentor.");
      }
    } catch (err) {
      console.error(err);
      alert("Network error contacting AI Mentor.");
    } finally {
      setLoadingLessonId(null);
    }
  };

  // call server endpoint for AI Mentor chat
  const handleSendMessage = async () => {
    if (!userInput.trim() || isSendingMessage) return;

    const userMsg = userInput.trim();
    const updatedMessages = [...chatMessages, { role: "user" as const, text: userMsg }];
    setChatMessages(updatedMessages);
    setUserInput("");
    setIsSendingMessage(true);

    try {
      const response = await fetch("/api/mentor/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: updatedMessages })
      });
      
      const data = await response.json();
      if (response.ok) {
        setChatMessages((prev) => [...prev, { role: "assistant", text: data.reply }]);
      } else {
        setChatMessages((prev) => [
          ...prev, 
          { 
            role: "assistant", 
            text: `⚠️ **Mentor Alert:** ${data.error || "I could not resolve that query. Please make sure your GEMINI_API_KEY is configured in the secrets menu."}` 
          }
        ]);
      }
    } catch (err) {
      setChatMessages((prev) => [
        ...prev, 
        { role: "assistant", text: "⚠️ **Connection Error:** I couldn't reach the network server. Please retry in a moment." }
      ]);
    } finally {
      setIsSendingMessage(false);
    }
  };

  const handleExportMarkdown = () => {
    let md = `# ANDROID BOOTCAMP: ${activeMonth.title}\n\n`;
    md += `## Focus: ${activeMonth.focus}\n\n`;
    md += `### WEEK ${activeWeek.id}: ${activeWeek.theme}\n`;
    md += `Focus: ${activeWeek.focus}\n\n`;
    
    activeWeek.days.forEach((day) => {
      md += `#### Day ${day.id}: ${day.title}\n`;
      md += `- **Focus**: ${day.focus}\n`;
      md += `- **Theory**: ${day.theory}\n`;
      md += `- **Practice**: ${day.practice}\n`;
      md += `- **Mini Challenge**: ${day.miniChallenge}\n`;
      md += `- **Homework**: ${day.homework}\n`;
      md += `- **Reading**: ${day.readTopic}\n`;
      md += `- **Watch**: ${day.watchTopic}\n\n`;
    });

    const blob = new Blob([md], { type: "text/markdown" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `Month_${selectedMonthId}_Week_${selectedWeekId}_Roadmap.md`;
    a.click();
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800 flex flex-col font-sans selection:bg-emerald-100 selection:text-emerald-800">
      
      {/* Dynamic Header Dashboard */}
      <header className="bg-white border-b border-slate-200 px-6 py-4 sticky top-0 z-30 shadow-md shadow-slate-100/50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
          
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-emerald-500 flex items-center justify-center font-bold text-slate-900 shadow-lg shadow-emerald-500/10 text-xl">
              <Smartphone className="w-6 h-6 text-slate-900" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-sm font-bold leading-tight uppercase tracking-widest text-emerald-600">Android Dev Academy</h1>
                <span className={`px-2 py-0.5 rounded text-[9px] font-bold tracking-wide uppercase ${currentRank.color}`}>
                  {currentRank.name}
                </span>
              </div>
              <p className="text-xs text-slate-500">120-Day Interactive Roadmap designed by 15+ Yr Tech Lead</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 md:gap-8 bg-slate-50 p-2.5 rounded-xl border border-slate-200">
            <div className="text-center px-2">
              <span className="block text-[10px] text-slate-500 font-bold uppercase tracking-wider">Progress</span>
              <span className="text-sm font-extrabold text-emerald-600">{progressPercent}%</span>
            </div>
            <div className="text-center px-2 border-l border-slate-200">
              <span className="block text-[10px] text-slate-500 font-bold uppercase tracking-wider">Days Done</span>
              <span className="text-sm font-extrabold text-slate-800">{completedDays.length} / 120</span>
            </div>
            <div className="text-center px-2 border-l border-slate-200">
              <span className="block text-[10px] text-slate-500 font-bold uppercase tracking-wider">Commitment</span>
              <span className="text-sm font-extrabold text-slate-800">{studyHours} Hrs</span>
            </div>
            <div className="text-center px-2 border-l border-slate-200">
              <span className="block text-[10px] text-slate-500 font-bold uppercase tracking-wider">Junior Readiness</span>
              <span className="text-sm font-extrabold text-emerald-600">{readinessPercentage}%</span>
            </div>
          </div>

        </div>

        {/* Multi-colored Progress Bar */}
        <div className="w-full h-1.5 bg-slate-100 rounded-full mt-4 overflow-hidden relative border border-slate-200">
          <motion.div 
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-400 shadow-md shadow-emerald-500/10"
            initial={{ width: 0 }}
            animate={{ width: `${progressPercent}%` }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
        </div>
      </header>

      {/* Main Workspace Frame */}
      <main className="max-w-7xl mx-auto w-full flex-grow px-4 md:px-6 py-6 flex flex-col lg:flex-row gap-6 relative">
        
        {/* Sidebar Nav: Months, Weeks, Days selection */}
        <aside className="w-full lg:w-80 shrink-0 flex flex-col gap-5">
          
          {/* Months Accordion */}
          <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm">
            <h2 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4 flex items-center gap-1.5 pl-1">
              <BookOpen className="w-3.5 h-3.5 text-emerald-600" />
              Monthly Milestones
            </h2>
            <div className="space-y-1.5">
              {roadmap.map((m) => {
                const isActive = m.id === selectedMonthId;
                const completedInMonth = completedDays.filter(dId => dId >= (m.id-1)*24 && dId <= m.id*24).length;
                return (
                  <button
                    key={m.id}
                    onClick={() => {
                      setSelectedMonthId(m.id);
                      setSelectedWeekId((m.id - 1) * 4 + 1);
                      setSelectedDayId((m.id - 1) * 24 + 1);
                    }}
                    className={`w-full text-left px-3.5 py-3 rounded-xl transition-all flex items-center justify-between border ${
                      isActive 
                        ? "bg-slate-100 border-slate-200 shadow-sm text-slate-800 font-bold" 
                        : "bg-slate-50/50 border-transparent hover:bg-slate-50 text-slate-500 hover:text-slate-700"
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <div className={`w-6 h-6 rounded-lg text-[10px] font-black flex items-center justify-center ${isActive ? "bg-emerald-500 text-slate-950" : "bg-slate-200 text-slate-600"}`}>
                        M{m.id}
                      </div>
                      <span className="text-xs font-bold truncate max-w-[150px]">{m.title}</span>
                    </div>
                    {completedInMonth > 0 && (
                      <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">
                        {completedInMonth}/24
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Weeks Selector inside Month */}
          <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm">
            <h2 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4 flex items-center gap-1.5 pl-1">
              <Layers className="w-3.5 h-3.5 text-emerald-600" />
              Weekly Chapters
            </h2>
            <div className="space-y-1">
              {activeMonth.weeks.map((w) => {
                const isActive = w.id === selectedWeekId;
                const isWeekFinished = completedWeeks.includes(w.id);
                return (
                  <button
                    key={w.id}
                    onClick={() => {
                      setSelectedWeekId(w.id);
                      setSelectedDayId((w.id - 1) * 6 + 1);
                    }}
                    className={`w-full text-left px-3 py-2.5 rounded-lg text-xs transition-all flex items-center justify-between ${
                      isActive 
                        ? "bg-slate-100 text-slate-800 font-bold" 
                        : "hover:bg-slate-50 text-slate-500 hover:text-slate-700"
                    }`}
                  >
                    <span className="truncate max-w-[180px]">Week {w.id}: {w.theme}</span>
                    {isWeekFinished ? (
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    ) : (
                      <div className="w-1.5 h-1.5 rounded-full bg-slate-300 shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Daily Selection inside Week */}
          <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm">
            <h2 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4 flex items-center gap-1.5 pl-1">
              <BookMarked className="w-3.5 h-3.5 text-emerald-600" />
              Daily Study Plan
            </h2>
            <div className="grid grid-cols-6 gap-1.5">
              {activeWeek.days.map((d) => {
                const isActive = d.id === selectedDayId;
                const isFinished = completedDays.includes(d.id);
                return (
                  <button
                    key={d.id}
                    onClick={() => setSelectedDayId(d.id)}
                    className={`h-9 rounded-lg text-xs font-extrabold flex items-center justify-center transition-all border ${
                      isActive 
                        ? "bg-emerald-500 border-emerald-400 text-slate-950 font-black shadow-md shadow-emerald-500/10" 
                        : isFinished 
                        ? "bg-emerald-50 border-emerald-200 text-emerald-700" 
                        : "bg-slate-50 border-slate-200 text-slate-500 hover:bg-slate-100"
                    }`}
                    title={d.title}
                  >
                    D{d.id % 24 === 0 ? 24 : d.id % 24}
                  </button>
                );
              })}
            </div>
          </div>

        </aside>

        {/* central Workspace panels */}
        <section className="flex-grow flex flex-col gap-6">
          
          {/* Workspace Tabs Navigator */}
          <div className="flex border-b border-slate-200 overflow-x-auto shrink-0 bg-white p-1.5 rounded-2xl border border-slate-200 shadow-sm">
            <button
              onClick={() => setActiveTab("lessons")}
              className={`flex items-center gap-2 px-4 py-2 text-xs font-extrabold uppercase tracking-widest rounded-xl transition-all ${
                activeTab === "lessons" 
                  ? "bg-emerald-500 text-slate-950 shadow-sm shadow-emerald-500/10 font-bold" 
                  : "text-slate-500 hover:text-slate-800"
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              Daily Lessons
            </button>
            <button
              onClick={() => setActiveTab("sandbox")}
              className={`flex items-center gap-2 px-4 py-2 text-xs font-extrabold uppercase tracking-widest rounded-xl transition-all ${
                activeTab === "sandbox" 
                  ? "bg-emerald-500 text-slate-950 shadow-sm shadow-emerald-500/10 font-bold" 
                  : "text-slate-500 hover:text-slate-800"
              }`}
            >
              <Code className="w-3.5 h-3.5" />
              Review & Sandbox
            </button>
            <button
              onClick={() => setActiveTab("portfolio")}
              className={`flex items-center gap-2 px-4 py-2 text-xs font-extrabold uppercase tracking-widest rounded-xl transition-all ${
                activeTab === "portfolio" 
                  ? "bg-emerald-500 text-slate-950 shadow-sm shadow-emerald-500/10 font-bold" 
                  : "text-slate-500 hover:text-slate-800"
              }`}
            >
              <Trophy className="w-3.5 h-3.5" />
              Portfolio Milestones
            </button>
            <button
              onClick={() => setActiveTab("career")}
              className={`flex items-center gap-2 px-4 py-2 text-xs font-extrabold uppercase tracking-widest rounded-xl transition-all ${
                activeTab === "career" 
                  ? "bg-emerald-500 text-slate-950 shadow-sm shadow-emerald-500/10 font-bold" 
                  : "text-slate-500 hover:text-slate-800"
              }`}
            >
              <Award className="w-3.5 h-3.5" />
              Graduation & Career
            </button>
          </div>

          {/* Tab Workspaces switcher */}
          <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm flex-grow">
            
            {/* 1. Daily Lessons Tab */}
            {activeTab === "lessons" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 pb-4">
                  <div>
                    <span className="text-[10px] uppercase font-extrabold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded tracking-wide">
                      Day {activeDay.id} of 120
                    </span>
                    <h2 className="text-xl font-extrabold text-slate-900 mt-1.5 tracking-tight">{activeDay.title}</h2>
                  </div>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={handleExportMarkdown}
                      className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-50 hover:bg-slate-100 text-slate-600 hover:text-slate-800 rounded-lg text-xs transition-colors border border-slate-200"
                      title="Export Active Week to Local Markdown File"
                    >
                      <FileText className="w-3.5 h-3.5" />
                      Export MD
                    </button>
                    <button
                      onClick={() => toggleDayCompletion(activeDay.id)}
                      className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                        completedDays.includes(activeDay.id)
                          ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                          : "bg-emerald-500 text-slate-950 hover:bg-emerald-600 font-extrabold shadow-sm"
                      }`}
                    >
                      {completedDays.includes(activeDay.id) ? (
                        <>
                          <Check className="w-4 h-4" />
                          Completed
                        </>
                      ) : (
                        "Mark as Finished (+7 hrs)"
                      )}
                    </button>
                  </div>
                </div>

                {/* Day content blocks */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-4">
                  <div className="space-y-5">
                    
                    <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 hover:border-emerald-500/30 transition-colors shadow-sm">
                      <h3 className="text-xs font-bold text-emerald-600 uppercase tracking-widest mb-3">Lesson Theory Focus</h3>
                      <p className="text-xs text-slate-600 leading-relaxed">{activeDay.theory}</p>
                    </div>

                    <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 hover:border-emerald-500/30 transition-colors shadow-sm">
                      <h3 className="text-xs font-bold text-emerald-600 uppercase tracking-widest mb-3">In-Class Coding Exercises</h3>
                      <p className="text-xs text-slate-600 leading-relaxed">{activeDay.practice}</p>
                    </div>

                    <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 hover:border-emerald-500/30 transition-colors shadow-sm">
                      <h3 className="text-xs font-bold text-emerald-600 uppercase tracking-widest mb-2">Daily Mini Challenge</h3>
                      <span className="inline-block text-[9px] bg-sky-50 text-sky-600 border border-sky-200 px-2 py-0.5 rounded font-extrabold uppercase mb-3">Boosts Problem Solving</span>
                      <p className="text-xs text-slate-600 leading-relaxed">{activeDay.miniChallenge}</p>
                    </div>

                  </div>

                  <div className="space-y-5">
                    
                    <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-5 shadow-sm">
                      <h3 className="text-xs font-bold text-emerald-700 uppercase tracking-widest mb-3">Homework Assignment</h3>
                      <p className="text-xs text-slate-600 leading-relaxed">{activeDay.homework}</p>
                    </div>

                    <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 hover:border-emerald-500/30 transition-colors shadow-sm">
                      <h3 className="text-xs font-bold text-emerald-600 uppercase tracking-widest mb-4">Syllabus Resources</h3>
                      <div className="space-y-3">
                        <div className="flex items-start gap-2 text-xs">
                          <BookOpen className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <div>
                            <span className="block text-slate-500 font-bold text-[9px] uppercase tracking-wider">Official Read</span>
                            <span className="text-slate-700">{activeDay.readTopic}</span>
                          </div>
                        </div>
                        <div className="flex items-start gap-2 text-xs border-t border-slate-200 pt-3">
                          <Play className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <div>
                            <span className="block text-slate-500 font-bold text-[9px] uppercase tracking-wider">Recommended Video Category</span>
                            <span className="text-slate-700">{activeDay.watchTopic}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-slate-50 border border-slate-100 rounded-2xl p-4">
                      <div className="flex justify-between items-center text-xs text-slate-500">
                        <span>Est Duration: <strong className="text-slate-800">{activeDay.duration}</strong></span>
                        <span>Goal: <strong className="text-emerald-600">Strong foundations</strong></span>
                      </div>
                    </div>

                  </div>
                </div>

              </motion.div>
            )}

            {/* 2. Review & Sandbox Tab */}
            {activeTab === "sandbox" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 pb-4">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-sky-700 bg-sky-50 border border-sky-200 px-2 py-0.5 rounded tracking-wide">
                      Week {activeWeek.id} Assessment Sandbox
                    </span>
                    <h2 className="text-xl font-extrabold text-slate-900 mt-1.5 tracking-tight">Interactive Challenges</h2>
                  </div>
                  <button
                    onClick={() => toggleWeekCompletion(activeWeek.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all border ${
                      completedWeeks.includes(activeWeek.id)
                        ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                        : "bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-200 font-bold"
                    }`}
                  >
                    {completedWeeks.includes(activeWeek.id) ? "Mark Chapter Incomplete" : "Mark Chapter Completed"}
                  </button>
                </div>

                {/* 2.1 Interactive Multiple-Choice Quiz */}
                <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                  <h3 className="text-sm font-bold text-slate-800 uppercase tracking-widest mb-5 flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-emerald-600" />
                    Chapter MCQ Quiz
                  </h3>

                  <div className="space-y-6">
                    {activeWeek.quiz.map((q, qIdx) => {
                      const quizKey = `quiz-${activeWeek.id}-${qIdx}`;
                      const selectedOpt = selectedQuizAnswers[quizKey];
                      const isCorrect = selectedOpt === q.correctIndex;

                      return (
                        <div key={qIdx} className="bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-4 hover:border-slate-300/60 transition-colors">
                          <h4 className="text-xs font-bold text-slate-800">
                            Q{qIdx + 1}: {q.question}
                          </h4>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 pt-1">
                            {q.options.map((opt, optIdx) => {
                               const isThisSelected = selectedOpt === optIdx;
                               const isThisCorrect = optIdx === q.correctIndex;
                               let buttonStyle = "bg-white border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-slate-800";
                               
                               if (selectedOpt !== undefined) {
                                 if (isThisCorrect) {
                                   buttonStyle = "bg-emerald-50 border-emerald-200 text-emerald-700 font-bold";
                                 } else if (isThisSelected) {
                                   buttonStyle = "bg-rose-50 border-rose-200 text-rose-700 font-bold";
                                 } else {
                                   buttonStyle = "bg-slate-100 border-slate-200 text-slate-400 opacity-60";
                                 }
                               }

                               return (
                                 <button
                                   key={optIdx}
                                   disabled={selectedOpt !== undefined}
                                   onClick={() => {
                                     setSelectedQuizAnswers(prev => ({ ...prev, [quizKey]: optIdx }));
                                   }}
                                   className={`w-full text-left px-4 py-2.5 rounded-xl text-xs transition-all border flex items-center justify-between ${buttonStyle}`}
                                 >
                                   <span>{opt}</span>
                                   {selectedOpt !== undefined && isThisCorrect && <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />}
                                 </button>
                               );
                            })}
                          </div>

                          {selectedOpt !== undefined && (
                            <motion.div 
                              initial={{ opacity: 0, y: 5 }}
                              animate={{ opacity: 1, y: 0 }}
                              className={`p-4 rounded-xl text-xs leading-relaxed border ${isCorrect ? "bg-emerald-50 text-emerald-700 border-emerald-200" : "bg-rose-50 text-rose-700 border-rose-200"}`}
                            >
                              <span className="font-bold block mb-1">{isCorrect ? "✨ Correct Answer!" : "❌ Incorrect Answer"}</span>
                              {q.explanation}
                            </motion.div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* 2.2 Interactive Debugging Sandbox */}
                <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-bold text-slate-800 uppercase tracking-widest flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4 text-amber-500" />
                      Lead's Debugging Exercise: {activeWeek.debugging.title}
                    </h3>
                    <span className="text-[10px] bg-rose-50 text-rose-700 border border-rose-200 px-2.5 py-0.5 rounded font-extrabold uppercase">
                      Identify & Repair
                    </span>
                  </div>
                  
                  <p className="text-xs text-slate-600">{activeWeek.debugging.description}</p>
                  
                  <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <span className="text-[10px] font-bold text-rose-750 uppercase tracking-wider block pl-1">🔴 Broken Code (Buggy Context)</span>
                      <pre className="p-4 bg-rose-50/50 border border-rose-100 rounded-2xl text-xs font-mono text-rose-900 overflow-x-auto">
                        <code>{activeWeek.debugging.brokenCode}</code>
                      </pre>
                    </div>
                    <div className="space-y-2">
                      <span className="text-[10px] font-bold text-emerald-750 uppercase tracking-wider block pl-1">🟢 Correct Fixed Code (Idiomatic Solution)</span>
                      <pre className="p-4 bg-emerald-50/50 border border-emerald-100 rounded-2xl text-xs font-mono text-emerald-900 overflow-x-auto">
                        <code>{activeWeek.debugging.fixedCode}</code>
                      </pre>
                    </div>
                  </div>

                  <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl text-xs leading-relaxed text-slate-600">
                    <span className="font-bold text-slate-800 block mb-1">Senior Technical Explanation:</span>
                    {activeWeek.debugging.explanation}
                  </div>
                </div>

                {/* 2.3 Refactoring Sandbox */}
                <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-bold text-slate-800 uppercase tracking-widest flex items-center gap-2">
                      <Code className="w-4 h-4 text-emerald-600" />
                      Refactoring Studio: {activeWeek.refactoring.title}
                    </h3>
                    <span className="text-[10px] bg-emerald-50 text-emerald-700 border border-emerald-200 px-2.5 py-0.5 rounded font-extrabold uppercase">
                      Clean up Smell
                    </span>
                  </div>
                  
                  <p className="text-xs text-slate-600">{activeWeek.refactoring.description}</p>
                  
                  <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block pl-1">❌ Smelly Boilerplate Code</span>
                      <pre className="p-4 bg-slate-50 border border-slate-200 rounded-2xl text-xs font-mono text-slate-600 overflow-x-auto">
                        <code>{activeWeek.refactoring.smellyCode}</code>
                      </pre>
                    </div>
                    <div className="space-y-2">
                      <span className="text-[10px] font-bold text-emerald-750 uppercase tracking-wider block pl-1">✨ Clean, Idiomatic Refactor</span>
                      <pre className="p-4 bg-emerald-50/50 border border-emerald-100 rounded-2xl text-xs font-mono text-emerald-900 overflow-x-auto">
                        <code>{activeWeek.refactoring.cleanCode}</code>
                      </pre>
                    </div>
                  </div>

                  <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl text-xs leading-relaxed text-slate-600">
                    <span className="font-bold text-slate-800 block mb-1">Refactoring Notes:</span>
                    {activeWeek.refactoring.explanation}
                  </div>
                </div>

              </motion.div>
            )}

            {/* 3. Portfolio Milestones Tab */}
            {activeTab === "portfolio" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                
                <div className="border-b border-slate-800/80 pb-4">
                  <span className="text-[10px] uppercase font-bold text-amber-700 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded tracking-wide">
                    Month {selectedMonthId} Capstone Project
                  </span>
                  <h2 className="text-xl font-extrabold text-slate-900 mt-1.5 tracking-tight">Active Portfolio Build</h2>
                </div>

                {/* Main Project Details */}
                <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-6 opacity-[0.03] pointer-events-none">
                    <Trophy className="w-48 h-48 text-slate-800" />
                  </div>
                  
                  <div className="space-y-5">
                    <div>
                      <h3 className="text-2xl font-black text-slate-900 tracking-tight">{activeMonth.portfolio.name}</h3>
                      <p className="text-sm font-bold text-emerald-600 mt-1">{activeMonth.portfolio.tagline}</p>
                      <p className="text-xs text-slate-600 mt-3 leading-relaxed max-w-3xl">{activeMonth.portfolio.description}</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-3">
                      
                      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 hover:border-slate-300/40 transition-all">
                        <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">Core Features to Implement</h4>
                        <ul className="space-y-2.5">
                          {activeMonth.portfolio.features.map((f, idx) => (
                            <li key={idx} className="text-xs text-slate-600 flex items-start gap-2">
                              <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                              <span>{f}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 hover:border-slate-300/40 transition-all">
                        <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">Recommended Tech Stack</h4>
                        <div className="flex flex-wrap gap-1.5">
                          {activeMonth.portfolio.techStack.map((tech, idx) => (
                            <span key={idx} className="text-[10px] font-extrabold text-slate-600 bg-white border border-slate-200 px-2.5 py-1 rounded-lg">
                              {tech}
                            </span>
                          ))}
                        </div>

                        <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mt-5 mb-3">Data Flow Diagram Architecture</h4>
                        <p className="text-xs text-slate-600 leading-normal bg-white p-3 rounded-xl border border-slate-200 font-mono">
                          {activeMonth.portfolio.diagramGuide}
                        </p>
                      </div>

                    </div>
                  </div>
                </div>

                {/* Interview Prep Flashcards */}
                <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                  <h3 className="text-sm font-bold text-slate-800 uppercase tracking-widest mb-5 flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-emerald-600" />
                    Month {selectedMonthId} Mock Interview Practice
                  </h3>

                  <div className="space-y-4">
                    {activeMonth.interviewPrep.map((qa, idx) => {
                      const qaKey = `qa-${selectedMonthId}-${idx}`;
                      const isRevealed = revealedFlashcards[qaKey];

                      return (
                        <div key={idx} className="bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-3 hover:border-slate-300/40 transition-colors">
                          <div className="flex items-start justify-between gap-4">
                            <h4 className="text-xs font-bold text-slate-800">
                              Q: {qa.question}
                            </h4>
                            <span className="text-[9px] bg-slate-100 text-slate-500 border border-slate-200 px-2.5 py-0.5 rounded font-extrabold uppercase">
                              {qa.category}
                            </span>
                          </div>

                          {isRevealed ? (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              className="text-xs leading-relaxed text-slate-600 bg-white p-4 rounded-xl border border-slate-200"
                            >
                              <strong className="text-emerald-700 block mb-1.5">Expert Response:</strong>
                              {qa.answer}
                            </motion.div>
                          ) : (
                            <button
                              onClick={() => setRevealedFlashcards(prev => ({ ...prev, [qaKey]: true }))}
                              className="px-4 py-1.5 bg-emerald-500 text-slate-950 hover:bg-emerald-600 rounded-lg text-[10px] font-bold uppercase tracking-wider transition-colors shadow-sm"
                            >
                              Reveal Answer
                            </button>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Self-Assessment Metrics */}
                <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                  <h3 className="text-sm font-bold text-slate-800 uppercase tracking-widest mb-5 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600" />
                    Interactive Comfort Self-Assessment
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {Object.keys(selfAssessment).map((key) => {
                      const value = selfAssessment[key];
                      return (
                        <div key={key} className="bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-3">
                          <div className="flex justify-between items-center text-xs font-bold uppercase tracking-wider text-slate-600">
                            <span>{key}</span>
                            <span className="text-emerald-600">{value}/5 Comfort</span>
                          </div>
                          
                          <div className="flex gap-2.5">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <button
                                key={star}
                                onClick={() => {
                                  setSelfAssessment(prev => ({ ...prev, [key]: star }));
                                }}
                                className="flex-1 py-1 flex items-center justify-center rounded-lg border border-slate-200 bg-white hover:bg-slate-100 transition-colors shadow-sm"
                              >
                                <Star className={`w-4 h-4 ${star <= value ? "text-amber-400 fill-amber-400" : "text-slate-300"}`} />
                              </button>
                            ))}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

              </motion.div>
            )}

            {/* 4. Graduation & Career Hub */}
            {activeTab === "career" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                
                <div className="border-b border-slate-200 pb-4">
                  <span className="text-[10px] uppercase font-bold text-emerald-750 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded tracking-wide">
                    Academy Graduation Portal
                  </span>
                  <h2 className="text-xl font-extrabold text-slate-900 mt-1.5 tracking-tight">Hiring Readiness & Resource Hub</h2>
                </div>

                {/* Job Probability Predictor */}
                <div className="bg-gradient-to-br from-indigo-50 via-slate-50 to-emerald-50/20 border border-indigo-100 rounded-2xl p-6 relative overflow-hidden shadow-sm">
                  <div className="absolute top-0 right-0 p-6 opacity-5 pointer-events-none">
                    <Award className="w-48 h-48 text-slate-800" />
                  </div>
                  
                  <div className="flex flex-col md:flex-row items-center gap-6">
                    <div className="relative w-36 h-36 shrink-0 flex items-center justify-center rounded-full bg-white border-4 border-indigo-200 shadow-sm">
                      <div className="text-center">
                        <span className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider">Hiring Odds</span>
                        <span className="text-3xl font-black text-emerald-600">{readinessPercentage}%</span>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <h3 className="text-lg font-black text-slate-900">Junior Android Position Readiness Predictor</h3>
                      <p className="text-xs text-slate-600 leading-relaxed">This predictive assessment calculates your current competitiveness based on syllabus hours logged, days finalized, self-comfort metrics, and mock project checks.</p>
                      <div className="pt-2 text-xs text-slate-500 flex flex-wrap gap-x-4 gap-y-1">
                        <span>• Complete all 120 Days: <strong className="text-emerald-600">{readinessPercentage >= 40 ? "Done" : "Pending"} (+40%)</strong></span>
                        <span>• Deliver 5 Capstones: <strong className="text-emerald-600">Pending (+40%)</strong></span>
                        <span>• Comfort score over 4.0: <strong className="text-emerald-600">Pending (+20%)</strong></span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Common Beginner Mistakes */}
                <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4">
                  <h3 className="text-sm font-bold text-slate-800 uppercase tracking-widest flex items-center gap-2">
                    <AlertTriangle className="w-4.5 h-4.5 text-rose-500" />
                    Top Beginner Mistakes to Evade
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-2 hover:border-rose-300/40 transition-all">
                      <span className="block text-xs font-bold text-rose-700 uppercase tracking-wide">1. Hardcoding Context references</span>
                      <p className="text-xs text-slate-600 leading-normal">Storing static or VM-level context variables of destroyed Activites triggers massive memory leaks. Always emit events or use Application context.</p>
                    </div>
                    <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-2 hover:border-rose-300/40 transition-all">
                      <span className="block text-xs font-bold text-rose-700 uppercase tracking-wide">2. Main Thread network blocking</span>
                      <p className="text-xs text-slate-600 leading-normal">Executing database inserts or API fetches on the main UI thread freezes screens, resulting in immediate app crashes (ANR). Always dispatch on background threads.</p>
                    </div>
                    <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-2 hover:border-rose-300/40 transition-all">
                      <span className="block text-xs font-bold text-rose-700 uppercase tracking-wide">3. Local State in recycled lists</span>
                      <p className="text-xs text-slate-600 leading-normal">Storing mutable checkbox states directly inside dynamic list composables. Recycling scroll rows will scramble entries. Always hoist list state.</p>
                    </div>
                    <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-2 hover:border-rose-300/40 transition-all">
                      <span className="block text-xs font-bold text-rose-700 uppercase tracking-wide">4. Hardcoding keys and secrets</span>
                      <p className="text-xs text-slate-600 leading-normal">Committing release keystores or OAuth password strings directly to source code graphs. Always secure configs via gradle properties.</p>
                    </div>
                  </div>
                </div>

                {/* Ultimate Reference Resource Guides */}
                <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4">
                  <h3 className="text-sm font-bold text-slate-800 uppercase tracking-widest flex items-center gap-2">
                    <BookMarked className="w-4.5 h-4.5 text-emerald-600" />
                    Lead Tech's Recommended Resources
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4.5">
                    
                    <div className="space-y-2.5">
                      <h4 className="text-xs font-bold text-slate-800 border-b border-slate-200 pb-1.5 uppercase tracking-wide">Highly Recommended Books</h4>
                      <ul className="space-y-1 text-xs text-slate-600">
                        <li>• <em className="text-slate-800 font-medium">Kotlin in Action</em> - Dmitry Jemerov</li>
                        <li>• <em className="text-slate-800 font-medium">Clean Code</em> - Robert C. Martin</li>
                        <li>• <em className="text-slate-800 font-medium">Effective Java</em> - Joshua Bloch</li>
                        <li>• <em className="text-slate-800 font-medium">Clean Architecture</em> - Robert C. Martin</li>
                      </ul>
                    </div>

                    <div className="space-y-2.5">
                      <h4 className="text-xs font-bold text-slate-800 border-b border-slate-200 pb-1.5 uppercase tracking-wide">Highly Recommended Creators</h4>
                      <ul className="space-y-1 text-xs text-slate-600">
                        <li>• Philipp Lackner (YouTube)</li>
                        <li>• Stevdza-San (YouTube)</li>
                        <li>• CodingWithMitch (YouTube)</li>
                        <li>• Android Developers (Official channel)</li>
                      </ul>
                    </div>

                    <div className="space-y-2.5">
                      <h4 className="text-xs font-bold text-slate-800 border-b border-slate-200 pb-1.5 uppercase tracking-wide">Must-Follow Blogs & repos</h4>
                      <ul className="space-y-1 text-xs text-slate-600">
                        <li>• Official Android Developers Blog</li>
                        <li>• ProAndroidDev (Medium community)</li>
                        <li>• android/nowinandroid (Official GitHub Repo)</li>
                        <li>• Kt. Academy (Kotlin blogs)</li>
                      </ul>
                    </div>

                  </div>
                </div>

              </motion.div>
            )}

          </div>

        </section>

      </main>

    </div>
  );
}
