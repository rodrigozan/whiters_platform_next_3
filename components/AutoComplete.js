import React, { useState } from 'react';
import SearchAutocomplete from 'react-search-autocomplete';

const AutoComplete = ({ suggestions, placeholder, onSelected }) => {
  const [selectedValue, setSelectedValue] = useState('');

  const handleOnSelect = (item) => {
    setSelectedValue(item.name);
    onSelected(item.name);
  };

  return (
    <SearchAutocomplete
      items={suggestions.map((suggestion) => ({ name: suggestion }))}
      placeholder={placeholder}
      onSearch={() => {}}
      onSelect={handleOnSelect}
      autoFocus
      showIcon={false}
      clearOnSelect
      value={selectedValue}
      maxResults={5}
    />
  );
};

export default AutoComplete;
