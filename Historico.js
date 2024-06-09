import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function HistoricoPage() {
  const historicoData = '00/00/00';
  const historicoRua = 'Rua xxxxxxxx';
  const historicoValor = 'R$: 0000';
  const avaliacao = '5x';

  return (
    <View style={styles.container}>
      
      <View style={styles.containerHistorico}>
        <Text style={styles.title}>Histórico</Text>
        <View style={styles.historico}>
          <View style={styles.historicoTexto}>
            <Text style={styles.historicoTextoSpan}>{historicoRua}</Text>
            <Text style={styles.historicoTextoInfo}>{historicoData}</Text>
            <Text style={styles.historicoTextoInfo}>{historicoValor}</Text>
            <Text style={styles.historicoTextoInfo}>Avaliação: {avaliacao}</Text>
            </View>
          
          <View style={styles.historicoBotoes}>
            <TouchableOpacity style={[styles.btn, { backgroundColor: '#228B22' }]}>
              <Text style={styles.btnText}>Avaliar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.btn, { backgroundColor: '#228B22' }]}>
              <Text style={styles.btnText}>Reutilizar</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* Adicione mais blocos de histórico conforme necessário */}
      </View>
      {/* Seu rodapé aqui */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    paddingTop: 50,
  },
  containerHistorico: {
    width: '90%',
    alignItems: 'center',
    marginTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    paddingBottom: 10,
  },
  historico: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 20,
    marginBottom: 20,
    justifyContent: 'space-between',
    width: '100%',
  },
  historicoTexto: {
    alignItems: 'center',
  },
  historicoTextoSpan: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingBottom: 10,
    textAlign: 'center',
  },
  historicoTextoInfo: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
  },
  historicoBotoes: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    marginVertical: 5,
    backgroundColor: '#228B22',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  btnText: {
    color: '#fff',
    fontSize: 16,
  },
  fotoHistorico: {
    width: '100%',
    height: 200,
    marginBottom: 20,
  },
});
