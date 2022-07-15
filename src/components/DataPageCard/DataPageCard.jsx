import React from "react";

import {
  DataPageCardContainer,
  CharacterImage,
  CharacterText,
  CharacterTextInfo,
} from "./DataPageCard-styles";

const DataPageCard = ({ characters }) => {
  return (
    <>
      {characters.map((character) => (
        <DataPageCardContainer key={character.id}>
          <CharacterText>
            ID: <CharacterTextInfo>{character.id}</CharacterTextInfo>
          </CharacterText>
          <CharacterText>
            Name: <CharacterTextInfo>{character.name}</CharacterTextInfo>
          </CharacterText>
          <CharacterImage src={character.image} />
          <CharacterText>
            Species: <CharacterTextInfo>{character.species}</CharacterTextInfo>
          </CharacterText>
          <CharacterText>
            Gender: <CharacterTextInfo>{character.gender}</CharacterTextInfo>
          </CharacterText>
        </DataPageCardContainer>
      ))}
    </>
  );
};

export default DataPageCard;
