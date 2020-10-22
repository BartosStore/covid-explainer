import React from 'react';
import './App.css';

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

          <div className="row">
            <div className="col-5">
              <div className="card">
                <div className="card-header">
                  Header
                </div>
                <div className="card-body">
                  <div className="card-title">Title</div>
                  <div className="card-subtitle">Subtitle</div>
                  <div className="card-text">text</div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-header">
                  Header
                </div>
                <div className="card-body">
                  <div className="card-title">Title</div>
                  <div className="card-subtitle">Subtitle</div>
                  <div className="card-text">text</div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-header">
                  Header
                </div>
                <div className="card-body">
                  <div className="card-title">Title</div>
                  <div className="card-subtitle">Subtitle</div>
                  <div className="card-text">text</div>
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
