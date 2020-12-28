import { StyleSheet, View, Text } from 'react-native';
import React, { Component } from 'react';
// import {PagerTabIndicator, IndicatorViewPager, PagerTitleIndicator, PagerDotIndicator} from 'react-native-best-viewpager';
import My_Header from './component/Header';
import styles from './Styles/MainPageStyle';
import {connect} from 'react-redux';
import Items from './recycler_view/items';
import { ScrollView } from 'react-native-gesture-handler';
import {Set_marker_in_history_action , open_google_map_action , my_garbage_map_is_close_action} from './redux/actions';
import { CommonActions } from '@react-navigation/native';
class History extends Component {
    render() {



        if (this.props.markers_in_history == ''){
            this.props.Set_marker_in_history_action(37.7882 , -122.432)
            this.props.Set_marker_in_history_action(37.788 , -122.43)
            this.props.Set_marker_in_history_action(37.789 , -122.434)
        }
        
        
        
        return (

            <View style={{  alignItems: 'center', height: '100%', width: '100%' , backgroundColor : this.props.whole_app_background_color }}>

                    <My_Header styles={styles} goBack={this.props.navigation.goBack} title={'تاریخچه ی شما'} ></My_Header>
                    <ScrollView  style ={{height : '100%' , width :'100%' , marginBottom : 10  }} >
                        <Items
                        replace = {this.props.navigation.replace}
                        var garbage1_title = 'پلاستیک'
                        var garbage2_title = 'بسته بندی'
                        var garbage3_title = 'آهن'
                        var garbage4_title = 'کاغذ'
                        var garbage5_title = 'میوه'
                        var garbage6_title = 'نان خشک'
                        var garbage7_title = 'زباله نوع ۷'
                        var garbage8_title = 'زباله نوع ۸'
                        var garbage9_title = 'زباله نوع ۹'
                        var garbage10_title = 'زباله نوع ۱۰'
                        var garbage11_title = 'زباله نوع ۱۱'
                        var garbage12_title = 'زباله نوع ۱۲'
                        how_is_this = {'در حال پردازش'}
                        name = {'item1'} lat = {37.78825} long = {-122.4324}></Items>
                        <Items
                        replace = {this.props.navigation.replace}
                        var garbage1_title = 'پلاستیک'
                        var garbage2_title = 'بسته بندی'
                        how_is_this = {'کامل شده'}
                        name = {'item۲'} lat = {37.78825} long = {-122.4324}></Items>
                        <Items
                        replace = {this.props.navigation.replace}
                        var garbage1_title = 'پلاستیک'
                        var garbage2_title = 'بسته بندی'
                        var garbage3_title = 'آهن'
                        var garbage4_title = 'کاغذ'
                        var garbage5_title = 'میوه'
                        var garbage6_title = 'نان خشک'
                        var garbage7_title = 'زباله نوع ۷'
                        how_is_this = {'کامل شده'}
                        name = {'item۳'} lat = {37.78825} long = {-122.4324}></Items>
                    </ScrollView>
            </View>
        );
    }
}
function MapStateYpProps (state) {
    
    return {
      whole_app_view_background_color : state.color.whole_app_view_background_color,
      whole_app_background_color : state.color.whole_app_background_color, 
      regular_text_color : state.color.regular_text_color ,

      markers_in_history : state.Markers_in_History.markers_in_history,
      google_map_is_open : state.close_google_map.google_map_is_open,


      my_garbage_map_is_open : state.my_garbage_is_open.my_garbage_map_is_open
    }
}
export default connect (MapStateYpProps , {Set_marker_in_history_action
     , open_google_map_action 
     , my_garbage_map_is_close_action}) (History)