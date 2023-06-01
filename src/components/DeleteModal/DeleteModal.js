import React from "react";
import { Box, Typography, Modal } from "@mui/material";
import supabase from "../../config/supabaseClient";
import "./DeleteModal.css";
import { useNavigate } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function DeleteModal(props) {
  const navigate = useNavigate();

  const deleteHandler = async function () {
    const { data, error } = await supabase
      .from("users")
      .delete()
      .eq("id", props.userId)
      .select();

    if (error) {
      alert("Failed to delete user");
    }
    if (data) {
      navigate("/");
    }

    props.onModal();
  };

  return (
    <>
      <Modal
        open={props.modalStatus}
        onClose={() => props.onModal()}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Are you sure to delete?
          </Typography>
          <div className="btn-container">
            <button className="yes" onClick={deleteHandler}>
              Delete
            </button>
          </div>
        </Box>
      </Modal>
    </>
  );
}
