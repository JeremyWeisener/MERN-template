import React, {Component} from 'react';

/*


props.data = {
	
	header: '',
	address: 'Miami FL, 8801 sw 80th Street',
	email: 'doctormarytan@yahoo.com',
	phone: '(305)555-5555',
	fax: '(786)555-5555',
	textColor: '',
	underlineColor: '',



}


*/



export default class FooterContact extends Component {
	constructor(props){
		super(props);

		this.state = {
			headerStyle: {
				borderBottom: `0.3rem solid ${this.props.data.underlineColor}`
			},
			h3Style: {
				marginBottom: '0.4rem'
			}
		}

	}


	render(){
		return(
				<div>
					<h3 className={`${this.props.data.textColor}`} style={this.state.h3Style}><span style={this.state.headerStyle}>{this.props.data.header}</span></h3>

					<h5 className={`${this.props.data.textColor}`}><i className="material-icons small"> home </i> {this.props.data.address} </h5>
					<h5 className={`${this.props.data.textColor}`}><i className="material-icons small"> email </i> {this.props.data.email} </h5>
					<h5 className={`${this.props.data.textColor}`}><i className="material-icons small"> local_phone </i> {this.props.data.phone} </h5>
					<h5 className={`${this.props.data.textColor}`}><i className="material-icons small"> local_printshop </i> {this.props.data.fax} </h5>
				</div>
			)
	}


}