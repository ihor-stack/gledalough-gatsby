// core
import * as React from 'react'
import { useEffect, useState, useRef } from 'react'
import parse from 'html-react-parser'

// resources
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'

export const ProductLocator = ({ slice }) => {
  const data = slice.primary;
  const items = slice.items;
  const [placeID, setPlaceID] = useState(null)
  //eslint-disable-next-line no-unused-vars
  const [placeZipcode, setPlaceZipcode] = useState(null)
  const google = useRef(null)

  // console.log('slice data from locator', slice)
  // console.log('activeDocMeta from locator slice', activeDocMeta)

  const handleInputChange = (e) => {
    if(placeID){
      setPlaceID(null)
      setPlaceZipcode(null)
    }
  }
  
  const init = () => {
    const input = document.getElementById('pac-input')
    const autocomplete = new google.current.maps.places.Autocomplete((input), {
      types: ['geocode'],
      componentRestrictions: {country: "us"}
    });

    google.current.maps.event.addListener(autocomplete, 'place_changed', function(){
      const near_place = autocomplete.getPlace();
      setPlaceID(near_place.place_id)
      const address_component = near_place.address_components;
      address_component.forEach((val) => {
        if(val.types[0] === 'postal_code'){
          setPlaceZipcode(val.short_name)
        }
      })
    });
  }

  const handleSearch = () => {
    // TODO: when spanish locale setup update this to change URL
    // if (current_language == "en") {
    //   let target_link = "https://locator.whiteclaw.com/results?ag=false&place=[GOOGLE_ID]&method=delivery";
    // }else{
      //   let target_link = "https://locator.whiteclaw.com/es/results?ag=false&place=[GOOGLE_ID]&method=delivery";
      // }
      
    let target_link = "https://locator.whiteclaw.com/results?ag=false&place=[GOOGLE_ID]&method=delivery";

    if (placeID) {
      //if place id is set
      target_link = target_link.replace("[GOOGLE_ID]", placeID);
      let current_url = window.location.href;
      if (current_url.includes("dev.")) {
        target_link = target_link.replace("https://locator.whiteclaw.com", "https://wc-pl-staging.netlify.app");
      }
      try {
        window.location = target_link;

        // TODO: update this when data later is setup
        //Google Analytics Event
        // ga("gtm2.send", "event", "SearchHome", "search location", `${place_zipcode}`);
      } catch (e) {
        console.warn(e);
      }
    } else {
      //give warning to the User
      document.querySelector(".product-locator__input").classList.add("not-valid");
      setTimeout(function () {
        document.querySelector(".product-locator__input").classList.remove("not-valid");
      }, 1000);
    }
  }

  useEffect(() => {
    const waitForGoogleWindowObj = () => {
      google.current = window.google
      if (google.current) {
        init()
      } else {
        setTimeout(waitForGoogleWindowObj, 250)
      }
    }
    waitForGoogleWindowObj()
  }, []);

  return (
    <>
      <div className="product-locator">
        {data.locator_title.text ? <h2 className="product-locator__title">{parse(data.locator_title.text)}</h2> : null}
        <div className="product-locator__input">
        <FontAwesomeIcon icon={faLocationDot} className="fa-solid product-locator__field-icon"/>
          <input
            id="pac-input"
            autoComplete="off"
            type="text"
            className="product-locator__field"
            placeholder={data.locator_field_placeholder ? data.locator_field_placeholder : null}
            onChange={(e) => handleInputChange(e)}
          />
          <button className="product-locator__button" onClick={handleSearch}>
            {data.locator_button_text}
          </button>
        </div>
        {data.locator_description.text ? <div className="product-locator__description">{parse(data.locator_description.text)}</div> : null}
        <div className="product-locator__info row">
          {items.map((element, index) => {
            return (
              <div key={index} className="product-locator__item col">
                {element.locator_type_icon.url ? <img className="product-locator__item-icon" src={element.locator_type_icon.url} alt={element.locator_type_icon.alt} /> : null}
                {element.locator_type_text ? <div className="product-locator__item-text">{element.locator_type_text}</div> : null}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};