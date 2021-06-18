import styled from "styled-components";
import React from "react";

const Wrapped = styled.article`
  font-size: 0.8rem;
  background: #0b7285;
  color: #f1f3f5;
  margin: 0;
  text-align: center;
  font-family: sans-serif;
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  z-index: 100;
  left: 0;
  p {
    margin: 0;
    padding: 3px;
    flex: 1 1 auto;
  }

  button {
    z-index: 100;
    align-self: center;
    padding: 2px;
    margin: 0 10px;
    background: #c5f6fa;
    border: 0;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    cursor: pointer;
    &:hover {
      background: #99e9f2;
    }
    &:active {
      background: #22b8cf;
    }
  }
`;

const useOpen = (initial = true) => {
  const [open, setOpen] = React.useState(() => {
    const storedVal = JSON.parse(window.localStorage.getItem("covidNotice"));
    if (storedVal === null) return initial;
    return storedVal;
  });
  const toggle = React.useCallback(() => setOpen(false), []);
  return { open, toggle };
};

const Notice = () => {
  const { open, toggle } = useOpen(true);
  React.useEffect(() => {
    window.localStorage.setItem("covidNotice", JSON.stringify(open));
  }, [open]);
  return (
    <>
      {open && (
        <Wrapped>
          <p>
            Please note that I have stayed in Canada during the pandemic and
            have not traveled.
          </p>
          <button onClick={toggle}>x</button>
        </Wrapped>
      )}
    </>
  );
};

export default Notice;
