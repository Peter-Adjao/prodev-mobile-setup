# 📱 ProDev Mobile App — 0x01

## 🚀 Objective

Set up a fresh mobile application using the **Expo Router template**. Customize the initial screen layout, styles, and reset the default scaffold to create a clean development foundation.

---

## 🛠️ Project Setup

### 1️⃣ Initialize Project
Used the latest Expo Router template to create the app:
```bash
npx create-expo-app@latest prodev-mobile-app-0x01 
--template with-router.

 ---

 ### 2️⃣ Navigate Into the Project
bash
cd prodev-mobile-app-0x01


3️⃣ Reset the Default Template
Removed scaffolded components to start fresh:

Deleted default folders like app, components, etc.

Created a clean app/index.tsx and preserved routing via _layout.tsx if needed

 ### 🎨 Home Screen Modifications
✅ Applied Changes in app/index.tsx
Changed the main <Text> component:

tsx
<Text>Entry Screen - Awesome</Text>

 ### Replaced inline style with:

tsx
style={styles.container}
Added a nested <View> with three styled <Text> components:

tsx
<View>
  <Text style={styles.largeText}>
    Typescript is great if you practice more
  </Text>
  <Text style={styles.mediumText}>
    React Native provides you a single codebase for cross platforms
  </Text>
  <Text style={styles.smallText}>ALX is awesome</Text>
</View>

 ### Defined styles using StyleSheet:

tsx
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#90caf9",
  },
  largeText: {
    fontSize: 30,
    color: "#f44336",
    marginBottom: 5,
    fontWeight: "700",
    fontVariant: ["small-caps"],
  },
  mediumText: {
    fontSize: 20,
    color: "#9c27b0",
    marginBottom: 10,
    fontWeight: "500",
    textAlign: "right",
  },
  smallText: {
    fontSize: 15,
    color: "#2196f3",
    fontWeight: "400",
    textAlign: "center",
  },
});

 ###▶️ Run the Project
Start the development server:

bash
npx expo start
Open App Using Expo Go
Android: Scan QR code via Expo Go app

iOS: Use Camera app to scan and launch