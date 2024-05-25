import bunglow from "./bunglow.jpg";
import resort from "./resort.jpg";
import apartment from "./apartment.jpg";
import villa from "./villa.jpg";
import "./propertyList.css";
import useFetch from "../../hooks/useGetFetch";

const images = {
    "Bunglow": bunglow,
    "Resort": resort,
    "Apartment": apartment,
    "Villa" : villa
}
const PropertyList = () => {
  const { data, loading } = useFetch("/properties/type/count");
  console.log(data);
  return loading ? (
    "Loading data"
  ) : (
    <div className="pList">
      {
        data.map((hotelTypeCount) => {
         return <div className="pListItem">
            <img
              src={images[hotelTypeCount.type]}
              alt="preview Not Available"
              className="pListImg"
              height={150}
              width={150}
            />
            <div className="pListTitle">
              <h1>{hotelTypeCount.type}</h1>
              <h2>{hotelTypeCount.count} {hotelTypeCount.type}s</h2>
            </div>
          </div>
          })        
      }
    </div>
  );
};
export default PropertyList;
