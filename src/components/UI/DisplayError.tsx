import React from "react";
import { Alert } from "react-bootstrap";

interface DisplayErrorProps {
  errorMsg: string;
}

export const DisplayError: React.FC<DisplayErrorProps> = ({ errorMsg }) => {
  return (
    <Alert data-testid={"error-msg"} variant={"danger"}>
      {errorMsg}
    </Alert>
  );
};
