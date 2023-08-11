import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Cab5 from "./Cab5";
import Message from './components/message/Message';
import { ToastContainer, toast } from 'react-toastify';
class App extends React.Component {
    render() {
        return <BrowserRouter>
        <ToastContainer theme='dark'/>
            <Route path="/" component={Cab5} />

            <Route  path="/message"  component={Message} />
          
        </BrowserRouter>
    }
}

export default App;