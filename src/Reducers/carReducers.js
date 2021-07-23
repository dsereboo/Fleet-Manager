const initialState={ cars:[]}

const carReducer=(state=initialState, action)=>{
    switch(action.type){
        case "GET_CARS":
            console.log("Done")
            return {cars: action.payload}
        default:
            return state;
    }
}


export default carReducer