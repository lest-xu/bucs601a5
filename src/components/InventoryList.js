import React from 'react';
import InventoryItem from './InventoryItem';
const api = 'https://raw.githubusercontent.com/lest-xu/bucs601a5/main/src/models/inventory.json';

class InventoryList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { orgInventories: [], inventories: [] };
    }

    componentDidMount() {
        // fetech the data from my github
        fetch(api)
            .then(res => res.json())
            .then(data => this.setState({ orgInventories: data, inventories: data }))
            .catch(error => console.log(error));
    }

    // take sku as param to delete the item from the inventory by sku
    handleDelete = (sku) => {
        this.setState(prevState => ({
            inventories: prevState.inventories.filter(item => item.sku !== sku)
        }));
    }

    // reset the inventory
    handleReset = () => {
        this.setState({inventories: this.state.orgInventories});
    }

    render() {
        return (
            <section className="products">
                <h2>🍎 Inventory <span className="badge bg-primary rounded-pill">{this.state.inventories.length}</span>
                    <button type="button" className="btn btn-Secondary ms-3" onClick={this.handleReset}>Reset</button>
                </h2>
                <div className="grid-container">
                    {this.state.inventories.map(item => (
                        <InventoryItem key={item.sku} product={item} handleDelete={this.handleDelete}></InventoryItem>
                    ))}
                </div>
            </section>
        );
    }
}

export default InventoryList;