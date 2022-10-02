import React from "react";
import "./App.css"

function Print() {
    const inputvalue = document.getElementById("input").value
    return (
        alert(inputvalue)
    )
}

function CovidReport() {
    const [isLoading, setIsLoading] = React.useState(true);
    const [tdata, setData] = React.useState([]);

    // React.useEffect(()=>{
    const url = "https://corona-api.com/countries";

    fetch(url)
        .then((response) => response.json())
        .then((json) => setData(json['data']))
        .catch((error) => console.log(error));
    // },[]);

    React.useEffect(() => {
        if (tdata.length !== 0) {
            setIsLoading(false);
        }

        // console.log(tdata);
    }, [tdata]);


    return (
        <>
            <div>
                {isLoading ? (
                    <h1>Loading....</h1>
                ) : (tdata.map((user) => (
                    <>
                        <div id="detail">
                            <h1>Country :<span>{user.name}</span> </h1>
                            <div id="detail2">
                                <div id="Population">        <div><p><strong>Population</strong></p><p id="num">{user.population}</p>                               </div></div>
                                <div id="death">         <div><p><strong>Death</strong></p><p id="num">{user.latest_data.deaths}</p>                          </div></div>
                                <div id="confirmed">     <div><p><strong>Confirmed</strong></p><p id="num">{user.latest_data.confirmed}</p>                   </div></div>
                                <div id="recovered">     <div><p><strong>recovered</strong></p><p id="num">{user.latest_data.recovered}</p>                   </div></div>
                                <div id="critical">      <div><p><strong>critical</strong></p><p id="num">{user.latest_data.critical}</p>                     </div></div>
                                <div id="rate">          <div><p><strong>Rcovered Rate</strong></p><p id="num">{user.latest_data.calculated.recovery_rate}</p></div></div>
                            </div>
                        </div>
                    </>

                ))
                )}
            </div>

        </>
    );

}

export default CovidReport;

