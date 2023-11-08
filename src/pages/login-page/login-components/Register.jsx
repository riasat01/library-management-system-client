import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { UserAuth } from "../../../auth-provider/AuthProvider";
import swal from "sweetalert";


const Register = () => {
    const { setLoading, userWithEmail, setUserName } = useContext(UserAuth);
    const navigate = useNavigate();

    // where to re route
    const location = useLocation();
    
    // register user
    const handleRegister = (e) => {
        e?.preventDefault();
        const name = e?.target?.name?.value;
        const email = e?.target?.email?.value;
        const password = e?.target?.password?.value;
        if(password.length < 6){
            swal(`Error`, `Password must be at 6 characters long`, `error`);
            return;
        }else if(!(/[A-Z]/.test(password))){
            swal(`Error`, `Password must contain at least one capital letter`, `error`);
            return;
        }else if(!/[!@#$%^&*]/.test(password)){
            swal(`Error`, `Password must contain at least one of these !@#$%^&* characters`, `error`);
            return;
        }
        userWithEmail(email, password)
            .then(userCredential => {
                // console.log(userCredential.user);
                setUserName(name)
                .then(() => {
                    // console.log(`user name updated`);
                    setLoading(false);
                    swal(`Congratulation ${userCredential?.user?.displayName}`, `You have successfully registered`, `success`)
                    location?.state ? navigate(`${location?.state}`) : navigate(`/`);
                })
                .catch(error => {
                    swal(`Error`, error.message, `error`);
                    setLoading(false);
                })
            })
            .catch(error => {
                swal(`Error`, error.message, `error`);
                setLoading(false);
            })
    }
    return (
        <section className="w-full md:w-1/2 lg:w-1/3 mx-auto h-screen text-white pt-24 pb-12">
            <h1 className="mb-12 border-b-4 border-cyan-500 text-lg md:text-3xl font-bold bg-gradient-to-tr from-cyan-500 to-blue-500 bg-clip-text animate-pulse leading-10 py-4 w-fit">Register</h1>
            <section className="flex justify-center items-center">
            <form onSubmit={handleRegister} className="space-y-6">
                <section className="flex gap-6 justify-between items-center">
                    <input className="w-full text-white rounded-2xl py-2 px-4 bg-slate-700 bg-opacity-70" type="text" name="first" placeholder="First Name" id="first" />
                    <input className="w-full text-white rounded-2xl py-2 px-4 bg-slate-700 bg-opacity-70" type="text" name="last" placeholder="Last Name" id="last" />
                </section>
                <input className="w-full text-white rounded-2xl py-2 px-4 bg-slate-700 bg-opacity-70" type="text" name="photo" placeholder="Photo URL" id="photo" />
                <input className="w-full text-white rounded-2xl py-2 px-4 bg-slate-700 bg-opacity-70" type="email" name="eamil" placeholder="Email" id="email" />
                <input className="w-full text-white rounded-2xl py-2 px-4 bg-slate-700 bg-opacity-70" type="password" name="password" placeholder="Password" id="password" />
                <input className="w-full px-5 py-2 rounded-2xl bg-transparent hover:bg-gradient-to-tr from-cyan-500 to-blue-500 text-lg font-semibold text-white border-2 hover:border-0 border-cyan-500 hover:shadow-[1px_-1px_1rem_0px_cyan] " type="submit" value="Register" />
                <p>Already have an account? Please <Link to='/login' className="font-semibold text-transparent bg-gradient-to-tr from-cyan-500 to-blue-500 bg-clip-text border-b-2 border-cyan-600">Login</Link></p>
            </form>
        </section>
        </section>
    );
};

export default Register;