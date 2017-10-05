export function changeCurrent(cur='home') {
    return (dispatch, getState)=> {
        dispatch({
            type: "changeCurrent",
            data: cur
        })
    }
}

export function showList(id) {
    return (dispatch, getState)=> {
        dispatch({
            type: "showList",
            data: id
        })
    }
}