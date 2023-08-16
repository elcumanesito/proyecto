/* eslint-disable react/prop-types */

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

function Card({ city, type, rating, title, photo }) {
  return (
    <div className="cards">
      <h1 style={{ display: 'none' }}>{city}</h1>
      <img className="imgCards" src={photo} alt={title} />
      <div className="yaQuieroTerminarEstoPorfavorAuxilio">
        <p className="pCards">{type}</p>
        <p className="bolt pRating">
          <FontAwesomeIcon icon={faStar} style={{ color: '#ff2949' }} />
          {rating}
        </p>
      </div>
      <p className="bolt pTitle">{title}</p>
    </div>
  );
}

export default Card;
