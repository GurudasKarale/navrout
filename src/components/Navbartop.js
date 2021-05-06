import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbarto (){


    return(

        <div className='loginn'>

                
                <Link to='/login' style={{ textDecoration: 'none' }}>
                <span className='login-txt'>Login</span>
                </Link>
                

        </div>



    );


}

export default Navbarto;