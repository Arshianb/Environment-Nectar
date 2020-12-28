const app_states = {
    set_region : null,
    header_anim : 'lightSpeedIn'
}

export default (state = app_states , action)=>{
    
    
    switch (action.type) {
        case 'get_the_region':
            return {...state , set_region : action.user_region }
            break;
        case 'header_animation':
        return {...state , header_anim : action.header_anim}
            break;
        default:
            return state;
    }
}