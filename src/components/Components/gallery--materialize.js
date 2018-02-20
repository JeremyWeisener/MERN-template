import React, {Component} from 'react';


/*

{
	img: '',
	big: '',
	small: '',
	pos: '',
	color: ''
}


*/

export default class GalleryMaterialize extends Component{
	constructor(props){
		super(props);

		this.state={
			data: [
				{
					img: 'https://lorempixel.com/580/250/nature/1',
					big: 'This is Our Tag Line',
					small: 'Heres our small slogan.',
					pos: 'center',
					color: 'white-text text-darken-2'
				},{
					img: 'https://lorempixel.com/580/250/nature/2',
					big: 'Left Align',
					small: 'Heres our small slogan.',
					pos: 'left',
					color: 'white-text text-darken-2'
				},{
					img: 'https://lorempixel.com/580/250/nature/3',
					big: 'Right Align',
					small: 'Heres our small slogan.',
					pos: 'right',
					color: 'white-text text-darken-2'
				},{
					img: 'https://lorempixel.com/580/250/nature/4',
					big: 'Bottom Align',
					small: 'Heres our small slogan.',
					pos: 'center',
					color: 'white-text text-darken-2'
				},
			],
			sliderStyle: {
				display: 'block',
				margin: '0 auto',
			}
		}


	}


	slides(){
		return(

			this.state.data.map((data, key)=>{
				return(
						<li key={key}>
							<img src={data.img} />
							<div className={`caption ${data.pos}-align`}>
								<h3>
									{data.big}
								</h3>
								<h5 className={`${data.color}`}>
									{data.small}
								</h5>
							</div>
						</li>
					)
			})
	)}


	componentDidMount(){
		$(document).ready(function(){
	      $('.slider').slider();
	    });

	}

	render(){
		return(

			<div className="slider" style={this.state.sliderStyle}>
				<ul className="slides">
					{this.slides()}
				</ul>
			</div>
		      
		)
	}

}