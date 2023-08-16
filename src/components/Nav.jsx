/* eslint-disable react/prop-types */

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faLocationDot } from '@fortawesome/free-solid-svg-icons';

function Nav({
  
  handleModalClose,
  handleCityClick,
  totalGuests,
  handleDecrement1,
  handleIncrement1,
  contador1,
  handleDecrement2,
  handleIncrement2,
  contador2,
}) {
  return (
    <>
      <div className="modalBackground" onClick={handleModalClose}></div>
      <div className="modalContainer">
        <div className="modalM">
          <div className="dM dM1">
            <div className="m1">
              <p className="bolt pM1">LOCATION</p>
              <p className="grisesito pLocation">
                Anywhere, Finland
              </p>
            </div>
            <p
              className="bolt pCity"
              onClick={() => handleCityClick('Helsinki')}
            >
              <FontAwesomeIcon icon={faLocationDot} />
              Helsinki, Finland
            </p>
            <p
              className="bolt pCity"
              onClick={() => handleCityClick('Turku')}
            >
              <FontAwesomeIcon icon={faLocationDot} />
              Turku, Finland
            </p>
            <p
              className="bolt pCity"
              onClick={() => handleCityClick('Oulu')}
            >
              <FontAwesomeIcon icon={faLocationDot} />
              Oulu, Finland
            </p>
            <p
              className="bolt pCity"
              onClick={() => handleCityClick('Vaasa')}
            >
              <FontAwesomeIcon icon={faLocationDot} />
              Vaasa, Finland
            </p>
          </div>
          <div className="dM dM2">
            <div className="m2">
              <p className="bolt pM2">GUESTS</p>
              <p className="pGuests">{totalGuests}</p>
            </div>
            <p className="subeloSolo20  bolt">Adults</p>
            <p className="sube grisesito">Ages 13 or above</p>
            <div className="sube contadores">
              <button onClick={handleDecrement1}>-</button>
              <p>{contador1}</p>
              <button onClick={handleIncrement1}>+</button>
            </div>
            <p className="sube bolt">Children</p>
            <p className="sube grisesito"> Ages 2-12</p>
            <div className="sube contadores">
              <button onClick={handleDecrement2}>-</button>
              <p>{contador2}</p>
              <button onClick={handleIncrement2}>+</button>
            </div>
          </div>
          <div className="dM dM3">
            <div className="m3">
              <div className="search">
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  style={{ color: '#ffffff' }}
                />
                <p>Search</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Nav;
