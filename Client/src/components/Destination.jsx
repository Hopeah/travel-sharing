import React from 'react'
import { SlLocationPin } from 'react-icons/sl'

function Destination(props) {
    return (
        <div>
            <div className='photo-container'>
                <img className='photo' src={`${props.imageUrl}`} />
            </div>
            <div>
                <SlLocationPin size={14}/>
                <span>{props.location}</span>
                <a href={`${props.googleMapsUrl}`}>View on Google Maps</a>
            </div>
            <h1>{props.title}</h1>
            <span className='bold'>{props.startDate} - {props.endDate}</span>
            <p>{props.description}</p>
        </div>
    )
}

export default Destination