
import React from "react";

    class App extends React.Component{

         state={
        Tasks:["make Coffee","house cleaning","drink water 10 times","sleep at 10 pm","good use of free time"],
            currInput="",
        };

        render=()=>{

            return (
               
               <div>
                   <input
                   type="text"
                   className="input-box"
                   onChange={(e)=>{
                        this.setState=({currInput:e.currentTarget.value  });
                   }}

                   onKeyDown={(e)=>{
                       if(e.key=="Enter"){
                           this.setState({
                               Tasks:[...this.state.currInput,this.state.currInput],
                               currInput="",
                           });
                       }
                   }}

                   value={this.this.state.currInput}
                   />
                    <ul>
                        {this.state.Tasks.map((el)=>{

                            return <li>{el}</li>
                        })}
                    </ul>
                </div>
            );

        };
    };

export default App; 