import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import { ReactComponent as TitleImage } from '../../assets/undraw_All_the_data_re_hh4w.svg';
import { arr } from '../../assets/data.js';
// import { BsArrowRightShort, BsArrowLeft } from 'react-icons/bs';
import './homepage.styles.css';



const Homepage = () => { 
    const [ value, setValue ] = useState(0);
    return (
        <div className='homepage'>
            <div className='title-box'>
                <div className='title'>
                    <h1 className='title-name'>{arr[value].title}</h1>
                    <h4 className='title-description'>{arr[value].description}</h4>
                    <Link to="/features" className='option'>Features</Link>
                    <Link to="/features" className='option'>Features</Link>
                </div>

                <div className='title-image'>
                    <img src={arr[value].image} alt={arr[value].id} />
                </div>
            </div>

            <div className='buttons'>
            <button onClick={() => value === 0 ? setValue(5) : setValue(value - 1)}>
                
            </button>
            <button onClick={() => value === 5 ? setValue(0) : setValue(value + 1)}>
               
            </button>
            </div>

        </div>
    );
}
    
export default Homepage;