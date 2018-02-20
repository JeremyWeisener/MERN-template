import React, { Component } from 'react';

/*

props.data = {
      header: "Video",
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
      ],
      list2: [
        "1Cup of uncooked Rice",
        "1/2Cup of Carrots",
        "1/4Cup of Peas",
        "3 8oz pieces of Firm Tofu",
        "1Wet Pussy"
        ]
}



*/




export default class CheckList extends Component {

  constructor(props){
        super(props);
        
        this.state = {

          boxState: false,

          listNumberStyle : {
            fontWeight: '800',
            display: 'inline-block',
            verticalAlign: 'middle',
            height: '5rem'
          },

          liStyle : {
            display: 'block',
            padding: '0.87rem 0 0.87rem 5rem',
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            color: 'black',
            fontWeight: '600',
            fontSize: '18px'
          },

          spanStyle : {
            whiteSpace: 'normal',
            display: 'inline-block',
            paddingRight: '3rem'
          },

          listHeader : {
            marginBottom: '0',
            textAlign: 'center'
          },

          listStyle : {
            marginTop: '0'
          },

          checkBox : {
            display: 'inline-block',
            paddingBottom: '0',
            marginLeft: '-3rem',
            marginRight: '3rem',
          }
        }
      }

      changeBox(e){

          var flag = "check_box";

          if(e.target.innerHTML == 'check_box'){
              flag = 'check_box_outline_blank';
            }
          else if(e.target.innerHTML == 'check_box_outline_blank'){
              flag = 'check_box';
            }

            e.target.innerHTML = flag;
        }



      genList(){
        return this.props.data.list.map((data, key)=>{
                  return(<li key={key} style={this.state.liStyle} className={`${this.props.data.textColor}`}>
                            <i className="check-box small material-icons" style={this.state.checkBox} onClick={(e)=>{this.changeBox(e)}}> check_box_outline_blank </i>
                            <span style={this.state.spanStyle}>{data}</span>
                         </li>);
                });
      }

      /*
      componentDidMount(){
        const boxes = document.querySelectorAll(".check-box");

        for(var i = 0; i<boxes.length;i++){
          boxes[i].addEventListener('click', (e)=>{
            console.log(e);
            if(e.innerHTML = 'check_box_outline_blank'){
              e.innerHTML = "check_box";
              console.log(e)
            }
            else{
              e.innerHTML = "check_box_outline_blank"
              this.setState({});
            }
          });
        }

        console.log(boxes);

      }

      */

    render(){
        return(
                <div className={`col s4 push-s2 ${this.props.data.color} ${this.props.data.textColor} `}>
                    <h3 style={this.state.listHeader} >{this.props.data.header}</h3>
                    <ul style={this.state.listStyle}>
                        {this.genList()}
                    </ul>
                </div>
        )
    }
}