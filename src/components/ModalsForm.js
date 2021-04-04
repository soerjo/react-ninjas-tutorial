import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import DateFnsUtils from "@date-io/date-fns";
import Button from "@material-ui/core/Button";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.default,
    boxShadow: theme.shadows[5],
    borderRadius: theme.spacing(1),
    padding: theme.spacing(5, 1),
    width: "50%",
  },
  root: {
    // backgroundColor: "green",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "50ch",
    },
  },
  button: {
    "& > *": {
      margin: theme.spacing(1),
      width: "50ch",
    },
    marginTop: "2ch",
    width: "50ch",
    display: "flex",
    justifyContent: "center",
    // backgroundColor: "blue",
  },
}));

export default function ModalForm({ form, open, handleClose, handleSubmit }) {
  const classes = useStyles();
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [ibadah, setIbadah] = useState(form);
  // console.log("isi dari form", props.form);

  const handleSelectChange = (e) => {
    // setIbadah(e.target.value);
  };
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleAllChange = (e) => {
    const isi = e.target.value;
    console.log("isi dari nilai: ", isi);
  };

  const handleTombolSubmit = (e) => {
    e.preventDefault();
    console.log("handle donk...");
    console.log("isi state ibadah: ", ibadah);
    handleSubmit(ibadah);
    handleClose();
  };

  return (
    <div>
      {console.log("isi dari handleSubmit", handleSubmit)}{" "}
      {console.log("isi form modal: ", form)}
      {console.log("isi ibadah modal: ", ibadah)}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <form
              className={classes.root}
              onSubmit={handleTombolSubmit}
              noValidate
              autoComplete="off"
            >
              <TextField
                required
                id="nama"
                label="Nama"
                defaultValue="Masukan Nama"
                variant="outlined"
                onChange={handleAllChange}
              />
              <TextField
                required
                id="noTlp"
                label="Nomor Telepon"
                defaultValue="Masukan Nomor Tlp"
                variant="outlined"
              />
              <TextField
                id="namaIbadah"
                select
                label="Nama Ibadah"
                value={ibadah}
                onChange={handleSelectChange}
                // helperText="Please select your currency"
                variant="outlined"
              >
                {console.log("isi dari form nama ibadah", form)}
                {form.namaIbadah.map((option, index) => (
                  <MenuItem key={index} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </TextField>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  disableToolbar
                  variant="inline"
                  format="dd/MM/yyyy"
                  margin="normal"
                  id="tanggalIbadah"
                  label="Tanggal Ibadah"
                  value={selectedDate}
                  onChange={handleDateChange}
                  KeyboardButtonProps={{
                    "aria-label": "change date",
                  }}
                />
              </MuiPickersUtilsProvider>{" "}
              <div className={classes.button}>
                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  color="primary"
                >
                  Submit
                </Button>{" "}
                <Button
                  onClick={handleClose}
                  variant="contained"
                  size="large"
                  color="secondary"
                >
                  Cancle
                </Button>
              </div>
            </form>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
