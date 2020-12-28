export const set_dark_them_action = () => {
    return {
        type:'dark_mode',
        color : { 

            them_mode : 'Dark mode' ,
            header_color : 'rgba(45, 52, 54,1.0)' ,
            them_mode_bool : false ,
            them_mode_text_color : 'black' , 
            whole_app_background_color : 'black' , 
            whole_app_view_background_color : '#2d3436' , 
            status_bar_color : '#2d3436' ,
            barStyle_in_status_bar_color:'light-content' ,
            regular_text_color : 'white' ,
            turn_on_location_color : 'green',
            turn_off_location_color : 'red',
            popup_background_color : 'rgba(45, 52, 54,0.8)',
            popup_border_color : 'black',
            button_background_in_my_garbage_class_color: 'rgba(45, 52, 54,1.0)',
            button_border_in_my_garbage_class_color: 'black',
            text_on_button_in_my_garbage_class_color : 'white',
            choose_garbage_popup_header_color : '#009432',



            choose_garbage_button_style : {
                backgroundColor: '#636e72',
                height: 90, width: 90,
                borderRadius: 10,
                borderColor: '#00b894',
                borderWidth: 2,
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                marginRight: 5,
                marginLeft: 5
            },
            choose_garbage_button_style_when_clicked : {
                backgroundColor: '#2d3436',
                height: 83, width: 83,
                borderRadius: 10,
                borderColor: '#00b894',
                borderWidth: 3,
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
            },
            choose_garbage_text_color : '#dfe6e9' , 




            choose_garbage_background_button_color : 'rgba(99, 110, 114,1.0)',
            choose_garbage_background_button_when_selectd_color : 'rgba(45, 52, 54,1.0)',
            choose_garbage_text_button_color : 'white',
            connection_lost_popup_background_color : 'rgba(214, 48, 49,0.8)' ,
            connection_lost_popup_border_color : 'red' ,
            connection_lost_button_in_popup_background_color : 'rgba(45, 52, 54,1.0)',
            connection_lost_text_button_in_popup_color : 'red' ,
            sign_up_header_background_color : 'rgba(45, 52, 54,1.0)',
            sign_up_header_border_color : 'black',
            sign_up_header_text_color : '#009432',
            guide_the_username_background_color : 'rgba(45, 52, 54,0.8)',
            guide_the_username_border_color : 'black',
            guide_the_username_text_color : 'red',
            text_inputs_in_sign_in_color :'#009432',
            border_button_in_sign_in_color :'rgba(223, 230, 233,1.0)',
            background_button_in_sign_in_color :'#2f3640',
            code_shit_text_color : '#22a6b3',
            background_in_timer_in_sign_in_color : '#2f3640',
            side_bar_background_color : '#2d3436',
            side_bar_item_unactive_background_color : 'rgba(99, 110, 114,1.0)',
            side_bar_item_active_background_color : '#2ecc71',
            side_bar_item_active_text_color : 'green',
            side_bar_item_unactive_text_color : 'rgba(45, 52, 54,1.0)',
            map_custom_style:[
                {
                  "elementType": "geometry",
                  "stylers": [
                    {
                      "color": "#242f3e"
                    }
                  ]
                },
                {
                  "elementType": "labels.text.fill",
                  "stylers": [
                    {
                      "color": "#746855"
                    }
                  ]
                },
                {
                  "elementType": "labels.text.stroke",
                  "stylers": [
                    {
                      "color": "#242f3e"
                    }
                  ]
                },
                {
                  "featureType": "administrative.locality",
                  "elementType": "labels.text.fill",
                  "stylers": [
                    {
                      "color": "#d59563"
                    }
                  ]
                },
                {
                  "featureType": "poi",
                  "elementType": "labels.text.fill",
                  "stylers": [
                    {
                      "color": "#d59563"
                    }
                  ]
                },
                {
                  "featureType": "poi.park",
                  "elementType": "geometry",
                  "stylers": [
                    {
                      "color": "#263c3f"
                    }
                  ]
                },
                {
                  "featureType": "poi.park",
                  "elementType": "labels.text.fill",
                  "stylers": [
                    {
                      "color": "#6b9a76"
                    }
                  ]
                },
                {
                  "featureType": "road",
                  "elementType": "geometry",
                  "stylers": [
                    {
                      "color": "#38414e"
                    }
                  ]
                },
                {
                  "featureType": "road",
                  "elementType": "geometry.stroke",
                  "stylers": [
                    {
                      "color": "#212a37"
                    }
                  ]
                },
                {
                  "featureType": "road",
                  "elementType": "labels.text.fill",
                  "stylers": [
                    {
                      "color": "#9ca5b3"
                    }
                  ]
                },
                {
                  "featureType": "road.highway",
                  "elementType": "geometry",
                  "stylers": [
                    {
                      "color": "#746855"
                    }
                  ]
                },
                {
                  "featureType": "road.highway",
                  "elementType": "geometry.stroke",
                  "stylers": [
                    {
                      "color": "#1f2835"
                    }
                  ]
                },
                {
                  "featureType": "road.highway",
                  "elementType": "labels.text.fill",
                  "stylers": [
                    {
                      "color": "#f3d19c"
                    }
                  ]
                },
                {
                  "featureType": "transit",
                  "elementType": "geometry",
                  "stylers": [
                    {
                      "color": "#2f3948"
                    }
                  ]
                },
                {
                  "featureType": "transit.station",
                  "elementType": "labels.text.fill",
                  "stylers": [
                    {
                      "color": "#d59563"
                    }
                  ]
                },
                {
                  "featureType": "water",
                  "elementType": "geometry",
                  "stylers": [
                    {
                      "color": "#17263c"
                    }
                  ]
                },
                {
                  "featureType": "water",
                  "elementType": "labels.text.fill",
                  "stylers": [
                    {
                      "color": "#515c6d"
                    }
                  ]
                },
                {
                  "featureType": "water",
                  "elementType": "labels.text.stroke",
                  "stylers": [
                    {
                      "color": "#17263c"
                    }
                  ]
                }
              ] , 
              
              items_border_color : '#00b894'
        }


    }
}
export const set_light_them_action = () => {
    return {
        type:'light_mode',
        color : { 
            them_mode : 'Light mode' ,
            header_color : 'rgba(223, 230, 233,1.0)' ,
            them_mode_bool : true,
            them_mode_text_color : 'white' , 
            whole_app_background_color : 'white' , 
            whole_app_view_background_color : '#ecf0f1' , 
            status_bar_color : '#ecf0f1' ,
            barStyle_in_status_bar_color:'dark-content',
            regular_text_color : 'black' ,
            turn_on_location_color : 'green',
            turn_off_location_color : 'red',
            popup_background_color : 'rgba(178, 190, 195,0.8)',
            popup_border_color : 'white',
            button_background_in_my_garbage_class_color: 'rgba(223, 230, 233,1.0)',
            button_border_in_my_garbage_class_color: 'white',
            text_on_button_in_my_garbage_class_color : 'black',
            choose_garbage_popup_header_color : '#2ecc71',
            choose_garbage_background_button_color : 'rgba(223, 230, 233,1.0)',
            choose_garbage_background_button_when_selectd_color : 'rgba(178, 190, 195,1.0)',
            choose_garbage_text_button_color : 'black',
            connection_lost_popup_background_color : 'rgba(214, 48, 49,0.8)' ,
            connection_lost_popup_border_color : 'red' ,
            connection_lost_button_in_popup_background_color : 'rgba(45, 52, 54,1.0)',
            connection_lost_text_button_in_popup_color : 'red' ,
            sign_up_header_background_color : 'rgba(223, 230, 233,1.0)',
            sign_up_header_border_color : 'white',
            sign_up_header_text_color : '#2ecc71',
            guide_the_username_background_color : 'rgba(178, 190, 195,0.8)',
            guide_the_username_border_color : 'white',
            guide_the_username_text_color : 'red',
            text_inputs_in_sign_in_color :'#2ecc71',
            border_button_in_sign_in_color :'rgba(45, 52, 54,1.0)',
            background_button_in_sign_in_color :'rgba(178, 190, 195,1.0)',
            code_shit_text_color : 'rgba(129, 236, 236,1.0)',
            background_in_timer_in_sign_in_color : 'rgba(99, 110, 114,1.0)',
            side_bar_background_color : 'rgba(223, 230, 233,1.0)',
            side_bar_item_unactive_background_color : '#95a5a6',
            side_bar_item_active_background_color : '#27ae60',
            side_bar_item_active_text_color : 'green',
            side_bar_item_unactive_text_color : 'white',


            choose_garbage_button_style : {
                backgroundColor: '#dfe6e9',
                height: 90, width: 90,
                borderRadius: 10,
                borderColor: '#55efc4',
                borderWidth: 2,
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                marginRight: 5,
                marginLeft: 5
            },
            choose_garbage_button_style_when_clicked : {
                backgroundColor: '#b2bec3',
                height: 83, width: 83,
                borderRadius: 10,
                borderColor: '#55efc4',
                borderWidth: 3,
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
            },
            choose_garbage_text_color : '#2d3436' , 



            map_custom_style : [
                {
                  "stylers": [
                    {
                      "saturation": 40
                    }
                  ]
                },
                {
                  "elementType": "labels",
                  "stylers": [
                    {
                      "weight": 2.5
                    }
                  ]
                }
              ],

            items_border_color : '#55efc4'
        }
        


    }
}