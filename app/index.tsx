import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import colors from "@/styles/colors";
import { Button } from "@/components/button";
import { ArrowRightIcon } from "@/components/arrow-right";
import { WateringIcon } from "@/components/watering";

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Gerencie {'\n'}suas plantas de{'\n'} forma fácil</Text>

        <WateringIcon />

        <Text style={styles.subtitle}>Não esqueça mais de regar suas{'\n'} plantas. Nós cuidamos de lembrar você{'\n'} sempre que precisar.</Text>
      </View>

      <Button activeOpacity={0.7}>
        <ArrowRightIcon />
      </Button>
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
  content: {
    gap: 49,
  },
  title: {
    fontWeight: '600',
    fontSize: 32,
    lineHeight: 38,
    textAlign: 'center',
    color: colors.heading,
  },
  subtitle: {
    fontWeight: '400',
    fontSize: 17,
    lineHeight: 25,
    textAlign: 'center',
    color: colors.heading,
    marginBottom: 47
  }
})
