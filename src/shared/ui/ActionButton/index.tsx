import { Button } from "react-bootstrap";
import { ActionButtonVariants } from "./types.ts";
import { removeFriend } from "../../store/friendsSlice.ts";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";

type ActionButtonType = {
  variant: ActionButtonVariants;
  label: string;
  disabled?: boolean;
  action?: () => void;
  className?: string;
  id?: string;
};
export const ActionButton = ({
  variant,
  action,
  disabled,
  label,
  id,
  className,
}: ActionButtonType) => {
  const handleRemoveFriend = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    dispatch(removeFriend({ id }));
    navigate(`/friends`);
  };

  return (
    <>
      <Button
        className={className}
        disabled={disabled}
        variant={variant}
        onClick={action ? action : handleRemoveFriend}
      >
        {label}
      </Button>
    </>
  );
};
