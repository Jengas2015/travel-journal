import Pin from '../assets/google-pin.png'

export default function Card(props) {
    return (
        <div className="card">
            <img className="photos" src={props.item.imageUrl} />

            <div className="card--data">
                <img className='googlePin' src={Pin} />
                <h3 className='location'>{props.item.location}</h3> <a className='googleMapsLink' href={props.item.googleMapsUrl}>View on Google Maps</a>
                <h1 className='title'>{props.item.title}</h1>
                <span className='dates'>{props.item.startDate}-{props.item.endDate}</span>
                <p className='description'>{props.item.description}</p>
            </div>
            <hr className='divider'></hr>
        </div>
    )
}