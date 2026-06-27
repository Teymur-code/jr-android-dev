import { Week } from "./types";

export const WEEKS_11_20: Week[] = [
  {
    id: 11,
    theme: "Dependency Injection with Hilt",
    focus: "DI concepts, @Inject, Hilt modules, @Provides, @Binds, ViewModel injection, and Custom scopes.",
    days: [
      {
        id: 61,
        title: "Day 61: DI Concepts & Hilt Basics",
        focus: "What is DI, why Hilt, configuring @HiltAndroidApp, @AndroidEntryPoint annotations.",
        theory: "Learn why Dependency Injection decouples your architecture. Understand how Hilt simplifies DI setup by automatically managing object lifecycles, and how it reduces test mocking boilerplate.",
        practice: "Configure an Application class with @HiltAndroidApp and annotate your MainActivity with @AndroidEntryPoint.",
        homework: "Integrate Hilt into an existing app, verifying compile-time graph validation succeeds without runtime crashes.",
        miniChallenge: "Differentiate between compiler errors vs runtime crashes when injection targets are missing.",
        outcome: "You will configure dependency injection entry points in your Android applications.",
        readTopic: "Android Developers: Hilt Basics",
        watchTopic: "Hilt Dependency Injection for Beginners - Philipp Lackner",
        duration: "6-8 Hours"
      },
      {
        id: 62,
        title: "Day 62: Constructor Injection with @Inject",
        focus: "Injecting variables directly into class constructors, configuring ViewModels with @HiltViewModel.",
        theory: "Learn how to use @Inject to tell Hilt how to create instances of your classes. Master constructor injection for classes you own, and annotate ViewModels with @HiltViewModel for automatic factory generation.",
        practice: "Create a 'UserRepository' class and constructor-inject it directly into a custom 'UserViewModel'.",
        homework: "Build a complete Hilt-injected TaskManager application where repositories are injected into ViewModels seamlessly.",
        miniChallenge: "Verify that Hilt injected ViewModels survive orientation changes without manual factory configurations.",
        outcome: "You will constructor-inject dependencies directly into ViewModels and repositories.",
        readTopic: "Android Developers: Inject Dependencies with Hilt",
        watchTopic: "Hilt Constructor Injection Tutorial - Stevdza-San",
        duration: "6-8 Hours"
      },
      {
        id: 63,
        title: "Day 63: Hilt Modules & @Provides",
        focus: "Injecting classes you do not own (Retrofit, Room), declaring @Module, @InstallIn.",
        theory: "You cannot constructor-inject classes from external libraries (like Retrofit or Room). Learn how to write Hilt Modules using @Provides to configure and inject external singletons.",
        practice: "Create a 'NetworkModule' using @Provides to provide a singleton OkHttpClient and Retrofit client instance.",
        homework: "Build a 'DatabaseModule' using @Provides to provide thread-safe Room Database instances and DAOs programmatically.",
        miniChallenge: "Differentiate between injecting classes using @Provides vs @Binds for abstract classes.",
        outcome: "You will configure and inject external libraries using Hilt Modules.",
        readTopic: "Android Developers: Hilt Modules",
        watchTopic: "Hilt Modules and Provides - Philipp Lackner",
        duration: "6-8 Hours"
      },
      {
        id: 64,
        title: "Day 64: Abstract Bindings with @Binds & Qualifiers",
        focus: "Injecting interfaces instead of concrete classes, configuring @Qualifier for duplicate types.",
        theory: "To follow Dependency Inversion, you must depend on interfaces. Learn how @Binds maps interfaces to their concrete implementations. Learn @Qualifier to differentiate between duplicate provided types (e.g., Auth vs Guest OkHttp clients).",
        practice: "Use @Binds to inject a 'TaskRepository' interface mapped to 'TaskRepositoryImpl'. Create custom qualifiers.",
        homework: "Build a modular payment system where 'CreditCard' and 'PayPal' gateways are resolved via custom qualifiers.",
        miniChallenge: "Inject two distinct strings into a single constructor using custom Qualifiers.",
        outcome: "You will inject decoupled interfaces and handle duplicate type providers cleanly.",
        readTopic: "Android Developers: Hilt Binds & Qualifiers",
        watchTopic: "Hilt Binds and Qualifiers Deep Dive - CodingWithMitch",
        duration: "6-8 Hours"
      },
      {
        id: 65,
        title: "Day 65: Hilt Scopes & Lifecycles",
        focus: "SingletonComponent, ActivityRetainedComponent, ViewModelComponent, managing memory.",
        theory: "Hilt ties injected objects to Android lifecycles using components. Master scopes like @Singleton, @ActivityScoped, and @ViewModelScoped. Understand how incorrect scopes waste RAM or trigger leaks.",
        practice: "Verify memory allocations by configuring different scope annotations on database clients.",
        homework: "Build a user profile session tracker. Ensure the session state is scoped to @ActivityRetainedScoped to survive rotations.",
        miniChallenge: "Explain why annotating a Retrofit service as @ActivityScoped instead of @Singleton is a bad architectural practice.",
        outcome: "You will manage dependency scopes and lifecycles to optimize RAM usage.",
        readTopic: "Android Developers: Hilt Scopes",
        watchTopic: "Hilt Scopes and Lifecycles Explained - Philipp Lackner",
        duration: "6-8 Hours"
      },
      {
        id: 66,
        title: "Day 66: Hilt Testing & Custom Initializations",
        focus: "Setting up HiltTestRule, mocking injected elements inside automated tests.",
        theory: "Learn why dependency injection makes testing incredibly easy. Understand how HiltTestRule replaces production modules with mock dependencies during integration and UI testing.",
        practice: "Write an automated JVM test that replaces a Hilt-provided Retrofit module with a MockWebServer.",
        homework: "Write a complete test class for a ViewModel, injecting a mocked repository using Hilt.",
        miniChallenge: "Disable Hilt entry points for a specific unit test to isolate standard JUnit class checks.",
        outcome: "You will mock injected classes easily during automated testing.",
        readTopic: "Android Developers: Testing with Hilt",
        watchTopic: "Hilt Unit Testing Guide - Philipp Lackner",
        duration: "6-8 Hours"
      }
    ],
    checkpoint: "Confirm you understand constructor injection, providing external libraries with modules, binding interfaces, Qualifiers, and Hilt lifecycles.",
    quiz: [
      {
        question: "Which annotation is required on the Application class to initialize Hilt globally?",
        options: ["@HiltAndroidApp", "@AndroidEntryPoint", "@Module", "@Singleton"],
        correctIndex: 0,
        explanation: "@HiltAndroidApp is required on the application class. It triggers Hilt's code generation, creating the singleton dependency graph."
      },
      {
        question: "How do you provide dependencies for classes you do NOT own, such as Retrofit, inside a Hilt module?",
        options: ["Using the @Inject constructor keyword.", "Annotating a provider function with @Provides within an @InstallIn module.", "Annotating with @Binds on abstract methods.", "You cannot inject third-party classes."],
        correctIndex: 1,
        explanation: "Since you cannot add constructor annotations to third-party classes, you must use a Hilt module and annotate provider functions with @Provides."
      },
      {
        question: "What is the purpose of custom @Qualifier annotations in Hilt?",
        options: ["To speed up app compilation.", "To distinguish between multiple providers of the exact same type, such as different OkHttpClient configurations.", "To configure the local database.", "To implement animations."],
        correctIndex: 1,
        explanation: "Qualifiers act as custom tags that tell Hilt which specific dependency to inject when there are multiple providers of the same type."
      }
    ],
    debugging: {
      title: "The Cyclic Dependency Crash",
      description: "A student tried to initialize a complex graph, but compilation fails with a 'Cyclic dependency' error.",
      brokenCode: `class ClassA @Inject constructor(val classB: ClassB)
class ClassB @Inject constructor(val classA: ClassA)
// Injects ClassA into ClassB, and ClassB into ClassA!`,
      fixedCode: `class ClassA @Inject constructor(val classB: ClassB)
class ClassB @Inject constructor() // Break the cycle by decoupling operations`,
      explanation: "Cyclic dependencies occur when class dependencies reference each other in a loop, preventing Hilt from initializing the graph. Resolving the cycle by decoupling operations is the only fix."
    },
    refactoring: {
      title: "Decoupling Interface Injections",
      description: "Injecting concrete repository implementations directly into ViewModels, violating Dependency Inversion.",
      smellyCode: `class TaskViewModel @Inject constructor(
    private val repository: TaskRepositoryImpl // Tightly coupled!
) : ViewModel()`,
      cleanCode: `interface TaskRepository // Decoupled interface in Domain layer

class TaskRepositoryImpl @Inject constructor() : TaskRepository // Data layer

class TaskViewModel @Inject constructor(
    private val repository: TaskRepository // Injects interface!
) : ViewModel()`,
      explanation: "Injecting the Repository interface instead of its concrete implementation decouples your layers. This allows you to easily swap implementations (e.g., using mock repositories for testing)."
    }
  },
  {
    id: 12,
    theme: "WorkManager & Background Tasks",
    focus: "Background execution limits, Worker, PeriodicWorkRequest, Constraints, and Notification integration.",
    days: [
      {
        id: 67,
        title: "Day 67: Background Execution & WorkManager",
        focus: "Android background limitations, introduction to WorkManager, Worker class.",
        theory: "Android restricts background services to save battery. Learn how WorkManager executes deferred background tasks reliably, surviving app exits and system restarts.",
        practice: "Create a basic 'DatabaseSyncWorker' that extends 'CoroutineWorker' and runs a background log task.",
        homework: "Build a backup coordinator task that compresses local folders in the background safely.",
        miniChallenge: "Verify how background tasks continue executing even after swiping the app out of recent tasks.",
        outcome: "You will understand background restrictions and implement basic Workers.",
        readTopic: "Android Developers: WorkManager Guide",
        watchTopic: "WorkManager Tutorial for Beginners - Philipp Lackner",
        duration: "6-8 Hours"
      },
      {
        id: 68,
        title: "Day 68: WorkManager Constraints",
        focus: "Configuring battery, charging, and network constraints, scheduling WorkRequests.",
        theory: "To respect user resources, WorkManager lets you define execution constraints. Learn to schedule work only when the device is charging, idle, or connected to unmetered Wi-Fi.",
        practice: "Configure a 'OneTimeWorkRequest' with network constraints requiring Wi-Fi connection.",
        homework: "Build an offline sync system that schedules file downloads only when the device is charging and connected to unmetered Wi-Fi.",
        miniChallenge: "Simulate charging and network states on an emulator to verify delayed worker execution.",
        outcome: "You will respect user devices by applying precise execution constraints.",
        readTopic: "Android Developers: WorkManager Constraints",
        watchTopic: "WorkManager Constraints - Stevdza-San",
        duration: "6-8 Hours"
      },
      {
        id: 69,
        title: "Day 69: Periodic Work Requests & Retries",
        focus: "Periodic scheduling limitations, minimum intervals, and backoff policies.",
        theory: "Periodic tasks repeat at intervals. Learn WorkManager's minimum periodic interval constraint (15 minutes). Master backoff policies (linear or exponential) for retrying failed workers.",
        practice: "Configure a 'PeriodicWorkRequest' that runs a clean-up task every 24 hours, with exponential retry backoff.",
        homework: "Build an automated cache manager that triggers every 30 minutes, deleting files older than 3 days.",
        miniChallenge: "Verify why setting a periodic interval of 5 minutes automatically defaults to 15 minutes.",
        outcome: "You will schedule repeating background tasks with robust retry logic.",
        readTopic: "Android Developers: Periodic Work Requests",
        watchTopic: "WorkManager Periodic Requests - CodingWithMitch",
        duration: "6-8 Hours"
      },
      {
        id: 70,
        title: "Day 70: WorkManager Input & Output Data",
        focus: "Passing arguments, parsing output payloads, chain execution data flows.",
        theory: "Workers can accept input parameters and return output results via key-value Data blocks. Understand data size limitations (10KB) and how to extract data within Workers.",
        practice: "Pass a file path string to a Worker, process it, and return a Success result with the output file URL.",
        homework: "Build a background image filter. Pass raw image URLs, apply a filter, and return the modified image path.",
        miniChallenge: "Combine multiple input data maps inside a chained worker pipeline.",
        outcome: "You will pass data safely to and from background tasks.",
        readTopic: "Android Developers: WorkManager Input/Output",
        watchTopic: "Passing Data in WorkManager - Stevdza-San",
        duration: "6-8 Hours"
      },
      {
        id: 71,
        title: "Day 71: Chaining Work Requests",
        focus: "Sequential execution chains, parallel executions, and input merging.",
        theory: "Chaining lets you run complex multi-step background pipelines. Learn to execute tasks sequentially (e.g., download -> filter -> upload) or in parallel, utilizing InputMergers.",
        practice: "Chain three workers sequentially (FetchData -> ProcessData -> SaveToLocal) using 'beginWith()' and 'then()'.",
        homework: "Build a bulk file processing pipeline that downloads 3 files in parallel, merges them, and uploads the final archive.",
        miniChallenge: "Cancel an entire execution chain programmatically when the user cancels the operation.",
        outcome: "You will design complex, multi-step asynchronous background pipelines.",
        readTopic: "Android Developers: Chained Work Requests",
        watchTopic: "Chaining Tasks in WorkManager - Philipp Lackner",
        duration: "6-8 Hours"
      },
      {
        id: 72,
        title: "Day 72: WorkManager & Foreground Notifications",
        focus: "Long-running tasks, setting up ForegroundInfo, managing notifications.",
        theory: "Tasks running longer than 10 minutes are killed by the OS. Learn to run long-running tasks as Foreground Services using 'setForegroundInfo()' to display active notifications.",
        practice: "Update your SyncWorker to run as a Foreground Service, displaying an active download progress notification.",
        homework: "Build a large file downloader that displays a live progress notification to the user in real-time.",
        miniChallenge: "Gracefully stop a foreground worker when the user clicks 'Cancel' on the active notification.",
        outcome: "You will execute long-running background tasks safely with foreground notifications.",
        readTopic: "Android Developers: Long-running workers",
        watchTopic: "WorkManager Foreground Services - Philipp Lackner",
        duration: "6-8 Hours"
      }
    ],
    checkpoint: "Confirm you understand CoroutineWorker, applying constraints, periodic intervals, input/output data passing, task chaining, and foreground services.",
    quiz: [
      {
        question: "What is the absolute minimum interval allowed for PeriodicWorkRequests in WorkManager?",
        options: ["1 minute", "5 minutes", "15 minutes", "1 hour"],
        correctIndex: 2,
        explanation: "To preserve battery, Android enforces a minimum periodic work interval of 15 minutes. Any values lower than 15 minutes are automatically forced to 15."
      },
      {
        question: "How do you pass a file path string to a Worker?",
        options: ["Store it in a global static variable.", "Pass it as a parameter in the Worker constructor.", "Use the Data builder to put the string into the WorkRequest's input data.", "You cannot pass parameters to Workers."],
        correctIndex: 2,
        explanation: "You pass parameters by putting key-value pairs into a Data object using the 'Data.Builder', which is set on the WorkRequest."
      },
      {
        question: "Which WorkManager method is required to run a long-running Worker as a Foreground Service?",
        options: ["startForeground()", "setForegroundInfo()", "runAsService()", "bindService()"],
        correctIndex: 1,
        explanation: "Inside a CoroutineWorker, you call 'setForegroundInfo()' to display an active notification, indicating it is running as a Foreground Service."
      }
    ],
    debugging: {
      title: "The Oversized Data Crash",
      description: "A student tried to pass a massive high-resolution bitmap (converted to a byte-array) as input to their Worker, causing an immediate crash.",
      brokenCode: `val data = workDataOf("bitmap_bytes" to bitmapByteArray)
val request = OneTimeWorkRequestBuilder<UploadWorker>()
    .setInputData(data)
    .build()`,
      fixedCode: `// Save the bitmap to a temp file and pass the URI string instead!
val fileUri = saveBitmapToTempFile(bitmap)
val data = workDataOf("bitmap_uri" to fileUri.toString())
val request = OneTimeWorkRequestBuilder<UploadWorker>()
    .setInputData(data)
    .build()`,
      explanation: "WorkManager limits input/output Data payloads to 10KB. Trying to pass large objects (like images) directly will throw an exception. The solution is to save the object to disk and pass its file path or URI instead."
    },
    refactoring: {
      title: "Consolidating Background Syncs",
      description: "Creating custom background threads manually inside the Activity, which halts immediately when the user exits the app.",
      smellyCode: `fun triggerDatabaseBackup() {
    Thread {
        val data = database.exportData()
        networkApi.uploadBackup(data) // Dies if user exits the app!
    }.start()
}`,
      cleanCode: `fun triggerDatabaseBackup() {
    val constraints = Constraints.Builder()
        .setRequiredNetworkType(NetworkType.UNMETERED)
        .build()

    val request = OneTimeWorkRequestBuilder<BackupWorker>()
        .setConstraints(constraints)
        .build()

    WorkManager.getInstance(context).enqueue(request)
}`,
      explanation: "Replacing manual background threads with WorkManager ensures tasks are guaranteed to execute, even if the user exits the app, locks the device, or the system restarts."
    }
  },
  {
    id: 13,
    theme: "SOLID Principles & Clean Code Best Practices",
    focus: "Refactoring legacy code, applying SOLID principles, DRY, KISS, and code architecture review.",
    days: [
      {
        id: 73,
        title: "Day 73: Single Responsibility Principle (SRP)",
        focus: "Analyzing bloated classes, splitting presentation, logic, and network targets.",
        theory: "A class should have one, and only one, reason to change. Learn how to identify bloated classes and split them into small, cohesive units with single responsibilities.",
        practice: "Refactor a bloated 'Activity' that handles UI rendering, SQL database writes, and network calls into separate classes.",
        homework: "Refactor a bloated manager class by extracting its logging, formatting, and file I/O operations into distinct helpers.",
        miniChallenge: "Split a single function that both validates user input and registers accounts into two distinct functions.",
        outcome: "You will write highly focused, maintainable classes with single responsibilities.",
        readTopic: "SOLID: Single Responsibility Principle Explained",
        watchTopic: "SRP in Android - Philipp Lackner",
        duration: "6-8 Hours"
      },
      {
        id: 74,
        title: "Day 74: Open/Closed Principle (OCP)",
        focus: "Designing classes open for extension but closed for modification.",
        theory: "Classes should be open for extension but closed for modification. Master the use of interfaces and abstractions to add new behaviors without modifying existing source code.",
        practice: "Refactor an invoice processor that uses 'if/else' checks for different tax calculations, replacing them with a polymorphic strategy interface.",
        homework: "Design a notification dispatcher that supports Email, SMS, and Push channels without modifying the core dispatcher class.",
        miniChallenge: "Add a new payment type to an existing processor class without changing any lines inside the processor.",
        outcome: "You will build extensible architectures that adapt to changing requirements with zero modifications to existing code.",
        readTopic: "SOLID: Open/Closed Principle Guide",
        watchTopic: "Open Closed Principle on Android - Philipp Lackner",
        duration: "6-8 Hours"
      },
      {
        id: 75,
        title: "Day 75: Liskov Substitution Principle (LSP)",
        focus: "Designing subclasses that can be substituted for their base classes without breaking behavior.",
        theory: "Subclasses must be substitutable for their base classes without altering program correctness. Learn to avoid subclassing when child classes cannot support base operations.",
        practice: "Identify and refactor an inheritance structure that throws UnsupportedOperationException in a subclass.",
        homework: "Refactor a base class 'WritableStorage' that fails when subclassed as a read-only container.",
        miniChallenge: "Refactor a class hierarchy where a child class violates the base contract.",
        outcome: "You will design reliable class hierarchies that preserve base contracts.",
        readTopic: "SOLID: Liskov Substitution Principle",
        watchTopic: "Liskov Substitution Principle on Android - Philipp Lackner",
        duration: "6-8 Hours"
      },
      {
        id: 76,
        title: "Day 76: Interface Segregation Principle (ISP)",
        focus: "Designing small, specific, decoupled interfaces instead of large fat ones.",
        theory: "Classes should not be forced to implement interface methods they do not use. Break fat interfaces into small, highly focused, specific interfaces.",
        practice: "Split a bloated interface containing callbacks for logins, profiles, and feeds into three specific interfaces.",
        homework: "Refactor a heavy user dashboard interface. Ensure sub-sections only implement relevant interface callbacks.",
        miniChallenge: "Identify a fat interface in your codebase and split it into decoupled contracts.",
        outcome: "You will declare clean, highly specific interfaces.",
        readTopic: "SOLID: Interface Segregation",
        watchTopic: "Interface Segregation Principle on Android - Philipp Lackner",
        duration: "6-8 Hours"
      },
      {
        id: 77,
        title: "Day 77: Dependency Inversion Principle (DIP)",
        focus: "Depending on abstractions, not concretions, decouple data from business logic.",
        theory: "High-level modules should not depend on low-level modules; both must depend on abstractions. Learn why depending on abstractions decouples your presentation, domain, and data layers.",
        practice: "Decouple a ViewModel from a concrete Retrofit API client by introducing an interface abstraction.",
        homework: "Refactor an offline-first repository. Ensure the domain layer depends on abstractions, while the data layer implements them.",
        miniChallenge: "Explain why injecting an interface instead of a concrete class makes unit testing easy.",
        outcome: "You will build decoupled architectures that depend on abstractions.",
        readTopic: "SOLID: Dependency Inversion Principle",
        watchTopic: "Dependency Inversion on Android - Philipp Lackner",
        duration: "6-8 Hours"
      },
      {
        id: 78,
        title: "Day 78: Clean Code Practices (DRY, KISS, YAGNI)",
        focus: "Writing self-documenting code, avoiding over-engineering, refactoring smell.",
        theory: "Explore code principles: DRY (Don't Repeat Yourself), KISS (Keep It Simple, Stupid), and YAGNI (You Aren't Gonna Need It). Learn to write self-documenting code and avoid over-engineering.",
        practice: "Refactor a overly complex 50-line utility function into a clean, simple, self-documenting 5-line function.",
        homework: "Audit and refactor an old project. Clean up duplicate logic, remove unused files, and simplify complex flows.",
        miniChallenge: "Explain why implementing features before they are actually needed violates YAGNI.",
        outcome: "You will write clean, simple, self-documenting, and maintainable code.",
        readTopic: "Clean Code Book Summary",
        watchTopic: "Write Clean Code - Philipp Lackner",
        duration: "6-8 Hours"
      }
    ],
    checkpoint: "Confirm you understand and can apply all 5 SOLID principles, DRY, KISS, and YAGNI to write decoupled, testable, and maintainable code.",
    quiz: [
      {
        question: "Which SOLID principle is violated if you are forced to implement interface methods you do not need?",
        options: ["Single Responsibility", "Open/Closed", "Interface Segregation", "Dependency Inversion"],
        correctIndex: 2,
        explanation: "The Interface Segregation Principle states that classes should not be forced to implement interface methods they do not use, favoring small specific interfaces."
      },
      {
        question: "What does the Dependency Inversion Principle advocate?",
        options: ["High-level modules should depend directly on low-level modules.", "Both high and low-level modules should depend on abstractions (interfaces).", "Classes must be final.", "Data should move in one direction only."],
        correctIndex: 1,
        explanation: "DIP advocates depending on abstractions (interfaces) rather than concrete implementations, which decouples your architecture layers."
      },
      {
        question: "What does the KISS principle stand for?",
        options: ["Keep It Simple, Stupid", "Kotlin Integration Software Suite", "Keep It Safe, Secure", "Keyboard Input System"],
        correctIndex: 0,
        explanation: "KISS stands for 'Keep It Simple, Stupid'. It reminds developers to avoid over-engineering and keep solutions simple."
      }
    ],
    debugging: {
      title: "The Violation of substitution",
      description: "A class inheritance structure throws UnsupportedOperationException in a subclass, violating Liskov Substitution.",
      brokenCode: `abstract class Bird {
    abstract fun fly()
}
class Ostrich : Bird() {
    override fun fly() {
        throw UnsupportedOperationException("Ostriches cannot fly!")
    }
}`,
      fixedCode: `abstract class Bird
abstract class FlyingBird : Bird() {
    abstract fun fly()
}
class Ostrich : Bird()
class Eagle : FlyingBird() {
    override fun fly() { /* EAGLE FLYING */ }
}`,
      explanation: "In the broken code, subclassing Ostrich from Bird throws an exception because Ostriches cannot fly, violating LSP. The fix splits the hierarchy so Ostrich inherits from a general Bird class, while Eagle extends FlyingBird."
    },
    refactoring: {
      title: "Consolidating Duplicate Calculations",
      description: "Repeating tax calculation formulas in multiple places, violating DRY.",
      smellyCode: `class USSales {
    fun calcTax(price: Double): Double = price * 0.08
}
class InvoiceBill {
    fun processUSInvoice(price: Double) {
        val tax = price * 0.08 // Duplicated!
        val total = price + tax
    }
}`,
      cleanCode: `object TaxCalculator {
    private const val US_TAX_RATE = 0.08
    fun calculateTax(price: Double): Double = price * US_TAX_RATE
}

class USSales {
    fun calcTax(price: Double): Double = TaxCalculator.calculateTax(price)
}
class InvoiceBill {
    fun processUSInvoice(price: Double) {
        val total = price + TaxCalculator.calculateTax(price)
    }
}`,
      explanation: "Consolidating duplicated logic into a single, reusable helper ensures changes to formulas (like tax rates) only need to be updated in one place."
    }
  },
  {
    id: 14,
    theme: "Firebase Core & Authentication",
    focus: "Firebase setup, Email/Password Auth, Google Sign-In, and managing auth state flows.",
    days: [
      {
        id: 79,
        title: "Day 79: Setting up Firebase in Android",
        focus: "Creating Firebase projects, registering apps, importing google-services.json.",
        theory: "Firebase is a powerful BaaS (Backend-as-a-Service). Learn how to create Firebase projects, register package IDs, and import configurations using Google services plugins.",
        practice: "Create a mock Firebase project, import 'google-services.json' into your project, and link Firebase Core dependencies.",
        homework: "Initialize Firebase in an Android app, verifying setup in logs on startup.",
        miniChallenge: "Verify how the application builds when the google-services.json file is missing.",
        outcome: "You will integrate Firebase Core services into your Android applications.",
        readTopic: "Firebase: Add Firebase to your Android project",
        watchTopic: "Firebase Setup in Android Studio - Stevdza-San",
        duration: "6-8 Hours"
      },
      {
        id: 80,
        title: "Day 80: Firebase Email & Password Authentication",
        focus: "Configuring Firebase Auth, signing up users, log in, error codes.",
        theory: "Learn how to manage user sign-ups and logins securely. Master Firebase Auth API methods for email registrations, password validation, and handling auth exceptions (e.g., weak passwords, email already in use).",
        practice: "Create a ViewModel that handles email sign-up and login, exposing a state Flow.",
        homework: "Build a complete Auth screen with input validation, loaders, and friendly error dialogs.",
        miniChallenge: "Map Firebase Auth Exception error codes to user-friendly messages.",
        outcome: "You will implement secure email/password registration and login.",
        readTopic: "Firebase: Authenticate with Email and Password",
        watchTopic: "Firebase Email & Password Auth - Philipp Lackner",
        duration: "6-8 Hours"
      },
      {
        id: 81,
        title: "Day 81: Managing Auth State Flows",
        focus: "Observing active sessions, automatic logins, sign out.",
        theory: "Auth sessions should persist. Learn how to observe Firebase auth state changes. Create automatic login flows that skip credentials screens if an active user session exists.",
        practice: "Use FirebaseAuth.getInstance().currentUser to direct logged-in users straight to the dashboard on startup.",
        homework: "Build an auth listener that handles user sign-outs or remote session terminations, redirecting users to the login screen.",
        miniChallenge: "Create a navigation gate that blocks unauthenticated users from opening the dashboard.",
        outcome: "You will manage persistent user sessions and navigation routing based on login states.",
        readTopic: "Firebase: Manage Users in Firebase",
        watchTopic: "Manage Firebase Auth State - Stevdza-San",
        duration: "6-8 Hours"
      },
      {
        id: 82,
        title: "Day 82: Google Sign-In Integration basics",
        focus: "Configuring Credential Manager, handling credentials, OAuth login flows.",
        theory: "Google Sign-In offers a seamless login experience. Learn how to integrate the modern Credential Manager API, handle OAuth ID tokens, and authenticate users with Firebase.",
        practice: "Set up Credential Manager request payloads to fetch active Google Accounts on screen click.",
        homework: "Build a Google Sign-In helper class that requests OAuth credentials and links them to Firebase.",
        miniChallenge: "Implement a loading indicator that overlays the screen during active OAuth requests.",
        outcome: "You will implement seamless Google Sign-In authentication.",
        readTopic: "Android Developers: Integrate Google Sign-In",
        watchTopic: "Google Sign In with Credential Manager - Philipp Lackner",
        duration: "6-8 Hours"
      },
      {
        id: 83,
        title: "Day 83: Resetting Passwords & Email Verification",
        focus: "Sending recovery links, verification emails, updating profiles.",
        theory: "Implement account recovery and verification flows. Learn how to trigger password reset emails and verification links, and refresh auth profiles to check verification status.",
        practice: "Write functions to send verification links and password recovery emails on button click.",
        homework: "Build an password-reset modal and email-verification screen with a countdown resend timer.",
        miniChallenge: "Block dashboard entry until the user's email is fully verified.",
        outcome: "You will manage account recovery and email verification flows.",
        readTopic: "Firebase: Password Reset & Verification",
        watchTopic: "Firebase Email Verification and Password Reset - Stevdza-San",
        duration: "6-8 Hours"
      },
      {
        id: 84,
        title: "Day 84: Dependency Injection with Firebase & Hilt",
        focus: "Decoupling Firebase dependencies, writing testable auth repositories.",
        theory: "Avoid direct Firebase SDK class references inside ViewModels. Abstraction behind interfaces and injection using Hilt allows you to mock and test your auth logic easily.",
        practice: "Create an 'AuthRepository' interface, and inject a singleton FirebaseAuth instance using a Hilt module.",
        homework: "Build a fully clean, modular Auth flow. ViewModels collect state flows from Hilt-injected repositories.",
        miniChallenge: "Write a mock Auth repository that simulates successful logins without calling the network.",
        outcome: "You will write clean, decoupled, and testable authentication flows.",
        readTopic: "Hilt: Injecting Firebase services",
        watchTopic: "Clean Firebase Hilt DI Setup - Philipp Lackner",
        duration: "6-8 Hours"
      }
    ],
    checkpoint: "Confirm you understand Firebase integration, email/password registrations, managing auth states, Google Sign-In, and injecting Firebase using Hilt.",
    quiz: [
      {
        question: "Which file contains Firebase client-side configurations and must be added to the Android project root?",
        options: ["firebase-config.xml", "google-services.json", "manifest.json", "secrets.properties"],
        correctIndex: 1,
        explanation: "The 'google-services.json' file holds the project configuration details required by Firebase SDKs."
      },
      {
        question: "How do you check if a user is currently logged in on app startup?",
        options: ["Querying the SQL database.", "Checking 'FirebaseAuth.getInstance().currentUser != null'.", "Requesting password parameters.", "By default, users are logged out."],
        correctIndex: 1,
        explanation: "Calling 'currentUser' returns the active User object if a valid session exists on the device, otherwise returning null."
      },
      {
        question: "Why should we inject 'FirebaseAuth' via Hilt instead of calling 'FirebaseAuth.getInstance()' directly in ViewModels?",
        options: ["Calling getInstance is slow.", "Hilt automatically updates password values.", "Injecting FirebaseAuth decouples your class, making it easily testable by allowing you to inject a mock FirebaseAuth instance.", "It is required by the compiler."],
        correctIndex: 2,
        explanation: "Injecting Firebase services via Hilt modules decouples your classes, allowing you to mock and test your business logic easily."
      }
    ],
    debugging: {
      title: "The Missing Verification Blink",
      description: "A student implements a verification check on login, but the currentUser state never reflects verification status changes until they re-login.",
      brokenCode: `val user = firebaseAuth.currentUser
if (user != null && user.isEmailVerified) {
    navigateToDashboard()
} else {
    showError("Please verify your email first!")
}`,
      fixedCode: `viewModelScope.launch {
    firebaseAuth.currentUser?.reload()?.await() // Refresh user profile data!
    val user = firebaseAuth.currentUser
    if (user != null && user.isEmailVerified) {
        navigateToDashboard()
    } else {
        showError("Please verify your email first!")
    }
}`,
      explanation: "Firebase caches the user object locally. If the user clicks a verification link, the local object remains stale. Calling 'reload()' fetches the latest profile status from the server."
    },
    refactoring: {
      title: "Abstracting Firebase Auth Calls",
      description: "Writing Firebase registration SDK code directly inside ViewModels, tightly coupling the UI with external libraries.",
      smellyCode: `class AuthViewModel : ViewModel() {
    fun login(email: String, pass: String) {
        FirebaseAuth.getInstance().signInWithEmailAndPassword(email, pass)
            .addOnSuccessListener {
                _state.value = Success
            }
    }
}`,
      cleanCode: `class AuthViewModel @Inject constructor(
    private val authRepository: AuthRepository // Interface abstraction!
) : ViewModel() {
    fun login(email: String, pass: String) {
        viewModelScope.launch {
            val result = authRepository.signIn(email, pass)
            _state.value = result
        }
    }
}`,
      explanation: "Abstracting authentication calls behind a clean repository interface decouples your ViewModel. This simplifies unit testing by allowing you to inject mock auth states easily."
    }
  },
  {
    id: 15,
    theme: "Cloud Database & Storage with Firestore",
    focus: "Firestore collections, documents, real-time listeners, Firebase Storage, and CRUD operations.",
    days: [
      {
        id: 85,
        title: "Day 85: Firestore Core Concepts",
        focus: "Collections, Documents, NoSQL architecture, reading and writing data.",
        theory: "Firestore is a NoSQL document database. Learn how data is stored as Documents grouped into Collections. Learn standard CRUD operations: set(), add(), get(), and delete().",
        practice: "Create a Firestore database, structure a 'users' collection, and write a mock document.",
        homework: "Build a database tracker. Write functions to add and update items inside an offline-ready collection.",
        miniChallenge: "Verify the difference between set() (overwrites documents) vs update() (modifies specific fields).",
        outcome: "You will understand Firestore NoSQL structures and write document records.",
        readTopic: "Firebase: Get started with Cloud Firestore",
        watchTopic: "Cloud Firestore Tutorial - Philipp Lackner",
        duration: "6-8 Hours"
      },
      {
        id: 86,
        title: "Day 86: Querying Firestore",
        focus: "Filtering queries, sorting, pagination, compound queries, and indexing.",
        theory: "Learn how to filter and sort document queries using operators (e.g., whereEqualTo, orderBy). Understand how Firestore requires custom indexes for compound queries.",
        practice: "Write a query fetching all task documents where 'isCompleted' is true, sorted by creation date.",
        homework: "Build an dynamic book explorer. Implement queries to filter books by category, rating thresholds, and publish dates.",
        miniChallenge: "Trigger a compound query that requires a custom index, and click the generated log link to create the index.",
        outcome: "You will write complex, optimized database queries in Firestore.",
        readTopic: "Firebase: Perform simple and compound queries",
        watchTopic: "Firestore Queries and Indexing - Stevdza-San",
        duration: "6-8 Hours"
      },
      {
        id: 87,
        title: "Day 87: Firestore Real-time Listeners",
        focus: "Adding snapshot listeners, real-time sync, Flow integration.",
        theory: "Learn how to listen for real-time document updates using 'addSnapshotListener()'. Discover how to convert these snapshot listeners into cold Kotlin Flows using 'callbackFlow'.",
        practice: "Write a callbackFlow that streams real-time updates from a tasks collection.",
        homework: "Build a real-time collaborative chat room. Stream messages instantly across multiple devices.",
        miniChallenge: "Verify how the callbackFlow closes snapshot listeners cleanly when collection scopes are cancelled.",
        outcome: "You will stream real-time database updates using Firestore snapshot listeners.",
        readTopic: "Firebase: Get real-time updates with Cloud Firestore",
        watchTopic: "Real-time Firestore flows in Android - Philipp Lackner",
        duration: "6-8 Hours"
      },
      {
        id: 88,
        title: "Day 88: Cloud Firestore Security Rules",
        focus: "Securing collections, writing authentication guards, validating data.",
        theory: "Firestore client-side SDKs bypass backend servers. Secure your database by writing Cloud Firestore Security Rules that restrict read/write access to authenticated owners.",
        practice: "Write rules that allow users to read and write only their own documents inside a 'users/{userId}' path.",
        homework: "Build secure security rules for a shared task list. Allow group members to read but only owners to delete documents.",
        miniChallenge: "Test your rules using the Firebase Security Rules Simulator.",
        outcome: "You will protect your cloud database from unauthorized access.",
        readTopic: "Firebase: Cloud Firestore Security Rules",
        watchTopic: "Firestore Security Rules Tutorial - official Firebase channel",
        duration: "6-8 Hours"
      },
      {
        id: 89,
        title: "Day 89: Firebase Cloud Storage basics",
        focus: "Uploading files, downloading metadata, retrieving public URLs.",
        theory: "Firestore is not designed to store large binary files (like images or audio). Learn to store files in Firebase Cloud Storage, and save their public download URL strings in Firestore.",
        practice: "Write a function to upload a mock text file to Firebase Storage and retrieve its download URL.",
        homework: "Build a profile avatar uploader. Upload images from local gallery and save their URLs to user profiles in Firestore.",
        miniChallenge: "Implement a progress bar that displays active upload percentages in real-time.",
        outcome: "You will upload and manage files in Firebase Cloud Storage.",
        readTopic: "Firebase: Upload files on Android",
        watchTopic: "Firebase Cloud Storage Tutorial - Stevdza-San",
        duration: "6-8 Hours"
      },
      {
        id: 90,
        title: "Day 90: Offline Persistence in Firestore",
        focus: "Offline caching, sync queues, conflict resolution.",
        theory: "Firestore supports offline persistence automatically. Learn how it caches database reads, queues writes offline, and synchronizes changes when connection resumes, resolving conflicts.",
        practice: "Enable and configure Firestore offline cache settings in your database client.",
        homework: "Build an offline-first journal. Verify that entries written offline are synchronized to the cloud when internet resumes.",
        miniChallenge: "Describe how conflict resolution behaves when multiple devices edit the exact same document offline.",
        outcome: "You will build reliable cloud-synchronized apps that work beautifully offline.",
        readTopic: "Firebase: Access Firestore Offline",
        watchTopic: "Firestore Offline Persistence Guide - Philipp Lackner",
        duration: "6-8 Hours"
      }
    ],
    checkpoint: "Confirm you understand NoSQL architecture, query filtering, real-time listeners, security rules, file uploads, and offline cache synchronization.",
    quiz: [
      {
        question: "How is data structured and stored inside Google Cloud Firestore?",
        options: ["Relational tables with keys.", "JSON key-value pairs.", "Documents containing fields grouped inside Collections.", "Binary raw files."],
        correctIndex: 2,
        explanation: "Firestore is a NoSQL document database. Data is stored as Documents (representing individual objects) grouped into Collections."
      },
      {
        question: "What is the benefit of using 'addSnapshotListener()' in Firestore?",
        options: ["It compresses database files.", "It triggers offline-only queries.", "It establishes a persistent socket connection that pushes real-time database updates instantly whenever data changes.", "It validates password inputs."],
        correctIndex: 2,
        explanation: "addSnapshotListener sets up a listener that receives real-time updates from Firestore, allowing the app to update instantly when cloud data changes."
      },
      {
        question: "Where should you write rules to restrict unauthorized read/write access to your Firestore database?",
        options: ["Inside the Android Manifest.", "Inside Firestore Security Rules in the Firebase Console.", "Inside your ViewModel classes.", "In a Hilt module."],
        correctIndex: 1,
        explanation: "Since client-side apps connect directly to Firestore, security must be enforced on the server-side via Firestore Security Rules in the Firebase Console."
      }
    ],
    debugging: {
      title: "The Unclosed Listener Leak",
      description: "An app crashes after active navigation loops because active snapshot listeners are not cleared, causing memory and connection leaks.",
      brokenCode: `fun streamMessages() {
    val listener = firestore.collection("messages")
        .addSnapshotListener { snapshot, e ->
            // Update uiState
        }
    // Listener is never closed!
}`,
      fixedCode: `fun streamMessages(): Flow<List<Message>> = callbackFlow {
    val listener = firestore.collection("messages")
        .addSnapshotListener { snapshot, e ->
            if (snapshot != null) {
                trySend(snapshot.toObjects(Message::class.java))
            }
        }
    awaitClose { listener.remove() } // Closes snapshot listener on cancel!
}`,
      explanation: "Snapshot listeners persist until explicitly closed. In the broken code, listeners leak when screens exit, draining battery and connection limits. Wrapping listeners inside a callbackFlow with awaitClose ensures they are closed cleanly when cancelled."
    },
    refactoring: {
      title: "Deserializing Documents Typed Safely",
      description: "Manually mapping individual document fields to data class instances, creating verbose, bug-prone parsing code.",
      smellyCode: `val id = document.getString("id") ?: ""
val title = document.getString("title") ?: ""
val price = document.getDouble("price") ?: 0.0
val item = Product(id, title, price)`,
      cleanCode: `val item = document.toObject(Product::class.java)`,
      explanation: "Firestore provides a built-in 'toObject()' deserialization method. This automatically maps document fields directly into your Kotlin data classes, eliminating manual parsing boilerplate."
    }
  },
  {
    id: 16,
    theme: "FCM, Analytics & Performance diagnostics",
    focus: "Firebase Cloud Messaging, analytics tracking, Crashlytics, and diagnosing memory leaks.",
    days: [
      {
        id: 91,
        title: "Day 91: Firebase Cloud Messaging (FCM)",
        focus: "Setting up FCM push notifications, message payloads, background handling.",
        theory: "Learn how Firebase Cloud Messaging delivers push notifications. Differentiate between Notification Messages (handled by the system tray) and Data Messages (delivered straight to the app for manual processing).",
        practice: "Create a custom 'MyFirebaseMessagingService' and handle incoming payloads.",
        homework: "Build an dynamic notification handler. Create local notification channels and display custom alerts when FCM payloads arrive.",
        miniChallenge: "Trigger a test push notification to an emulator using the Firebase Notifications console.",
        outcome: "You will receive and display custom push notifications in your applications.",
        readTopic: "Firebase: Cloud Messaging Guide",
        watchTopic: "FCM Push Notifications Tutorial - Stevdza-San",
        duration: "6-8 Hours"
      },
      {
        id: 92,
        title: "Day 92: Custom Push Notification Actions",
        focus: "Adding deep links, passing pending intents, action buttons.",
        theory: "Push notifications can be interactive. Learn how to wrap navigation routes inside PendingIntents and attach them to notifications, directing users straight to specific screens on click.",
        practice: "Create a push notification with a PendingIntent that opens a detail screen with parameters on click.",
        homework: "Build an alert notification containing 'Accept' and 'Decline' actions, handling clicks programmatically.",
        miniChallenge: "Pass custom arguments inside notification intents and parse them within your MainActivity.",
        outcome: "You will build interactive notifications with custom deep links and actions.",
        readTopic: "Android Developers: Notifications Overview",
        watchTopic: "Pending Intents in Push Notifications - Philipp Lackner",
        duration: "6-8 Hours"
      },
      {
        id: 93,
        title: "Day 93: Firebase Analytics & Crashlytics",
        focus: "Tracking user events, configuring Firebase Crashlytics, logging custom crashes.",
        theory: "Learn to track user behavior and monitor app stability. Use Firebase Analytics to log custom user events. Configure Firebase Crashlytics to capture and group runtime crashes, and log custom keys.",
        practice: "Log a custom 'button_clicked' event with parameters. Set up a test crash using Crashlytics.getInstance().crash().",
        homework: "Integrate Crashlytics into your app. Log custom keys and caught exceptions to help debug production errors.",
        miniChallenge: "Log caught network exceptions to Crashlytics to monitor API failures in production.",
        outcome: "You will track user engagement and monitor app stability in production.",
        readTopic: "Firebase: Get started with Firebase Crashlytics",
        watchTopic: "Firebase Analytics and Crashlytics Guide - Stevdza-San",
        duration: "6-8 Hours"
      },
      {
        id: 94,
        title: "Day 94: Android Studio Profiler (Memory & CPU)",
        focus: "Profiling resource usage, monitoring allocation, analyzing memory heaps.",
        theory: "High resource usage slows down apps and drains batteries. Learn to use the Android Studio Profiler to monitor memory allocations, inspect CPU usage, and capture heap dumps to diagnose issues.",
        practice: "Run your application with the Profiler active, analyzing CPU and memory spikes during heavy operations.",
        homework: "Profile your application during heavy list scrolls. Identify and optimize any memory allocations or garbage collection spikes.",
        miniChallenge: "Capture a heap dump and inspect the list of active objects in memory.",
        outcome: "You will profile and optimize your app's memory and CPU usage.",
        readTopic: "Android Developers: Profile your app performance",
        watchTopic: "Android Studio Profiler Tutorial - CodingWithMitch",
        duration: "6-8 Hours"
      },
      {
        id: 95,
        title: "Day 95: Memory Leaks Diagnostics & LeakCanary",
        focus: "Finding leaks, understanding references, integrating LeakCanary.",
        theory: "Memory leaks occur when unused objects are held in memory. Learn how to integrate LeakCanary, which automatically detects memory leaks, captures heap dumps, and displays leak traces.",
        practice: "Integrate LeakCanary into your project, run the app, and analyze any detected leaks.",
        homework: "Introduce a deliberate memory leak (e.g., using a static context), capture it with LeakCanary, and write the fix.",
        miniChallenge: "Fix a memory leak triggered by an unclosed broadcast receiver.",
        outcome: "You will diagnose and resolve memory leaks using LeakCanary.",
        readTopic: "LeakCanary official documentation",
        watchTopic: "How to fix memory leaks with LeakCanary - Philipp Lackner",
        duration: "6-8 Hours"
      },
      {
        id: 96,
        title: "Day 96: Release Profiling & Optimization",
        focus: "Configuring Proguard/R8, optimizing build performance.",
        theory: "R8 shrinks, obfuscates, and optimizes your code for release builds. Learn how to write Proguard rules ('proguard-rules.pro') to prevent shrinking or obfuscating required classes (e.g., serialization models).",
        practice: "Enable 'minifyEnabled' in your build.gradle, and write custom keep rules for your network models.",
        homework: "Compile a release-ready APK. Audit build reports and resolve any R8 obfuscation warnings.",
        miniChallenge: "Configure custom proguard rules to keep annotations required by serialization libraries.",
        outcome: "You will optimize and obfuscate production-ready APK builds.",
        readTopic: "Android Developers: Shrink, obfuscate, and optimize your app",
        watchTopic: "Proguard and R8 Obfuscation Guide - Stevdza-San",
        duration: "6-8 Hours"
      }
    ],
    checkpoint: "Confirm you understand FCM integrations, event tracking, logging crashes with Crashlytics, profiling performance, diagnosing memory leaks, and writing Proguard rules.",
    quiz: [
      {
        question: "What is the difference between a Notification Message and a Data Message in FCM?",
        options: ["Notification Messages are only received on Wi-Fi.", "Notification Messages are automatically handled by the system tray when the app is backgrounded; Data Messages are delivered straight to the app code for manual processing.", "Data Messages are paid.", "There is no difference."],
        correctIndex: 1,
        explanation: "Notification Messages are handled by the system tray automatically when backgrounded. Data Messages are delivered straight to the app's service callbacks, giving you full control over notifications."
      },
      {
        question: "How does LeakCanary help developers?",
        options: ["It formats Kotlin code.", "It automatically monitors memory allocations and alerts you to memory leaks with detailed leak traces.", "It speeds up app compilation.", "It uploads crash logs to the cloud."],
        correctIndex: 1,
        explanation: "LeakCanary is a powerful memory detection library for Android. It monitors the heap, detects memory leaks, and displays detailed traces to help locate root causes."
      },
      {
        question: "What is the primary purpose of R8 in the release build process?",
        options: ["To translate Kotlin to Java.", "To shrink, optimize, and obfuscate your code, reducing APK size and preventing reverse engineering.", "To back up local databases.", "To establish Firebase connections."],
        correctIndex: 1,
        explanation: "R8 shrinks, optimizes, and obfuscates your code. This reduces the final production APK size and makes reverse engineering significantly harder."
      }
    ],
    debugging: {
      title: "The Obfuscated Model Crash",
      description: "An app builds successfully in debug mode, but crashes instantly in release mode when trying to parse API payloads, throwing a NullPointerException.",
      brokenCode: `// API Model
@Serializable
data class User(val name: String)
// R8 obfuscates 'User' fields (e.g., 'name' -> 'a'), causing JSON parsing to fail!`,
      fixedCode: `// Keep annotations prevent R8 from obfuscating this model!
@Keep
@Serializable
data class User(val name: String)`,
      explanation: "R8 optimizes and obfuscates class names and fields in release builds. This can rename fields required by JSON parsing libraries, causing deserialization to fail. Annotating models with '@Keep' (or writing proguard rules) preserves field names."
    },
    refactoring: {
      title: "Deduplicating Notification Channel Setup",
      description: "Re-creating notification channels on every notification trigger, causing redundant operations and slow layouts.",
      smellyCode: `fun showNotification(context: Context, msg: String) {
    val manager = context.getSystemService(NotificationManager::class.java)
    val channel = NotificationChannel("updates", "Updates", NotificationManager.IMPORTANCE_DEFAULT)
    manager.createNotificationChannel(channel) // Redundant recreation!
    val notification = NotificationCompat.Builder(context, "updates").setContentText(msg).build()
    manager.notify(1, notification)
}`,
      cleanCode: `// Create notification channels ONCE in your Application class or MainActivity onCreate!
fun initializeNotificationChannel(context: Context) {
    if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
        val manager = context.getSystemService(NotificationManager::class.java)
        val channel = NotificationChannel("updates", "Updates", NotificationManager.IMPORTANCE_DEFAULT)
        manager.createNotificationChannel(channel)
    }
}

fun showNotification(context: Context, msg: String) {
    val manager = context.getSystemService(NotificationManager::class.java)
    val notification = NotificationCompat.Builder(context, "updates").setContentText(msg).build()
    manager.notify(1, notification)
}`,
      explanation: "Notification channels only need to be created once during app initialization. Moving channel creation to the Application class cleans up notification triggers and prevents redundant operations."
    }
  },
  {
    id: 17,
    theme: "Animations & Advanced Custom Canvas in Compose",
    focus: "Compose animations, animate*AsState, AnimatedVisibility, Canvas drawing, custom layout animations.",
    days: [
      {
        id: 97,
        title: "Day 97: Core Compose Animations",
        focus: "Using animate*AsState, value transitions, animating sizes, colors, and shapes.",
        theory: "Learn how to use Jetpack Compose animation APIs. Master 'animate*AsState' (e.g., animateFloatAsState, animateColorAsState) for simple, declarative value transitions that update smoothly on state changes.",
        practice: "Build a button that animate-resizes and changes background color when clicked.",
        homework: "Build a custom expandable card containing smooth height and color transitions when clicked.",
        miniChallenge: "Create a visual progress bar that animate-slides its values smoothly when updated.",
        outcome: "You will implement simple, smooth value transitions in your UI.",
        readTopic: "Android Developers: Animations in Compose",
        watchTopic: "Jetpack Compose Animations - Philipp Lackner",
        duration: "6-8 Hours"
      },
      {
        id: 98,
        title: "Day 98: AnimatedVisibility & Layout Transitions",
        focus: "Animating entering/exiting nodes, custom fade, slide, and expand transitions.",
        theory: "Learn to animate layout additions and removals. Use 'AnimatedVisibility' to control entering and exiting animations, and configure custom slide, fade, and expand transitions.",
        practice: "Build a toggleable info panel that slides and fades into view smoothly when clicked.",
        homework: "Build a custom floating alert banner that slides into the screen from the top, and fades out automatically after 3 seconds.",
        miniChallenge: "Combine slide-in-vertically and fade-in animations on an AnimatedVisibility container.",
        outcome: "You will animate layout nodes entering and exiting the screen smoothly.",
        readTopic: "Android Developers: AnimatedVisibility in Compose",
        watchTopic: "AnimatedVisibility Tutorial - Stevdza-San",
        duration: "6-8 Hours"
      },
      {
        id: 99,
        title: "Day 99: Multi-state Animations with updateTransition",
        focus: "Managing complex parallel animations, transition specs, spring physics.",
        theory: "For complex layouts with multiple parallel animations, use 'updateTransition'. It tracks states and animates multiple properties (size, borders, colors) in sync using spring physics or tweens.",
        practice: "Build an expandable floating action button that rotates, changes color, and reveals text labels on click.",
        homework: "Build a card element that rotates 180 degrees, expands its dimensions, and changes borders smoothly on state changes.",
        miniChallenge: "Configure custom 'spring' physics specs on a transition animation to create realistic elastic bounces.",
        outcome: "You will orchestrate complex, multi-property synchronized animations.",
        readTopic: "Android Developers: updateTransition in Compose",
        watchTopic: "updateTransition Tutorial - Philipp Lackner",
        duration: "6-8 Hours"
      },
      {
        id: 100,
        title: "Day 100: Drawing custom graphics with Canvas API",
        focus: "Drawing lines, circles, paths, coordinates system, custom widgets.",
        theory: "When standard layouts are not enough, build custom designs using the Canvas API. Learn Compose's Canvas, coordinate systems, and drawing primitives: drawLine, drawCircle, drawRect, and custom Paths.",
        practice: "Draw a custom pie chart widget displaying colored categories based on percentage inputs.",
        homework: "Build a custom, interactive circular progress indicator widget that updates and animate-fills on values change.",
        miniChallenge: "Draw a smooth bezier curve path across the Canvas screen.",
        outcome: "You will design custom graphics and charts using the Canvas API.",
        readTopic: "Android Developers: Graphics in Compose",
        watchTopic: "Canvas Tutorial in Jetpack Compose - Philipp Lackner",
        duration: "6-8 Hours"
      },
      {
        id: 101,
        title: "Day 101: Custom Gestures on Canvas",
        focus: "Detecting drag, tap, scroll offsets, updating custom canvas drawings.",
        theory: "Make your custom Canvas drawings interactive. Learn to detect touch inputs, track drag gestures, handle scroll offsets, and update your canvas designs based on user gestures.",
        practice: "Build a signature drawing canvas where users can draw with their finger and clear the screen on button click.",
        homework: "Build an interactive slider widget using Canvas and custom touch gestures, showing animated bubble overlays on drag.",
        miniChallenge: "Detect and draw a circle around a user's double-tap coordinates on the Canvas.",
        outcome: "You will build interactive custom widgets with gesture detection.",
        readTopic: "Android Developers: Gestures on Canvas",
        watchTopic: "Gestures on Canvas in Compose - Philipp Lackner",
        duration: "6-8 Hours"
      },
      {
        id: 102,
        title: "Day 102: Custom Animation Frameworks & Lottie",
        focus: "Importing vector animations, rendering Lottie assets, loop configurations.",
        theory: "For complex vector illustrations, use Lottie animations. Learn how to import Lottie JSON assets into your project, control playback (play, pause, loop), and render animations in Compose.",
        practice: "Render a Lottie checkmark animation asset that plays once on button click.",
        homework: "Build a complete loading screen with a looping Lottie animation, transitioning to home when loading completes.",
        miniChallenge: "Control a Lottie animation's speed dynamically based on a slider value.",
        outcome: "You will integrate and control rich vector animations using Lottie.",
        readTopic: "Lottie Files: Android Setup",
        watchTopic: "Lottie Animations in Jetpack Compose - Philipp Lackner",
        duration: "6-8 Hours"
      }
    ],
    checkpoint: "Confirm you understand value transitions, entering/exiting animations, multi-state transitions, drawing with the Canvas API, detecting Canvas gestures, and Lottie animations.",
    quiz: [
      {
        question: "Which Compose animation API is best for animating a single float value (like an offset) declare dynamically?",
        options: ["updateTransition", "animateFloatAsState", "rememberInfiniteTransition", "AnimatedVisibility"],
        correctIndex: 1,
        explanation: "animateFloatAsState is specifically designed for simple, single value animations that update smoothly when state values change."
      },
      {
        question: "How do you define coordinate systems when drawing on a Canvas in Compose?",
        options: ["(0,0) is in the bottom-right corner.", "(0,0) is in the top-left corner, with X increasing rightwards and Y increasing downwards.", "(0,0) is in the center.", "Coordinates are in percentages."],
        correctIndex: 1,
        explanation: "Android's canvas coordinate system places the origin (0,0) at the top-left corner. Y increases as you go downwards, and X increases rightwards."
      },
      {
        question: "What is Lottie?",
        options: ["A local database.", "An animation library that parses Adobe After Effects animations exported as JSON and renders them natively on mobile.", "A compiler plugin.", "A type of Layout modifier."],
        correctIndex: 1,
        explanation: "Lottie is a popular animation library by Airbnb that parses After Effects animations exported as JSON and renders them fluidly on mobile devices."
      }
    ],
    debugging: {
      title: "The Laggy Animation Loop",
      description: "An app lags during complex value animations because values are calculated during recompositions on the main thread.",
      brokenCode: `val offset = animateDpAsState(targetValue = if (moved) 200.dp else 0.dp)
Box(modifier = Modifier.padding(start = offset.value)) // Causes heavy recompositions!`,
      fixedCode: `val offset = animateDpAsState(targetValue = if (moved) 200.dp else 0.dp)
Box(modifier = Modifier.graphicsLayer { translationX = offset.value.toPx() })`,
      explanation: "In the broken code, animating padding triggers recompositions of the parent and child layout tree on every single frame. The fix uses 'graphicsLayer' which animates translation offsets entirely on the GPU, skipping heavy layout recompositions."
    },
    refactoring: {
      title: "Streamlining Animated Visibility",
      description: "Writing complex manual fade and scale transition equations when standard declarative APIs exist.",
      smellyCode: `val alpha by animateFloatAsState(if (visible) 1f else 0f)
val scale by animateFloatAsState(if (visible) 1f else 0.8f)
if (alpha > 0.01f) {
    Box(modifier = Modifier.alpha(alpha).scale(scale)) { /* Content */ }
}`,
      cleanCode: `AnimatedVisibility(
    visible = visible,
    enter = fadeIn() + scaleIn(initialScale = 0.8f),
    exit = fadeOut() + scaleOut(targetScale = 0.8f)
) {
    Box { /* Content */ }
}`,
      explanation: "Using 'AnimatedVisibility' replaces manual value-state calculations with highly readable, optimized, declarative transitions. This ensures clean entering/exiting animations with less code."
    }
  },
  {
    id: 18,
    theme: "Unit Testing & Mocking ViewModels",
    focus: "JUnit 5, Mockito mock setups, testing ViewModels, Repositories, and Coroutines test dispatchers.",
    days: [
      {
        id: 103,
        title: "Day 103: Intro to Unit Testing & JUnit 5",
        focus: "Testing pyramid, writing local unit tests, assertions, test suites.",
        theory: "Learn why unit testing is critical. Understand the testing pyramid (Unit > Integration > UI). Master JUnit 5 assertions, setup/teardown annotations (@BeforeEach, @AfterEach), and writing deterministic tests.",
        practice: "Write unit tests verifying input validation formulas, checking boundary numbers and empty fields.",
        homework: "Build a test suite verifying password validation logic, testing constraints (caps, numbers, lengths).",
        miniChallenge: "Write a test using JUnit 5 parameterized testing to run a validator against multiple test cases.",
        outcome: "You will write local JUnit unit tests with clear assertions.",
        readTopic: "Android Developers: Local Unit Tests",
        watchTopic: "Unit Testing in Android - Philipp Lackner",
        duration: "6-8 Hours"
      },
      {
        id: 104,
        title: "Day 104: Mocking with Mockito / MockK",
        focus: "Why mock, writing stub responses, verifying behavior, mocking interfaces.",
        theory: "Unit tests must execute in isolation. Learn to mock dependencies (like API clients or databases) using Mockito or MockK. Write stub responses (coEvery/whenever) and verify function calls (verify/coVerify).",
        practice: "Create a local unit test mocking a 'TaskDao' to verify repository behavior.",
        homework: "Write local unit tests for a 'UserRepositoryImpl'. Mock network API calls and verify caching behavior on success vs failure.",
        miniChallenge: "Verify that a mock function was called exactly once with specific arguments.",
        outcome: "You will mock external dependencies to test business logic in isolation.",
        readTopic: "MockK official documentation",
        watchTopic: "Mocking with MockK in Android - Philipp Lackner",
        duration: "6-8 Hours"
      },
      {
        id: 105,
        title: "Day 105: Testing ViewModels & State",
        focus: "Testing ViewModels, verifying state transitions, collecting StateFlow in tests.",
        theory: "ViewModels map domain results to UI states. Learn to write local unit tests for ViewModels, trigger actions, and verify that immutable UI states change correctly.",
        practice: "Write a test verifying that calling 'viewModel.loadTasks()' transitions uiState from Loading to Success.",
        homework: "Build a detailed test suite checking that a 'LoginViewModel' transitions to Error state when login fails.",
        miniChallenge: "Verify how StateFlow updates behave in unit tests when multiple values are emitted.",
        outcome: "You will test and verify ViewModel state transitions.",
        readTopic: "Android Developers: Test ViewModels",
        watchTopic: "Testing ViewModels Tutorial - Stevdza-San",
        duration: "6-8 Hours"
      },
      {
        id: 106,
        title: "Day 106: Testing Coroutines & TestDispatchers",
        focus: "StandardTestDispatcher, UnconfinedTestDispatcher, runTest scopes.",
        theory: "Coroutines are asynchronous. Learn to test coroutines deterministically using 'runTest' (skips delays). Understand how StandardTestDispatcher pauses executions, while UnconfinedTestDispatcher executes immediately.",
        practice: "Write a unit test for a suspend function using runTest to skip delay(5000) timers.",
        homework: "Build a test suite checking that background tasks running on Dispatchers.Default are tested safely using custom dispatchers.",
        miniChallenge: "Explain why standard Dispatchers.Main triggers an exception during JVM local unit tests.",
        outcome: "You will test asynchronous coroutines and suspend functions deterministically.",
        readTopic: "Kotlin Docs: Test Coroutines",
        watchTopic: "Testing Coroutines in Android - Philipp Lackner",
        duration: "6-8 Hours"
      },
      {
        id: 107,
        title: "Day 107: Coroutines MainDispatcherRule",
        focus: "Custom JUnit Test Rules, swapping Dispatchers.Main, clean test environments.",
        theory: "JVM tests do not compile Android-specific loops (like Dispatchers.Main), throwing exceptions on launch. Learn to write a custom JUnit Rule to swap Dispatchers.Main with a TestDispatcher before each test.",
        practice: "Write a MainDispatcherRule and apply it to a ViewModel unit test.",
        homework: "Refactor your stop-watch ViewModel test suite to use MainDispatcherRule, verifying all timers execute flawlessly.",
        miniChallenge: "Identify why tests fail with thread-locking errors if Main Dispatchers are not reset after execution.",
        outcome: "You will write clean, isolated unit tests for ViewModels using custom Rules.",
        readTopic: "Android Developers: MainDispatcherRule Guide",
        watchTopic: "Coroutines JUnit Rules - Philipp Lackner",
        duration: "6-8 Hours"
      },
      {
        id: 108,
        title: "Day 108: Testing Flows & Turbine",
        focus: "Testing reactive streams, using Turbine library, checking emission orders.",
        theory: "Flow streams are asynchronous and can be hard to test. Learn Turbine, a popular library for testing Kotlin Flows, allowing you to assert emissions sequentially with timeout controls.",
        practice: "Write a test using Turbine to assert countdown flow emissions (3 -> 2 -> 1 -> Complete).",
        homework: "Build a test suite checking real-time search query emissions from a flow, asserting filtering steps.",
        miniChallenge: "Assert that a flow does not emit any values under specific mock conditions.",
        outcome: "You will write assertions for reactive flows using Turbine.",
        readTopic: "Turbine library documentation",
        watchTopic: "Testing Flows with Turbine - Philipp Lackner",
        duration: "6-8 Hours"
      }
    ],
    checkpoint: "Confirm you understand unit test structures, mocking dependencies, testing ViewModels, swapping Main dispatchers, and testing flows with Turbine.",
    quiz: [
      {
        question: "Why does testing ViewModels on local JVMs throw an exception when accessing 'Dispatchers.Main'?",
        options: ["Main dispatcher is too slow.", "Local JVM tests do not have Android loop structures natively. You must override the Main dispatcher with a TestDispatcher.", "JVM tests do not support coroutines.", "ViewModels cannot be unit tested."],
        correctIndex: 1,
        explanation: "The Main dispatcher is bound to the Android Looper, which is missing from JVM tests. You must swap Dispatchers.Main with a TestDispatcher (using rules)."
      },
      {
        question: "What is the purpose of the 'runTest' function in Coroutine Testing?",
        options: ["It runs tests on real devices.", "It automatically skips delay() timers, allowing asynchronous tests to execute instantly and deterministically.", "It compiles layout folders.", "It acts as a local SQL database."],
        correctIndex: 1,
        explanation: "runTest is a test builder that skips delay() timers, allowing you to test coroutines instantly on JVMs."
      },
      {
        question: "How does the Turbine library simplify testing Kotlin Flows?",
        options: ["It converts flows to relational databases.", "It allows you to collect and assert emissions sequentially using standard suspend methods (like awaitItem).", "It compiles custom modifiers.", "It integrates push notifications."],
        correctIndex: 1,
        explanation: "Turbine provides a clean DSL to collect flows and assert emissions sequentially (e.g., awaitItem) with built-in timeouts."
      }
    ],
    debugging: {
      title: "The Unresponsive Flow Test",
      description: "A student tries to test a cold flow inside runTest, but the test hangs indefinitely because collectors do not terminate.",
      brokenCode: `// ViewModel
val searchFlow = flowOf("Apple", "Banana")

// Test
@Test
fun testSearch() = runTest {
    val list = mutableListOf<String>()
    searchFlow.collect { list.add(it) } // Hangs indefinitely!
    assertEquals(2, list.size)
}`,
      fixedCode: `// Test using Turbine!
@Test
fun testSearch() = runTest {
    searchFlow.test {
        assertEquals("Apple", awaitItem())
        assertEquals("Banana", awaitItem())
        awaitComplete()
    }
}`,
      explanation: "Collecting flows directly inside tests can block the execution thread or hang indefinitely. The fix uses the Turbine library to assert emissions sequentially and cleanly handle stream completion."
    },
    refactoring: {
      title: "Decoupling Dispatcher Injections",
      description: "Hardcoding Dispatchers.IO directly inside ViewModels, making thread execution impossible to override inside unit tests.",
      smellyCode: `class TaskViewModel : ViewModel() {
    fun loadTasks() {
        viewModelScope.launch(Dispatchers.IO) { // Hardcoded dispatcher!
            // Load from database
        }
    }
}`,
      cleanCode: `class TaskViewModel @Inject constructor(
    private val ioDispatcher: CoroutineDispatcher = Dispatchers.IO // Injectable dispatcher!
) : ViewModel() {
    fun loadTasks() {
        viewModelScope.launch(ioDispatcher) {
            // Load from database
        }
    }
} // Overridable in tests by injecting StandardTestDispatcher!`,
      explanation: "Injecting Dispatchers as constructor parameters allows you to override them with a 'TestDispatcher' during unit tests, ensuring deterministic execution on a single thread."
    }
  },
  {
    id: 19,
    theme: "Compose UI Testing & Integration Testing",
    focus: "ComposeTestRule, Semantics nodes, finding nodes, testing user interactions, and E2E integration testing.",
    days: [
      {
        id: 109,
        title: "Day 109: Introduction to Compose UI Testing",
        focus: "Testing UI layouts, setting up ComposeTestRule, finding nodes using Semantics.",
        theory: "Compose UI tests do not use traditional view finders. Learn how Compose uses Semantics trees (which describe UI nodes to accessibility services) to locate and assert layout nodes.",
        practice: "Create an instrumentation UI test that asserts a specific text element exists on screen.",
        homework: "Build an instrumentation test suite verifying text, button states, and layout visibilities on your product card screen.",
        miniChallenge: "Find and assert a composable node exists using its custom 'testTag' modifier.",
        outcome: "You will write local UI tests to find and assert layout nodes in Compose.",
        readTopic: "Android Developers: Testing your Compose layout",
        watchTopic: "Compose UI Testing for Beginners - Philipp Lackner",
        duration: "6-8 Hours"
      },
      {
        id: 110,
        title: "Day 110: Simulating User Interactions",
        focus: "Simulating clicks, scrolls, text inputs, gesture actions.",
        theory: "UI tests must interact with the layout. Learn how to simulate clicks, type text, clear inputs, scroll containers, and execute gestures on matched Semantics nodes.",
        practice: "Write an automated test that types an email into a text field and clicks 'Submit'.",
        homework: "Build a UI test suite that validates input errors, showing snackbar alerts when users type invalid credentials.",
        miniChallenge: "Scroll to a specific item inside a LazyColumn before clicking it.",
        outcome: "You will simulate realistic user interactions in automated Compose UI tests.",
        readTopic: "Android Developers: Interacting with UI elements in Compose",
        watchTopic: "Simulate Clicks and Key Inputs in Compose - Stevdza-San",
        duration: "6-8 Hours"
      },
      {
        id: 111,
        title: "Day 111: Asserting UI State Transitions",
        focus: "Verifying layout updates, loading states, error dialogues.",
        theory: "UI tests must verify visual changes after interactions. Learn to assert node visibilities, check enabled/disabled button states, and verify that progress bars hide on success.",
        practice: "Write a UI test checking that a loading spinner is visible when clicking 'Load' and hides on content load.",
        homework: "Build an automated integration test verifying dynamic card elements, check boxes, and totals are computed correctly.",
        miniChallenge: "Assert that an input field border turns red when validation errors are triggered.",
        outcome: "You will assert that layouts update correctly in response to user actions.",
        readTopic: "Android Developers: Asserting UI states in Compose",
        watchTopic: "Asserting states in Compose UI tests - CodingWithMitch",
        duration: "6-8 Hours"
      },
      {
        id: 112,
        title: "Day 112: Compose UI Testing with Hilt",
        focus: "Decoupling database dependencies during UI tests, writing isolated mocks.",
        theory: "E2E UI tests should not depend on live databases or production networks. Learn how to run Compose UI tests with Hilt, injecting mocked repositories to test UI behaviors in isolation.",
        practice: "Write a Hilt-aware Compose UI test that loads list items from a mock repository.",
        homework: "Build a complete integration test for your recipes app. Inject a mock api and verify search flows.",
        miniChallenge: "Exclude specific network initialization modules from your UI test configuration.",
        outcome: "You will write isolated Compose UI tests with Hilt-injected mocks.",
        readTopic: "Android Developers: Testing Hilt on Android",
        watchTopic: "Hilt UI Integration Testing - Philipp Lackner",
        duration: "6-8 Hours"
      },
      {
        id: 113,
        title: "Day 113: Integration & End-to-End (E2E) Testing",
        focus: "Configuring E2E tests, verifying complete navigation flows.",
        theory: "End-to-End tests verify complete navigation flows and data pipelines. Learn how to write E2E tests that walk through multi-screen processes (e.g., login -> fetch lists -> open details).",
        practice: "Write an E2E test verifying successful login redirects users straight to the dashboard.",
        homework: "Build a complete onboarding E2E test. Navigate through three wizard screens, verify button states, and check final dashboard layouts.",
        miniChallenge: "Verify that deep links launch and open correct details screens.",
        outcome: "You will write robust End-to-End integration tests for multi-screen apps.",
        readTopic: "Android Developers: E2E and Integration Tests",
        watchTopic: "End to End Android Testing - Philipp Lackner",
        duration: "6-8 Hours"
      },
      {
        id: 114,
        title: "Day 114: Automated UI Tests in CI/CD pipelines",
        focus: "Configuring GitHub Actions, running tests in cloud containers, build optimization.",
        theory: "Automated tests must run in CI/CD pipelines to prevent regressions. Learn to configure basic GitHub Actions to compile gradle projects and run unit tests automatically on every pull request.",
        practice: "Write a basic GitHub Actions workflow file (.github/workflows/ci.yml) that builds your app.",
        homework: "Build a complete CI/CD script running checkstyle, linter audits, compile checks, and unit tests on branches.",
        miniChallenge: "Configure workflow cache steps to speed up gradle builds inside CI environments.",
        outcome: "You will integrate automated tests and build checks into CI/CD pipelines.",
        readTopic: "GitHub: Build and Test Android apps with Actions",
        watchTopic: "GitHub Actions for Android Developers - Philipp Lackner",
        duration: "6-8 Hours"
      }
    ],
    checkpoint: "Confirm you understand Semantics finders, click/drag gestures, state assertions, Hilt integration testing, E2E flows, and GitHub Actions CI configs.",
    quiz: [
      {
        question: "How does Jetpack Compose find nodes in automated UI testing?",
        options: ["Using traditional R.id finders.", "Parsing layouts with XML selectors.", "Inspecting Semantics trees, which describe nodes to accessibility services.", "Using CSS class selectors."],
        correctIndex: 2,
        explanation: "Compose uses Semantics trees (Accessibility layers) to find and interact with layout nodes (e.g., using hasText, hasContentDescription)."
      },
      {
        question: "Which modifier is commonly used to add custom tags to composables for easy locating during UI tests?",
        options: ["Modifier.tag()", "Modifier.testTag()", "Modifier.id()", "Modifier.semanticsId()"],
        correctIndex: 1,
        explanation: "Modifier.testTag() assigns a unique test string tag to a composable, allowing you to find it reliably during UI tests."
      },
      {
        question: "Why should we run UI tests with Hilt-injected mock repositories?",
        options: ["Mock repositories speed up UI renders.", "They isolate tests from flaky networks or databases, ensuring UI tests run consistently and reliably.", "Mock repositories are required by the OS.", "They format test results automatically."],
        correctIndex: 1,
        explanation: "Using mock repositories isolates tests from real networks or databases, preventing flakiness and ensuring consistent UI behavior."
      }
    ],
    debugging: {
      title: "The Flaky Asynchronous UI Test",
      description: "A UI test fails intermittently because it attempts to assert a layout node exists before asynchronous background operations complete.",
      brokenCode: `// UI triggers API download
composeTestRule.onNodeWithText("Load").performClick()
// Instantly asserts list item is visible before API responds!
composeTestRule.onNodeWithText("Recipe Title").assertExists()`,
      fixedCode: `composeTestRule.onNodeWithText("Load").performClick()
// Wait for specific nodes to render, preventing flakiness!
composeTestRule.waitUntilAtLeastOneExists(hasText("Recipe Title"), timeoutMillis = 5000)
composeTestRule.onNodeWithText("Recipe Title").assertExists()`,
      explanation: "UI tests are synchronous by default. If your app fetches data asynchronously, the test may assert nodes before they render, causing flakiness. Using 'waitUntil' pauses assertions until requirements are met."
    },
    refactoring: {
      title: "Simplifying Finders with TestTags",
      description: "Using verbose, brittle text matchers that break whenever UI copies or localizations change.",
      smellyCode: `composeTestRule.onNodeWithText("Continue to Checkout Screen")
    .assertHasClickAction()
    .performClick()`,
      cleanCode: `// UI Code
Button(modifier = Modifier.testTag("checkout_btn"), onClick = { /*...*/ }) {
    Text("Continue to Checkout Screen")
}

// Test Code
composeTestRule.onNodeWithTag("checkout_btn")
    .assertHasClickAction()
    .performClick()`,
      explanation: "Using 'testTag' decouples UI tests from localizations. This ensures tests continue passing even if button text or copies change."
    }
  },
  {
    id: 20,
    theme: "Git Mastery, Play Store basics & Career Simulation",
    focus: "Rebase vs Merge, merge conflicts resolution, Play Console apk/aab creation, resume polishing, and portfolio compilation.",
    days: [
      {
        id: 115,
        title: "Day 115: Git Mastery - Rebase vs Merge",
        focus: "Understanding linear history, git rebase, git merge, managing conflicts.",
        theory: "Master advanced version control. Learn how git merge logs non-linear history with merge commits, and how git rebase creates clean linear history by reapplying commits onto targeted branches. Learn to resolve conflicts.",
        practice: "Create separate branches locally, simulate commit divergence, and rebase them cleanly.",
        homework: "Create a mock repository, diverge branch HEADs, trigger and resolve a merge conflict manually in your IDE.",
        miniChallenge: "Execute an interactive git rebase to squash 3 local commits into a single commit.",
        outcome: "You will manage Git branches, rebases, and merge conflicts professionally.",
        readTopic: "Atlassian Git: Git Rebase vs Merge",
        watchTopic: "Git Rebase vs Merge Explained - Philipp Lackner",
        duration: "6-8 Hours"
      },
      {
        id: 116,
        title: "Day 116: Play Store Publishing Foundations",
        focus: "Play Console requirements, signing keys, creating Android App Bundles (AAB).",
        theory: "Discover play store publishing rules. Learn why Google requires Android App Bundles (AAB) to optimize app distribution. Master generating release keystores and signing binaries safely.",
        practice: "Generate a release Keystore file and configure your gradle scripts to sign release builds safely.",
        homework: "Compile a signed release App Bundle (.aab), verifying that proguard optimization and shrinking succeed.",
        miniChallenge: "Verify the difference in binary size between a debug APK and a signed, optimized release AAB.",
        outcome: "You will sign and compile production-ready Android App Bundles.",
        readTopic: "Android Developers: Sign your app",
        watchTopic: "How to publish your app to Google Play Store - Stevdza-San",
        duration: "6-8 Hours"
      },
      {
        id: 117,
        title: "Day 117: Resume & LinkedIn Optimization",
        focus: "Positioning as a self-taught junior, highlighting core skills, active keywords.",
        theory: "Position yourself effectively for the market. Highlight modern tech skills (Kotlin, Compose, Hilt, Room, Coroutines, Flow) and structure your resume around solid portfolio projects rather than missing credentials.",
        practice: "Draft your resume's technical skills and project descriptions, focusing on architectural patterns.",
        homework: "Update your LinkedIn profile with keywords (MVVM, Clean Architecture, Hilt) and write a professional bio.",
        miniChallenge: "Draft a 150-word elevator pitch explaining your journey and technical stack.",
        outcome: "You will optimize your professional resume and profile for recruiter visibility.",
        readTopic: "Android Career Guide: Writing developer resumes",
        watchTopic: "How to get a Junior Android Job - Philipp Lackner",
        duration: "6-8 Hours"
      },
      {
        id: 118,
        title: "Day 118: GitHub Portfolio Polish",
        focus: "Writing comprehensive README files, architectural diagrams, recording mock screens.",
        theory: "Your GitHub profile is your primary developer credential. Learn how to write highly polished READMEs containing architectural diagrams, screenshots, tech stack lists, and future improvements.",
        practice: "Draft a beautiful README markdown file for your primary portfolio project.",
        homework: "Record and embed a GIF or mp4 video preview of your primary app inside its repository README.",
        miniChallenge: "Draw and embed a clear Clean Architecture data flow diagram inside your project README.",
        outcome: "You will present your portfolio projects professionally on GitHub.",
        readTopic: "GitHub: Master Markdown documentation",
        watchTopic: "How to style your GitHub repositories - Philipp Lackner",
        duration: "6-8 Hours"
      },
      {
        id: 119,
        title: "Day 119: Mock Technical Interview Simulation",
        focus: "Practicing high-frequency questions, coding challenges, behavioral responses.",
        theory: "Prepare for interviews. Practice explaining core Kotlin and Android concepts (null safety, lifecycle, recomposition, coroutines) clearly, objectively, and without rambling.",
        practice: "Conduct a self-recording speaking drill answering: 'How does StateFlow differ from SharedFlow?'.",
        homework: "Draft written answers to 10 high-frequency Android and OOP interview questions.",
        miniChallenge: "Explain the Liskov Substitution Principle to a non-technical family member in under 2 minutes.",
        outcome: "You will articulate core technical concepts confidently and professionally.",
        readTopic: "Android Interview Questions Guide",
        watchTopic: "Android Interview Simulation - official Android Developers",
        duration: "6-8 Hours"
      },
      {
        id: 120,
        title: "Day 120: Graduation Capstone Review & Final Audit",
        focus: "Completing all review check lists, evaluating readiness, planning future learning.",
        theory: "Reflect on your 5-month journey. Review your core skills checklist, identify areas for improvement, and plan your continuing education path.",
        practice: "Audit all 8 portfolio repositories, checking that commits are clean, code is formatted, and tests pass.",
        homework: "Write a detailed self-assessment and outline a personal learning plan for your next 3 target topics.",
        miniChallenge: "Squash any remaining debug logs or print statements from your primary portfolio projects.",
        outcome: "You will complete the roadmap as a strong, job-ready Junior Android Developer.",
        readTopic: "Android Roadmaps: Continuous Learning Guides",
        watchTopic: "Continuous growth as a Senior developer - CodingWithMitch",
        duration: "6-8 Hours"
      }
    ],
    checkpoint: "Confirm you understand Git rebase, signing APKs, resume optimization, portfolio presentation, and interview articulation. You are ready to apply for positions!",
    quiz: [
      {
        question: "What is the primary benefit of git rebase over git merge when updating branch histories?",
        options: ["It runs faster.", "It creates a clean, linear commit history by reapplying commits instead of injecting a merge commit.", "It forces changes directly to master.", "It deletes old branches automatically."],
        correctIndex: 1,
        explanation: "Git rebase reapplies commits on top of another base tip, creating a clean linear history that is significantly easier to review."
      },
      {
        question: "Why does Google require developers to upload Android App Bundles (.aab) instead of APKs?",
        options: ["AAB files cannot be cracked.", "Google Play uses AABs to generate optimized APKs tailored to each user's device configuration, reducing download sizes.", "AAB files execute faster on CPUs.", "APKs are no longer supported on any Android devices."],
        correctIndex: 1,
        explanation: "Android App Bundles (AAB) allow Google Play to generate and serve optimized APKs matching specific device configurations, reducing download sizes."
      },
      {
        question: "What is the most critical element to highlight on a self-taught junior's developer resume?",
        options: ["College GPA scores.", "A generic list of languages.", "Highly structured portfolio projects showcasing clean code, modern architecture, and testing.", "Unrelated previous jobs."],
        correctIndex: 2,
        explanation: "A polished portfolio of projects is the best proof of a developer's skills. It demonstrates clean code, modern architecture, and real-world capabilities."
      }
    ],
    debugging: {
      title: "The Signed Keystore Leak",
      description: "A developer hardcoded their production Keystore passwords and file path directly inside their build.gradle file, committing secrets to GitHub.",
      brokenCode: `signingConfigs {
    release {
        storeFile file("/users/john/release.keystore")
        storePassword "secretPass123"
        keyAlias "myKey"
        keyPassword "secretPass123"
    }
}`,
      fixedCode: `signingConfigs {
    release {
        storeFile file(System.getenv("ANDROID_KEYSTORE_PATH") ?: "keystore.properties")
        storePassword System.getenv("ANDROID_KEYSTORE_PASSWORD")
        keyAlias System.getenv("ANDROID_KEY_ALIAS")
        keyPassword System.getenv("ANDROID_KEY_PASSWORD")
    }
}`,
      explanation: "Hardcoding passwords and file paths inside build scripts leaks credentials when committed to Git. The fix retrieves signing configurations from environment variables or secure local properties."
    },
    refactoring: {
      title: "Cleaning up Commit Histories",
      description: "A branch containing multiple messy WIP commits like 'wip', 'fix typo', and 'oops', making pull request reviews difficult.",
      smellyCode: `commit 3f8a9c2: "wip"
commit e5b6c7d: "fix typo"
commit a1b2c3d: "oops fixed code"
commit f4e5d6c: "implemented login"`,
      cleanCode: `commit d8c7b6a: "Feature: Implemented login authentication with input validation"`,
      explanation: "Using interactive rebase (git rebase -i) to squash intermediate 'wip' and 'typo' commits creates a clean, readable, professional commit history for code review."
    }
  }
];
