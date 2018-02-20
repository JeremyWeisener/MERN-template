import React, { Component } from 'react';

/*

props.data = {
      header: "Video",
      color: "green lighten-2",
      textColor: "white-text",
      list: [
            "Cook rice by following instructions on the box",
            "While the rice is cooking, saute the onions, garlic, and ginger in a pan with a little bit of sesame oil",
            "After about 5 minutes of sauteing, throw in the veggies",
            "Continuously stir saute pan until rice is done",
            "Throw the rice in the saute pan and add soy sauce",
            "Stir occasionally until rice absorbs all the soy sauce",
            "Serve and enjoy ! "
      ]
}



*/




const NumberedList = (props) => {

      const listNumberStyle = {
          fontWeight: '800',
          display: 'inline-block',
          fontSize: '6rem',
          margin: '-3rem 2rem 3rem -3rem',
          verticalAlign: 'middle',
          height: '5rem'
      }

      const liSpan = {
          whiteSpace: 'normal',
          display: 'inline-block',
          paddingRight: '3rem'
      }

      const listHeader = {
            marginBottom: '0',
            textAlign: 'center'
      }

      const listStyle = {
            marginTop: '0'
      }

      const liStyle = {
            display: 'block',
            padding: '0.87rem 0 0.87rem 5rem',
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            fontWeight: '600',
            fontSize: '18px'
      }

      const genList = props.data.list.map((data, key)=>{
            return(<li 
                        key={key} 
                        className={`${props.data.textColor}`} 
                        style={liStyle}> 

                        <span 
                              style={listNumberStyle}>
                                    {key+1}
                        </span> 

                        <span 
                              style={liSpan}> 
                                    {data} 
                        </span> 
                  </li>);
      });

      return(
              <div className={`col s4 push-s2 ${props.data.color} ${props.data.textColor} `}>
                  <h3 style={listHeader} >{props.data.header}</h3>
                  <ul style={listStyle}>
                      {genList}
                  </ul>
              </div>
      )
}

export default NumberedList;