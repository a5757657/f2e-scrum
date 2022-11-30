import React, { useContext, useEffect } from 'react'
import stageContext from './../../context/stageContext'
import Button from '../../components/Button/Button'
import Items from './Items'
import { data } from './data'

const C7 = (props) => {
    const { content, point } = props
    const { userName, setLayoutColor } = useContext(stageContext)
    useEffect(() => {
        setLayoutColor('C7')
    }, [])

    return (
        <div className="C7">
            <div className="main">
                <div className="question">
                    <div className="title">產品待辦清單 ProductBacklog</div>
                    <div className="tag _margin">優先度高</div>
                    <div className="wrap">
                        <Items
                            content={data[0].content}
                            point={data[0].point}
                        />
                        <Items
                            content={data[1].content}
                            point={data[1].point}
                        />
                        <Items
                            content={data[2].content}
                            point={data[2].point}
                        /><Items
                            content={data[3].content}
                            point={data[3].point}
                        />
                    </div>
                    <div className="tag">優先度低</div>
                </div>
                <div className="answer">
                    <div className="title">開發 A 組的短衝辦清單</div>
                    <div className="tag _margin">20 點 / 5 人</div>
                    <div className="blocks"></div>
                    <div className="blocks"></div>
                    <div className="blocks"></div>
                    <div className="blocks"></div>
                    <div className="tag">20 點 / 5 人</div>
                </div>
            </div>
        </div>
    )
}

export default C7