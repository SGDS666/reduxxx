import {REMOVEDLIFE,ADDDLIFE} from '../../conston'

const initState = 100
const DlifeReducer = (preState=initState,action) => {
    const {type,data} = action

    
    switch (type) {
        case REMOVEDLIFE:
            return preState-data >= 0? preState-data : 0
        case ADDDLIFE:
            return preState+data <= 100? preState+data : 100
        default:
            return preState
    }
}
export default DlifeReducer