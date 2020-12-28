import React, { Component } from 'react';
import {Text , Image } from 'react-native';
import {Button } from 'native-base';
import { connect } from 'react-redux';
import {internet_is_not_access , internet_is_access} from '../redux/actions';
import * as Animatable from 'react-native-animatable';

class Connection_lost_view extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <Animatable.View animation={this.props.internet_not_access_view_anim} 
        style={{height:'30%' , width:'80%' , backgroundColor:this.props.connection_lost_popup_background_color , 
        borderWidth:2,
        borderRadius:10 ,
        borderColor:this.propsconnection_lost_popup_border_color}}
        duration={500}
        >
          <Image
          source={require('../images/connection_lost.png')}
          resizeMode='contain'
          style={{width:'100%' , height:'80%' }}> 
          </Image>
          <Button
          onPress={()=>{
            this.props.internet_is_access(false )
            setTimeout(() => {
              this.props.internet_is_access(true )
            }, 500);
          }}
          style={{width:'100%' , height:'20%' ,
          borderBottomRightRadius:7,
          borderBottomLeftRadius:7,
          borderWidth:2 ,
          backgroundColor:this.props.connection_lost_button_in_popup_background_color,
          borderColor : this.props.connection_lost_button_in_popup_background_color,
           justifyContent:'center' , 
           alignItems:'center'}}>
            <Text style={{fontWeight:'bold' , fontSize:20 , color:this.props.connection_lost_text_button_in_popup_color}}>به اینترنت دسترسی ندارید</Text>
          </Button>
        </Animatable.View>
    );
  }
}

function mapStateToProps (state){   
  try{
    
      
    return{
      internet_not_access : state.internet.internet_not_access,
      internet_not_access_view_anim : state.internet.internet_not_access_view_anim ,
      set_location_disable : state.internet.set_location_disable,


      popup_background_color : state.color.popup_background_color,
      popup_border_color : state.color.popup_border_color,
      connection_lost_popup_background_color : state.color.connection_lost_popup_background_color,
      connection_lost_popup_border_color : state.color.connection_lost_popup_border_color ,
      connection_lost_button_in_popup_background_color :state.color.connection_lost_button_in_popup_background_color,
      connection_lost_text_button_in_popup_color : state.color.connection_lost_text_button_in_popup_color,


      
    }
  }catch(e){
    console.log('we have an error because = ' + e);
  }
}

export default connect(mapStateToProps , {internet_is_access , internet_is_not_access} ) (Connection_lost_view);
