import { FaBed, FaTicketAlt, FaUtensils, FaBus, FaTaxi, FaFilm } from 'react-icons/fa';
import './Style/PrepareForTrip.css';

const PrepareForTrip = () => {
  return (
    <div className="prepare-container">
      <h3 className="prepare-title">PREPARE FOR YOUR TRIP</h3>
      <div className="icons-container">
        <div className="icon-item pink">
          <FaBed className="icon" />
          <span>Hotel</span>
        </div>
        <div className="icon-item orange">
          <FaTicketAlt className="icon" />
          <span>Attractions</span>
        </div>
        <div className="icon-item green">
          <FaUtensils className="icon" />
          <span>Eats</span>
        </div>
        <div className="icon-item yellow">
          <FaBus className="icon" />
          <span>Commute</span>
        </div>
        <div className="icon-item blue">
          <FaTaxi className="icon" />
          <span>Taxi</span>
        </div>
        <div className="icon-item lightgreen">
          <FaFilm className="icon" />
          <span>Movies</span>
        </div>
      </div>
    </div>
  );
};

export default PrepareForTrip;
