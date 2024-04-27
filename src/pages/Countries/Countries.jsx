import { useLoaderData } from "react-router-dom";

const Countries = () => {
    const countries = useLoaderData();
    return (
        <div>
            <h2 className="text-center text-4xl font-bold py-5">Countries</h2>
            <div className="flex gap-5 items-center justify-center">
                <div className="flex gap-5">
                    {countries.map(cntry => <div key={cntry._id} className="px-2 py-1 border rounded-md">{cntry.country}</div>)}
                </div>
            </div>
        </div>
    );
};

export default Countries;