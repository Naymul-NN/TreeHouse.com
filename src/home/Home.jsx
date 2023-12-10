import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import Banner from "./Banner";
import DisplayTree from "./displaytree/DisplayTree";

const Home = () => {
    return (
        <div>
            <div >
           <div className="w-11/12 mx-auto"><Navbar></Navbar></div> 
            <Banner></Banner>
            <DisplayTree></DisplayTree>
           
            </div>
            <div>
                <Footer></Footer>
            </div>
          
        </div>
       
    );
};

export default Home;