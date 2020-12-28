import React, { Component } from 'react';
// import 'react-native-gesture-handler';
import { View, Text, Dimensions, Image, StatusBar } from 'react-native';
import { Badge, Button, Icon } from 'native-base';
const ScreenWidth = Dimensions.get('window').width
import * as Animatable from 'react-native-animatable';
import My_Header from './component/Header';
import styles from './Styles/MainPageStyle';
import {connect} from 'react-redux'
import { CommonActions } from '@react-navigation/native';

class MainPage extends Component {


  constructor(props) {

    super(props);
    this.state = {
      up_maninPage_anim: 'fadeInDownBig',
      down_maninPage_anim: 'fadeInUpBig',
      text_animation: '',
      opacity: 1,
      select_my_garbage_animation: '',
      select_number_of_dimond_animation: '',
      information_animation:''
    };
  }


  render() {


    return (
      <View
        // animation={this.state.mainpage_anim}
        // duration={1500}
        style={{
          backgroundColor: this.props.whole_app_background_color,
          opacity: this.state.opacity,
          flex: 1,
          flexDirection: 'column'

        }}>

        
          <My_Header sidebar={this.props.navigation.openDrawer} styles={styles} title={'پاک تیم'} />




        <Animatable.View
          style={{
            height: '35%',
            width: '100%'
          }}
          animation={this.state.up_maninPage_anim} easing='ease-out'
          duration={1500}
          delay={100}
        >
          <View style={{
            backgroundColor: this.props.whole_app_view_background_color,
            height: '100%',
            width: '100%',
            alignItems: 'center'
          }}>
            <Image source={require('./images/main_page_pic.png.png')}
              style={{
                height: '80%',
                width: ScreenWidth,
              }}
              resizeMode={'contain'} />
            <Animatable.View
              duration={500}
              animation={this.state.select_number_of_dimond_animation}
              style={{
                width: '80%',
                height: '17%',
                marginTop: 4
              }}>
              <Button
              transparent
                style={{
                  borderRadius: 20,
                  borderColor: this.props.border_button_in_sign_in_color,
                  // backgroundColor:'transparent',
                  borderWidth: 2,
                  flexDirection: 'row',
                  alignItems: 'center',
                  height: '100%',
                  width: '100%',
                  justifyContent: 'center',

                }}
                onPress={() => {
                  this.setState({
                    select_number_of_dimond_animation: 'pulse'
                  })
                  setTimeout(() => {
                    this.setState({
                      select_number_of_dimond_animation: ''
                    })
                  }, 500);
                }}
              >

                
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                <Badge style={{
                    backgroundColor: 'black' ,
                    marginRight: 0,
                    height: 20,
                    width: 20
                    , alignItems: 'center', justifyContent: 'center'
                  }}>
                    <Text style={{
                      color : 'white' ,
                      fontWeight: 'bold',
                    }}>۲</Text>
                  </Badge>
                  <Text style={{
                    marginLeft: '3%',
                    color: this.props.regular_text_color,
                    fontWeight: 'bold',
                    textAlign: 'left'
                  }}>تعداد مدال ها : </Text>
                  <Icon name ='medal'
                  style={{
                    height: 20,
                    backgroundColor:'transparent' ,
                    width: 20,
                    color : 'black',
                    marginLeft : 10
                  }}/>
                </View>

              </Button>
            </Animatable.View>
          </View>
        </Animatable.View>
        <Animatable.View
          style={{
            height: '65%',
            width: '100%',
            alignItems: 'center',
            backgroundColor: this.props.whole_app_view_background_color
          }}
          animation={this.state.down_maninPage_anim} easing='ease-out'
          duration={1500}
          delay={200}
        >

          <View style={{
            width: '100%',
            height:'85%',
            // justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column-reverse',
            position: 'absolute',
          }}>


            <Text
            >
              Our Information
            </Text>
            <Text
            >
              Contact with us
            </Text>
          </View>

          <Button
            bordered
            style={{
              marginTop: '7%',
              // height: '15%',
              alignItems: 'center',
              justifyContent: 'center',
              borderColor: this.props.border_button_in_sign_in_color,
            }}
            onPress={() => {

              this.setState({
                text_animation: 'pulse',
              })
              setTimeout(() => {
                this.props.navigation.navigate('Sign up')
              }, 250)

            }}

          >

           
            <Animatable.Text
              animation={this.state.text_animation}
              style={{
                color:  this.props.regular_text_color ,
                fontWeight: 'bold',
                fontSize: 15,
                marginLeft: 10,
                marginBottom: '5%',
                marginTop: '4%',
                
              }}>
              ورود یا ثبت نام
              </Animatable.Text>
              <Icon name='people' style={{
              color: this.props.regular_text_color ,
              marginBottom: 5,
              marginTop: 5,
              marginRight : 10,
              marginLeft : 8
            }} />
          </Button>
          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            width: '100%',
          }}>
            <Animatable.View
            style={{
              width: '30%',
              height: 150,
              justifyContent : 'space-between' ,
              marginTop: 40,}}
              duration={500}
              animation={this.state.information_animation}
            >
              <Button
                bordered
                style={{
                  borderRadius: 4,
                  borderColor:  this.props.border_button_in_sign_in_color,
                  width: '100%',
                  height: '100%',
                  flexDirection: 'column',
                  alignItems: 'center',

                }}
                onPress={()=>{
                  this.setState({
                    information_animation:'pulse'
                  })
                  setTimeout(() => {
                    this.props.navigation.navigate('history')
                    this.setState({
                      information_animation:''
                    })
                  }, 250);
                }}
              >
                <Image source={require('./images/man_profile.png')}
                  style={{
                    height: 85,
                    width: '77%',
                    marginTop: '6%'
                  }} resizeMode='stretch'></Image>
                <Text style={{
                  fontWeight: 'bold',
                  fontSize: 12,
                  color:  this.props.regular_text_color,
                }}>
                  اطلاعات کاربری
              </Text>

