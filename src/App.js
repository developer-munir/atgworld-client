import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import Main from "./layouts/Main/Main";
import { route } from "./routes/routes";
import AOS from "aos";
import "aos/dist/aos.css";
function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
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
