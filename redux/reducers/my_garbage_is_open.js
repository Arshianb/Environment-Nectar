
const my_garbage_map_is_open = {
    my_garbage_map_is_open: false
}
export default (state = my_garbage_map_is_open , action)=>{
    
    // console.log('====================================');
    // console.log(state);
    // console.log('====================================');
    
    switch (action.type) {
        case 'open_my_garbage':
            return action.open
            break;
        case 'close_my_garbage' :
            return action.close
            
        default:
            return state;
    }
}