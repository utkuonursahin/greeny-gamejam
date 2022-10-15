import "./styles/main.scss";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from "./pages/Main/Main";
import Sponsors from "./pages/Sponsors/Sponsors";
import Terms from "./pages/Terms/Terms";
import Signup from "./pages/Signup/Signup";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import {WorkshopsProvider} from "./context/WorkshopsContext";

function App() {
  return (
    <BrowserRouter>
      <WorkshopsProvider>
        <Header/>
      </WorkshopsProvider>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/sponsors" element={<Sponsors/>}/>
        <Route path="/terms" element={<Terms/>}/>
        <Route path="/signup" element={<Signup/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
