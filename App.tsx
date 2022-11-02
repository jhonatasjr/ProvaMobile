import {ScrollView, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';

export default function App() {
  const [descricao, setText] = useState<string>('');
  const [num1, setNum1] = useState<number>(0);
  const [num2, setNum2] = useState<number>(0);

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.titulo}>Prova de Mobile</Text>
        <TextInput
          style={styles.input}
          placeholder="Texto"
          onChangeText={string => {
            setText(string);
          }}
        />

        <View
          style={{
            alignItems: 'center',
            justifyContent: 'space-around',
            flexDirection: 'row',
          }}>
          <TextInput
            placeholder="Número 1"
            keyboardType="number-pad"
            onChangeText={number => {
              setNum1(Number(number));
            }}
          />
          <TextInput
            placeholder="Número 2"
            keyboardType="number-pad"
            onChangeText={number => {
              setNum2(Number(number));
            }}
          />
        </View>

        <View
          style={{
            alignItems: 'center',
          }}>
          <Text style={styles.exibicao}>{descricao}</Text>
          <Text style={styles.exibicao}>{num1}</Text>
          <Text style={styles.exibicao}>{num2}</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titulo: {
    textAlign: 'center',
    fontSize: 25,
    color: 'black',
  },
  input: {
    margin: 12,
    fontSize: 20,
    alignItems: 'center',
  },
  exibicao: {
    fontSize: 20,
    marginTop: 10,
  },
});
