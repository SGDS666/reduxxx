import {REMOVEPLIFE} from '../../conston'

const initState = 100
const plifeReducer = (preState=initState,action) => {
    const {type,data} = action
    console.log({type,data});
    switch (type) {
        case REMOVEPLIFE:
            return preState-data
        default:
            return preState
    }
}
export default plifeReducer