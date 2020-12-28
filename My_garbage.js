import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Container, Button, Icon } from 'native-base';
import * as Animatable from 'react-native-animatable';
import My_Header from './component/Header';
import styles from './Styles/MainPageStyle';
import { ScrollView } from 'react-native-gesture-handler';
import Map from './my_garbage/Map';
import { connect } from 'react-redux';
import {internet_is_not_access , internet_is_access , my_garbage_map_is_open_ation} from './redux/actions';
import Set_location_button from './my_garbage/Set_location_button';
import Connection_lost_view from './my_garbage/Connection_lost_view';
import { CommonActions } from '@react-navigation/native';
class My_garbage extends Component {
  constructor(props) {
    super(props);
    this.state = {

            
      choose_garbage_animation: 'fadeInLeft',
      select_my_garbage_animation: '',
      select_my_loacation_animation: 'slideInRight',
      show_the_garbage_menu: false,
      show_location_on_animation: 'fadeIn',
      turn_on_location_animation: '',
      show_location_on: true,
      location_png: require('./images/location.png'),
      select_my_garbage_location_anim: 'slideInLeft',
      garbage1_kind_clicked: false,
      garbage2_kind_clicked: false,
      garbage3_kind_clicked: false,
      garbage4_kind_clicked: false,
      garbage5_kind_clicked: false,
      garbage6_kind_clicked: false,
      garbage7_kind_clicked: false,
      garbage8_kind_clicked: false,
      garbage9_kind_clicked: false,
      garbage10_kind_clicked: false,
      garbage11_kind_clicked: false,
      garbage12_kind_clicked: false,
      disable: false,



    };
  }

