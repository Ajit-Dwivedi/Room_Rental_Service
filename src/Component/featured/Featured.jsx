import { Link, useNavigate } from "react-router-dom"
import "./featured.css"
import myimage1 from "./featured.jpg"
import mumbai from "./mumbai.jpeg"
import nagpur from "./nagpur.jpg"

const Featured = () => {
    const today = new Date();
    const navigate = useNavigate();
    const goToList = (city) => {
        navigate("/hotels", {state: {destination:city, date:[{
            "startDate": today,
            "endDate": today
        }], options : {adult : 1, children:0} }});
        //navigate("/hotels", {state: {destination: city, date: [{startDate : Date.now, endDate: Date.now }], options : {adult : 1, children:0}}})
    }
    return(
        <div className="featured">
            
            <div className="featuredItem" onClick={()=>goToList("Pune")}>
               <img src={myimage1} alt="preview Not Available" className="featuredImg" height={150} width={150}/>
                <div className="featuredTitle">
                    <h1>Pune</h1>
                    <h2>5 properties</h2>
                </div>
                </div>
            <div className="featuredItem" onClick={()=>goToList("Nagpur")}>
               <img src={nagpur} alt="preview Not Available" className="featuredImg" height={150} width={150}/>
                <div className="featuredTitle">
                    <h1>Nagpur</h1>
                    <h2>7 properties</h2>
                </div>
            </div>
            <div className="featuredItem" onClick={()=>goToList("Mumbai")}>
               <img src={mumbai} alt="preview Not Available" className="featuredImg" height={150} width={150}/>
                <div className="featuredTitle">
                    <h1>Mumbai</h1>
                    <h2>11 properties</h2>
                </div>
            </div>
        </div>
    )
}
export default Featured;