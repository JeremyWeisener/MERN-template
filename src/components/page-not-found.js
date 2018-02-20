import React, {Component} from 'react';

export default class PageNotFound extends Component{
	constructor(props){
		super(props);

		this.state = {
			h1Style : {
				marginTop: '10rem'
			},
			h5Style : {
				textAlign: 'left'
			}
		}
	}



	render(){
		return(
				<div className="row">
					<div className="col s6 push-s3">
						<h1 style={this.state.h1Style}>404 Page Not Found</h1>
						<h5 style={this.state.h5Style}>That page could not be found, please check</h5>
						<ul>
							<li>Spelling</li>
							<li>Symbols <span className="grey-text text-darken-1">proper URL: http://DrMaryTan.com/#Specialty</span></li>
							<li>Try to find your way back to the page</li>
						</ul>
						<h5 style={this.state.h5Style}> If there error persists, please notify webhost</h5>
					</div>
				</div>
			)
	}



}