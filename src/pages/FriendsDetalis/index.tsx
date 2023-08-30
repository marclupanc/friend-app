import Container from "react-bootstrap/Container";
import { useSelector } from "react-redux";
import { selectedFriendToDisplaySelector } from "../../shared/store/selectors.ts";
import { ActionButton } from "../../shared";
import { ActionButtonVariants } from "../../shared/ui/ActionButton/types.ts";
import { useNavigate } from "react-router";

export const FriendsDetails = () => {
  const friend = useSelector(selectedFriendToDisplaySelector);
  const navigate = useNavigate();

  return (
    <Container
      className="mt-lg-5"
      style={{
        backgroundColor: "lightgray",
        height: "250px",
        padding: "40px",
      }}
    >
      <h1 style={{ fontWeight: "300" }}>
        {friend.firstName} {friend.lastName}
      </h1>
      <p>
        {friend.email} | {friend.phone} | {friend.twitter}
      </p>
      <hr />
      <div className="d-flex gap-2">
        <ActionButton
          variant={ActionButtonVariants.SECONDARY}
          label="Back"
          action={() => navigate("/")}
        />
        <ActionButton
          variant={ActionButtonVariants.PRIMARY}
          label="Edit"
          action={() => navigate(`/friends/${friend.id}/edit`)}
        />
      </div>
    </Container>
  );
};
