import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SideNav from './components/SideNav';
import ApplicationAnalysis from './pages/ApplicationAnalysis';
import TransDetailedReport from './pages/TransDetailedReport';
import SummaryReport  from './pages/SummaryReport';
import DownloadCenter from './pages/DownloadCenter';
import WebUserActivity from './pages/WebUserActivity';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        <SideNav />
        <div className="content">
          <Switch>
            <Route
              path="/applicationAnalysis"
              component={ApplicationAnalysis}
            />
            <Route
              path="/transDetailedReport"
              component={TransDetailedReport}
            />
            <Route path="/summaryReport" component={SummaryReport} />
            <Route path="/downloadcenter" component={DownloadCenter} />
            <Route path="/webUserActivity" component={WebUserActivity} />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
