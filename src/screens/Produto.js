import * as React from 'react';
import { ScrollView, Text, Button, touchableopacity } from 'react-native';
import { View } from 'react-native-web';
import { gStyle } from '../constants';
import { useState } from 'react';
import { CheckBox } from 'react-native-web';
import { useRoute } from '@react-navigation/native'
import { ArrayCarnes } from './ArrayCarnes'
import { array } from 'prop-types';

const Produtos = ({ navigation }) => {
  const theme = 'light';
  // ABA PRODUTOS
  const route = useRoute();

  console.log(ArrayCarnes)

  let { data } = route.params;
  console.log(data)

  const qtdConvidados = Number(data.qtdHomens) + Number(data.qtdMulheres) + Number(data.qtdCriancas)

  const [precoFinal, setPrecoFinal] = useState(0);
  const [rateio, setRateio] = useState(0);
  const [renderResultadoCalculo, setRenderResultadoCalculo] = useState(false);




  

  // const [isSelected, setSelected] = useState(false);

  const [titulo, setTitulo] = useState(ArrayCarnes);

  const handleCheck = (id) => {
    let temp = titulo.map(ti => {
      if (id === ti.id) {
        return {
          ...ti,
          checked: !ti.checked
        }
      }
      return ti
    })
    setTitulo(temp)
  }

  return (
  
    <ScrollView 
      contentContainerStyle={gStyle.contentContainer}
      style={gStyle.container[theme]}
    >

      {/* <Text style={gStyle.text[theme]}>Produtos</Text> */}
      <View style={sumarioStyle}>
      <Text style={gStyle.title}>{qtdConvidados} convidados</Text>
        <Text style={sumarioTextStyle}>👨 Homens: {data.qtdHomens}</Text>
        <Text style={sumarioTextStyle}>👩 Mulheres: {data.qtdMulheres}</Text>
        <Text style={sumarioTextStyle}>👶 Crianças: {data.qtdCriancas}</Text>
      </View>
      <View>
        {titulo.map((ti) => {
          return (
            <View key={ti.id}>
              <Text
                style={labelstyles}
              >
                <CheckBox value={ti.checked}
                  onValueChange={() => handleCheck(ti.id)} />
                {ti.carne} (R$ {ti.preco})
              </Text>
            </View>
          )
        })}
      </View>


      {<Button style={ButtonStyles} title="Calcular" onPress={() => calcularResultadoFinal()} />}
      <View style={resultadoFinalStyle}>
        {(renderResultadoCalculo) ? <><Text style={labelPrecoFinalStyle}>Preço final</Text> <a>R$ {Number(precoFinal).toFixed(2)}</a></> : ""}
        {(renderResultadoCalculo) ? <><Text style={labelPrecoFinalStyle}>Rateio por pessoa</Text> <a>R$ {Number(rateio).toFixed(2)}</a></> : ""}
      </View>
    </ScrollView>
  );
};



const checkboxStyle = {
  flexDirection: "row",
  marginBottom: 7,
}

const resultadoFinalStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: "30px"
}

const ButtonStyles = {
  marginBottom: 10,
}

const labelPrecoFinalStyle = {
  fontSize: 18,
  fontWeight: "bold",
  margin: "3px"
}

const labelstyles = {
  fontSize: 18,
}

const sumarioTextStyle = {
  fontSize: 20,
  fontWeight: "bold",
  margin: "35px"
}

const sumarioStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  marginBottom: "45px"

}

Produtos.navigationOptions = {
  headerTitleStyle: gStyle.headerTitleStyle,
  title: 'Produtos'
};

export default Produtos;