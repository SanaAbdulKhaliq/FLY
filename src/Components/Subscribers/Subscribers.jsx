import React, {useEffect} from 'react'

//import AOS ===========>
import Aos from 'aos'
import 'aos/dist/aos.css'

const Subscribe = () => {
//UseEffect to set animation ======>
useEffect(() => {
    Aos.init({duration: 2000})
  }, [])

    return (
        <div className='subscribe section'>
            <div data-aos='fade-up' data-aos-duration='2500' className="sectionContainer container">
                <h2>Subscribe Newletters & get Latest News</h2>
                <div className="inputDiv flex">
                    <input type="text" placeholder='Enter Your Email Address' />
                    <button className='btn'>Subscribe</button>
                </div>
            </div>
        </div>
    )
}

export default Subscribe