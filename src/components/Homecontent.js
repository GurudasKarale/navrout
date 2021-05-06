import './Homecontent.css';
import {Homecontentdata} from './Homecontentdata';
import { Link } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';

function Homecontent(){


    useEffect(() => {
      
      Aos.init({duration:2000})
    }, []) ;

    return(

     <>   
     <div className='tex'><h1> <u>Agents</u> </h1></div> 
           
    <section className='movies' data-aos='fade-up'>
    
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
