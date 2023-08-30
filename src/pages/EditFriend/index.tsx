import { FriendForm } from "../../features/FriendForm";

export const EditFriend = () => {
  return (
    <div className="mt-lg-5">
      <h2 className="mb-lg-3">Editing Friend</h2>
      <FriendForm mode="edit" />
    </div>
  );
};
