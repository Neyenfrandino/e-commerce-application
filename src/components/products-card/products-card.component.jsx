import { useContext } from 'react';
import Button, {BUTTON_TYPE_CLASSES} from '../button/button.component'
import { CartContext } from '../../contexts/cart.context';

import './products-card.style.scss'

const ProductCard = ( { product } ) => {
    const { name, price, imageUrl, id } = product;
    const { AddItemToCart } = useContext(CartContext);

    const handleAddToCart = () => {
        AddItemToCart(product);
    }
    return(
        <div className='product-card-container'>
            <img src= { imageUrl } alt= { `${name}` } />
            <div className='footer'>
                <span className='name'>
                    {name}
                </span>
                <span className='price'>
                    {price}
                </span>
            </div>
          
            <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={ handleAddToCart }>
                Add to Cart
            </Button>
        </div>
    )
}

export default ProductCard