import { Link } from 'react-router-dom';
import './Home.css'

const Home = () => {
    return (
        <div>
            <div className='top-text'>
                <div className='heading'>
                    <span className='imagine'>Imagine if</span>
                    <span className='snapchat'>Snapchat</span>
                    <span className='imagine2'>had events.</span>
                </div>
                <h2 className='host-share'>Easily host and share events with your friends across any social media.</h2>
            </div>
            <div>
                <img className='movie-image' src={require("../images/image.webp")} alt="header screenshot"></img>
                <Link className='button' to="/create">
                    <button>🎉 Create my event</button>    
                </Link>
                
            </div>
        </div>
    );
}

export default Home;

<img class="screenshot" src="/static/media/header-screenshot.a1de4d4628f9e8cc301d.webp" alt="header screenshot"></img>