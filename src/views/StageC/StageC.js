import React, { useContext, useState } from 'react'
import stageContext from '../../context/stageContext'
import WhiteBlock from '../../components/WhiteBlock/WhiteBlock'
import Bug from '../../components/Bug/Bug.js'
import Button from '../../components/Button/Button'
import './StageC.scss'
import '../../styles/global.js'

const StageC = () => {
    const { userName } = useContext(stageContext)
    const [page, setPage] = useState(1)
    const [eyeLook, setEyeLook] = useState(false)

    return (
        <div className="StageC">
            {page < 7 && (
                <Bug
                    position={'leftBottom'}
                    color={'#ebb221'}
                    smile={eyeLook}
                    eyeColor={'#e14040'}
                    look={eyeLook}
                />
            )}
            {4 <= page && page < 7 && (
                <Bug
                    position={'leftTop'}
                    color={'#cccccc'}
                    smile={eyeLook}
                    eyeColor={'#0d0d0d'}
                    look={eyeLook}
                />
            )}
            {4 <= page && page < 7 && (
                <Bug
                    position={'rightTop'}
                    color={'#89c2ce'}
                    smile={eyeLook}
                    eyeColor={'#0d0d0d'}
                    look={eyeLook}
                />
            )}
            {2 <= page && page < 7 && (
                <Bug
                    position={'rightBottom'}
                    color={'#e14040'}
                    smile={eyeLook}
                    eyeColor={'#3492d5'}
                    look={eyeLook}
                />
            )}
            <WhiteBlock
                button={
                    <Button
                        arrow
                        color={'#3492d5'}
                        onClick={() => {
                            setPage(page + 1)
                        }}
                    />
                }
            >
                <div className="textContainer">
                    {page === 1 && (
                        <>
                            <p>產品待辦清單好了之後～</p>
                            <p>我們來召集 Scrum Master 和開發團隊</p>
                            <p>
                                共同召開
                                <span> 短衝規劃會議 Sprint Planning </span>
                            </p>
                            <p>短衝即是一個迭代，具有固定時間限制</p>
                            <p>
                                我們會在這個會議中，決定要完哪些工作事項來達到商業需求
                            </p>
                            <p>
                                列出<span> 短衝待辦清單 Sprint Backlog </span>
                                並由開發團隊在接下來的產品開發週期裡執行。
                            </p>
                        </>
                    )}
                    {page === 2 && (
                        <>
                            <p>嗨嗨 你是新來的前端{userName}吧！</p>
                            <p>
                                我是這次的 Scrum Master
                                小捷，我的工作主要是促成開發團隊成員協作、引導團隊進行自省會議
                            </p>
                            <p>提升團隊成員對 Scrum 的瞭解</p>
                        </>
                    )}
                    {page === 3 && (
                        <>
                            <p>
                                目前我們團隊一次 Sprint 週期是兩週的時間，
                                依照我的觀察～
                            </p>
                            <p>
                                目前團隊可以負擔的點數 Sprint Point 大約是 20
                                點左右。
                            </p>
                        </>
                    )}
                    {page === 4 && (
                        <>
                            <p>目前我們團隊一次 Sprint 週期是兩週的時間，</p>
                            <p>依照我的觀察～</p>
                            <p>
                                目前團隊可以負擔的點數 Sprint Point 大約是 20
                                點左右。
                            </p>
                            <p>這兩位是小斯和小廣，是我們開發團隊的成員唷！</p>
                        </>
                    )}
                    {page ===5 && (<>
                      <p>新來的！</p>
                      <p>你應該不知道點數是什麼意思吧哈哈</p>
                      <p>我來跟你介紹一下吧～</p>
                      <p>Sprint Point 目的是為了衡量速度</p>
                      <p>是用大概花費的時間預估出的相對點數</p>
                    </>)}
                    {page===6 && (<>
                      <p>沒錯！如果小斯哥說的</p>
                      <p>我這邊已經把剛剛討論好的點數標上去囉</p>
                      <p>你來練習把任務排到短衝待辦清單吧！</p>
                      <p>By the way</p>
                      <p>我們平常管理任務是使用<span> Jira </span>這套軟體</p>
                      <p>你有時間記得先去註冊和熟悉唷</p>
                    </>)}
                </div>
            </WhiteBlock>
        </div>
    )
}

export default StageC
