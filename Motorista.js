import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function MotoristaPage() {
  // Variáveis para nota, quantidade de viagens e data de inscrição
  const nota = 4.8;
  const viagens = 150;
  const dataInscricao = ' 15/03/2024';
  const tipoUsuario = ' Passageiro';

  return (
    <View style={styles.container}>
      <View style={styles.classePrincipal}>
        <View style={styles.foto}>
          <Image style={styles.fotoPerfil} source={require('./assets/motorista.png')} />
        </View>
        <View style={styles.info}>
          <Text style={styles.title}>Luiz Augusto</Text>
          <View style={styles.infoInterna}>
            <Text>Nota:</Text>
            <Text style={styles.avaliacao}>{nota}</Text>
            <Image style={styles.estrela} source={require('./assets/estrela.png')} />
          </View>
          <View style={styles.infoInterna}>
            <Text>Viagens:</Text>
            <Text style={styles.avaliacao}>{viagens}</Text>
            <Image style={styles.estrela} source={require('./assets/carro.png')} />
          </View>
          <View style={styles.infoInterna}>
            <Text>Data de Inscrição:</Text>
            <Text style={styles.avaliacao}>{dataInscricao}</Text>
          </View>
          <View style={styles.infoInterna}>
            <Text>Tipo de Usuario:</Text>
            <Text style={styles.avaliacao}>{tipoUsuario}</Text>
          </View>
        </View>
        <View style={styles.botoesAcao}>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnText}>Opções</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnText}>Editar Perfil</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  classePrincipal: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  foto: {
    marginBottom: 20,
  },
  fotoPerfil: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  info: {
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  infoInterna: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  avaliacao: {
    fontWeight: 'bold',
    marginRight: 5,
  },
  estrela: {
    width: 20,
    height: 20,
    marginLeft: 5,
  },
  botoesAcao: {
    flexDirection: 'row',
  },
  btn: {
    marginHorizontal: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#228B22',
    borderRadius: 5,
  },
  btnText: {
    color: '#fff',
    fontSize: 16,
  },
});
