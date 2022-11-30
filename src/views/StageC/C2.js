import React, {useContext} from 'react'
import stageContext from './../../context/stageContext'

const C2 = () => {
    const { userName} = useContext(stageContext)
    return (
        <div className="C2">
            <p>嗨嗨 你是新來的前端{userName}吧！</p>
            <p>
                我是這次的 Scrum Master
                小捷，我的工作主要是促成開發團隊成員協作、引導團隊進行自省會議
            </p>
            <p>提升團隊成員對 Scrum 的瞭解</p>
        </div>
    )
}

export default C2
