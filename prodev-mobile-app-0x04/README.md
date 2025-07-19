ProDev Mobile App (Project 0x04)

A multi-screen mobile application built with **React Native**, **Expo Router**, and **Stack Navigation pattern**. This project demonstrates clean screen separation, structured styling, and fluid navigation across multiple views.

## 📱 Features

- **Stack Navigation** using `expo-router`
- Screens: Home (`index.tsx`), Join (`join.tsx`), Sign In (`signin.tsx`)
- Centralized styling with reusable constants
- Clean separation of logic and styles for maintainability
- Asset-managed UI components for a cohesive visual experience

## 🛠️ Setup Instructions

### 1. Create and Initialize Project

```bash
npx create-expo-app@latest prodev-mobile-app-0x04
cd prodev-mobile-app-0x04
npm run reset-project
2. Assets Setup
Place provided image files in:

bash
/assets/images/

```
3. File Structure
bash
- index.tsx
- join.tsx
- signin.tsx
- constants/index.ts
- styles/_mainstyle.ts
- styles/_joinstyle.ts
- app/_layout.tsx
4. Navigation
Configured using Stack from expo-router in app/_layout.tsx:

tsx
<Stack screenOptions={{ headerShown: false }}>
  <Stack.Screen name="/" />
  <Stack.Screen name="join" />
  <Stack.Screen name="signin" />
</Stack>

📦 Dependencies
Ensure your project includes:

expo-router

react-native

All default Expo dependencies