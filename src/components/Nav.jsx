import Globe from '../assets/globe.png'

export default function Nav() {
    return (
        <nav className="navbar">
            <img className='globe' src={Globe} />
            <p>My Travel Journal</p>
        </nav>
    )
}