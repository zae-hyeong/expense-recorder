import './App.css';
import NewExpenseForm from './component/NewExpense/NewExpenseForm';
import Card from './component/UI/Card';
import Wrapper from './component/UI/Wrapper';

function App() {
  return (
    <div className="App">
      <Wrapper>
        <NewExpenseForm/>
      </Wrapper>
    </div>
  );
}

export default App;
