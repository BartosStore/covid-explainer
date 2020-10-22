import React, { useState } from 'react';

export default function Overview() {
  const [testedTotal, setTestedTotal] = useState(1885488);
  const [activeCasesTotal, setActiveCasesTotal] = useState(205000);
  const [activeCases, setActiveCases] = useState(120000);
  const [recoveredCases, setRecoveredCases] = useState(85000);
  const [positiveLastDay, setPositiveLastDay] = useState(14789);

  return (
    <div>
      <div className="row">
        <div className="col-6">
          <div className="card mb-4">
            <div className="card-body text-center">
              <div className="card-subtitle">Pozitivních nyní</div>
              <div className="card-text">
                <span className="text-warning display-3 font-weight-bold">{dots(activeCases)}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-6">
          <div className="card mb-4">
            <div className="card-body text-center">
              <div className="card-subtitle text-center">Denní přírůstek</div>
              <div className="card-text">
                <span className="text-danger display-3 font-weight-bold">{dots(positiveLastDay)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-4">
          <div className="card mb-4">
            <div className="card-body text-center">
              <div className="card-subtitle">Testů celkem</div>
              <div className="card-text">
                <span className="text-info font-weight-bold">{dots(testedTotal)}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="card mb-4">
            <div className="card-body text-center">
              <div className="card-subtitle text-center">Pozitivních celkem</div>
              <div className="card-text">
                <span className="text-warning font-weight-bold">{dots(activeCasesTotal)}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="card mb-4">
            <div className="card-body text-center">
              <div className="card-subtitle text-center">Uzdravených celkem</div>
              <div className="card-text">
                <span className="text-success font-weight-bold">{dots(recoveredCases)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function dots(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}