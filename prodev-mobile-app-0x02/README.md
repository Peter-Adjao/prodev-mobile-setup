# 📱 ProDev Mobile App — Task 3

## 🎯 Objective

Implement essential React Native components to create a responsive and visually engaging mobile interface. This includes integrating `SafeAreaView`, `Image`, `ImageBackground`, `TouchableOpacity`, and `Dimensions`.

---

## 🛠️ Setup Instructions

### 1️⃣ Project Initialization
```bash
npx create-expo-app@latest

# 2️⃣ Reset Default Template
bash
npm run reset-project

---

### 🖼️ Asset Setup
Moved the following images to assets/images:

Logo.png

background-image.png

## 📦 Component Structure Overview
# ✅ Safe Area Integration
Wrapped app content with:

tsx
<SafeAreaProvider>
  <SafeAreaView style={{ flex: 1 }}>
    {/* App Content */}
  </SafeAreaView>
</SafeAreaProvider>

## ✅ Background Image
Used ImageBackground to set full-screen background:

tsx
<ImageBackground
  source={require("@/assets/images/background-image.png")}
  style={styles.background}
  resizeMode="cover"
>
  {/* UI Components */}
</ImageBackground>
✅ Logo + Text
Displayed logo and headline:

tsx
<View style={styles.companyLogo}>
  <Image source={require("@/assets/images/Logo.png")} />
</View>

<View style={styles.textGroup}>
  <Text style={styles.textLarge}>Find your favorite place here</Text>
  <Text style={styles.textSmall}>The best prices for over 2</Text>
  <Text style={styles.textSmall}>million properties worldwide</Text>
</View>

### ✅ Button Group + Navigation Prompt
tsx
<View style={styles.buttonGroup}>
  <TouchableOpacity style={styles.button}>
    <Text style={{ ...styles.textSmall, color: "black" }}>Join here</Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.transparentButton}>
    <Text style={styles.textSmall}>Sign In</Text>
  </TouchableOpacity>
</View>

<View style={{ alignItems: "center", paddingVertical: 20 }}>
  <Text style={{ color: "white" }}>Continue to home</Text>
</View>

### 📘 Style Guide
Full styling reference available in STYLE_GUIDE.md

### ✅ Final Status
Background fully covers screen via Dimensions.get("window").height

Safe area protection implemented

Components styled and positioned correctly

Interaction elements render and respond as expected


---

### 📄 `STYLE_GUIDE.md`

```markdown
# 🎨 Style Guide — ProDev Mobile App

This document outlines the styling definitions used for Task 3 components in `app/index.tsx`.

## 🧩 StyleSheet Definitions

```tsx
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
    height: Dimensions.get("window").height,
  },
  companyLogo: {
    width: "100%",
    alignItems: "center",
    padding: 20,
    marginBottom: 50,
  },
  textGroup: {
    alignItems: "center",
  },
  textLarge: {
    color: "white",
    fontWeight: "800",
    fontSize: 40,
    textAlign: "center",
    marginBottom: 12,
  },
  textSmall: {
    color: "white",
    fontSize: 18,
    fontWeight: "200",
    textAlign: "center",
  },
  transparentButton: {
    borderColor: "white",
    borderWidth: 2,
    borderRadius: 40,
    paddingVertical: 15,
    paddingHorizontal: 5,
    alignItems: "center",
    fontSize: 20,
    flex: 1,
  },
  button: {
    borderColor: "white",
    borderWidth: 2,
    borderRadius: 40,
    paddingVertical: 15,
    paddingHorizontal: 5,
    alignItems: "center",
    fontSize: 20,
    backgroundColor: "white",
    flex: 1,
  },
  buttonGroup: {
    flexDirection: "row",
    gap: 20,
    paddingHorizontal: 20,
  },
});

---

## 👨‍💻 Author Peter Adjao GitHub: @Peter-Adjao 

📚 License This project is licensed under the MIT License. It was developed as part of the ALX Software Engineering curriculum and is intended for educational purposes.