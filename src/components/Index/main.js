import React, { Component } from 'react';
import Service from './service.js';
import GoogleMapReact from 'google-map-react';
import Marker from '../Components/googleMapReact-marker.js';
import Nav from "../Nav/basic-nav.js";
import Footer from "../Footer/basic-footer.js";
import mongodb, {MongoClient} from 'mongodb';
var express = require('express');
var app = express();


export default class Main extends Component {
    constructor(props){
        super(props);

        this.state={
            services: [
                {
                    name: 'Acupuncture',
                    symbol: './img/chinese-medicine.png',
                    img: './img/acupuncture-2.jpg',
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
                                img: '../../img/low-back-pain.jpg'
                            },
                            {
                                name: 'Headaches / Migrains',
                                info: 'Two separate 2016 Cochrane reviews found that acupuncture could be useful in the prophylaxis of tension-type headaches and episodic migraines. The 2016 Cochrane review evaluating acupuncture for episodic migraine prevention concluded that true acupuncture had a small effect beyond sham acupuncture and found moderate-quality evidence to suggest that acupuncture is at least similarly effective to prophylactic medications for this purpose. A 2012 review found that acupuncture has demonstrated benefit for the treatment of headaches, but that safety needed to be more fully documented in order to make any strong recommendations in support of its use.',
                                img: '../../img/headache.jpg'
                            }   
                    ]
                },
                {
                    name: 'Moxabustion',
                    img: '../../img/moxibustion.jpg',
                    desc: 'Moxabustion burns moxa to help heal.',
                    benefits: {
                        info: 'Moxabustion burns moxa to help heal.',
                        img: '../../img/acupuncture.jpg'
                    }
                },
                {
                    name: 'Cupping',
                    img: '../../img/cupping.jpg',
                    desc: 'Cupping helps to suck skin and relieve tension.',
                    benefits: {
                        info: 'Cupping helps to suck skin and relieve tension.',
                        img: '../../img/acupuncture.jpg'
                    }
                },
                {
                    name: 'Jadeology',
                    img: '../../img/jade-facial.jpg',
                    desc: 'Jade is magic rock, it heal you fast, real fast.',
                    benefits: {
                        info: 'Jade is magic rock, it heal you fast, real fast.',
                        img: '../../img/acupuncture.jpg'
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
                }
            ]
        }
    }

    
    connect(){

        var MongoClient = mongodb.MongoClient;
        var url = 'mongodb://localhost:27017/samplesite';

        MongoClient.connect(url, function(err, db){
            if(err){
                console.log('Unable to connect to the server', err);

            } else {
                console.log("Connection Established");
                
                var collection = db.collection('student');

                collection.find({}).toArray(function(err, results){
                    if(err){
                        app.send(err);
                    } else if (results.length){
                        app.render('studentlist', {
                            "studentlist": results
                    }); } else {
                        app.send('No documents found');
                    }
                    db.close();
                });
            }
        });

    }

    services(){
        return(
            this.state.services.map((data, key) => {
                return (<Service data={data} key={key}/>);
            })
            )
    }
    
    componentDidMount(){
        this.connect();
    }

    render(){
	return(

        <div>

            <Nav />


    		<main id="main">
                <div className="parallax koi-fish">
                </div>
    			<div className="main__row container row row-padding">
                <div className="col s12">
                    <div className="row">

                    <div className="main__medal"> <img src="./img/chinese-medicine.png" alt="" /> </div>
                    <hr />

                    <h1 className="main__h1" > Doctor Mary Tan</h1>
                    <h4 className="main__h4" > Traditional Chinese Medicine </h4>
                    <h4 className="main__h4" > Licensed Acupuncture Physician </h4>
                    </div>
                    <div className="row">
                        <div className="col s5">
                            <p className="main__p">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a pharetra orci, eu maximus nisi. Integer eu euismod urna. Curabitur non magna imperdiet, fringilla velit eu, elementum purus. Orci varius 
                                natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer sollicitudin fermentum feugiat. Suspendisse sit amet purus vestibulum, pretium quam vitae, porttitor turpis. Nunc maximus sapien 
                                ultrices, facilisis elit vel, pellentesque dui. Nulla ullamcorper augue quis metus blandit, non molestie quam tristique. Donec ullamcorper quis massa quis mollis.
                            </p>
                            <p className="main__p">
                                Morbi hendrerit libero pretium lorem tincidunt pellentesque. Donec scelerisque arcu in velit ultrices, eu ultrices ligula consectetur. Vestibulum semper nisl magna, a finibus lorem tincidunt et. Curabitur 
                                imperdiet lacus non pellentesque aliquam. Vestibulum maximus tristique velit. Phasellus vitae eleifend risus, ac auctor sem. Aenean varius eget justo vestibulum fringilla. 
                            </p>
                        </div>
                        <div className="col s6 offset-s1">
                            <div className="row">
                                <div id="map2" className="col s12" style={{height:"500px"}}>
                                    <script src="../Components/_gmaps.js"></script>
                                    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBZKK32pK9aPx-1DG_V0R9eruvveyYT91E&callback=initMap"></script>

                                    <GoogleMapReact
                                        bootstrapURLKeys={{ key: "AIzaSyBZKK32pK9aPx-1DG_V0R9eruvveyYT91E" }}
                                        defaultCenter={{lat: 25.696627, lng: -80.300206}}
                                        defaultZoom={16}
                                      >
                                        <Marker 
                                            lat={25.696627}
                                            lng={-80.300206}
                                            />
                                        
                                    </GoogleMapReact>


                                </div>
                            </div>
                            <div className="row">
                                <h5><i className="small material-icons dp48">location_on</i> 6601 S.W 80th Street, Suite 113</h5>
                                <h5 className="indent"><span className="indent"></span>South Miami, Florida 33143</h5>
                                <h5><i className="small material-icons dp48">local_phone</i>305-665-5056</h5>
                                <h5><i className="small material-icons dp48">print</i>305-665-5056</h5>
                                <h5><i className="small material-icons dp48">email</i>drmarytan@yahoo.com</h5>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                
                <div id="services" className="row row-padding shadow">
                    <h2 className="main__services__h2"> Services </h2>

                    <div className="container">
                        {this.services()}
                    </div>
                </div>
                
                <div className="container row row-padding">

                    <div className="col s5 offset-s1">
                        <img className="responsive-img shadow" src="../img/chinese-herbs.jpg" alt="" />
                    </div>

                    <div className="col s5 offset-s1">
                        <p className="main__p">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a pharetra orci, eu maximus nisi. Integer eu euismod urna. Curabitur non magna imperdiet, fringilla velit eu, elementum purus. Orci varius 
                            natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer sollicitudin fermentum feugiat. Suspendisse sit amet purus vestibulum, pretium quam vitae, porttitor turpis.
                        </p>
                    </div>
                </div>

                <div id="services" className="row row-padding shadow">
                    <div className="container">
                        <h2 className="main__specialty__h2"> Specialty </h2>

                        <div className="col s4 offset-s1">
                        
                            <p className="main__specialty_p">
                                Morbi hendrerit libero pretium lorem tincidunt pellentesque. Donec scelerisque arcu in velit ultrices, eu ultrices ligula consectetur. Vestibulum semper nisl magna, a finibus lorem tincidunt et. Curabitur 
                                imperdiet lacus non pellentesque aliquam. Vestibulum maximus tristique velit. Phasellus vitae eleifend risus, ac auctor sem. Aenean varius eget justo vestibulum fringilla. Curabitur 
                                imperdiet lacus non pellentesque aliquam. Vestibulum maximus tristique velit. Phasellus vitae eleifend risus, ac auctor sem. Aenean varius eget justo vestibulum fringilla. 
                            </p>
                        </div>

                        <div className="col s6 offset-s1">
                            <img className="responsive-img shadow" src="../img/pregnancy.jpg" alt="" />
                        </div>
                    </div>
                </div>
                
                <div className="container row row-padding">

                    <div className="col s5 offset-s1">
                        <img className="responsive-img shadow" src="../img/veggies-2.jpg" alt="" />
                    </div>

                    <div className="col s5 offset-s1">
                        <p className="main__p">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a pharetra orci, eu maximus nisi. Integer eu euismod urna. Curabitur non magna imperdiet, fringilla velit eu, elementum purus. Orci varius 
                            natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer sollicitudin fermentum feugiat. Suspendisse sit amet purus vestibulum, pretium quam vitae, porttitor turpis.
                        </p>
                    </div>

                </div>

    		</main>


            <Footer />
        </div>
	)}
}