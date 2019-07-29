import React from 'react';
import './Page.css';
import PersonalData from "./PersonalData"

function Page() {
    return (
        <div className="page">
            <h3> Общие данные клиента</h3>
            <br/>
            <ul>
                <li> <b>Номер лицевого счета:</b>  {PersonalData.number} </li>
                <li> <b>Номер лицевого счета в системе ГИС ЖКХ:</b>  {PersonalData.number} </li>
                <li> <b>ФИО:</b>  {PersonalData.lastName} {PersonalData.firstName} {PersonalData.patronymic } </li>
                <li> <b>Город:</b>  {PersonalData.cityName} </li>
                <li> <b>Улица:</b>  {PersonalData.street} </li>
                <li> <b>Дом, корпус, квартира:</b>  {PersonalData.house}д., {PersonalData.corps}корп., {PersonalData.flat}кв.</li>
                <li> <b>Телефон:</b>  {PersonalData.phone} </li>
            </ul>
        </div>
    )
}

export default Page;
