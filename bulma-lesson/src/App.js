import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';

// Custom Components
import Navbar from './Components/Navbar/Navbar';
import FormField from './Components/FormField/FormField';

function App() {
    return (
        <div>
            <Navbar />
            <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
            <FormField
                label="Email"
                type="email"
                placeholder="e.g. alexsmith@gmail.com"
            />
        </div>
    );
}

export default App;
