const internet_access = {
    internet_not_access : false,
    internet_not_access_view_anim :'',
    set_location_disable : false,
}

export default (state = internet_access , action)=>{
    
    switch (action.type) {
        case 'Internet' :
            return  action.internet
            break;
        default:
            return state;
    }
}