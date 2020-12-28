
export default (state = false , action)=>{
    
    switch (action.type) {
        case 'close':
            return action.close
            break;
        default:
            return state;

    }
}