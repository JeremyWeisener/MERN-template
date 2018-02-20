import React, { Component } from 'react';
import JQuery from 'jquery';
import Nav from './nav.js';
import Main from './main.js';
import Footer from './footer.js';

import RecipeNav from './recipe-nav.js';

import Map from './map.js';
import Map2 from './map2.js';

import Recipe from './recipe.js';

import Location from './location.js';
import AboutUs from './about-us.js';
import Prices from './prices.js';
import Services from './services.js';
import Pricing from './pricing.js';
import BasicInfoCard from './Jeremy-Components/Cards/basic-info-card.js';
import PicInfoLinkCard from './Jeremy-Components/Cards/picture-info-link-card.js';
import SimpleCircleLoader from './Jeremy-Components/Loader/simple-circle-loader.js';
import BasicNav from './Jeremy-Components/Nav/basic-nav.js';
import BasicImgTextRow from './Jeremy-Components/Row/basic-img-text-row.js';
import BasicFooter from './Jeremy-Components/Footer/basic-footer.js';
import BasicVideoRow from './Jeremy-Components/Row/basic-video-row.js';
import NumberedList from './Jeremy-Components/Lists/numbered-list.js';
import CheckList from './Jeremy-Components/Lists/check-list.js';
import ButtonShadow from './Jeremy-Components/Button/button-simple-shadow.js';
import FooterSchedule from './Jeremy-Components/Footer/col-footer-schedule.js';
import FooterContact from './Jeremy-Components/Footer/col-footer-contact.js';
import SimpleBlockList from './Jeremy-Components/Lists/ul-simple-block.js';
import TodoCategoryList from './Jeremy-Components/Lists/ul-todo-category.js';
import ShopItemSmall from './Jeremy-Components/Lists/li-ecommerce-small-tall.js';
import ShopItemTiny from './Jeremy-Components/Lists/li-ecommerce-tiny-tall.js';
import PageNotFound from './Jeremy-Components/404/page-not-found.js';
import GalleryMaterialize from './Jeremy-Components/Images/Gallery/gallery--materialize.js';

export default class App extends Component {
    
