import React, { Component } from 'react';

export default class Map extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            name: this.props.name
        }
    }
        
    loadJS(source) {
		var ref = window.document.getElementById('map');
		var script = window.document.createElement("script");
		script.src = source;
		script.async = true;
		ref.parentNode.insertBefore(script, ref);
	}
	componentWillMount(){
		console.log(this.state.name);
	}
	componentDidMount(){
		console.log(this.props.name);
		window.initMap = this.initMap;
		this.loadJS('https://maps.googleapis.com/maps/api/js?key=AIzaSyBZKK32pK9aPx-1DG_V0R9eruvveyYT91E&callback=initMap');
	}
	
	initMap(){
		var uluru = {lat: 25.696627, lng: -80.300206};
        
		map = new google.maps.Map(document.getElementById('map'), {
			zoom: 16,
			center: uluru,
		});
        
		var marker = new google.maps.Marker({
			position: uluru,
			map: map
		});
        
        if(document.getElementById('map2')){
	        map2 = new google.maps.Map(document.getElementById('map2'), {
				zoom: 16,
				center: uluru,
			});
	        
	        var marker = new google.maps.Marker({
				position: uluru,
				map: map2
			});
    	}

	}
 
    render() {
        return (
            <div className="container row">
                <div id={`${this.props.name}`} className="col s12" style={{height:this.props.height}}>
                    <script src="gmaps.js"></script>
                    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBZKK32pK9aPx-1DG_V0R9eruvveyYT91E&callback=initMap"></script>
                </div>
            </div>
        );
    }
}