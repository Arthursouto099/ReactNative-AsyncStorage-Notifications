import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { FormProps } from "../interfaces/FormProps";
import { v4 as uuidv4 } from "uuid";


const ContactForm = ({callbackInfo}: FormProps) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleSubmit = ( ) => {
    if(name.trim() !== "" && number.trim() !== "" )
    callbackInfo({id: uuidv4(),   name, number})
  };

  return (
    <View style={styles.formContainer}>
      <Text style={styles.label}>Nome</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite o nome"
        value={name}
        onChangeText={setName}
      />

      <Text style={styles.label}>Número</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite o número"
        value={number}
        onChangeText={setNumber}
        keyboardType="phone-pad"
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Salvar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    padding: 40,
    backgroundColor: "#fff",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
    width: "80%"
  },
  label: {
    fontSize: 14,
    fontWeight: "500",
    color: "#333",
    marginBottom: 4,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 6,
    paddingHorizontal: 10,
    marginBottom: 16,
    backgroundColor: "#f9f9f9",
  },
  button: {
    backgroundColor: "#007BFF",
    paddingVertical: 10,
    borderRadius: 6,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});

export { ContactForm };