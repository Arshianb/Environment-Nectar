export const internet_is_not_access = () => {
    return {
        type:'Internet',
        internet : { internet_not_access : true,
            internet_not_access_view_anim :'bounceIn',
            set_location_disable : true,
            // set_region : region
        }


    }
}

export const internet_is_access = (in_set_time_out) => {
    if (in_set_time_out){
    return {
        type:'Internet',
        internet : {
            internet_not_access : false,
            set_location_disable : false,
            internet_not_access_view_anim :'bounceIn',
            // set_region : region
        }
    }
}
    else{
        
    return {
        type:'Internet',
        internet : {
            internet_not_access : true,
            set_location_disable : true,
            internet_not_access_view_anim :'bounceOut',
            // set_region : region
            }
        }
    }
}