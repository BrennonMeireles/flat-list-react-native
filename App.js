import React from 'react';
import { View } from 'react-native';
import ListaFrutas from './flatlist';

const App = () => {
  return (
    <View style={{ flex: 1, backgroundColor: '#000' }}>
      <ListaFrutas />
    </View>
  )
}
export default App;