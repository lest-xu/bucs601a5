import { Link, useParams, Navigate  } from "react-router-dom";

export default function ProductDetail(props) {
    const { id } = useParams();
    const index = props.inventories.findIndex(e => e.sku === id);
    let product = {};
    if (index !== -1) {
        product = props.inventories[index];
    } else {
        return <Navigate  to='/'/>
    }

    return (

        <div className="row">
            <div className="col-sm-12 col-md-4">
            </div>
            <div className="col-sm-12 col-md-4">
                <div className="card mb-3" style={{ width: 300 }}>
                    <h3 className="card-header">{product.name}</h3>
                    <img className="d-block user-select-none" src={`${process.env.PUBLIC_URL}/images/${product.imgUrl}`} alt={product.name} style={{width:300}}/>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">SKU: {product.sku}</li>
                        <li className="list-group-item">Quantity: ${product.quantity}</li>
                        <li className="list-group-item">Price: <span className="badge rounded-pill bg-success">${product.price}</span></li>
                    </ul>
                    <div className="card-body">
                        Description: {product.description}
                    </div>
                    <div className="card-footer text-muted">
                        <Link className="card-link" to={'/'}>Back to Home</Link>
                    </div>
                </div>
            </div>
            <div className="col-sm-12 col-md-4">
            </div>
        </div>

    );
}