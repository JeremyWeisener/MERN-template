import React from 'react';

const Service = (props) => {
    
	return(
		<div className="col s3 service card" style={{padding: "0", margin: '2rem 3.5rem'}}>
                  <div className="service__img card-img">
                        <img src={`${props.data.img}`} alt="" />
                  </div>
                  <div className="service__desc">
                        <h4 className="service__title card-title container" style={{fontSize: '1.75rem', textAlign: 'center', fontWeight: '600', textShadow: '0 10px 38px rgba(0,0,0,0.30), 0 10px 12px rgba(0,0,0,0.22)'}}>{props.data.name}</h4>
                  	<p style={{padding:'0 1.5rem'}} className="service__desc__p">{props.data.desc}</p>
                        <div className="service__desc__overflow"></div>
                  </div>
		</div>
	)
}

export default Service;