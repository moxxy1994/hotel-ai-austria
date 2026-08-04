import { useEffect, useState } from "react";


function AdminPanel() {


    const [hotelId, setHotelId] = useState("001");

    const [hotel, setHotel] = useState(null);

    const [message, setMessage] = useState("");



    useEffect(()=>{


        loadHotel();


    },[hotelId]);




    async function loadHotel(){


        const response = await fetch(

            `http://localhost:3000/api/admin/${hotelId}`

        );


        const data =
            await response.json();


        setHotel(data);


    }




    function updateField(field,value){


        setHotel({

            ...hotel,

            [field]:value

        });


    }




    function updateBreakfast(value){


        setHotel({

            ...hotel,

            breakfast:{

                ...hotel.breakfast,

                time:value

            }

        });


    }




    function updateCheckIn(value){


        setHotel({

            ...hotel,

            checkIn:{

                ...hotel.checkIn,

                time:value

            }

        });


    }




    async function saveHotel(){



        const response = await fetch(

            `http://localhost:3000/api/admin/${hotelId}`,

            {

                method:"PUT",

                headers:{

                    "Content-Type":
                    "application/json"

                },

                body:

                JSON.stringify(hotel)

            }

        );



        const data =
            await response.json();



        setMessage(
            data.message
        );


    }





    if(!hotel){

        return (

            <div className="card">

                Lade Hotel...

            </div>

        );

    }





    return (

        <div className="card admin-panel">



            <h2>
                ⚙️ Hotel Verwaltung
            </h2>



            <label>
                🏨 Hotel auswählen
            </label>



            <select

                value={hotelId}

                onChange={(e)=>
                    setHotelId(
                        e.target.value
                    )
                }

            >

                <option value="001">

                    Hotel Sonnenblick

                </option>


                <option value="002">

                    City Hotel Wien

                </option>


            </select>





            <label>
                Hotelname
            </label>


            <input

                value={hotel.hotelName}

                onChange={(e)=>
                    updateField(
                        "hotelName",
                        e.target.value
                    )
                }

            />





            <label>
                🕒 Check-in
            </label>


            <input

                value={
                    hotel.checkIn.time
                }

                onChange={(e)=>
                    updateCheckIn(
                        e.target.value
                    )
                }

            />





            <label>
                🍳 Frühstück
            </label>


            <input

                value={
                    hotel.breakfast.time
                }

                onChange={(e)=>
                    updateBreakfast(
                        e.target.value
                    )
                }

            />





            <button

                onClick={saveHotel}

            >

                💾 Speichern

            </button>



            <p>

                {message}

            </p>



        </div>

    );


}



export default AdminPanel;