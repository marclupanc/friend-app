import { FriendForm } from "../../features/FriendForm";
import { ActionButton } from "../../shared";
import { ActionButtonVariants } from "../../shared/ui/ActionButton/types.ts";
import { removeFriend } from "../../shared/store/friendsSlice.ts";
import { useNavigate, useParams } from "react-router";
import { useDispatch } from "react-redux";

export const EditFriend = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();

  return (
    <div className="mt-lg-5">
      <h2 className="mb-lg-3">Editing Friend</h2>
      <FriendForm />

      <ActionButton
        variant={ActionButtonVariants.SECONDARY}
        label="Back"
        action={() => {
          navigate("/friends");
        }}
      />
      <ActionButton
        variant={ActionButtonVariants.SECONDARY}
        label="Show"
        className="mx-2"
        action={() => {
          navigate(`/friends/${id}`);
        }}
      />

      <ActionButton
        variant={ActionButtonVariants.REMOVE}
        label="Remove"
        action={() => {
          dispatch(removeFriend({ id }));
          navigate("/");
        }}
      />
    </div>
  );
};
