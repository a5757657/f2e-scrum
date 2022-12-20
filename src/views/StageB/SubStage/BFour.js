import React, { useContext, useState, useEffect } from 'react'
import stageContext from '../../../context/stageContext'
import Bug from '../../../components/Bug/Bug'
import './BFour.scss'
import OptionSpace from '../OptionSpace'

const BFour = () => {
    const { userName, setLayoutColor, setStage } = useContext(stageContext)
    useEffect(() => {
        setLayoutColor('B1')
    }, [])

    return (
        <div className='BFour'>
            <Bug position={"leftTop"} color={"#EBB221"} look={true} />
            <div className='questionContainer'>
                <p>請大中天把需求放到產品待辦清單，並調整待辦的優先度順序。</p>
                <p>我們公司也推薦使用 Jira 來做任務的管理呢!</p>
            </div>
            <div className='answerContainer'>
                <div className="title">
                    <p>產品待辦清單 ProductBacklog</p>
                </div>
                <div className='optionContainer'>
                    <p>優先度高</p>
                    {Array(4).fill(true).map((_, i) => <OptionSpace key={i} />)}
                    <p>優先度低</p>
                </div>
            </div>
        </div>
    )
}

export default BFour