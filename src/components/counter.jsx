import React, { Component } from 'react';

class counter extends Component {
    
    state = { 
        text: "Vince!"
    }

    


    render() { 
        
  


        return ( 
            <h1>Hello {this.additional(0)}</h1>
         );
    }

    additional(number) {
        return number === 0 ? 'zero' : number;
    }
}
 
export default counter;