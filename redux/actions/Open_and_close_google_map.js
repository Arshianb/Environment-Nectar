export const open_google_map_action = (name) =>{

    
    return{
        type:'open',
        open : {
            google_map_is_open : name
        }
    }
}
export const close_google_map_action = (name) =>{
    return{
        type:'close',
        close : {
            close_google_map : name
        }
    }
}