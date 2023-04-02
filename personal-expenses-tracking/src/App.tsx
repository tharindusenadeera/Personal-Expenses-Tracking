import "./App.css";
import { NavBar } from "./components/navBar/NavBar";
import { Box } from "@mui/material";

function App(props: any) {
  return (
    <Box>
      <NavBar />
      <Box component="main" sx={{ p: 3 }}>
        {props.children}
      </Box>
    </Box>
  );
}

export default App;
