import React, { useEffect, useState } from "react";
import PrimarySearchAppBar from "../components/Header";
import axios from "axios";
import Footer from "../components/Footer";
import DesignCard from "../components/DesignCard";
import { useNavigate } from "react-router-dom";
import { useToken } from "../hooks/useAuth";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Catalogue() {
  let navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [type, setType] = useState("men wears");
  const [catalogue, setCatalogue] = useState([]);
  const submitHandler = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("image", image);
    formData.append("title", title);
    formData.append("productType", type);
    console.log(type, "type");
    fetch("http://localhost:4000/catalogue/file-upload", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        fetch("http://localhost:4000/catalogue/", {
          method: "PATCH",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify({
            id: data?.catalogue?._id,
            title,
            productType: type,
          }),
        })
          .then((res) => getDesigns())
          .catch((err) => console.log(err, "err"));
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    toast.success("Catalogue added successfully.");
  };
  const getDesigns = async () => {
    const res = await axios.get("http://localhost:4000/catalogue/");
    console.log(res, "catalogue");
    setCatalogue(res?.data?.design);
  };
  const LoggedIn = useToken();
  //   useEffect(() => {
  //     if (!LoggedIn) {
  //       return navigate("/");
  //     } else {
  //       getDesigns();
  //     }
  //   }, [LoggedIn]);

  //   console.log(catalogue, "catalogue");

  return (
    <>
      <div className="App">
        <PrimarySearchAppBar
        // setOpenLogin={setOpenLogin}
        // setOpenRegister={setOpenRegister}
        >
          {/* <div className="my-20 grid grid-cols-4 gap-10">
            {designs?.map((design) => {
              return (
                <div className="" key={design._id}>
                  <DesignCard design={design} />
                </div>
              );
            })}
          </div> */}
          <ToastContainer />

          <div className="w-full  min-h-[50vh]">
            <h1>Add Catalogue</h1>
            <form
              className="flex flex-col justify-center"
              onSubmit={submitHandler}
            >
              <div className="flex items-center gap-x-20 pb-5">
                <label>title</label>
                <input
                  name="title"
                  onChange={(e) => setTitle(e.target.value)}
                  className="focus:outline-none border border-[#e6e6e6] "
                />
              </div>
              <div className="flex items-center gap-x-[65px] pb-5">
                <label>image</label>
                <input
                  type="file"
                  name="image"
                  accept="image/png"
                  onChange={(e) => setImage(e.target.files[0])}
                  className="focus:outline-none border border-[#e6e6e6] "
                />
              </div>
              <div className="flex items-center gap-x-20">
                <label>type</label>
                <select
                  onChange={(event) => setType(event.target.value)}
                  value={type}
                >
                  <option value="men wears">men wears</option>
                  <option value="female wears">female wears</option>
                  <option value="shirt">shirt</option>
                  <option value="pant">pant</option>
                  <option value="school dress male">school dress male</option>
                  <option value="school dress female">
                    school dress female
                  </option>
                  <option value="others">others</option>
                </select>
                {/* <input
                  type="file"
                  name="image"
                  onChange={(e) => setImage(e.target.files[0])}
                  className="focus:outline-none border border-[#e6e6e6] "
                /> */}
              </div>
              <button
                className="bg-primary text-[#ffffff] px-4 py-1 w-fit ml-40 mt-5"
                type="submit"
              >
                add
              </button>
            </form>
          </div>
        </PrimarySearchAppBar>
        <div>
          {/* <Button onClick={handleOpen}>Open modal</Button>
<Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
> */}
        </div>
      </div>{" "}
      <Footer />
    </>
  );
}
