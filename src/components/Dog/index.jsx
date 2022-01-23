import Life from '../Life'
import ValueLable from '../ValueLable'
import './index.scss'
import { connect } from 'react-redux'
import {RemoveDogLife,AddDogLife}from '../../redux/actions/Dlife'
import {RemovePeopleLife,AddPeopleLife} from '../../redux/actions/Plife'
const Dog = ({lifeV,RL,AL}) => {
    
    const attack = () => {
        RL(10)
    }
    const recovery =() => {
        AL(5)
    }
    return (
        <div id="dog">
            <ValueLable revese={true}>
                    <Life lifeV={lifeV}/>
            </ValueLable>
            <button onClick={attack}>点击攻击人类</button>
            <button onClick={recovery}>点击恢复</button>
        </div>
    )
}

export default connect(
    state => ({lifeV:state.DlifeReducer}),
    {
        RL:RemovePeopleLife,
        AL:AddDogLife
    }
)(Dog)