import { StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import wateringImg from '@/assets/watering.png'
import colors from "@/styles/colors";

export default function Index() {
  return (
    <SafeAreaView
      style={styles.container}
    >
      <Text style={styles.title}>Gerencie {'\n'}suas plantas de{'\n'} forma fácil</Text>

      <Image source={wateringImg} style={styles.image} />

      <Text style={styles.subtitle}>Não esqueça mais de regar suas{'\n'} plantas. Nós cuidamos de lembrar você{'\n'} sempre que precisar.</Text>

      <TouchableOpacity style={styles.button} activeOpacity={0.7}>
        <Text style={styles.buttonText}>
          Go
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.white
  },
  title: {
    fontWeight: '600',
    fontSize: 32,
    lineHeight: 38,
    textAlign: 'center',
    color: colors.heading,
  },
  image: {
    width: 292.13,
    height: 284.3,
    marginVertical: 49
  },
  subtitle: {
    fontWeight: '400',
    fontSize: 17,
    lineHeight: 25,
    textAlign: 'center',
    color: colors.heading,
    marginBottom: 47
  },
  button: {
    width: 56,
    height: 56,
    padding: 5,
    backgroundColor: colors.green,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: colors.white,
  }
})