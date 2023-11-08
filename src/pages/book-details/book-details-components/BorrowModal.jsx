import { useContext } from "react";
import { UserAuth } from "../../../auth-provider/AuthProvider";
import Proptypes from 'prop-types';

const BorrowModal = ({ book }) => {
    const { user } = useContext(UserAuth);
    const handleBorrow = e => {
        e?.preventDefault();
        const userName = user?.dispalyName;
        const userEmail = user?.email;
        const return_date = e?.target?.return?.value;

        const {_id, ...info} = { userName, userEmail, ...book, return_date }; // need to remove _id
        console.log(info);
    }
    return (
        <dialog id="my_modal_3" className="modal">
            <div className="modal-box">
                <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>
                <h3 className="font-bold text-lg">Hello!</h3>
                <p className="py-4">Press ESC key or click on ✕ button to close</p>
                <form onSubmit={handleBorrow} className="space-y-6">
                    <input className="w-full text-white rounded-2xl py-2 px-4 bg-slate-400 bg-opacity-50" type="email" name="eamil" defaultValue={user?.email} id="email" />
                    <input className="w-full text-white rounded-2xl py-2 px-4 bg-slate-400 bg-opacity-50" type="text" name="name" defaultValue={user?.dispalyName} id="name" />
                    <input className="w-full text-white rounded-2xl py-2 px-4 bg-slate-400 bg-opacity-50" type="date" name="return" placeholder="Return date" id="date" />
                    <input className="w-full px-5 py-2 rounded-2xl bg-transparent hover:bg-gradient-to-tr from-cyan-500 to-blue-500 text-lg font-semibold text-white border-2 hover:border-0 border-cyan-500 hover:shadow-[1px_-1px_1rem_0px_cyan] " type="submit" value="Submit" />
                </form>
            </div>
        </dialog>
    );
};

BorrowModal.propTypes = {
    book: Proptypes.object
}

export default BorrowModal;