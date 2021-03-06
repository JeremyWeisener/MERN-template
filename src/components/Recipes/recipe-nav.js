import React, { Component } from 'react';
import RecipeTile from './recipe-tile.js';
import Recipe from './recipe.js';
import Nav from '../Nav/basic-nav.js';
import Footer from '../Footer/basic-footer.js';

const data = [
    {title: "Spicy Fried Chik'n"},
    {title: "Tacos"},
    {title: "Burgers"},
    {title: "Fried Rice"},
    {title: "Chik'n Tenders"},
    {title: "Picadillo"},
]


export default class RecipeNav extends Component{

    constructor(props){
        super(props);

        this.state={
      
        }
    }

    recipes(){

        return(
            data.map((data, key) => {
                return (<RecipeTile data={data} key={key} />);
            })
        )
    }

    render(){


            return(<div>

                <Nav />

                <div>
                    <div className="bamboo parallax"></div>

                    <div className="row container">
                        <h1> Recipes </h1>
                        <div className="col s10 push-s1">
                            
                        </div>
                        <div className="col s12">
                            <div className="row">
                                {this.recipes()}
                            </div>
                        </div>
                    </div>
                </div>

                <Footer />

            </div>)
    }
    
    
}