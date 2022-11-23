import React from 'react'
import './BFour.scss'

const BFour = () => {
    return (
        <div className='BFour'>
            <div className='questionContainer'>
                <p>請大中天把需求放到產品待辦清單，並調整待辦的優先度順序。</p>
                <p>我們公司也推薦使用 Jira 來做任務的管理呢!</p>
            </div>
            <div className='answerContainer'>
                <div className="title">
                    <p>產品待辦清單 ProductBacklog</p>
                </div>
                <div className='optionSpace'></div>
            </div>
        </div>
    )
}

export default BFour