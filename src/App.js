import Button from 'react-bootstrap/Button';
import { Header} from './myComponents/Header';
import { Footer} from './myComponents/footer';
import { Todo} from './myComponents/todo';
import './App.css';

function App() {
  return (
   <>
   <Header/>
    <Todo/>
    <Footer/>
   </>
  );
}

export default App;
