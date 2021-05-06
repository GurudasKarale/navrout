import './Loginform.css';


function Loginform(){



    return(

        <div className='conta'>
        <div className='container'>

            <input type='text' className='textt' placeholder='Enter email address'></input>
            <input type='password' className='textt' placeholder='Enter password'></input>
            <button type='submit' className='submt'>Submit</button>

        </div>
        </div>

    );

}
export default Loginform;