import { Header } from "./components";
import { Route, Routes, HashRouter } from "react-router-dom";
import { Main } from "./pages";

function App() {
  return (
    <>
      <Header />
      <HashRouter>
        <Routes>
          <Route index element={<Main />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
