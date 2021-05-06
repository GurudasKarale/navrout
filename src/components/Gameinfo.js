import {Gameinfodata}  from './Gameinfodata';
import React, { useState } from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa'
import './Gameinfo.css'
import { Link } from 'react-router-dom';


function Gameinfo(){

    const [game, setGame] = useState(Gameinfodata)
    const [pow,setPow] = useState(0);

  
    const { powername,powers } = game[pow]

    return (
        <section className="section">
          <div className="title">
            <h2>Agent</h2>
            <div className="underline"></div>
          </div>
          <div className="games-center">
            {/* btn container */}
            <div ><img className="gameimg" src={process.env.PUBLIC_URL + '/raze.jpg'} /></div>
            <div>
            <div className="btn-container">
              {game.map((item, index) => {
                return (
                  <button
                    key={item.id}
                    onClick={() => setPow(index)}
                    className={`game-btn ${index === pow && 'active-btn'}`}
                  >
                    {item.powername}
                  </button>
                )
              })}
            </div>
            {/* power info */}
            <article className="game-info">
              
              
              {powers.map((powr, index) => {
                return (
                  <div key={index} className="game-desc">
                    <FaAngleDoubleRight className="game-icon"></FaAngleDoubleRight>
                    <p>{powr}</p>
                  </div>
                )
              })}
            </article>
          </div>
          </div>
          <Link to='/' style={{ textDecoration: 'none' }}>
          <button type="button" className="btn">
            Back To Home
          </button>
          </Link>
        </section>
      )

}

export default Gameinfo;