import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import ModalForm from "./ModalsForm";

function SubmitData(props) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-end",
      }}
    >
      <Button
        type="button"
        onClick={handleOpen}
        variant="contained"
        color="primary"
        style={{ margin: "10px" }}
      >
        Submit Data (+)
      </Button>
      {console.log("isi data props:", props)}
      <ModalForm
        form={props.form}
        open={open}
        handleClose={handleClose}
        handleOpen={handleOpen}
        handleSubmit={props.handleSubmit}
      />
    </div>
  );
}

export default SubmitData;
