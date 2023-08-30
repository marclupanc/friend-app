import React from "react";
import { Button } from "react-bootstrap";

type ActionButtonType = {
  variant: string;
  label: string;
  disabled?: boolean;
  action: () => void;
};
export const ActionButton = ({
  variant,
  action,
  disabled,
  label,
}: ActionButtonType) => {
  return (
    <>
      <Button disabled={disabled} variant={variant} onClick={action}>
        {label}
      </Button>
    </>
  );
};
