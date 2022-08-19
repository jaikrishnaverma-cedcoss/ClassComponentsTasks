import React, { Component } from 'react';
import Component1 from './Component1';
class Template2 extends Component {
    state = {  } 
    render() { 
        return (
            <div className='box'>
                <Component1/>
               <div className='row rower'>
                <div className='componentDiv'><Component1/><Component1/></div>
                <Component1/>
                <Component1/>
                
               </div>
            </div>
        );
    }
}
 
export default Template2;