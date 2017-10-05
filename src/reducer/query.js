let data = location.href.split('?')[1];
if(data) {
    data = data.split('&')[0].split('=')[1];
}
const initState = {
    data
};
const home = (state=initState, action)=> {
    switch(action.type) {
        default:
            return state;
    }
}
export default home;