import { Box, Card, Typography } from "@mui/material";

interface Game {
  name: string;
  url: any;
  author: string;
  published_date: string;
}

interface GameProps {
  game: Game;
  i: number;
  setOpenForm: (value: React.SetStateAction<boolean>) => void;
  setSelectedGame: React.Dispatch<React.SetStateAction<Game | null>>;
  removeGame: (i: number) => void;
}

const GameCard: React.FC<GameProps> = ({
  setSelectedGame,
  setOpenForm,
  game,
  i,
  removeGame,
}) => {
  const handleDeleteClick = (e: React.MouseEvent) => {
    e.stopPropagation(); 
    removeGame(i);
  };
  return (
    <Card
      sx={cardStyles}
      key={i}
      onClick={(e) => {
        e.stopPropagation();
        setSelectedGame(game);
        setOpenForm(true);
      }}
    >
      <Typography fontWeight="700" fontSize="2rem" color="#484848">
        {game.name}
      </Typography>
      <Typography fontSize="1.3rem" fontWeight="600" color="#484848">
        {game.author}
      </Typography>
      <Typography
        sx={dateStyles}
        variant="subtitle1"
        color="green"
        fontWeight="700"
      >
        {String(game.published_date).substring(0, 11)}
      </Typography>
      <Box sx={deletBtn} onClick={handleDeleteClick}>
        🗑️
      </Box>
    </Card>
  );
};

const cardStyles = {
  position: "relative",
  width: "25%",
  minWidth: "300px",
  height: "200px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "15px",
  border: "1px solid black",
  cursor: "pointer",
  marginBottom: "2rem",
};

const deletBtn = {
  position: "absolute",
  top: "0px",
  right: "0px",
  fontSize: "1.5rem",
  transition: "all 0.2s ease",
  "&:hover": {
    transform: "scale(1.1)rotate(10deg)",
  },
};

const dateStyles = {
  position: "absolute",
  bottom: "10px",
  right: "10px",
};

export default GameCard;
