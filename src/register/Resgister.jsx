import { updateProfile } from "firebase/auth";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../authprovider/AuthProvider";

import { FaEye, FaEyeSlash } from "react-icons/fa";
import useAxiospublic from "../hooks/useAxiospublic";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const Resgister = () => {
    const axiosPublic = useAxiospublic();
    const { createUser } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [show, setshow] = useState(false);
  const navigate = useNavigate();

  const handleRegister =async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photoUrl = e.target.photo.files[0];
    const email = e.target.email.value;
    const password = e.target.password.value;

    //validation
    setError('');
    if (password.length < 6) {
      setError("error ! your password at lest 6 character")
      return;

    } else if (!/[A-Z]/.test(password)) {
      setError('error ! provide a uppercase latter')
      return;
    } else if (!/[!@#$%^&*]/.test(password)) {
      setError('please ! provide a sepcial character')
      return;
    }

    try {
      // Create the user in Firebase
      const userCredential = await createUser(email, password);
      const user = userCredential.user;
  
      // Upload the image to the image hosting API
      const formData = new FormData();
      formData.append('image', photoUrl);
  
      const response = await axiosPublic.post(image_hosting_api, formData,{
          headers:{
              'Content-Type':'multipart/form-data'
          }
      });
  
      // Extract the image URL from the response
      const imageUrl = response.data.data.url;
  
      // Update the user's profile with name and photoUrl
      await updateProfile(user, {
        displayName: name,
        photoURL: imageUrl,
      });
  
      // Update additional user information in your server
      const userinfo = {
        name: user.displayName,
        email: user.email,
        photoUrl: imageUrl,
      };
  
      axiosPublic.post('/users', userinfo)
      .then(res => {
        if (res.data.insertedId) {
          console.log('user profile info updated');
          
          // Display success message using Swal
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'You are successfully signed up',
            timer: 1500,
          });
    
          // Navigate to the desired location
          navigate('/');
        }
      })
      // .catch(error => {
      //   console.error('Error updating user profile info:', error);
    
      //   // Handle the error as needed
    
      //   // Display error message using Swal
      //   Swal.fire({
      //     position: 'top-end',
      //     icon: 'error',
      //     title: 'Error Updating User Profile',
      //     text: 'An error occurred while updating user profile. Please try again.',
      //   });
      // });
    
    } 
    
    catch (error) {
      console.error('Error during registration:', error);
  
      // Handle the error as needed
      setError('An error occurred during registration');
    }
  };
    return (
        <div>
             <div className="pt-24">
            <div className=" bg-pink-50">
        <div className="hero-content flex">
          <div className="flex-1">
            <img src="https://i.ibb.co/HKLcWKz/animated-teaser.gif" alt="" />
          </div>
          <div className="flex-1 shadow-2xl bg-green-50">
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" placeholder="your name" name="name" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo</span>
                </label>
                <input type="file" placeholder="upload a image" name="photo" className="input input-bordered" required />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" name="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type={show ? "text" : "password"} placeholder="password" name="password" className="input input-bordered" required />
                <span onClick={() => setshow(!show)}>{show ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}</span>
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">register</button>
              </div>
              <p className="text-red-500 font-bold">{error}</p>
            </form>
            {/* <SocialLogin></SocialLogin> */}
            <p className="text-center pb-3">if you have alrady an account !<Link to='/login' className="text-green-500 font-bold"> login</Link></p>
          </div>
        </div>
      </div>
        </div>
        </div>
    );
};

export default Resgister;