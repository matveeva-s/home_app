import React from 'react';
import './Menu.css';
import PersonalData from "./PersonalData"

function Menu() {
    return (
        <div className="widget">
            <h3> {PersonalData.lastName} {PersonalData.firstName} {PersonalData.patronymic }</h3>
            <ul>
                <li><a href="">Общие данные</a></li>
                <li><a href="">Приборы</a></li>
                <li><a href="">Показания</a></li>
                <li><a href="">Данные по месяцам</a></li>
                <li><a href="">Задолженности</a></li>
            </ul>
        </div>
    )
}

export default Menu;
