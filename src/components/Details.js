import { useLocation, useNavigate } from "react-router-dom";

export default function Details() {
  const location = useLocation();
  let data = location.state.cardData;
  let navigate = useNavigate();
  const toHome = () => {
    navigate("/");
  };
  return (
    <div className="container-box row">
      <div className="detail--box ">
        <h3 className="detail--headline">More Details</h3>
        <div className="detail--stat">
          <p className="detail--name">Name: "{data.name}"</p>
          <p className="detail--type">Brewery type: "{data.brewery_type}"</p>
          <p className="detail--street">Street: "{data.street}"</p>
          <p className="detail--address_2">Address: "{data.address_2}"</p>
          <p className="detail--address_3">Address: "{data.address_3}"</p>
          <p className="detail--city">City: "{data.city}"</p>
          <p className="detail--state">State: "{data.state}"</p>
          {/* <p className="detail--country_province">{data.country_province} </p> */}
          <p className="detail--postal_code">
            Postal Code: "{data.postal_code}"
          </p>
          {/* <p className="detail--country">{data.country} </p> */}

          <p className="detail--longitude">{data.longitude}</p>
          <p className="detail--latitude">{data.latitude}</p>
          <p className="detail--phone">Phone: "{data.phone}"</p>
          {/* <p className="detail--website_url">{data.website_url}</p>
          <p className="detail--updated_at">{data.updated_at}</p>
          <p className="detail--created_at">{data.created_at}</p> */}
        </div>
        <button
          className="detail--btn fs-5 "
          onClick={() => {
            toHome();
          }}
        >
          Go Back
        </button>
      </div>
    </div>
  );
}
