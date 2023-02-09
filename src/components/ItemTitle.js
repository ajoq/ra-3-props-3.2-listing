function ItemTitle({ title }) {
    const itemTitle = title < 50 ? title : title.slice(0, 50) + '…';

    return <p className="item-title">{itemTitle}</p>;
}

export default ItemTitle;
