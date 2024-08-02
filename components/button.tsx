import { PropsWithChildren } from "react";
import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import colors from "@/styles/colors";

export function Button({ children, ...rest }: PropsWithChildren<TouchableOpacityProps>) {
  return (
    <TouchableOpacity style={styles.button} {...rest}>
      <Text style={styles.buttonText}>
        {children}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    width: 56,
    height: 56,
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: colors.green,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: colors.white,
  }
})
