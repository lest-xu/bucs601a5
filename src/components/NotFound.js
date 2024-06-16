import { Link } from "react-router-dom";

export default function NotFound(props) {

    return (
        <div>
            <h3>Page not found.</h3>
            <Link to={'/'}>Back to Home</Link>
        </div>
    );
}