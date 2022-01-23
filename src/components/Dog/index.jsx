import { useState } from 'react'
import Life from '../Life'
import ValueLable from '../ValueLable'
import './index.scss'


const Dog = () => {
    const [lifeV, setLifeV] = useState(100)
    const attack = () => {
        setLifeV(lifeV - 10)
    }
    return (
        <div id="dog">
            <ValueLable revese={true}>
                    <Life lifeV={lifeV}/>
            </ValueLable>
            <button onClick={attack}>点击自伤</button>
        </div>
    )
}

export default Dog