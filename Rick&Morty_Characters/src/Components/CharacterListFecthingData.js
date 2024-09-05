import React, { useEffect, useState, useCallback } from 'react';
import { Grid, Box } from '@mui/material';
import axios from 'axios';
import CharacterFilter from './CharacterFilter';
import CardCharacter from "./CardCharacter";
import SearchingCharacter from "./SearchingCharacter";
import SortingCharacter from "./SortingCharacter";

const CharacterListFecthingData = () => {
  const [characters, setCharacters] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const [filteringOptions, setFilteringOptions] = useState({
    species: [],
    gender: [],
    origin: [],
  });
  ////stores selected filters - (species, gender, and origin)
  const [filters, setFilters] = useState({
    species: [],
    gender: [],
    origin: [],
  });

  const url = "https://rickandmortyapi.com/api/character";
  useEffect(() => {
    axios.get(url)
      .then((response) => {
        console.log(response);
        // console.log(response.data.results);
        setCharacters(response.data.results);
        getFilteringOptions(response.data.results);
      })
      .catch((error) => {
        console.error("Error in fetching data:", error);
      });
  }, []);

  
  const getFilteringOptions = (data) => {
    //// uniqueValues  ["human","Alien"]
    const uniqueSpecies = [...new Set(data.map((c) => c.species))];
    const uniqueGender = [...new Set(data.map((c) => c.gender))];
    const uniqueOrigins = [...new Set(data.map((c) => c.origin.name))];
    //storing these uniqueValues as an array like this {x:[1,2]}
    setFilteringOptions({
      species: uniqueSpecies,
      gender: uniqueGender,
      origin: uniqueOrigins,
    });
  };
  const handleChangeSearch = (searchValue) => {
    setSearchTerm(searchValue);
  };
  const handleChangeSort = (newSortOrder) => {
    setSortOrder(newSortOrder);
  };
  const handleChangeFilter = useCallback((newFilters) => {
    setFilters(newFilters);
  }, []);

  // for sorting the characters according to id

  const newCharacterArray = [...characters];    ////Creating shallow Copy
  const sortedCharacters = newCharacterArray.sort((a, b) => {
    return sortOrder === "asc" ? a.id - b.id : b.id - a.id;
  });
  // filteredCharacters[] contains only the characters that match the searchTerm and all the ((selectedFilters) in Accordion)
  const filteredCharacters = sortedCharacters.filter((character) => {
    // console.log(character);
    const matchingName = character.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchingSpecies = filters.species.length === 0 || filters.species.includes(character.species);
    const matchingGender =filters.gender.length === 0 || filters.gender.includes(character.gender);
    const matchingOrigins =filters.origin.length === 0 ||filters.origin.includes(character.origin.name);
    return matchingName && matchingSpecies && matchingGender && matchingOrigins; // initial value of all these are true
  });
  
  return (
    
  
    <Box sx={{ padding: 5 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={3}>
          <CharacterFilter
            speciesOptions={filteringOptions.species}
            genderOptions={filteringOptions.gender}
            originOptions={filteringOptions.origin}
            onFilterChange={handleChangeFilter}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={9}>
        
          <Grid container spacing={2} alignItems="center">
            <Grid
              item
              xs={12}
              sm={12}
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                justifyContent: "flex-start",
                gap: 2,
                marginTop: "40px",
              }}
            >
              <SearchingCharacter
                value={searchTerm}
                onChange={handleChangeSearch}
              />
              <SortingCharacter
                sortOrder={sortOrder}
                onChange={handleChangeSort}
              />
            </Grid>
          </Grid>
          <Grid container spacing={2} mt={2}>
            {filteredCharacters.map((character) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={character.id}>
                <CardCharacter character={character} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};
export default CharacterListFecthingData;
