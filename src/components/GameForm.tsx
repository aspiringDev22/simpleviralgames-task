import { useState } from "react";
import {
  Dialog,
  DialogActions,
  DialogTitle,
  TextField,
  Button,
  Box,
} from "@mui/material";

interface FormData {
  name: string;
  url: any;
  author: string;
  published_date: string;
}

interface FormProps {
  openForm: boolean;
  setOpenForm: React.Dispatch<React.SetStateAction<boolean>>;
  onclose: React.Dispatch<React.SetStateAction<boolean>>;
  selectedGame: FormData | null; 
  handleAddGame: (game: FormData) => void;
  handleUpdateGame: (game: FormData) => void;
}

const GameForm: React.FC<FormProps> = ({ openForm, setOpenForm, onclose, handleAddGame, selectedGame,handleUpdateGame }) => {
  const [formData, setFormData] = useState<FormData>(selectedGame || {
    name: "",
    url: "",
    author: "",
    published_date: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const clearForm = () => {
    setFormData({
      name: "",
      url: "",
      author: "",
      published_date: "",
    });
  };

  const isFormValid = () => {
    return (
      formData.name.trim() !== "" &&
      formData.url.trim() !== "" &&
      formData.author.trim() !== "" &&
      formData.published_date.trim() !== ""
    );
  };

  const addOrUpdateGame = () => {
    if (selectedGame) {
      handleUpdateGame(formData);
    } else {
      if (isFormValid()) {
        handleAddGame(formData); 
      }
    }
    clearForm();
    setOpenForm(false);
  };

  return (
    <Dialog open={openForm} onClose={onclose} sx={dialogStyles}>
      <DialogTitle sx={titleStyles}>Add Game</DialogTitle>
      <Box sx={formStyles}>
        <TextField
          variant="standard"
          name="name"
          label="Name"
          fullWidth
          required
          value={formData.name}
          onChange={handleChange}
          sx={inputStyles}
        />
        <TextField
          variant="standard"
          name="url"
          label="URL"
          fullWidth
          required
          value={formData.url}
          onChange={handleChange}
          sx={inputStyles}
        />
        <TextField
          variant="standard"
          name="author"
          label="Author"
          fullWidth
          required
          value={formData.author}
          onChange={handleChange}
          sx={inputStyles}
        />
        <TextField
          variant="standard"
          name="published_date"
          // label="Published Date"
          type="date"
          fullWidth
          required
          value={formData.published_date}
          onChange={handleChange}
          sx={inputStyles}
        />
        <DialogActions sx={buttonContainerStyles}>
          <Button variant="outlined" sx={cancelBtnStyles} onClick={() => setOpenForm(false)}>
            Cancel
          </Button>
          <Button
            sx={addBtnStyles}
            color="primary"
            onClick={addOrUpdateGame}
            disabled={!isFormValid()}
          >
            Add
          </Button>
        </DialogActions>
      </Box>
    </Dialog>
  );
};

const dialogStyles = {
  // width:"50vw",
  maxWidth: "100vw",
  display: "flex",
  justifyContent: "center",
  padding: "20px",
};

const titleStyles = {
  fontSize: "26px",
  fontWeight: "bold",
  textAlign: "center",
  color:"#484848"
};

const formStyles = {
  minWidth: "40vw",
  maxWidth:"80vw",
  display: "flex",
  flexDirection: "column",
  padding:"10px 50px",
};

const inputStyles = {
  marginBottom: "20px",
};

const buttonContainerStyles = {
  display: "flex",
  justifyContent: "center",
  marginTop: "20px",
};

const cancelBtnStyles = {
  border: "1px solid gray",
  color: "black",
  fontFamily: "Poppins",
  fontWeigh: "bold",
  alignSelf: "flex-start",
  "&:hover": {
    background: "red",
    color: "white",
    border: "1px solid white",
  },
}

const addBtnStyles = {
  border: "1px solid gray",
  color: "black",
  fontFamily: "Poppins",
  fontWeigh: "bold",
  alignSelf: "flex-start",
  "&:hover": {
    background: "green",
    color: "white",
    border: "1px solid white",
  },
};


export default GameForm;
