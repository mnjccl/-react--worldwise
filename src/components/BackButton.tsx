import { useNavigate } from "react-router-dom";
import { MouseEvent } from "react";

import Button from "./Button";

function BackButton() {
  const navigate = useNavigate();

  return (
    <Button
      type="back"
      onClick={(e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        navigate(-1);
      }}
    >
      &larr; Back
    </Button>
  );
}

export default BackButton;
