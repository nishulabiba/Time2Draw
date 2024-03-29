import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Link, useLocation, useNavigation } from "react-router-dom";
import { LoadCanvasTemplate, loadCaptchaEnginge, validateCaptcha } from "react-simple-captcha";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const Login = () => {
    const {signIn, isDarkMode} = useContext(AuthContext)
    const [disabled, setDisabled] = useState()
    const location = useLocation()
    const navigate = useNavigation()
    const from=  location.state?.from?.pathname || "/"

    useEffect(()=>{
        loadCaptchaEnginge(6)
    },[])

    const handleValidate = (e) =>{

        const captcha = e.target.value;
        if(validateCaptcha(captcha)) 
        {
            setDisabled(false)
        }
        else {

            setDisabled(true)
        }

        


    }

    const handleLogin= (event) =>{
        event.preventDefault() ;
        const form= event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
            .then(result=>{
                const user = result.user; 
                console.log(user)
                form.reset()
                Swal.fire({
                    icon: "success",
                    title: "Welcome",
                    text: "You've successfully signed in..!",
                  });
                navigate(from, {replace: true})
            })

    }
    return (
       <>
       <Helmet title="Time2Draw | Login" />
        <div className={`hero min-h-screen ${isDarkMode? "bg-base-300 text-slate-300": "bg-slate-200 text-base-200"} `}>
            <div className="hero-content flex-col md:flex-row">
                <div className="text-center md:w-1/2 lg:text-left">
                <h1 className="text-5xl font-bold">Login now!</h1>
                <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className={ `card md:w-1/2 max-w-sm shadow-2xl text-base-200 ${isDarkMode? "bg-gray-800": ""}`}>
                <form onSubmit={handleLogin} className="card-body">
                    <div   className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                    <label className="label">
                        <a className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <LoadCanvasTemplate/>
                    </label>
                    <input onBlur={handleValidate} type="text" name="captcha" placeholder="Type the captcha above" className="input input-bordered  bg-slate-400 text-white" required />
                    
                    </div>
                    <div className="form-control mt-6">
                    <input disabled={disabled} type="submit" className="btn btn-primary" value="Login" />
                    </div>
                </form>
                <p className="text-center text-slate-400 "><small>New Here? <Link to='/sign-up' className="text-primary"> Create an account</Link></small></p>
                <div className="text-center my-5">
                
                
                </div>
                </div>
                
            </div>
        </div>
        </>
    );
};

export default Login;