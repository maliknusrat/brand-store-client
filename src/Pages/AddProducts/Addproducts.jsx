import Swal from 'sweetalert2'

const Addproducts = () => {
    const handleAddProduct = event =>{
        event.preventDefault();

        const form = event.target;

        const image = form.image.value;
        const productName = form.productName.value;
        const brandName = form.brandName.value;
        const type = form.type.value;
        const price = form.price.value;
        const shortDescription = form.shortDescription.value;
        const ratting = form.ratting.value;

        const newProduct = {image,productName,brandName,type,price,shortDescription,ratting}
        console.log(newProduct);

        //send data to server
        fetch('https://brand-store-server-487isrj8n-malik-nusrats-projects.vercel.app/product',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(newProduct)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Data added Succesfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })

        
    }
    return (
        <div>
            <div className="max-w-5xl mx-auto  ">
                <div>
                    <h2 className="text-3xl text-center my-7 italic font-thin ">Add Products</h2>
                </div>
                <div className="flex-col lg:flex-row-reverse">

                    <div className="card flex-shrink-0 w-full max-w-lg mx-auto rounded-none shadow-2xl">
                        <form onSubmit={handleAddProduct} className="card-body">
                            <div className="form-control">
                                <input type="text" name='image' placeholder="Image" className="input input-bordered border-black rounded-none" required />
                            </div>

                            <div className="form-control">
                                <input type="text" name='productName' placeholder="Product Name" className="input input-bordered border-black rounded-none" required />
                            </div>

                            {/* <div className="form-control">
                                <input type="text" name='brandName' placeholder="Brand Name" className="input input-bordered border-black rounded-none" required />
                            </div> */}

                            <div className="form-control">
                            <label className="">
                                <select className="select input input-bordered border-black rounded-none  w-full " name="brandName">
                                    <option>Brand Name</option>
                                    <option value='Coca-cola'>Coca-cola</option>
                                    <option value='Kellogg'>Kellogg's</option>
                                    <option value='McDonald'>McDonald's</option>
                                    <option value='Nestle'>Nestle</option>
                                    <option value='Pepsi'>Pepsi</option>
                                    <option value='Starbucks'>Starbucks</option>
                                </select>
                            </label>
                        </div>

                            <div className="form-control">
                                <input type="text" name='type' placeholder="Type" className="input input-bordered border-black rounded-none" required />
                            </div>

                            <div className="form-control">
                                <input type="text" name='price' placeholder="Price" className="input input-bordered border-black rounded-none" required />
                            </div>
                            <div className="form-control">
                                <input type="text" name='shortDescription' placeholder="Short Description" className="input input-bordered border-black rounded-none" required />
                            </div>

                            <div className="form-control">
                                <input type="text" name='ratting' placeholder="Rattings" className="input input-bordered border-black rounded-none" required />

                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-neutral rounded-none">Add Item</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Addproducts;