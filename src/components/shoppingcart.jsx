import React from "react";

class ShoppingCart extends React.Component {
    state = {
        items: [
            {
                amount: 1,
                name: "test",
                price: 10
            },
            {
                amount: 1,
                name: "zwei",
                price: 10
            },
            {
                amount: 1,
                name: "drei",
                price: 10
            }
        ]
    }
    render() {
        return <div className='shopping-cart'>
            <h2>Warenkorb</h2>
            {this.state.items.map(item => <div key="item.name">{item.amount} x {item.name} x {item.price}</div>)}
        </div>;
    }
}

export default ShoppingCart;
