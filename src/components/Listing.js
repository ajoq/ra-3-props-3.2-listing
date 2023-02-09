import ItemTitle from './ItemTitle';
import ItemPrice from './ItemPrice';
import ItemQuantity from './ItemQuantity';

function Listing({ items }) {
    console.log(items);
    const item = items.map(
        (item) =>
            item.state !== 'active' || (
                <div className="item" key={item.listing_id}>
                    <div className="item-image">
                        <a href={item.url}>
                            <img
                                src={item.MainImage.url_570xN}
                                alt={item.title}
                            />
                        </a>
                    </div>
                    <div className="item-details">
                        <ItemTitle title={item.title} />
                        <ItemPrice
                            code={item.currency_code}
                            price={item.price}
                        />
                        <ItemQuantity quantity={item.quantity} />
                    </div>
                </div>
            )
    );

    return <div className="item-list">{item}</div>;
}

Listing.defaultProps = {
    items: [],
};

export default Listing;
