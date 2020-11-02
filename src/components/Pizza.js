import React from "react"

const Pizza = (props) => {
  let {pizza} = props
  return(
    <tr>
      <td>{pizza.topping}</td>
      <td>{pizza.size}</td>
      <td>{pizza.vegetarian? 'Yes' : 'No'}</td>
      <td><button onClick={()=>props.handleEdit(props.pizza)}type="button" className="btn btn-primary">Edit Pizza</button></td>
    </tr>
  )
}

export default Pizza
