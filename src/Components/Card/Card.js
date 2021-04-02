import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Image from "../Image/Image";
import PaperStyled from "../../StyledComponent/StyledPaper";
import Tags from "../Tags/Tags";
import styled, { css } from "styled-components";
import StyledButton from "../../StyledComponent/StyledButton";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

const P = styled(Typography)`
  padding: 5px 10px;
  margin: 0;
  text-align: left;
  font-weight: ${props => props.bold && 900};
  color: ${props => props.title && props.theme.titleColor};
  ${props =>
    props.header &&
    css`
      text-align: center;
      font-weight: 900;
      color: ${props => props.theme.titleColor};
    `};
`;

const Card = ({ header, img, description, tags, url }) => {
  return (
    <Grid item xs={11} sm={6} md={4} xl={4}>
      <PaperStyled elevation={10}>
        <P variant="h5" header="true">
          {header}
        </P>
        <Image src={img} alt={header} width="100%" height="180px" />{" "}
        <P bold="true" title="true">
          About Project:
        </P>
        <P variant="subtitle2">{description}</P>
        <P bold="true" title="true">
          Code Technology used:
        </P>
        <Tags tags={tags} />
        <a href={url} target="_blank" rel="noreferrer">
          <StyledButton
            variant="contained"
            color="primary"
            endIcon={<ChevronRightIcon />}
          >
            See Project
          </StyledButton>
        </a>
      </PaperStyled>
    </Grid>
  );
};

export default Card;
