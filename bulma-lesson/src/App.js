import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';

// Custom Components
import Navbar from './Components/Navbar/Navbar';
import FormField from './Components/FormField/FormField';
import CoolButton from './Components/CoolButton/CoolButton';
import Signup from './Components/Signup/Signup';

function App() {
    return (
        <div>
            {/* <Navbar />
            <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
            <FormField
                label="Email"
                type="email"
                placeholder="e.g. alexsmith@gmail.com"
            />
            <CoolButton isSmall isDanger className="is-rounded my-class">
                Button 1
            </CoolButton>
            <CoolButton isSmall isSuccess>
                Button 2
            </CoolButton> */}
            <Signup />
        </div>
    );
}

export default App;
