import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import '../home/index.css';
import Header from '../../Components/Header/Header';
import http from '../../utils/axios.js';

const Home = () => {
  const [card, setcard] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    http.get('/countries')
      .then((res) => {
        setcard(res.data.data);
      })
      .catch((err) => {
        console.error(err); 
      });
  }, []);

  
  function cardclick(slug) {
   
    navigate(`/card/${slug}`);
  }

  return (
    <div>
      <Header></Header>
      <div className="conta">
        <div className="inp-op-df">
          <form className='formaikki'>
            <i className="fa-solid fa-magnifying-glass"></i>
            <input type="search" placeholder='Search for a country...' />
          </form>
          <select>
            <option value="Filter by Region">Filter by Region</option>
            <option value="Africa">Africa</option>
            <option value="America">America</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
        </div>
      </div>
      <div className="conta">
        <div className="carding-df">
          {
            card.length > 0 ? (
              card.map((crds, index) => {
                return (
                  <div 
                    onClick={() => cardclick(crds.name.slug)} 
                    className="carding" 
                    key={index}
                  >
                    <img src={crds.flags.png} alt={crds.name.common} /> 
                    <div className="carding-par">
                      <h2>{crds.name.common}</h2> 
                      <p>Population: <span>{crds.population}</span></p>
                      <p>Region: <span>{crds.region}</span></p>
                      <p>Capital: <span>{crds.capital && crds.capital[0]}</span></p> 
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="main">
                <div className="up">
                  <div className="loaders">
                    <div className="loader"></div>
                    <div className="loader"></div>
                    <div className="loader"></div>
                    <div className="loader"></div>
                    <div className="loader"></div>
                    <div className="loader"></div>
                    <div className="loader"></div>
                    <div className="loader"></div>
                    <div className="loader"></div>
                    <div className="loader"></div>
                  </div>
                  <div className="loadersB">
                    <div className="loaderA"><div className="ball0"></div></div>
                    <div className="loaderA"><div className="ball1"></div></div>
                    <div className="loaderA"><div className="ball2"></div></div>
                    <div className="loaderA"><div className="ball3"></div></div>
                    <div className="loaderA"><div className="ball4"></div></div>
                    <div className="loaderA"><div className="ball5"></div></div>
                    <div className="loaderA"><div className="ball6"></div></div>
                    <div className="loaderA"><div className="ball7"></div></div>
                    <div className="loaderA"><div className="ball8"></div></div>
                  </div>
                </div>
              </div>
            )
          }
        </div>
      </div>
    </div>
  );
}

export default Home;
