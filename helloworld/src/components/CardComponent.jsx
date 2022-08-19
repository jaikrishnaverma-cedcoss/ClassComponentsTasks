import React, { Component } from 'react';
class CardComponent extends Component {
    state = {  }
    render() { 
        return (
            <div className='CardComponent'>
                <img src={this.props.image}></img>
                <p className='p1'>{this.props.title}</p>
                <p className='p2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit tenetur voluptas illum iusto tempora enim voluptates facilis hic quis delectus! Quibusdam tempore ipsam sunt et est temporibus eveniet consectetur ab?</p>
                <button>Go Anywhere</button>
            </div>
        );
    }
}
 
export default CardComponent;