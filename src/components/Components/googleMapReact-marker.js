import React, {Component} from 'react';


export default class Marker extends Component{

  constructor(props){
    super(props);

    this.state={
      markerStyle : {
        // initially any map object has left top corner at lat lng coordinates
        // it's on you to set object origin to 0,0 coordinates
        position: 'absolute',
        width: 60,
        height: 60,
        left: -60 / 2,
        top: -60 / 2,

        borderRadius: 60,
        backgroundColor: 'white',
        textAlign: 'center',
        color: '#3f51b5',
        fontSize: 22,
        fontWeight: 'bold',
      }
    }


  }

  render(){
    return(
        <img style={this.state.markerStyle} src="./img/chinese-medicine.png" alt=""  />
      )
  }


}

