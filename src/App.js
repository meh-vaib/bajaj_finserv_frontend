import React, { useState } from 'react';
import JsonInput from './components/JsonInput';
import ResultDisplay from './components/ResultDisplay';
import './App.css';

function App() {
  const [responseData, setResponseData] = useState(null);
  const [selectedOptions, setSelectedOptions] = useState([]);

  return (
    <div className="App">
      <h1>BFHL Challenge</h1>
      <JsonInput setResponseData={setResponseData} />
      {responseData && (
        <ResultDisplay
          responseData={responseData}
          selectedOptions={selectedOptions}
          setSelectedOptions={setSelectedOptions}
        />
      )}
    </div>
  );
}

export default App;
