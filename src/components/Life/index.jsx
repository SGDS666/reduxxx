import {SAFE,WARING,DANGER,WILLDIE} from '../../conston'

const Life =  ({lifeV,revese=false}) => {
   
    const whatColor = (lifeV) => {
        if (lifeV > 80) {
            return SAFE
        } else if (lifeV <= 80 && lifeV > 40 ) {
            return WARING;
        } else if (lifeV <= 40 && lifeV > 10 ) {
            return DANGER
        } else if (lifeV <= 10) {
            return WILLDIE
        }
        return SAFE
    }
    return (
        <>
        <div className={'smz'}
        style={{
            width: `${lifeV>=0?lifeV:0}%`,
            backgroundColor: whatColor(lifeV)
        }}>

    </div>
    <div className='text'>生命值:{lifeV}</div>
    </>
    )
}
export default Life