import React from 'react';
import classify from 'src/classify';
import defaultClasses from './contacts.css'
const Contact = (props) => {
    const { classes } = props
    return (
        <div className={classes.root}>
            <h1>Contact Us</h1>
            <form >
                <div className={classes.formStyle}>
                    <formItem >
                        <label htmlFor="name">
                            <span>Name</span>
                        </label>
                        <div>
                            <input />
                        </div>
                    </formItem>
                    <formItem>
                        <label htmlFor="naemailme">
                            <span>Email</span>
                        </label>
                        <div>
                            <input />
                        </div>
                    </formItem>
                    <formItem>
                        <label htmlFor="Phone NUmber">
                            <span>Phone NUmber</span>
                        </label>
                        <div>
                            <input />
                        </div>
                    </formItem>
                    <formItem>
                        <label htmlFor="textarea">
                            <span>Whats on your mind</span>
                        </label>
                        <div>
                            <textarea />
                        </div>
                    </formItem>
                </div>
                <button className={classes.submitButton}>Submit</button>
            </form>
        </div>
    );
}

export default classify(defaultClasses)(Contact);