import React, { useEffect, useState, useMemo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import '../home/index.css';
import Header from '../../Components/Header/Header';
import http from '../../utils/axios.js';
import useDebounce from '../../utils/useDebounce.jsx';

const Home = () => {
  const [card, setCard] = useState([]);
  const [searchQuery, setSearchQuery] = useState(''); 
  const [region, setRegion] = useState(''); 
  const debouncedQuery = useDebounce(searchQuery, 300); 
  const navigate = useNavigate();

 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await http.get(`/countries?limit=15&skip=1`);
        if (response && response.data && response.data.data) {
          setCard(response.data.data); 
        } else {
          console.log(response);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

 
  const filteredCards = useMemo(() => {
    if (!debouncedQuery && !region) {
      return card;
    }
    return card.filter(crds => 
      crds.name.common.toLowerCase().includes(debouncedQuery.toLowerCase()) &&
      (region ? crds.region === region : true)
    );
  }, [debouncedQuery, region, card]);

  
  const handleRegionChange = (event) => {
    setRegion(event.target.value); 
  };

  
  const cardClick = useCallback((slug) => {
    navigate(`/card/${slug}`);
  }, [navigate]);

  return (
    <div>
      <Header />
      <div className="contai">
        <div className="inp-op-df">
          <form className="formaikki">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input 
              type="search" 
              placeholder="Search for a country..." 
              value={searchQuery} 
              onChange={(e) => setSearchQuery(e.target.value)} 
            />
          </form>
          <select onChange={handleRegionChange}>
            <option value="">Filter by Region</option>
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
          {filteredCards.length > 0 ? (
            filteredCards.map((crds, index) => (
              <div
                onClick={() => cardClick(crds.name.slug)}
                className="carding"
                key={index}
              >
                <img src={crds.flags.png} alt={crds.name.common} />
                <div className="carding-par">
                  <br />
                  <h2>{crds.name.common}</h2>
                  <p>Population: <span>{crds.population}</span></p>
                  <p>Region: <span>{crds.region}</span></p>
                  <p>Capital: <span>{crds.capital && crds.capital[0]}</span></p>
                </div>
              </div>
            ))
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
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
