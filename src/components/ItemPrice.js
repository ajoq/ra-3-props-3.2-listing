function ItemPrice({ code, price }) {
    const itemPrice =
        (code === 'USD' && '$' + price) ||
        (code === 'EUR' && '€' + price) ||
        price + ' GBP';

    return <p className="item-price">{itemPrice}</p>;
}

export default ItemPrice;
