import React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

function Payment({ setPayment }) {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Payment method
      </Typography>
      <div className="grid grid-cols-2 pb-20">
        <div className="text-3xl">
          <input
            onChange={(e) => (e.target.checked ? setPayment("hand cash") : "")}
            type="checkbox"
            className="w-[50px] h-[50px]"
          />{" "}
          Cash on delivery
        </div>
        <div className="text-3xl">
          <input
            type="checkbox"
            onChange={(e) => (e.target.checked ? setPayment("Bkash") : "")}
            className="w-[50px] h-[50px]"
          />{" "}
          Pay with Bkash
        </div>
      </div>
      {/* <Grid>
        <Grid>
          <TextField required id="cardName" label="Name on card" fullWidth />
        </Grid>
        <Grid>
          <TextField required id="cardNumber" label="Card number" fullWidth />
        </Grid>
        <Grid>
          <TextField required id="expDate" label="Expiry date" fullWidth />
        </Grid>
        <Grid>
          <TextField
            required
            id="cvv"
            label="CVV"
            helperText="Last three digits on signature strip"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveCard" value="yes" />}
            label="Remember credit card details for next time"
          />
        </Grid>
      </Grid> */}
    </React.Fragment>
  );
}

export default Payment;
