import React from 'react';
import Select from 'react-select';

const options = [
  { value: 'alphabets', label: 'Alphabets' },
  { value: 'numbers', label: 'Numbers' },
  { value: 'highestLowercaseAlphabet', label: 'Highest Lowercase Alphabet' },
];

const ResultDisplay = ({ responseData, selectedOptions, setSelectedOptions }) => {
  const handleChange = (selected) => {
    setSelectedOptions(selected);
  };

  const renderResults = () => {
    if (!responseData) return null;

    return selectedOptions.map((option) => (
      <div key={option.value}>
        <h3>{option.label}</h3>
        <pre>{JSON.stringify(responseData[option.value], null, 2)}</pre>
      </div>
    ));
  };

  return (
    <div>
      <h2>Response Data</h2>
      <Select
        isMulti
        value={selectedOptions}
        onChange={handleChange}
        options={options}
      />
      {renderResults()}
    </div>
  );
};

export default ResultDisplay;
