import './App.css';
import { Head } from './components/shared/Head';
import { Hero } from './components/shared/Hero';
import { Footer } from './components/shared/Footer';
import { List } from './components/list/List';
import { Details } from './components/new/Details';

function App() {
  return (
    <div className="App">
      <Head />
      <Hero>
        {/* <List /> */}
        <Details />
      </Hero>
      <Footer />
    </div>
  );
}

export default App;
