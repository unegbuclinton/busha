import './App.css'
import Navbar from './components/navbar/Navbar'
import Button from './components/button/Button'
import { Routing } from './assets/icons/Routing'
import { Tab } from './components/tab/Tab'
import TestBanner from './components/test-banner/TestBanner'
import { useState } from 'react'

function App() {
  const [isChecked, setIsChecked] = useState(false)
  const [activeSidebar, setActiveSidebar] = useState(false)

  return (
    <main className={`h-screen relative ${activeSidebar ? 'overlay' : ''}`}>
      <div>
        <TestBanner show={isChecked} />
        <Navbar
          setIsChecked={setIsChecked}
          isChecked={isChecked}
          setActiveSidebar={setActiveSidebar}
        />
        <section className='p-3'>
          <div className='flex items-center justify-between mb-4'>
            <h3 className='font-bold text-2xl'>Balances</h3>
            <Button>
              <div className='flex gap-2 items-center'>
                <Routing />
                <p className='font-medium'>Move Money</p>
              </div>
            </Button>
          </div>
          <div className='rounded-t-lg border-[#F3F3F3] border py-3 px-2 text-sm'>
            <p className='text-[#666666] text-base'>Total balance</p>
            <p className='text-2xl py-1.5'>$0.00</p>
            <Tab />
            <div className='px-2'>
              {['1', '2', '3'].map((_, index) => (
                <div
                  key={index}
                  className='border border-dashed w-full mt-10 border-light-grey/80'
                ></div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}

export default App
