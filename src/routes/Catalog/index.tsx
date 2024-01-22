import "./styles.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CarsCard from "../../components/CarsCard";
import CommentsCard from "../../components/CommentsCard";

export default function Catalog() {
  return (
    <>
      <Header />
      <main>
        <section className="cars-card-section">
          <div className="cars-container">
            <h2>Venha nos visitar</h2>
            <CarsCard />
            <CarsCard />
          </div>
        </section>
        <section className="comments-card-section">
          <h2>O que estão dizendo</h2>
          <CommentsCard />
          <CommentsCard />
          <CommentsCard />
          <CommentsCard />
          <CommentsCard />
        </section>
      </main>
      <Footer />
    </>
  );
}
