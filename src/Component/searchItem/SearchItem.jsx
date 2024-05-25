import "./searchItem.css"
import { Link } from "react-router-dom";
const SearchItem = (props) => {
    const hotel = props.hotel;                                                                                  const rating = (Math.random() * (5 - 4) + 4).toFixed(1);
    const staticImage = "https://images.pexels.com/photos/314937/pexels-photo-314937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    return (
        <div className="searchItem">
            <img src={hotel.imageUrls[0] || staticImage} className="siImg" alt="preview Not Available" height={150} width={150} />
            <div className="siDesc">
                <h1 className="siTitle"> { hotel.name }</h1>
                <span className="siDastance">{ hotel.address.street }, {hotel.address.city }, {hotel.address.state }</span>
              <span className="siTaxiOp">Free airport taxi</span>
              {/* <span className="siSubtitle">
                { hotel.features }   
            </span> */}
            <span className="siFeatures">
                {hotel.features} 
           </span>  
           <span className="siCancelOp">Free cancellation</span>
           <span className="siCancelOpSubtitle">
            You can Cancel lateer, so lock in this great price today!
           </span>
            </div> 
            <div className="siDetails">
                <div className="siRating">
                    
                    
                    <span> Excellent </span>
                    <button>{ rating }</button>
                </div>
                <div className="siDetailText">
                    <span className="siPrice">₹ { hotel.pricePerNight}</span>
                    <span className="siTaxOp">Includes taxes and fees  </span>
                    <Link to={`/hotels/` + hotel.id}>
                        <button className="siCheckButton">See availability</button>
                    </Link>

                </div>
            </div>
        </div>
    )
}

export default SearchItem