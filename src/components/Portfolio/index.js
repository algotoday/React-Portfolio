import React from 'react';

import Chesme from "../../assets/images/Chesme.png";
import NoteTaker from "../../assets/images/Note-Taker.png";
import Caesarskitchen from "../../assets/images/CaesarsKitchen.png";
import TeamProfileGenerator from "../../assets/images/Team Profile Generator.png";
import WeatherDashboard from "../../assets/images/Weather Dashboard.png";
import WorkDayScheduler from "../../assets/images/Work Day Scheduler 2.png";

function Portfolio() {
  return (
    <section class="portfolio">

      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 g-4">
        <div class="col">
          <div class="card">
            <img
              src={Chesme}
              alt="Chesme"
              class="card-img-top"
            />
            <div class="card-body">

              <a href="https://github.com/algotoday/chesme" target="_blank" rel="noreferrer">
                <button>GitHub</button>
              </a>
              <a href="https://github.com/algotoday/chesme" target="_blank" rel="noreferrer">
                <button>Website</button>
              </a>
            </div>
          </div>
        </div>


        <div class="col">
          <div class="card">
            <img
              src={NoteTaker}
              alt="Note-Taker"
              class="card-img-top"
            />
            <div class="card-body">
              <a href="https://github.com/algotoday/Note-Taker" target="_blank" rel="noreferrer">
                <button>GitHub</button>
              </a>
              <a href="https://secret-plateau-89761.herokuapp.com/" target="_blank" rel="noreferrer">
                <button>Website</button>
              </a>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card">
            <img
              src={Caesarskitchen}
              alt="Caesar's Kitchen"
              class="card-img-top"
            />
            <div class="card-body">
              <a href="https://github.com/algotoday/Newck-Project" target="_blank" rel="noreferrer">
                <button>GitHub</button>
              </a>
              <a href="https://ck-shopping.herokuapp.com/" target="_blank" rel="noreferrer">
                <button>Website</button>
              </a>
            </div>
          </div>
        </div>


        <div class="col">
          <div class="card">
            <img
              src={TeamProfileGenerator}
              alt="Team Profile Generator"
              class="card-img-top"
            />
            <div class="card-body">
              <a href="https://github.com/algotoday/Team-Profile-Generator" target="_blank" rel="noreferrer">
                <button>GitHub</button>
              </a>
              <a href="https://github.com/algotoday/Team-Profile-Generator" target="_blank" rel="noreferrer">
                <button>Website</button>
              </a>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card">
            <img
              src={WeatherDashboard}
              alt="Weather Dashboard"
              class="card-img-top"
            />
            <div class="card-body">
              <a href="https://github.com/algotoday/Weather-Dashboard" target="_blank" rel="noreferrer">
                <button>GitHub</button>
              </a>
              <a href="https://github.com/algotoday/Weather-Dashboard" target="_blank" rel="noreferrer">
                <button>Website</button>
              </a>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card">
            <img
              src={WorkDayScheduler}
              alt="Work Day Scheduler"
              class="card-img-top"
            />
            <div class="card-body">
              <a href="https://github.com/algotoday/Work-Day-Scheduler" target="_blank" rel="noreferrer">
                <button>GitHub</button>
              </a>
              <a href="https://algotoday.github.io/Work-Day-Scheduler/" target="_blank" rel="noreferrer">
                <button>Website</button>
              </a>
            </div>
          </div>
        </div>


      </div>
    </section>


  );
}

export default Portfolio;
