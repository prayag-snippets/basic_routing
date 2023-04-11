import { useParams } from "react-router-dom";

const ProductDetail = () =>{
    const params = useParams();

    

    return <>
        <h1>Product Details</h1>
        <p>{params.productID}</p>
    </>
}
export default ProductDetail;