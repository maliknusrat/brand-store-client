import { Link, useLoaderData } from "react-router-dom";

const Branddetails = () => {
    const brandData = useLoaderData();
    console.log(brandData);
    return (
        <div className="max-w-5xl mx-auto">
            <h2 className="text-5xl font-black italic text-center py-7">Our Brands</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-5">
                {
                    brandData.map(bdata => <div key={bdata.id} >
                        {
                            bdata.image &&<div className=" h-72 rounded-none  shadow-xl image-full ">
                            {
                            <Link to={`/brandProducts/${bdata.brandName}`}><img className="w-auto h-72" src={bdata.image} alt="Shoes" /></Link>}
                            
                         </div>
                        }
                    </div>)

                }
            </div>
           

        </div>
    );
};

export default Branddetails;