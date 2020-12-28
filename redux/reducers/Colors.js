const theme_color = {

  
      them_mode : 'Light mode' ,
      header_color : 'rgba(223, 230, 233,1.0)' ,
      them_mode_bool : true,
      them_mode_text_color : 'white' , 
      whole_app_background_color : 'white' , 
      whole_app_view_background_color : '#ecf0f1' , 
      status_bar_color : 'rgba(223, 230, 233,1.0)' ,
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
      sign_up_header_text_color : 'black',
      guide_the_username_background_color : 'rgba(178, 190, 195,0.8)',
      guide_the_username_border_color : 'black',
      guide_the_username_text_color : 'black',
      text_inputs_in_sign_in_color :'black',
      border_button_in_sign_in_color :'rgba(45, 52, 54,1.0)',
      background_button_in_sign_in_color :'rgba(178, 190, 195,1.0)',
      code_shit_text_color : 'black',
      background_in_timer_in_sign_in_color : '#bdc3c7',
      side_bar_background_color : 'rgba(223, 230, 233,1.0)',
      side_bar_item_unactive_background_color : '#95a5a6',
      side_bar_item_active_background_color : '#27ae60',
      side_bar_item_active_text_color : 'green',
      side_bar_item_unactive_text_color : 'white',


      choose_garbage_button_style : {
          backgroundColor: '#dfe6e9',
          height: 90, width: 90,
          borderRadius: 10,
          borderColor: 'black',
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
          borderColor: 'black',
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

export default (state = theme_color , action)=>{

    
    
    switch (action.type) {
        case 'dark_mode' :
            return  action.color
            break;
        case 'light_mode' :
            return  action.color
            break ;
        default:
            return state;
    }
}