import { useNavigate } from "react-router-dom";
const Home = () =>{

    const navigate = useNavigate();

    function navigateHandler() {
        navigate("/products");
    }
    return <>
    <h1>My Home</h1>
    <button onClick={navigateHandler}>Navigate</button>
    </>
}

export default Home;