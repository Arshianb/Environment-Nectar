import React, { Component } from 'react';
import { View, Text , Image} from 'react-native';
import { connect } from 'react-redux';
import * as Animatable from 'react-native-animatable';
import { ScrollView } from 'react-native-gesture-handler';
import { Button, Icon } from 'native-base';
import Map from '../my_garbage/Map';
import {open_google_map_action , close_google_map_action , my_garbage_map_is_close_action } from '../redux/actions';

class Items extends Component {
  constructor(props) {
    super(props);
    this.state = {
        google_map_open : false ,
        width : '100%' ,
        height : null,
        height1 : null,
        button_text : 'نشان دادن در نقشه'
    };
  }
  

  render() {
    var garbage1_image = require('../images/plastic.png')
    var garbage2_image = require('../images/pack_garbages.png')
    var garbage3_image = require('../images/iron.png')
    var garbage4_image = require('../images/paper.png')
    var garbage5_image = require('../images/fruit.png')
    var garbage6_image = require('../images/bread.png')
    var garbage7_image = require('../images/plastic.png')
    var garbage8_image = require('../images/plastic.png')
    var garbage9_image = require('../images/plastic.png')
    var garbage10_image = require('../images/plastic.png')
    var garbage11_image = require('../images/plastic.png')
    var garbage12_image = require('../images/plastic.png')

    
    let each_item_garbagse = []
        
    if (this.props.garbage1_title) {
        let Array = []
        Array.push(this.props.garbage1_title)
        Array.push(garbage1_image)
        each_item_garbagse.push(Array)
    }
    if (this.props.garbage2_title) {
        let Array = []
        Array.push(this.props.garbage2_title)
        Array.push(garbage2_image)
        each_item_garbagse.push(Array)
    }
    if (this.props.garbage3_title) {
        let Array = []
        Array.push(this.props.garbage3_title)
        Array.push(garbage3_image)
        each_item_garbagse.push(Array)
    }
    if (this.props.garbage4_title) {
        let Array = []
        Array.push(this.props.garbage4_title)
        Array.push(garbage4_image)
        each_item_garbagse.push(Array)
    }
    if (this.props.garbage5_title) {
        let Array = []
        Array.push(this.props.garbage5_title)
        Array.push(garbage5_image)
        each_item_garbagse.push(Array)
    }
    if (this.props.garbage6_title) {
        let Array = []
        Array.push(this.props.garbage6_title)
        Array.push(garbage6_image)
        each_item_garbagse.push(Array)
    }
    if (this.props.garbage7_title) {
        let Array = []
        Array.push(this.props.garbage7_title)
        Array.push(garbage7_image)
        each_item_garbagse.push(Array)
    }
    if (this.props.garbage8_title) {
        let Array = []
        Array.push(this.props.garbage8_title)
        Array.push(garbage8_image)
        each_item_garbagse.push(Array)
    }
    if (this.props.garbage9_title) {
        let Array = []
        Array.push(this.props.garbage9_title)
        Array.push(garbage9_image)
        each_item_garbagse.push(Array)
    }
    if (this.props.garbage10_title) {
        let Array = []
        Array.push(this.props.garbage10_title)
        Array.push(garbage10_image)
        each_item_garbagse.push(Array)
    }
    if (this.props.garbage11_title) {
        let Array = []
        Array.push(this.props.garbage11_title)
        Array.push(garbage11_image)
        each_item_garbagse.push(Array)
    }
    if (this.props.garbage12_title) {
        let Array = []
        Array.push(this.props.garbage12_title)
        Array.push(garbage12_image)
        each_item_garbagse.push(Array)
    }

    if (this.props.how_is_this == 'کامل شده'){
        var how_is_this = 'کامل شده'
        var how_is_this_color = '#2ecc71'
        var image = require('../images/Done.png')
    }

    if (this.props.how_is_this == 'در حال پردازش'){
        var how_is_this = 'در حال پردازش'
        var how_is_this_color = 'yellow'
        var image = require('../images/wating.png')
    }
    
    var parts = []
    var lat = this.props.lat
    var long = this.props.long
    var j = 0
    var l = 0

    while (j <= each_item_garbagse.length) {
        var parts0 = []
        if (each_item_garbagse.length - j == 0 ) {
            var h = 1
        }else if (each_item_garbagse.length - j <0) {
            break ;
        }
        else {
            var h = 2
        }
        for (var i = 1; i <= h; i += 1) {
            
            try {
            parts0[i] =
                <View style = {{justifyContent :'center' , alignItems:'center' 
                
                }}>
                    <View 
                    style={{
                    
                    marginLeft: 10,
                    marginRight: 10,
                    marginTop: 10,
                    borderColor : this.props.items_border_color,
                    borderWidth : 2 ,
                    justifyContent : 'center' , alignItems : 'center',
                    width : 90,
                    height : 90 ,
                    borderRadius: 90/2,
                
                }}>
        
                    <Image source = {each_item_garbagse[j][1]} resizeMode = 'contain' style={{height : 70 ,width : 70 }}></Image>      
                </View>
                    <Text style={{ fontWeight : 'bold' , fontSize : 15 , margin : 4 , color : this.props.items_border_color}}>{each_item_garbagse[j][0]}</Text>
                </View>;
                j = j + 1
            }catch (e){
                j = j + 1
            }
        }
        parts [l] = 
            <View style = {{ justifyContent : 'center' , flexDirection : 'column' }}>
                {parts0}
            </View>;

        l = l + 1


    }



    return (
      <Animatable.View
      animation = 'bounceIn'
      style={{
          marginTop : 10,
          backgroundColor : this.props.whole_app_view_background_color,
          justifyContent : 'flex-end' , alignItems : 'center',
          borderRadius : 10 , borderWidth : 1 ,
          borderColor : this.props.items_border_color,
          width : '90%' ,
          marginLeft :'5%' , marginRight :'5%' ,
          height : this.state.height1
      }}> 
          {this.state.google_map_open ? (null) : (
              <ScrollView horizontal style ={{ padding :5 , borderRadius : 10}} >
              {parts}
            </ScrollView>
          ) }
      <View style={{alignItems :'center' , justifyContent:'space-between' , flexDirection :'row-reverse' , width :'100%'}}>
        
   <View style = {{
        // backgroundColor :'red' , 
        height :'100%' , 
        margin : 5 , 
        marginBottom : 10 , 
        // justifyContent :'center',
        alignItems :'center' ,
        flexDirection :'column-reverse'}}>
            <Text style ={{color :this.props.regular_text_color , fontSize : 12 , fontWeight :'bold'}}>Thuseday : 1379/7/21</Text>

            <Button 
            onPress ={()=> {

                this.props.replace('show map in history')
                
            }}
            style={{height :40 , 
            justifyContent :'center' , 
            alignItems :'center',
            borderColor : this.props.items_border_color,
            borderRadius : 10 ,
            backgroundColor : this.props.whole_app_view_background_color ,
            padding :10
        }}>
                <Text style ={{
                    color :this.props.items_border_color , 
                    // marginRight :5 ,
                    // marginLeft :5,
                    fontWeight :'bold' , 
                    fontSize : 15 , }}>{this.state.button_text}</Text>
            </Button>
        </View>
        {this.state.google_map_open? (null) : (
            <Text style = {{
                // height : 0
                paddingBottom : 2,
                paddingTop : 5 ,
                color :how_is_this_color ,
                fontWeight :'bold' , 
                fontSize : 18 , 
                borderRadius: 10 ,
                backgroundColor : 'black',
                paddingRight: 15 ,
                paddingLeft: 12 ,
                margin : 10 ,
                borderWidth :2 ,
                borderColor :how_is_this_color
                }}>{how_is_this}</Text>
    
        )}
    </View>
    
   
      
      </Animatable.View>
    );
  }
}
function MapStateToProps (state) {
    
    
    return {
      whole_app_view_background_color : state.color.whole_app_view_background_color,
      whole_app_background_color : state.color.whole_app_background_color, 
      regular_text_color : state.color.regular_text_color ,
      items_border_color : state.color.items_border_color,

      google_map_is_open : state.close_google_map.google_map_is_open,
      close_google_map : state.close_map.close_google_map
      
    }
}
export default connect (MapStateToProps , {open_google_map_action , close_google_map_action , 
 my_garbage_map_is_close_action}) (Items);
