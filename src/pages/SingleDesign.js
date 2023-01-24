import React, { useEffect, useState } from "react";
import PrimarySearchAppBar from "../components/Header";
import axios from "axios";
import Footer from "../components/Footer";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../slices/cartSlice";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function SingleDesign() {
  let { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [design, setDesign] = useState("");
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const getDesign = async () => {
    const res = await axios.get(`http://localhost:4000/designs/${id}`);
    console.log(res);
    setDesign(res?.data?.design);
  };

  useEffect(() => {
    getDesign();
  }, [id]);
  console.log(design, "design");
  return (
    <>
      <div className="App">
        <PrimarySearchAppBar
        // setOpenLogin={setOpenLogin}
        // setOpenRegister={setOpenRegister}
        >
          <div className="min-h-screen">
            <div className="flex">
              <button
                onClick={() => {
                  navigate(-1);
                }}
                className="bg-[#f39422] text-white font-bold text-lg p-2 px-6 rounded "
              >
                <ArrowBackIosIcon />
                Back
              </button>
            </div>

            <div>
              <p className="pt-10 px-4 text-5xl font-extrabold text-primary pb-4">
                {design?.title}
              </p>
              <img
                className="h-[500px] object-contain w-full border border-[#e6e6e6] rounded-md "
                src={`http://localhost:4000/images/${design?.file}`}
              />
            </div>
            <div className="grid grid-cols-2 gap-10 py-10 px-5">
              <p className="py-10 text-left">
                {design?.description ||
                  "Today is one of the happiest days of my life, I officially registered my first land purchase today. First investment of my life in Dhaka City, Allah fulfilled a big dream at this young age, thank you. Life, death and health are all in the hands of Allah. If I stay alive and healthy, wanna do something big in life, lets see how far can go!!"}
              </p>
              <div>
                <Accordion
                  expanded={expanded === "panel1"}
                  onChange={handleChange("panel1")}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                  >
                    <Typography sx={{ width: "33%", flexShrink: 0 }}>
                      Sizes
                    </Typography>
                    <Typography sx={{ color: "text.secondary" }}>
                      Available Sizes
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>M, L, XL, 2XL</Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  expanded={expanded === "panel2"}
                  onChange={handleChange("panel2")}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2bh-content"
                    id="panel2bh-header"
                  >
                    <Typography sx={{ width: "33%", flexShrink: 0 }}>
                      Users
                    </Typography>
                    <Typography sx={{ color: "text.secondary" }}>
                      User Type
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>All</Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  expanded={expanded === "panel3"}
                  onChange={handleChange("panel3")}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3bh-content"
                    id="panel3bh-header"
                  >
                    <Typography sx={{ width: "33%", flexShrink: 0 }}>
                      Price
                    </Typography>
                    <Typography sx={{ color: "text.secondary" }}>
                      Price in BDT
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>{design?.price || 2000} tk only</Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  expanded={expanded === "panel4"}
                  onChange={handleChange("panel4")}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel4bh-content"
                    id="panel4bh-header"
                  >
                    <Typography sx={{ width: "33%", flexShrink: 0 }}>
                      Personal data
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>No Personal data available</Typography>
                  </AccordionDetails>
                </Accordion>
              </div>
            </div>

            <button
              onClick={() => {
                dispatch(
                  addToCart({
                    id: design._id,
                    title: design.title,
                  })
                );
                navigate(-1);
              }}
              className="bg-[#f39422] text-white font-bold text-lg p-2 rounded "
            >
              <ShoppingCartIcon /> Add to Cart
            </button>
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
