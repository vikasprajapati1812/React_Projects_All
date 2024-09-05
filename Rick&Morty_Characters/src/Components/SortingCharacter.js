import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

const SortingCharacter = (props) => {
  const { sortOrder, onChange } = props;
  const handleSortChange = (event) => {
    onChange(event.target.value);
  };
  return (
    <Select
      value={sortOrder}
      variant="outlined"
      size="medium"
      onChange={handleSortChange}
    >
      {/* MenuItem is a MUI component inbuit */}
      <MenuItem value="asc">Ascending</MenuItem>
      <MenuItem value="desc">Descending</MenuItem>
    </Select>
  );
};
export default SortingCharacter;
