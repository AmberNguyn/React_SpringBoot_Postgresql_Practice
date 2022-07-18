import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Homepage from "./homepage/homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";



// import NotFound from "./teachers/notFound";
import AddTeacher from "./teachers/addTeacher";
import TeacherList from "./teachers/teacherList";
// import Homepage from "./homepage/homepage";

import Nav from "./navBar/Nav";
import Footer from "./footer/Footer";
import UnderConstruction from "./underConstruction/underConstruction";
function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route exact path="homepage" element={<Homepage />} />
        <Route exact path="teachers" element={<TeacherList />} />
        <Route exact path="add" element={<AddTeacher />} />
        <Route exact path="teachers/edit/:id" element={<AddTeacher />} />
        <Route exact path="assignments" element={<UnderConstruction />} />
        <Route exact path="contracts" element={<UnderConstruction />} />
        <Route path="*" element={<UnderConstruction />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
