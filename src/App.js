import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'

let pizzaUrl = 'http://localhost:3000/pizzas'
class App extends Component {
constructor(){
  super()
  this.state = {
    pizzas: [],
    editPizza: {
      id: 0,
      topping: "",
      size: "",
      vegetarian: false
    }
  }
}

componentDidMount(){
  fetch(pizzaUrl)
  .then(res=>res.json())
  .then(pizzas=> this.setState({pizzas}))
}

handleEdit =(pizza) => {
  console.log("edit", pizza)
  this.setState({
    editPizza: {
      id: pizza.id,
      topping: pizza.topping,
      size: pizza.size,
      vegetarian: pizza.vegetarian
    }
  })
}

handleChange =(e) =>{
  
  console.log("CHANGE!", e.target.value, e.target.name)
  if(e.target.name === 'topping'){
  this.setState({
    editPizza: {...this.state.editPizza, topping: e.target.value}
  })
  }else if(e.target.name === 'size'){
    this.setState({
      editPizza: {...this.state.editPizza, size: e.target.value}
    })
  } else if (e.target.name === 'vegetarian'){
    let boolean= (e.target.value === 'true'? true : false)
    this.setState({
      editPizza: {...this.state.editPizza, vegetarian: boolean}
    })
  }
}

handleSubmit =() => {
  
  console.log(this.state.editPizza)
  let pizzaObj = {
    topping: this.state.editPizza.topping,
      size: this.state.editPizza.size,
      vegetarian: this.state.editPizza.vegetarian
  }
  fetch(pizzaUrl + `/${this.state.editPizza.id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify({
      topping: pizzaObj.topping,
      size: pizzaObj.size,
      vegetarian: pizzaObj.vegetarian
    })
  })
  .then(res=>res.json())
  .then(alteredPizza=> {
    this.setState({
      pizzas: this.state.pizzas.map(pizza => pizza.id === alteredPizza.id? alteredPizza : pizza)
    })
  })
}


  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm editPizza = {this.state.editPizza} 
        handleChange={this.handleChange}
        handleSubmit ={this.handleSubmit}/>
        <PizzaList pizzas = {this.state.pizzas} handleEdit ={this.handleEdit}/>
      </Fragment>
    );
  }
}

export default App;
