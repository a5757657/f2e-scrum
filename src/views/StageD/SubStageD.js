const D1 = () => {
  return (
    <div className='D1'>
      <p>等等等等等</p>
      <p>你都還不知道什麼是 Sprint 吧！</p>
      <p>讓我先為你介紹一下～仔細聽好唷，等等會考考你!</p>
    </div>
  )
}

const D2 = () => {
  return (
    <div className='D2'>
      <p>Sprint 是一個短衝，</p>
      <p>開發團隊會在這期間執行開發。</p>
      <p className='mt'>在這段期間內，開發團隊舉辦</p>
      <p><span className='redColor'>每日站立會議 Daily Scrum </span>追蹤成員間的工作狀況。</p>
    </div>
  )
}

const D3 = () => {
  return (
    <div className='D3'>
      <p>除了每日站立會議</p>
      <p>在 Sprint 結束後也會有：</p>
      <p className='mt'>短衝檢視會議 SprintReview 與</p>
      <p>短衝自省會議 Sprint Retrospective</p>
    </div>
  )
}

const D4 = () => {
  return (
    <div className='D4'>
      <p className='redColor'>每日站立會議 Daily Scrum</p>
      <p>每天都要進行的會議，以 15 分鐘為限制： </p>
      <p>・昨天為團隊的短衝目標 Sprint Goal)做了那些進度</p>
      <p>・今天我會如何準備來幫助團隊達到短衝目標 </p>
      <p>・過程中有遇到什麼問題、難題</p>
      <p className='mt'>透過團隊分享，追蹤大家的工作狀況。</p>
    </div>
  )
}

const D5 = () => {
  // 短衝檢視會議 Sprint Review 用來檢視該次短衝增量的成果， 以蒐集相關的回饋數據或意見。
  return (
    <div className='D5'>
      <p className='redColor'>短衝檢視會議 Sprint Review</p>
      <p className='mt'>用來檢視該次短衝增量的成果，</p>
      <p>以蒐集相關的回饋數據或意見。</p>
    </div>
  )
}

const D6 = () => {
  return (
    <div className='D6'>
      <p className='redColor'>短衝自省會議 Sprint Retrospective </p>
      <p>團隊在自省會議裡， </p>
      <p>會共同回顧該短衝歷程發生的事情： </p>
      <p>・好的地方・可以改進的地方 </p>
      <p>・如何維持我們已有的成功經驗 </p>
      <p className='mt'>優化工作流程、讓團隊有變得更好的機會。 </p>
      <p>推薦工具：Confluence</p>
    </div>
  )
}

export { D1, D2, D3, D4, D5, D6 }