import React, { Component } from 'react';
class MobileManufacturfers extends Component {
    constructor(props) {
        super(props);
        this.arr=['Samsung',"HTC","Micromax","Apple"];
    }
    state = {  }
    render() { 
        return ( 
           <div>
             <h2>Mobile Manufacturers</h2>
            <ul>
                {this.arr.map((item)=>
                    <li>{item}</li>
                )}
            </ul>
           </div>
         );
    }
}
 
export default MobileManufacturfers;