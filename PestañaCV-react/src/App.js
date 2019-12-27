import React, { Component } from "react";
import logo from "./logo.svg";
import { Provider } from "react-redux";
import "./App.css";
import Presentacion from './Presentacion';
import store from "./contexts/store";
import Contenedor from "./conteiner";




class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header"/>
        <Provider store={store}>
               
       <div>
      </div>
 <Presentacion/>

  
  </Provider>
  
  </div>
    );
  }
}
export default App;
