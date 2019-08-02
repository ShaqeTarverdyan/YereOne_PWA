import React, { Component } from 'react';
import { connect } from 'src/drivers';
import { RadioGroup, Radio, } from 'informed';
import defaultClasses from './paymentMethods.css';
import Label from './label';


class PaymentMethods extends Component {
    render() {
        const { cart, onSelect } = this.props
        return (
            <div className={defaultClasses.root}>
                <RadioGroup>
                    {cart.paymentMethods.map((item,i) =>
                        <Label key={i}>
                            {item.title}
                            <Radio value={item.code} onClick={() => onSelect(item.code, item.title)}/>
                        </Label>
                    )}
                </RadioGroup>

            </div>
        );
    }
}
const mapStateToProps = ({ cart }) => ({
    cart
});

export default connect(mapStateToProps)(PaymentMethods);