import { ThemeProvider, createTheme } from '@mui/material/styles';
import TextField from '@mui/material/TextField';

const SearchingCharacter = ({ value, onChange }) => {
  const handleInputChange = (event) => {
    onChange(event.target.value);
  };
  const theme = createTheme({
    typography: {
      fontFamily: "Arvo",
    },
  });
  return (
    <ThemeProvider theme={theme}> 
      <TextField                         ////input is called TextFields in the MUI
        label="Search by Name"
        variant="outlined"
        value={value}
        size="medium"
        onChange={handleInputChange}
      />
    </ThemeProvider>
  );
};
export default SearchingCharacter;
