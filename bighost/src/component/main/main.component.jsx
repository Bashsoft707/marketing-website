import React from 'react';
import Header from '../header/header.component';
import Homepage from '../homepage/homepage.component';
import Features from '../features/features.component';

class Main extends React.Component {
    

    render(){
        return(
            <div className='main-component'>
                <Header />
                <Homepage />
                <Features />
            </div>
        )
    }
}

export default Main;