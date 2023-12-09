import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateProduct = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [getProducts, setGetProducts] = useState([]);

    useEffect(() => {
        fetch(`https://brand-store-server-487isrj8n-malik-nusrats-projects.vercel.app/updateProduct/${id}`)
            .then(res => res.json())
            .then(data => {
                setGetProducts(data)
            });
    },[id])

    const handleUpdateProduct = (event) => {
        event.preventDefault();
        const form = event.target;
        const image = form.image.value;
        const productName = form.productName.value;
        const price = form.price.value;
        const type = form.type.value;
        const ratting = form.ratting.value;

        const updateProfile = { image, productName, price, type, ratting };
        fetch(`https://brand-store-server-487isrj8n-malik-nusrats-projects.vercel.app/updateProductInfo/${getProducts._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateProfile)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Product Information has been updated',
                    showConfirmButton: false,
                    timer: 1500
                }).then(result => {
                    if (result.isConfirmed==false) {
                        navigate('/');
                    }
                })
            }
        })
    }

    return (
        <div>
            <div className="max-w-5xl mx-auto  ">
                <div>
                    <h2 className="text-3xl text-center my-7 italic font-thin ">Update Products</h2>
                </div>
                <div className="flex-col lg:flex-row-reverse">

                    <div className="card flex-shrink-0 w-full max-w-lg mx-auto rounded-none shadow-2xl">
                        <form onSubmit={handleUpdateProduct} className="card-body">
                            <div className="form-control">
                                <input type="text" name='image' placeholder="Image" className="input input-bordered border-black rounded-none" required defaultValue={getProducts.image}/>
                            </div>

                            <div className="form-control">
                                <input type="text" name='productName' placeholder="Product Name" className="input input-bordered border-black rounded-none" required defaultValue={getProducts.productName} />
                            </div>

                            {/* <div className="form-control">
                                <input type="text" name='brandName' placeholder="Brand Name" className="input input-bordered border-black rounded-none" required />
                            </div> */}

                            <div className="form-control">
                                <input type="text" name='type' placeholder="Type" className="input input-bordered border-black rounded-none" required defaultValue={getProducts.type}/>
                            </div>

                            <div className="form-control">
                                <input type="text" name='price' placeholder="Price" className="input input-bordered border-black rounded-none" required defaultValue={getProducts.price}/>
                            </div>
                            <div className="form-control">
                                <input type="text" name='ratting' placeholder="Rattings" className="input input-bordered border-black rounded-none" required defaultValue={getProducts.ratting}/>

                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-neutral rounded-none">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateProduct;