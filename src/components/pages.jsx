import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import CreateIcon from '@mui/icons-material/Create';
//@mui/icons-material

export default function Pages() {
  const [fields, setFields] = useState({
    title: '',
    note: '',
  });

  const [errorDetails, setErrorDetails] = useState({
    error: false,
    errorMessage: '',
  });

  function updateVal(e) {
    const { name, value } = e.target;
    setFields({
      ...fields,
      [name]: value,
    });
    setErrorDetails({
      error: false,
      errorMessage: '',
    });
  }

  function create(e) {
    e.preventDefault();

    if (fields.note === '' && fields.title === '') {
      setErrorDetails({
        error: true,
        errorMessage: 'Title and Note Content is required',
      });
    } else if (fields.note === '') {
      setErrorDetails({
        error: true,
        errorMessage: 'Enter Note Content',
      });
    } else if (fields.title === '') {
      setErrorDetails({
        error: true,
        errorMessage: 'Enter Note Title',
      });
    }
  }

  return (
    <Container>
      <Typography variant="h4" color="primary">
        Create a Note
      </Typography>
      <form autoComplete="off" onSubmit={create} noValidate>
        <TextField
          label="Note Title"
          color="primary"
          variant="outlined"
          required
          fullWidth
          margin="normal"
          name="title"
          onChange={updateVal}
          error={errorDetails.error}
          // helperText={errorDetails.errorMessage}
        />

        <TextField
          label="Message"
          color="primary"
          variant="outlined"
          multiline
          rows={5}
          required
          margin="normal"
          name="note"
          fullWidth
          onChange={updateVal}
          error={errorDetails.error}
          //helperText={errorDetails.errorMessage}
        />
        <Button
          variant="contained"
          color="secondary"
          size="small"
          endIcon={<CreateIcon />}
          type="submit"
        >
          Create
        </Button>
      </form>

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
