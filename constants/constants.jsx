export const taskData = [
  {
    id: 1,
    category: "Grocery shopping app design",
    taskName: "Market Research",
    time: "10:00 AM",
    status: "Done",
    statusColor: "#E0E7FF",
    textColor: "#8B5CF6",
    icon: "🛍️",
    iconBgColor: "#FCE7F3",
  },
  {
    id: 2,
    category: "Grocery shopping app design",
    taskName: "Competitive Analysis",
    time: "12:00 PM",
    status: "In Progress",
    statusColor: "#FEF3C7",
    textColor: "#F59E0B",
    icon: "🛍️",
    iconBgColor: "#FCE7F3",
  },
  {
    id: 3,
    category: "Uber Eats redesign challenge",
    taskName: "Create Low-fidelity Wireframe",
    time: "07:00 PM",
    status: "To-do",
    statusColor: "#E0F2FE",
    textColor: "#3B82F6",
    icon: "👤",
    iconBgColor: "#F3E8FF",
  },
  {
    id: 4,
    category: "About design sprint",
    taskName: "How to pitch a Design Sprint",
    time: "09:00 PM",
    status: "To-do",
    statusColor: "#E0F2FE",
    textColor: "#3B82F6",
    icon: "📚",
    iconBgColor: "#FEF3C7",
  },
];

export const dateData = [
  { day: "23", weekday: "Fri", month: "May", isSelected: false },
  { day: "24", weekday: "Sat", month: "May", isSelected: false },
  { day: "25", weekday: "Sun", month: "May", isSelected: true },
  { day: "26", weekday: "Mon", month: "May", isSelected: false },
  { day: "27", weekday: "Tue", month: "May", isSelected: false },
];

export const filterOptions = [
  { id: "all", label: "All", isActive: true },
  { id: "todo", label: "To do", isActive: false },
  { id: "inprogress", label: "In Progress", isActive: false },
  { id: "completed", label: "Completed", isActive: false },
];

// Firebase Authentication Constants
export const authMessages = {
  // Success Messages
  signupSuccess: "Account created successfully!",
  signinSuccess: "Signed in successfully!",
  userDataSaved: "User information saved successfully!",

  // Error Messages
  signupError: "Failed to create account. Please try again.",
  signinError: "Failed to sign in. Please check your credentials.",
  networkError: "Network error. Please check your connection.",
  userDataSaveError: "Failed to save user information. Please try again.",

  // Validation Messages
  emailRequired: "Email is required",
  passwordRequired: "Password is required",
  nameRequired: "Name is required",
  invalidEmail: "Please enter a valid email address",
  passwordTooShort: "Password must be at least 6 characters",
  passwordTooWeak: "Password is too weak. Please use a stronger password",

  // Firebase Specific Error Messages
  emailAlreadyInUse: "An account with this email already exists",
  invalidEmailFormat: "Invalid email format",
  weakPassword: "Password is too weak",
  userNotFound: "No account found with this email",
  wrongPassword: "Incorrect password",
  tooManyRequests: "Too many failed attempts. Please try again later",
  userDisabled: "This account has been disabled",
  operationNotAllowed: "Email/password sign in is not enabled",
  invalidEmailAddress: "Invalid email address",
  generalSignInError: "An error occurred during sign in",

  // General Messages
  loading: "Please wait...",
  tryAgain: "Please try again",
  goBack: "Go back to sign in",
  accountCreatedPartial:
    "Your account was created successfully, but there was an issue saving additional information. You can still sign in.",

  // UI Text Constants
  welcomeBack: "Welcome Back",
  emailAddress: "Email address",
  password: "Password",
  signIn: "Sign in",
  dontHaveAccount: "Don't have an account?",
  emailPlaceholder: "name@example.com",
  passwordPlaceholder: "Enter your password",
};
