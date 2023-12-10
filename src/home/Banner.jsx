import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div>

            <div className="carousel-item relative w-11/12 mx-auto h-[600px]  ">
                <img src='https://i.ibb.co/1Jkppy0/tree.jpg' className=" w-full rounded-xl" />
                <div className='absolute  rounded-lg pl-20 h-full bg-gradient-to-r from-[#15151557] to-[rgba(21, 21, 21, 0.00)] w-full '>
                    <div className=' space-y-5 pt-32'>
                        <h1 className='text-5xl text-white font-bold '> Without tree  <br /> <span className='py-10'>you can&apos;t think</span> <br /> about life on this planet</h1>
                        <p className='text-white'>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
                        <button className='px-2 py-2 hover:bg-orange-500 mr-5 border rounded-lg text-white'>Discover more</button>
                        <Link to="/latest"> 
                         <button className='px-2 py-2 hover:bg-orange-500 mr-5 border rounded-lg text-white'>Latest project</button>
                        </Link></div>
                </div>

            </div>
        </div>
    );
};

export default Banner;