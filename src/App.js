import './App.css';
import {Layout} from "./routes/Layout";
import {ProjectRoutes} from "./routes/Routes";
import {Header} from "./components/Header/Header"

function App() {
  return (
    <>
      <Header />
      <Layout />
      <ProjectRoutes />
    </>
  );
}

export default App;
