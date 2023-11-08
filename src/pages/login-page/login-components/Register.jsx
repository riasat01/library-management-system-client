import { Link } from "react-router-dom";


const Register = () => {
    return (
        <section className="w-full md:w-1/2 lg:w-1/3 mx-auto h-screen">
            <h1 className="mt-24 mb-12 border-b-4 border-cyan-500 text-lg md:text-3xl font-bold bg-gradient-to-tr from-cyan-500 to-blue-500 bg-clip-text animate-pulse leading-10 py-4 w-fit">Register</h1>
            <section className="flex justify-center items-center">
            <form className="space-y-6">
                <section className="flex gap-6 justify-between items-center">
                    <input className="w-full text-white rounded-2xl py-2 px-4 bg-slate-400 bg-opacity-50" type="text" name="first" placeholder="First Name" id="first" />
                    <input className="w-full text-white rounded-2xl py-2 px-4 bg-slate-400 bg-opacity-50" type="text" name="last" placeholder="Last Name" id="last" />
                </section>
                <input className="w-full text-white rounded-2xl py-2 px-4 bg-slate-400 bg-opacity-50" type="text" name="photo" placeholder="Photo URL" id="photo" />
                <input className="w-full text-white rounded-2xl py-2 px-4 bg-slate-400 bg-opacity-50" type="email" name="eamil" placeholder="Email" id="email" />
                <input className="w-full text-white rounded-2xl py-2 px-4 bg-slate-400 bg-opacity-50" type="password" name="password" placeholder="Password" id="password" />
                <input className="w-full px-5 py-2 rounded-2xl bg-transparent hover:bg-gradient-to-tr from-cyan-500 to-blue-500 text-lg font-semibold text-white border-2 hover:border-0 border-cyan-500 hover:shadow-[1px_-1px_1rem_0px_cyan] " type="submit" value="Register" />
                <p>Already have an account? Please <Link to='/login' className="font-semibold text-transparent bg-gradient-to-tr from-cyan-500 to-blue-500 bg-clip-text border-b-2 border-cyan-600">Login</Link></p>
            </form>
        </section>
        </section>
    );
};

export default Register;