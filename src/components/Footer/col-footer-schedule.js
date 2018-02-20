import React, { Component } from 'react';


/*

props.data = {
	header: "OPEN HOURS",
	textColor: 'red-text',
	color: 'red',
	rows: [
		{
			days: 'Mon - Thu:',
			hours: '8am - 9pm',
		},
		{
			days: 'Fri - Sat:',
			hours: '8am - 1am',
		},
		{
			days: 'Sunday:',
			hours: '9am - 10pm',
		}
	]
}




*/

export default class FooterSchedule extends Component {
	constructor(props){
		super(props);

		this.state = {
			scheduleStyle: {
				textAlign: 'center'
			},
			rowStyle: {
				borderTop: `0.2rem solid ${this.props.data.color}`,
				textAlign: 'center'
			},
			colStyle: {
				
			},
			headerStyle: {
				fontWeight: '600'
			}
		}
	}

	genRows(){
		console.log("genRows()");
		return(
				this.props.data.rows.map((data, key)=>{
					return(
							<div className="row" style={this.state.rowStyle} key={key}>
								<div className="col s6" style={this.state.colStyle}>
									<h5>{data.days}</h5>
								</div>
								<div className="col s6" style={this.state.colStyle}>
									<h5>{data.hours}</h5>
								</div>
							</div>
						)
				})
			)
	}

	render(){
		return(
				<div className={`${this.props.data.textColor}`} style={this.state.scheduleStyle}>

					<h3 style={this.state.headerStyle} >{this.props.data.header}</h3>

					{this.genRows()}
					
				</div>
			)
	}
}