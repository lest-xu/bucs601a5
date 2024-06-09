// created from the previous assignment 2
import './styles.css';
// integrated with bootstrap css that is mainly used for button styles
import './bootstrap.css'; 
import InventoryList from './components/InventoryList';

function App() {
    return (
        <div className='flex-container'>
            <main className='flex-item'>
                <InventoryList></InventoryList>
            </main>
        </div>
    )
}

export default App;
