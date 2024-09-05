import { Box, Grid } from '@mui/material';

export const Header = () => {
  return (
    <>
      <Box
        sx={{
          position: "sticky",
          top: 0,
          left: 0,
          zIndex: 100,
        }}
      >
        <Grid
          component="h1"
          sx={{
            textAlign: "center",
            bgcolor: "rgba(120,120,120,0.8)",
            color: "white",
            paddingBlock: "24px",
          }}
        >
          Rick & Morty Characters
        </Grid>
      </Box>
      ;
    </>
  );
}
