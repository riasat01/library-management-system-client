import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { UserAuth } from "../../../auth-provider/AuthProvider";
import swal from "sweetalert";
import { FcGoogle } from 'react-icons/fc';

const Login = () => {
    const { user, setLoading, loginWithEMail, continueWithGoogle } = useContext(UserAuth);
    const navigate = useNavigate();

    // where to re route
    const location = useLocation();
    // console.log(`State from login ${location?.state}`)

    // sign in user
    const handleSignIn = (e) => {
        e?.preventDefault();
        loginWithEMail(e?.target?.email?.value, e?.target?.password?.value)
            .then(userCredintial => {
                console.log(userCredintial.user);
                swal(`Congratulation ${user?.displayName ? user?.displayName : ``}`, `You have successfully signed in`, `success`)
                location?.state ? navigate(`${location?.state}`) : navigate(`/`);
            })
            .catch(error => {
                swal(`Error`, error.message, `error`);
                setLoading(false);
            })
    }

    const handlethirdPartySignIn = (callback) => {
        callback()
            .then(userCredintial => {
                // console.log(userCredintial.user);
                swal(`Congratulation ${userCredintial?.user?.displayName}`, `You have successfully signed in with Google`, `success`)
                location?.state ? navigate(`${location?.state}`) : navigate(`/`);
            })
            .catch(error => {
                swal(`Error`, error.message, `error`);
                setLoading(false);
            })
    }
    return (
        <section className="w-full md:w-1/2 lg:w-1/3 mx-auto h-screen pt-24 pb-12">
            <h1 className="text-white mb-12 border-b-4 border-cyan-500 text-lg md:text-3xl font-bold bg-gradient-to-tr from-cyan-500 to-blue-500 bg-clip-text animate-pulse leading-10 py-4 w-fit">Login</h1>
            <section className="flex justify-center items-center">
                <form onSubmit={handleSignIn} className="space-y-6">
                    <input className="w-full text-white rounded-2xl py-2 px-4 bg-slate-700 bg-opacity-70" type="email" name="eamil" placeholder="Email" id="email" required/>
                    <input className="w-full text-white rounded-2xl py-2 px-4 bg-slate-700 bg-opacity-70" type="password" name="password" placeholder="Password" id="password" required/>
                    <input className="w-full px-5 py-2 rounded-2xl bg-transparent hover:bg-gradient-to-tr from-cyan-500 to-blue-500 text-lg font-semibold text-white border-2 hover:border-0 border-cyan-500 hover:shadow-[1px_-1px_1rem_0px_cyan] " type="submit" value="Login" />
                    <p className="text-white">New here? Please <Link to='/login/register' className="font-semibold text-transparent bg-gradient-to-tr from-cyan-500 to-blue-500 bg-clip-text border-b-2 border-cyan-600">Register</Link></p>
                </form>
            </section>
            <fieldset className="border-t border-slate-600">
                <legend className="text-center px-1 text-white">Or continue with</legend>
            </fieldset>
            <section className="flex justify-center items-center">
                <FcGoogle onClick={() => handlethirdPartySignIn(continueWithGoogle)} className="text-4xl w-fit"></FcGoogle>
            </section>
        </section>

    );
};

export default Login;