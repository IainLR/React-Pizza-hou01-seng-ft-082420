import React from "react"

const PizzaForm = (props) => {
  return(
  
      <div className="form-row">
        <div className="col-5">
            <input name = 'topping' onChange={(e) => props.handleChange(e)} type="text" className="form-control" placeholder="Pizza Topping"  value={
                props.editPizza.topping
              }/>
        </div>
        <div className="col">
          <select  name = 'size' onChange={(e) => props.handleChange(e)} value={props.editPizza.size} className="form-control">
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input name = 'vegetarian' onChange={(e) => props.handleChange(e)} className="form-check-input" type="radio" value={true} 
            checked={props.editPizza.vegetarian}/>
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input name = 'vegetarian' onChange={(e) => props.handleChange(e)} className="form-check-input" type="radio" value={false} 
            checked={!props.editPizza.vegetarian}/>
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success" onClick={()=>props.handleSubmit()}>Submit</button>
        </div>
      </div>
      
      

  )
}
export default PizzaForm
