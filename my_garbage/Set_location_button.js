import React, { Component } from 'react';
import { View, Text , Image } from 'react-native';
import { connect } from 'react-redux';
import { Button} from 'native-base';
import * as Animatable from 'react-native-animatable';
import {internet_is_not_access , internet_is_access , set_marker_action , get_marker_action} from '../redux/actions';
class Set_location_button extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    
    var user_phone_number = '۰۹۳۰۴۳۸۷۳۴۲'
    var garbage1 = "پلاستیک"
    var garbage2 = "بسته بندی"
    var garbage3 = "آهن"
    var garbage4 = "کاغذ"
    var garbage5 = "میوه"
    var garbage6 = "نان خشک"
    var garbage7 = "اشغال ۷"
    var garbage8 = "اشغال ۸"
    var garbage9 = "اشغال ۹"
    var garbage10 = "اشغال ۱۰"
    var garbage11 = "اشغال ۱۱"
    var garbage12 = "اشغال ۱۲"
    return (
        <Animatable.View
        style={{
          height: 100, width: 100,
          marginRight: 5,
          borderColor: this.props.button_border_in_my_garbage_class_color, borderWidth: 2, borderRadius: 10,
          marginBottom: 10, 
          backgroundColor: this.props.button_background_in_my_garbage_class_color ,
          justifyContent: 'center',
          alignItems: 'center'
        }}
        animation={this.props.select_my_garbage_location_anim}
        duration={500}>
        <Button
        disabled={this.props.set_location_disable} transparent style={{
          height: '80%',
          width: '100%',
          marginBottom: 0,
          justifyContent: 'center',
          alignItems: 'center', flexDirection: 'column'
        }}
        
          onPress={() => {
            
              if (this.props.set_marker_again){
                
                var xhr = new XMLHttpRequest();
                var url = "https://flatuicolors.com/";
                xhr.open("POST", url, true);
                xhr.setRequestHeader("Content-Type", "application/json");
                var text = '{ "user_set_the_location" : [' +
                '{"phone_number" : "'+ user_phone_number +'"} , '+
                    '{ "lat":"'+ this.props.region['latitude']+ '" , "long":"'+ this.props.region['longitude'] +'" },' +
                    '{ "'+ garbage1 +'":"'+this.props.garbage1_kind_clicked+'" , "'+ garbage2 +'":"'+this.props.garbage2_kind_clicked+'" , "'+ garbage3 +'":"'+this.props.garbage3_kind_clicked+'" , "'+ garbage4 +'":"'+this.props.garbage4_kind_clicked+'" , "'+ garbage5 +'":"'+this.props.garbage5_kind_clicked+'" , "'+ garbage6 +'":"'+this.props.garbage6_kind_clicked+'" , "'+ garbage7 +'":"'+this.props.garbage7_kind_clicked+'" , "'+ garbage8 +'":"'+this.props.garbage8_kind_clicked+'" , "'+ garbage9 +'":"'+this.props.garbage9_kind_clicked+'" , "'+ garbage10 +'":"'+this.props.garbage10_kind_clicked+'" , "'+ garbage11 +'":"'+this.props.garbage11_kind_clicked+'" , "'+ garbage12 +'":"'+this.props.garbage12_kind_clicked+'" }  ]}'
                var obj = JSON.parse(text);
                var data = JSON.stringify(obj);
                
                
                if (xhr.onreadystatechange =! 'null') {
                  if (xhr.readyState == 4 ) {

                    var json = JSON.parse(xhr.responseText);
                    console.log(json.email + ", " + json.password);
                    
                      
                  }else{
                    
                    this.props.internet_is_not_access()
                  }
                }else{
                  this.props.internet_is_not_access()
                  
                }
                setTimeout(() => {
                  if(!this.props.internet_not_access)
                    try {
                      this.props.set_marker_action(this.props.region['latitude'] , this.props.region['longitude'],)
                      xhr.send(data);
                      
                    }
                    catch (error){
                      this.props.internet_is_not_access()
                    }
                }, 200);
                



              }else {
               
                var xhr = new XMLHttpRequest();
                var url = "https://flatuicolors.com/";
                xhr.open("POST", url, true);
                xhr.setRequestHeader("Content-Type", "application/json");
                var text = '{ "user_set_the_location" : [' +
                '{"phone_number" : "'+ user_phone_number +'"} , '+
                    '{ "lat":"'+ null+ '" , "long":"'+ null+'" },' +
                    '{ "'+ garbage1 +'":"'+this.props.garbage1_kind_clicked+'" , "'+ garbage2 +'":"'+this.props.garbage2_kind_clicked+'" , "'+ garbage3 +'":"'+this.props.garbage3_kind_clicked+'" , "'+ garbage4 +'":"'+this.props.garbage4_kind_clicked+'" , "'+ garbage5 +'":"'+this.props.garbage5_kind_clicked+'" , "'+ garbage6 +'":"'+this.props.garbage6_kind_clicked+'" , "'+ garbage7 +'":"'+this.props.garbage7_kind_clicked+'" , "'+ garbage8 +'":"'+this.props.garbage8_kind_clicked+'" , "'+ garbage9 +'":"'+this.props.garbage9_kind_clicked+'" , "'+ garbage10 +'":"'+this.props.garbage10_kind_clicked+'" , "'+ garbage11 +'":"'+this.props.garbage11_kind_clicked+'" , "'+ garbage12 +'":"'+this.props.garbage12_kind_clicked+'" }  ]}'
                var obj = JSON.parse(text);
                var data = JSON.stringify(obj);
                console.log(xhr.onreadystatechange );
                
                
                if (xhr.onreadystatechange =! 'null') {
                  if (xhr.readyState == 4 ) {

                    var json = JSON.parse(xhr.responseText);
                    console.log(json.email + ", " + json.password);
                    
                      
                  }else{
                    
                    this.props.internet_is_not_access()
                  }
                }else{
                  this.props.internet_is_not_access()
                  
                }
                setTimeout(() => {
                if(!this.props.internet_not_access)
                  try {
                    this.props.get_marker_action(this.props.region['latitude'] , this.props.region['longitude'],)
                    xhr.send(data);
                    
                  }
                  catch (error){
                    this.props.internet_is_not_access()
                  }
                }, 200);
              }
            

            }
          }
        >
          <Image source={this.props.get_location_image} style={{ height: '100%', width: '100%' }} resizeMode='contain'></Image>

          <Text style={{ color: this.props.set_location_text_color, fontSize: 10, fontWeight: 'bold', marginTop: 5 }}>
            {this.props.set_location_text}
          </Text>
        </Button>
      </Animatable.View>
    );
  }
}

function MapStatetoProps (state) {
  try{
    
      
    return{
      region : state.state.set_region,
      internet_not_access : state.internet.internet_not_access,
      internet_not_access_view_anim : state.internet.internet_not_access_view_anim ,
      set_location_disable : state.internet.set_location_disable,


      set_marker_again: state.marker.set_marker_again,
      set_location_text: state.marker.set_location_text ,
      set_location_text_color: state.marker.set_location_text_color,
      locationheight: state.marker.locationheight,
      get_location_image: state.marker.get_location_image,
      markers: state.marker.markers,






      button_background_in_my_garbage_class_color: state.color.button_background_in_my_garbage_class_color,
      button_border_in_my_garbage_class_color: state.color.button_border_in_my_garbage_class_color,
      text_on_button_in_my_garbage_class_color : state.color.text_on_button_in_my_garbage_class_color,


      
    }
  }catch(e){
    console.log('we have a error because = ' + e)
  }
}

export default connect(MapStatetoProps , {internet_is_access , 
  internet_is_not_access , 
  set_marker_action , 
  get_marker_action }) (Set_location_button);