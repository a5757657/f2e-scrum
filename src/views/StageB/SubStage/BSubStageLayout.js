import './BSubStageLayout.scss'
import Bug from '../../../components/Bug/Bug'

import WhiteBlock from '../../../components/WhiteBlock/WhiteBlock'
import Button from '../../../components/Button/Button'

const BOne = (props) => {
    const { children, handleOnClick, arrow, text } = props
    return (
        <div className='BSubStageLayout'>
            <Bug
                color={'#EBB221'}
                position={'leftBottom'} />
            <WhiteBlock
                button={<Button arrow={arrow} text={text} color={'#EBB221'} onClick={handleOnClick} />}>
                {children}
            </WhiteBlock>
        </div>
    )
}

export default BOne