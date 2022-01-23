import Life from '../Life'
import ValueLable from '../ValueLable'
import './index.scss'
import { connect } from 'react-redux'
import RemovePeopleLife from '../../redux/actions/Plife'
const People = ({lifeV,RP}) => {
    
    const attack = () => {
        RP(10)
    }
    return (
        <div id="people">
                <ValueLable>
                    <Life lifeV={lifeV}/>
                </ValueLable>
                
            <button onClick={attack}>点击自伤</button>
        </div>
    )
}

export default connect(
    state => ({lifeV:state.plifeReducer}),
    {RP:RemovePeopleLife}
)(People)