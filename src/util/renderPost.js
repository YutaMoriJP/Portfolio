import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";

const renderPost = content => {
  return content.map(renderText);
};

const renderText = ({ title, content }) => {
  return (
    <>
      <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
      <DialogContent>
        <DialogContentText
          id="alert-dialog-description"
          style={{ textAlign: "left" }}
        >
          {content}
        </DialogContentText>
      </DialogContent>
    </>
  );
};

export default renderPost;
