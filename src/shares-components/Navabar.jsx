import logo from '../assets/logo.gif';
import { Link, NavLink } from 'react-router-dom';
import { BiSolidFoodMenu } from 'react-icons/bi';
import { useState } from 'react';

const Navabar = () => {
    // state to show or hide navbar on mobiles
    const [show, setShow] = useState(false);

    // navlinks
    const navLlinks = <>
        <li>
            <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-lg text-transparent font-semibold duration-500 bg-gradient-to-tr from-cyan-500 to-blue-500 bg-clip-text drop-shadow-lg" : "text-white font-normal duration-500"
                }
            >
                Home
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/books"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-lg text-transparent font-semibold duration-500 bg-gradient-to-tr from-cyan-500 to-blue-500 bg-clip-text drop-shadow-lg" : "text-white font-normal duration-500"
                }
            >
                All Books
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/add_books"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-lg text-transparent font-semibold duration-500 bg-gradient-to-tr from-cyan-500 to-blue-500 bg-clip-text drop-shadow-lg" : "text-white font-normal duration-500"
                }
            >
                Add Book
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/borrowed"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-lg text-transparent font-semibold duration-500 bg-gradient-to-tr from-cyan-500 to-blue-500 bg-clip-text drop-shadow-lg" : "text-white font-normal duration-500"
                }
            >
                Borrowed Books
            </NavLink>
        </li>
    </>
    return (
        <section className='absolute w-full inset-0 z-10 h-fit'>
            <div className="flex justify-between items-center px-4 py-3 bg-slate-800 bg-opacity-60">
                <section className='flex justify-between items-center w-full md:w-fit'>
                    <section className='flex gap-4 justify-center items-center'>
                        <img src={logo} alt="logo" className='h-16' />
                        <h1>PapyrusPortal</h1>
                    </section>
                    <section className='block md:hidden'>
                        <BiSolidFoodMenu onClick={() => setShow(!show)} className='text-3xl text-white '></BiSolidFoodMenu>
                        <ul className={`absolute ${show ? 'top-20' : '-top-96'} right-10 text-right duration-500`}>
                            {
                                navLlinks
                            }
                            <li>
                            <Link to='/login'><button className='px-5 py-1 my-1 rounded-lg bg-transparent hover:bg-gradient-to-tr from-cyan-500 to-blue-500 text-lg font-semibold text-white border-2 hover:border-0 border-cyan-500 hover:shadow-[0px_5px_2rem_1px_purple] '>Login</button></Link>
                            </li>
                        </ul>
                    </section>
                </section>

                <section className='hidden md:block'>
                    <ul className='flex gap-6 justify-center items-center'>
                        {
                            navLlinks
                        }
                    </ul>
                </section>
                <section className=' hidden md:block'>
                    <Link to='/login'><button className='px-5 py-2 rounded-lg bg-transparent hover:bg-gradient-to-tr from-cyan-500 to-blue-500 text-lg font-semibold text-white border-2 hover:border-0 border-cyan-500 hover:shadow-[1px_-1px_1rem_0px_cyan] '>Login</button></Link>
                </section>
            </div>
        </section>
    );
};

export default Navabar;