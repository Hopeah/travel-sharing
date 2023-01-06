import React from 'react'
import Navbar from './components/Navbar'
import Destination from './components/Destination'
import data from "./data"

function App() {
  const travelData = data.map(item => {
    return(
      <Destination
        key={item.id}
        {...item}
      />
    )
  })

  return (
    <div>
      <Navbar />
      {travelData}
    </div>
  )
}

export default App