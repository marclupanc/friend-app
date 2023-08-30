import Table from "react-bootstrap/Table";
import { ActionButton } from "../../shared";
import { ActionButtonVariants } from "../../shared/ui/ActionButton/types.ts";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { allFriends } from "../../shared/store/selectors.ts";
import {
  removeFriend,
  selectFriendToDisplay,
} from "../../shared/store/friendsSlice.ts";
import { Friend } from "../../shared/store/types.ts";
import { Link } from "react-router-dom";
import { BodyShorthandExample } from "../../shared/ui/NoFriendsBanner";
import { ButtonGroup } from "react-bootstrap";
import { TableHeading } from "../../shared/constants.ts";

const FriendsList = () => {
  const navigate = useNavigate();
  const friends = useSelector(allFriends);
  const dispatch = useDispatch();
  return (
    <div className="mt-lg-5">
      <h2 className="mb-lg-3">Friend List</h2>
      {friends.length ? (
        <Table width="1200px" striped bordered size="md" hover>
          <thead className="table-dark">
            <tr>
              {TableHeading.map((heading, idx) => (
                <th key={idx}>{heading}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {friends.map((friend: Friend) => (
              <tr key={friend.id}>
                <td
                  onClick={() =>
                    dispatch(selectFriendToDisplay({ id: friend.id }))
                  }
                >
                  <Link to={`/friends/${friend.id}`}>
                    {friend.firstName} {friend.lastName}
                  </Link>
                </td>
                <td>{friend.email}</td>
                <td>{friend.phone}</td>
                <td>{friend.twitter}</td>
                <td className="text-center">
                  <ButtonGroup>
                    <ActionButton
                      variant={ActionButtonVariants.EDIT}
                      label="Edit"
                      className="btn-sm"
                      action={() => {
                        dispatch(selectFriendToDisplay({ id: friend.id }));
                        navigate(`/friends/${friend.id}/edit`);
                      }}
                    />
                    <ActionButton
                      variant={ActionButtonVariants.REMOVE}
                      label="Remove"
                      action={() => dispatch(removeFriend({ id: friend.id }))}
                      className="btn-sm"
                    />
                  </ButtonGroup>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <BodyShorthandExample />
      )}

      <ActionButton
        variant={ActionButtonVariants.PRIMARY}
        label="New Friend"
        className="mt-3"
        action={() => navigate("/friends/new")}
      />
    </div>
  );
};

export default FriendsList;
