import React, { Component } from 'react';
import { View, Text , Image } from 'react-native';
import MapView, { Marker , PROVIDER_GOOGLE } from 'react-native-maps';
import { connect } from 'react-redux';
import {set_the_region} from '../redux/actions';
class Map extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    var lat = 37.78825
    var long = -122.4324
    

    var text = 'لطفا منتظر شوید ...'
    
    var text_and_border_color = this.props.regular_text_color
    var backgroundColor = this.props.whole_app_background_color

    
    

    
    return (


      <MapView
      
        style={{ position: 'absolute',
         height: '100%', width: '100%' }}
        provider={PROVIDER_GOOGLE}
        customMapStyle={this.props.map_custom_style}
        initialRegion={{
        latitude: lat,
        longitude: long,
        latitudeDelta: 0.001,
        longitudeDelta: 0.001,
          }}
          
          onRegionChangeComplete={(region) => {
            
            this.props.set_the_region(region)
         
          }}
          
          >


            
          {this.props.markers.map(marker => {
            // console.log('marker + in app  = ' + marker[0])
          return (
          <Marker {...marker} >

          <View style={{
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: backgroundColor,
            borderRadius: 10,
            padding: 5,
            borderColor: text_and_border_color,
            borderWidth: 2
          }}>
          <Text style={{ color: text_and_border_color, fontWeight: 'bold', fontSize: 12 }}>{text}</Text>
          <Text style={{ color: 'red', fontWeight: '500', fontSize: 10 }}>
            اگر پشیمان شدید روی 'منصرف شدم' کلیک کنید
          </Text>
            
          </View>
          </Marker>
          )
          }
          )}
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
    );

    
  }
}

function mapStatetoProps(state){
  
  console.log(state.Markers_in_History);
  
  try{
    return{
      region : state.state.set_region,
      markers : state.marker.markers ,
      map_custom_style : state.color.map_custom_style,
      whole_app_view_background_color : state.color.whole_app_view_background_color,
      whole_app_background_color : state.color.whole_app_background_color,
      popup_border_color : state.color.popup_border_color ,
      regular_text_color : state.color.regular_text_color,

      markers_in_history : state.Markers_in_History.markers_in_history,
      google_map_is_open : state.close_google_map.google_map_is_open,

      
    }
  }catch{
    return{
      region : state.state
    }
  }
}

export default connect(mapStatetoProps , {set_the_region}) (Map);
