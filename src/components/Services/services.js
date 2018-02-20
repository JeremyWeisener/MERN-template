import React, { Component } from 'react';

const Services = (props) => {
    
      console.log(props.data);

      const benefitz = props.data.benefits.map((data, key)=>{

            if(key%2 == 0){
                  return (
                        <div className="row row-padding bg-pink shadow" style={{color:'rgba(255, 255, 255, 0.87)'}} key={key}>
                              <div className="container">
                                    <h2 className="service-info__benefits__header">{data.name}</h2>
                                    <div className="col s4">
                                          <img className="img-responsive shadow" src={data.img} />
                                    </div>
                                    <div className="col s7 offset-s1">
                                          <p>{data.info}</p>
                                    </div>
                              </div>
                              
                        </div>
                  )
            }
            else{
                  return (
                        <div className="row row-padding" key={key}>
                              <div className="container">
                                    <h2 className="service-info__benefits__header">{data.name}</h2>
                                    <div className="col s7 pull-s1">
                                          <p>{data.info}</p>
                                    </div>
                                    <div className="col s4">
                                          <img className="img-responsive shadow" src={data.img} />
                                    </div>
                              </div>
                              
                        </div>
                  )     
            }



            
      });
	return(
		<div className="row row-padding service-info" style={{padding: "0"}}>
                  <div className="col s12">
                        <div className="row">
                              <div className="container">
                                    <table className="col s12 service-info__basic">
                                          <tbody>
                                          <tr className="row service-info__basic__title">
                                                <td className="col s2 service-info__basic__body__symbol">
                                                      <img className="img-responsive" src={props.data.symbol} />
                                                </td>
                                                <td className="col s10">
                                                      <h2 className="service-info__header">{props.data.name}</h2>
                                                </td>
                                          </tr>

                                          <tr className="row service-info__basic__body" style={{borderBottom: '0'}}>
                                                <td className="col s7 service-info__desc">
                                                      <p>
                                                            {props.data.desc}
                                                      </p>
                                                </td>
                                                <td className="col s5 service-info__basic__body__img">
                                                      <img className="img-responsive" src={props.data.img} />
                                                </td>
                                          </tr>
                                          </tbody>
                                    </table>
                              </div>
                        </div>
                        <div className="row">
                              <div className="col s12">
                                    {benefitz}
                              </div>
                        </div>
                  </div>
		</div>
	)
}

export default Services;