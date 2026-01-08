import "./TripStyles.css";
import TripData from "./TripData";
import Trip1 from "../assests/5.jpg";
import Trip2 from "../assests/6.jpg";
import Trip3 from "../assests/9.jpg";   


function Trip (){
    return(
        <div className="trip">
            <h1>Recent Trips</h1>
            <p className="trip-para">You can discover unique destinations using Google Maps.</p>
            <div className="tripcard">
                <TripData
                image={Trip1}
                heading="Trip in Indonesia"
                text="Indonesia, officially the Republic of Indonesia, is a country in Southeast Asia and Oceania between the Indian and Pacific oceans. It consists of over 17,000 islands, including Sumatra, Java, Sulawesi, and parts of Borneo and New Guinea."

                />
                <TripData
                image={Trip2}
                heading="Trip in France"
                text="Indonesia, officially the Republic of Indonesia, is a country in Southeast Asia and Oceania between the Indian and Pacific oceans. It consists of over 17,000 islands, including Sumatra, Java, Sulawesi, and parts of Borneo and New Guinea."
                
                />
                <TripData
                image={Trip3}
                heading="Trip in Italy"
                text="Indonesia, officially the Republic of Indonesia, is a country in Southeast Asia and Oceania between the Indian and Pacific oceans. It consists of over 17,000 islands, including Sumatra, Java, Sulawesi, and parts of Borneo and New Guinea."
                
                />
            </div>
        </div>
    )
}

export default Trip; 