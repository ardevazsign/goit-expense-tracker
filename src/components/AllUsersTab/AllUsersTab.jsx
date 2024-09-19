import React from 'react';
import user1 from '../../Assets/image/stack1.png';
import user2 from '../../Assets/image/stack2.png';
import user3 from '../../Assets/image/stack3.png';

import {
  ContentUsers,
  UsersImage,
  FirstUser,
  SecondUser,
  ThirdUser,
  UserAvatar,
  ContentInfo,
  Header3,
  LowerText,
} from './AllUsersTab.Styled';

function AllUsersTab() {
  return (
    <ContentUsers>
      <UsersImage>
        <FirstUser>
          <UserAvatar src={user1} width="48px" height="48px" alt="" />
        </FirstUser>
        <SecondUser>
          <UserAvatar src={user2} width="48px" height="48px" alt="" />
        </SecondUser>
        <ThirdUser>
          <UserAvatar src={user3} width="48px" height="48px" alt="" />
        </ThirdUser>
      </UsersImage>
      <ContentInfo>
        <Header3>1000 users +</Header3>
        <LowerText>Trusted by users for reliable expense tracking!</LowerText>
      </ContentInfo>
    </ContentUsers>
  );
}

export default AllUsersTab;
