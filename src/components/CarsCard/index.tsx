import "./styles.css";
import carImg from "../../assets/car-card 1.png";

export default function CarsCard() {
  return (
    <div className="cars-card">
      <img src={carImg} alt="Car" />
      <h3>Lorem ipsum dolor</h3>
    </div>
  );
}
