import { Chip, Box } from '@mui/material';

const SelectedFilters = ({ filters, onRemoveFilter }) => {
  const handleDelete = (filterType, filterValue) => {
    onRemoveFilter(filterType, filterValue);
  };
  return (
    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, my: 2 }}>
      {filters.species.map((species) => (
        <Chip
          key={species}
          label={species}
          sx={{ bgcolor: "steelblue", color: "white", fontWeight: 900 }}
          onDelete={() => handleDelete("species", species)}
        />
      ))}
      {filters.gender.map((gender) => (
        <Chip
          key={gender}
          label={gender}
          sx={{ bgcolor: "steelblue", color: "white", fontWeight: 900 }}
          onDelete={() => handleDelete("gender", gender)}
        />
      ))}
      {filters.origin.map((origin) => (
        <Chip
          key={origin}
          label={origin}
          sx={{ bgcolor: "steelblue", color: "white", fontWeight: 900 }}
          onDelete={() => handleDelete("origin", origin)}
        />
      ))}
    </Box>
  );
};
export default SelectedFilters;
