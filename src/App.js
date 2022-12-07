import { RouterProvider } from "react-router-dom";
import "./App.css";
import Main from "./layouts/Main/Main";
import { route } from "./routes/routes";

function App() {
  return (
    <div className="App">
      <RouterProvider router={route}>
        <Main></Main>
      </RouterProvider>
    </div>
  );
}

export default App;
