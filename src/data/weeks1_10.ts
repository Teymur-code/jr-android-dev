import { Week } from "./types";

export const WEEKS_1_10: Week[] = [
  {
    id: 1,
    theme: "Kotlin Basics & Object-Oriented Principles",
    focus: "Variables, Null Safety, Functions, OOP Fundamentals, Classes, Inheritance, and Interfaces.",
    days: [
      {
        id: 1,
        title: "Day 1: Modern Kotlin Syntax, val vs var, Null Safety",
        focus: "Understanding variables, variable mutability, nullability, safe-calls, and Elvis operator.",
        theory: "Learn how the Kotlin compiler enforces type safety. Compare read-only references (val) with mutable variables (var). Understand how null safety avoids NullPointerExceptions. Learn safe-call (?.) and Elvis (?:) syntax.",
        practice: "Create variable declarations for a user profile (id, email, bio). Write functions to extract the username or return 'Guest' if null.",
        homework: "Write a null-safe calculator program that takes nullable numeric inputs and default-evaluates them to zero.",
        miniChallenge: "Deduplicate a list of nullable strings, filtering out all null values in a single expression.",
        outcome: "You will comfortably write null-safe Kotlin statements and understand compiler-enforced types.",
        readTopic: "Kotlin Docs: Null Safety & Basic Types",
        watchTopic: "Kotlin Null Safety & Variables - official JetBrains channel",
        duration: "6-8 Hours"
      },
      {
        id: 2,
        title: "Day 2: Functions, Default Arguments, Lambdas",
        focus: "Function declarations, parameters, return types, single-expression functions, lambda basics.",
        theory: "Explore named and default arguments that reduce boilerplate overload. Understand single-expression shorthand functions and the fundamentals of passing blocks of code as values (lambdas).",
        practice: "Write functions to format currency, taking a dynamic exchange rate with a default value of 1.0.",
        homework: "Create an item pricing utility utilizing lambda closures to calculate taxes dynamically based on different state codes.",
        miniChallenge: "Refactor a 5-line string-parsing function into a single-expression Kotlin function.",
        outcome: "You will write clean, customizable functions using named parameters and simple Lambdas.",
        readTopic: "Kotlin Docs: Functions & Lambdas",
        watchTopic: "Kotlin Functions deep dive - Philipp Lackner",
        duration: "6-8 Hours"
      },
      {
        id: 3,
        title: "Day 3: OOP in Kotlin - Classes, Constructors, Init Blocks",
        focus: "Declaring classes, primary/secondary constructors, property getters/setters, init blocks.",
        theory: "Master the structure of Kotlin classes. Learn how primary constructors declare parameters directly, how init blocks execute initializer code, and how custom getters/setters override properties.",
        practice: "Create a 'BankAccount' class that tracks balances securely with private setters and logs all transactions in an init block.",
        homework: "Build a Book catalog system. Implement validation checking that published dates cannot be in the future.",
        miniChallenge: "Write a class with a custom setter that sanitizes user input (removes HTML tags) automatically upon assignment.",
        outcome: "You will design modern Kotlin classes with encapsulated fields and custom initializers.",
        readTopic: "Kotlin Docs: Classes & Properties",
        watchTopic: "Kotlin Classes and Constructors - CodingWithMitch",
        duration: "6-8 Hours"
      },
      {
        id: 4,
        title: "Day 4: Inheritance, Abstract Classes, Polymorphism",
        focus: "The open keyword, extending classes, overriding methods, and designing abstract base classes.",
        theory: "By default, Kotlin classes are final. Learn how to use the 'open' keyword to allow subclassing. Understand abstract classes that enforce shared contracts without providing concrete implementations.",
        practice: "Create an abstract class 'Vehicle' with abstract function 'drive()'. Implement 'Car' and 'Bicycle' subclasses.",
        homework: "Design an Employee payroll program with abstract base methods and polymorphic salary calculations for hourly vs salaried roles.",
        miniChallenge: "Override a base property in a subclass to make a read-only variable return a dynamically calculated value.",
        outcome: "You will structure hierarchical class structures using inheritance and polymorphism.",
        readTopic: "Kotlin Docs: Inheritance & Abstract Classes",
        watchTopic: "Kotlin Inheritance & Abstract Classes - Stevdza-San",
        duration: "6-8 Hours"
      },
      {
        id: 5,
        title: "Day 5: Interfaces, Multiple Implementations",
        focus: "Designing decoupled code contracts, implementing interfaces, resolving conflicts.",
        theory: "Interfaces are powerful decoupling tools. Understand how Kotlin interfaces support default method implementations, how classes can implement multiple interfaces, and how to resolve matching function signature conflicts.",
        practice: "Create interfaces 'Clickable' and 'Focusable' with default behavior. Resolve the 'onInteract()' signature conflict in a custom 'Button' class.",
        homework: "Build an payment processor engine that supports 'CreditCardPayment' and 'PayPalPayment' via a unified 'PaymentGateway' interface.",
        miniChallenge: "Create a class that implements three interfaces and delegates calls efficiently.",
        outcome: "You will build highly flexible, decoupled business rules utilizing polymorphic interfaces.",
        readTopic: "Kotlin Docs: Interfaces",
        watchTopic: "Kotlin Interfaces Tutorial - official JetBrains",
        duration: "6-8 Hours"
      },
      {
        id: 6,
        title: "Day 6: Advanced OOP - Objects, Companions, Data Classes",
        focus: "Object expressions, singletons, companion objects, and data class compiler-generated methods.",
        theory: "Understand data classes which automatically compile custom equals(), hashCode(), toString(), and copy() methods. Explore singletons via 'object' declarations and factory patterns using 'companion objects'.",
        practice: "Create a 'UserSession' singleton object. Design a 'Product' data class and use copy() to update its price safely.",
        homework: "Design a comprehensive configuration registry. Use a companion object to create factory templates for development vs production variables.",
        miniChallenge: "Implement a deep-equality check comparing two structural data class instances, illustrating standard vs copy results.",
        outcome: "You will leverage data classes for clean data holders and objects for singleton structures.",
        readTopic: "Kotlin Docs: Object Declarations & Data Classes",
        watchTopic: "Kotlin Data Classes & Companion Objects - Philipp Lackner",
        duration: "6-8 Hours"
      }
    ],
    checkpoint: "Confirm you understand null-safety, functions, constructors, class hierarchies, and data classes. You must be comfortable writing command-line Kotlin snippets.",
    quiz: [
      {
        question: "Which keyword is used to declare a variable whose value cannot be reassigned?",
        options: ["var", "val", "const", "final"],
        correctIndex: 1,
        explanation: "val defines a read-only local variable that cannot be reassigned once bound. const is for compile-time constants."
      },
      {
        question: "What does the double-bang (!!) operator do in Kotlin?",
        options: ["Performs a safe-call return.", "Provides a default fallback value if null.", "Forcibly casts a nullable value to non-nullable, throwing NPE if null.", "Checks if a value is of a specific type."],
        correctIndex: 2,
        explanation: "The double-bang (!!) is the non-null assertion operator. It forces the value to be non-nullable, throwing a NullPointerException if it contains null."
      },
      {
        question: "How do you allow a class to be subclassed in Kotlin?",
        options: ["Annotate with @Inheritable.", "Kotlin classes are open by default, nothing is needed.", "Declare the class with the 'open' keyword.", "Make the class 'public'."],
        correctIndex: 2,
        explanation: "By default, all classes in Kotlin are 'final' (cannot be inherited). To allow subclassing, you must mark it with the 'open' keyword."
      }
    ],
    debugging: {
      title: "The NullPointer Calculator",
      description: "A student tried to build an average-grade calculator, but it constantly throws a NullPointerException when empty records are passed.",
      brokenCode: `fun calculateAverage(grades: List<Int?>?): Double {
    var sum = 0
    for (grade in grades!!) {
        sum += grade!!
    }
    return (sum / grades.size).toDouble()
}`,
      fixedCode: `fun calculateAverage(grades: List<Int?>?): Double {
    if (grades == null || grades.isEmpty()) return 0.0
    var sum = 0
    var count = 0
    for (grade in grades) {
        if (grade != null) {
            sum += grade
            count++
        }
    }
    return if (count > 0) sum.toDouble() / count else 0.0
}`,
      explanation: "The broken code uses the unsafe double-bang (!!) operator on the list and on individual nullable grades. If grades is null, or if any individual grade is null, the program crashes with a NullPointerException. The fixed version uses null-safe checks, filters out null values, and handles division-by-zero gracefully."
    },
    refactoring: {
      title: "Eliminating Overloaded Boilerplate",
      description: "A class with multiple constructors mimicking Java's overloaded styles.",
      smellyCode: `class User {
    var name: String
    var email: String
    var age: Int

    constructor(name: String) {
        this.name = name
        this.email = "no-email"
        this.age = 18
    }

    constructor(name: String, email: String) {
        this.name = name
        this.email = email
        this.age = 18
    }

    constructor(name: String, email: String, age: Int) {
        this.name = name
        this.email = email
        this.age = age
    }
}`,
      cleanCode: `class User(
    val name: String,
    val email: String = "no-email",
    val age: Int = 18
)`,
      explanation: "Kotlin supports default parameter values directly in the primary constructor. This completely eliminates the need for redundant secondary constructor overloads, turning a verbose 23-line file into a single, clean, declarative line of code."
    }
  },
  {
    id: 2,
    theme: "Advanced Kotlin & Intro to Jetpack Compose Layouts",
    focus: "Sealed Classes, Generics, Lambdas, Higher-Order Functions, Scope Functions, and Jetpack Compose Basics.",
    days: [
      {
        id: 7,
        title: "Day 7: Sealed Classes, Sealed Interfaces, Enums",
        focus: "Enforcing static type hierarchies, restricting subclassing, exhaustive when expressions.",
        theory: "Explore sealed classes which represent closed, restricted class hierarchies. See how they differ from Enums (which are singletons) by allowing subclasses to hold distinct dynamic state. Master how compiler checks 'when' branches exhaustively.",
        practice: "Build a UI state model (Loading, Success(data), Error(message)) using sealed classes.",
        homework: "Design a network response state engine representing custom status events: Idle, Connecting, Received(payload), Failed(exception).",
        miniChallenge: "Refactor a when statement containing a redundant 'else' branch by converting the input class into a sealed class.",
        outcome: "You will create highly robust state-holders for UI and network models using sealed classes.",
        readTopic: "Kotlin Docs: Sealed Classes & Enums",
        watchTopic: "Kotlin Sealed Classes - Philipp Lackner",
        duration: "6-8 Hours"
      },
      {
        id: 8,
        title: "Day 8: Extension Functions & Generics",
        focus: "Adding methods to classes you don't own; writing type-safe reusable logic.",
        theory: "Learn how Extension Functions add custom functions to any existing class without inheritance. Master Generics (type parameters <T>) to write single, type-safe structures capable of processing multiple object classes.",
        practice: "Create extension functions on String (like '.isValidEmail()') and List (like '.secondOrNull()'). Write a Generic 'Resource<T>' class.",
        homework: "Create an audit logger utilizing a generic 'TransactionRecord<T>' container that prints wrapped transactions with timestamps.",
        miniChallenge: "Write a one-line extension function on Double that automatically formats it into a custom currency string (e.g. '$12.50').",
        outcome: "You will write clean generic wrappers and custom extension utilities.",
        readTopic: "Kotlin Docs: Generics & Extensions",
        watchTopic: "Kotlin Generics Deep Dive - official JetBrains",
        duration: "6-8 Hours"
      },
      {
        id: 9,
        title: "Day 9: Higher-Order Functions, Lambdas, Inline Classes",
        focus: "Passing functions as parameters, returning functions, and minimizing memory overhead.",
        theory: "Higher-Order Functions accept other functions as arguments or return them. Understand Kotlin's function type notation '(Int) -> String' and explore the 'inline' keyword to bypass object allocation overhead in heavy loops.",
        practice: "Write an execution-time logger function that runs any code block and logs how long it took in milliseconds.",
        homework: "Design a generic validation pipeline where items flow through a series of lambdas, failing if any condition returns false.",
        miniChallenge: "Create a higher-order filter function that operates on custom criteria over a custom list of items.",
        outcome: "You will pass functional code blocks as arguments dynamically.",
        readTopic: "Kotlin Docs: Higher-Order Functions",
        watchTopic: "Kotlin Higher Order Functions - Philipp Lackner",
        duration: "6-8 Hours"
      },
      {
        id: 10,
        title: "Day 10: Scope Functions (let, run, with, apply, also)",
        focus: "Selecting scope functions to clean up null-checks, object building, and returns.",
        theory: "Scope functions execute code blocks within an object's context. Learn the vital differences: context object access (this vs it) and return value (context object vs lambda result). Let is for null-safe calls, apply is for object configuration, also is for side effects.",
        practice: "Refactor an old object initializer into a clean builder-style block using apply and also.",
        homework: "Create a file parser pipeline where let, run, and also are chained sequentially to clean, validate, and log records.",
        miniChallenge: "Explain the functional difference between user.apply { name = 'John' } and user.run { name = 'John' }.",
        outcome: "You will choose the perfect scope function to write elegant, idiomatic Kotlin code.",
        readTopic: "Kotlin Docs: Scope Functions",
        watchTopic: "Kotlin Scope Functions - Stevdza-San",
        duration: "6-8 Hours"
      },
      {
        id: 11,
        title: "Day 11: Introduction to Jetpack Compose",
        focus: "Declarative UI paradigm, @Composable, standard composable trees, preview configurations.",
        theory: "Android is transitioning from imperative XML layouts to declarative Jetpack Compose. Learn how UI is written as state-driven functions. Understand how Compose renders trees, and how @Preview displays components inside Android Studio.",
        practice: "Build a custom composable 'GreetingCard' that displays a user's avatar, name, and role inside a Row layout.",
        homework: "Recreate a polished Material 3 business card display containing contact fields, styled with custom backgrounds and rounded corners.",
        miniChallenge: "Enable and configure a Compose Preview with a customized width, height, and dark-theme rendering state.",
        outcome: "You will understand declarative layouts and compose your first static UI screens.",
        readTopic: "Android Developers: Jetpack Compose Basics",
        watchTopic: "Jetpack Compose Tutorial for Beginners - Philipp Lackner",
        duration: "6-8 Hours"
      },
      {
        id: 12,
        title: "Day 12: Core Compose Layouts (Box, Column, Row, Modifiers)",
        focus: "Structuring screen grids, managing element alignments, and applying modifiers.",
        theory: "Learn how Column, Row, and Box act as Compose's layout primitives. Understand Modifiers—how they handle sizing, padding, background, borders, shapes, and touch listeners. Modifier execution order matters!",
        practice: "Build a bento-grid card item containing text overlays, practicing horizontal and vertical stacking with Row and Column.",
        homework: "Create a fully responsive product landing screen with images, ratings, descriptions, buttons, and custom outer-rim borders.",
        miniChallenge: "Verify how swapping the order of modifier functions '.padding(16.dp).background(Color.Red)' vs '.background(Color.Red).padding(16.dp)' changes spacing.",
        outcome: "You will build modern, fluid, custom layouts with Row, Column, Box, and Modifiers.",
        readTopic: "Android Developers: Compose Layouts & Modifiers",
        watchTopic: "Jetpack Compose Modifiers - official Android Developers",
        duration: "6-8 Hours"
      }
    ],
    checkpoint: "Confirm you understand sealed states, generics, scope functions, declarative layouts, and how Modifiers structure Compose UI elements.",
    quiz: [
      {
        question: "Which scope function returns the context object itself, and accesses the object using the 'this' keyword?",
        options: ["let", "run", "apply", "also"],
        correctIndex: 2,
        explanation: "apply returns the context object and uses 'this' for internal scope, making it perfect for configuring object properties."
      },
      {
        question: "What is the primary difference between Sealed Classes and Enums?",
        options: ["Sealed classes cannot have subclasses.", "Enum constants must be strings.", "Sealed class subclasses can have multiple instances with distinct states, whereas Enum constants are singletons.", "There is no difference."],
        correctIndex: 2,
        explanation: "Sealed classes restrict class hierarchies but allow subclasses to be created with dynamic parameters and distinct instances. Enum constants are fixed singletons."
      },
      {
        question: "How does the execution order of Modifiers in Compose behave?",
        options: ["They execute randomly.", "They are processed sequentially from left to right (or top to bottom).", "Outer layout elements take priority.", "Margins always execute last."],
        correctIndex: 1,
        explanation: "In Jetpack Compose, the order of modifier chain applications is sequential. Modifiers are chained, meaning earlier configurations decorate the node before subsequent functions are executed."
      }
    ],
    debugging: {
      title: "The Cluttered Modifier Chain",
      description: "A card layout has broken clipping and padding. The background color overflows the rounded corners, and the spacing looks compressed.",
      brokenCode: `Box(
    modifier = Modifier
        .background(Color.Blue, RoundedCornerShape(8.dp))
        .padding(16.dp)
        .clickable { }
        .size(100.dp)
)`,
      fixedCode: `Box(
    modifier = Modifier
        .size(100.dp)
        .background(Color.Blue, RoundedCornerShape(8.dp))
        .clickable { }
        .padding(16.dp)
)`,
      explanation: "In the broken code, background color is applied to a layout without sizing, and clicking occurs within constrained bounds. Applying size first, then background, then clickable ensures the click visual ripple is aligned, and the padding restricts only internal text."
    },
    refactoring: {
      title: "Simplifying Null-Checks with Let",
      description: "A class containing nested, nested null-checks checking individual properties.",
      smellyCode: `fun processUserProfile(user: User?) {
    if (user != null) {
        val email = user.email
        if (email != null) {
            sendVerificationEmail(email)
            logActivity("Sent email to " + email)
        }
    }
}`,
      cleanCode: `fun processUserProfile(user: User?) {
    user?.email?.let { email ->
        sendVerificationEmail(email)
        logActivity("Sent email to $email")
    }
}`,
      explanation: "Chaining safe-calls (?.) with the scope function 'let' completely flattens nested 'if' blocks, allowing null-safe variables to pass straight into your lambdas without nesting."
    }
  },
  {
    id: 3,
    theme: "Jetpack Compose State & Material 3 UI",
    focus: "State management, Recomposition, remember, mutableStateOf, Material 3, Lists with LazyColumn, and custom scroll behaviors.",
    days: [
      {
        id: 13,
        title: "Day 13: State in Jetpack Compose",
        focus: "State vs Statelessness, mutableStateOf, remember, rememberSaveable.",
        theory: "State is any value that can change over time. Learn how Compose tracks state changes to trigger recomposition. Understand how 'remember' stores state across recompositions, and how 'rememberSaveable' survives orientation changes.",
        practice: "Build an interactive counter button that increments its number on click.",
        homework: "Create an expandable FAQ card that toggles between showing a summarized heading and detail paragraph on click.",
        miniChallenge: "Verify how state is wiped out on device rotation when using 'remember' and write the fix using 'rememberSaveable'.",
        outcome: "You will understand how state controls UI updates and write composables with basic state.",
        readTopic: "Android Developers: State & Composition",
        watchTopic: "Jetpack Compose State - official Android Developers",
        duration: "6-8 Hours"
      },
      {
        id: 14,
        title: "Day 14: State Hoisting & Unidirectional Data Flow",
        focus: "Decoupling state, writing stateless UI, passing events upwards, unidirectional data flow (UDF).",
        theory: "State Hoisting is moving state to a composable's caller to make the composable stateless and reusable. Master the Unidirectional Data Flow pattern where state flows down, and events flow up.",
        practice: "Create a hoisted state layout with an 'InputField' composable that accepts text values and passes typed results to its parent layout.",
        homework: "Build a polished multi-step survey screen where state is hosted in the top-level parent and individual screens are purely stateless.",
        miniChallenge: "Hoist a toggle switch's state out of a custom SettingsItem into a parent layout class.",
        outcome: "You will write decoupled, testable, and reusable stateless composables.",
        readTopic: "Android Developers: Unidirectional Data Flow & State Hoisting",
        watchTopic: "State Hoisting in Jetpack Compose - Philipp Lackner",
        duration: "6-8 Hours"
      },
      {
        id: 15,
        title: "Day 15: Material 3 Design Components",
        focus: "Scaffolding, TopAppBar, FloatingActionButton, Cards, TextFields, custom palettes.",
        theory: "Material 3 is Google's latest design framework. Learn Scaffold which provides a structural layout containing top app bars, floating action buttons, navigation drawers, and bottom bars. Explore core components.",
        practice: "Build a basic application home frame containing a working TopAppBar, a floating button, and card contents.",
        homework: "Build a complete profile details page containing text fields, styled cards, drop-shadow elevations, and custom color accents.",
        miniChallenge: "Customize a text input field to display active leading and trailing icons, custom borders, and error messages.",
        outcome: "You will construct beautiful, unified Material 3 apps with modern structures.",
        readTopic: "Android Developers: Material Design 3 in Compose",
        watchTopic: "Material 3 in Jetpack Compose - Philipp Lackner",
        duration: "6-8 Hours"
      },
      {
        id: 16,
        title: "Day 16: Lazy Layouts (LazyColumn & LazyRow)",
        focus: "Rendering dynamic large-scale scrollable lists efficiently, scroll state.",
        theory: "Traditional RecyclerView is replaced in Compose by LazyColumn and LazyRow. These layouts render only visible items, saving system resources. Master items(), item() blocks, and passing unique keys to preserve item state.",
        practice: "Create a list of 100 random products displaying names and mock price tags, utilizing LazyColumn with unique IDs.",
        homework: "Create a visual newsfeed app layout containing horizontal rows (LazyRow) nested inside a vertical list (LazyColumn).",
        miniChallenge: "Pass custom keys to a dynamic list so items do not lose state or blink during list re-ordering.",
        outcome: "You will render massive lists fluidly with zero performance drops.",
        readTopic: "Android Developers: Lists in Compose",
        watchTopic: "LazyColumn and LazyRow Tutorial - Stevdza-San",
        duration: "6-8 Hours"
      },
      {
        id: 17,
        title: "Day 17: Interactive Lists - Swipe to Dismiss, Click Actions",
        focus: "Handling swipe gestures, click effects, and dynamic list modifications.",
        theory: "Learn how to make list items interactive. See how to attach gesture modifiers, handle item clicks smoothly, and implement modern patterns like swipe-to-dismiss for deleting entries.",
        practice: "Build a todo-list card that updates a strikes-through text style when clicked.",
        homework: "Build a persistent shopping cart item layout. Implement swipe-to-delete that removes item indices from lists with snackbar feedback.",
        miniChallenge: "Trigger a horizontal swipe on a list item that reveals secondary action buttons underneath.",
        outcome: "You will build deeply engaging, reactive user interfaces with gestures and touch responses.",
        readTopic: "Android Developers: Compose Gestures",
        watchTopic: "Swipe to Delete in Jetpack Compose - Philipp Lackner",
        duration: "6-8 Hours"
      },
      {
        id: 18,
        title: "Day 18: Compose Lists Performance & Keying",
        focus: "Preventing lag on heavy lists, stabilizing items, caching layout computations.",
        theory: "Understand composition performance traps. Learn why lists lag when items are not keyed or use unstable classes. Understand how smart recomposition bypasses un-mutated items, and how to profile lists.",
        practice: "Optimize an unkeyed, unstable list of contacts, adding keys and using immutable data wrappers.",
        homework: "Write a contact list aggregator sorting 1000 items with scroll position states, verifying zero lag on low-end emulators.",
        miniChallenge: "Rewrite a recomposing list card to use a lambda-based Modifier parameter to prevent heavy recompositions during scroll.",
        outcome: "You will optimize scrolling performance for heavy, dynamic data dashboards.",
        readTopic: "Android Developers: Performance in Compose",
        watchTopic: "Compose Performance Tuning - official Android Developers",
        duration: "6-8 Hours"
      }
    ],
    checkpoint: "Confirm you understand state, state hoisting, remember vs rememberSaveable, and can construct fluid lists with LazyColumn.",
    quiz: [
      {
        question: "Why should you prefer 'rememberSaveable' over 'remember' in a screen composable?",
        options: ["It performs faster.", "It uses less memory.", "It retains state across activity recreation, such as device rotation or configuration changes.", "It stores data in the local database."],
        correctIndex: 2,
        explanation: "While 'remember' survives recompositions, it loses state if the Activity is recreated (like on rotation). 'rememberSaveable' saves state in a Bundle to survive recreation."
      },
      {
        question: "What is Unidirectional Data Flow (UDF)?",
        options: ["Data flows up, events flow down.", "State flows down, events flow up.", "Multiple databases updating concurrently.", "A direct link between layout XML and views."],
        correctIndex: 1,
        explanation: "Unidirectional Data Flow is a pattern where State flows downwards from parent structures to stateless child layouts, and Events flow upwards from children to parents."
      },
      {
        question: "What should you pass to items() in a LazyColumn to prevent layout blinks and state loss when lists are sorted?",
        options: ["A random number.", "A stable and unique key.", "The item's array index.", "Nothing, it is optimized automatically."],
        correctIndex: 1,
        explanation: "Passing a stable and unique key (like an ID) to items() allows Compose to track nodes accurately, preventing lost states (like checked boxes) when elements shift."
      }
    ],
    debugging: {
      title: "The Resetting Checkbox List",
      description: "A student built a list of todo items. However, when scrolling down, completed checkboxes mysteriously uncheck themselves or shift values.",
      brokenCode: `LazyColumn {
    items(todoList) { todo ->
        var isChecked by remember { mutableStateOf(todo.isCompleted) }
        Checkbox(checked = isChecked, onCheckedChange = { isChecked = it })
        Text(todo.title)
    }
}`,
      fixedCode: `LazyColumn {
    items(todoList, key = { it.id }) { todo ->
        Checkbox(
            checked = todo.isCompleted,
            onCheckedChange = { checked -> onTodoCheckedChange(todo.id, checked) }
        )
        Text(todo.title)
    }
}`,
      explanation: "In the broken code, state ('isChecked') is stored locally inside the list item's Composable scope using 'remember'. Because LazyColumn recycles item views, the local states are reused and wiped during scroll. Hoisting the checked state to the parent data list and passing a unique 'key' resolves the scrolling issue completely."
    },
    refactoring: {
      title: "Decoupling Card Layout with Hoisting",
      description: "A card layout containing internal mutable state, making it highly rigid and impossible to test or reuse.",
      smellyCode: `@Composable
fun CounterCard() {
    var count by remember { mutableStateOf(0) }
    Card {
        Column {
            Text("Clicks: $count")
            Button(onClick = { count++ }) {
                Text("Increment")
            }
        }
    }
}`,
      cleanCode: `@Composable
fun CounterCard(
    count: Int,
    onIncrement: () -> Unit,
    modifier: Modifier = Modifier
) {
    Card(modifier = modifier) {
        Column(modifier = Modifier.padding(16.dp)) {
            Text("Clicks: $count")
            Button(onClick = onIncrement) {
                Text("Increment")
            }
        }
    }
}`,
      explanation: "By hoisting state parameters out of the card composable, the layout becomes completely stateless. It can now be easily tested with mocked inputs and reused in any section of your app."
    }
  },
  {
    id: 4,
    theme: "Navigation, ViewModels & MVVM Architecture Basics",
    focus: "Modern MVVM patterns, Lifecycle ViewModels, Navigation Compose, passing parameters, and clean architectural principles.",
    days: [
      {
        id: 19,
        title: "Day 19: Introduction to MVVM Architecture",
        focus: "Separation of Concerns, Model-View-ViewModel paradigm, data binding concepts.",
        theory: "MVVM is the standard Android architecture pattern. Understand why we separate business logic from UI code. Learn how the View displays pixels, the ViewModel holds screen-related state, and the Model manages core data.",
        practice: "Draw a clean diagram showing MVVM data flows. Write structural pseudo-code organizing classes into MVVM folders.",
        homework: "Refactor a bloated, single-class UI screen by separating mock user records and calculation algorithms into a designated domain layer.",
        miniChallenge: "Identify why updating UI elements directly inside Activity classes breaks testing, citing separation of concerns.",
        outcome: "You will master MVVM conceptual flows and plan organized package structures.",
        readTopic: "Android Developers: Guide to App Architecture",
        watchTopic: "MVVM Architecture in Android - Philipp Lackner",
        duration: "6-8 Hours"
      },
      {
        id: 20,
        title: "Day 20: The Jetpack Lifecycle ViewModel",
        focus: "Instantiating ViewModels, retaining state on recreation, lifecycle callbacks.",
        theory: "A Jetpack ViewModel is designed to store and manage UI-related data in a lifecycle-aware way. ViewModels survive configuration changes (like device rotation), eliminating state losses.",
        practice: "Write a basic 'TaskViewModel' extending ViewModel that manages an in-memory mutable list of tasks.",
        homework: "Create an active stop-watch applet utilizing a custom ViewModel to preserve running durations and stopwatch states on rotation.",
        miniChallenge: "Override 'onCleared()' in a custom ViewModel to demonstrate how memory cleanup is executed when screens exit.",
        outcome: "You will preserve screen data reliably across orientation shifts using ViewModels.",
        readTopic: "Android Developers: ViewModel Overview",
        watchTopic: "Android ViewModel Tutorial - Stevdza-San",
        duration: "6-8 Hours"
      },
      {
        id: 21,
        title: "Day 21: LiveData vs StateFlow in ViewModels",
        focus: "Observing state, converting old patterns to modern Coroutine StateFlow.",
        theory: "Compare legacy LiveData with modern Kotlin Coroutine StateFlow. Learn why StateFlow is preferred: it supports coroutines natively, has cleaner threading control, and is decoupled from Android-specific SDK classes.",
        practice: "Create a ViewModel that exposes a StateFlow stream of UI states (Idle, Loading, Success).",
        homework: "Rewrite an existing LiveData counter ViewModel to use StateFlow and collect values inside Compose UI safely.",
        miniChallenge: "Write a StateFlow state mapper inside a ViewModel that filters a list of items based on typed search strings.",
        outcome: "You will expose and consume stream flow states inside ViewModels securely.",
        readTopic: "Kotlin Docs: StateFlow & SharedFlow",
        watchTopic: "LiveData vs StateFlow in Android - Philipp Lackner",
        duration: "6-8 Hours"
      },
      {
        id: 22,
        title: "Day 22: Navigation Compose Basics",
        focus: "Setting up NavHost, NavController, composable routes, and transitions.",
        theory: "Learn how Navigation Compose manages screen transitions. Set up a NavHost container, bind routes (URL-like paths), and use a NavController to initiate screen navigation programmatically.",
        practice: "Build a 2-screen application structure navigating from a home screen to a detail screen on button click.",
        homework: "Build a multi-screen wizard onboarding layout (Welcome -> Features -> Terms -> Dashboard) using standard Compose navigation.",
        miniChallenge: "Write navigation routes utilizing clean compile-safe companion object string constants.",
        outcome: "You will wire multiple screens together in a single-activity layout.",
        readTopic: "Android Developers: Navigation with Compose",
        watchTopic: "Jetpack Compose Navigation Tutorial - Stevdza-San",
        duration: "6-8 Hours"
      },
      {
        id: 23,
        title: "Day 23: Passing Navigation Arguments",
        focus: "Configuring dynamic parameters, deep-linking, parsing safe arguments.",
        theory: "Learn how to send data between screens. Configure routes to accept arguments (e.g. 'details/{itemId}'), extract passed values inside NavBackStackEntry, and pass them directly into ViewModels.",
        practice: "Create a product list screen that passes a product's unique string ID to a product details screen.",
        homework: "Design a profile management workflow. Pass a user data class payload (as a JSON string argument) to a profile editor screen.",
        miniChallenge: "Add default value types and nullability constraints to navigation arguments inside NavHost composables.",
        outcome: "You will pass arguments safely between UI targets.",
        readTopic: "Android Developers: Pass Data in Compose Navigation",
        watchTopic: "How to Pass Arguments in Compose Navigation - Philipp Lackner",
        duration: "6-8 Hours"
      },
      {
        id: 24,
        title: "Day 24: Core Architecture Best Practices",
        focus: "Unifying architecture, planning portfolios, avoiding common MVVM pitfalls.",
        theory: "Review MVVM architectures. Learn how to structure clean presentation-domain modules. Explore things to avoid: placing context references in ViewModels, writing complex logic in Composable files, and bypassing Repositories.",
        practice: "Create the folder structure of your Month 1 portfolio project, placing views, viewModels, models, and navigation in packages.",
        homework: "Write a complete functional spec and architectural diagram for your TaskFlow Notes portfolio project.",
        miniChallenge: "Explain why putting an 'Activity' context variable in a long-lived 'ViewModel' triggers a memory leak.",
        outcome: "You will write clean, professional, architectural foundations ready for review.",
        readTopic: "Android Developers: App Architecture Best Practices",
        watchTopic: "Common Android Architectural Mistakes - Philipp Lackner",
        duration: "6-8 Hours"
      }
    ],
    checkpoint: "Confirm you understand MVVM data flows, Jetpack ViewModels, StateFlow, and can build structured multi-screen apps with Navigation Compose.",
    quiz: [
      {
        question: "Why should you never pass an Android Context reference into a ViewModel?",
        options: ["It makes the ViewModel slow.", "It triggers immediate crashes.", "It causes memory leaks because ViewModels outlive Activities during rotation.", "It violates Google's copyright."],
        correctIndex: 2,
        explanation: "Activities are destroyed and recreated on rotation. If a ViewModel (which survives) holds a hard reference to the destroyed Activity context, the GC cannot reclaim it, causing a memory leak."
      },
      {
        question: "How do you navigate to a screen route with arguments, e.g. 'details' with value '5'?",
        options: ["navController.navigate('details?id=5')", "navController.navigateTo(DetailsScreen(5))", "navController.navigate('details/5')", "navController.push('details', 5)"],
        correctIndex: 2,
        explanation: "In Navigation Compose, dynamic routes are built similarly to URL segments. You navigate using 'details/5' if the registered NavHost route matches 'details/{id}'."
      },
      {
        question: "Which collection method is highly recommended for collecting StateFlow values in Jetpack Compose safely?",
        options: ["state.collect()", "state.collectAsStateWithLifecycle()", "state.collectAsState()", "state.getValue()"],
        correctIndex: 1,
        explanation: "'collectAsStateWithLifecycle()' is the recommended method. It automatically pauses stream collections when the app goes into the background, saving precious CPU and battery."
      }
    ],
    debugging: {
      title: "The Leaky ViewModel Context",
      description: "A developer is storing a Toast context reference inside their ViewModel to display messages, causing massive memory leaks when rotated.",
      brokenCode: `class MainViewModel(private val context: Context) : ViewModel() {
    fun showToast(message: String) {
        Toast.makeText(context, message, Toast.LENGTH_SHORT).show()
    }
}`,
      fixedCode: `class MainViewModel : ViewModel() {
    private val _eventFlow = MutableSharedFlow<String>()
    val eventFlow = _eventFlow.asSharedFlow()

    fun triggerMessage(message: String) {
        viewModelScope.launch {
            _eventFlow.emit(message)
        }
    }
}`,
      explanation: "In the broken code, holding direct Context references triggers memory leaks. The fixed version resolves this by exposing an observable SharedFlow event. The UI layer (which owns the Context) collects this flow and renders the Toast safely."
    },
    refactoring: {
      title: "Consolidating State in ViewModels",
      description: "A ViewModel exposing multiple distinct, uncoupled mutable states, causing layout inconsistencies and rendering blinks.",
      smellyCode: `class UserViewModel : ViewModel() {
    val isLoading = mutableStateOf(false)
    val userName = mutableStateOf("")
    val userAge = mutableStateOf(0)
    val errorMessage = mutableStateOf<String?>(null)
}`,
      cleanCode: `data class UserUiState(
    val isLoading: Boolean = false,
    val userName: String = "",
    val userAge: Int = 0,
    val errorMessage: String? = null
)

class UserViewModel : ViewModel() {
    private val _uiState = MutableStateFlow(UserUiState())
    val uiState = _uiState.asStateFlow()

    fun updateLoading(loading: Boolean) {
        _uiState.update { it.copy(isLoading = loading) }
    }
}`,
      explanation: "Consolidating loose, uncoupled state variables into a single, unified immutable 'UiState' data class makes the UI easier to manage, prevents partial states, and guarantees thread-safe rendering."
    }
  },
  {
    id: 5,
    theme: "Asynchronous Coding with Kotlin Coroutines",
    focus: "Concurrency, Threads, Coroutine Builders (launch, async), Dispatchers, suspend functions, and Coroutine Scopes.",
    days: [
      {
        id: 25,
        title: "Day 25: Concurrency, Threads & Async Challenges",
        focus: "Understanding thread limitations, thread blocking, UI freezing, introduction to coroutines.",
        theory: "Master thread mechanics. Learn how the CPU switches execution context, why blocking the main thread freezes the Android UI, and how coroutines act as lightweight, non-blocking virtual threads.",
        practice: "Write code to spawn threads manually. Observe and log thread names in the console.",
        homework: "Create a simple console simulation showing thread locking and write down how it impacts user experience.",
        miniChallenge: "Trigger a thread freeze using Thread.sleep(5000) and observe how the UI blocks.",
        outcome: "You will understand threading structures and are ready for non-blocking operations.",
        readTopic: "Kotlin Docs: Coroutines Overview",
        watchTopic: "Kotlin Coroutines Tutorial - Philipp Lackner",
        duration: "6-8 Hours"
      },
      {
        id: 26,
        title: "Day 26: Suspend Functions & Coroutine Scopes",
        focus: "The suspend keyword, non-blocking calls, GlobalScope vs Lifecycle Scopes.",
        theory: "Suspend functions are the core building blocks of coroutines. Learn how the 'suspend' keyword allows functions to yield thread execution without blocking. Explore lifecycle-aware scopes like viewModelScope.",
        practice: "Write a suspend function 'fetchData()' that simulates a network call using delay() and returns data.",
        homework: "Create a chain of suspend functions that execute dependent calculations sequentially without blocking the calling thread.",
        miniChallenge: "Explain the difference between Thread.sleep() and coroutines' delay() under heavy load.",
        outcome: "You will write custom suspend functions and manage coroutine lifecycles.",
        readTopic: "Kotlin Docs: Suspend Functions",
        watchTopic: "Suspend Functions in Kotlin - Stevdza-San",
        duration: "6-8 Hours"
      },
      {
        id: 27,
        title: "Day 27: Coroutine Builders (launch vs async)",
        focus: "Fire-and-forget tasks, returning deferred results, parallel execution.",
        theory: "Coroutine builders create new coroutines. Learn 'launch' for fire-and-forget background operations returning a Job. Learn 'async' for parallel executions that return a Deferred<T> result using await().",
        practice: "Execute two mock network fetch calls in parallel using async/await, returning combined data.",
        homework: "Build a bulk data processing engine that fetches user metrics, profiles, and logs in parallel, timing the execution speedups.",
        miniChallenge: "Convert a sequential launching loop into parallel execution using async, measuring performance increases.",
        outcome: "You will run asynchronous background operations in parallel.",
        readTopic: "Kotlin Docs: Coroutine Builders",
        watchTopic: "Coroutine Builders launch vs async - CodingWithMitch",
        duration: "6-8 Hours"
      },
      {
        id: 28,
        title: "Day 28: Dispatchers & Thread Switching",
        focus: "Dispatchers.Main, IO, and Default, switching execution contexts with withContext.",
        theory: "Dispatchers control which thread executing coroutines run on. Master when to use Dispatchers.Main (UI rendering), IO (disk/network database writes), and Default (heavy calculations). Learn withContext to shift threads safely.",
        practice: "Write a coroutine that switches context from Main to IO to parse a mock file, and switches back to Main to show UI success.",
        homework: "Write a heavy sorting algorithm running inside a ViewModel, ensuring operations execute on Dispatchers.Default.",
        miniChallenge: "Measure if updating a Composable's state directly inside a Dispatchers.IO context throws an exception.",
        outcome: "You will shift coroutine execution contexts safely to keep the UI smooth.",
        readTopic: "Kotlin Docs: Coroutine Context & Dispatchers",
        watchTopic: "Dispatchers in Coroutines - Stevdza-San",
        duration: "6-8 Hours"
      },
      {
        id: 29,
        title: "Day 29: Coroutine Job Lifecycle, Cancellation & Timeouts",
        focus: "Active, Completed, Cancelled states, managing cooperative cancellation, withTimeout.",
        theory: "Coroutines are cooperative. A running coroutine must check for active cancellation states using ensureActive() or isActive. Learn how withTimeout handles timeouts gracefully.",
        practice: "Write an infinite loop coroutine that checks isActive periodically and terminates clean upon cancellation.",
        homework: "Build a mock file downloader that supports immediate manual cancellation, printing progress states.",
        miniChallenge: "Wrap a long computation in 'withTimeout(2000)' and handle the resulting TimeoutCancellationException safely.",
        outcome: "You will handle coroutine execution lifecycles and cancellations cleanly.",
        readTopic: "Kotlin Docs: Cancellation & Timeouts",
        watchTopic: "Coroutine Cancellation Tutorial - Philipp Lackner",
        duration: "6-8 Hours"
      },
      {
        id: 30,
        title: "Day 30: Exception Handling in Coroutines",
        focus: "CoroutineExceptionHandler, try-catch scopes, SupervisorJob vs Job.",
        theory: "Unhandled exceptions in coroutines propagate up and crash the app. Learn to use CoroutineExceptionHandler. Understand why child exceptions cancel siblings in standard Jobs, and how SupervisorJobs isolate failures.",
        practice: "Build a SupervisorJob pipeline where a failure in a 'fetchComments' coroutine does not cancel 'fetchPostDetails'.",
        homework: "Create an API client error handler that wraps asynchronous coroutine blocks in try-catch and maps exceptions to UI messages.",
        miniChallenge: "Compare results when wrapping exceptions inside launch vs catching them inside async await wrappers.",
        outcome: "You will build reliable coroutine pipelines that handle runtime errors gracefully.",
        readTopic: "Kotlin Docs: Coroutines Exceptions",
        watchTopic: "Exception Handling in Coroutines - Philipp Lackner",
        duration: "6-8 Hours"
      }
    ],
    checkpoint: "Confirm you understand suspend functions, Coroutine builders, Dispatchers, cancellation, SupervisorJob, and exception handling.",
    quiz: [
      {
        question: "Which Coroutine builder should you use if you need to run tasks in parallel and await their combined results?",
        options: ["launch", "async", "runBlocking", "withContext"],
        correctIndex: 1,
        explanation: "'async' is specifically designed to perform parallel operations. It returns a Deferred value that you call .await() on to receive results."
      },
      {
        question: "How does a SupervisorJob differ from a standard Job in Coroutines?",
        options: ["It executes faster.", "It executes only on Dispatchers.Main.", "A failure in one child coroutine does not cancel its sibling coroutines.", "It cannot be cancelled."],
        correctIndex: 2,
        explanation: "In a standard Job, a failure in any child coroutine propagates and cancels the entire parent scope, including siblings. A SupervisorJob isolates failures."
      },
      {
        question: "What is the non-blocking equivalent of Thread.sleep() in Kotlin Coroutines?",
        options: ["Thread.pause()", "sleep()", "delay()", "suspend()"],
        correctIndex: 2,
        explanation: "'delay()' is a special suspend function that suspends the coroutine's execution without blocking the underlying thread, allowing other processes to run."
      }
    ],
    debugging: {
      title: "The Frozen Network Thread",
      description: "A student tried to write a database sync function inside launch, but the main thread is locked, causing an Application Not Responding (ANR) dialog.",
      brokenCode: `viewModelScope.launch {
    // Simulating database write
    Thread.sleep(5000)
    _state.value = "Data Cached"
}`,
      fixedCode: `viewModelScope.launch {
    withContext(Dispatchers.IO) {
        // Run blocking task safely on worker threads
        Thread.sleep(5000) 
    }
    _state.value = "Data Cached"
}`,
      explanation: "Even inside launch, executing a blocking method like Thread.sleep() blocks the active calling thread. If called from Main scope, it blocks the UI thread. The fix wraps the blocking task in withContext(Dispatchers.IO)."
    },
    refactoring: {
      title: "Decoupling Parallel Fetches",
      description: "Fetching user metadata and product tables sequentially inside a coroutine, doubling the required screen wait times.",
      smellyCode: `viewModelScope.launch {
    val profile = networkApi.fetchProfile() // takes 2 sec
    val orders = networkApi.fetchOrders()   // takes 2 sec
    _uiState.value = UiState.Success(profile, orders)
}`,
      cleanCode: `viewModelScope.launch {
    val profileDeferred = async { networkApi.fetchProfile() }
    val ordersDeferred = async { networkApi.fetchOrders() }
    _uiState.value = UiState.Success(profileDeferred.await(), ordersDeferred.await())
}`,
      explanation: "By wrapping sequential API calls in parallel 'async' blocks, both requests execute at the same time. This slashes the user's wait time in half."
    }
  },
  {
    id: 6,
    theme: "Reactive Streams with Kotlin Flows",
    focus: "Flow API, Cold Streams, flow builder, operators, flow collection, StateFlow, SharedFlow, and flowWithLifecycle.",
    days: [
      {
        id: 31,
        title: "Day 31: Introduction to Kotlin Flow",
        focus: "What is Flow, Cold streams, hot streams, declaring basic flow builders.",
        theory: "Learn why Flow represents a reactive stream of data that emits multiple values sequentially. Master the difference: Flows are cold (only run when collected), unlike hot channels.",
        practice: "Write a flow builder emitting countdown timer numbers from 10 to 1 with 1-second delays.",
        homework: "Create a reactive sensory data simulation flow that regularly emits mock compass headings.",
        miniChallenge: "Verify that a flow does not execute its initial logger code until the collector starts.",
        outcome: "You will declare, trigger, and collect basic reactive streams using Kotlin Flow.",
        readTopic: "Kotlin Docs: Asynchronous Flow",
        watchTopic: "Kotlin Flow for Beginners - Philipp Lackner",
        duration: "6-8 Hours"
      },
      {
        id: 32,
        title: "Day 32: Flow Intermediate Operators",
        focus: "Transforming flow data using map, filter, transform, and take.",
        theory: "Intermediate operators are applied to a Flow to transform data upstream. Learn how operators like map (modifies elements), filter (selects items), and take (truncates emissions) are cold and return a new Flow.",
        practice: "Create a flow emitting integers 1 to 20, filtering out odd numbers and squaring even values.",
        homework: "Build a raw text file parsing flow. Clean whitespace, capitalize strings, and skip comment lines dynamically using operators.",
        miniChallenge: "Write a single custom 'transform' operator block that maps list indices into structured data class instances.",
        outcome: "You will create custom reactive data pipelines by chaining flow operators.",
        readTopic: "Kotlin Docs: Flow Operators",
        watchTopic: "Kotlin Flow Operators - Stevdza-San",
        duration: "6-8 Hours"
      },
      {
        id: 33,
        title: "Day 33: Flow Terminal Operators",
        focus: "Collecting, reducing, folding, and converting flows to lists.",
        theory: "Terminal operators are suspend functions that trigger flow collection. Explore collect() for consuming data, first() for singular extractions, reduce() for iterative aggregations, and toList() for list creation.",
        practice: "Run aggregates on an input flow of transactions, calculating sum totals using reduce.",
        homework: "Build a network log inspector that collects emitted HTTP strings, combining them into a single archive block.",
        miniChallenge: "Compare the performance outcomes of collect() vs collectLatest() on a slow network consumer.",
        outcome: "You will collect streams and run aggregate functions on flows.",
        readTopic: "Kotlin Docs: Flow Collection",
        watchTopic: "Flow Terminal Operators - CodingWithMitch",
        duration: "6-8 Hours"
      },
      {
        id: 34,
        title: "Day 34: Threading in Flows & Flow Context",
        focus: "Understanding the flowOn operator, preserving collection safety.",
        theory: "Flow collection is context-preserving: it runs in the context of the calling thread. Changing execution thread upstream is done exclusively with flowOn. Never use withContext inside flow builder blocks!",
        practice: "Write a flow emitting heavy computations, configuring upstream execution on Dispatchers.Default using flowOn.",
        homework: "Build a local file index searcher flow. Ensure IO file scanning runs on Dispatchers.IO while the consumer collects on Main.",
        miniChallenge: "Attempt to emit from a Flow block wrapping withContext(Dispatchers.IO) and explain the crash.",
        outcome: "You will manage threading inside reactive streams safely using flowOn.",
        readTopic: "Kotlin Docs: Flow Context",
        watchTopic: "Flow Threading and flowOn - Philipp Lackner",
        duration: "6-8 Hours"
      },
      {
        id: 35,
        title: "Day 35: Handling Errors & Retries in Flows",
        focus: "Catch operator, retrying failed collections, completing flows cleanly.",
        theory: "Flows are structured to handle downstream failures. Master catching exceptions cleanly using the catch operator, retrying failed requests using retry() or retryWhen(), and completing flows with 'onCompletion'.",
        practice: "Wrap a flow in a catch block to prevent network crashes, emitting a local data fallback.",
        homework: "Write an API polling flow that retries failed connections up to 3 times with exponential backoff delays.",
        miniChallenge: "Identify why applying a catch operator below a terminal collect block fails to intercept collector exceptions.",
        outcome: "You will build resilient data streams that recover from network and database failures.",
        readTopic: "Kotlin Docs: Flow Exceptions",
        watchTopic: "Flow Error Handling & Retries - Philipp Lackner",
        duration: "6-8 Hours"
      },
      {
        id: 36,
        title: "Day 36: Flow Buffering & Flow Flattening",
        focus: "Solving fast emitter vs slow consumer bottlenecks, flatMapConcat vs flatMapLatest.",
        theory: "Learn how buffering decoupling keeps flows fast when consumers lag. Master flow flattening operators like flatMapConcat, flatMapMerge, and flatMapLatest to flatten nested flows.",
        practice: "Implement buffering on a countdown flow. Observe how emissions skip lagging constraints.",
        homework: "Create an active location auto-suggest flow. Flatten fast keyboard inputs using flatMapLatest to trigger API queries.",
        miniChallenge: "Describe how flatMapLatest prevents stale searches on keyboard text changes.",
        outcome: "You will resolve streaming bottlenecks and manage nested flows smoothly.",
        readTopic: "Kotlin Docs: Buffering & Flattening",
        watchTopic: "Flow FlatMap Flattening Deep Dive - Philipp Lackner",
        duration: "6-8 Hours"
      }
    ],
    checkpoint: "Confirm you understand cold flow paradigms, map/filter operators, flowOn threading, catch exceptions, and flatMap flattening.",
    quiz: [
      {
        question: "How do you correctly change the thread context of a flow's upstream operations?",
        options: ["Wrap the builder inside withContext()", "Apply the flowOn() operator to the flow chain", "Run the collector on a different thread", "Flows are always synchronous and threading cannot be changed"],
        correctIndex: 1,
        explanation: "The 'flowOn()' operator is the only safe way to change the context of upstream operations. It respects flow preservation rules."
      },
      {
        question: "What makes a Flow 'Cold'?",
        options: ["It executes immediately when created.", "It freezes the UI thread.", "It does not emit values or execute block code until a terminal collector starts.", "It requires a cold CPU to run."],
        correctIndex: 2,
        explanation: "Flows are cold, meaning they do not allocate resources or execute code until a terminal operator (like collect) is called on them."
      },
      {
        question: "Which flatMap operator is best for search-suggestions to cancel older, stale network queries?",
        options: ["flatMapConcat", "flatMapMerge", "flatMapLatest", "flatMapSequence"],
        correctIndex: 2,
        explanation: "'flatMapLatest' automatically cancels the collection of any previous flow as soon as a new event is emitted. This is perfect for search auto-suggest features."
      }
    ],
    debugging: {
      title: "The Upstream Context Violation",
      description: "A student tried to switch dispatcher contexts inside their flow builder block, causing an immediate IllegalStateException crash.",
      brokenCode: `fun fetchNumbers(): Flow<Int> = flow {
    withContext(Dispatchers.IO) {
        for (i in 1..5) {
            emit(i)
        }
    }
}`,
      fixedCode: `fun fetchNumbers(): Flow<Int> = flow {
    for (i in 1..5) {
        emit(i)
    }
}.flowOn(Dispatchers.IO)`,
      explanation: "Flow emission is strictly bound to the collector's context. Trying to change the context inside the flow block with 'withContext' violates context preservation, triggering a crash. The correct approach is using the '.flowOn()' operator on the flow chain."
    },
    refactoring: {
      title: "Streamlining Nested Collections",
      description: "Repeatedly nesting manual collections to fetch detail lists for active profiles.",
      smellyCode: `viewModelScope.launch {
    userFlow.collect { user ->
        networkApi.fetchDetailsFlow(user.id).collect { details ->
            _state.value = details
        }
    }
}`,
      cleanCode: `viewModelScope.launch {
    userFlow
        .flatMapLatest { user -> networkApi.fetchDetailsFlow(user.id) }
        .collect { details -> _state.value = details }
}`,
      explanation: "Using flattening operators like flatMapLatest flattens nested collect scopes. This automatically handles child collections and cancels stale operations on updates."
    }
  },
  {
    id: 7,
    theme: "State Management & Shared Flow Streams",
    focus: "StateFlow, SharedFlow, converting cold flows to hot flows, lifecycle-safe collection in Compose.",
    days: [
      {
        id: 37,
        title: "Day 37: Hot Streams vs Cold Streams",
        focus: "Understanding Hot streams, multicast emissions, channels, and event buses.",
        theory: "Cold streams only emit to one subscriber and execute code on subscription. Hot streams exist independently, emit to multiple subscribers simultaneously, and do not rerun calculations on new subscriptions.",
        practice: "Create a hot channel that broadcasts sensor values to multiple listeners concurrently.",
        homework: "Build a mock GlobalChatEventBus where users can subscribe to stream messages, testing the hot multicast behavior.",
        miniChallenge: "Log context execution to illustrate how cold flows rerun code for each subscriber, whereas hot flows do not.",
        outcome: "You will master the structural difference between hot and cold streams.",
        readTopic: "Kotlin Docs: Channels & Hot Streams",
        watchTopic: "Hot vs Cold Flows - Philipp Lackner",
        duration: "6-8 Hours"
      },
      {
        id: 38,
        title: "Day 38: StateFlow - The Modern State Holder",
        focus: "MutableStateFlow, state consolidation, state propagation, replacing LiveData.",
        theory: "StateFlow is a state-holder observable hot flow that holds a single current state value and emits it to new subscribers. It requires an initial value and is perfect for holding UI states in ViewModels.",
        practice: "Write a ViewModel that exposes a StateFlow representing product listings, updating states on search query.",
        homework: "Create an offline sync progress ViewModel. Use a StateFlow to hold precise synchronization percentage states.",
        miniChallenge: "Verify how StateFlow deduplicates emissions by emitting the exact same value twice and tracking recompositions.",
        outcome: "You will manage persistent UI screen states inside ViewModels using StateFlow.",
        readTopic: "Kotlin Docs: StateFlow",
        watchTopic: "StateFlow Tutorial - Stevdza-San",
        duration: "6-8 Hours"
      },
      {
        id: 39,
        title: "Day 39: SharedFlow - One-Time Event Handling",
        focus: "Exposing one-off actions, navigation, alerts, custom replay parameters.",
        theory: "SharedFlow is an event-holder hot flow. It does not require an initial state, can replay a history of events, and is perfect for one-off actions like displaying snackbars, navigation events, or playing alerts.",
        practice: "Create a SharedFlow to emit click alerts from a ViewModel, collecting and rendering them in Compose.",
        homework: "Build an API login coordinator ViewModel. Expose a SharedFlow to emit dynamic 'GoToDashboard' or 'ShowAuthFailedDialog' actions.",
        miniChallenge: "Configure a SharedFlow with a custom 'replay = 2' parameter and analyze how many items backlog to new subscribers.",
        outcome: "You will manage transient, non-persistent events safely in your ViewModels.",
        readTopic: "Kotlin Docs: SharedFlow",
        watchTopic: "SharedFlow in Android - Philipp Lackner",
        duration: "6-8 Hours"
      },
      {
        id: 40,
        title: "Day 40: Converting Cold Flows to Hot (stateIn & shareIn)",
        focus: "Sharing flows, configuring SharingStarted policies, caching stream data.",
        theory: "Learn how to convert cold flows (like database streams) into hot flows. Master stateIn() and shareIn() operators. Understand SharingStarted policies: Eagerly, Lazily, and WhileSubscribed(5000).",
        practice: "Convert a cold database flow into a StateFlow using stateIn, configuring SharingStarted.WhileSubscribed(5000).",
        homework: "Build an active stock ticker application. Share cold network streams across multiple detail pages efficiently.",
        miniChallenge: "Explain why SharingStarted.WhileSubscribed(5000) is preferred for conserving battery when apps are backgrounded.",
        outcome: "You will convert cold flow pipelines into efficient hot flows.",
        readTopic: "Kotlin Docs: stateIn & shareIn",
        watchTopic: "stateIn and shareIn Operators - Philipp Lackner",
        duration: "6-8 Hours"
      },
      {
        id: 41,
        title: "Day 41: Lifecycle-Aware Flow Collection",
        focus: "Using collectAsStateWithLifecycle, avoiding memory leaks, lifecycle triggers.",
        theory: "Collecting flows in Android must respect UI lifecycles. Standard collectAsState() keeps stream collections active in the background, wasting CPU and battery. Learn why collectAsStateWithLifecycle() is the secure gold standard.",
        practice: "Update a ViewModel collection flow inside a screen Composable, replacing collectAsState with collectAsStateWithLifecycle.",
        homework: "Build a battery-monitoring dashboard that collects mock battery-percentage logs, verifying collection pauses when the app goes background.",
        miniChallenge: "Observe collection logs in the background to verify how lifecycle-aware collectors pause flows.",
        outcome: "You will write safe, highly-efficient, background-friendly flow collection streams.",
        readTopic: "Android Developers: Consume Flows Safely",
        watchTopic: "collectAsStateWithLifecycle Deep Dive - Philipp Lackner",
        duration: "6-8 Hours"
      },
      {
        id: 42,
        title: "Day 42: Modern Flow Architecture Integration",
        focus: "UDF design pattern, combining multiple flows, compiling production screens.",
        theory: "Combine flow operators to build advanced MVVM screens. Learn to use combine() to merge search filters, sort criteria, and listings streams into a unified uiState Flow.",
        practice: "Write a combine flow merging active filters (category) and product streams in a search ViewModel.",
        homework: "Write a fully functional mock inventory dashboard combining searching, ascending sorting, and categorized grouping flows.",
        miniChallenge: "Combine three flows of different types into a single unified dashboard data object.",
        outcome: "You will aggregate complex, multi-source reactive data states into single clean UI states.",
        readTopic: "Android Developers: Flow Architecture Guide",
        watchTopic: "Combining Flows in Kotlin - CodingWithMitch",
        duration: "6-8 Hours"
      }
    ],
    checkpoint: "Confirm you understand Hot vs Cold streams, StateFlow, SharedFlow, shareIn, stateIn, lifecycle-safe collections, and Flow combine operations.",
    quiz: [
      {
        question: "Why is 'SharingStarted.WhileSubscribed(5000)' preferred when converting database flows to stateIn?",
        options: ["It keeps the database running forever.", "It delays emission by 5 seconds.", "It waits 5 seconds after the last UI subscriber disconnects before stopping the upstream flow, preventing restarts during configuration changes.", "It optimizes RAM usage by 50%."],
        correctIndex: 2,
        explanation: "WhileSubscribed(5000) prevents upstream flow restarts during rapid screen rotation (where the collector temporarily unsubscribes), while safely backgrounding collections if the screen is permanently closed."
      },
      {
        question: "What is the key difference between StateFlow and SharedFlow?",
        options: ["StateFlow does not support threads.", "StateFlow holds a single current value and emits it instantly to new collectors; SharedFlow emits events and does not hold state.", "SharedFlow cannot emit lists.", "There is no functional difference."],
        correctIndex: 1,
        explanation: "StateFlow is a state-holder that holds a single state and requires an initial value. SharedFlow is an event stream designed for transient, one-off events with no initial state."
      },
      {
        question: "Why should you use 'collectAsStateWithLifecycle()' inside your Compose screens?",
        options: ["It runs faster.", "It automatically pauses flow collection when the Android Lifecycle enters STOPPED, conserving critical CPU and battery.", "It prevents SQL injections.", "It is required to run Compose previews."],
        correctIndex: 1,
        explanation: "collectAsStateWithLifecycle is lifecycle-aware. It pauses collection when the screen is hidden (backgrounded) and resumes when it is visible again, saving resource consumption."
      }
    ],
    debugging: {
      title: "The Persistent Snackbar Loop",
      description: "A student used a StateFlow to trigger dynamic snackbar messages. However, every time the screen is rotated, the snackbar pops up again, annoying users.",
      brokenCode: `// ViewModel
val toastState = MutableStateFlow<String?>(null)

// UI
val message by viewModel.toastState.collectAsStateWithLifecycle()
message?.let {
    snackbarHostState.showSnackbar(it)
}`,
      fixedCode: `// ViewModel
private val _toastEvent = MutableSharedFlow<String>()
val toastEvent = _toastEvent.asSharedFlow()

// UI
LaunchedEffect(Unit) {
    viewModel.toastEvent.collectLatest { message ->
        snackbarHostState.showSnackbar(message)
    }
}`,
      explanation: "StateFlow is a state holder. When the screen rotates, the Composable is recreated and re-collects the current StateFlow value, triggering the snackbar again. The fix uses a SharedFlow, which emits events that do not persist across configuration changes."
    },
    refactoring: {
      title: "Combining Multi-Flow States",
      description: "Manually collecting three different flows inside the ViewModel and updating a single UI state, creating massive boilerplate.",
      smellyCode: `class ListViewModel : ViewModel() {
    val search = MutableStateFlow("")
    val category = MutableStateFlow("")
    val items = MutableStateFlow<List<Item>>(emptyList())
    val filteredItems = MutableStateFlow<List<Item>>(emptyList())

    init {
        viewModelScope.launch {
            search.collect { query ->
                applyFilters()
            }
        }
        viewModelScope.launch {
            category.collect { cat ->
                applyFilters()
            }
        }
    }
    private fun applyFilters() { /* manual filtering logic */ }
}`,
      cleanCode: `class ListViewModel : ViewModel() {
    val search = MutableStateFlow("")
    val category = MutableStateFlow("")
    val items = MutableStateFlow<List<Item>>(emptyList())

    val filteredItems = combine(items, search, category) { itemList, query, cat ->
        itemList.filter {
            it.name.contains(query, ignoreCase = true) &&
            (cat.isEmpty() || it.category == cat)
        }
    }.stateIn(viewModelScope, SharingStarted.WhileSubscribed(5000), emptyList())
}`,
      explanation: "Using the 'combine' operator aggregates multiple cold or hot flows into a single reactive stream. This eliminates redundant manual collectors and keeps your state transformations clean and declarative."
    }
  },
  {
    id: 8,
    theme: "Local Persistence with Room Database",
    focus: "SQLite basics, Room Database architecture, Entity declarations, DAOs, Database class, and Room Migrations.",
    days: [
      {
        id: 43,
        title: "Day 43: SQLite Foundations & Intro to Room",
        focus: "SQL fundamentals, tables, rows, SQL queries, introduction to Room architecture.",
        theory: "Learn why offline databases are vital for mobile apps. Master basic SQL queries (SELECT, INSERT, UPDATE, DELETE). Understand how Google Room acts as an ORM abstraction layer on top of SQLite, providing compile-time query validation.",
        practice: "Write standard SQL syntax to query a mock table. Map database schemas into conceptual entities.",
        homework: "Create an offline catalog design planning SQL tables, columns, primary keys, and data types for an inventory manager.",
        miniChallenge: "Verify how Room handles illegal SQL statements (like syntax errors) at compile-time by writing mock structures.",
        outcome: "You will understand SQL structures and setup Room database blueprints.",
        readTopic: "Android Developers: Save Data with Room",
        watchTopic: "Room Database Guide for Beginners - Philipp Lackner",
        duration: "6-8 Hours"
      },
      {
        id: 44,
        title: "Day 44: Room Entities & Primary Keys",
        focus: "Declaring @Entity classes, configuring column names, defining unique keys, and primary indices.",
        theory: "Learn how to define Room entities. Master @Entity annotations, @PrimaryKey configuration, auto-generation parameters, and mapping custom names using @ColumnInfo.",
        practice: "Create a 'TaskEntity' class containing fields for ID, title, details, and completion states.",
        homework: "Build a rich data model representation for a finance ledger entity containing unique auto-generated IDs and date metadata.",
        miniChallenge: "Write a composite primary key structure combining two entity column fields.",
        outcome: "You will declare fully validated Room Entities with indices and primary keys.",
        readTopic: "Android Developers: Define Data with Room Entities",
        watchTopic: "Room Entities Deep Dive - CodingWithMitch",
        duration: "6-8 Hours"
      },
      {
        id: 45,
        title: "Day 45: Writing Room DAOs (Data Access Objects)",
        focus: "Declaring @Dao interfaces, implementing @Query, @Insert, @Update, and @Delete methods.",
        theory: "A DAO defines the interface for interacting with database tables. Learn how to declare insert/update/delete operations, how Room automatically generates implementations, and how to write custom SQLite queries using @Query.",
        practice: "Create a 'TaskDao' with functions to select all records, insert, delete, and check lists.",
        homework: "Design a complete inventory management DAO interface. Implement queries to retrieve items by price caps or category filters.",
        miniChallenge: "Write a Room DAO query that searches string titles using SQLite 'LIKE' constraints.",
        outcome: "You will write clean, compile-safe DAOs for SQL data operations.",
        readTopic: "Android Developers: Access Data using Room DAOs",
        watchTopic: "Room DAOs Tutorial - Stevdza-San",
        duration: "6-8 Hours"
      },
      {
        id: 46,
        title: "Day 46: Reactive Room Queries with Kotlin Flow",
        focus: "Streaming database changes in real-time, observing reactive tables.",
        theory: "Room integrates seamlessly with Kotlin Coroutines. Learn why returning a Flow<List<Entity>> from a DAO query automatically pushes fresh database records to active subscribers whenever tables are updated.",
        practice: "Update your 'TaskDao' to return a Flow<List<TaskEntity>> and collect emissions in your UI.",
        homework: "Build an active chat message database. Implement a DAO that streams fresh chat records reactive to insert operations.",
        miniChallenge: "Contrast and compare runtime threading differences between normal suspend DAO calls vs returning cold Flow streams.",
        outcome: "You will stream real-time database updates using Flow-returning DAO queries.",
        readTopic: "Android Developers: Write Async Queries in Room",
        watchTopic: "Room Database with Flow - Philipp Lackner",
        duration: "6-8 Hours"
      },
      {
        id: 47,
        title: "Day 47: Defining the Room Database Class",
        focus: "Declaring abstract database holders, setting database versions, and initializing singletons.",
        theory: "Master the structure of the @Database class. Learn why it must be abstract, extend 'RoomDatabase', declare the list of entities, and provide abstract DAO getters. Implement thread-safe singleton initialization.",
        practice: "Write a thread-safe 'AppDatabase' class utilizing companion objects and synchronize blocks.",
        homework: "Build a persistent local profile database. Integrate entity registrations and singleton initializations.",
        miniChallenge: "Write a database builder block that blocks thread-locking during simultaneous initializations.",
        outcome: "You will build safe, singleton Room Database instances.",
        readTopic: "Android Developers: Room Database Class",
        watchTopic: "Room Database Thread-Safe Singleton - Stevdza-San",
        duration: "6-8 Hours"
      },
      {
        id: 48,
        title: "Day 48: Room Migrations Basics",
        focus: "Handling schema changes, adding columns, defining Migration interfaces.",
        theory: "When you change your entity structures (like adding a column), the database schema changes. To prevent user data loss or crashes, write custom Migration blocks and increment database versions.",
        practice: "Write a migration block that safely adds a 'priority' column (integer default 0) to an existing table.",
        homework: "Upgrade an existing task database version from 1 to 2. Write and test migration SQL blocks to add category labels.",
        miniChallenge: "Trigger a 'Room IllegalStateException: Room cannot verify the data integrity' crash to understand missing migrations.",
        outcome: "You will write database migrations and manage schema versions safely.",
        readTopic: "Android Developers: Migrating Room Databases",
        watchTopic: "Room Database Migrations - Philipp Lackner",
        duration: "6-8 Hours"
      }
    ],
    checkpoint: "Confirm you understand Room architecture, entity mapping, Dao CRUD operations, returning Flow streams, and writing basic Migrations.",
    quiz: [
      {
        question: "Why does Room enforce compile-time verification of SQLite queries in DAOs?",
        options: ["To slow down compilation.", "To format SQL queries.", "To catch syntax errors, typos in table names, or missing columns before the app ever runs.", "It is a requirement of the Java Virtual Machine."],
        correctIndex: 2,
        explanation: "Compile-time query validation is Room's killer feature. It parses and validates your SQL strings during compilation, preventing runtime crashes."
      },
      {
        question: "What happens when you query a DAO method that returns a 'Flow<List<User>>'?",
        options: ["It queries the database once and stops.", "It automatically streams updated rows whenever any change occurs in the 'User' table.", "It crashes because Flow is not supported.", "It executes on the main thread only."],
        correctIndex: 1,
        explanation: "DAO queries returning Flow create active reactive streams. Whenever the database table updates, the query executes again in the background and emits new results."
      },
      {
        question: "How do you prevent 'IllegalStateException: Room cannot verify data integrity' on schema updates?",
        options: ["Reinstall the OS.", "Increment the database version and provide a corresponding 'Migration' implementation to the builder.", "Delete the database class.", "Convert all database variables to nullable."],
        correctIndex: 1,
        explanation: "If schema changes occur without corresponding migrations, Room crashes to prevent data corruption. You must increment versioning and provide migrations."
      }
    ],
    debugging: {
      title: "The Main-Thread Database Crash",
      description: "A student tried to insert records into their Room Database. However, the application instantly crashes with an IllegalStateException on click.",
      brokenCode: `// DAO
@Insert
fun insertTask(task: TaskEntity)

// Trigger inside Click
button.setOnClickListener {
    database.taskDao().insertTask(task)
}`,
      fixedCode: `// DAO
@Insert
suspend fun insertTask(task: TaskEntity)

// Trigger inside scope
viewModelScope.launch {
    database.taskDao().insertTask(task)
}`,
      explanation: "By default, Room blocks database writes on the main thread to prevent UI freezing. The broken code runs a synchronous insert on the UI thread, causing a crash. The fix marks the DAO function as 'suspend' and launches it in a coroutine."
    },
    refactoring: {
      title: "Thread-Safe Database Initialization",
      description: "Initializing the database instance on demand without thread-locks, causing duplicate, leaking database instances in memory.",
      smellyCode: `fun getDatabase(context: Context): AppDatabase {
    if (instance == null) {
        instance = Room.databaseBuilder(
            context.applicationContext,
            AppDatabase::class.java, "db"
        ).build()
    }
    return instance!!
}`,
      cleanCode: `private var INSTANCE: AppDatabase? = null

fun getDatabase(context: Context): AppDatabase {
    return INSTANCE ?: synchronized(this) {
        val instance = Room.databaseBuilder(
            context.applicationContext,
            AppDatabase::class.java,
            "app_database"
        ).build()
        INSTANCE = instance
        instance
    }
}`,
      explanation: "Using the double-checked locking pattern with 'synchronized' prevents multi-thread race conditions from spawning duplicate, leaking database instances in memory."
    }
  },
  {
    id: 9,
    theme: "The Repository Pattern & Offline-First Strategy",
    focus: "Decoupling data with Repositories, Offline-First local cache strategy, and Jetpack DataStore Preferences.",
    days: [
      {
        id: 49,
        title: "Day 49: The Repository Pattern Architecture",
        focus: "Designing clean data abstractions, separating remote/local data sources.",
        theory: "The Repository pattern encapsulates data access. Learn how the repository layer provides a single source of truth, decides whether to fetch data from the network or load it from disk, and decouples business logic from data sources.",
        practice: "Create a 'UserRepository' interface with mock local and remote implementations.",
        homework: "Refactor your task application to use a dedicated repository layer to manage data access cleanly.",
        miniChallenge: "Describe how a Repository facilitates easy unit testing by mocking data queries.",
        outcome: "You will decouple business logic from raw databases and API layers.",
        readTopic: "Android Developers: Repositories & Single Source of Truth",
        watchTopic: "The Repository Pattern in Android - Philipp Lackner",
        duration: "6-8 Hours"
      },
      {
        id: 50,
        title: "Day 50: Offline-First Strategy & Caching",
        focus: "Implementing local-cache network strategies, handling offline mode seamlessly.",
        theory: "Offline-first apps keep working without internet. Learn strategies: 1) Cache-first (return local data, update in background), 2) Network-first (try network, fallback to local). Discover how to cache api responses in Room.",
        practice: "Write repository fetch logic that displays Room cache results immediately, queries an API, and updates local cache rows on success.",
        homework: "Build an offline-first weather caching system. Cache weather metrics locally and update from remote mock API layers safely.",
        miniChallenge: "Handle connection drop exception errors silently inside a repository cache fallback.",
        outcome: "You will build robust apps that work beautifully offline.",
        readTopic: "Android Developers: Build Offline-First Apps",
        watchTopic: "Offline First Android App Caching - Philipp Lackner",
        duration: "6-8 Hours"
      },
      {
        id: 51,
        title: "Day 51: Introduction to Jetpack DataStore",
        focus: "Replacing SharedPreferences, key-value storage, and reactive preferences.",
        theory: "Jetpack DataStore is a modern data storage solution designed to replace SharedPreferences. Learn why SharedPreferences are deprecated (blocking, synchronous). DataStore uses Coroutines/Flow to save key-values asynchronously.",
        practice: "Set up Preferences DataStore and write key-value properties to local storage.",
        homework: "Build a local settings storage engine that saves user theme preferences, dynamic font sizes, and layout choices.",
        miniChallenge: "Verify how DataStore handles disk reading errors gracefully by using catch operators.",
        outcome: "You will store key-value data asynchronously using Jetpack DataStore.",
        readTopic: "Android Developers: Store Data with DataStore",
        watchTopic: "DataStore Preferences Tutorial - Stevdza-San",
        duration: "6-8 Hours"
      },
      {
        id: 52,
        title: "Day 52: Advanced DataStore - Proto DataStore",
        focus: "Type-safe storage, schemas, Protocol Buffers integration.",
        theory: "Proto DataStore provides type-safe key-value persistence using Protocol Buffers. Understand how it enforces static schemas, guarantees type-safety, and avoids the runtime overhead of key strings.",
        practice: "Create a custom protobuf schema representing user configuration fields.",
        homework: "Build a highly secure, type-safe app settings manager storing complex user configurations with Proto DataStore.",
        miniChallenge: "Compare the performance and file sizes of Proto DataStore vs standard Preferences DataStore.",
        outcome: "You will implement type-safe structured local storage.",
        readTopic: "Android Developers: Proto DataStore",
        watchTopic: "Proto DataStore Tutorial - Philipp Lackner",
        duration: "6-8 Hours"
      },
      {
        id: 53,
        title: "Day 53: Offline Architecture & State Synthesis",
        focus: "Synthesizing Room streams and DataStore variables into single screen states.",
        theory: "Combine database and preferences streams to build fully dynamic user views. Learn how to combine Room DAO query flows and DataStore settings streams using the 'combine' operator.",
        practice: "Write code to combine item list flows and dark-mode settings streams into a single screen UI model.",
        homework: "Create a fully functional task-tracking screen combining category filter preferences and sorting databases.",
        miniChallenge: "Expose a synthesized UI StateFlow using 'stateIn' with correct SharingStarted policies.",
        outcome: "You will bind separate local data sources into unified, reactive UI states.",
        readTopic: "Android Developers: UI State Production",
        watchTopic: "Synthesizing UI State Flow - CodingWithMitch",
        duration: "6-8 Hours"
      },
      {
        id: 54,
        title: "Day 54: Clean Architecture - Data, Domain & Presentation",
        focus: "Folder structures, organizing clean domains, creating use cases.",
        theory: "Clean Architecture separates concerns. Learn the three key layers: 1) Presentation (UI + ViewModels), 2) Domain (Business Rules, Use Cases, Repositories), 3) Data (DBs, APIs, Repositories implementations).",
        practice: "Refactor your workspace directories to split code into data, domain, and presentation folders.",
        homework: "Design a complete clean architecture plan, including Use Cases, for your Month 2 portfolio project.",
        miniChallenge: "Explain why Use Cases should not contain any references to Android SDK or UI classes.",
        outcome: "You will organize your code according to strict, clean architectural principles.",
        readTopic: "Android Developers: App Architecture Guide",
        watchTopic: "Clean Architecture on Android - Philipp Lackner",
        duration: "6-8 Hours"
      }
    ],
    checkpoint: "Confirm you understand Repository abstractions, offline-first architectures, Preferences DataStore, and Clean Architecture layer partitioning.",
    quiz: [
      {
        question: "Why should you prefer Jetpack DataStore over legacy SharedPreferences?",
        options: ["DataStore runs faster.", "DataStore supports Coroutines and Flow natively, operates asynchronously, and prevents UI-blocking crashes.", "SharedPreferences are not supported in Jetpack Compose.", "DataStore uses a cloud-backed database."],
        correctIndex: 1,
        explanation: "SharedPreferences run on the UI thread and can cause ANRs (application crashes). DataStore operates asynchronously using Coroutines and Flow, preventing UI freezes."
      },
      {
        question: "What is an 'Offline-First' app strategy?",
        options: ["The app doesn't need internet to download.", "The app saves all state in the cloud.", "The app uses a local database as its primary source of truth, loading offline files first, then fetching updates from the network.", "The app only runs when offline."],
        correctIndex: 2,
        explanation: "Offline-first apps use local disk storage (such as Room) as the primary data source. Network fetches update the cache, keeping data accessible without internet."
      },
      {
        question: "Which Clean Architecture layer holds the Repository interface declarations?",
        options: ["Data layer", "Presentation layer", "Domain layer", "Database layer"],
        correctIndex: 2,
        explanation: "The Domain layer holds the core business rules, including Repository interfaces. The Data layer implements these interfaces, decoupling business logic from databases."
      }
    ],
    debugging: {
      title: "The Synchronous Storage Lock",
      description: "A student is reading user configurations from SharedPreferences on screen startup. The UI freezes for 3 seconds on low-end devices, causing ANRs.",
      brokenCode: `fun loadThemePreference(): Boolean {
    val prefs = context.getSharedPreferences("settings", Context.MODE_PRIVATE)
    return prefs.getBoolean("dark_theme", false) // Blocks thread!
}`,
      fixedCode: `val themeFlow: Flow<Boolean> = context.dataStore.data
    .catch { exception ->
        if (exception is IOException) emit(emptyPreferences()) else throw exception
    }
    .map { preferences ->
        preferences[DARK_THEME_KEY] ?: false
    }`,
      explanation: "Reading from legacy SharedPreferences performs blocking disk I/O on the main thread, causing UI freezes. The fix implements Jetpack DataStore, which reads preferences asynchronously on background threads using Flow."
    },
    refactoring: {
      title: "Abstracting Data Access",
      description: "A ViewModel accessing Room databases directly, tightly coupling the UI with persistence libraries.",
      smellyCode: `class TaskViewModel(val database: AppDatabase) : ViewModel() {
    fun loadTasks() {
        viewModelScope.launch {
            val list = database.taskDao().getAllTasks()
            _tasks.value = list
        }
    }
}`,
      cleanCode: `class TaskViewModel(private val repository: TaskRepository) : ViewModel() {
    fun loadTasks() {
        viewModelScope.launch {
            repository.getAllTasks().collect { list ->
                _tasks.value = list
            }
        }
    }
}`,
      explanation: "Abstracting database access behind a clean Repository interface separates concerns. This allows you to swap databases, add network caching, and mock data for tests without modifying the ViewModel."
    }
  },
  {
    id: 10,
    theme: "REST APIs & Networking with Retrofit",
    focus: "HTTP basics, Retrofit setup, JSON parsing, API query optimization, and error interception.",
    days: [
      {
        id: 55,
        title: "Day 55: HTTP Basics & REST APIs",
        focus: "HTTP methods (GET, POST, PUT, DELETE), request headers, bodies, response status codes.",
        theory: "Master the structure of API network operations. Learn HTTP request-response formats. Understand status codes: 200 (OK), 201 (Created), 400 (Bad Request), 401 (Unauthorized), 404 (Not Found), 500 (Server Error).",
        practice: "Inspect active network requests using browser developer tools. Map JSON objects into models.",
        homework: "Create an API model mapping document, detailing endpoints, payload types, and HTTP status handling rules.",
        miniChallenge: "Verify how the HTTP verb choice changes based on whether you are fetching, inserting, or deleting data.",
        outcome: "You will understand HTTP request structures and map JSON responses.",
        readTopic: "MDN Web Docs: HTTP Overview",
        watchTopic: "What is an API & REST? - official Android Developers",
        duration: "6-8 Hours"
      },
      {
        id: 56,
        title: "Day 56: Getting Started with Retrofit",
        focus: "Configuring Retrofit instances, baseUrl, registering clients, and creating dynamic services.",
        theory: "Retrofit is Google's recommended network library for Android. Learn how Retrofit turns HTTP APIs into clean Java/Kotlin interfaces, parses response bodies automatically, and maps endpoints to Kotlin suspend functions.",
        practice: "Define a Retrofit interface 'NewsApiService' with a suspend GET function to fetch articles.",
        homework: "Build a complete Retrofit instance client programmatically that queries mock product APIs, printing results to logs.",
        miniChallenge: "Explain why Retrofit services require a trailing slash on the Base URL path.",
        outcome: "You will build and execute your first compile-safe network clients.",
        readTopic: "Retrofit official documentation",
        watchTopic: "Retrofit Tutorial in Android - Philipp Lackner",
        duration: "6-8 Hours"
      },
      {
        id: 57,
        title: "Day 57: Kotlinx Serialization & JSON Parsing",
        focus: "Using Kotlinx.Serialization, declaring @Serializable, mapping snake_case to camelCase.",
        theory: "Kotlinx.Serialization is a modern, type-safe JSON parser. Learn why it is preferred: zero reflection overhead, type safety, and companion compiler integrations. Learn @SerialName to match API naming conventions.",
        practice: "Create a Kotlin data class matching a nested user profile JSON response, adding @SerialName annotations.",
        homework: "Build an API parser for a recipes model containing ingredient lists, calorie numbers, and prep times.",
        miniChallenge: "Parse a complex, deeply nested JSON string into structured Kotlin objects without crashing.",
        outcome: "You will deserialize API JSON strings into type-safe Kotlin models.",
        readTopic: "Kotlin Docs: Kotlin Serialization",
        watchTopic: "Kotlinx Serialization Guide - Philipp Lackner",
        duration: "6-8 Hours"
      },
      {
        id: 58,
        title: "Day 58: Retrofit Query & Path Parameters",
        focus: "Configuring dynamic searches, passing dynamic @Path variables, and @Query mappings.",
        theory: "REST APIs often require dynamic parameters. Learn how to use Retrofit's `@Path` (replaces route placeholders like `posts/{id}`) and `@Query` (appends query params like `search?query=kotlin`) annotations.",
        practice: "Create DAO-like Retrofit service functions that support searchable items with sorted filters.",
        homework: "Build an API client for a dynamic movie finder, allowing users to search by genre, year, and rating.",
        miniChallenge: "Configure a nullable query parameter that Retrofit automatically ignores when empty.",
        outcome: "You will configure dynamic network requests with dynamic search parameters.",
        readTopic: "Retrofit: Dynamic Endpoint Configuration",
        watchTopic: "Query and Path Parameters in Retrofit - Stevdza-San",
        duration: "6-8 Hours"
      },
      {
        id: 59,
        title: "Day 59: OkHttp Interceptors & Logging",
        focus: "Configuring OkHttpClient, adding HttpLoggingInterceptor, attaching auth tokens.",
        theory: "OkHttp is the engine powering Retrofit. Learn how OkHttp Interceptors act as middleware, allowing you to intercept, modify, and log network request headers, body structures, and response states globally.",
        practice: "Create an Interceptor that dynamically adds an 'Authorization: Bearer <Token>' header to all outgoing requests.",
        homework: "Build a persistent logging client that intercepts all API requests and logs payload sizes and response codes to console logs.",
        miniChallenge: "Enable HttpLoggingInterceptor.Level.BODY and analyze your request logging streams.",
        outcome: "You will intercept network calls to add headers and monitor performance.",
        readTopic: "OkHttp: Interceptors Guide",
        watchTopic: "OkHttp Interceptors Tutorial - Philipp Lackner",
        duration: "6-8 Hours"
      },
      {
        id: 60,
        title: "Day 60: Network Error Handling & Fallbacks",
        focus: "Handling IOException, HttpException, mapping error codes to friendly states.",
        theory: "Network operations frequently fail due to timeouts, bad requests, or lost connections. Learn how to catch IOExceptions (network down) and HttpExceptions (unauthorized, server errors), and map them to friendly UI error states.",
        practice: "Write an API request wrapper that catches exceptions and maps them to a sealed 'NetworkResult' class.",
        homework: "Refactor your recipes repository to catch HTTP 401 (unauthorized) and 500 (server error) codes, displaying friendly error dialogs.",
        miniChallenge: "Trigger a mock HTTP 404 response in your emulator and handle it gracefully without crashing.",
        outcome: "You will build highly stable network clients that handle errors gracefully.",
        readTopic: "Android Developers: Retrofit Error Handling",
        watchTopic: "How to handle API errors in Retrofit - Philipp Lackner",
        duration: "6-8 Hours"
      }
    ],
    checkpoint: "Confirm you understand HTTP methods, Retrofit service interfaces, JSON serialization, dynamic parameters, Interceptors, and error mapping.",
    quiz: [
      {
        question: "Which Retrofit annotation is used to append '?query=kotlin' to an API route?",
        options: ["@Path", "@Query", "@Body", "@Header"],
        correctIndex: 1,
        explanation: "@Query is used to declare query parameters in HTTP URLs. @Path is used to replace variable segments within URL paths."
      },
      {
        question: "What is an OkHttp Interceptor?",
        options: ["A tool that blocks users from loading web pages.", "A middleware class that intercepts and modifies outgoing network requests and incoming responses.", "A custom JSON parser.", "A tool to compile Kotlin code."],
        correctIndex: 1,
        explanation: "OkHttp Interceptors act as powerful middleware that allow you to read, modify, and log requests and responses (e.g., adding authorization headers)."
      },
      {
        question: "Which exception is typically thrown when a device is offline and attempts a Retrofit network request?",
        options: ["HttpException", "IOException", "NullPointerException", "SQLiteException"],
        correctIndex: 1,
        explanation: "An IOException is thrown when a network request fails at the socket/I/O level (such as no internet connection, server down, or DNS failures)."
      }
    ],
    debugging: {
      title: "The Silent API Crash",
      description: "A student's application crashes when receiving a dynamic API payload containing a missing field, throwing a SerializationException.",
      brokenCode: `@Serializable
data class UserResponse(
    val id: Int,
    val name: String,
    val bio: String
) // If bio is missing from JSON, this crashes!`,
      fixedCode: `@Serializable
data class UserResponse(
    val id: Int,
    val name: String,
    val bio: String? = null
)`,
      explanation: "In type-safe serializations, declaring a non-nullable field ('bio') without a default value will crash the app with a SerializationException if the API returns a null or missing field. Declaring it nullable with a default value prevents the crash."
    },
    refactoring: {
      title: "Centralizing Interceptor Headers",
      description: "Manually adding authorization headers to every single Retrofit function declaration, causing redundant boilerplate and update headaches.",
      smellyCode: `interface NetworkApi {
    @GET("profile")
    suspend fun getProfile(@Header("Authorization") token: String): Profile

    @GET("orders")
    suspend fun getOrders(@Header("Authorization") token: String): List<Order>
}`,
      cleanCode: `class AuthInterceptor(private val tokenProvider: TokenProvider) : Interceptor {
    override fun intercept(chain: Interceptor.Chain): Response {
        val request = chain.request().newBuilder()
            .addHeader("Authorization", "Bearer \${tokenProvider.getToken()}")
            .build()
        return chain.proceed(request)
    }
} // Bind this AuthInterceptor once inside OkHttpClient!`,
      explanation: "OkHttp Interceptors can dynamically inject authorization headers globally. This completely removes the need to pass authorization parameters manually to individual API calls."
    }
  }
];
