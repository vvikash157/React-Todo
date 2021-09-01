
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
                   className="typtext"
                   onChange={(e)=>{
                        this.setState=({currInput:e.currentTarget.value  });
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