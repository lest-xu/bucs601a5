import React from 'react';

class AddItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = { name: '', sku: '' };
    }

    handleSubmit = (e) => {
        // Prevent the browser from reloading the page
        e.preventDefault();
        // Read the form data
        const form = e.target;
        const formData = new FormData(form);
        const formJson = Object.fromEntries(formData.entries());
        console.log(formJson);
    }


    render() {
        return (
            <form method="post" onSubmit={this.handleSubmit} className="card bg-secondary mb-3">
                <div className="card-header">Add an item</div>
                <div className="card-body">
                    <div className="row">
                        <label htmlFor="itemName" className="col-sm-4 col-form-label">Name</label>
                        <div className="col-sm-8">
                            <input type="text" className="form-control-plaintext" name="itemName" />
                        </div>
                    </div>
                    <div className="row">
                        <label htmlFor="itemSku" className="col-sm-4 col-form-label">SKU</label>
                        <div className="col-sm-8">
                            <input type="text" className="form-control-plaintext" name="itemSku" />
                        </div>
                    </div>
                    <div className="row">
                        <label htmlFor="itemQuantity" className="col-sm-4 col-form-label">Quantity</label>
                        <div className="col-sm-8">
                            <input type="number" className="form-control-plaintext" name="itemQuantity" />
                        </div>
                    </div>
                    <div className="row">
                        <label htmlFor="itemPrice" className="col-sm-4 col-form-label">Price</label>
                        <div className="col-sm-8">
                            <input type="number" className="form-control-plaintext" name="itemPrice" />
                        </div>
                    </div>
                    <div className="row">
                        <label htmlFor="itemImgUrl" className="col-sm-4 col-form-label">Image Url</label>
                        <div className="col-sm-8">
                            <input type="text" className="form-control-plaintext" name="itemImgUrl" />
                        </div>
                    </div>
                    <div className='text-end mt-3'>
                        <button type='submit' className='btn btn-primary' >Add</button>
                        <button type='reset' className='btn btn-secondary ms-2' >Cancel</button>
                    </div>

                </div>
            </form>
        );
    }
}

export default AddItem;