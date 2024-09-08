//@ts-ignore
import Card from './Card';
import steamLogo from './assets/Steam.png';
import eaLogo from './assets/EA.webp';
import './App.css';

function App() {
    return (
        <div className="card-container">
            <Card 
                logo={steamLogo} 
                title="Steam" 
                color="#ff6347" 
                link="https://steamcommunity.com/id/ozzy1327"
                username=" "

            />
            <Card 
                logo={eaLogo} 
                title="EA" 
                color="#4682b4" 
                username="ozy360"
            />
        </div>
    );
}

export default App;
