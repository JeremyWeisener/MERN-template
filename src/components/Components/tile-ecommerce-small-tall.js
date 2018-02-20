import React, {Component} from 'react';

/*

props.data = {
	
	img: "https://i.imgur.com/GKmL7p5.jpg",
	sale: "$69",
	original: "$119",
	btnText: "ADD TO CART",
	btnColor: "green",
	btnTextColor: "white-text",


}


*/


export default class ShopItemSmall extends Component {
	constructor(props){
		super(props);

		this.state = {
			itemStyle: {
				borderRadius: '2px',
				WebkitBoxShadow: '0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 3px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2)',
				boxShadow: '0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 3px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2)',
			},
			imgStyle: {
				display: 'block',
				width: '100%',
				height: 'auto',
				borderRadius: '3px 3px 0 0',

			},
			headerStyle: {
				textAlign: 'center'
			},
			ratingStyle: {

			},
			starStyle: {
				textAlign: 'center',
				color: 'gold',
			},
			saleStyle: {
			},
			originalStyle: {
				fontSize: '1.5rem'
			},
			pricingStyle: {
				textAlign: 'center',
			},
			buttonStyle: {
				display: 'block',
				marginTop: '2rem',
				marginBottom: '2rem',
				textAlign: 'center',
				padding: '1rem',
				borderRadius: '2px',
				WebkitBoxShadow: '0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 3px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2)',
				boxShadow: '0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 3px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2)',
			},
			iconStyle: {
				display: 'inline-block',
				verticalAlign: 'bottom',

			}
		}

	}



	render(){
		return(
				<div className="row" style={this.state.itemStyle}>
					<img src={this.props.data.img} style={this.state.imgStyle} />
					<h3 style={this.state.headerStyle} > {this.props.data.name} </h3>
					<div style={this.state.starStyle} >
						<i className="material-icons small"> star_border </i>
						<i className="material-icons small"> star_border </i>
						<i className="material-icons small"> star_border </i>
						<i className="material-icons small"> star_border </i>
						<i className="material-icons small"> star_border </i>
					</div>
					<h2 style={this.state.pricingStyle}>
						<span className="green-text text-darken-1" style={this.state.saleStyle}>
							{this.props.data.sale}
						</span>
						<span className="grey-text darken-1" style={this.state.originalStyle}>
							<del>{this.props.data.original}</del>
						</span>
					</h2>
					<a 
						className={`col s6 push-s3 ${this.props.data.btnColor} ${this.props.data.btnTextColor}`} 
						style={this.state.buttonStyle}
						onClick={this.props.func.bind()}>

						<i 
							className="material-icons small" 
							style={this.state.iconStyle}>

							add_shopping_cart
						</i> 
							{this.props.data.btnText}
					</a>
				</div>
			)
	}

}