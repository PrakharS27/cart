import React from 'react';
class CartItem extends React.Component{
    constructor(){
        super();
        this.state = {
            price: 999,
            title:'Phone',
            qty: 1,
            img:''
        }

    }
    increaseQuantity = () => {
        // console.log('this', this.state);
        this.setState({
            qty: this.state.qty + 1
        })
      }

    render(){
        const{price,title,qty}=this.state;
        return(
            <div className="cart-item">
                <div className="left-block">
                <img style={style.image} />
                </div>
                <div className="right-block">
                    <div style={{fontSize:25}}>{title}</div>
                    <div style={{color:'#777'}}>{price}</div>
                    <div style={{color:'#777'}}>{qty}</div>
                    <div className="cart-item-actions">
                        {/*Buttons*/}
                        <img alt="increase" className='action-icons' src="https://img.icons8.com/ios/344/plus--v1.png"
                        onClick={this.increaseQuantity}/>
                        <img alt="decrease" className='action-icons' src="https://img.icons8.com/ios/344/minus.png"/>
                        <img alt="delete" className='action-icons' src="https://img.icons8.com/carbon-copy/344/filled-trash.png"/>
                    </div>
                    <div></div>

                </div>
                </div>
        );
    }
}

const style={
    image:{
        height:110,
        width:110,
        borderRadius:4,
        background:'#ccc'
    }
}
export default CartItem;