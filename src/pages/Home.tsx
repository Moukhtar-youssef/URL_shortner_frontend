import { Link } from 'react-router-dom'
import URLSubmitter from '../components/UrlSubmitter'

const Home = () => {
    return (
        <div className='w-full flex flex-col items-center justify-center min-h-screen '>
            <h1 >🏠 Home Page</h1>
            <p>Welcome to your URL shortener frontend!</p>
            <URLSubmitter />
            {/* <Link to="/about">Go to About</Link> */}
        </div>
    )
}

export default Home

