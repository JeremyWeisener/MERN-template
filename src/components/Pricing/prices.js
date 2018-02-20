import React, { Component } from 'react';
import Map from './map.js';
import PriceItem from './pricing.js';

const Prices = (props) => {
    
    const items = props.prices.map((data, key) => {
        return (<PriceItem data={data} key={key} />);
    });
    
	return(
      <div id="Prices" className="">
        <div className="bamboo parallax"></div>

        
        
        <div className="row container row-padding prices__items">

            <h2 className="prices__items__header">Prices</h2>
        
            
            {items}
            
        </div>
        
        <div className="row">
           
        </div>
        
      </div>
	)
}

export default Prices;