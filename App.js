import {
  StyleSheet,
  View,
  TextInput,
  Button,
  Text,
  Image,
  Pressable,
  Alert,
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          flex: 0.3,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          style={{ width: 100, height: 100 }}
          source={require("./Logo.png")}
        />
        <Text style={{paddingTop:20, color:"#854efe", fontSize:20, fontWeight:"600"}}>DBIT Decentralized Mining</Text>
      </View>

      <View
        style={{
          flex: 0.5,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <TextInput
          placeholder={"Email"}
          style={{
            width: 270,
            height: 50,
            backgroundColor: "white",
            borderRadius: 12,
            borderColor: "#9041fe",
            paddingLeft: 10,
            borderWidth: 1,
          }}
        />

        <TextInput
          placeholder={"User Name"}
          style={{
            width: 270,
            height: 50,
            backgroundColor: "white",
            color: "white",
            marginTop: 20,
            borderRadius: 12,
            borderColor: "#9041fe",
            paddingLeft: 10,
            borderWidth: 1,
          }}
        />
        <TextInput
          placeholder="Password"
          style={{
            width: 270,
            height: 50,
            backgroundColor: "white",
            marginTop: 20,
            borderRadius: 12,
            borderColor: "#9041fe",
            paddingLeft: 10,
            borderWidth: 1,
          }}
        />

        <TextInput
          placeholder="Confirm Password"
          style={{
            width: 270,
            height: 50,
            backgroundColor: "white",
            marginTop: 20,
            borderRadius: 12,
            borderColor: "#9041fe",
            paddingLeft: 10,
            borderWidth: 1,
          }}
        />
      </View>

      <View
        style={{
          flex: 0.2,

          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Pressable>
          <LinearGradient
            colors={["#854efe", "#28b6ff"]}
            style={styles.gradient}
          >
            <Text style={styles.text} onPress={() => Alert.alert('Sign Up successfull')}>Sign Up</Text>
          </LinearGradient>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  gradient: {
    flex: 0.5,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    width: 100,
  },
  button: {
    width: 100,
    height: 45,
  },
  text: {
    color: "white",
    fontSize: 16,
  },
});
