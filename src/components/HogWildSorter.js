import React, {useState} from "react";
import HogWild from "./HogWild";
import hogs from "../porkers_data";

function HogWildSorter(){
    const [sort, setSort] = useState("default")
    const [greased, setGreased] = useState(false)

    function handleSort(){

        const hogFilter = hogs.filter(hog => {
            if (greased){
                return hog.greased
            } else {
                return true
            }
        })
        
        if (sort === "default"){
            return hogFilter
        } else if (sort === "name"){
            return hogFilter.sort((a,b) => a.name.localeCompare(b.name))
        } else {
            return hogFilter.sort((a,b) => {return b.weight- a.weight})
            }
    }

   function handleSelect(e){
    setSort(e.target.value)
   }

   function hogUpdater(){
    return (
        handleSort().map((hog, index) => {return <HogWild key={index} hog={hog}/>}
    ))
   }

   function handleGreased(){
    setGreased(!greased)
   }

 return (
    <>
    <div>
    <button onClick={handleGreased}>{greased ? "Greased Hogs only" : "All Hogs" }</button> 
     <select onChange={handleSelect}>
        <option value="default">default</option>
        <option value="name">name</option>
        <option value="weight">weight</option>
    </select>
    </div>
    <br></br>
    <div className="ui grid container">
    
    </div>
    <br></br>
     <div className="">
     {hogUpdater()}
     </div>    
    </>
 )
}

export default HogWildSorter
