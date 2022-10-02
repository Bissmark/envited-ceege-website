import { Link } from "react-router-dom";
import './Create.css'

const Create = () => {
    return (
        <div>
            <img className='birthday' src={require("../images/event.png")} alt="header screenshot"></img>
            <h1>Create your event</h1>
            <form>
                <label>
                    My event is called:
                    <input type='text' name='name' placeholder="Event Name"/>
                </label>
                <label>
                    Hosts name:
                    <input type='text' name='name' placeholder="Host Name"/>
                </label>
                <label>
                    It happening on:
                    <input type='date'/>
                </label>
                <label>
                    It starts at:
                    <input type='time'/>
                </label>
                <label>
                    It ends at:
                    <input type='time'/>
                </label>
                <label>
                    Its happening at:
                    <input type='text' placeholder="Location"/>
                </label>
            </form>
            <Link to="/event">
                <button>Next</button>    
            </Link>
        </div>
    );
}

export default Create;