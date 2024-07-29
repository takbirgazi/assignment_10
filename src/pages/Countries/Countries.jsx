import { useEffect, useState } from "react";

const Countries = () => {
    const [country,setCountry] = useState();
    useEffect(()=>{
        fetch(`https://backend-assignment-10.vercel.app/allspots`)
        .then(res=> res.json())
        .then(data=> setCountry(data))
    },[])
    console.log(country);
    return (
        <div>
            <h2 className="text-center text-4xl font-bold py-5">Countries</h2>
            <div className="flex gap-5 items-center justify-center">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5">
                    {/* {country.map(cntry => <CountryCard key={cntry._id} cardInfo={cntry}></CountryCard>)} */}
                </div>
            </div>
        </div>
    );
};

export default Countries;