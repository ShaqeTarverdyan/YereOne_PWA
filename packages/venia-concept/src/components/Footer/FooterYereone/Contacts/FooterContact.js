import React from 'react';
import classify from 'src/classify';
import defaultClasses from './FooterContact.css';
import Icon from 'src/components/Icon';
import { FaSkype,FaMapMarkerAlt,FaPhoneSquare,FaFacebookSquare,FaMailBulk } from "react-icons/fa";
class FooterContact extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <div>
                <h4>Contacts</h4>
                <div className={classes.content}>
                     <div >
                         <div> <Icon  src={FaMapMarkerAlt} size={20}/></div>
                         <p>Address:Crockett st. Sun Valley, CA 91352</p>
                     </div>
                     <div>
                         <div > <Icon  src={FaMailBulk} size={20}/></div>
                         <p>Email: info@yereone.com</p>
                     </div>
                     <div>
                         <div> <Icon  src={FaPhoneSquare} size={20}/></div>
                         <p>Tel:1-844-748-4694 (Viber, WhatsApp)</p>
                     </div>
                     <div>
                         <div> <Icon  src={FaSkype} size={20}/></div>
                         <p>Skype: info@yereone.com2</p>
                     </div>
                     <div>
                         <div> <Icon  src={FaFacebookSquare} size={20}/></div>
                         <p>Facebook:Yereone</p>
                     </div>
                </div>
            </div>
        );
    }
}
export default classify(defaultClasses)(FooterContact);