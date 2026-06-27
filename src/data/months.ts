import { Month, PortfolioProject, InterviewQA } from "./types";

export const PORTFOLIO_PROJECTS: Record<number, PortfolioProject> = {
  1: {
    name: "TaskFlow Notes",
    tagline: "Multi-Screen Task Manager & Note-Taking App",
    description: "A fully local productivity application designed to test state hoisted Jetpack Compose, multiple view contracts, clean navigation-compose parameters, and basic viewModels.",
    architecture: "MVVM with Local State Hoisting, Single Activity Architecture.",
    features: [
      "Dynamic task status toggling with fade-out animations",
      "Categorized sticky notes with dynamic Material 3 color cards",
      "Robust input validation with user-friendly snackbars",
      "Search and sort capabilities (date, category, priority)"
    ],
    techStack: ["Kotlin", "Jetpack Compose", "Material 3", "Navigation Compose", "Lifecycle ViewModel"],
    diagramGuide: "UI Layer (Compose Screens) -> Navigation Controller -> ViewModels -> Local Repository -> In-Memory Cache.",
    improvements: ["Room persistent caching", "Shared transitions on open note", "Trash bin folder functionality"]
  },
  2: {
    name: "LedgerZen Tracker",
    tagline: "Offline-First Expense & Finance Tracker",
    description: "A high-performance offline finance companion practicing local databases, reactive streams using Flow, custom state propagation, and physical persistence.",
    architecture: "Clean Architecture (Data-Domain-Presentation layers), Repository Pattern with single source of truth.",
    features: [
      "Offline transactional record creation, deletion, and search",
      "Dynamic data aggregation grouping ledger streams by category",
      "Encrypted Datastore settings keeping localized currency preferences secured",
      "Reactive streams (StateFlow) updating transactions instantly across tabs"
    ],
    techStack: ["Kotlin", "Jetpack Compose", "Room Database", "DataStore Preferences", "Coroutines Flow"],
    diagramGuide: "Presentation (Compose + ViewModel) -> Domain (Use Cases/Repository Interface) -> Data (Repository Implementation + Room DAO + DataStore).",
    improvements: ["Interactive charts utilizing custom Canvas API", "CSV export background worker", "Monthly threshold notifications"]
  },
  3: {
    name: "ChefChef Companion",
    tagline: "REST API Smart Recipe Finder",
    description: "An API-driven meal search app teaching Retrofit network request processing, asynchronous response states, loading indicators, dependency injection with Hilt, and scheduled synchronization.",
    architecture: "MVVM, SOLID clean API modules, Repository pattern with Room/Retrofit caching.",
    features: [
      "Live search over remote recipe APIs with debounce operators",
      "Dependency injected network clients ensuring unified singletons",
      "WorkManager job syncing recommended daily diets in background",
      "Local recipe bookmark folder cache showing favorites offline"
    ],
    techStack: ["Kotlin", "Jetpack Compose", "Retrofit", "Hilt Dependency Injection", "WorkManager", "Coil"],
    diagramGuide: "UI -> ViewModel (Hilt-injected) -> Repository -> Retrofit API Client (Remote) + Room DB (Local Cached Favorities).",
    improvements: ["Offline pagination caching with Room PagingSource", "Step-by-step interactive cooking timer", "Ingredient shopping list generator"]
  },
  4: {
    name: "SyncBoard Collaborative Workspace",
    tagline: "Real-time Firebase Collaboration Portal",
    description: "A full cloud-integrated real-time dashboard exercising Firebase Authenticated credentials, Firestore live collections, and active device notifications.",
    architecture: "Full-stack client architecture linked directly to Firebase Firestore, Auth, and Cloud Storage.",
    features: [
      "Email and password authenticated profiles with verification loops",
      "Real-time synchronized boards reflecting remote updates instantly",
      "Active profile custom image uploading stored on cloud storage",
      "Rich notification banners handling Firestore document triggers"
    ],
    techStack: ["Kotlin", "Compose Animations", "Firebase Auth", "Firestore Real-time DB", "Firebase Cloud Storage", "Firebase Cloud Messaging"],
    diagramGuide: "Presentation Layer -> Firebase Auth / Firestore Client SDK -> Remote Cloud Containers -> Push Notification Trigger Servers.",
    improvements: ["Full offline sync with Firestore offline persistence enablement", "Direct group chat rooms", "Task activity audit log streams"]
  },
  5: {
    name: "MyFitTracker Capstone",
    tagline: "Full-scale Offline-First Analytics Platform",
    description: "An enterprise-grade fitness metrics journal incorporating the entire core Jetpack library suite, complete unit testing suites, mock API drivers, and custom visualization components.",
    architecture: "Multi-module Clean Architecture (Domain, Data, App, Core), Repository pattern, full offline-first cache sync.",
    features: [
      "Comprehensive test coverage checking ViewModels, Repositories, Use Cases, and Compose elements",
      "Live sensor tracking mimicking custom hardware data inputs",
      "Advanced customized dashboards displaying user progress diagrams",
      "Automatic data backups running via WorkManager sync routines"
    ],
    techStack: ["Kotlin", "Room DB", "Hilt DI", "WorkManager", "JUnit 5 & Mockito", "Compose UI Testing", "Coroutines Test Dispatchers"],
    diagramGuide: "Presentation Modules -> Core Domain -> Local Persistence Modules + Mock Server API modules -> Unit and UI Test Suites.",
    improvements: ["WearOS companion integration", "Google Fit API sync integration", "Machine learning workout recommendations"]
  }
};