              </Button>
            </Animatable.View>
            <Animatable.View
              animation={this.state.select_my_garbage_animation}
              duration={500}
              style={{
                width: '30%',
                height: 150,
                justifyContent : 'space-between' ,
              }}>
              <Button
              bordered
                style={{
                  borderRadius: 4,
                  borderColor:  this.props.border_button_in_sign_in_color , 
                  borderWidth: 1,
                  height: '100%',
                  width: '100%',
                  flexDirection: 'column',
                  alignItems: 'center'
                  , marginTop: 40,
                }}
                onPress={() => {
                  this.setState({
                    select_my_garbage_animation: 'pulse'
                  })
                  setTimeout(() => {
                    this.props.navigation.navigate('My garbage')
                    this.setState({
                      select_my_garbage_animation: ''
                    })
                  }, 250);

                }}
              >
                <Image source={require('./images/my_garbeg.png')}
                  style={{
                    height: 90,
                    width: '80%',
                    marginTop: 5
                  }} resizeMode='stretch'></Image>
                <Text style={{
                  fontWeight: 'bold',
                  fontSize: 12,
                  color:  this.props.regular_text_color ,
                  marginTop: 5,
                  fontFamily :"B_Nazanin_Outline_Regular",
                }}>
                  زباله های من
                </Text>

              </Button>
            </Animatable.View>
          </View>

        </Animatable.View>

      </View >
    );
  }
}
function MapStateToProps (state) {
  try {
      return {
        whole_app_background_color : state.color.whole_app_background_color, 
        regular_text_color : state.color.regular_text_color ,
        whole_app_view_background_color : state.color.whole_app_view_background_color,
        border_button_in_sign_in_color : state.color.border_button_in_sign_in_color
      }
  }catch (e){
      console.log('hello world');
      
  }
}
export default connect (MapStateToProps , null ) (MainPage);
// export default MainPage;