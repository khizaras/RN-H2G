let userState = {
    isLoggedin:false
}

export default function (state = userState, action) {
  
    switch (action.type) {
        case 'UPDATE_USER':
            state = action.payload
            return state
        default:
            return state;
    }

}
