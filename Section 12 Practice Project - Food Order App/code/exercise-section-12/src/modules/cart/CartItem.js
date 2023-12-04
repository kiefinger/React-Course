import classes from './CartItem.css';

const CartItem = (props) => {
  const price = `$${props.item.price.toFixed(2)}`;

  return (
    <li className='cart-item' key={props.item.id}>
      <div>
        <h2>{props.item.name}</h2>
        <div className="cart-item__summary">
          <span className="cart-item__price">{price}</span>
          <span className="cart-item__amount">{props.item.amount}</span>
        </div>
      </div>
      <div className="actions">
        <button onClick={props.onRemove}>−</button>
        <button onClick={props.onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
