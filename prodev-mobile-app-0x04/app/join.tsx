import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Image,
  Vibration,
} from "react-native";
import { joinstyles } from "@/styles/_joinstyle";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { FontAwesome, Ionicons } from "@expo/vector-icons";

export default function Join() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={joinstyles.container}>
        <View style={joinstyles.iconsection}>
          <Ionicons name="arrow-back" size={25} />
          <Image source={require("@/assets/images/logo-green.png")}/>
        </View>

        <View style={joinstyles.titleTextGroup}>
          <Text style={joinstyles.titleText}>Create your</Text>
          <Text style={joinstyles.titleText}>Account</Text>
          <Text style={joinstyles.subText}>
            Enter your details to create a new account.
          </Text>
        </View>

        <View style={joinstyles.formGroup}>
          <View>
            <Text style={joinstyles.formLabel}>Email</Text>
            <TextInput
              keyboardType="email-address"
              style={joinstyles.formControl}
            />
          </View>

          <View style={{ marginTop: 20 }}>
            <Text style={joinstyles.formLabel}>Password</Text>
            <Text style={joinstyles.formLabel}>Confirm Password</Text>
            <View style={joinstyles.formPasswordControl}>
              <TextInput style={joinstyles.passwordControl} />
              <FontAwesome name="eye-slash" size={24} color="#7E7B7B" />
            </View>
          </View>
        </View>

        <TouchableOpacity style={joinstyles.primaryButton}>
          <Text style={joinstyles.buttonText}>Create</Text>
        </TouchableOpacity>

        <View style={joinstyles.dividerGroup}>
          <View style={joinstyles.divider} />
          <Text style={joinstyles.dividerText}>Or</Text>
          <View style={joinstyles.divider} />
        </View>

        <View style={joinstyles.secondaryButtonGroup}>
          <TouchableOpacity style={joinstyles.secondaryButton}>
            <Image source={require("@/assets/images/google.png")} />
            <Text style={joinstyles.secondaryButtonText}>
              Continue with Google
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={joinstyles.secondaryButton}>
            <Image source={require("@/assets/images/facebook.png")} />
            <Text style={joinstyles.secondaryButtonText}>
              Continue with Facebook
            </Text>
          </TouchableOpacity>
        </View>

        <View style={joinstyles.signupgroup}>
          <Text style={joinstyles.signupTitleText}>Don't have an account?</Text>
          <Text style={joinstyles.signupSubTitleText}> Join now</Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
