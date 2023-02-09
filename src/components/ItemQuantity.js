function ItemQuantity({ quantity }) {
    const quantityClassName =
        (quantity <= 10 && 'item-quantity level-low') ||
        (quantity < 20 && 'item-quantity level-medium') ||
        'item-quantity level-high';

    return <p className={quantityClassName}>{quantity} left</p>;
}

export default ItemQuantity;
