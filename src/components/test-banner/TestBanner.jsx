import React, { useRef, useState, useEffect } from 'react'
import { Routing } from '../../assets/icons/Routing'
import { ArrowRight } from '../../assets/icons/ArrowRight'

const TestBanner = ({ show }) => {
  const [height, setHeight] = useState('0px')
  const contentRef = useRef(null)

  useEffect(() => {
    if (show) {
      setHeight(`${contentRef.current.scrollHeight}px`)
    } else {
      setHeight('0px')
    }
  }, [show])

  return (
    <div
      className={`overflow-hidden bg-danger transition-all duration-500 ease-in-out`}
      style={{ height }}
    >
      <div ref={contentRef} className='px-3 pt-2 pb-4 text-white'>
        <h4 className='mb-3 font-medium'>Test mode</h4>
        <p className='mb-2 font-normal text-sm inline-block'>
          You’re using test data. No real transactions will be processed.
          <a className='underline flex items-center gap-2' href='#'>
            Learn more about test mode
            <span>
              <Routing />
            </span>
          </a>
        </p>
        <p className='font-medium flex items-center gap-1.5'>
          Complete verification
          <span>
            <ArrowRight />
          </span>
        </p>
      </div>
    </div>
  )
}

export default TestBanner
