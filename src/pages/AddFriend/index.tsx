import { ActionButton, FriendForm } from "../../shared";
import { ActionButtonVariants } from "../../shared/ui/ActionButton/types.ts";
import { useNavigate } from "react-router";

export const AddFriend = () => {
  const navigate = useNavigate();
  return (
    <div className="mt-lg-5">
      <h2 className="mb-lg-5">Add New Friend</h2>
      <FriendForm />
      <ActionButton
        variant={ActionButtonVariants.SECONDARY}
        label="Back"
        action={() => {
          navigate(-1);
        }}
      />
    </div>
  );
};
