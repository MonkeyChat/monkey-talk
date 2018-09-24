import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap';
import 'font-awesome/css/font-awesome.css';
import './app.scss';
import Navbar from './components/Navbar';
import Chat from './components/chat/Chat';
import 'emoji-mart/css/emoji-mart.css';
import { Picker } from 'emoji-mart';



class Home extends React.Component{

    render(){
        return(
            <React.Fragment>
                <Navbar />
                <Picker set='emojione' />
                <Chat />



            </React.Fragment>
        )
    }
}
export default Home;
