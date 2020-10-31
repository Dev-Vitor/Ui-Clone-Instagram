import React from 'react';
import './Navbar.css'
import { AiOutlineSearch, AiFillHome , AiOutlineCompass, AiOutlineHeart} from 'react-icons/ai'
import { FaRegPaperPlane } from 'react-icons/fa'

import Logo from './images/Instagram_logo.svg.png'
import Photo from './images/photo.jpeg'



export default () => 
     <nav className='navbar'>
        <div className='logo'>
            <img src={Logo} alt="Instagram" className='img-logo' />
        </div>
        <div className='search'>
            <input type="text" className='input-search' id='input'/>
            <label htmlFor='input' className='button-search'>
                <span className='span-search-icon'>
                    <AiOutlineSearch size='16px' />
                </span>
            </label>
        </div>
        <div className='nav-itens'>
            <AiFillHome size='23px' className='nav-itens-itens'/>
            <FaRegPaperPlane size='23px' className='nav-itens-itens'/>
            <AiOutlineCompass size='23px' className='nav-itens-itens'/>
            <AiOutlineHeart size='23px' className='nav-itens-itens'/>
            <div className='div-img'>
                <img src={Photo} alt="You" className='nav-itens-itens'/>
            </div>
        </div>
    </nav>
