import Mountain1 from '../assests/1.jpg';
import Mountain2 from '../assests/2.jpg';
import Mountain3 from '../assests/3.jpg';
import Mountain4 from '../assests/4.jpg';
import './DestinationStyles.css';

const Destination = () =>{
    return(
        <div className="destination">
            <h1>Popular Destinations</h1>
            <p>Tours give you the opportunity to see a lot, within a time frame.</p>
       

        <div className="first-des">
            <div className="des-text">
                <h2>Taal Volcano, Batangas</h2>
                <p>One of the most iconic views in Luzon, Mt. Taal boasts a volcano inside a lake inside an island. If you fancy a closer look, the hike up to the crater is a mere 45 minutes, and is easy enough for beginners. Guides will assist you most of the way, and you'll see the peculiar environment found on an active volcano, including volcanic rocks and steam vents. The hike can be dusty and hot, so plan accordingly. </p>

            </div>
            <div className="image">
                <img alt="img" src={Mountain1}/>
                <img alt="img" src={Mountain2}/>
            </div>
        </div>
        </div>

    );
};

export default Destination;