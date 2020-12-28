import React, { Component } from 'react';
import { View, Text, Image, StatusBar } from 'react-native';
import { Header, Title, Button, Right, Body, Left, Container, Icon } from 'native-base';
import header_title_style from '../Styles/Header_title';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';
import * as Animatable from 'react-native-animatable';
import {connect} from 'react-redux';

class My_Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        if (this.props.title) {
            var title = this.props.title
        } else {
            var title = 'First project'
        }
        if (this.props.navigation) {
            var navigation = this.props.navigation
        } else {
            var navigation = null
        }
        if (this.props.goBack) {
            var goBack = this.props.goBack
        } else {
            var goBack = null
        }
        if (this.props.nav) {
            var nav = this.props.nav
        } else {
            var nav = null
        }
        if (this.props.height) {
            var height = this.props.height
        } else {
            var height = 55
        }
        

        var styles = this.props.styles

        return (


            < Animatable.View
                style={{
                    height: 60,
                    width: '100%',

                }}
                animation={this.props.header_anim_in_header_class} easing='ease-out'
                duration={1500}
                delay={0}
                >
                <Header style={{
                    backgroundColor: this.props.header_color,
                    alignItems: 'center',
                    height: '100%'
                }}>
                    <StatusBar backgroundColor={this.props.status_bar_color } barStyle={this.props.barStyle_in_status_bar_color}/>
                    <Left>
                        <TouchableNativeFeedback onPress={() => {

                            try {
                                goBack()
                            } catch (error) {
                                this.props.sidebar()
                            }

                        }}>
                            {!goBack ? (null) : (
                                    <Button style={styles.Button_title} rounded transparent >
                                        <Icon name='arrow-back' style={{color:'#009432' , color : 'black'}}></Icon>
                                        {/* <Image style={styles.icon_back} source={require('../images/back.png')} resizeMode='stretch'></Image> */}
                                    </Button>
                                )}

                        </TouchableNativeFeedback>
                    </Left>
                    
                    <Body style={{ marginRight: 0 }}>
                        <Text style={header_title_style.title} >{title}</Text>
                    </Body>

                    <Right>
                        <TouchableNativeFeedback onPress={() => {
                            try {
                                goBack()
                            } catch (error) {
                                this.props.sidebar()
                            }
                        }}>
                            {!goBack ? (

                                <Icon style={{ height: 30, width: 30 , color : 'black' }} name='list'  ></Icon>

                            
                            ) : (null)}

                        </TouchableNativeFeedback>
                    </Right>
                </Header>
            </ Animatable.View>


        );
    }
}
function MapStatetoProps (state){
 
        return{
            header_anim_in_header_class : 'lightSpeedIn',


            status_bar_color : state.color.status_bar_color ,
            barStyle_in_status_bar_color:state.color.barStyle_in_status_bar_color ,
            header_color : state.color.header_color,

        }
}
export default connect(MapStatetoProps , null) (My_Header);
