import React, { useEffect, useState } from 'react';
import Header from '../../Components/Header/Header';
import '../card/index.css';
import { useNavigate, useParams } from 'react-router-dom';
import http from '../../utils/axios';

const Card = () => {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate('')
  useEffect(() => {
    http.get(`countries/${slug}`)
      .then(res => {
        console.log(res.data);
        setProduct(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, [slug]);
  function handleback(){
    navigate('/')
  }

  return (
    <div>
      <Header />
      <div className="conta">
        <div className="cards-page">
          <div className="backbtn">
            <button onClick={handleback}><i className="fas fa-arrow-left"></i> Back</button>
          </div>
       
          {product ? (
            <div className="cards-page-main">
              <div className="cards-img">
                {product.flags && product.flags.png ? (
                  <img src={product.flags.png} alt={product.name?.common} />
                ) : (
                  <p>No flag image available</p>
                )}
              </div>
              <div className='cards-par'>
                <h1>{product.name?.common || 'Country Name'}</h1>
                <div className="fff-df">
                  <div className="fff">
                    <p>Native Name :<span>{product.name?.nativeName || 'N/A'}</span></p>
                    <p>Population :<span>{product.population || 'N/A'}</span></p>
                    <p>Region :<span>{product.region || 'N/A'}</span></p>
                    <p>Sub Region :<span>{product.subregion }</span></p>
                    <p>Capital :<span>{product.capital || 'N/A'}</span></p>
                  </div>
                  <div className="ff">
                    <p>Top Level Domain :<span>{product.topLevelDomain?.[0] || 'N/A'}</span></p>
                    <p>Currencies :<span>{product.currencies}</span></p>
                    <p>Languages :<span>{product.languages}</span></p>
                  </div>
                </div>
                <div className="bottom-par">
                <p>Border Countries:</p>
                  <ul className="border-list">
                    {product.borders.length > 0 ? 
                      product.borders.map((border, index) => (
                        <li key={index} className="border-item">
                          {border.common}
                        </li>
                      )) 
                      : 
                      <li>N/A</li>
                    }
                  </ul>
                </div>
              </div>
            </div>
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
}

export default Card;
