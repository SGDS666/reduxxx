import Life from '../Life'
import ValueLable from '../ValueLable'
import './index.scss'
import { connect } from 'react-redux'
import {RemovePeopleLife,AddPeopleLife} from '../../redux/actions/Plife'
import {RemoveDogLife,AddDogLife}from '../../redux/actions/Dlife'
const People = ({lifeV,RL,AL}) => {
    
    const attack = () => {
        RL(10)
    }
    const recovery = () => {
        AL(5)
    }
    return (
        <div id="people">
                <ValueLable>
                    <Life lifeV={lifeV}/>
                </ValueLable>
                
            <button onClick={attack}>点击攻击小狗</button>
            <button onClick={recovery}>点击回血</button>
        </div>
    )
}

export default connect(
    state => ({lifeV:state.PlifeReducer}),
    {
        RL:RemoveDogLife,
        AL:AddPeopleLife,
    }
)(People)