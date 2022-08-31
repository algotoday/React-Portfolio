import React from 'react';
import { Link } from "react-router-dom";
import Portrait from "../../assets/images/Profile.webp";

function Home() {
  return (
    <section className="home my-5">
      <div className="title">
        <Link to="portfolio">
          <button>View Projects</button>
        </Link>
      </div>
      <div className="portrait">
        <img
          src={Portrait}
          alt="self portrait"
        />
      </div>
    </section>
  );
}

export default Home;
