import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class RecipeTile extends Component{
    constructor(props){
        super(props);

        this.state={

        }


    }
    

    render(){
    	return(
    		
            <div className="col s2 m3">
                <div className="card" >
                    <Link to={`/Recipes/${this.props.data.title}`} >
                        <div className="card-image">
                            <img src="https://i.imgur.com/eTuCPxM.jpg" />
                            <span className="card-title">{this.props.data.title}</span>
                        </div>
                    </Link>
                </div>
            </div>
                
    	)
    }
}
