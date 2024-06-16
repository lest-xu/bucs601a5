// created from the previous assignment 2
import './styles.css';
// integrated with bootstrap css that is mainly used for button styles
import './bootstrap.css'; 
import InventoryList from './components/InventoryList';
import { Routes, Route } from 'react-router-dom'; // for assignment 6
import inventoryList from './models/inventory.json'
import ProductDetail from './components/ProductDetail';
import NotFound from './components/NotFound';

function App() {
    return (
        <div className='flex-container'>
            <main className='flex-item'>
                <Routes>
                    <Route path='/' element={<InventoryList/>}></Route>
                    <Route path='/home' element={<InventoryList/>}></Route>
                    <Route path='/product/:id' element={<ProductDetail inventories={inventoryList}/>}></Route>
                    <Route path='*' element={ <NotFound/>}></Route>
                </Routes>
            </main>
        </div>
    )
}

export default App;
