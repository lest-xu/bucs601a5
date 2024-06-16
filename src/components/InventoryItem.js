import React from 'react';
import { Link } from 'react-router-dom';

class InventoryItem extends React.Component {
    constructor(props) {
        super(props);
        // assign the handleDelete from the props [InventoryList]
        this.handleDelete = props.handleDelete;
        this.state = { product: props.product }; // assign the product value from props
    }

    // define a default handleDelete function
    handleDelete = (sku) => this.handleDelete;

    render() {
        return (
            <div className='grid-item'
                style={{ backgroundImage: `url(${this.state.product.imgUrl})` }}>
                <div className='fw-bold'>
                    {this.state.product.name}
                </div>
                <div className='text-end'>
                    {/* set onClick event to handleDelete with sku as param */}
                    <button type='button' className='btn btn-danger btn-sm' onClick={ ()=> this.handleDelete(this.state.product.sku)}>Delete</button>
                    <Link className="btn btn-link" to={`/product/${this.state.product.sku}`}>Detail</Link>
                </div>
                <div>SKU: {this.state.product.sku}</div>
                <div>Quantity: {this.state.product.quantity}</div>
                <div>Price: <span className='text-success'>${this.state.product.price} </span></div>
            </div>
        );
    }
}

export default InventoryItem;