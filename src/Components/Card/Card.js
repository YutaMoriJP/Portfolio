import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Image from "../Image/Image";
import PaperStyled from "../../StyledComponent/StyledPaper";
import Tags from "../Tags/Tags";
import styled, { css } from "styled-components";
import StyledButton from "../../StyledComponent/StyledButton";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import Dialog from "../Dialog/Dialog";

const Text = styled(Typography)`
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

const Button = styled(StyledButton)`
  margin: 8px;
  font-size: 0.6rem;
  padding: 3px;
  span {
    padding: 4px;
  }
  @media screen and (min-width: 800px) {
    font-size: 0.7rem;
  }
`;

const ButtonContainer = styled.article`
  display: flex;
  justify-content: flex-start;
`;

const Card = ({ header, img, description, tags, url, details }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  return (
    <>
      <Grid item xs={11} sm={6} md={4} xl={4}>
        <PaperStyled elevation={10}>
          <Text variant="h5" header="true">
            {header}
          </Text>
          <Image src={img} alt={header} width="100%" height="180px" />{" "}
          <Text bold="true" title="true">
            About Project:
          </Text>
          <Text variant="subtitle2">{description}</Text>
          <ButtonContainer>
            <Button
              color="primary"
              variant="contained"
              endIcon={<MenuBookIcon />}
              onClick={handleOpen}
            >
              Read more
            </Button>
          </ButtonContainer>
          <Text bold="true" title="true">
            Code Technology used:
          </Text>
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
      <Dialog open={open} setOpen={setOpen} details={details} />
    </>
  );
};

export default Card;
