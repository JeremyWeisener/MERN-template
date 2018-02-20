import React, { Component } from 'react';

/*

props.data = {
      color: [
            "blue",
            "red",
            "yellow",
            "green"
            ]
      
}



*/



export default class MediaCardWide extends Component {

      constructor(props){
            super(props);

            this.state={

                  circleStyle: {
                        width: '80px',
                        height: '80px',
                        border: '10px solid green',
                        borderRadius: '50px',
                        position: 'absolute',
                        clip: 'rect(0px, 50px, 100px, 0px)'
                  },
                  wrapperStyle: {
                        width: '100px',
                        height: '100px',
                        position: 'absolute',
                        clip: 'rect(0px, 100px, 100px, 50px)'
                  },
                  phraseStyle: {
                        display: 'block',
                        width:'100%',
                        webkitAnimationTimingFunction: 'linear'
                  }
            };

      }

      render(){
      	return(
                  <div className="row">
                        <div className="col s3">
                              <img src={this.props.data.thumbnail} />
                        </div>
                        <div className="col s9">
                              <div className="row">
                                    <h3>{this.props.data.header}</h3>
                                    <p>{this.props.data.text}</p>
                              </div>
                              <a href="#"
                                 style={this.state.phraseStyle}
                              >
                                    {this.props.data.phrase}
                              </a>
                        </div>  
                  </div>
      	)
      }

}