import styled from 'styled-components';

export const ContentUsers = styled.div`
  display: none;
  @media (min-width: 768px) and (max-width: 1439.8px) {
    display: none;
  }

  @media (min-width: 1440px) {
    padding-left: 54px;
    padding-right: 100px;
    display: flex;
    flex-direction: row;
  }
`;
export const UserAvatar = styled.img`
  width: 48px;
  height: 48px;
  flex-shrink: 0;
  border-radius: 40px;
  border: 2px solid #11101c;
  background: var(
    --avatar-user-square-fleur-cook-neutral-background,
    url(<path-to-image>),
    lightgray 50% / cover no-repeat,
    #e0e0e0
  );
`;
export const FirstUser = styled.div`
  position: relative;
  z-index: 3;
`;
export const SecondUser = styled.div`
  position: relative;
  left: -10px;
  z-index: 2;
`;
export const ThirdUser = styled.div`
  position: relative;
  left: -20px;
  z-index: 1;
`;
export const ContentInfo = styled.div`
  margin-left: 12px;
  width: 210px;
  display: flex;
  flex-direction: column;
`;
export const UsersImage = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Header3 = styled.h3`
  color: #fafafa;
  font-family: Suisse Intl;
  font-size: 28px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.56px;
  margin: 0;
  @media (min-width: 768px) and (max-width: 1439.8px) {
  }

  @media (min-width: 1440px) {
  }
`;
export const LowerText = styled.p`
  color: rgba(250, 250, 250, 0.4);
  font-family: Suisse Intl;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.32px;
  margin: 0;
`;
// .usersTabContainer {
//   display: inline-flex;
//   align-items: flex-start;
//   gap: 12px;
//   background: #0c0d0d;
// }

// .avatarContainer {
//   display: flex;
//   z-index: 100;
// }

// .avatar {
//   width: 48px;
//   height: 48px;
//   border-radius: 50%;
//   border: 2px solid #11101c;
// }

// .avatar:last-of-type {
//   position: relative;
//   left: -20px;
//   z-index: -200;
// }

// .avatar:nth-of-type(2) {
//   position: relative;
//   left: -10px;
//   z-index: -100;
// }

// .userInfo {
//   display: flex;
//   flex-direction: column;
//   align-items: flex-start;
//   gap: 12px;
// }

// .userInfo span {
//   color: #fafafa;
//   font-family: "Suisse Intl";
//   font-size: 28px;
//   font-style: normal;
//   font-weight: 400;
//   line-height: normal;
//   letter-spacing: -0.56px;
// }

// .userInfo p {
//   width: 210px;
//   color: rgba(250, 250, 250, 0.4);
//   font-family: "Suisse Intl";
//   font-size: 16px;
//   font-style: normal;
//   font-weight: 400;
//   line-height: normal;
//   letter-spacing: -0.32px;
// }
