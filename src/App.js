import './App.css';
import { Footer } from './components/shared/Footer';
import { Head } from './components/shared/Head';
import { Hero } from './components/shared/Hero';

function App() {
  return (
    <div className="App">
      <Head />
      <Hero />
      <Footer />
    </div>
  );
}

export default App;
