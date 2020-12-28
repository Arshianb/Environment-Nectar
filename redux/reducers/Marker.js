const MArker = {
    set_marker_again: true,
    set_location_text: 'وارد کردن لوکیشن',
    set_location_text_color: 'green',
    locationheight: 50,
    get_location_image: require('../../images/set_the_marker.png'),
    markers: []
}

export default (state = MArker , action)=>{
    
    switch (action.type) {
        case 'marker':
            return action.marker
            break;
        default:
            return state;
    }
}