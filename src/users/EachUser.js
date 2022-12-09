import { Link } from "react-router-dom";
import { API_URL } from "../config";
import axios from "axios"
import moment from "moment"
import React,{useEffect,
    useRef,useState } from 'react'
    import fetch from '../fetch/index'
    import useAsync from '../hooks/useAsync'

export default function EachUser({ user, fetchData }) {
    const [idvalue, setIdValue] = useState(user.id);
    const [noregisValue, setNoRegisValue] = useState(user.noregis);
    const [noinventarisValue, setNoInventarisValue] = useState(user.noinvetrasi);
    const [namalokasiValue, setNamaLokasiValue] = useState(user.namalokasilokasi);
    const [lokasitemuanValue, setLokasiTemuanValue] = useState(user.lokasitemuan);
    const [tahunperolehanValue, setTahunPerolehanValue] = useState(user.tahunperolehan);
    const [deteminatorValue, setDeteminatorValue] = useState(user.deteminator);
    const [keteranganValue, setKeteranganValue] = useState(user.keterangan);

    const {  run } = useAsync();

    const refContainer = useRef(null);
    useEffect(() => {
        run(fetch({ url: "https://sbc-sebatcabut.herokuapp.com" }));
      }, [run]);

    const openModal = () => {
        document.getElementById('new-modal-' + user.ID).classList.remove("hidden");
    }
    const closeModal = () => {
        document.getElementById('new-modal-' + user.ID).classList.add("hidden");
    }
    const completeForm = () => {
        closeModal()
        fetchData()
    }

    const updateUser = (e) => {
        e.preventDefault()
        var form = document.getElementById(`editform-${user.ID}`);
        var formData = new FormData(form);
        axios.patch(`${API_URL}/users/${user.ID}`, formData)
            .then(res => completeForm())
            .catch(error => console.log(error.response))
    }

    const deleteUser = () => {
        if (window.confirm("Are you sure you want to delete this user??") == true) {
            axios.delete(`${API_URL}/users/${user.ID}`)
                .then(res => fetchData())
                .catch(error => console.log(error.response))
        } else {
           console.log("You canceled!");
        }
    }

    return (
        <div className="bg-slate-100 rounded-lg mb-4 p-4 hover:border hover:border-purple-700">
            <div>
                <div>
                    <div className="font-medium">{user.name}</div>
                    <div className="text-slate-400">{user.email}</div>
                </div>
                <div className="text-sm flex space-x-4 mt-4">
                    <Link to={`/profile/${user.ID}`}>View Profile</Link>
                    <button onClick={openModal} >Edit</button>
                    <button onClick={deleteUser} className="text-red-600">Delete</button>
                </div>
            </div>

            {/* Start Modal */}
            <div className="relative z-10 hidden" aria-labelledby="modal-title" role="dialog" aria-modal="true" id={`new-modal-${user.ID}`}>
                <div className="fixed inset-0 bg-black bg-opacity-70 transition-opacity"></div>

                <div className="fixed z-10 inset-0 overflow-y-auto">
                    <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

                        <div className="relative inline-block align-middle bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg w-full">
                            <form id={`editform-${user.ID}`} onSubmit={updateUser} method="post">
                                <div className="bg-white">
                                    <div className="flex justify-between px-8 py-4 border-b">
                                        <h1 className="font-medium">Update user</h1>
                                        <button type="button" onClick={closeModal}>Close</button>
                                    </div>
                                    <div className="px-8 py-8">
                                        <div className="mb-5">
                                            <label className="block text-gray-700 text-sm font-bold mb-2">ID</label>
                                            <input type="text" name="id" value={user.id} onChange={(e) => setIdValue(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
                                        </div>
                                       < div className="mb-5">
                                            <label className="block text-gray-700 text-sm font-bold mb-2">Noregis</label>
                                            <input type="text" name="noregis" value={user.noregis} onChange={(e) => setNoRegisValue(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
                                        </div>
                                        <div className="mb-5">
                                            <label className="block text-gray-700 text-sm font-bold mb-2">Noinventaris</label>
                                            <input type="text" name="noinventaris" value={user.noinvetrasi} onChange={(e) => setNoInventarisValue(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
                                        </div>
                                        <div className="mb-5">
                                            <label className="block text-gray-700 text-sm font-bold mb-2">NamaLokasi</label>
                                            <input type="date" name="namalokasi" value={user.namalokasilokasi} onChange={(e) => setNamaLokasiValue(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
                                        </div>
                                        <div className="mb-5">
                                            <label className="block text-gray-700 text-sm font-bold mb-2">LokasiTemuan</label>
                                            <input type="text" name="lokasitemuan" value={user.lokasitemuan} onChange={(e) => setLokasiTemuanValue(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
                                        </div>
                                        <div className="mb-5">
                                            <label className="block text-gray-700 text-sm font-bold mb-2">tahunperolehan</label>
                                            <input type="text" name="tahunperolehan" value={user.tahunperolehan} onChange={(e) => setTahunPerolehanValue(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
                                        </div>
                                        <div className="mb-5">
                                            <label className="block text-gray-700 text-sm font-bold mb-2">deteminator</label>
                                            <input type="text" name="deteminator" value={user.deteminator} onChange={(e) => setDeteminatorValue(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
                                        </div>
                                        <div className="mb-5">
                                            <label className="block text-gray-700 text-sm font-bold mb-2">keterangan</label>
                                            <input type="text" name="keterangan" value={user.keterangan} onChange={(e) => setKeteranganValue(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
                                        </div>
                                        <div className="flex justify-end">
                                            <button className="bg-blue-500 text-white py-1.5 px-4 rounded" type="submit">Submit</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Modal */}
        </div>
    )
}
