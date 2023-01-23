import {
  Button,
  CssBaseline,
  Paper,
  Step,
  StepLabel,
  Stepper,
} from "@mui/material";
import React, { useState } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@mui/styles";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid";
import AddressForm from "../components/checkout/Address";
import Payment from "../components/checkout/Payment";
import Review from "../components/checkout/Review";
import PrimarySearchAppBar from "../components/Header";
import Footer from "../components/Footer";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const styles = (theme) => ({
  appBar: {
    position: "relative",
  },
  layout: {
    width: "auto",
    marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2,
    [theme.breakpoints.up(600 + theme.spacing.unit * 2 * 2)]: {
      width: 600,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 3,
    padding: theme.spacing.unit * 2,
    [theme.breakpoints.up(600 + theme.spacing.unit * 3 * 2)]: {
      marginTop: theme.spacing.unit * 6,
      marginBottom: theme.spacing.unit * 6,
      padding: theme.spacing.unit * 3,
    },
  },
  stepper: {
    padding: `${theme.spacing.unit * 3}px 0 ${theme.spacing.unit * 5}px`,
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end",
  },
  button: {
    marginTop: theme.spacing.unit * 3,
    marginLeft: theme.spacing.unit,
  },
});

const steps = ["Shipping address", "Payment details", "Review your order"];

export default function Checkout() {
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(0);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [zip, setZip] = useState("");
  const [payment, setPayment] = useState("");
  // console.log(setFirstName, "setFirstName");
  const handleNext = () => {
    if (activeStep === steps.length - 1) {
      toast.success("Successfully submitted.");
      setActiveStep(0);
      setTimeout(() => {
        navigate("/designs");
      }, [5000]);

      console.log("callling");
    } else {
      setActiveStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prev) => prev - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  return (
    <>
      <div className="App">
        <PrimarySearchAppBar>
          <React.Fragment>
            <CssBaseline />
            <ToastContainer />

            <main className=" flex justify-center">
              <div className="w-[80%] ">
                <Paper className={"px-[30px] py-10"}>
                  <Typography component="h1" variant="h4" align="center">
                    Checkout
                  </Typography>
                  <Stepper activeStep={activeStep} className={""}>
                    {steps.map((label) => (
                      <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                      </Step>
                    ))}
                  </Stepper>
                  <React.Fragment>
                    {activeStep === steps.length ? (
                      <React.Fragment>
                        <Typography variant="h5" gutterBottom>
                          Thank you for your order.
                        </Typography>
                        <Typography variant="subtitle1">
                          Your order number is #2001539. We have emailed your
                          order confirmation, and will send you an update when
                          your order has shipped.
                        </Typography>
                      </React.Fragment>
                    ) : (
                      <React.Fragment>
                        {activeStep === 0 ? (
                          <AddressForm
                            firstName={firstName}
                            lastName={lastName}
                            address={address}
                            city={city}
                            zip={zip}
                            setFirstName={setFirstName}
                            setLastName={setLastName}
                            setAddress={setAddress}
                            setCity={setCity}
                            setZip={setZip}
                          />
                        ) : activeStep === 1 ? (
                          <Payment setPayment={setPayment} />
                        ) : activeStep === 2 ? (
                          <Review
                            firstName={firstName}
                            lastName={lastName}
                            address={address}
                            city={city}
                            zip={zip}
                            payment={payment}
                          />
                        ) : (
                          <></>
                        )}
                        {/* {getStepContent(activeStep)} */}
                        <div className={""}>
                          {activeStep !== 0 && (
                            <Button onClick={handleBack} className={""}>
                              Back
                            </Button>
                          )}
                          <Button
                            variant="contained"
                            color="primary"
                            onClick={handleNext}
                            className={""}
                          >
                            {activeStep === steps.length - 1
                              ? "Place order"
                              : "Next"}
                          </Button>
                        </div>
                      </React.Fragment>
                    )}
                  </React.Fragment>
                </Paper>
              </div>
            </main>
          </React.Fragment>
        </PrimarySearchAppBar>
        <div></div>
      </div>{" "}
      <Footer />
    </>
  );
}

// Checkout.propTypes = {
//   classes: PropTypes.object.isRequired,
// };
