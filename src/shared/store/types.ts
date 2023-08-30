export type Friend = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: number;
  twitter: string;
};

export type FriendsState = {
  friends: Friend[];
  selectedFriendToDisplay: Friend;
};

export type Store = {
  friends: FriendsState;
};
