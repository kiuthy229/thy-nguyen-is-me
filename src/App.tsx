import styles from './App.module.css';
import { About } from './components/About/About';
import { Contact } from './components/Contact/Contact';
import { Experience } from './components/Experience/Experience';
import { ThyNguyen } from './components/ThyNguyen/ThyNguyen';
import { Navbar } from './components/Navbar/Navbar';
import { Drawings } from './components/Drawings/Drawings';

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <ThyNguyen />
      <About />
      <Drawings />
      <Experience />
      {/* TODO: Add proojects */}
      {/* <Projects /> */}
      <Contact />
    </div>
  );
}

export default App;
