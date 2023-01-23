import React, { useEffect, useState } from "react";
import PrimarySearchAppBar from "../components/Header";
import axios from "axios";
import Footer from "../components/Footer";
import DesignCard from "../components/DesignCard";
import { useNavigate } from "react-router-dom";
import { useToken } from "../hooks/useAuth";
import { useSelector } from "react-redux";

export default function Designs() {
  let navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [type, setType] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [designs, setDesigns] = useState([]);
  const user = useSelector((state) => state.user);
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(e.target);
    // console.log({ title, image });
    const formData = new FormData();
    formData.append("image", image);
    formData.append("title", title);
    // console.log(formData);
    fetch("http://localhost:4000/designs/file-upload", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        fetch("http://localhost:4000/designs/", {
          method: "PATCH",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify({
            id: data?.design?._id,
            title,
            description,
            price,
            productType: type,
          }),
        })
          .then((res) =>
            setTimeout(() => {
              getDesigns();
            }, 2000)
          )
          .catch((err) => console.log(err, "err"));
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  const getDesigns = async () => {
    const res = await axios.get("http://localhost:4000/designs/");
    console.log(res, "designs");
    setDesigns(res?.data?.design);
    // fetch("http://localhost:4000/designs/", {
    //   method: "GET",
    //   headers: { "Content-type": "application/json" },
    // })
    //   .then((res) => {
    //     setDesigns(res?.data);
    //     console.log(res, "res from getting design");
    //   })
    //   .catch((err) => {
    //     console.log(err, "err");
    //   });
  };
  const LoggedIn = useToken();
  useEffect(() => {
    if (!LoggedIn) {
      return navigate("/");
    } else {
      getDesigns();
    }
  }, [LoggedIn]);
  console.log(user?.email, "email");

  return (
    <>
      <div className="App">
        <PrimarySearchAppBar
        // setOpenLogin={setOpenLogin}
        // setOpenRegister={setOpenRegister}
        >
          <h1 className="text-4xl font-extrabold text-primary">Products</h1>

          <div className="my-20 grid grid-cols-4 gap-10">
            {designs?.map((design) => {
              return (
                <div className="" key={design._id}>
                  <DesignCard design={design} />
                </div>
              );
            })}
          </div>
          {user?.email === "tothapi@gmail.com" ? (
            <div>
              <h2 className="text-primary text-xl mb-5">Add Designs</h2>

              <div className="w-full flex justify-center">
                <form onSubmit={submitHandler}>
                  <div className="flex items-center gap-x-20 pb-5">
                    <label>title</label>
                    <input
                      name="title"
                      onChange={(e) => setTitle(e.target.value)}
                      className="focus:outline-none border border-[#e6e6e6] "
                    />
                  </div>
                  <div className="flex items-center gap-x-20 pb-5">
                    <label>type</label>
                    <select
                      onChange={(event) => setType(event.target.value)}
                      value={type}
                    >
                      <option value="men wears">men wears</option>
                      <option value="female wears">female wears</option>
                      <option value="shirt">shirt</option>
                      <option value="pant">pant</option>
                      <option value="school dress male">
                        school dress male
                      </option>
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
                  <div className="flex items-center gap-x-5 pb-5">
                    <label>Description</label>
                    <textarea
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      className="focus:outline-none border border-[#e6e6e6] "
                    />
                  </div>
                  <div className="flex items-center gap-x-[70px] pb-5">
                    <label>Price</label>
                    <input
                      type="number"
                      name="price"
                      onChange={(e) => setPrice(e.target.value)}
                      className="focus:outline-none border border-[#e6e6e6] "
                    />
                  </div>
                  <div className="flex items-center gap-x-[70px]">
                    <label>image</label>
                    <input
                      type="file"
                      name="image"
                      accept="image/png"
                      onChange={(e) => setImage(e.target.files[0])}
                      className="focus:outline-none border border-[#e6e6e6] "
                    />
                  </div>
                  <button
                    className="bg-primary text-[#ffffff] px-4 py-2 mt-8"
                    type="submit"
                  >
                    add
                  </button>
                </form>
              </div>
            </div>
          ) : (
            <div></div>
          )}
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
