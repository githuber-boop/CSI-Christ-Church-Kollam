import React from 'react'
import Hero from './components/Hero'
import ChurchHistory from './components/ChurchHistory'
import { Suspense } from 'react';
import Loading from './components/Loading';

const App = () => {
  return (
    <Suspense fallback={<Loading />}>

      <div>
        <Hero/>
        <ChurchHistory/>
      </div>
    
    </Suspense>

  )
}

export default App