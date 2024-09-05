import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import DateOfCharacterCreated from "./DateOfCharacterCreated";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const CardCharacter = ({ character }) => {
  const {
    created,
    gender,
    id,
    image,
    location,
    name,
    origin,
    species,
    status,
  } = character;
  const theme = createTheme({
    typography: {
      fontFamily: "Arvo",
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Card
        sx={{
          height: 470,
          maxWidth: 350,
          margin: "auto",
          backgroundColor: "rgb(46, 46, 46)",
          border: "5px solid gray",
          borderRadius: "16px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box // contains the image ,<Box> name,id,date</Box>
          sx={{
            position: "relative",
          }}
        >
          <CardMedia
            component="img"
            alt={name}
            image={image}
            sx={{
              maxHeight: "260px",
              objectFit: "cover",
            }}
          />
          <Box         
            sx={{
              height: "54px",
              textAlign: "center",
              width: "100%",
              color: "white",
              backgroundColor: "rgba(0, 0, 0, 0.4)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              position: "absolute",
              bottom: 0,
            }}
          >
            <Typography
              variant="subtitle1"
              component="div"
              sx={{ fontWeight: "900" }}
            >
              {name}
            </Typography>
            <Typography variant="body2" component="div">
              id {id} :: <DateOfCharacterCreated created={created} />{" "}
              {/* //for Date Component */}
            </Typography>
          </Box>
        </Box>
        {/* Card Content */}
        <CardContent>
          <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
            <Typography variant="body2" color="#fff">
              Status
            </Typography>
            <Typography variant="body2" sx={{ color: "orange" }}>
              {status}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between", mt: 1 }}>
            <Typography variant="body2" color="#fff">
              Species
            </Typography>
            <Typography
              variant="body2"
              
              sx={{ color: "orange" }}
            >
              {species}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between", mt: 1 }}>
            <Typography variant="body2" color="#fff">
              Gender
            </Typography>
            <Typography
              variant="body2"
              
              sx={{ color: "orange" }}
            >
              {gender}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between", mt: 1 }}>
            <Typography variant="body2" color="#fff" sx={{ mr: 3 }}>
              Origin
            </Typography>
            <Typography
              variant="body2"
              
              sx={{
                color: "orange",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {origin.name}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between", mt: 1 }}>
            <Typography variant="body2" color="#fff">
              Last Location
            </Typography>
            <Typography
              variant="body2"
              
              sx={{
                color: "orange",
                whiteSpace: "nowrap",
                overflow: "hidden",
              }}
            >
              {location.name}
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </ThemeProvider>
  );
};
export default CardCharacter;
