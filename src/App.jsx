// eslint-disable-next-line no-unused-vars
import { useState, useEffect } from 'react';
import './App.css';
import Card from './components/Card';
import Nav from './components/Nav';
import Logo from './img/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import TheSimsBuyMode from './assets/TheSimsBuyMode.mp3';

function App() {
  const [data, setData] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState(null);
  const [contador1, setContador1] = useState(0);
  const [contador2, setContador2] = useState(0);

  const getData = async () => {
    try {
      const res = await fetch('stays.json');
      const resJson = await res.json();
      setData(resJson);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    const audio = new Audio(TheSimsBuyMode);
    audio.play();
  }, []);

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const handleCityClick = (city) => {
    setSelectedCity(city);
  };

  const handleIncrement1 = () => {
    setContador1(contador1 + 1);
  };

  const handleDecrement1 = () => {
    if (contador1 > 0) {
      setContador1(contador1 - 1);
    }
  };

  const handleIncrement2 = () => {
    setContador2(contador2 + 1);
  };

  const handleDecrement2 = () => {
    if (contador2 > 0) {
      setContador2(contador2 - 1);
    }
  };

  const totalGuests = contador1 + contador2;

  const filteredData = data.filter(
    (el) => (!selectedCity || el.city === selectedCity) && el.maxGuests >= totalGuests
  );

  return (
    <div className="container">
      <audio src={TheSimsBuyMode} autoPlay preload="auto" style={{ display: 'none' }} />
      <header className="header">
        <img className="icono" src={Logo} alt="Logo" />
        <div className="bottonesHeader">
          <button className="boton boton1" onClick={handleModalOpen}>
            Anywhere, Finland
          </button>
          <button className="boton boton2" onClick={handleModalOpen}>
            Add guests
          </button>
          <button className="boton boton3">
            <FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: '#ff3d3d' }} />
          </button>
        </div>
      </header>
      <div className="cardsContainer">
        {filteredData.map((el, i) => (
          <Card
            key={i}
            city={el.city}
            type={el.type}
            rating={el.rating}
            title={el.title}
            photo={el.photo}
          />
        ))}
      </div>
      {modalOpen && (
        <Nav
          handleModalOpen={handleModalOpen}
          handleModalClose={handleModalClose}
          handleCityClick={handleCityClick}
          totalGuests={totalGuests}
          handleDecrement1={handleDecrement1}
          handleIncrement1={handleIncrement1}
          contador1={contador1}
          handleDecrement2={handleDecrement2}
          handleIncrement2={handleIncrement2}
          contador2={contador2}
        />
      )}
    </div>
  );
}

export default App;
