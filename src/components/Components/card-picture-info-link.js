import React, { Component } from 'react';

/*

props.data = {
      img: "",
      header: "",
      text: "",
      link: "",
      color: [

            /READ_ME
                  /materialize-color-options.png
                  **Add '-text' after the color of choice followed by a space and then any darken or lighten ratio.

            light-blue-text,
            red-text,
            pink-text,
            purple-text,
            deep-purple-text
            indigo-text,
            blue-text,
            cyan-text,
            teal-text,
            green-text,
            light-green-text,
            lime-text,
            yellow-text,
            amber-text,
            orange-text,
            deep-orange-text,
            brown-text,
            blue-grey-text,
            grey-text,
            black-text,
            white-text,
            transparent-text
            ],
      phrase: "",
      hover: ""
      header: "",
      text: "",
      
}



*/



export default class PicInfoLinkCard extends Component {

      constructor(props){
            super(props);

            this.state={

                  cardStyle: {
                        borderRadius: '2px',
                        padding: '0',
                        margin: '0 -0.75rem 0 -0.75rem'
                  },
                  imgStyle: {
                        width: "100%",
                        height: "auto"
                  },
                  headerStyle: {
                        padding: '0 1rem 0 1rem',
                        textAlign:'left'
                  },
                  paragraphStyle: {
                        marginTop: '3rem',
                        padding: '0 1rem 0 1rem',
                        textAlign: 'left'
                  },
                  phraseStyle: {
                        marginTop: '5rem',
                        padding: '1rem',
                        width:'100%',
                        display:'block',
                        height:'auto',
                        fontSize: '2rem'
                  },
                  phraseColor: ""
            };

      }

      onHover(hoverState){
            if(hoverState){
                  this.setState({
                        phraseColor: this.props.data.hover
                  });
            }
            else{
                  this.setState({
                        phraseColor: ""
                  });
            }
      }

      render(){
      	return(
      		<div className="PicInfoLinkCard" style={this.state.cardStyle}>

                        <img className="PicInfoLinkCard__img" src={`${this.props.data.img}`} style={this.state.imgStyle} />

                        <h5 className="PicInfoLinkCard__h5" style={this.state.headerStyle} >
                              {this.props.data.header}
                        </h5>

                        <p className="PicInfoLinkCard__p light" style={this.state.paragraphStyle} >
                              {this.props.data.text}
                        </p>

                        <a    href={`${this.props.data.link}`} 
                              className={`PicInfoLinkCard__phrase ${this.props.data.color} ${this.state.phraseColor}`} 
                              style={this.state.phraseStyle} 
                              onMouseEnter={() => {this.onHover(true)}} 
                              onMouseLeave={() => {this.onHover(false)}}
                        >  
                              {`${this.props.data.phrase}`}
                              <i className="material-icons"> chevron_right </i>
                        </a>

      		</div>
      	)
      }

}