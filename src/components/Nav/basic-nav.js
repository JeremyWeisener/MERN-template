import React from 'react';
import {Link} from 'react-router-dom';

/*

props.data = {
      brand: "Xiaolin Tan",
      links: [
                  {link: "https://www.google.com/",
                  name: "Google"},
                  {link: "https://www.facebook.com/",
                  name: "Facebook"},
                  {link: "https://www.AOL.com/",
                  name: "AOL"},
            ],
      color: [

            /READ_ME
                  /materialize-color-options.png
                  **Add '-text' after the color of choice followed by a space and then any darken or lighten ratio.

            light-blue,
            red,
            pink,
            purple,
            deep-purple,
            indigo,
            blue,
            cyan,
            teal,
            green,
            light-green,
            lime,
            yellow,
            amber,
            orange,
            deep-orange,
            brown,
            blue-grey,
            grey,
            black,
            white,
            transparent
            ],
}



*/




const BasicNav = (props) => {
    
      const data = {
            brand: "Mary Tan",
            color: "teal lighten-1 white-text text-darken-2"
      }

      const pages = [
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

      const tabStyle = {
            display: 'block'
      }

      const tabs = pages.map((data, key)=>{

            return (<li 
                        key={key}>

                        <Link to={`${data.link}`} style={tabStyle}> {data.name} </Link>
                  </li>);
      });


	return(
		<div>
                  <nav id="nav" className={data.color}>
                        <div className="nav-wrapper container">
                              <a href="/" className="brand-logo">{data.brand}</a>
                              <ul id="nav-mobile" className="right hide-on-med-and-down">
                              {tabs}
                              </ul>
                        </div>
                  </nav>
            </div>
	)
}

export default BasicNav;