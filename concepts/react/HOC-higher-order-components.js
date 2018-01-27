// Higher Order Component (HOC) - 一個會回傳另一個component的componet https://www.udemy.com/react-2nd-edition/learn/v4/t/lecture/7900114?start=0
// Reuse code
// Render hijacking
// Prop manipulation
// Abstract state

import React from 'react'
import ReactDOM from 'react-dom'

const Info = (props) => ( // 被回傳的Component
  <div>
    <h1>Info</h1>
    <p>The info is: {props.info}</p> {/**這邊我們需要一個prop.into，我們會從HOC傳過來*/}
  </div>
)

// 這是一個HOC...
const withAdminWarning = (WrappedComponent) => { // 參數是任何的Component
  return (props) => (
    <div>
      {props.isAdmin && <p>This is private info. Please don't share!</p>}
      <WrappedComponent {...props} /> {/** [重要！] 這邊會把props繼續傳下去給WrappedComponent */}
    </div>
  )
}

const AdminInfo = withAdminWarning(Info)

ReactDOM.render(<AdminInfo isAdmin={true} info='There are the details' />, document.getElementById('app'))