export const MONTH_DATA: Omit<Month, "weeks">[] = [
  {
    id: 1,
    title: "Kotlin Fundamentals & Modern Android UI",
    focus: "Mastering Kotlin syntax, Object-Oriented Principles, and declarative UI building using Jetpack Compose & Material 3.",
    portfolio: PORTFOLIO_PROJECTS[1],
    reviewChecklist: [
      "Write idiomatic Kotlin code avoiding Java patterns (use let/also/apply, smart casts)",
      "Ensure all UI state in Jetpack Compose is hoisted correctly to prevent side effects",
      "Implement deep Material 3 theme configurations with color schemes and typography",
      "Use dynamic list loading with lazy composables (LazyColumn, LazyRow) and proper Keys",
      "Configure Navigation Compose to pass basic and complex arguments safely between screens"
    ],
    interviewPrep: [
      {
        category: "Kotlin",
        question: "What is the difference between val and const val in Kotlin?",
        answer: "val is a read-only variable whose value is determined at runtime. It can be assigned once. const val is a compile-time constant, meaning its value must be known at compile-time and can only be declared at top-level or inside object declarations of primitive types or Strings."
      },
      {
        category: "Kotlin",
        question: "Explain Kotlin null safety and the double-bang (!!) operator.",
        answer: "Kotlin uses a type system that distinguishes between nullable and non-nullable types. This helps prevent NullPointerExceptions. The safe-call operator (?.) evaluates to null if the object is null. The Elvis operator (?:) provides a default. The double-bang (!!) forcibly casts a nullable value to a non-nullable type, throwing a NullPointerException if it is indeed null; it should be avoided in production."
      },
      {
        category: "Compose",
        question: "What is Recomposition in Jetpack Compose and how does it optimize UI renders?",
        answer: "Recomposition is the process of calling a composable function again when its inputs change. Compose optimizes this by running smart recomposition: only compiling components whose inputs changed, and skipping unchanged nodes entirely. Composable inputs should be immutable or wrapped in State to allow efficient change detection."
      }
    ]
  },
  {
    id: 2,
    title: "Reactive Streams, Persistence & Clean Architecture",
    focus: "Asynchronous background programming with Coroutines, reactive streaming with Kotlin Flows, and offline caching with Room Database.",
    portfolio: PORTFOLIO_PROJECTS[2],
    reviewChecklist: [
      "Never block the Main Thread (UI thread). Ensure non-UI workloads run on Dispatchers.IO or Dispatchers.Default",
      "Leverage flowWithLifecycle or collectAsStateWithLifecycle to consume stream flows in Compose safely",
      "Ensure Room database queries execute on background threads and return Flow streams for reactive updates",
      "Abstract database access behind a clean Repository interface in the domain layer",
      "Keep UI state unified in a single immutable StateFlow inside the ViewModel"
    ],
    interviewPrep: [
      {
        category: "Coroutines",
        question: "What is the difference between Dispatchers.Main, Dispatchers.IO, and Dispatchers.Default?",
        answer: "Dispatchers.Main executes on the UI thread for lightweight rendering/interactions. Dispatchers.IO is optimized for disk or network I/O operations (file reading, networking, databases) using an elastic thread pool. Dispatchers.Default is optimized for CPU-heavy computation (parsing large lists, image rendering, mathematical algorithms) and scales according to CPU cores."
      },
      {
        category: "Coroutines",
        question: "What is the difference between StateFlow and SharedFlow?",
        answer: "StateFlow is a state-holder observable flow that holds a single current value and emits it to new subscribers immediately (like LiveData). It requires an initial value. SharedFlow is a hot stream that emits events to active subscribers. It does not hold a current value (unless replay is configured) and is ideal for one-off events like snackbar messages, navigation, or dialog triggers."
      },
      {
        category: "Architecture",
        question: "Explain the Repository Pattern and its benefits in Android application design.",
        answer: "The Repository Pattern acts as an abstraction layer between the data sources (API endpoints, Local Room Database, DataStore preferences) and the domain/business logic. It provides a clean, single point of data access, handles data caching strategies (like network fallback to disk), and facilitates robust mocking for unit testing."
      }
    ]
  },
  {
    id: 3,
    title: "Networking, Dependency Injection & Modern Tooling",
    focus: "Consuming REST APIs with Retrofit/OkHttp, structuring decoupled apps with Hilt DI, and implementing periodic background operations with WorkManager.",
    portfolio: PORTFOLIO_PROJECTS[3],
    reviewChecklist: [
      "Use custom HTTP interceptors to log payloads, inject authorization headers, and handle network-level errors",
      "Avoid manual dependency injection. Leverage Hilt with proper module scopes (@Singleton, @ActivityScoped, @ViewModelScoped)",
      "Handle WorkManager constraints (charging, unmetered network) properly so background jobs do not drain user batteries",
      "Verify code compliance with the SOLID principles (especially Single Responsibility and Dependency Inversion)",
      "Always parse JSON streams using Kotlinx.Serialization or Moshi with compile-safe model mapping"
    ],
    interviewPrep: [
      {
        category: "Architecture",
        question: "What are SOLID principles and why are they vital for scalable Android applications?",
        answer: "SOLID consists of: 1) Single Responsibility (a class has one reason to change), 2) Open/Closed (classes open for extension, closed for modification), 3) Liskov Substitution (derived classes substitutable for base classes), 4) Interface Segregation (small specific interfaces), 5) Dependency Inversion (depend on abstractions, not concretions). They prevent spaghetti code, decrease module coupling, and allow painless testability."
      },
      {
        category: "Architecture",
        question: "What is Dependency Injection and why is Hilt preferred over manual DI in Android?",
        answer: "DI is a design pattern where objects receive their dependencies from external sources rather than creating them. Hilt is Google's opinionated DI library built on top of Dagger. It automates boilerplate setup by generating lifecycle-aware containers for standard Android classes (Activities, ViewModels, Fragments, Services), guaranteeing compile-time safety and painless test mocking."
      },
      {
        category: "Architecture",
        question: "When should you use WorkManager over standard Coroutines or Handler threads?",
        answer: "Use WorkManager for tasks that must be guaranteed to run, even if the user exits the app, locks the device, or the OS restarts the container (e.g., uploading files, syncing data backups). Standard Coroutines are meant for transient, immediate, lifecycle-scoped tasks that die when the current screen or app scope closes."
      }
    ]
  },
  {
    id: 4,
    title: "Cloud Databases, Security & Performance Diagnostics",
    focus: "Connecting applications to Firebase Auth/Firestore/Storage, debugging performance leaks, and mastering animations in Compose.",
    portfolio: PORTFOLIO_PROJECTS[4],
    reviewChecklist: [
      "Write secure Firestore Rules to prevent anonymous data read/writes to other users' directories",
      "Implement user profile picture caching in local memory using Coil with smart request sizing",
      "Profile the application using Android Studio Profiler checking for memory growth and CPU spikes",
      "Avoid memory leaks by detaching listeners, cancelling global coroutine scopes, and avoiding static context storage",
      "Leverage custom Compose transition animations to make navigation movements smooth and responsive"
    ],
    interviewPrep: [
      {
        category: "Architecture",
        question: "What is a Memory Leak in Android, and how do you diagnose and prevent it?",
        answer: "A memory leak occurs when the Garbage Collector cannot reclaim memory allocated to unused objects because they are still held by active references. Common culprits are storing static context references, not canceling coroutine jobs, or leaking handlers. Diagnosis is done using LeakCanary or the Android Studio Memory Profiler. Prevent it by using lifecycle-aware components, weak references, and clean resource teardown."
      },
      {
        category: "Compose",
        question: "How do you achieve smooth transitions and performance optimizations with Animations in Jetpack Compose?",
        answer: "Use animate*AsState for simple value transitions, AnimatedVisibility for simple entering/exiting layout nodes, and updateTransition or rememberInfiniteTransition for multi-state parallel properties. For performance, ensure animation targets do not cause extensive recompositions of their parent nodes by using draw modifiers or lambda parameters where values update frequently."
      }
    ]
  },
  {
    id: 5,
    title: "Testing, Play Store Publishing & Career Readiness",
    focus: "Writing comprehensive unit and UI tests, setting up basic CI/CD, polishing portfolio projects, and simulating technical interviews.",
    portfolio: PORTFOLIO_PROJECTS[5],
    reviewChecklist: [
      "Aim for high coverage on core Business Logic, checking all ViewModel state logic, Repository caches, and Use Cases",
      "Mockito mock objects correctly and avoid using production networks or databases in automated tests",
      "Ensure all UI tests run consistently by stabilizing asynchronous coroutine dispatchers using TestDispatchers",
      "Audit all portfolio project repositories to ensure clear, high-quality README files with screenshots",
      "Resolve any Proguard/R8 obfuscation warnings before compiling the final production-ready AAB file"
    ],
    interviewPrep: [
      {
        category: "Testing",
        question: "Explain the difference between Unit Tests, Integration Tests, and UI Tests in Android.",
        answer: "Unit Tests target individual classes (ViewModels, Repositories) in isolation on the local JVM (extremely fast, uses mock environments). Integration Tests verify multiple cooperating classes or modules. UI Tests (Espresso or Compose UI Tests) run on real devices/emulators to verify pixel-level user interactions and layouts (slower, requires Android instrumentation runner)."
      },
      {
        category: "Testing",
        question: "How do you test Kotlin Coroutines and asynchronous flows in ViewModels?",
        answer: "To test coroutines, you replace the default main dispatcher with a TestDispatcher (like StandardTestDispatcher or UnconfinedTestDispatcher) using Dispatchers.setMain. You run tests inside runTest which automatically skips delays, allowing fast, deterministic testing of asynchronous execution and flow emissions."
      }
    ]
  }
];
