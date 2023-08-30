import { Button } from "react-bootstrap";
import { ActionButtonVariants } from "./types.ts";

type ActionButtonType = {
  variant: ActionButtonVariants;
  label: string;
  disabled?: boolean;
  action?: () => void;
  className?: string;
};
export const ActionButton = ({
  variant,
  action,
  disabled,
  label,
  className,
}: ActionButtonType) => {
  return (
    <>
      <Button
        className={className}
        disabled={disabled}
        variant={variant}
        onClick={action}
      >
        {label}
      </Button>
    </>
  );
};
