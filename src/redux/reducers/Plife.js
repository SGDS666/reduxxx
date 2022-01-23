import {REMOVEPLIFE,ADDPLIFE} from '../../conston'

const initState = 100
const PlifeReducer = (preState=initState,action) => {
    const {type,data} = action
    console.log({type,data});
    
    switch (type) {
        case REMOVEPLIFE:
            return preState-data >= 0? preState-data : 0
        case ADDPLIFE:
            return preState+data <= 100? preState+data : 100
        default:
            return preState
    }
}
export default PlifeReducer