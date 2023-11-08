import { useContext } from "react";
import { UserAuth } from "../../../auth-provider/AuthProvider";
import Proptypes from 'prop-types';
import useAxiosSecure from "../../../custom-hooks/useAxiosSecure";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BorrowModal = ({ book }) => {
    const { user } = useContext(UserAuth);
    const axiosSecure = useAxiosSecure();
    const handleBorrow = e => {
        e?.preventDefault();

        const userName = user?.displayName;
        const userEmail = user?.email;
        const borrowDate = new Date().toISOString().slice(0, 10);
        const returnDate = e?.target?.return?.value;

        const { _id, ...info } = { userName, userEmail, ...book, borrowDate, returnDate }; // need to remove _id
        // console.log(info, new Date().toISOString().slice(0, 10));

        axiosSecure.get(`/borrow?email=${user?.email}&name=${book?.name}`)
            .then(res => {
                if (!(res?.data?.length)) {
                    axiosSecure.post('/borrow', info)
                        .then(res => {
                            console.log(res);
                            toast('Congratulations! book borrowed successfully');
                            axiosSecure.put(`/book/${_id}`, {quantity: (parseInt(book?.quantity) - 1)})
                                .then(res => {
                                    console.log(res);
                                    // setBook(res?.data);
                                })
                                // .catch(error => swal('Error', `${error.message}`, 'error'));
                        })
                        .catch(error => toast(`${error.message}`));
                } else {
                    toast('You have already borrowed this book');
                    return;
                }
            })
            .catch(error => toast(`${error.message}`));

    }
    return (
        <dialog id="my_modal_3" className="modal">
            <div className="modal-box">
                <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>
                <form onSubmit={handleBorrow} className="space-y-6">
                    <input className="w-full text-white rounded-2xl py-2 px-4 bg-slate-400 bg-opacity-50" type="email" name="eamil" defaultValue={user?.email} id="email" />
                    <input className="w-full text-white rounded-2xl py-2 px-4 bg-slate-400 bg-opacity-50" type="text" name="name" defaultValue={user?.displayName} id="name" />
                    <input className="w-full text-white rounded-2xl py-2 px-4 bg-slate-400 bg-opacity-50" type="date" name="borrow" defaultValue={new Date().toISOString().slice(0, 10)} id="borrow" />
                    <input className="w-full text-white rounded-2xl py-2 px-4 bg-slate-400 bg-opacity-50" type="date" name="return" placeholder="Return date" id="date" />
                    <input className="w-full px-5 py-2 rounded-2xl bg-transparent hover:bg-gradient-to-tr from-cyan-500 to-blue-500 text-lg font-semibold text-white border-2 hover:border-0 border-cyan-500 hover:shadow-[1px_-1px_1rem_0px_cyan] " type="submit" value="Submit" />
                </form>
            </div>
            <ToastContainer />
        </dialog>
    );
};

BorrowModal.propTypes = {
    book: Proptypes.object
}

export default BorrowModal;