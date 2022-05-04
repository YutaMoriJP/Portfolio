import { Fragment } from "react";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";

const renderText = ({ title, content, index }) => {
  return (
    <Fragment key={index}>
      <DialogTitle id="alert-dialog-title">{title}</DialogTitle>

      <DialogContent>
        <DialogContentText id="alert-dialog-description" style={{ textAlign: "left" }}>
          {content}
        </DialogContentText>
      </DialogContent>
    </Fragment>
  );
};

const renderPost = (content) => {
  return content.map((data, index) => renderText({ ...data, index }));
};

export default renderPost;
