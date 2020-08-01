import numReducer from './Reducers/numReducer';
import editStatusReducer from './Reducers/editReducer';

var redux = require('redux');

const allReducers = redux.combineReducers({
    num: numReducer,
    editStatus: editStatusReducer
});

var store1 = redux.createStore(allReducers);

store1.subscribe(() => {
    console.log(JSON.stringify(store1.getState()))
});

//store1.dispatch({ type: "CHANGE" });
store1.dispatch({ type: "ADD_NEW", addItem: "Headphone" });
store1.dispatch({ type: "DELETE", index: 0 });

export default store1;