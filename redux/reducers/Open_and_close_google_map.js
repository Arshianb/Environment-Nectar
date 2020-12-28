export default (state = false , action)=>{
    
    switch (action.type) {
        case 'open':
            return action.open
            break;
        default:
            return state;
    }
}