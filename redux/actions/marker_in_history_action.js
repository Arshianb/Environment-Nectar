export const get_marker_in_history_action = () => {
    return {
        type:'marker_in_history',
        marker : { 
            markers_in_history: []
        }


    }
}
export const Set_marker_in_history_action = (latitude , longitude) => {
    
    return {
        type:'marker_in_history',
        marker : { 
                coordinate: {
                    latitude: latitude,
                    longitude: longitude,
                }
            }, 
        }
        


    }