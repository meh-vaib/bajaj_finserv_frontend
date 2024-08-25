import React, { useState } from 'react';
import axios from 'axios';

const JsonInput = ({ setResponseData }) => {
  const [jsonInput, setJsonInput] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const parsedData = JSON.parse(jsonInput);

      const response = await axios.post('https://bajaj-api-52bv.onrender.com/bfhl', {
        data: parsedData.data,
      });

      setResponseData(response.data);
    } catch (err) {
      setError('Invalid JSON format or server error. Please check your input.');
    }
  };

  return (
    <div>
      <h2>Enter JSON Data</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          value={jsonInput}
          onChange={(e) => setJsonInput(e.target.value)}
          placeholder='Enter JSON here'
        />
        <button type='submit'>Submit</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default JsonInput;
