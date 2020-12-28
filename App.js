import 'react-native-gesture-handler';
import * as React from 'react';
import { useState, useEffect, Component } from 'react';
import {
  View,
  Image,
  StatusBar,
  Dimensions,
  SafeAreaView,
  Text ,
  Switch
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {Icon } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import Sign_up from './Sign_up';
const ScreenWidth = Dimensions.get('window').width
const ScreenHeight = Dimensions.get('window').height
const drawer = createDrawerNavigator();
const Stack = createStackNavigator();
import My_garbage from './My_garbage';
import History from './History';
import {connect} from 'react-redux';
import {set_dark_them_action , set_light_them_action } from './redux/actions'
import Map from './my_garbage/Map';

const MainPage1 = () => (
  <Stack.Navigator>
    <Stack.Screen
      name='Main Page'
      component={MainPage} options={{
        headerShown: false,
      }}></Stack.Screen>
    <Stack.Screen
      name='Sign up'
      component={Sign_up} options={{
        headerShown: false,
      }}></Stack.Screen>
  </Stack.Navigator>
)
const History1 = () => (
  <Stack.Navigator>
    <Stack.Screen
      name='history'
      component={History} options={{
        headerShown: false,
      }}></Stack.Screen>
    <Stack.Screen
      name='show map in history'
      component={Map} options={{
        headerShown: false,
      }}></Stack.Screen>
  </Stack.Navigator>
)

function CustomDrawerContent(props) {

  
  
  return (
    <SafeAreaView>
      <View style={{ width: 250, height: 200, justifyContent: 'center', alignItems: 'center' }} >
        <Image source={require('./images/side_bar_logo.png')} style={{ width: '80%', height: '100%', margin: '20%' }} resizeMode={'contain'} />
      </View>
      <ScrollView >
        <DrawerItemList {...props} />

        {/* <DrawerItem
          icon={() => (
            <Switch
            style={{marginLeft:20}}
            value={props.them_mode_bool}
              onValueChange = {(value) => {
                if (value) {
                  props.light_action()
                }else{
                  props.dark_action()
                }
              }}
            />
          )}
          label={
            props.them_mode
          }
          inactiveTintColor={
            props.them_mode_text_color
          }
          onPress={() =>{
            console.log(props.them_mode_bool);
            
            if (props.them_mode_bool) {
              props.dark_action()
            }else{
              props.light_action()
            }
          }}
        /> */}
        <DrawerItem
          icon={() => (
            <Icon name='help' style={{ color: '#3498db', marginLeft: 20 }} />
          )}
          label="توضیحات"
          inactiveTintColor='#3498db'
          onPress={() => alert('Help item selected')}
        />
        <DrawerItem
          icon={() => (
            <Icon name='exit' style={{ color: '#EA2027', marginLeft: 20 }} />
          )}
          label="خروج"
          inactiveTintColor='#EA2027'
          onPress={() => alert('exit item selected')}
        />

      </ScrollView>
    </SafeAreaView>
  );
}
import MainPage from './MainPage';
import { ScrollView } from 'react-native-gesture-handler';
class App extends Component {


  constructor(props) {
    super(props);
    this.state = {
      image_height: 200,
      fontSize: 30,
      MainPage_height: ScreenHeight,
      animation: 'zoomIn',
      delly: 200,
      image_showed : true

    }
  }

  render() {

    if (this.state.animation != 'zoomOut')
      setTimeout(() => {
        this.setState({
          animation: 'zoomOut',
          delly: 0,
        })
        setTimeout(() => {
          this.setState({
            image_showed : false
          })
        }, 1000)
      }, 2000)
    return (

      <View style={{
        backgroundColor: this.props.whole_app_background_color
        , width: ScreenWidth,
        height: ScreenHeight,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <StatusBar backgroundColor={this.props.status_bar_color} barStyle={this.props.barStyle_in_status_bar_color} />
        {this.state.image_showed ? (
          <Animatable.View
          animation = {this.state.animation}
          style={{justifyContent : 'center' , alignItems : 'center'}}> 
          
            <Animatable.Image easing='ease-out'
              duration={1500}
              delay={this.state.delly}
              source={require('./images/app_logo.png')} style={{ height: this.state.image_height, width: 200 }} resizeMode={'stretch'} />
            <Text
              // animation={this.state.animation} easing='ease-out'
              duration={1500}
              delay={this.state.delly}
              style={{
                color: this.props.regular_text_color,
                fontFamily :"persian_sols",
                fontSize: 50,
                // fontWeight: 'bold',
                color : this.props.regular_text_color

              }}>پاک تیم</Text>

            </Animatable.View>
          
        ) : (
          <View style={{ flexDirection: 'column', height: ScreenHeight, width: ScreenWidth }}>
            <NavigationContainer >
C
                <drawer.Screen
                
                  name='Main Page'
                  component={MainPage1}
                  
                  options={{
                    drawerIcon: ({ color }) => (
                      <Icon name='home' style={{ color: color }} ></Icon>
                    ),
                    drawerLabel: 'صفحه ی اصلی',

                    headerShown: false,
                  }}></drawer.Screen>
                <drawer.Screen

                  name='My garbage'
                  component={My_garbage}
                  options={{
                    drawerLabel: 'زباله های من',
                    drawerIcon: ({ color }) => (
                      <Icon name='bug' style={{ color: color }} ></Icon>
                    ),
                    headerShown: false,
                  }}></drawer.Screen>
                <drawer.Screen

                  name='history'
                  component={History1}
                  options={{
                    
                    drawerLabel: 'تاریخچه ی فعالیت شما',
                    drawerIcon: ({ color }) => (
                      <Icon name='clipboard' style={{ color: color }} ></Icon>
                    ),
                    headerShown: true,


                  }}></drawer.Screen>

              </drawer.Navigator>
            </NavigationContainer>

          </View>
        )}


       

      </View >
    );
  }
};


function MapStateToProps (state){

    return {
      them_mode : state.color.them_mode ,
      status_bar_color : state.color.status_bar_color ,
      barStyle_in_status_bar_color:state.color.barStyle_in_status_bar_color ,
      side_bar_background_color : state.color.side_bar_background_color,
      side_bar_item_unactive_background_color : state.color.side_bar_item_unactive_background_color,
      side_bar_item_active_background_color : state.color.side_bar_item_active_background_color,
      side_bar_item_active_text_color : state.color.side_bar_item_active_text_color,
      side_bar_item_unactive_text_color : state.color.side_bar_item_unactive_text_color,
      them_mode_text_color : state.color.them_mode_text_color,
      them_mode_bool : state.color.them_mode_bool,
      whole_app_view_background_color : state.color.whole_app_view_background_color,
      whole_app_background_color : state.color.whole_app_background_color, 
      regular_text_color : state.color.regular_text_color ,
    }
}

export default connect ( MapStateToProps , {set_dark_them_action , set_light_them_action }) (App) ;
// export default App
