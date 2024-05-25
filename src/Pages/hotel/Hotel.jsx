import "./hotel.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import useFetch from "../../hooks/useGetFetch";
import { useLocation } from "react-router-dom";
import Navbar from "../../Component/navbar/Navbar";
const Hotel = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const { data, loading } = useFetch("/properties/" + id);
  
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);

  const photos = data.imageUrls;
  console.log("hello",data, "loading", loading);
  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction , length) => {
    let newSlideNumber;
    
    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? length-1 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === length-1 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber);
  };

    return (
    
        <div>
             <Navbar/>
            {loading ? ("Loading Data") :
            
            
            
            <>
                <h1>{  data.title }</h1>
      <div className="hotelContainer">
        {open && (
                        
          <div className ="slider">
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="close"
              onClick={() => setOpen(false)}
            />
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              className="arrow"
              onClick={() => handleMove("l", photos.length)}
            />
            <div className="sliderWrapper">
              <img src={photos[slideNumber]} alt="" className="sliderImg" />
            </div>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="arrow"
              onClick={() => handleMove("r", photos.length)}
            />
          </div>
        )}
        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book Now!</button>
                        <h1 className="hotelTitle">{ data.name }</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
                            <span>{ data.address.street }, { data.address.city }, { data.address.state }</span>
          </div>
          <span className="hotelDistance">
            Excellent location – 500m from center
          </span>
          <span className="hotelPriceHighlight">
            Book a stay over ${data.pricePerNight} at this property and get a free airport taxi
          </span>
          <div className="hotelImages">
            {photos.map((photo, i) => (
              <div className="hotelImgWrapper" key={i}>
                <img
                  onClick={() => handleOpen(i)}
                  src={photo}
                  alt=""
                  className="hotelImg"
                  height={150}
                  width={150}
                />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
                                <h1 className="hotelTitle">{ data.features }</h1>
              <p className="hotelDesc">
                {data.description}
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a 9-night stay!</h1>
              <span>
                Located in the real heart of  { data.address.city }, this property has an
                excellent location score of 9.8!
              </span>
              <h2>
                <b>$945</b> (9 nights)
              </h2>
              <button>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
      </div>
      </> }
    </div>
  );
};

export default Hotel;
