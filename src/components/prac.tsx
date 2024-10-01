import { useState } from "react";
import {initialTravelPlan} from '';

export default function TravelPlan(){
  const [plan,setPlan] = useState(initialTravelPlan);

  const root = plan[0]
  return (
    <>
      <h2>Places to visit</h2>
      <ol>
        {root.childIds.map(id =>(
          <PlaceTree />
        ))}


      </ol>

    
    </>
  )
}

useEffect(()=>{
  async function fetchData(){
    const response = await fetch('https://');
    const result = await response.json();
    setData(result);
  }fetchData();
},[]);