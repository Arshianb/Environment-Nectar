export const get_marker_action = () => {
    return {
        type:'marker',
        marker : { 
            set_marker_again: true,
            set_location_text: 'وارد کردن لوکیشن',
            set_location_text_color: 'green',
            locationheight: 50,
            get_location_image: require('../../images/set_the_marker.png'),
            markers: []
        }


    }
}
export const set_marker_action = (latitude , longitude) => {
    return {
        type:'marker',
        marker : { 
            set_marker_again: false,
            set_location_text: 'منصرف شدید ؟',
            set_location_text_color: 'red',
            locationheight: 0,
            get_location_image: require('../../images/seted.png'),
            markers: [
                {
                coordinate: {
                    latitude: latitude,
                    longitude: longitude,
                }}], 
        }
        


    }
}