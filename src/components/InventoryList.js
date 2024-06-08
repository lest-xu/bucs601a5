import React from 'react';
import InventoryItem from './InventoryItem';
const api = '';

class InventoryList extends React.Component {
    // constructor(props) {
    //     super(props);
    // }


    render() {
        return (
            <section className="products">
                <h2>Inventory 🍎</h2>
                <div className="grid-container">
                    <InventoryItem />
                </div>
            </section>
        );
    }
}

export default InventoryList;