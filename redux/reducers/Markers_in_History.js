const MArker = {
    markers_in_history: []
}

export default (state = MArker , action)=>{
    
    switch (action.type) {
        case 'marker_in_history':
            return {markers_in_history : [ ...state.markers_in_history , action.marker]}
            break;
        default:
            return state;
    }
}