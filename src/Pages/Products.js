import { Link } from "react-router-dom";


const Products = () => {
    const products = [
        { id: '1', title: 'Product 1' },
        { id: '2', title: 'Product 2' },
        { id: '3', title: 'Product 3' },
        { id: '4', title: 'Product 4' },
        { id: '5', title: 'Product 5' },
        { id: '6', title: 'Product 6' },
    ]
    return <>
        <h1>Products Page</h1>
        <ul>
            {products.map((prod) => (
                <li key={prod.id}>
                    <Link to={`/products/${prod.id}`}>{prod.title}</Link>
                </li>
            )
            )}
        </ul>
    </>
}

export default Products;