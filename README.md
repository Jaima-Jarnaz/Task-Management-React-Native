# React Native - Task Management App

A comprehensive React Native task management application built with Expo that helps users organize and manage their tasks project-wise with a modern, intuitive interface.

## 🚀 Features

- **User Authentication**: Secure sign-up and sign-in with Firebase
- **Task Management**: Create, organize, and track tasks
- **Calendar Integration**: View and manage tasks by date
- **Document Management**: Organize project documents
- **User Profiles**: Personalized user experience
- **Cross-Platform**: Works on iOS, Android, and Web
- **Modern UI/UX**: Clean, responsive design with custom fonts

## 🛠️ Tech Stack

- **Frontend**: React Native 0.79.5
- **Framework**: Expo SDK 53
- **Navigation**: Expo Router v5
- **Authentication**: Firebase Auth
- **Database**: Firebase Firestore
- **State Management**: React Context API
- **Styling**: React Native StyleSheet
- **TypeScript**: Full TypeScript support
- **Fonts**: Custom Noto Sans font family

## 📱 Screens

### Authentication

- **Landing Page**: Welcome screen with app introduction
- **Sign Up**: User registration
- **Sign In**: User login

### Main Application (Tab Navigation)

- **Home**: Dashboard and overview
- **Calendar**: Task scheduling and date management
- **Add Task**: Create new tasks
- **Documents**: Project document management
- **Profile**: User settings and information

## 🏗️ Project Structure

```
task-management/
├── app/                         # Main application screens
│   ├── _layout.tsx              # Root layout with authentication
│   ├── index.tsx                # Landing page
│   ├── signin.tsx               # Sign in screen
│   ├── signup.tsx               # Sign up screen
│   └── (tabs)/                  # Tab navigation screens
│       ├── _layout.tsx          # Tab layout configuration
│       ├── index.tsx            # Home tab
│       ├── calendar.tsx         # Calendar tab
│       ├── addtask.tsx          # Add task tab
│       ├── documents.tsx        # Documents tab
│       └── profile.tsx          # Profile tab
├── assets/                       # Static assets
│   ├── fonts/                   # Custom Noto Sans fonts
│   ├── icons/                   # App icons
│   └── images/                  # App images and backgrounds
├── components/                   # Reusable UI components
│   ├── Header.tsx               # Header component
│   ├── Footer.tsx               # Footer component
│   └── index.ts                 # Component exports
├── config/                       # Configuration files
│   └── firebase-config.tsx      # Firebase configuration
├── constants/                    # App constants
│   ├── colors.jsx               # Color scheme
│   ├── constants.jsx            # General constants
│   └── index.ts                 # Constant exports
├── context/                      # React Context providers
│   └── userContext.jsx          # User authentication context
├── package.json                  # Dependencies and scripts
├── app.json                     # Expo configuration
├── tsconfig.json                # TypeScript configuration
└── README.md                    # Project documentation
```

## 📋 Prerequisites

- **Node.js**: v18 or later
- **npm** or **yarn** package manager
- **Expo CLI**: For development and building
- **Firebase Account**: For authentication and database services

## 🚀 Getting Started

### 1. Installation

Clone the repository and install dependencies:

```bash
git clone <repository-url>
cd ai-engineering
npm install
```

### 2. Firebase Setup

1. Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
2. Enable Authentication (Email/Password)
3. Create a Firestore database
4. Copy your Firebase configuration to `config/firebase-config.tsx`

### 3. Environment Configuration

Ensure your Firebase configuration is properly set up in `config/firebase-config.tsx`:

```typescript
// Example Firebase config structure
const firebaseConfig = {
  apiKey: "your-api-key",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "your-sender-id",
  appId: "your-app-id",
};
```

### 4. Start Development

```bash
# Start the development server
npm start

# Run on specific platforms
npm run ios          # iOS Simulator
npm run android      # Android Emulator
npm run web          # Web browser
```

### 5. Build for Production

```bash
# Build for production
expo build:android   # Android APK
expo build:ios       # iOS IPA
expo build:web       # Web build
```

## 🎨 Customization

### Colors

The app uses a consistent color scheme defined in `constants/colors.jsx`:

- **Primary**: #00A36C (Green)
- **White**: #FFFFFF

### Fonts

Custom Noto Sans fonts are included for consistent typography across platforms.

## 📱 Platform Support

- ✅ **iOS**: Full support with tablet optimization
- ✅ **Android**: Full support with edge-to-edge display
- ✅ **Web**: Responsive web application
- ✅ **Tablet**: Optimized layouts for larger screens

## 🔧 Development Scripts

```bash
npm start          # Start Expo development server
npm run ios        # Run on iOS simulator
npm run android    # Run on Android emulator
npm run web        # Run on web browser
npm run lint       # Run ESLint for code quality
```

## 🧪 Testing

The project includes comprehensive testing setup:

- Unit tests for components
- Integration tests for authentication flow
- Cross-platform compatibility testing

## 📦 Dependencies

### Core Dependencies

- **React Native**: 0.79.5
- **Expo**: ~53.0.20
- **Firebase**: ^12.1.0
- **Expo Router**: ~5.1.4

### UI & Navigation

- **React Native Gesture Handler**: ~2.24.0
- **React Native Reanimated**: ~3.17.4
- **React Native Safe Area Context**: 5.4.0

### Development Dependencies

- **TypeScript**: ~5.8.3
- **ESLint**: ^9.25.0
- **Babel**: ^7.25.2

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

For support and questions:

- Check the [Expo documentation](https://docs.expo.dev/)
- Review [React Native documentation](https://reactnative.dev/)
- Open an issue in the project repository

## 🔮 Roadmap

- [ ] Push notifications for task reminders
- [ ] Offline task management
- [ ] Team collaboration features
- [ ] Advanced task analytics
- [ ] Integration with external calendar services
- [ ] Dark mode support
- [ ] Multi-language support

---

**Built with ❤️ using React Native and Expo**
