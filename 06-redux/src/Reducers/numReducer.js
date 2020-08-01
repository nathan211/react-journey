const numInitialState = ["monitor", "mouse", "keyboard"];
const numReducer = (state = numInitialState, action) => {
    switch (action.type) {
        case "ADD_NEW":
            return [...state, action.addItem]
        case "DELETE":
            return [state.filter((value, key) => {
                return key !== action.index;
            })]
        default:
            return state;
    }
}

export default numReducer;