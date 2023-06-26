import React, {useEffect} from 'react'

//Imported Destinations Images
import paris from '../../assets/paris.jpg'
import newyork from '../../assets/newyork.jpg'
import dubai from '../../assets/dubai.jpg'
import london from '../../assets/london.jpg'

//Imported Travelers Images
import traveler1 from '../../assets/user(1).jpg'
import traveler2 from '../../assets/user(2).jpg'
import traveler3 from '../../assets/user(4).jpg'
import traveler4 from '../../assets/user(3).jpg'

//import AOS ===========>
import Aos from 'aos'
import 'aos/dist/aos.css'

const travelers = [
    {
        id: 1,
        destinationImage: paris,
        travelerImage: traveler1,
        travelerName: 'Lisa'
    },

    {
        id: 2,
        destinationImage: newyork,
        travelerImage: traveler2,
        travelerName: 'Kim'
    },

    {
        id: 3,
        destinationImage: dubai,
        travelerImage: traveler3,
        travelerName: 'Daisy'
    },

    {
        id: 4,
        destinationImage: london,
        travelerImage: traveler4,
        travelerName: 'Max'
    },
]

const Travelers = () => {
    //UseEffect to set animation ======>
  useEffect(() => {
    Aos.init({duration: 2000})
  }, [])

    return (
        <div className='travelers container section'>
            <div className="sectionContainer">
                <h2 data-aos='fade-down' data-aos-duration='2500'>Top travelers of this month!</h2>

                <div className='travlersContainer grid'>
                    {
                        travelers.map(({id, destinationImage, travelerImage, travelerName }) => {
                            return (
                                <div data-aos='fade-up' data-aos-duration='2500' key={id} className="singleTraveler">
                                    <img src={destinationImage} className='destinationImage' />
                                        <div className="travelerDetails">
                                            <div className="travelerPicture">
                                                 <img src={travelerImage} className='travelerImage' />
                                            </div>
                                            <div className="travelerName">
                                                <span>{travelerName}</span>
                                            </div>
                                        </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Travelers