    constructor(props){
        super(props);
        
        this.state = {
            pages: [
                {
                    name: 'Home',
                    link: '#'
                },
                {
                    name: 'About Us',
                    link: '#'
                },
                {
                    name: 'Pictures',
                    link: '#'
                },
                {
                    name: 'Services',
                    link: '#'
                },
                {
                    name: 'Pricing',
                    link: '#'
                },
                {
                    name: 'Recipes',
                    link: '#'
                }
            ],
            services: [
                {
                    name: 'Acupuncture',
                    symbol: '../img/chinese-medicine.png',
                    img: '../img/acupuncture-2.jpg',
                    desc: 'Acupuncture is a form of alternative medicine in which thin needles are inserted into the body. It is a key component of traditional Chinese medicine (TCM). TCM theory and practice are not based upon scientific knowledge, and acupuncture is a pseudoscience. There is a diverse range of acupuncture theories based on different philosophies, and techniques vary depending on the country. The method used in TCM is likely the most widespread in the United States. It is most often used for pain relief, though it is also used for a wide range of other conditions. Acupuncture is generally used only in combination with other forms of treatment. Acupuncture is a form of alternative medicine in which thin needles are inserted into the body. It is a key component of traditional Chinese medicine (TCM). TCM theory and practice are not based upon scientific knowledge, and acupuncture is a pseudoscience. There is a diverse range of acupuncture theories based on different philosophies, and techniques vary depending on the country. The method used in TCM is likely the most widespread in the United States. It is most often used for pain relief, though it is also used for a wide range of other conditions. Acupuncture is generally used only in combination with other forms of treatment. Acupuncture is a form of alternative medicine in which thin needles are inserted into the body. It is a key component of traditional Chinese medicine (TCM). TCM theory and practice are not based upon scientific knowledge, and acupuncture is a pseudoscience. There is a diverse range of acupuncture theories based on different philosophies, and techniques vary depending on the country. The method used in TCM is likely the most widespread in the United States. It is most often used for pain relief, though it is also used for a wide range of other conditions. Acupuncture is generally used only in combination with other forms of treatment.',
                    benefits: [
                            {
                                name: 'Fertility',
                                info: 'The conclusions of many trials and numerous systematic reviews of acupuncture are largely inconsistent with each other. A 2011 systematic review of systematic reviews found that for reducing pain, real acupuncture was no better than sham acupuncture, and concluded that numerous reviews have shown little convincing evidence that acupuncture is an effective treatment for reducing pain. The same review found that neck pain was one of only four types of pain for which a positive effect was suggested, but cautioned that the primary studies used carried a considerable risk of bias. A 2009 overview of Cochrane reviews found acupuncture is not effective for a wide range of conditions.',
                                img: '../img/acupuncture-2.jpg'
                            },
                            {
                                name: 'Lower Back Pain',
                                info: 'A 2013 systematic review found that acupuncture may be effective for nonspecific lower back pain, but the authors noted there were limitations in the studies examined, such as heterogeneity in study characteristics and low methodological quality in many studies.[98] A 2012 systematic review found some supporting evidence that acupuncture was more effective than no treatment for chronic non-specific low back pain; the evidence was conflicting comparing the effectiveness over other treatment approaches. A 2011 systematic review of systematic reviews found that "for chronic low back pain, individualized acupuncture is not better in reducing symptoms than formula acupuncture or sham acupuncture with a toothpick that does not penetrate the skin.',
                                img: '../img/low-back-pain.jpg'
                            },
                            {
                                name: 'Headaches / Migrains',
                                info: 'Two separate 2016 Cochrane reviews found that acupuncture could be useful in the prophylaxis of tension-type headaches and episodic migraines. The 2016 Cochrane review evaluating acupuncture for episodic migraine prevention concluded that true acupuncture had a small effect beyond sham acupuncture and found moderate-quality evidence to suggest that acupuncture is at least similarly effective to prophylactic medications for this purpose. A 2012 review found that acupuncture has demonstrated benefit for the treatment of headaches, but that safety needed to be more fully documented in order to make any strong recommendations in support of its use.',
                                img: '../img/headache.jpg'
                            }   
                    ]
                },
                {
                    name: 'Moxabustion',
                    img: '../img/moxibustion.jpg',
                    desc: 'Moxabustion burns moxa to help heal.',
                    benefits: {
                        info: 'Moxabustion burns moxa to help heal.',
                        img: '../img/acupuncture.jpg'
                    }
                },
                {
                    name: 'Cupping',
                    img: '../img/cupping.jpg',
                    desc: 'Cupping helps to suck skin and relieve tension.',
                    benefits: {
                        info: 'Cupping helps to suck skin and relieve tension.',
                        img: '../img/acupuncture.jpg'
                    }
                },
                {
                    name: 'Jadeology',
                    img: '../img/jade-facial.jpg',
                    desc: 'Jade is magic rock, it heal you fast, real fast.',
                    benefits: {
                        info: 'Jade is magic rock, it heal you fast, real fast.',
                        img: '../img/acupuncture.jpg'
                    }
                },
                {
                    name: 'Chinese herbal Medicine',
                    img: '../img/chinese-herbs.jpg',
                    desc: 'China numba won.',
                    benefits: {
                        info: 'China numba won.',
                        img: '../img/acupuncture.jpg'
                    }
                },
                {
                    name: 'Nutritional Guidance',
                    img: '../img/meal2.jpg',
                    desc: 'Food vewy important.',
                    benefits: {
                        info: 'Food vewy important.',
                        img: '../img/acupuncture.jpg'
                    }
                },
            ],
            recipes: [
                {title: "Spicy Fried Chik'n"},
                {title: "Tacos"},
                {title: "Burgers"},
                {title: "Fried Rice"},
                {title: "Chik'n Tenders"},
            ],
            prices: [
                {
                   name: 'First Visit',
                   price: '$150.00',
                   frequency: 'One time',
                   features: ['Consultation', 'Diagnosis', 'Treatment'],
                   missed: [],
                   desc: 'Its the first one',
                   color: '#36A1CA'
                },
                {
                   name: 'Follow Up Visit',
                   price: '$80.00',
                   frequency: 'One time',
                   features: ['Consultation', 'Treatment'],
                   missed: ['Diagnosis'],
                   desc: 'Its a follow up',
                   color: '#36A1CA'
                },
                
            ],
            cardInfo: {
                header: "Fast Connection",
                text: "With Jeremyz-net you know you're always getting the fastest connecting, we follow the code of net neutrality and aim to provide the fastest connection, always !",
                size: "large",
                icon: "flash_on",
                color: "orange-text"
            },
            picCard: {
                img: "https://i.imgur.com/rETMF3V.jpg",
                header: "Why Google Does It All !",
                text: "Whenever you need help simply google it ! You can google anything from weather to news, to images, find websites, and much more !",
                link: "http://www.google.com",
                phrase: "Google It!",
                color: "red-text",
                hover: "red white-text"
            },
            simpleCircle: {
                color: 'green'
            },
            nav: {
                brand: "Xiaolin Tan",
                links: [
                  {link: "https://www.google.com/",
                  name: "Home"},
                  {link: "https://www.facebook.com/",
                  name: "Pictures"},
                  {link: "https://www.AOL.com/",
                  name: "Services"},
                  {link: "https://www.AOL.com/",
                  name: "Pricing"},
                  {link: "https://www.AOL.com/",
                  name: "Recipes"},
                  {link: "https://www.AOL.com/",
                  name: "Specialty"},
                  {link: "https://www.AOL.com/",
                  name: "About Us"},
                  {link: "https://www.AOL.com/",
                  name: "Playground"},
                ],
                color: "green lighten-1"
            },
            row1: {
                name: "Row 1",
                info: "INFOOF",
                img: "https://i.imgur.com/rETMF3V.jpg",
                color: "red lighten-1",
                textColor: "white-text",
                side: "left"
            },
            row2: {
                name: "Row 2",
                info: "INFOFFFFFFFFFFFOFAHCWBOICVWUGIOFGWOHSF",
                img: "https://i.imgur.com/rETMF3V.jpg",
                color: "green lighten-2",
                textColor: "white-text",
                side: "right"
            },
            footer: {
                aboutUsText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a pharetra orci, eu maximus nisi. Integer eu euismod urna. Curabitur non magna imperdiet, fringilla velit eu, elementum purus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer sollicitudin fermentum feugiat. Suspendisse sit amet purus vestibulum, pretium quam vitae, porttitor turpis.",
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
            },
            videoRow: {
                header: "Video",
                color: "green lighten-2",
                textColor: "white-text",
                link: "https://www.youtube.com/embed/qzQNiX1TNxs"
            },
            numbered: {
                header: "Steps",
                color: "green lighten-2",
                textColor: "white-text",
                list: [
                    "Cook rice by following instructions on the box",
                    "While the rice is cooking, saute the onions, garlic, and ginger in a pan with a little bit of sesame oil",
                    "After about 5 minutes of sauteing, throw in the veggies",
                    "Continuously stir saute pan until rice is done",
                    "Throw the rice in the saute pan and add soy sauce",
                    "Stir occasionally until rice absorbs all the soy sauce",
                    "Serve and enjoy ! "
                ]
            },
            btnShadowBlue: {
                color: "blue",
                size: "medium", 
                link: 'http://www.google.com/'

            },
            btnShadowRed: {
                color: "red",
                size: "large", 
                link: 'http://www.google.com/'

            },
            btnShadowGreen: {
                color: "green",
                size: "small", 
                link: 'http://www.google.com/'

            },
            footerSchedule: {
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
            },
            footerContact: {
                header: 'CONTACT',
                address: 'Miami FL, 8801 sw 80th Street',
                email: 'doctormarytan@yahoo.com',
                phone: '(305)555-5555',
                fax: '(786)555-5555',
                textColor: 'grey-text text-darken-3',
                underlineColor: 'green',
            },
            blockList: {
                color: 'white',
                hover: {
                    color: 'green darken-2',
                    textColor: 'white-text'
                },
                list: [
                    {
                        text: 'LifeStyle',
                        link: 'https://google.com/',
                    },
                    {
                        text: 'Music',
                        link: 'https://google.com/',
                    },
                    {
                        text: 'Travels',
                        link: 'https://google.com/',
                    },
                    {
                        text: 'Fashion',
                        link: 'https://google.com/',
                    }
                ]
            },
            todoList: {
                header: "Todo List",
                textColor: "grey-text text-darken-2",
                list: [
                    "Item 1",
                    "Item 2",
                    "Item 3",
                    "Item 4",
                    "Item 5"
                ],
                hover: {
                    color: 'red lighten-2',
                    textColor: 'white-text'
                },
                headerColor: "red lighten-2",
                headerText: "white-text",
                icon: "build",

            },
            shopItemSmall: {
    
                img: "https://i.imgur.com/GKmL7p5.jpg",
                sale: "$69",
                name: "SpaceX Car",
                original: "$119",
                btnText: "ADD TO CART",
                btnColor: "green",
                btnTextColor: "white-text"

            },
            shopItemTiny: {
                name: "SpaceX Car",
                price: "$69",
                descText: "The same car that's floating in space right now",
                img: "https://i.imgur.com/GKmL7p5.jpg",
                badgeText: "Sold out",
                badgeColor: "red",
                badgeTextColor: "white-text",
                btnText: "BUY NOW",
                btnColors: "blue white-text",
                descColor: "grey-text text-darken-1",
            },
            hash: ((location.hash) ? this.cleanURI() : ''),
            subHash: ((this.cleanSubHash()) ? this.cleanSubHash() : ''),
        };
    }
    cleanHash(){
        var decode = decodeURI(location.hash);
        var separated = decode.split('/');
        return separated[0].slice(1);
    }
    cleanSubHash(){
        var decode = decodeURI(location.hash);
        var separated = decode.split('/');
        var cSubhash = '';
        if(separated[1]){
            var cSubHash = separated[1].split('-').join(' ');
        }
        else{
            console.log("no subHash");
        }
        return cSubHash;
    }

