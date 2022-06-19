import React, {useState} from "react";


function HogWild({hog}){
    const [stats, setStats] = useState(false)

    function handleStats(){
        setStats(!stats)
    }

    return (
        <div onClick={handleStats} className="ui eight wide column">
            <h3>{hog.name}</h3>
            <img src={hog.image} alt={hog.name}></img>
            { stats ? 
            <div>
                <p>Specialty: {hog.specialty}</p>
                <p>Weight: {hog.weight}</p>
                <p>Greased: {hog.greased? "Greased" : "Not Greased"}</p>
                <p>Highest Medal Achieved {hog["highest medal achieved"]}</p>
                </div> : null}
        </div>
    )
}

export default HogWild