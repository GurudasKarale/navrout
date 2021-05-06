import './Homecontent.css';
import {Homecontentdata} from './Homecontentdata';
import { Link } from 'react-router-dom';

function Homecontent(){


    return(

     <>   
     <div className='tex'><h1> <u>Agents</u> </h1></div> 
           
    <section className='movies'>
    
      {Homecontentdata.map((dat) => {
        

        return (
          <Link  to='/gameinfo' className='movie'>
            <article>
              <img src={dat.image} alt={dat.title} />
              <div className='movie-info'>
                <h4 className='title'>{dat.title}</h4>
                <p>{dat.info}</p>
              </div>
            </article>
          </Link>
        )
      })}
    </section>
    </>
    );


} 

export default Homecontent;