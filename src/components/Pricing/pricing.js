import React, { Component } from 'react';

//  props.data

//  H2 : Name
//  UL : Features
//  UL : Missed Features
//  P  : Price
//  P  : Frequency
//  P  : Desc
//  P  : Color

const PriceItem = (props) => {
    
    const Name      = props.data.name;
    const Features  = props.data.features;
    const Missed    = props.data.missed;
    const Price     = props.data.price;
    const Frequency = props.data.frequency;
    const Desc      = props.data.desc;
    const Color     = props.data.color

    const priceItemStyle = {
        padding: '0.6rem',
        textAlign: 'center',
        WebkitBoxShadow: '0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2)',
        boxShadow: '0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2)'
    }

    const priceItemHeader = {
        marginBottom: '2rem'
    }

    const priceItemPrice = {
        padding: '0.5rem',
        color: 'white',
        width: '100%',
        margin: '0 auto',
        backgroundColor: `${Color}`,
        WebkitBoxShadow: '0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2)',
        boxShadow: '0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2)'
    }

    const priceItemFeaturesLI = {
        width: '100%',
        padding: '0.9rem 0.6rem 0.9rem 0.6rem',
        fontWeight: '600',
        fontSize: '18px'
    }

    const priceItemButton = {
        margin: '0.5rem',
        marginBottom: '1.5rem'
    }

    const items = Features.map((data, key) => {
        return (<li key={key} style={priceItemFeaturesLI}>{data}</li>);
    });
    
    const missedItems = Missed.map((data, key) => {
        return (<li key={key} style={priceItemFeaturesLI}><s>  {data}  </s></li>);
    });
    
    return(
      <div className="price-item col s3 offset-s1" style={priceItemStyle}>
        
            <h4 className="price-item__header" style={priceItemHeader}>
                {Name}
            </h4>

            <div className="price-item__price" style={priceItemPrice} >
                <h2>{Price}</h2>
                <h5>{Frequency}</h5>
            </div>

            <ul className="price-item__features" >
                {items}
                {missedItems}
            </ul>
        
        <a className="price-item__button waves-effect waves-light btn" style={priceItemButton} >Learn More</a>
        
      </div>
    )
}

export default PriceItem;