import React, { Component } from 'react';

/*

props.data = {
      header: "",
      text: "",
      size: [
            Tiny,
            Small,
            Medium,
            Large
            ],
      icon: [
            /READ_ME
                  /materialize-icon-options.png
            ],
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
}



*/




const BasicInfoCard = (props) => {
    
	return(
		<div className="icon-block">
                  <h1 className={`center ${props.data.color} dp48`} >
                        <i className={`${props.data.size} material-icons`}>
                              {props.data.icon}
                        </i>
                  </h1>
                  <h5 className="center">
                        {props.data.header}
                  </h5>
                  <p className="light">
                        {props.data.text}
                  </p>
		</div>
	)
}

export default BasicInfoCard;