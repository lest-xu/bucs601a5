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

    // handleDelete function take sku as param to delete the item from the list by sku
    handleDelete = (sku) => {
        this.setState( prevState => ({
            inventories: prevState.inventories.filter( item => item.sku !== sku)
        }));
    }


    render() {
        return (
            <section className="products">
                <h2>🍎 Inventory <span className="badge bg-primary rounded-pill">{this.state.inventories.length}</span></h2>
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