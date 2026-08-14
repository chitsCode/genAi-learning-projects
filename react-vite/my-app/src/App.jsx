import { useState } from 'react'
import {Fragment} from 'react'
import React from 'react'
import Welcome from './Welcome.jsx'
import Form from './Form.jsx'
import Example from './Example.jsx'
import Child from './child.jsx'

function App() {
  const items = ['Item 1', 'Item 2', 'Item 3']

  return (
    <React.Fragment>
      <Child online={false} /> 
      {items.map((item) => (
        <React.Fragment key={item}>
          <h1>{item}</h1>
        </React.Fragment> 
      ))}
      <Welcome name="Alice" />
      <Welcome name="Bob" />
      < Form />
      <Example  isloggedIn={0} />
      <Child msg={10 + 20} />
    </React.Fragment>
  )
}

export default App
