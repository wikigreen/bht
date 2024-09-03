import { Header } from "./components";
import { Route, Routes, HashRouter } from "react-router-dom";
import { Main } from "./pages";
import { Box } from "@mui/material";

function App() {
  return (
    <Box display="flex" alignItems="center" flexDirection="column">
      <Header />
      <HashRouter>
        <Routes>
          <Route index element={<Main />} />
        </Routes>
      </HashRouter>
    </Box>
  );
}

export default App;