    btnFunc(data){
        console.log(data);
        this.setState({
            hash: '#home'
        });
        console.log(
            'hash updated'
            );
    }

    loadJS(source) {
        var ref = window.document.getElementById('map');
        var script = window.document.createElement("script");
        script.src = source;
        script.async = true;
        ref.parentNode.insertBefore(script, ref);
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

    setPage(hash){

        console.log("=>"+hash);
        location.hash = this.state.hash;
        this.setState({
            hash: hash
        });
    }
    URIToObject(str){
        var obj = {};
        var temp = decodeURI(str).split('&');
        temp.map((data, key)=>{
            var split = data.split('=');
            obj[split[0]] = split[1];

            console.log(split);

        });
        console.log(obj);
        return obj;
    }

    objToURI(obj){

        var encodedURI = Object.keys(obj).map(function(key){ 
          return encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]); 
        }).join('&');

        console.log(encodedURI);
        return encodedURI;
    }

    cleanURI(){
        var decode = decodeURI(location.hash);
        var separated = decode.split('/');
        return separated[0].slice(1);
    }

    componentWillMount(){
        if(location.hash == ''){
            this.setPage('Home');
        }

        console.log('helloo');
    }

    componentDidMount(){
        //document.querySelector('.carousel').carousel();
        $('.carousel').carousel();

        var tempObj = {
            recipe: "Kelli's Wet Pussy",
            instructions: "Eat Pussy",
        }

        var temp = this.objToURI(tempObj);
        var temp2 = this.URIToObject(temp);
        console.log("URI");
        console.log(temp);
        console.log("Object");
        console.log(temp2);

        console.log(document.documentElement.clientWidth);

        window.initMap = this.initMap;
        this.loadJS('https://maps.googleapis.com/maps/api/js?key=AIzaSyBZKK32pK9aPx-1DG_V0R9eruvveyYT91E&callback=initMap');

    }
    componentWillUpdate(){

    }
    componentDidUpdate(){
        location.hash = this.state.hash; // address bar would become http://example.com/#category-name
        console.log(location.hash);

        window.initMap = this.initMap;
        this.loadJS('https://maps.googleapis.com/maps/api/js?key=AIzaSyBZKK32pK9aPx-1DG_V0R9eruvveyYT91E&callback=initMap');
    }

    
    addPrices(){
        this.state.prices.map((data, key)=>{
        return(
            <div className="col s3 offset-s1">
                <Pricing data={data} key={key} />
            </div>
        )
    });
    }


  render() {


        

        console.log(this.state);

        switch(this.state.hash){
            case "Home":
            console.log(this.state.hash);
                return(
                        <div>
                            <BasicNav data={this.state.nav} func={this.setPage.bind(this)} />
                                <Main services={this.state.services} />
                            <BasicFooter data={this.state.footer} />
                        </div>
                )
                break;
            case "Pictures":
            console.log(this.state.hash);
                return(
                        <div>
                            <BasicNav data={this.state.nav} func={this.setPage.bind(this)} />
                                <Main services={this.state.services} />
                            <BasicFooter data={this.state.footer} />
                        </div>
                )
                break;
            case "Services":
            console.log(this.state.hash);
                return(
                        <div>
                            <BasicNav data={this.state.nav} func={this.setPage.bind(this)} />
                                <Services data={this.state.services[0]} />
                            <BasicFooter data={this.state.footer} />
                        </div>
                )
                break;
            case "Pricing":
            console.log(this.state.hash);
                return(
                        <div>
                            <BasicNav data={this.state.nav} func={this.setPage.bind(this)} />
                                <Prices data={this.state.prices} prices={this.state.prices} />
                            <BasicFooter data={this.state.footer} />
                        </div>
                )
                break;
            case "Recipes":
                if(this.state.subHash.length < 1 || this.state.subHash == null){
                    return(
                        <div>
                            <BasicNav data={this.state.nav} func={this.setPage.bind(this)} />
                                <RecipeNav data={this.state.recipes} title="Fried Rice" />
                            <BasicFooter data={this.state.footer} />
                        </div>
                    )
                }
                else{
                    return(
                        <div>
                            <BasicNav data={this.state.nav} func={this.setPage.bind(this)} />
                                <RecipeNav data={this.state.recipes} title="Fried Rice" />
                            <BasicFooter data={this.state.footer} />
                        </div>
                    )   
                }
            console.log(this.state.hash);
                break;
            case "Specialty":
            console.log(this.state.hash);
                return(
                        <div>
                            <BasicNav data={this.state.nav} func={this.setPage.bind(this)} />
                                <Main services={this.state.services} />
                            <BasicFooter data={this.state.footer} />
                        </div>
                )
                break;
            case "About Us":
            console.log(this.state.hash);
                return(
                        <div>
                            <BasicNav data={this.state.nav} func={this.setPage.bind(this)} />
                                <AboutUs data={this.state.aboutUs} />
                            <BasicFooter data={this.state.footer} />
                        </div>
                )
                break;
            case "Playground":
            console.log(this.state.hash);
                return(
                        <div>
                            <BasicNav data={this.state.nav} func={this.setPage.bind(this)} />
                                <GalleryMaterialize />
                            <BasicFooter data={this.state.footer} />
                        </div>
                )
                break;
            

        }


    return (
        <div>
            
            <BasicNav data={this.state.nav} func={this.setPage.bind(this)} />

            <Recipe title="Fried Rice"/>

            <div className="row row-padding">
                <div className="col s3 l2 offset-s1 offset-l1 shadow" style={{padding: '0 3rem 3rem 3rem'}}>
                    <BasicInfoCard data={this.state.cardInfo} />
                </div>
                <div className="col s3 l2 offset-s1 offset-l1 shadow">
                    <PicInfoLinkCard data={this.state.picCard} />
                </div>
                <div className="col s3 offset-s1">
                    <SimpleCircleLoader data={this.state.simpleCircle} />
                </div>

            </div>

            <div className="row row-padding">
                <NumberedList data={this.state.numbered} />
                <CheckList data={this.state.numbered} />
            </div>

            <BasicImgTextRow data={this.state.row1} />
            <BasicImgTextRow data={this.state.row2} />
            <BasicVideoRow data={this.state.videoRow} />
            <div className="row row-padding">
                <ButtonShadow data={this.state.btnShadowRed} func={this.btnFunc.bind(this)} />
                <ButtonShadow data={this.state.btnShadowBlue} func={this.setPage.bind(this)} />
                <ButtonShadow data={this.state.btnShadowGreen} func={this.setPage.bind(this)} />
                <div className="col s3">
                    <FooterSchedule data={this.state.footerSchedule} />
                </div>
                <div className="col s3">
                    <FooterContact data={this.state.footerContact} />
                </div>
                <div className="col s2">
                    <SimpleBlockList data={this.state.blockList} />
                </div>
                <div className="col s3">
                    <TodoCategoryList data={this.state.todoList} />
                </div>
                <div className="col s3">
                    <ShopItemSmall data={this.state.shopItemSmall} func={this.setPage.bind(this)}/>
                </div>
                <div className="col s2">
                    <ShopItemTiny data={this.state.shopItemTiny} func={this.setPage.bind(this)} />
                </div>
            </div>
            <BasicFooter data={this.state.footer} />
            
        </div>
      
    );
  }
}
