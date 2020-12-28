import {combineReducers} from 'redux';
import states from './states';
import internet_access_reducer from './internet_access_reducer';
import Marker from './Marker';
import colors from './Colors';
import close_google_map from './Open_and_close_google_map';
import close_map from './Close_map';
import Markers_in_History from './Markers_in_History';
import my_garbage_is_open1 from './my_garbage_is_open';

export default combineReducers({

    
    color : colors,
    internet : internet_access_reducer,
    state : states,
    marker : Marker,
    close_google_map : close_google_map,
    close_map : close_map,
    Markers_in_History : Markers_in_History,
    my_garbage_is_open : my_garbage_is_open1
})