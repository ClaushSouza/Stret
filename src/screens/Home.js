import * as React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { ScrollView, Text, View, Button, TextInput, TouchableOpacity } from 'react-native';
import { gStyle } from '../constants';

import { useRef } from 'react';


const Home = ({ navigation }) => {
  const theme = 'light';

  
  const qtdHomens = useRef(0);
  const qtdMulheres = useRef(0);
  const qtdCriancas = useRef(0);

  const [number1, onChangeNumber1] = React.useState(null);
  const [number2, onChangeNumber2] = React.useState(null);
  const [number3, onChangeNumber3] = React.useState(null);

  let data = {}

  function handleClick() {
    data = getData()
    console.log(data)
    navigation.push('Produtos', {data})
  }


  function getData() {
    return {
      qtdHomens: qtdHomens.current.value == "" ? 0 : qtdHomens.current.value,
      qtdMulheres: qtdMulheres.current.value == "" ? 0 : qtdMulheres.current.value,
      qtdCriancas: qtdCriancas.current.value == "" ? 0 : qtdCriancas.current.value
    }
  }

  return (
    <View style={gStyle.container[theme]}>
      <ScrollView contentContainerStyle={gStyle.contentContainer}>
        <Text style={gStyle.textRoboto}>Calculadora de Churrasco</Text>
        <View style={gStyle.spacer32} />
        <Text style={homenslabelstyle}> Homens </Text>
        <TextInput 
          keyboardType="numeric" 
          value={number1} 
          onChangeText={onChangeNumber1}
          style={inputStyle}
          ref={qtdHomens}
          placeholder="Homens"
        />
        <Text style={homenslabelstyle}> Mulheres </Text>
        <TextInput 
          keyboardType="numeric" 
          value={number2} 
          onChangeText={onChangeNumber2} 
          style={inputStyle}
          ref={qtdMulheres}
          placeholder="Mulheres"
        />
        <Text style={homenslabelstyle}> Crianças </Text>
        <TextInput 
          keyboardType="numeric" 
          value={number3} 
          onChangeText={onChangeNumber3} 
          style={inputStyle}
          ref={qtdCriancas}
          placeholder="Crinças"
        />
        <TouchableOpacity style={buttonContainer}>
          <Button title="Calcular"  onPress={() => handleClick()}/>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const inputStyle = {
  height: 40,
  margin: 12,
  borderWidth: 1,
  padding: 10,
}

const buttonContainer = {
  margin: 20,
  flex: 1,
  justifyContent: 'center',
}


const homenslabelstyle = {
  fontSize: 20,
  fontWeight: 'bold',
}

Home.propTypes = {
  // required
  navigation: PropTypes.object.isRequired
};

export default Home;
