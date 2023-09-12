import "./align.css";
import React from "react";

class ClassEx extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            num: 5
        };
    }
    render(){
        return(
            <div className="ClassEx">
       Num{this.state.num}
        <div>
             <button 
             onClick={()=>
             this.setState({
                num : this.state.num * 3
             })
            }
            >multiplication of 3
                </button>
                <button 
             onClick={()=>
             this.setState({
                num : this.state.num/2
             })
            }
            >division of 2
                </button>
                </div>
                </div>
                );
              }
} 
export default ClassEx;

