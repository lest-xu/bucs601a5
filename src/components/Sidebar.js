import React from 'react';
import AddItem from './AddItem';

class Sidebar extends React.Component {

    constructor(props) {
        super(props);
        this.state = { isAddItemVisible: false, addBtnName : 'Add item'};
    }

    showAddItem = () => {
        if (this.state.isAddItemVisible) {
            this.setState({ isAddItemVisible: false, addBtnName : 'Add item'});
        } else {
            this.setState({ isAddItemVisible: true, addBtnName : 'Done'});
        }
    }

    render() {
        return (
            <div className='sidebar'>
                <h2>📑 Inventory Management</h2>
                <p>Click the following buttons to add groceries to the inventory</p>
                <div className="row">
                    <div className="col">
                        <button type="button" className="btn btn-primary" onClick={this.showAddItem} >{this.state.addBtnName}</button>
                    </div>
                    <div className="col">
                        <button type="button" className="btn btn-Secondary">Reload</button>
                    </div>
                </div>
                <br />
                <div className={this.state.isAddItemVisible ? null : 'visually-hidden'}>
                    <AddItem></AddItem>
                </div>
            </div>
        );
    }
}

export default Sidebar;