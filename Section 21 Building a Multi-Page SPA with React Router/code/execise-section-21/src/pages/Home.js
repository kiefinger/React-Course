import { Link, useNavigate } from 'react-router-dom';

function HomePage() {
 const navigate = useNavigate();
  function navigateHandler(){
    navigate('/products');
    }

  return ( <>
    <h1>My Home Page</h1>
    <p> goto <Link to="products"> te list of products</Link></p>
    <p><button onClick={navigateHandler}>Navigate to products</button></p>
    </> );
}

export default HomePage;
