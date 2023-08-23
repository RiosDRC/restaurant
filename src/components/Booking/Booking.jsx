import React, { useContext, useEffect, useState } from 'react'
import './Booking.css'
import { Context } from '../../context/Context'
import { MdOutlineRestaurantMenu } from "react-icons/md"

const Booking = () => {
    const { setIsBookingVisible } = useContext(Context);
    const [ reservation, setReservation ] = useState({date: '', time: ''});
    const [ available ,setAvailable ] = useState(false);
    const [ message, setMessage ] = useState('Select Date and Time');

    const handleTime = (time) => {
        setReservation(prev => ({...prev, time: time}))
    }

    const handleDate = (date) => {
        console.log(date)
        setReservation(prev => ({...prev, date: date}))
    }

    function getMinDate() {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, "0");
        const day = String(today.getDate()).padStart(2, "0");
        return `${year}-${month}-${day}`;
      }

    useEffect(() => {
        if (reservation.time !== '') {
            const SelectedDate = new Date(reservation.date)
            const dayOfWeek = SelectedDate.getDay();

            const [ hours, minutes ] = reservation.time.split(':')
            let notValid = ['02', '03', '04', '05', '06', '07', '08', '09'];

            if (dayOfWeek === 5 || dayOfWeek === 6) {
                notValid = ['03', '04', '05', '06', '07', '08', '09'];
            }

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

    useEffect(() => {
        if (available) {
            setMessage('available')
        } else if (reservation.date !== '' && reservation.time !== '' && !available) {
            setMessage('Not available')
        } else if (reservation.date !== '' && reservation.time === '') {
            setMessage('Select Time')
        } else if (reservation.date === '' && reservation.time !== '') {
            setMessage('Select Date')
        } else {
            setMessage('Select Date and Time')
        }
    }, [reservation, available])

  return (
    <div className='app__booking slide-bottom'>
        <MdOutlineRestaurantMenu  className='close' onClick={() => setIsBookingVisible(prev => !prev)} />
        <div className="app__booking-content">
            <h3 className="headtext__cormorant">Opening Hours</h3>
            <p className="p__opensans">Mon - Fri: 10:00 A.M. - 02:00 A.M.</p>
            <p className="p__opensans">Sat - Sun: 10:00 A.M. - 03:00 A.M.</p>

            <form onSubmit={e => e.preventDefault()}>
                <input type="date" value={reservation.date} required name='date' onChange={e => handleDate(e.target.value)} min={getMinDate()}/>
                <input type="time" required value={reservation.time} onChange={e => handleTime(e.target.value)} step='900'/>
                <h5>{message}</h5>
                <button disabled className='custom__button'>Book</button>
                <h5>Please Log In Before Continuing</h5>
            </form>
        </div>
    </div>
  )
}

export default Booking