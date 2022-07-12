import './App.css';
import Footer from './footer/Footer';
import MainSection from './mainSection/MainSection';
import Nav from './navBar/Nav';


function App() {
  return (
    <div>
      <header>
        <Nav></Nav>
      </header>
        
      <section>
      <MainSection></MainSection>
      </section>

      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
}

export default App;
