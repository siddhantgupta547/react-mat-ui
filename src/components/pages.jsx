import React from 'react';
import { Outlet } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import CreateIcon from '@mui/icons-material/Create';
//@mui/icons-material

export default function Pages() {
  return (
    <Container>
      <Typography variant="h4" color="primary">
        Create a Note
        <br />
        <Button
          variant="outlined"
          color="error"
          size="small"
          endIcon={<CreateIcon />}
        >
          Create
        </Button>
      </Typography>
      <Outlet />
    </Container>
  );
}

// const styles = {
//   btn: {
//     backgroundColor: 'yellow',
//     color: 'black',
//   },
//   h1: {
//     color: 'red',
//     size: 42,
//   },
// };
