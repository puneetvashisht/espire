import logo from './logo.svg';
import './App.css';
import ViewEmployees from './components/ViewEmployees';
import AddEmployee from './components/AddEmployee';

function App() {
  return (
    <div className="container row">
      <AddEmployee></AddEmployee>
      <hr/>
      <ViewEmployees></ViewEmployees>
    </div>
  );
}

export default App;
