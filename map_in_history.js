import React, { Component } from 'react';
import { View, Text } from 'react-native';
import React, { Component } from 'react';
import { View, Text , Image } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { connect } from 'react-redux';
// import {set_the_region } from '../redux/actions';

class map_in_history extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {

    var lat = 37.78825
    var long = -122.4324
    



    return (

      <View style ={{ alignItems : 'center' , alignItems : 'center' }}>

        <MapView
      
            style={{ position: 'absolute',
            height : '100%'}}
            // provider={PROVIDER_GOOGLE}
            customMapStyle={this.props.map_custom_style}
            initialRegion={{
            latitude: lat,
            longitude: long,
            latitudeDelta: 0.001,
            longitudeDelta: 0.001,
            }}
            
            >


          {/* {markers_in_history_of_this_item.map(marker => {
            // console.log('marker + in app  = ' + marker[0])
          return (
          <Marker {...marker} >
            <View style ={{justifyContent :'center' , alignItems :'center' ,
          borderColor : text_and_border_color ,
          borderWidth : 2 ,
          borderRadius : 10 ,
          padding : 4 ,
          backgroundColor : 'black'}} >
            <Image source={require('./images/Done.png')} style={{height : 30 , width : 30}} resizeMode ='contain' ></Image>
          <Text style ={{color : text_and_border_color}}>{text}</Text>
            </View>
      

          </Marker>

          )
          }
          )} */}
          {this.props.markers_in_history.map(marker => {
            // console.log('marker + in app  = ' + marker[0])
          return (
          <Marker {...marker} >
            <View style ={{justifyContent :'center' , alignItems :'center' }} >
            <Image source={require('../images/Done.png')} style={{height : 30 , width : 30}} resizeMode ='contain' ></Image>
            <Text style ={{color : 'green'}}>تمام شده</Text>
            </View>
      

          </Marker>

          )
          }
          )}

          </MapView>

          <View style ={{position : 'absolute' ,
           height : '100%' ,
           width :'100%' , backgroundColor : 'red'}} >

             <View style ={{position : 'absolute' ,
           height : 80 ,
           width :90 , backgroundColor : 'red'}}></View>
           </View>
          </View>
    );
  }
}
function mapStatetoProps(state){
  
    console.log(state.Markers_in_History);
  
    try{
      return{
        map_custom_style : state.color.map_custom_style,
  
        markers_in_history : state.Markers_in_History.markers_in_history,
  

        header_anim_in_header_class : 'lightSpeedIn',


        status_bar_color : state.color.status_bar_color ,
        barStyle_in_status_bar_color:state.color.barStyle_in_status_bar_color ,
        header_color : state.color.header_color,

        
      }
    }catch{
      return{
        region : state.state
      }
    }
  }
  
export default connect(mapStatetoProps , {}) (map_in_history);
  