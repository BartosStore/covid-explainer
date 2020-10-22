import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Overview() {
  const [testedTotal, setTestedTotal] = useState(0);
  const [activeCasesTotal, setActiveCasesTotal] = useState(0);
  const [activeCases, setActiveCases] = useState(0);
  const [recoveredCases, setRecoveredCases] = useState(0);
  const [positiveLastDay, setPositiveLastDay] = useState(0);

  useEffect(() => {
    async function fetchCovidData() {
      const response = await axios('https://onemocneni-aktualne.mzcr.cz/api/v2/covid-19/zakladni-prehled.json');
      const overview = response.data.data[0];
      setTestedTotal(overview.provedene_testy_celkem);
      setActiveCasesTotal(overview.potvrzene_pripady_celkem);
      setActiveCases(overview.aktivni_pripady);
      setRecoveredCases(overview.vyleceni);
      setPositiveLastDay(overview.potvrzene_pripady_vcerejsi_den);
    }

    fetchCovidData()
  }, []);

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