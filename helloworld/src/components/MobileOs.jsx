import React, { Component } from 'react';
class MobileOs extends Component {
    constructor(props) {
        super(props);
        this.arr=['Android',"Blackberry","iPhone","Windows Phone"];
    }
    state = {  }
    render() { 
        return (
            <div>
            <h2>Mobile Operating System</h2>
           <ul>
               {this.arr.map((item)=>
                   <li>{item}</li>
               )}
           </ul>
          </div>
             );
    }
}
 
export default MobileOs;