import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import FormField from '../FormField/FormField';
import CoolButton from '../CoolButton/CoolButton';

class Signup extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <form>
                    <FormField
                        label="Name"
                        type="text"
                        placeholder="e.g Alex Smith"
                    />
                    <FormField
                        label="Email"
                        type="email"
                        placeholder="e.g. alexsmith@gmail.com"
                    />
                    <FormField
                        label="Password"
                        type="password"
                        placeholder="e.g. YourPassword"
                    />
                    <CoolButton isSuccess>Submit</CoolButton>
                </form>
            </div>
        );
    }
}

export default Signup;
