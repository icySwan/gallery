const initState = {
    current: "home"
};
const home = (state=initState, action)=> {
    switch(action.type) {
        case 'init':
            return initState;
        case 'changeCurrent': 
            let tmpState = Object.assign({}, state);
            tmpState.current = action.data;
            return tmpState;
        default:
            return state;
    }
}
export default home;