import { HiOutlineLocationMarker } from 'react-icons/hi'
import { IoCalendarOutline } from 'react-icons/io5'
import './Event.css'

const Event = () => {
    return (
        <div>
            <div>
                <img className="birthday1" src={require("../images/Birthdaycake.png")}></img>
            </div>
            <div className='container'>
                <div>
                    <h1 className='title'>Birthday Bash</h1>
                    <p className='hosted'>Hosted by <strong>Elysia</strong></p>
                </div>
                <div className='date-info'>
                    <div className='date'>
                        <IoCalendarOutline className='date-icon' />
                        <div className='date-info-block'>
                            <span className='date-1'>18 August 6:00pm</span>
                            <span className='date-2'>to <strong>19 August 1:00pm</strong> UTC +10</span>    
                        </div>    
                    </div>
                </div>
                <div className='location-info'>
                    <div className='location'>
                        <HiOutlineLocationMarker className='location-icon' />
                        <div className='info-block'>
                            <span className='info-1'>Street name</span>
                            <span className='info-2'>Suburb, State, Postcode</span>
                        </div>    
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default Event;