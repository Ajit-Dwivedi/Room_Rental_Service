import "./featuredProperties.css"
import hotel3 from "./hotel3.jpeg";
import hotel2 from "./hotel2.jpeg";
import hotel1 from "./hotel.jpeg";
import hotel from "./hotel.jpeg";
const FeaturedProperties = () => {
    return (
        <div className="fp">
            <div className="fpItem">
            <img src={hotel} className="fpImg" alt="preview Not Available" height={150} width={150} />
            <span className="fpName">Hotel Conrad </span>
            <span className="fpCity">Pune </span>
            <span className="fpPrice">Starting from ₹2000</span>
            <div className="fpRating">
                <button>8.9</button>
                <span>Excellent</span>
            </div>
            </div>

            <div className="fpItem">
            <img src={hotel1} className="fpImg" alt="preview Not Available" height={150} width={150} />
            <span className="fpName">Hotel Radisson blu </span>
            <span className="fpCity">Pune </span>
            <span className="fpPrice">Starting from ₹5000</span>
            <div className="fpRating">
                <button>8.9</button>
                <span>Excellent</span>
            </div>
            </div>

            <div className="fpItem">
            <img src={hotel2} className="fpImg" alt="preview Not Available" height={150} width={150} />
            <span className="fpName">Hotel JW-Marriot </span>
            <span className="fpCity">Pune </span>
            <span className="fpPrice">Starting from ₹12000</span>
            <div className="fpRating">
                <button>8.9</button>
                <span>Excellent</span>
            </div>
            </div>

            <div className="fpItem">
            <img src={hotel3} className="fpImg" alt="preview Not Available" height={150} width={150} />
            <span className="fpName">Hotel SayaJi </span>
            <span className="fpCity">Pune </span>
            <span className="fpPrice">Starting from ₹8000</span>
            <div className="fpRating">
                <button>8.9</button>
                <span>Excellent</span>
            </div>
            </div>
        </div>

        
        
    )
}

export default FeaturedProperties