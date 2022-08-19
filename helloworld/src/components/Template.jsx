import React, { Component } from 'react';
import Component1 from './Component1';
class Template extends Component {

    render() { 
        return (  
            <div className='outer'>
                <p>React App</p>
                <Component1 />
                <div className='row'>
                    <div className='componentDiv'>
                    <p>Component</p>
            
                        <Component1/>
                    <Component1/></div>
                    
                    <div className='componentDiv div2'><p>Component</p>
            <Component1/>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Template;