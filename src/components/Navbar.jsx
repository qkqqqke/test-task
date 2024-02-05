import React from 'react';
import logo from '../source/Group 1.png'
import { Link } from 'react-router-dom'


const Navbar = () => {
    return (
        <nav>
            <ul>
                <li>Главная</li>
                <li>О нас</li>
                <li>Оплатить подписку</li>
                <div className="logoBox">
                    <img src={logo} alt="" />
                </div>
                <li><Link to='/Feedback' >Отзывы</Link></li>
                <li>Помощь</li>
                <li>Контакты</li>
            </ul>
        </nav>
    );
};

export default Navbar;