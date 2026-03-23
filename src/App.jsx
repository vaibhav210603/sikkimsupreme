
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import AboutPage from './pages/About';
import B2BPage from './pages/B2B';
import GateScreen from './components/GateScreen';

function App() {
  const [gateOpen, setGateOpen] = useState(false);

  return (
    <>
      {!gateOpen && <GateScreen onReady={() => setGateOpen(true)} />}
      <div style={{ visibility: gateOpen ? 'visible' : 'hidden' }}>
        <Router>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/b2b" element={<B2BPage />} />
            </Routes>
          </Layout>
        </Router>
      </div>
    </>
  );
}

export default App;
