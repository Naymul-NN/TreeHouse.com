import { useQuery } from "@tanstack/react-query";
import axios from "axios";
// import { useState } from "react";

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
        <div>
            <p>data{data?.data?.length}</p>
            <div className=" grid grid-cols-3 gap-5 lg:pl-20">
                {
                data?.data?.map(item=> (
                        <div key={item._id}> 
                          <div className="card card-compact w-96 bg-base-100 shadow-xl">
                       <figure className="h-52"><img className="" src={item.photo} alt="Shoes" /></figure>
                       <div className="card-body">
                         <h2 className="card-title">{item.name}</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                     <div className="card-actions ">
                     <button className="btn ">add to cart</button>
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