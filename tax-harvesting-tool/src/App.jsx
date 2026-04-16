import { useEffect, useState } from 'react'


import { getHolding } from '../src/Services/HoldingAPI';
import { getCapital } from './Services/CapitalAPI';
import Dashboard from './Pages/Dashboard';

function App() {




  return (
    <>

      <Dashboard />

    </>
  )
}

export default App
