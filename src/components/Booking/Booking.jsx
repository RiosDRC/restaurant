import React, { useContext, useEffect, useState } from 'react'
import './Booking.css'
import { Context } from '../../context/Context'

const Booking = () => {
    const { setIsBookingVisible } = useContext(Context);
    const [ reservation, setReservation ] = useState({date: '', time: ''});
    const [ available ,setAvailable ] = useState(false);

    const handleTime = (time) => {
        setReservation(prev => ({...prev, time: time}))
    }

    const handleDate = (date) => {
        setReservation(prev => ({...prev, date: date}))
    }

    useEffect(() => {
        if (reservation.time !== '') {
            const [ hours, minutes ] = reservation.time.split(':')
            const notValid = ['03', '04', '05', '06', '07', '08', '09'];

            if (!notValid.includes(hours)) {
                setAvailable(true)
            } else {
                setAvailable(false)
            }
        }

        if (reservation.date === '' || reservation.time === '') {
            setAvailable(false)
        }
    }, [reservation])

  return (
    <div className='app__booking slide-bottom'>
        <div className='close' onClick={() => setIsBookingVisible(prev => !prev)}>X</div>
        <div className="app__booking-content">
            <h3 className="headtext__cormorant">Opening Hours</h3>
            <p className="p__opensans">Mon - Fri: 10:00 A.M. - 02:00 A.M.</p>
            <p className="p__opensans">Sat - Sun: 10:00 A.M. - 03:00 A.M.</p>

            <form onSubmit={e => e.preventDefault()}>
                <input type="date" value={reservation.date} required name='date' onChange={e => handleDate(e.target.value)}/>
                <input type="time" required value={reservation.time} onChange={e => handleTime(e.target.value)}/>
                <h5>{available ? 'available' : 'not available'}</h5>
                <button disabled className='custom__button'>Book</button>
                <h5>Please Log In Before Continuing</h5>
            </form>
        </div>
    </div>
  )
}

export default Booking