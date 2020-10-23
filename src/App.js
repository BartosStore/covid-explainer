import React from 'react';

import Overview from './component/Overview';
import './App.css';
import DailyIncrement from './daily_increment.png';

function App() {
  return (
    <div className="App">
      <header>
        <div className="navbar bg-light">
          <div className="container app-header">
            <h3>Covid Explainer</h3>
            <button className="btn btn-info">About</button>
          </div>
        </div>
      </header>

      <main className="bg-white">
        <div className="container">
          <div className="row">
            <h2>Covid Explainer</h2>
            <p>Tento web byl sestaven za účelem servírování dat o Covidu bez emocí, bez zkreslení a s výhledem do budoucna na základě reprodukčního čísla.</p>
          </div>

          <Overview />

          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-header">
                  <p>Denní přírůstek s odhadem vývoje podle R</p>
                </div>
                <div className="card-body">
                  <img src={DailyIncrement} className="responsive" alt="Daily increment" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-light">
        <div className="container footer-content">
          <span className="text-muted"><i>Pro pravdivé zprávy bez emocí a zkreslení</i></span>
        </div>
      </footer>
    </div>
  );
}

export default App;
