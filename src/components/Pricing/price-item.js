import React, { Component } from 'react';
import Map from './map.js';

const PriceItem = (props) => {
    
    const items = props.data.features.map((data, key) => {
        return (<li key={key}>{data}</li>);
    });
    
    const misseditems = props.data.nonfeatures.map((data, key) => {
        return (<li key={key}><s>  {data}  </s></li>);
    });
    
	return(
      <div className="price-item col s3 offset-s2">
        
        <h4 className="price-item__header">{props.data.name}</h4>
        <div className="price-item__price">
            <h2>{props.data.price}</h2>
            <h5>{props.data.frequency}</h5>
        </div>
        <ul className="price-item__features">
            {items}
            {misseditems}
        </ul>
        
        <a className="price-item__button waves-effect waves-light btn">Learn More</a>
        
      </div>
	)
}

export default PriceItem;