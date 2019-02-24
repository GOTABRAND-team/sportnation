import React, { Component } from 'react';


import './style.css';



class home extends Component {
    state = {  }
    render() { 
        return ( 
            <div class="container">
                <div class="jumbotron my-5">
                    <h1 class="display-4">Hello, world!</h1>
                    <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                    <hr class="my-4"></hr>
                    <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                    <p class="lead">
                        <a class="btn btn-primary btn-lg" href="/about" role="button">Learn more</a>
                    </p>
                </div>
 

            </div>
        );
    }
}
 
export default home;