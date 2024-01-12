import { Component } from "react";
import "./App.css"

export default class AppClass extends Component{
  
  render(){
    return(
    <div>
      <h1>Kalvium gallary(App Class)</h1>
      <div className="row">
        {this.props.Data.map((image) => {
          return (
            <div className="column" key={image.id}>
              <img src={image.img} alt="" />
            </div>
          );
          // code here
        })}
      </div>
    </div>
    )
  }
}
