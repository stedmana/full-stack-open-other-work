import React from 'react'

const Hello = (props) => {  
  return (    
    <div>      
      <p>Hello {props.name} you appear to be {props.age}</p>    
    </div>  
  )
}

const Footer = () => {
  return (
    <div>
      greeting app created by <a href="https://github.com/mluukkai">mluukkai</a>
    </div>
  )
}

const App = () => {
  return (
    <>  
      <h1>Greetings</h1>
      <Hello name="george" age={60+19}/> 
      <Footer />
    </>
  )
}

export default App