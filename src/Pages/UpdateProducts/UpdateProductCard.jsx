
// eslint-disable-next-line react/prop-types
const UpdateProductCard = ({product}) => {

    // eslint-disable-next-line react/prop-types
    const {_id,image,productName,brandName,type,price,shortDescription,ratting} = product;

    return (
        <div>

            <div>
            <div className="card lg:card-side bg-base-100 h-[350px] shadow-xl rounded-none">
                <figure><img className=" h-[300px]" src={image}alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{productName}</h2>
                    <h2 className="card-title text-2xl text-red-600" >{brandName}</h2>
                    <h2 className="">Type: {type}</h2>
                    <h2 className="">Price: {price}</h2>
                    {/* <h2 className=""><span className="font-bold">Short Description:</span> {shortDescription}</h2> */}
                    {/* <h2 className="">Rattings: {ratting}</h2>     */}
                    <div className="flex items-center gap-3">
                        {/* <button className="btn btn-active">Details</button> */}
                        {/* <button className="btn btn-active btn-neutral">Update</button> */}
                    </div>                
                </div> 
            </div>

            </div>
            
        </div>
    );
};

export default UpdateProductCard;