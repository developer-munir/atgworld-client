import { Toaster } from "react-hot-toast";
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
      <Toaster />
    </div>
  );
}

export default App;
