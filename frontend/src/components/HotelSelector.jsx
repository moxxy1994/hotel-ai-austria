function HotelSelector({
    hotelId,
    setHotelId
}) {


    return (

        <div className="hotel-selector">


            <label>

                🏨 Hotel auswählen

            </label>



            <select

                value={hotelId}

                onChange={(e)=>

                    setHotelId(e.target.value)

                }

            >


                <option value="001">

                    Hotel Sonnenblick

                </option>


                <option value="002">

                    City Hotel Wien

                </option>


                <option value="003">

                    Bergblick Hotel Graz

                </option>


            </select>


        </div>

    );

}


export default HotelSelector;