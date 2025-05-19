import { Link } from 'react-router-dom'

const About = () => {
    return (
        <div className='w-full flex flex-col justify-center items-center min-h-screen'>
            <h1>ℹ️ About Page</h1>
            <p>This is a React frontend served by a Go backend using Echo.</p>
            <Link to="/">Back to Home</Link>
        </div>
    )
}

export default About