  render() {
    var get_out_item_anim = ''
    var get_in_item_anim = 'flash'
    var time = 250
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


    
        // console.log(isFocused);
        
        
        // if (!this.props.my_garbage_map_is_open){
        //   this.props.my_garbage_map_is_open_ation()
        //   // setTimeout(() => {
            
        //     this.props.navigation.dispatch(   
        //               CommonActions.reset({
        //                   index : 1 ,
        //                   routes: [
        //                       { name: 'My garbage' },
        //                     ],
        //               })
        //             )
        //   // }, 1000);
          
                    
        // }


    return (


      <Container style={{ flex: 1, backgroundColor: this.props.whole_app_background_color, alignItems: 'center'}}>
        
        
          <My_Header styles={styles} goBack={this.props.navigation.goBack} title={'زباله های من'} ></My_Header>
   


        <View
          style={{
            bottom: 20,
            top: 0,
            width: '100%', alignItems: 'center',
            justifyContent: 'center', 
            position: 'absolute',
            marginTop: 60,
          }}>

          <Map  name = {'My garnage class'}/>

          <Image
            source={this.state.location_png}
            style={{
              height: this.props.locationheight, width: 50, position: 'absolute'
            }} resizeMode='contain'>
          </Image>


          <View
            style={{ height: '100%', width: '100%', alignItems: 'flex-end', position: 'absolute' }}
          >

            <Animatable.View

              style={{
                height: '20%', width: '20%',
                borderColor: this.props.button_border_in_my_garbage_class_color,
                borderWidth: 2,
                borderRadius: 10,
                marginTop: '1%',
                marginRight: '2%',
                backgroundColor: this.props.button_background_in_my_garbage_class_color,
                justifyContent: 'center',
                alignItems: 'center'
              }}
              animation={this.state.select_my_garbage_animation}
              duration={500}>
              <Button 
              transparent
              disabled = {this.state.disable}
              style={{
                height: '100%',
                width: '100%',
                marginBottom: 0,
                alignItems: 'center', justifyContent: 'center',
                flexDirection: 'column'
              }}
                onPress={() => {
                  if (this.state.show_location_on_animation != 'fadeIn') {
                    this.setState({
                      show_the_garbage_menu: true,
                      choose_garbage_animation: 'fadeIn',
                      select_my_garbage_animation: 'pulse',
                      disable:true

                    })
                    setTimeout(() => {
                      this.setState({
                        select_my_garbage_animation: ''
                      })
                    }, 500);
                  }
                }}
              >
                <Image source={require('./images/garbage.png')} style={{ height: '80%', width: '100%' }} resizeMode='contain'></Image>

                <Text style={{ fontSize: 10, fontWeight: 'bold', marginTop: 5 , color : this.props.regular_text_color }}>
                  نوع زباله
                </Text>
              </Button>
            </Animatable.View>






            <View style={{
              position: 'absolute',
              height: '100%', width: '100%'
              , flexDirection: 'column-reverse'
              , alignItems: 'flex-end',
            }}>









              <Animatable.View
                style={{
                  height: 80, width: 80,
                  marginRight: 5,
                  borderColor: this.props.button_border_in_my_garbage_class_color, borderWidth: 2, borderRadius: 10,
                  marginBottom: 10, backgroundColor: this.props.button_background_in_my_garbage_class_color,
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
                animation={this.state.select_my_loacation_animation}
                duration={500}>
                <Button
                disabled={this.state.disable}
                transparent style={{
                  height: '80%',
                  width: '100%',
                  marginBottom: 0,
                  justifyContent: 'center',
                  alignItems: 'center', flexDirection: 'column'
                }}
                  onPress={() => {
                    if (!this.state.show_the_garbage_menu) {
                      this.setState({
                        select_my_loacation_animation: 'pulse',
                        show_location_on_animation: 'fadeIn',
                        show_location_on: true,
                      })
                      setTimeout(() => {
                        this.setState({
                          select_my_loacation_animation: '',
                          disable:true
                        })
                      }, 500);
                    }
                  }}
                >
                  <Image source={require('./images/turn_on_your_location.png')} style={{ height: '90%', width: '90%'  }} resizeMode='contain'></Image>

                  <Text style={{ fontSize: 10, fontWeight: 'bold', marginTop: 5, color : this.props.regular_text_color }}>
                    لوکیشن من
                  </Text>
                </Button>
              </Animatable.View>

              
              <Set_location_button 
              select_my_garbage_location_anim = {this.state.select_my_garbage_location_anim}
              garbage1_kind_clicked = {this.state.garbage1_kind_clicked}
              garbage2_kind_clicked = {this.state.garbage2_kind_clicked}
              garbage3_kind_clicked = {this.state.garbage3_kind_clicked}
              garbage4_kind_clicked = {this.state.garbage4_kind_clicked}
              garbage5_kind_clicked = {this.state.garbage5_kind_clicked}
              garbage6_kind_clicked = {this.state.garbage6_kind_clicked}
              garbage7_kind_clicked = {this.state.garbage7_kind_clicked}
              garbage8_kind_clicked = {this.state.garbage8_kind_clicked}
              garbage9_kind_clicked = {this.state.garbage9_kind_clicked}
              garbage10_kind_clicked = {this.state.garbage10_kind_clicked}
              garbage11_kind_clicked = {this.state.garbage11_kind_clicked}
              garbage12_kind_clicked = {this.state.garbage12_kind_clicked}></Set_location_button>
                  

            </View>
          </View>







          {this.state.show_the_garbage_menu ? (
            <Animatable.View
              animation={this.state.choose_garbage_animation}
              style={{
                backgroundColor: this.props.popup_background_color,
                shadowOffset: 10,
                shadowOpacity: 0.8,
                borderColor: this.props.popup_border_color,
                borderWidth: 2,
                borderRadius: 10,
                width: '80%',
                height: '60%',
                alignItems: 'center',
              }}
              duration={500}
            >

              <View style={{
                height: '10%', width: '100%',
                backgroundColor: this.props.choose_garbage_popup_header_color,
                justifyContent: 'space-between',
                flexDirection: 'row',
                alignItems: 'center',
                borderTopRightRadius:10,
                borderTopLeftRadius:10,
              }}>
                <Text
                style={{
                  fontSize: 15,
                  fontWeight: 'bold', marginRight: 4,
                  borderColor: 'red',
                  borderWidth: 2, 
                  backgroundColor: this.props.whole_app_background_color,
                  paddingLeft: 5,
                  paddingRight: 10,
                  borderRadius: 5,
                  color : 'red',
                  marginLeft:5
                }}
                  onPress={() => {
                    this.setState({
                      garbage1_kind_clicked:false,
                      garbage2_kind_clicked:false,
                      garbage3_kind_clicked:false,
                      garbage4_kind_clicked:false,
                      garbage5_kind_clicked:false,
                      garbage6_kind_clicked:false,
                      garbage7_kind_clicked:false,
                      garbage8_kind_clicked:false,
                      garbage9_kind_clicked:false,
                      garbage10_kind_clicked:false,
                      garbage11_kind_clicked:false,
                      garbage12_kind_clicked:false,
                      choose_garbage_animation: 'fadeOut',
                      disable:false

                    })
                    setTimeout(() => {
                      this.setState({
                        show_the_garbage_menu: false
                      })
                    }, 500);

                  }}>بستن</Text>
                <Text
                  onPress={() => {
                    this.setState({
                      choose_garbage_animation: 'fadeOut',
                      disable:false
                    })
                    setTimeout(() => {
                      this.setState({
                        show_the_garbage_menu: false
                      })
                    }, 500);
                  }}
                  style={{
                    fontSize: 15,
                    fontWeight: 'bold', marginRight: 4,
                    borderColor: 'black',
                    borderWidth: 2, backgroundColor: this.props.button_background_in_my_garbage_class_color,
                    paddingRight: 10, 
                    paddingLeft: 5, 
                    borderRadius: 5,
                    color : this.props.regular_text_color
                  }}>انتخاب زباله ها انجام شد</Text>
              </View>

              <View

                style={{
                  height: '82%',
                  width: '95%',
                  marginTop: '5%',
                  padding: 5,shadowOpacity: 1,
                  shadowOffset: 10,
                  shadowRadius: 20,
                  justifyContent: 'center',
                  alignItems: 'center'
                }}>

                <ScrollView
                  contentContainerStyle={{ justifyContent: 'center', alignItems: 'center' }}
                  style={{ height: '100%', width: '100%' }}
                >


                  <View style={{ flexDirection: 'row' }}>


                    <Animatable.View 
                    style={{
                      height: 90, width: 90,
                      marginLeft: 5, marginRight: 5,
                      justifyContent: 'center',
                      alignItems: 'center'
                    }}
                      animation={this.state.garbage1_anim}
                      duration={250}>
                      <Button
                        onPress={() => {
                          if (!this.state.garbage1_kind_clicked) {
                            this.setState({
                              garbage1_anim: get_in_item_anim,
                              garbage1_kind_clicked: true,
                            })
                            setTimeout(() => {
                              this.setState({
                                garbage1_anim: get_out_item_anim,
                              })
                            }, time);
                          }
                          else {
                            this.setState({
                              garbage1_anim: get_in_item_anim,
                              garbage1_kind_clicked: false,
                            })
                            setTimeout(() => {
                              this.setState({
                                garbage1_anim: get_out_item_anim,
                              })
                            }, time);
                          }
                        }} transparent
                        style={[
                          this.props.choose_garbage_button_style,
                          this.state.garbage1_kind_clicked ? this.props.choose_garbage_button_style_when_clicked : null
                        ]}>

                        <Image source={require('./images/plastic.png')} style={{ height: '75%', width: '90%' }} resizeMode='contain' ></Image>
                        <Text style={{ fontWeight: 'bold', fontSize: 13 , color :this.props.choose_garbage_text_color}}>{garbage1}</Text>

                      </Button>
                      {this.state.garbage1_kind_clicked ? (
                        <View style={{ position: 'absolute', width: '100%', flexDirection: 'row-reverse', height: '100%' }}>
                          <Image source={require('./images/checked.png')}
                            style={{
                              height: 20,
                              width: 20,
                            }}
                            resizeMode='contain'></Image>
                        </View>
                      ) : (null)}
                    </Animatable.View>

                    <Animatable.View style={{
                      height: 90, width: 90,
                      marginLeft: 5, marginRight: 5,
                      justifyContent: 'center',
                      alignItems: 'center'
                    }}
                      animation={this.state.garbage2_anim}
                      duration={500}>
                      <Button
                        onPress={() => {
                          if (!this.state.garbage2_kind_clicked) {
                            this.setState({
                              garbage2_anim: get_in_item_anim,
                              garbage2_kind_clicked: true,
                            })
                            setTimeout(() => {
                              this.setState({
                                garbage2_anim: get_out_item_anim,
                              })
                            }, time);
                          }
                          else {
                            this.setState({
                              garbage2_anim: get_in_item_anim,
                              garbage2_kind_clicked: false,
                            })
                            setTimeout(() => {
                              this.setState({
                                garbage2_anim: get_out_item_anim,
                              })
                            }, time);
                          }
                        }} transparent
                        style={[
                          this.props.choose_garbage_button_style,
                          this.state.garbage2_kind_clicked ? this.props.choose_garbage_button_style_when_clicked : null
                        ]}>

                        <Image source={require('./images/pack_garbages.png')} style={{ height: '75%', width: '90%' }} resizeMode='contain' ></Image>
                        <Text style={{ fontWeight: 'bold', fontSize: 13 , color :this.props.choose_garbage_text_color }}>{garbage2}</Text>

                      </Button>
                      {this.state.garbage2_kind_clicked ? (
                        <View style={{ position: 'absolute', width: '100%', flexDirection: 'row-reverse', height: '100%' }}>
                          <Image source={require('./images/checked.png')}
                            style={{
                              height: 20,
                              width: 20,
                            }}
                            resizeMode='contain'></Image>
                        </View>
                      ) : (null)}
                    </Animatable.View>

                    <Animatable.View style={{
                      height: 90, width: 90,
                      marginLeft: 5, marginRight: 5,
                      justifyContent: 'center',
                      alignItems: 'center'
                    }}
                      animation={this.state.garbage3_anim}
                      duration={500}>
                      <Button
                        onPress={() => {
                          if (!this.state.garbage3_kind_clicked) {
                            this.setState({
                              garbage3_anim: get_in_item_anim,
                              garbage3_kind_clicked: true,
                            })
                            setTimeout(() => {
                              this.setState({
                                garbage3_anim: get_out_item_anim,
                              })
                            }, time);
                          }
                          else {
                            this.setState({
                              garbage3_anim: get_in_item_anim,
                              garbage3_kind_clicked: false,
                            })
                            setTimeout(() => {
                              this.setState({
                                garbage3_anim: get_out_item_anim,
                              })
                            }, time);
                          }
                        }} transparent
                        style={[
                          this.props.choose_garbage_button_style,
                          this.state.garbage3_kind_clicked ? this.props.choose_garbage_button_style_when_clicked : null
                        ]}>

                        <Image source={require('./images/iron.png')} style={{ height: '75%', width: '90%' }} resizeMode='contain' ></Image>
                        <Text style={{ fontWeight: 'bold', fontSize: 13, color :this.props.choose_garbage_text_color}}>{garbage3}</Text>

                      </Button>
                      {this.state.garbage3_kind_clicked ? (
                        <View style={{ position: 'absolute', width: '100%', flexDirection: 'row-reverse', height: '100%' }}>
                          <Image source={require('./images/checked.png')}
                            style={{
                              height: 20,
                              width: 20,
                            }}
                            resizeMode='contain'></Image>
                        </View>
                      ) : (null)}
                    </Animatable.View>
                  </View>
                  <View style={{ flexDirection: 'row', marginTop: 10 }}>

                    <Animatable.View style={{
                      height: 90, width: 90,
                      marginLeft: 5, marginRight: 5,
                      justifyContent: 'center',
                      alignItems: 'center'
                    }}
                      animation={this.state.garbage4_anim}
                      duration={500}>
                      <Button
                        onPress={() => {
                          if (!this.state.garbage4_kind_clicked) {
                            this.setState({
                              garbage4_anim: get_in_item_anim,
                              garbage4_kind_clicked: true,
                            })
                            setTimeout(() => {
                              this.setState({
                                garbage4_anim: get_out_item_anim,
                              })
                            }, time);
                          }
                          else {
                            this.setState({
                              garbage4_anim: get_in_item_anim,
                              garbage4_kind_clicked: false,
                            })
                            setTimeout(() => {
                              this.setState({
                                garbage4_anim: get_out_item_anim,
                              })
                            }, time);
                          }
                        }} transparent
                        style={[
                          this.props.choose_garbage_button_style,
                          this.state.garbage4_kind_clicked ? this.props.choose_garbage_button_style_when_clicked : null
                        ]}>

                        <Image source={require('./images/paper.png')} style={{ height: '75%', width: '90%' }} resizeMode='contain' ></Image>
                        <Text style={{ fontWeight: 'bold', fontSize: 13,color :this.props.choose_garbage_text_color }}>{garbage4}</Text>

                      </Button>
                      {this.state.garbage4_kind_clicked ? (
                        <View style={{ position: 'absolute', width: '100%', flexDirection: 'row-reverse', height: '100%' }}>
                          <Image source={require('./images/checked.png')}
                            style={{
                              height: 20,
                              width: 20,
                            }}
                            resizeMode='contain'></Image>
                        </View>
                      ) : (null)}
                    </Animatable.View>

                    <Animatable.View style={{
                      height: 90, width: 90,
                      marginLeft: 5, marginRight: 5,
                      justifyContent: 'center',
                      alignItems: 'center'
                    }}
                      animation={this.state.garbage5_anim}
                      duration={500}>
                      <Button
                        onPress={() => {
                          if (!this.state.garbage5_kind_clicked) {
                            this.setState({
                              garbage5_anim: get_in_item_anim,
                              garbage5_kind_clicked: true,
                            })
                            setTimeout(() => {
                              this.setState({
                                garbage5_anim: get_out_item_anim,
                              })
                            }, time);
                          }
                          else {
                            this.setState({
                              garbage5_anim: get_in_item_anim,
                              garbage5_kind_clicked: false,
                            })
                            setTimeout(() => {
                              this.setState({
                                garbage5_anim: get_out_item_anim,
                              })
                            }, time);
                          }
                        }} transparent
                        style={[
                          this.props.choose_garbage_button_style,
                          this.state.garbage5_kind_clicked ? this.props.choose_garbage_button_style_when_clicked : null
                        ]}>

                        <Image source={require('./images/fruit.png')} style={{ height: '75%', width: '90%' }} resizeMode='contain' ></Image>
                        <Text style={{ fontWeight: 'bold', fontSize: 13, color :this.props.choose_garbage_text_color}}>{garbage5}</Text>

                      </Button>
                      {this.state.garbage5_kind_clicked ? (
                        <View style={{ position: 'absolute', width: '100%', flexDirection: 'row-reverse', height: '100%' }}>
                          <Image source={require('./images/checked.png')}
                            style={{
                              height: 20,
                              width: 20,
                            }}
                            resizeMode='contain'></Image>
                        </View>
                      ) : (null)}
                    </Animatable.View>

                    <Animatable.View style={{
                      height: 90, width: 90,
                      marginLeft: 5, marginRight: 5,
                      justifyContent: 'center',
                      alignItems: 'center'
                    }}
                      animation={this.state.garbage6_anim}
                      duration={500}>
                      <Button
                        onPress={() => {
                          if (!this.state.garbage6_kind_clicked) {
                            this.setState({
                              garbage6_anim: get_in_item_anim,
                              garbage6_kind_clicked: true,
                            })
                            setTimeout(() => {
                              this.setState({
                                garbage6_anim: get_out_item_anim,
                              })
                            }, time);
                          }
                          else {
                            this.setState({
                              garbage6_anim: get_in_item_anim,
                              garbage6_kind_clicked: false,
                            })
                            setTimeout(() => {
                              this.setState({
                                garbage6_anim: get_out_item_anim,
                              })
                            }, time);
                          }
                        }} transparent
                        style={[
                          this.props.choose_garbage_button_style,
                          this.state.garbage6_kind_clicked ? this.props.choose_garbage_button_style_when_clicked : null
                        ]}>

                        <Image source={require('./images/bread.png')} style={{ height: '75%', width: '90%' }} resizeMode='contain' ></Image>
                        <Text style={{ fontWeight: 'bold', fontSize: 13, color :this.props.choose_garbage_text_color}}>{garbage6}</Text>

                      </Button>
                      {this.state.garbage6_kind_clicked ? (
                        <View style={{ position: 'absolute', width: '100%', flexDirection: 'row-reverse', height: '100%' }}>
                          <Image source={require('./images/checked.png')}
                            style={{
                              height: 20,
                              width: 20,
                            }}
                            resizeMode='contain'></Image>
                        </View>
                      ) : (null)}
                    </Animatable.View>
                  </View>
                  <View style={{ flexDirection: 'row', marginTop: 10 }}>

                    <Animatable.View style={{
                      height: 90, width: 90,
                      marginLeft: 5, marginRight: 5,
                      justifyContent: 'center',
                      alignItems: 'center'
                    }}
                      animation={this.state.garbage7_anim}
                      duration={500}>
                      <Button
                        onPress={() => {
                          if (!this.state.garbage7_kind_clicked) {
                            this.setState({
                              garbage7_anim: get_in_item_anim,
                              garbage7_kind_clicked: true,
                            })
                            setTimeout(() => {
                              this.setState({
                                garbage7_anim: get_out_item_anim,
                              })
                            }, time);
                          }
                          else {
                            this.setState({
                              garbage7_anim: get_in_item_anim,
                              garbage7_kind_clicked: false,
                            })
                            setTimeout(() => {
                              this.setState({
                                garbage7_anim: get_out_item_anim,
                              })
                            }, time);
                          }
                        }} transparent
                        style={[
                          this.props.choose_garbage_button_style,
                          this.state.garbage7_kind_clicked ? this.props.choose_garbage_button_style_when_clicked : null
                        ]}>

                        <Image source={require('./images/plastic.png')} style={{ height: '75%', width: '90%' }} resizeMode='contain' ></Image>
                        <Text style={{ fontWeight: 'bold', fontSize: 13,color :this.props.choose_garbage_text_color }}>{garbage7}</Text>

                      </Button>
                      {this.state.garbage7_kind_clicked ? (
                        <View style={{ position: 'absolute', width: '100%', flexDirection: 'row-reverse', height: '100%' }}>
                          <Image source={require('./images/checked.png')}
                            style={{
                              height: 20,
                              width: 20,
                            }}
                            resizeMode='contain'></Image>
                        </View>
                      ) : (null)}
                    </Animatable.View>


                    <Animatable.View style={{
                      height: 90, width: 90,
                      marginLeft: 5, marginRight: 5,
                      justifyContent: 'center',
                      alignItems: 'center'
                    }}
                      animation={this.state.garbage8_anim}
                      duration={500}>
                      <Button
                        onPress={() => {
                          if (!this.state.garbage8_kind_clicked) {
                            this.setState({
                              garbage8_anim: get_in_item_anim,
                              garbage8_kind_clicked: true,
                            })
                            setTimeout(() => {
                              this.setState({
                                garbage8_anim: get_out_item_anim,
                              })
                            }, time);
                          }
                          else {
                            this.setState({
                              garbage8_anim: get_in_item_anim,
                              garbage8_kind_clicked: false,
                            })
                            setTimeout(() => {
                              this.setState({
                                garbage8_anim: get_out_item_anim,
                              })
                            }, time);
                          }
                        }} transparent
                        style={[
                          this.props.choose_garbage_button_style,
                          this.state.garbage8_kind_clicked ? this.props.choose_garbage_button_style_when_clicked : null
                        ]}>

                        <Image source={require('./images/plastic.png')} style={{ height: '75%', width: '90%' }} resizeMode='contain' ></Image>
                        <Text style={{ fontWeight: 'bold', fontSize: 13, color :this.props.choose_garbage_text_color}}>{garbage8}</Text>

                      </Button>
                      {this.state.garbage8_kind_clicked ? (
                        <View style={{ position: 'absolute', width: '100%', flexDirection: 'row-reverse', height: '100%' }}>
                          <Image source={require('./images/checked.png')}
                            style={{
                              height: 20,
                              width: 20,
                            }}
                            resizeMode='contain'></Image>
                        </View>
                      ) : (null)}
                    </Animatable.View>


                    <Animatable.View style={{
                      height: 90, width: 90,
                      marginLeft: 5, marginRight: 5,
                      justifyContent: 'center',
                      alignItems: 'center'
                    }}
                      animation={this.state.garbage9_anim}
                      duration={500}>
                      <Button
                        onPress={() => {
                          if (!this.state.garbage9_kind_clicked) {
                            this.setState({
                              garbage9_anim: get_in_item_anim,
                              garbage9_kind_clicked: true,
                            })
                            setTimeout(() => {
                              this.setState({
                                garbage9_anim: get_out_item_anim,
                              })
                            }, time);
                          }
                          else {
                            this.setState({
                              garbage9_anim: get_in_item_anim,
                              garbage9_kind_clicked: false,
                            })
                            setTimeout(() => {
                              this.setState({
                                garbage9_anim: get_out_item_anim,
                              })
                            }, time);
                          }
                        }} transparent
                        style={[
                          this.props.choose_garbage_button_style,
                          this.state.garbage9_kind_clicked ? this.props.choose_garbage_button_style_when_clicked : null
                        ]}>

                        <Image source={require('./images/plastic.png')} style={{ height: '75%', width: '90%' }} resizeMode='contain' ></Image>
                        <Text style={{ fontWeight: 'bold', fontSize: 13, color :this.props.choose_garbage_text_color}}>{garbage9}</Text>

                      </Button>
                      {this.state.garbage9_kind_clicked ? (
                        <View style={{ position: 'absolute', width: '100%', flexDirection: 'row-reverse', height: '100%' }}>
                          <Image source={require('./images/checked.png')}
                            style={{
                              height: 20,
                              width: 20,
                            }}
                            resizeMode='contain'></Image>
                        </View>
                      ) : (null)}
                    </Animatable.View>
                  </View>
                  <View style={{ flexDirection: 'row', marginTop: 10 }}>


                    <Animatable.View style={{
                      height: 90, width: 90,
                      marginLeft: 5, marginRight: 5,
                      justifyContent: 'center',
                      alignItems: 'center'
                    }}
                      animation={this.state.garbage10_anim}
                      duration={500}>
                      <Button
                        onPress={() => {
                          if (!this.state.garbage10_kind_clicked) {
                            this.setState({
                              garbage10_anim: get_in_item_anim,
                              garbage10_kind_clicked: true,
                            })
                            setTimeout(() => {
                              this.setState({
                                garbage10anim: get_out_item_anim,
                              })
                            }, time);
                          }
                          else {
                            this.setState({
                              garbage10_anim: get_in_item_anim,
                              garbage10_kind_clicked: false,
                            })
                            setTimeout(() => {
                              this.setState({
                                garbage10_anim: get_out_item_anim,
                              })
                            }, time);
                          }
                        }} transparent
                        style={[
                          this.props.choose_garbage_button_style,
                          this.state.garbage10_kind_clicked ? this.props.choose_garbage_button_style_when_clicked : null
                        ]}>

                        <Image source={require('./images/plastic.png')} style={{ height: '75%', width: '90%' }} resizeMode='contain' ></Image>
                        <Text style={{ fontWeight: 'bold', fontSize: 13, color :this.props.choose_garbage_text_color}}>{garbage10}</Text>

                      </Button>
                      {this.state.garbage10_kind_clicked ? (
                        <View style={{ position: 'absolute', width: '100%', flexDirection: 'row-reverse', height: '100%' }}>
                          <Image source={require('./images/checked.png')}
                            style={{
                              height: 20,
                              width: 20,
                            }}
                            resizeMode='contain'></Image>
                        </View>
                      ) : (null)}
                    </Animatable.View>


                    <Animatable.View style={{
                      height: 90, width: 90,
                      marginLeft: 5, marginRight: 5,
                      justifyContent: 'center',
                      alignItems: 'center'
                    }}
                      animation={this.state.garbage11_anim}
                      duration={500}>
                      <Button
                        onPress={() => {
                          if (!this.state.garbage11_kind_clicked) {
                            this.setState({
                              garbage11_anim: get_in_item_anim,
                              garbage11_kind_clicked: true,
                            })
                            setTimeout(() => {
                              this.setState({
                                garbage11_anim: get_out_item_anim,
                              })
                            }, time);
                          }
                          else {
                            this.setState({
                              garbage11_anim: get_in_item_anim,
                              garbage11_kind_clicked: false,
                            })
                            setTimeout(() => {
                              this.setState({
                                garbage11_anim: get_out_item_anim,
                              })
                            }, time);
                          }
                        }} transparent
                        style={[
                          this.props.choose_garbage_button_style,
                          this.state.garbage11_kind_clicked ? this.props.choose_garbage_button_style_when_clicked : null
                        ]}>

                        <Image source={require('./images/plastic.png')} style={{ height: '75%', width: '90%' }} resizeMode='contain' ></Image>
                        <Text style={{ fontWeight: 'bold', fontSize: 13, color :this.props.choose_garbage_text_color}}>{garbage11}</Text>

                      </Button>
                      {this.state.garbage11_kind_clicked ? (
                        <View style={{ position: 'absolute', width: '100%', flexDirection: 'row-reverse', height: '100%' }}>
                          <Image source={require('./images/checked.png')}
                            style={{
                              height: 20,
                              width: 20,
                            }}
                            resizeMode='contain'></Image>
                        </View>
                      ) : (null)}
                    </Animatable.View>


                    <Animatable.View style={{
                      height: 90, width: 90,
                      marginLeft: 5, marginRight: 5,
                      justifyContent: 'center',
                      alignItems: 'center'
                    }}
                      animation={this.state.garbage12_anim}
                      duration={500}>
                      <Button
                        onPress={() => {
                          if (!this.state.garbage12_kind_clicked) {
                            this.setState({
                              garbage12_anim: get_in_item_anim,
                              garbage12_kind_clicked: true,
                            })
                            setTimeout(() => {
                              this.setState({
                                garbage12_anim: get_out_item_anim,
                              })
                            }, time);
                          }
                          else {
                            this.setState({
                              garbage12_anim: get_in_item_anim,
                              garbage12_kind_clicked: false,
                            })
                            setTimeout(() => {
                              this.setState({
                                garbage12_anim: get_out_item_anim,
                              })
                            }, time);
                          }
                        }} transparent
                        style={[
                          this.props.choose_garbage_button_style,
                          this.state.garbage12_kind_clicked ? this.props.choose_garbage_button_style_when_clicked : null
                        ]}>

                        <Image source={require('./images/plastic.png')} style={{ height: '75%', width: '90%' }} resizeMode='contain' ></Image>
                        <Text style={{ fontWeight: 'bold', fontSize: 13, color :this.props.choose_garbage_text_color}}>{garbage12}</Text>

                      </Button>
                      {this.state.garbage12_kind_clicked ? (
                        <View style={{ position: 'absolute', width: '100%', flexDirection: 'row-reverse', height: '100%' }}>
                          <Image source={require('./images/checked.png')}
                            style={{
                              height: 20,
                              width: 20,
                            }}
                            resizeMode='contain'></Image>
                        </View>
                      ) : (null)}
                    </Animatable.View>
                  </View>

                </ScrollView>

              </View>


            </Animatable.View>
          ) : (null)}
          {!this.state.show_location_on ? (null) : (
            <Animatable.View
            duration={500}
              animation={this.state.show_location_on_animation}
              style={{
                height: 220, width: '80%',
                backgroundColor: this.props.popup_background_color,
                borderColor: this.props.popup_border_color, borderRadius: 10,
                borderWidth: 2, alignItems: 'center',
              }}
            >
              <Image style={{ height: '50%', width: '100%', marginTop: 10 }}
                source={require('./images/turn_on_your_location.png')}
                resizeMode='contain' />
              <Text style={{ color: this.props.regular_text_color, fontSize: 15, fontWeight: 'bold', marginTop: 5 }}>مکان یاب دستگاهتون خاموش میباشد</Text>
              <View style={{ flexDirection: 'row', padding: 5, marginTop: 15 }}>

                <Animatable.View
                  animation={this.state.turn_on_location_animation}
                  duration={500}
                  style={{
                    height: 40, width: 100,
                    backgroundColor: 'green',
                    borderRadius: 10,
                    marginRight: 30
                  }}>
                  <Button
                    bordered
                    onPress={() => {
                      this.setState({
                        turn_on_location_animation: 'pulse',
                        show_location_on_animation: 'fadeOut',
                      })
                      setTimeout(() => {
                        this.setState({
                          turn_on_location_animation: '',
                          disable:false
                          
                        })
                      }, 250);

                      setTimeout(() => {
                        this.setState({
                          show_location_on: false
                        })
                      }, 500);
                    }}
                    style={{
                      width: '100%', height: '100%',
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderColor: 'transparent',
                    }}>
                    <Text style={{
                      color: this.props.regular_text_color ,
                      fontSize: 15,
                      fontWeight: 'bold'
                    }}>روشن کردن</Text>
                  </Button>
                </Animatable.View>
                <Animatable.View
                  duration={500}
                  animation={this.state.Ignore_location_animation}
                  style={{
                    height: 40, width: 100,
                    backgroundColor: this.props.turn_off_location_color ,
                    borderRadius: 10
                  }}
                >
                  <Button
                    bordered
                    onPress={() => {
                      this.setState({
                        Ignore_location_animation: 'pulse',
                        show_location_on_animation: 'fadeOut',
                      })
                      setTimeout(() => {
                        this.setState({
                          Ignore_location_animation: '',
                          disable:false
                        })
                      }, 250);
                      setTimeout(() => {
                        this.setState({
                          show_location_on: false
                        })
                      }, 500);
                    }}
                    style={{
                      width: '100%', height: '100%',
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderColor: 'transparent',
                    }}>
                    <Text style={{ color: this.props.regular_text_color, fontSize: 15, fontWeight: 'bold' }} >نادیده گرفتن</Text>
                  </Button>
                </Animatable.View>

              </View>
            </Animatable.View>
          )}


        </View>

        {this.props.internet_not_access ? (
          <View 
          style={{position:'absolute',
          height:'100%' , width:'100%',
          justifyContent:'center' , alignItems:'center'
          }}>
            <Connection_lost_view></Connection_lost_view>

          </View>
        ) : (null)}


      </Container>
    );
  }
}
function mapStateToProps (state){   
  try{
    
      
    return{
      region : state.state.set_region,
      internet_not_access : state.internet.internet_not_access,
      internet_not_access_view_anim : state.internet.internet_not_access_view_anim ,
      set_location_disable : state.internet.set_location_disable,


      set_marker_again: state.marker.set_marker_again,
      locationheight: state.marker.locationheight,
      get_location_image: state.marker.get_location_image,





      whole_app_background_color : state.color.whole_app_background_color, 
      regular_text_color : state.color.regular_text_color ,
      turn_on_location_color : state.color.turn_on_location_color,
      turn_off_location_color : state.color.turn_off_location_color,
      popup_background_color : state.color.popup_background_color,
      popup_border_color : state.color.popup_border_color,
      button_background_in_my_garbage_class_color: state.color.button_background_in_my_garbage_class_color,
      button_border_in_my_garbage_class_color: state.color.button_border_in_my_garbage_class_color,
      text_on_button_in_my_garbage_class_color : state.color.text_on_button_in_my_garbage_class_color,
      choose_garbage_popup_header_color : state.color.choose_garbage_popup_header_color,
      choose_garbage_text_button_color : state.color.choose_garbage_text_button_color ,
      whole_app_view_background_color : state.color.whole_app_view_background_color ,


      choose_garbage_button_style : state.color.choose_garbage_button_style,
      choose_garbage_button_style_when_clicked : state.color.choose_garbage_button_style_when_clicked ,
      choose_garbage_text_color : state.color.choose_garbage_text_color,



      my_garbage_map_is_open : state.my_garbage_is_open.my_garbage_map_is_open,



      google_map_is_open : state.close_google_map.google_map_is_open,
    }
  }catch(e){
    console.log('we have an error because = ' + e);
  }
}

export default connect(mapStateToProps , {
  internet_is_access , internet_is_not_access,
  my_garbage_map_is_open_ation
  } ) (My_garbage);
