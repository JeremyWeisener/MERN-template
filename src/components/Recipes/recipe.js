import React, { Component } from 'react';
import CheckList from '../Components/list-check.js';
import NumberedList from '../Components/list-numbered.js';
import GalleryMaterialize from '../Images/gallery--materialize.js';
import Nav from '../Nav/basic-nav';
import Footer from '../Footer/basic-footer.js';




export default class Recipe extends Component{

    constructor(props){
        super(props);

        this.state={

            numberListData : {
                header: "Steps",
                color: "",
                textColor: "",
                list: [
                    "Cook rice by following instructions on the box",
                    "While the rice is cooking, saute the onions, garlic, and ginger in a pan with a little bit of sesame oil",
                    "After about 5 minutes of sauteing, throw in the veggies",
                    "Continuously stir saute pan until rice is done",
                    "Throw the rice in the saute pan and add soy sauce",
                    "Stir occasionally until rice absorbs all the soy sauce",
                    "Serve and enjoy ! "
                ]
            },
            checkListData : {
                header: "Ingredients",
                color: "",
                textColor: "",
                list: [
                    "1Cup of uncooked Rice",
                    "1/2Cup of Carrots",
                    "1/4Cup of Peas",
                    "3 8oz pieces of Firm Tofu",
                    "1Juicy Lemon"
                ]
            },
            checkBox : {
                display: 'inline-block',
                padding: '0.5rem',
                paddingBottom: '0',
                margin: '0.5rem 2rem -1rem -3.5rem'
            },
            banner : {
                height: window.innerHeight,
                width:'100%',
                marginTop: 0,
            },
            videoStyle: {
                display: 'block',
                margin: '0 auto',
            },
            title: {
                marginBottom: '10rem',
            },
            bannerCover: {
                top:0,
                left:0,
                right:0,
                backgroundColor: 'rgba(0,0,0,0.33)',
            },
            gallery: [
                {
                    img: 'https://lorempixel.com/580/250/nature/1',
                    big: 'This is Our Tag Line',
                    small: 'Heres our small slogan.',
                    pos: 'center',
                    color: 'white-text text-darken-2'
                },{
                    img: 'https://lorempixel.com/580/250/nature/2',
                    big: 'Left Align',
                    small: 'Heres our small slogan.',
                    pos: 'left',
                    color: 'white-text text-darken-2'
                },{
                    img: 'https://lorempixel.com/580/250/nature/3',
                    big: 'Right Align',
                    small: 'Heres our small slogan.',
                    pos: 'right',
                    color: 'white-text text-darken-2'
                },{
                    img: 'https://lorempixel.com/580/250/nature/4',
                    big: 'Bottom Align',
                    small: 'Heres our small slogan.',
                    pos: 'center',
                    color: 'white-text text-darken-2'
                },
            ]


        }


    }

    componentWillMount(){
        console.log('this');
        console.log(this);
        console.log('this.props');
        console.log(this.props);
        console.log('this.state');
        console.log(this.state);
    }

    componentDidMount(){


        this.setState({
            banner: {
                height: (window.innerHeight - document.getElementById('nav').clientHeight),
                width: '100%',
                marginTop: '0',
            }
        });

        console.log("Nav");
        console.log(document.getElementById('nav'));    
    }


    render(){

    	return(<div>

            <Nav />
    		
            <div className="row">
                <div className="col s12">
                    <div className="row">
                        <div className="card center-img recipe-img" style={this.state.banner}>
                            <div className="card-image" style={this.state.banner}>
                                <div className="friedRice parallax recipe__bannerText" style={{textAlign:'center'}}></div>
                                <div className="card-title" style={this.state.bannerCover}>
                                    <h1 className="center-align" style={this.state.title}>{this.props.match.params.name}</h1>
                                    <h3 className="center-align" ><i className="medium material-icons dp48">access_time</i> 25min</h3>
                                    <h3 className="center-align" ><i className="medium material-icons dp48">attach_money</i><i className="medium material-icons dp48">attach_money</i></h3>
                                    <h3 className="center-align" ><i className="medium material-icons dp48">shopping_cart</i> 11 ingredients</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row container">
                        <div className="col">
                            <h1></h1>
                        </div>
                    </div>
                    <div className="row bg-pink row-padding">
                        <div className="col s12 push-s2 container">
                            <iframe style={this.state.videoStyle} width="560" height="315" src="https://www.youtube.com/embed/qzQNiX1TNxs?rel=0" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
                        </div>
                    </div>
                    <div className="row">
                        <CheckList data={this.state.checkListData} />
                        <NumberedList data={this.state.numberListData} />
                    </div>
                    <div className="row center">
                        <a className="waves-effect waves-light btn-large">Print Recipe</a>
                    </div>

                    <div className="row row-padding container" style={{display:'block',margin:'0 auto'}}>
                        <GalleryMaterialize data={this.state.gallery}/>
                    </div>

                </div>
            </div>

            <Footer />

        </div>)
    }
}
