import './App.css';
import DisplayData from './components/DisplayData';
import Form from './components/Form';

function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        <Form/>
        <DisplayData/>
      </div>
    </div>
  );
}

export default App;
