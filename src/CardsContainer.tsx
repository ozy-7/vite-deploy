import React from "react";
import './Header.css';
//@ts-ignore
import Card from './Card';
import steamLogo from './assets/Steam.png';
import eaLogo from './assets/EA.webp';
import instagramLogo from './assets/Instagram.png'

function CardsContainer () {
    return (
        <div className="card">
        <Card
            logo={instagramLogo}
            title="Instagram"
            color="rgba(141,12,86,255)"
            link="https://www.instagram.com/ozanceng/"
            text="      "
        />

        <Card 
            logo={steamLogo} 
            title="Steam" 
            color="rgba(17,50,93,255)" 
            link="https://steamcommunity.com/id/ozzy1327"
            text="      "

        />
        <Card 
            logo={eaLogo} 
            title="EA" 
            color="rgba(182,56,78,255)" 
            text="/ozy360"
        />
    </div>
    );
}