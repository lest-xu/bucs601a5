import './styles.css';
import './bootstrap.css';
import InventoryList from './components/InventoryList';
import Sidebar from './components/Sidebar';

function App() {
    return (
        <div className='flex-container'>
            <main className='flex-item'>
                <InventoryList></InventoryList>
            </main>

            <div className='flex-item'>
                <Sidebar></Sidebar>
            </div>
        </div>
    )
}

export default App;
