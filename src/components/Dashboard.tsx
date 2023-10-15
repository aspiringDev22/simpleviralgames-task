import { useState, useEffect } from "react";
import { Container, Button, Box } from "@mui/material";
import GameForm from "./GameForm";
import GameCard from "./GameCard";

interface Game {
  name: string;
  url: any;
  author: string;
  published_date: any;
}

const Dashboard = () => {
  const [gameList, setGameList] = useState<Game[]>([]); 

  const [openForm, setOpenForm] = useState<boolean>(false);
  const [selectedGame, setSelectedGame] = useState<Game | null>(null);

  const updateGameList = (newGameList: Game[]) => {
    setGameList(newGameList);
    localStorage.setItem("gameList", JSON.stringify(newGameList)); 
  };

  const handleAddGame = (newGame: Game) => {
    const updatedList = [...gameList, newGame];
    updateGameList(updatedList);
  };

  const handleUpdateGame = (updateGame: Game) => {
    if (selectedGame) {
      const updatedList = gameList.map((game) =>
        game === selectedGame ? updateGame : game
      );
      updateGameList(updatedList);
    }
    setSelectedGame(null);
    setOpenForm(false);
  };

  const removeGame = (i: number) => {
    const updatedList = gameList.filter((_game, idx) => idx !== i);
    updateGameList(updatedList);
  };

  useEffect(() => {
    const storedGameList = localStorage.getItem("gameList");
    if (storedGameList) {
      setGameList(JSON.parse(storedGameList));
    }
  }, []);

  return (
    <Container sx={dashboardStyles}>
      <Button
        variant="outlined"
        onClick={() => setOpenForm(true)}
        sx={addBtnStyles}
      >
        Add Game
      </Button>
      <Box className="game-list-container" sx={listContainerStyles}>
        {gameList.map((game, i) => (
          <GameCard
            game={game}
            i={i}
            setOpenForm={setOpenForm}
            setSelectedGame={setSelectedGame}
            removeGame={removeGame}
          />
        ))}
      </Box>
      <GameForm
        openForm={openForm}
        setOpenForm={setOpenForm}
        selectedGame={selectedGame}
        onclose={() => {
          setSelectedGame(null);
          setOpenForm(false);
        }}
        handleAddGame={handleAddGame}
        handleUpdateGame={handleUpdateGame}
      />
    </Container>
  );
};

const addBtnStyles = {
    border: "1px solid gray",
    color: "black",
    fontFamily: "Poppins",
    fontWeigh: "bold",
    alignSelf: "flex-start",
    "&:hover": {
      background: "gray",
      color: "white",
      border: "1px solid white",
    },
  };
  
const dashboardStyles = {
  height: "100vh",
  padding: "3rem 2rem",
  display: "flex",
  flexDirection: "column",
  gap: "2rem",
};

const listContainerStyles = {
  display: "flex",
  flexWrap: "wrap",
  gap: "2rem",
};

export default Dashboard;