import React from "react";
import Nav from "../navBar/Nav";
import Footer from "../footer/Footer";
import TeacherList from "../teachers/teacherList";

export default function Teacher() {
  return (
    <div>
      <Nav />
      <TeacherList />

      <Footer />
    </div>
  );
}
