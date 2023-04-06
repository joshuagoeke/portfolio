import {Link} from 'react-router-dom'
import './index.scss';

const Home = () =>{

    return (
      <div className="container home-page">
        <div className="text-zone">
            <h1>Hi! <br/>I'm Josh. And I make things.</h1>
            <h2>Web Developer / Data Analyst / Math Educator</h2>
            <Link to="/contact" className='flat-button'>CONTACT ME</Link>
        </div>      
      </div>
    )
}
export default Home;