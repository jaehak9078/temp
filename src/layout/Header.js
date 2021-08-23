import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { Link } from "react-router-dom";
import imgLogoTop from "assets/images/logo.png";
import { FiUser } from "react-icons/fi";

const HeaderWrapper = styled.header`
  /* max-width: 1920px; */
  /* width: 100%; */
  height: 32px;
  padding: 24px 0px 24px 00px;
  background-color: #232323;
  display: flex;
  /* justify-content: space-between; */
  color: "white";
  align-items: center;
`;

const MenuItem = styled.div`
  font-size: 16px;
  color: ${(props) => props.color || "#aaaaaa"};
  margin-left: 30px;
  align-self: center;
  &:hover {
    cursor: pointer;
    color: #eeeeee;
  }
`;

const MenuBox = styled.div`
  display: flex;
`;

const LogoStyle = styled.div`
  &:hover {
    cursor: pointer;
  }
  /* width: 167px;
  height: 29px; */
`;

const SubMenuContainer = styled.div`
  position: absolute;
  top: 0px;
  right: 10px;
  background-color: #403f3f;
  opacity: 0.8;
  border-radius: 0px 0px 20px 20px;
  width: 200px;
  height: 150px;
  color: #eee;
`;

const Header = () => {
  const { user } = useSelector((state) => ({
    user: state.users.user,
  }));
  const [selectedMenu, setSelectedMenu] = useState("");
  return (
    <HeaderWrapper style={{ width: "100%" }}>
      <LogoStyle style={{ marginLeft: 60 }}>
        <Link to="/">
          <img
            src={imgLogoTop}
            alt="logo"
            style={{ width: 150, height: 80, padding: 15, marginLeft: 20 }}
          />
        </Link>
        {/* <Img src={logo} style={{ width: 167, height: 29 }} /> */}
      </LogoStyle>
      <div
        style={{
          justifyContent: "space-between",
          display: "flex",
          width: "100%",
        }}
      >
        <MenuBox>
          <MenuItem color={selectedMenu === "메인" ? "#ffffff" : "#aaaaaa"}>
            메인
          </MenuItem>

          <MenuItem color={selectedMenu === "퀴즈" ? "#ffffff" : "#aaaaaa"}>
            퀴즈
          </MenuItem>
          <MenuItem color={selectedMenu === "뽑기" ? "#ffffff" : "#aaaaaa"}>
            뽑기
          </MenuItem>
        </MenuBox>
        <MenuBox style={{ alignItems: "center", marginRight: 20 }}>
          {user.userid === "" ? (
            <MenuItem style={{ alignItems: "center", display: "flex" }}>
              {/* <FiUser style={{ width: 29, height: 29, marginRight: 10 }} /> */}
              <FiUser />
              <div style={{ marginLeft: 15, marginRight: 10 }}>로그인</div>
            </MenuItem>
          ) : (
            <MenuItem style={{ alignItems: "center", display: "flex" }}>
              {/* <FiUser style={{ width: 29, height: 29, marginRight: 10 }} /> */}
              <FiUser />
              <div style={{ marginLeft: 15, marginRight: 10 }}>
                {user.username}
              </div>
            </MenuItem>
          )}
        </MenuBox>
      </div>
    </HeaderWrapper>
  );
};

export default Header;
