import React, { Component } from 'react'
import FormularioCadastro from './components/FormularioCadastro';
import ListaDeNotas from './components/listaDeNotas'

class App extends Component{
  render() {
    return (
      <section>
        <FormularioCadastro/>
        <ListaDeNotas/>
      </section>
    );
  }
}

export default App;
