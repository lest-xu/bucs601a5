import React from 'react';
import InventoryItem from './InventoryItem';
const api = 'https://raw.githubusercontent.com/lest-xu/bucs601a5/main/src/models/inventory.json';

class InventoryList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { inventories: [] };
    }

    componentDidMount() {
        fetch(api)
            .then(res => res.json())
            .then(data => this.setState({ inventories: data }))
            .catch(error => console.log(error));
    }

    render() {
        return (
            <section className="products">
                <h2>Inventory 🍎</h2>
                <div className="grid-container">
                    {this.state.inventories.map(item => (
                        // console.log(item.name)
                        <InventoryItem key={item.sku} product={item}></InventoryItem>
                    ))}
                </div>
            </section>
        );
    }
}

export default InventoryList;