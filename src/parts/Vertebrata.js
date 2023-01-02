import List from "../helpers/validations/List"
import { useState, useEffect } from "react";
import { uid } from "uid";
import axios from "axios";

let api = axios.create({ baseURL: "https://sbc-sebatcabut.herokuapp.com" });

function Vertebrata() {
  const [contacts, setContacts] = useState([]);

  const [isUpdate, setIsUpdate] = useState({ id: null, status: false });

  const [formData, setFormData] = useState({
    id: "",
    no_register: "",
    no_inventaris:"",
    nama_koleksi:"",
    lokasi_temuan:"",
    tahun_perolehan:"",
    determinator:"",
    keterangan:"",
  });

  useEffect(() => {
    // fetch data dsini dan set contact

    api.get("/fosils").then((res) => {
      setContacts(res.data);
    });
  }, []);

  function handleChange(e) {
    let newFormState = { ...formData };
    newFormState[e.target.id] = e.target.value;
    setFormData(newFormState);
  }

  function handleSubmit(e) {
    e.preventDefault();
    let data = [...contacts];

    if (formData.name === "") {
      return false;
    }
    if (formData.telp === "") {
      return false;
    }

    if (isUpdate.status) {
      data.forEach((contact) => {
        if (contact.id === isUpdate.id) {
          contact.no_register = formData.no_register;
          contact.no_inventaris = formData.no_inventaris;
          contact.nama_koleksi = formData.nama_koleksi;
          contact.lokasi_temuan = formData.lokasi_temuan;
          contact.tahun_perolehan = formData.tahun_perolehan;
          contact.determinator = formData.determinator;
          contact.keterangan = formData.keterangan;

        }
      });
      api
        .put("/fosils/" + isUpdate.id, {
          id: isUpdate.id,
          no_register: formData.no_register,
          no_inventaris: formData.no_inventaris,
          nama_koleksi: formData.nama_koleksi,
          lokasi_temuan: formData.lokasi_temuan,
          tahun_perolehan: formData.tahun_perolehan,
          determinator: formData.determinator,
          keterangan: formData.keterangan,

        })
        .then(() => {
          alert("Data berhasil di update");
        });
      // update berdasarkan id
    } else {
      let toSave = {
        id: uid(),
        no_register: formData.no_register,
        no_inventaris: formData.no_inventaris,
        nama_koleksi: formData.nama_koleksi,
        lokasi_temuan: formData.lokasi_temuan,
        tahun_perolehan: formData.tahun_perolehan,
        determinator: formData.determinator,
        keterangan: formData.keterangan,
      };
      data.push(toSave);

      // menambahkan data
      api.post("/fosils", toSave).then(() => {
        alert("Data berhasil ditambah");
      });
    }
    setContacts(data);
    setIsUpdate(false);
    setFormData({  id: "",
    no_register: "",
    no_inventaris:"",
    nama_koleksi:"",
    lokasi_temuan:"",
    tahun_perolehan:"",
    determinator:"",
    keterangan:"", });
  }

  function handleEdit(id) {
    // cari data di state
    // isi data ke state form
    let data = [...contacts];
    let foundData = data.find((contact) => contact.id === id);
    setIsUpdate({ status: true, id: id });
    setFormData({ 
      no_register: foundData.no_register, 
      no_inventaris: foundData.no_inventaris, 
      nama_koleksi: foundData.nama_koleksi ,
      lokasi_temuan: foundData.lokasi_temuan ,
      tahun_perolehan: foundData.tahun_perolehan ,
      determinator: foundData.determinator ,
      keterangan: foundData.keterangan 
    
    
    });
  }

  function handleDelete(id) {
    let data = [...contacts];
    let filteredData = data.filter((contact) => contact.id !== id);

    // menghapus data
    api.delete("/fosils/" + id).then(() => alert("Data berhasil dihapus"));
    setContacts(filteredData);
  }

  return (
    <div className="App">
      <div className="fixed-top bg-white pb-3 mx-auto" style={{ width: 400 }}>
        <h1 className="px-3 py-3 font-weight-bold">My Contact List</h1>
        <form onSubmit={handleSubmit} className="px-3 py-4">
          <div className="form-group">
            <label htmlFor="">id</label>
            <input
              type="text"
              onChange={handleChange}
              className="form-control"
              value={formData.id}
              name="id"
            />
          </div>
          <div className="form-group mt-3">
            <label htmlFor="">no_register</label>
            <input
              type="text"
              onChange={handleChange}
              value={formData.no_register}
              className="form-control"
              name="no_register"
            />
          </div>
          <div className="form-group mt-3">
            <label htmlFor="">no_inventaris</label>
            <input
              type="text"
              onChange={handleChange}
              value={formData.no_inventaris}
              className="form-control"
              name="no_inventaris"
            />
          </div>
          <div className="form-group mt-3">
            <label htmlFor="">nama_koleksi</label>
            <input
              type="text"
              onChange={handleChange}
              value={formData.nama_koleksi}
              className="form-control"
              name="nama_koleksi"
            />
          </div>
          <div className="form-group mt-3">
            <label htmlFor="">lokasi_temuan</label>
            <input
              type="text"
              onChange={handleChange}
              value={formData.lokasi_temuan}
              className="form-control"
              name="lokasi_temuan"
            />
          </div>
          <div className="form-group mt-3">
            <label htmlFor="">determinator</label>
            <input
              type="text"
              onChange={handleChange}
              value={formData.determinator}
              className="form-control"
              name="determinator"
            />
          </div>
          <div className="form-group mt-3">
            <label htmlFor="">keterangan</label>
            <input
              type="text"
              onChange={handleChange}
              value={formData.keterangan}
              className="form-control"
              name="keteranga"
            />
          </div>
          <div>
            <button type="submit" className="btn btn-primary w-100 mt-3">
              Save
            </button>
          </div>
        </form>
      </div>
      <div style={{ marginTop: 350 }}>
        <List
          handleEdit={handleEdit}
          handleDelete={handleDelete}
          data={contacts}
        />
      </div>
    </div>
  );
}

export default Vertebrata;
