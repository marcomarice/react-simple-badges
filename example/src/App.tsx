import React from 'react'

import Badge, {ExpressjsBadge, DigitalOceanBadge, ReactBadge} from 'react-clean-badges'

const App = () => {
  return (
    <>
      <Badge.Nodejs style={{width: 200}} />
      <Badge.JavaScript />
      <Badge.TypeScript style={{borderRadius: 10}} />
      <Badge.React />
      <ReactBadge />
      <ExpressjsBadge style={{padding: 15}} />
      <DigitalOceanBadge />
    </>
  )
}

export default App
