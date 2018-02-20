import React from 'react';
import {Link} from 'react-router-dom';

/*

data = {
    aboutUsText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a pharetra orci, eu maximus nisi. Integer eu euismod urna. 
                                Curabitur non magna imperdiet, fringilla velit eu, elementum purus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
                                Integer sollicitudin fermentum feugiat. Suspendisse sit amet purus vestibulum, pretium quam vitae, porttitor turpis.",
    color: "red lighten-2",
    textColor: "grey-text text-lighten-4",
    address: "1111 SW 11th Street",
    phone: "(786)555-1234",
    fax: "(305)555-1234",
    copyright: "2017 Copyright Dr.Xiaolin Mary Tan",
    siteMap: [
        {link: "#",
        text: "Home"},
        {link: "#",
        text: "Recipes"},
        {link: "#",
        text: "About Us"},
        {link: "#",
        text: "Pictures"},
        {link: "#",
        text: "Services"}
    ]


}




*/



const Footer = (props) => {
    
    const data = {
        color: 'teal lighten-1 white-text text-darken-2',
        aboutUs: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a pharetra orci, eu maximus nisi. Integer eu euismod urna. Curabitur non magna imperdiet, fringilla velit eu, elementum purus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer sollicitudin fermentum feugiat. Suspendisse sit amet purus vestibulum, pretium quam vitae, porttitor turpis.',
        address: "1111 SW 11th Street",
        phone: "(786)555-1234",
        fax: "(305)555-1234",
        copyright: "2017 Copyright Dr.Xiaolin Mary Tan",
        map: [
            {
                  name: "Home",
                  link: "/"
            },
            {
                  name: "Pictures",
                  link: "/Pictures"
            },
            {
                  name: "Services",
                  link: "/Services"
            },
            {
                  name: "Pricing",
                  link: "/Pricing"
            },
            {
                  name: "Recipes",
                  link: "/Recipes"
            },
            {
                  name: "Specialty",
                  link: "/Specialty"
            },
            {
                  name: "About Us",
                  link: "/About Us"
            }
      ]
    }

    const footerStyle = {
        position:'relative',
        height: 'auto',
        bottom: '0',
        left: '0',
        width: '100%',
        overflow: 'hidden',
        marginTop: '15rem'
    }


    const siteMap = data.map.map((data, key)=>{
        return(<li key={key}> <Link to={`${data.link}`}>{data.name}</Link> </li>)
    });

	return(
		
        <footer className={`page-footer ${data.color}`} style={footerStyle}>
            <div className="container">
                <div className="row">
                    <div className="col s4 pull-s1">
                        <div className="row">
                            <h5 className="white-text">About Us</h5>
                            <p className="left-align" > 
                                {data.aboutUs}
                            </p>
                        </div>
                        <div className="row">
                            <h5 className="white-text">Contact Info</h5>
                            <p className="left-align">
                                <b>Address:</b> {data.address}
                            </p>
                            <p className="left-align">
                                <b>Phone:</b> {data.phone}
                            </p>
                            <p className="left-align">
                                <b>Fax: </b> {data.fax}
                            </p>
                        </div>
                    </div>
                    <div className="col s5">
                        <h5>Location</h5>
                        <div className="container row">
                            <div id="map" className="col s12" style={{height:'300px'}}>
                                <script src="gmaps.js"></script>
                                <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBZKK32pK9aPx-1DG_V0R9eruvveyYT91E&callback=initMap"></script>
                            </div>
                        </div>
                    </div>
                    <div className="col s2">
                        <h5 className="white-text">Site Map</h5>
                        <ul>
                            {siteMap}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-copyright">
                <div className="container">
                    © {data.copyright}
                    <a className="right" href="#!"> </a>
                </div>
            </div>
        </footer>
            
	)
}

export default Footer;