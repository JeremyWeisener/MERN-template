import React, { Component } from 'react';

/*

props.data = {
      name: "",
      info: "",
      img: "",
      brand: "Xiaolin Tan",
      color: [

            /READ_ME
                  /materialize-color-options.png
                  **Add '-text' after the color of choice followed by a space and then any darken or lighten ratio.

            light-blue,
            red,
            pink,
            purple,
            deep-purple,
            indigo,
            blue,
            cyan,
            teal,
            green,
            light-green,
            lime,
            yellow,
            amber,
            orange,
            deep-orange,
            brown,
            blue-grey,
            grey,
            black,
            white,
            transparent
            ],
}



*/




const BasicImgTextRow = (props) => {

      if(props.data.side == "right"){
            return(
                  <div className={`row row-padding ${props.data.color} ${props.data.textColor}`} >
                        <div className="container">
                              <h2 className="service-info__benefits__header">{props.data.name}</h2>
                              <div className="col s7 pull-s1">
                                    <p>{props.data.info}</p>
                              </div>
                              <div className="col s4">
                                    <img className="img-responsive shadow" src={props.data.img} />
                              </div>
                        </div>
                        
                  </div>
            )
      }
      else if(props.data.side == "left"){
            return(
            <div className={`row row-padding ${props.data.color} ${props.data.textColor}`} >
                  <div className="container">
                        <h2 className="service-info__benefits__header">{props.data.name}</h2>
                        <div className="col s4">
                              <img className="img-responsive shadow" src={props.data.img} />
                        </div>
                        <div className="col s7 pull-s1">
                              <p>{props.data.info}</p>
                        </div>
                  </div>
                  
            </div>
      )
      }

	
}

export default BasicImgTextRow;