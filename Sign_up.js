import React, { Component } from 'react';
import { View, Text, Dimensions } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { Icon, Button, Item, Input, } from 'native-base';
const ScreenWidth = Dimensions.get('window').width
const ScreenHeight = Dimensions.get('window').height
import CodeInput from 'react-native-confirmation-code-input';
import CountDown from 'react-native-countdown-component';
import {connect} from 'react-redux'
class Sign_up extends Component {
    constructor(props) {
        super(props);
        this.state = {
            up_maninPage_anim: 'slideInDown',
            down_maninPage_anim: 'slideInUp',
            guide_text_animation: 'slideInRight',
            down_arrow_animation: 'slideInLeft',
            cheack_button_animation: 'fadeIn',
            up_main_page_anim: 'slideInLeft',
            phone_number_shown: false,
            next_button_clicked: false,
            Number: '۰۹۳۰۴۳۸۷۳۴۲',
            code_anim: 'fadeIn',
            disabled_phone_number: false,
            disabled_username: false,
            countdown_finished: '' ,
            phone_number_input_anim : 'slideInRight'
        };
    }
    render() {
        // const { play } = this.state;
        return (

            <View style={{ backgroundColor: this.props.whole_app_background_color,
             width: ScreenWidth,
              height: ScreenHeight ,}}>


                <Animatable.View
                    style={{
                        height: '35%'
                        , width: ScreenWidth,
                        backgroundColor: this.props.sign_up_header_background_color,
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        borderColor: this.props.sign_up_header_border_color,
                        borderWidth: 5,
                        borderRadius: 4,
                    }}
                    animation={this.state.up_maninPage_anim}
                    duration={500}
                >
                    <Text
                        style={{
                            fontSize: 25,
                            fontWeight: 'bold',
                            color: this.props.sign_up_header_text_color,
                            marginTop: '8%'
                        }}>
                        ورود
                    </Text>
                    <Text
                        style={{
                            fontSize: 20,
                            width: '80%',
                            textAlign: 'center',
                            marginTop : 10 ,
                            color: this.props.sign_up_header_text_color
                        }}>
                        لطفا نام کاربری و شماره تلفن خود را وارد کنید تا کد تاییدیه را دریافت کنید
                    </Text>
                    <View
                        style={{ height: '100%', position: 'absolute', width: '100%', flexDirection: 'column-reverse' }}
                    >
                        <Button
                            success
                            style={{ marginLeft: 10, marginBottom: 5, width: 105, justifyContent: 'center', alignItems: 'center', height: 40 }}
                            // bordered
                            // rounded
                            transparent
                            onPress={() => {

                                this.setState({
                                    text_animation: 'pulse',
                                    up_maninPage_anim: 'slideOutUp',
                                    down_maninPage_anim: 'slideOutDown',
                                })
                                setTimeout(() => {
                                    this.props.navigation.goBack()
                                }, 300)

                            }}
                        >
                            <Icon name='arrow-back' style={{marginRight:4 , width: 20, height: 20, marginBottom: 5, marginLeft: 20, color: this.props.sign_up_header_text_color }}></Icon>
                            <Text
                                 style={{ color: this.props.sign_up_header_text_color, fontSize: 19, marginRight: 20, fontWeight: 'bold', marginBottom: 2 , marginLeft:0 }}>برگشت
                            </Text>
                        </Button>
                    </View>


                </Animatable.View>


                <Animatable.View
                    style={{
                        height: '65%',
                        width: ScreenWidth,
                        backgroundColor: this.props.whole_app_view_background_color,
                        alignItems: 'center',
                    }}
                    animation={this.state.down_maninPage_anim}
                    duration={500}
                >

                    <View
                        style={{
                            position: 'absolute',
                            top: 200,
                            bottom: 0,
                            flexDirection: 'column'
                            , alignItems: 'center',
                        }}>
                        <Animatable.View
                            style={{
                                borderWidth: 3,
                                borderRadius: 5,
                                borderColor:this.props.guide_the_username_border_color,
                                marginTop: 150,
                                width: '100%',
                                padding: 5,
                                margin: 5,
                                backgroundColor: this.props.guide_the_username_background_color
                            }}
                            animation={this.state.guide_text_animation}
                            duration={500}
                        >

                            <Text style={{ color: this.props.guide_the_username_text_color }}>۱ : نام کاربری نباید تکراری باشد</Text>
                            <Text style={{ color: this.props.guide_the_username_text_color }}>۲ : نام کاربری نباید شامل بعضی از حرف ها باشد</Text>
                            <Text style={{ color: this.props.guide_the_username_text_color}}>۳ : نام کاربری باید بیشتر از ۵ حرف باشد</Text>
                            <Text style={{ color: this.props.guide_the_username_text_color }}>۵ : نام کاربری نباید بیشتر از ۱۵ جرف باشد</Text>

                        </Animatable.View>
                        {this.state.next_button_clicked ? (
                            <Animatable.View
                                animation={this.state.code_anim}
                                style={{
                                    position: 'absolute',
                                    height: '10%',
                                    // justifyContent: 'center',
                                    alignItems: 'center',
                                    // marginTop: 10,

                                }}
                                duration={500}
                            >
                                {this.state.countdown_finished ? (

                                    <Animatable.Text
                                        animation='bounceInDown'
                                        duration={500}
                                        style={{
                                            // position:'absolute' ,
                                            marginTop: 25,
                                            fontSize: 20,
                                            fontWeight: 'bold',
                                            color: 'red'
                                        }}>کد فرستاده نشد ؟</Animatable.Text>
                                ) : (null)}
                                {/* <Timer time={500} play={play} style={{ width: '60%', height: '20%' }} /> */}

                                <View style={{ marginTop: 25 }}>
                                    <CountDown

                                        until={5}
                                        size={20}
                                        onFinish={() =>
                                            this.setState({
                                                countdown_finished: true
                                            })
                                        }
                                        digitStyle={{ backgroundColor: this.props.background_in_timer_in_sign_in_color }}
                                        digitTxtStyle={{ color: this.props.code_shit_text_color}}
                                        timeToShow={['M', 'S']}
                                        timeLabels={{ m: 'Min', s: 'Sec' }}

                                    />
                                    <Text
                                        style={{ color: this.props.code_shit_text_color, fontWeight: 'bold', fontSize: 20, marginTop: 10 }}
                                    >
                                        کد را وارد کنید
                                    </Text>
                                </View>
                            </Animatable.View>

                        ) : (null)}


                    </View>


                    <Animatable.View
                        animation={this.state.down_arrow_animation}
                        style={{
                            height: 40,
                            position: 'absolute',
                            marginTop: 80,
                        }}>

                        <Button
                            transparent
                            // rounded
                            style={{
                                borderWidth: 2,
                                borderColor: this.props.text_inputs_in_sign_in_color,
                                borderRadius: 20,
                                justifyContent: 'center',
                                alignItems: 'center',
                                backgroundColor:  this.props.background_button_in_sign_in_color,
                                height: '100%',
                                padding: 4
                            }}
                            onPress={() => {

                                this.setState({
                                    guide_text_animation: 'fadeOut',
                                    down_arrow_animation: 'fadeOut',
                                    phone_number_shown: true,
                                    disabled_username: true,
                                    phone_number_input_anim : 'slideInRight' ,
                                    cheack_button_animation : 'fadeIn'
                                })
                                // setTimeout(() => {
                                //     this.setState({
                                //         guide_text_animation: 'fadeIn'
                                //     })
                                // }, 1000)
                            }}>
                            <Text style={{
                                fontSize: 15,
                                fontWeight: 'bold',
                                color: this.props.text_inputs_in_sign_in_color,
                                marginLeft: 10,
                                marginRight: 10
                            }}>اینجا رو کلیک کنید</Text>
                        </Button>
                    </Animatable.View>

                    {this.state.phone_number_shown ? (

                        <Animatable.View
                            animation={this.state.cheack_button_animation}
                            style={{
                                position: 'absolute',
                                height: 40,
                                marginTop: 150,
                            }}
                        >

                            <Button
                                transparent
                                disabled={this.state.disabled_phone_number}
                                // rounded 
                                style={{
                                    backgroundColor: 'transparent',
                                    borderWidth: 2,
                                    borderRadius: 15,
                                    borderColor: this.props.text_inputs_in_sign_in_color,
                                    justifyContent: 'center',
                                    alignContent: 'center',
                                    height: '100%'
                                }}
                                onPress={() => {


                                    this.setState({
                                        up_maninPage_anim: 'fadeOut',
                                        up_main_page_anim: 'fadeIn',
                                        next_button_clicked: true,
                                        guide_text_animation: 'fadeOut',
                                        code_anim: 'fadeIn',
                                        disabled_phone_number: true,
                                        countdown_finished: false
                                    })
                                    this.setState({
                                        cheack_button_animation: 'fadeOut'
                                    })

                                }}
                            >
                                <Text style={{
                                    marginLeft: 10,
                                    fontSize: 15,
                                    fontWeight: 'bold', color: this.props.text_inputs_in_sign_in_color
                                }}>دریافت کد</Text>
                                <Icon name='checkmark-circle' style={{ color: this.props.text_inputs_in_sign_in_color, marginRight: 10 }} />
                            </Button>
                        </Animatable.View>
                    ) : (null)}
                    <Animatable.View

                        animation='slideInLeft'
                        style={{ width: '80%', height: '9%', marginTop: '5%' }} >
                        <Item style={{ borderColor: this.props.text_inputs_in_sign_in_color, justifyContent: 'center', height: '100%', width: '100%' }} rounded
                        >
                            <Input disabled={this.state.disabled_username} placeholder='نام کاربری' style={{ color: this.props.text_inputs_in_sign_in_color, }} />
                            <Icon active name='person' style={{ color: this.props.text_inputs_in_sign_in_color}} />

                        </Item>
                    </Animatable.View>

                    {this.state.phone_number_shown ? (
                        <Animatable.View
                        duration ={700}
                            animation={this.state.phone_number_input_anim}
                            style={{ height: '9%', marginTop: '5%' }} >
                            <Item style={{ width: '70%', borderColor: this.props.text_inputs_in_sign_in_color, height: '100%' }} rounded
                            >
                                <Input disabled={this.state.disabled_phone_number} 
                                placeholder={'شماره تلفن'}
                                textContentType = {'telephoneNumber'}
                                keyboardType='number-pad'
                                style={{ color: this.props.text_inputs_in_sign_in_color, 
                                }} />
                                <Icon active name='call' style={{ color: this.props.text_inputs_in_sign_in_color }} />

                            </Item>
                        </Animatable.View>
                    ) : (null)
                    }

                    {this.state.next_button_clicked ? (

                        <Animatable.View animation = {this.state.code_anim} style={{ marginTop: 10  }}
                        duration={500}>
                            <CodeInput
                                // ref="codeInputRef2"
                                // keyboardAppearance={true}
                                size={40}
                                // style={{
                                //     // marginBottom:10
                                // }}
                                keyboardType="numeric"
                                codeLength={5}
                                activeColor={this.props.text_inputs_in_sign_in_color}
                                inactiveColor={this.props.regular_text_color}
                                className='border-circle'
                                compareWithCode='12345'
                                autoFocus={false}
                                // clearTextOnFocus
                                // codeInputStyle={{ fontWeight: '800' }}
                                onFulfill={(isValid, code) => (null)}
                            // style={{marginBottom:'30%'}}
                            />
                        </Animatable.View>
                    ) : (null)}
                </Animatable.View>

                {
                    this.state.next_button_clicked ? (
                        <Animatable.View
                            style={{
                                height: '35%',
                                width: ScreenWidth,
                                backgroundColor: this.props.sign_up_header_background_color ,
                                justifyContent: 'flex-start',
                                alignItems: 'center',
                                borderColor:this.props.sign_up_header_border_color ,
                                borderWidth: 5,
                                borderRadius: 4,
                                position: 'absolute'
                            }}
                            animation={this.state.up_main_page_anim}
                            duration={500}
                        >

                            <Text
                                style={{
                                    fontSize: 25,
                                    fontWeight: 'bold',
                                    color: this.props.sign_up_header_text_color,
                                    marginTop: '8%'
                                }}>
                                تایید شماره تلفن
                                </Text>
                            <Text
                                style={{
                                    fontSize: 20,
                                    width: '80%',
                                    textAlign: 'center',
                                    color:this.props.sign_up_header_text_color
                                }}>
                                ما کد را به شماره تلفن زیر میفرستیم
                                </Text>
                            <Text
                                style={{
                                    fontSize: 20,
                                    width: '80%',
                                    textAlign: 'center',
                                    color: this.props.sign_up_header_text_color
                                }}>
                                {this.state.Number}
                            </Text>
                            <Text


                                style={{
                                    fontSize: 20,
                                    width: '80%',
                                    textAlign: 'center',
                                    color: this.props.sign_up_header_text_color
                                }}>
                                لطفا گوشیه خود را چک کنید
                                </Text>

                            <View
                                style={{
                                    height: '100%', width: '100%',
                                    position: 'absolute', flexDirection:'column-reverse'
                                }}>

                                <Button
                                    // success
                                    style={{
                                        marginBottom: '1%',
                                        marginLeft: 20,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        height: 40,
                                        position: 'absolute',
                                        // borderRadius: 20,
                                        // borderColor: 'green',
                                        // borderWidth: 2
                                    }}
                                    // bordered
                                    // rounded
                                    transparent
                                    onPress={() => {



                                        this.setState({
                                            up_main_page_anim: 'fadeOut',
                                            up_maninPage_anim: 'fadeIn',
                                            guide_text_animation: 'fadeIn',
                                            // phone_number_shown : false ,
                                            phone_number_input_anim : 'bounceOutLeft',
                                            code_anim: 'fadeOut',
                                            disabled_username: false,
                                            disabled_phone_number: false
                                        })
                                        setTimeout(() => {
                                            this.setState({
                                                next_button_clicked: false,
                                                phone_number_shown : false ,
                                                down_arrow_animation : 'fadeIn'

                                            })
                                        }, 700)

                                    }}
                                >
                                    <Text
                                        style={{ color: this.props.sign_up_header_text_color, fontSize: 19, marginRight: 25, fontWeight: 'bold', marginBottom: 2 }}>
                                        شماره تلفن را اشتباه وارد کردید ؟
                                </Text>
                                </Button>
                            </View>
                        </Animatable.View>

                    ) : (null)}
            </View >

        );
    }
}
function MapStateToProps (state) {

    try {
        return {
            whole_app_background_color : state.color.whole_app_background_color, 
            regular_text_color : state.color.regular_text_color ,
            sign_up_header_background_color : state.color.sign_up_header_background_color,
            sign_up_header_border_color : state.color.sign_up_header_border_color,
            sign_up_header_text_color : state.color.sign_up_header_text_color,
            guide_the_username_background_color : state.color.guide_the_username_background_color,
            guide_the_username_border_color : state.color.guide_the_username_border_color,
            guide_the_username_text_color :state.color.guide_the_username_text_color,
            text_inputs_in_sign_in_color :state.color.text_inputs_in_sign_in_color,
            border_button_in_sign_in_color :state.color.border_button_in_sign_in_color,
            background_button_in_sign_in_color :state.color.background_button_in_sign_in_color,
            code_shit_text_color : state.color.code_shit_text_color,
            background_in_timer_in_sign_in_color :state.color.background_in_timer_in_sign_in_color,
            whole_app_view_background_color : state.color.whole_app_view_background_color
        }
    }catch (e){
        console.log('we have an error');
        
    }
}
export default connect (MapStateToProps , null) (Sign_up);
