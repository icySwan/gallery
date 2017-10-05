export function init() {
    return (dispatch, getState)=> {
        dispatch({
            type: "init"
        })
    }
}