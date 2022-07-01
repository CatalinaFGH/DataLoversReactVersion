import React, { useState, useEffect } from 'react';

import { Text, CharacterInfoContainer, CharacterImage, DataPageContainer } from './DataPage-styles';

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

  const theSpecificData = values.map((item) => {
    return {
      name: item.name,
      species: item.species,
      gender: item.gender,
    };
  });
  console.log('PERSONAJES:', theSpecificData[0]);

  return (
    <DataPageContainer>
      <Text>DATA PAGE</Text>
      
      {values.map((item) =>
            <CharacterInfoContainer key={item.id}>
              <p>ID: <span>{item.id }</span></p>
              <p>Name: <span>{item.name}</span></p>
              <CharacterImage src={item.image}></CharacterImage>
              <p>Species: <span>{item.species}</span></p>
              <p>Gender: <span>{item.gender}</span></p>
            </CharacterInfoContainer>)}

    </DataPageContainer>
  )
}

export default DataPage