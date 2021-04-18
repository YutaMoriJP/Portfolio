import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import renderPost from "../../util/renderPost";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import styled from "styled-components";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

const CloseContainer = styled.article`
  display: flex;
  justify-content: flex-end;
`;

export default function AlertDialog({ open, setOpen, details }) {
  const handleClose = () => {
    setOpen(false);
  };
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <div>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <CloseContainer onClick={handleClose}>
          <IconButton>
            <CloseIcon />
          </IconButton>
        </CloseContainer>
        {renderPost(details)}
        <DialogActions>
          <Button onClick={handleClose} color="primary" autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
