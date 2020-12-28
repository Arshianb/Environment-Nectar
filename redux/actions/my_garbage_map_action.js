export const my_garbage_map_is_open_ation = () =>{
    // console.log('my garbage is open');
    return{
        type:'open_my_garbage',
        open : {
            my_garbage_map_is_open: true
        }
    }
}
export const my_garbage_map_is_close_action = () =>{
    // console.log('my garbage is close');
    
    return{
        type:'close_my_garbage',
        close : {
            my_garbage_map_is_open : false
        }
    }
}