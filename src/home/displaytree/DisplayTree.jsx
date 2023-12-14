import { useQuery } from "@tanstack/react-query";
import axios from "axios";
// import { useState } from "react";
import Rating from "react-rating-stars-component"; // Import the rating package


const DisplayTree = () => {
    // const [display, setdisplay] = useState([])
    // axios.get('http://localhost:5000/displayTree')
    // .then(res =>{
    //     console.log(res.data)
    //     setdisplay(res.data)
    // })

    //  use tanstack qurey
    const getdata = async()=>{
        const res = await axios.get('http://localhost:5000/displayTree')
        return res
        
    }

    const {data, isLoading,isFetching}= useQuery({
        queryKey: ['displaydata'],
        queryFn: getdata ,
    })
    if(isLoading){
      return  <span className="loading loading-spinner loading-lg"></span>

    }

console.log(data?.data,isFetching,isLoading);
    return (
        <div  className="w-11/12 mx-auto">
            <p className="my-5 text-center font-bold border-b-2 text-2xl border-b-red-400 w-60 pb-2 mx-auto">Trending products</p>
            <div className=" grid grid-cols-3 gap-6">
                {
                data?.data?.map(item=> (
                        <div key={item._id}> 
                          <div className="card card-compact  bg-base-100 shadow-xl">
                       <figure className="h-52"><img className="hover:scale-110" src={item.photo} alt="Shoes" /></figure>
                       <div className="card-body">
                         <h2 className="card-title">Name: {item.name}</h2>
                        <p >  <Rating 
                                    count={5}
                                    value={item.rating}
                                    size={24}
                                    activeColor="#ffd700"
                                    edit={false} // Set to true if you want the user to be able to edit the rating
                                /></p>
                     <div className="card-actions ">
                     <button className="btn hover:bg-orange-400">add to cart</button>
                    </div>
                    </div>
                     </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default DisplayTree;