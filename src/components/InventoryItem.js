import React from 'react';
import './../styles.css';

class InventoryItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = { product: props.product };
    }

    render() {
        return (
            <div className="grid-item"
                style={{ backgroundImage: `url(${this.state.product.imgUrl})` }}>
                <p><b>{this.state.product.name}</b></p>
                <p>SKU: {this.state.product.sku}</p>
                <p>Quantity: {this.state.product.quantity}</p>
                <p className="price">Price: ${this.state.product.price}</p>
            </div>
        );
    }
}

export default InventoryItem;