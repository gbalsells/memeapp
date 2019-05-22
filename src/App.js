import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import CardSection from './containers/CardSection';
import StorageService from './utils/localStorageService';

const _instanceStorage = new StorageService(); //Instancia del storageService.
class App extends Component{
  constructor(){
    super();

    this.state = {
      title: "",
      img: "",
      data: [],
    }

    this.handleOnChangeInput = this.handleOnChangeInput.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  componentDidMount(){
    // En este ciclo de vida es el indicado para saber si tengo o no datos en el localStorage.
    // Traer datos, condicionar, si tengo actualizar el estado.
    const receivedData = _instanceStorage.getItem('data')
    if (receivedData) {
      this.setState({
        data: receivedData
      })
    }
  }

  handleOnChangeInput(event){
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleOnClick(){
    const {data, title,img} = this.state;
    
    
    const addData  = [...data, {
      title,
      img
    }] ;
    console.log(addData)
    this.setState({
      data: addData,
      title: "",
      img: ""
    })
    //Aquí se debería setear el localStorage.
    _instanceStorage.setItem('data', addData)
  }

  render(){
    return(
      <div className="wrapper">
        <div className="container-header">
          <Header title="MemeApp"/>
          <nav className="nav-app">
            <input type="text" onChange={this.handleOnChangeInput} placeholder="Ingrese un title" name="title" value={this.state.title}/>
            <input type="text" onChange={this.handleOnChangeInput} placeholder="Ingrese una url" name="img" value={this.state.img}/>
            <button onClick={this.handleOnClick}> Agregar </button>
          </nav>
        </div>

        <CardSection data={ this.state.data }/>
      </div>
    )
  }
}

export default App;
