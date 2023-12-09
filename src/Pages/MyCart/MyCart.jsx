import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";


const MyCart = () => {
    const { user } = useContext(AuthContext);
    const user_email = user?.email;
    // console.log(user)
    const [carts, setCarts] = useState([])
    // console.log(id)
    
    useEffect(() => {
           fetch(`https://brand-store-server-487isrj8n-malik-nusrats-projects.vercel.app/carts/${user_email}`)
            .then(res => res.json())
            .then(data => {
                setCarts(data)
                console.log(data);
        })
    }, [user_email])

    const handleDelete = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
            }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://brand-store-server-487isrj8n-malik-nusrats-projects.vercel.app//carts/${id}`, {
                    method: 'DELETE'
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        Swal.fire(
                            'Deleted!',
                            'Your Product has been deleted.',
                            'success'
                        ).then(result => {
                            if (result.isConfirmed) {
                                window.location.reload();
                            }
                        })
                    }
                })
            }
        }) 
    }
    
    return (
        <div>
            {
                <div className="flex items-center justify-center mt-20 mb-20">
            <div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5"> 
                    {
                        carts.map(cart => <div key={cart._id}>
                            <div>
                                <div>
                                    <div className="card lg:card-side bg-base-100 h-[350px] shadow-xl rounded-none">
                                        <figure><img className=" h-[300px]" src={cart.image} alt="Album" /></figure>
                                        <div className="card-body">
                                            <h2 className="card-title">{cart.productName}</h2>
                                            <h2 className="card-title text-2xl text-red-600" >{cart.brandName}</h2>
                                            <h2 className="">Price: {cart.price}</h2>
                                            <div className="flex items-center gap-3">
                                                <button onClick={()=>handleDelete(cart._id)} className="btn btn-active btn-neutral">Delete</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
            }
        </div>
    );
};

export default MyCart;