import React, { Component } from 'react';


class navigation extends Component {
    state = {  }
    render() { 
        return ( 
            <nav class="navbar navigation navbar-expand-lg ">
                <div className="container">
                    <a class="navbar-brand" href="#">
                        <img className="img-fluid" width="200" src="assets/logo.png"/>
                    </a>
                    <button class="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">


                        <ul class=" navbar-nav ml-auto ">
                            <li class="nav-item active">
                                <a class="nav-link nav-text" href="/">Home <span class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link nav-text" href="/news">News</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link nav-text" href="/about">About</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link nav-text dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Dropdown
                                </a>
                                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a class="dropdown-item" href="#">Action</a>
                                <a class="dropdown-item" href="#">Another action</a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="#">Something else here</a>
                                </div>
                            </li>
                
                        </ul>
                    </div>
                </div>
            </nav>

         );
    }
}
 
export default navigation;