import React, { useState, useEffect, useCallback } from "react";
import SelectedFilters from "./SelectedFilters";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import useMediaQuery from "@mui/material/useMediaQuery";
import AccordionDetails from "@mui/material/AccordionDetails";
import {
  FormGroup,
  FormControlLabel,
  Checkbox,
  Typography,
  Box,
} from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const CharacterFilter = ({
  speciesOptions,
  genderOptions,
  originOptions,
  onFilterChange,
}) => {

  const [selectedSpecies, setSelectedSpecies] = useState([]);
  const [selectedGender, setSelectedGender] = useState([]);
  const [selectedOrigin, setSelectedOrigin] = useState([]);
  
  useEffect(() => {
    onFilterChange({
      species: selectedSpecies,
      gender: selectedGender,
      origin: selectedOrigin,
    });
  }, [selectedSpecies, selectedGender, selectedOrigin, onFilterChange]);
  //deletion by checkbox
  const handleSpeciesChange = (e) => {
    const { checked, value } = e.target;
    setSelectedSpecies((prev) =>
      checked ? [...prev, value] : prev.filter((val) => val !== value)
    );
  };
  //deletion by checkbox
  const handleGenderChange = (e) => {
    const { checked, value } = e.target;
    setSelectedGender((prev) =>
      checked ? [...prev, value] : prev.filter((val) => val !== value)
    );
  };
  const handleOriginChange = (e) => {
    const { checked, value } = e.target;
    setSelectedOrigin((prev) =>
      checked ? [...prev, value] : prev.filter((val) => val !== value)
    );
  };
  const handleRemoveFilter = useCallback((filterType, filterValue) => {
    if (filterType === "species") {
      setSelectedSpecies((prev) => prev.filter((val) => val !== filterValue));
    } else if (filterType === "gender") {
      setSelectedGender((prev) => prev.filter((val) => val !== filterValue));
    } else if (filterType === "origin") {
      setSelectedOrigin((prev) => prev.filter((val) => val !== filterValue));
    }
  }, []);

  const theme = createTheme({
    typography: {
      fontFamily: "Roboto",
    },
  });
  const FilterContent = ({ display }) => (
    <div>
      <Typography variant="h5" sx={{ fontWeight: 900, display: { display } }}>
        Filters
      </Typography>
      <SelectedFilters
        filters={{
          species: selectedSpecies,
          gender: selectedGender,
          origin: selectedOrigin,
        }}
        onRemoveFilter={handleRemoveFilter}
      />
      <Box
        sx={{
          border: "5px solid grey",
          mb: 2,
          pl: 2,
          pt: 1,
          maxWidth: "300px",
          textAlign: "center",
        }}
      >
        <h3>Species</h3>
        <FormGroup>
          {speciesOptions.map((species) => (
            <FormControlLabel
              key={species}
              control={
                <Checkbox
                  value={species}
                  checked={selectedSpecies.includes(species)}
                  onChange={handleSpeciesChange}
                />
              }
              label={species}
            />
          ))}
        </FormGroup>
      </Box>
      <Box
        sx={{
          border: "5px solid grey",
          mb: 2,
          pl: 2,
          pt: 1,
          maxWidth: "300px",
          textAlign: "center",
        }}
      >
        <h3>Gender</h3>
        <FormGroup>
          {genderOptions.map((gender) => (
            <FormControlLabel
              key={gender}
              control={
                <Checkbox
                  value={gender}
                  checked={selectedGender.includes(gender)}
                  onChange={handleGenderChange}
                />
              }
              label={gender}
            />
          ))}
        </FormGroup>
      </Box>
      <Box
        sx={{
          border: "5px solid grey",
          mb: 2,
          pl: 2,
          pt: 1,
          maxWidth: "300px",
          textAlign: "center",
        }}
      >
        <h3>Origin</h3>
        <FormGroup>
          {originOptions.map((origin) => (
            <FormControlLabel
              key={origin}
              control={
                <Checkbox
                  value={origin}
                  checked={selectedOrigin.includes(origin)}
                  onChange={handleOriginChange}
                />
              }
              label={origin}
            />
          ))}
        </FormGroup>
      </Box>
    </div>
  );
  /////  For the  Mobile Screens
  const MobileScreen = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <ThemeProvider theme={theme}>
      {MobileScreen ? (
        <Accordion sx={{ border: "5px solid grey" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography variant="h5" sx={{ fontWeight: 900 }}>
              Filters
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <FilterContent display={"none"} />
          </AccordionDetails>
        </Accordion>
      ) : (
        <FilterContent display={"block"} />
      )}
    </ThemeProvider>
  );
};
export default CharacterFilter;
