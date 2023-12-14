import {Link} from 'react-router-dom';
function ProductsPage() {

const PRODUCTS = [
  { id: 1, title: 'Product 1'},
  { id: 2, title: 'Product 2'},
   ]

  return (
  <>
  <h1>The Products Page</h1>
  <ul>
     {PRODUCTS.map((prod) => (
    <li><Link to={`/products/${prod.id}`}>{prod.title}</Link></li>
    ))}
  </ul>
  </>
  );

}

export default ProductsPage;
