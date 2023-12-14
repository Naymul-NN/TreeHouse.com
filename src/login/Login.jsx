
const Login = () => {
    return (
        <div className="mt-24">
            <div className="hero ">
  <div className="flex gap-6 lg:flex-row-reverse">
    <div className="flex-1">
      <img className="rounded-xl" src="https://i.ibb.co/HKLcWKz/animated-teaser.gif" alt="" />
    </div>
    <div className=" flex-1 shadow-2xl bg-base-100">
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;