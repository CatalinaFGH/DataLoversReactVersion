import React, { useState, useEffect } from 'react';
import DataPageCard from '../DataPageCard/DataPageCard';

import { Text, DataPageContainer } from './DataPage-styles';

const DataPage = () => {

  const [values, setValues] = useState([]);

  // Usamos useEffect con fetch y then para extraer la info de la api de rick&morty
  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
    .then((res) => res.json())
    .then((data) => {
      const theData = data.results;
      setValues(theData);
      console.log('api de rick&morty:', theData);
    });
  }, []);

  return (
    <DataPageContainer>
      <Text>DATA PAGE</Text>

      <DataPageCard
      characters={values}
      />
    </DataPageContainer>
  )
}

export default DataPage