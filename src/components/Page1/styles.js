import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HomeBg = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const BgImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  -o-object-fit: cover;
`;

export const HomeContents = styled.div`
  z-index: 3;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.img`
  width: 700px;
`;

export const LogoP = styled.p`
  color: #fff;
  font-size: 32px;
  margin-top: -130px;
  margin-bottom: 50px;
`;

export const DeliIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SBtn = styled.nav``;

export const SkipTheDish = styled.img`
  width: 200px;
  height: 200px;
  margin-right: 30px;
  cursor: pointer;
  filter: opacity(60%);
  border-radius: 20px;

  &:hover {
    filter: none;
  }
`;

export const UBtn = styled.nav``;

export const UberEats = styled.img`
  width: 200px;
  height: 200px;
  margin-right: 30px;
  cursor: pointer;
  filter: opacity(60%);
  border-radius: 20px;

  &:hover {
    filter: none;
  }
`;

export const FBtn = styled.nav``;
export const Fantuan = styled.img`
  width: 200px;
  height: 200px;
  cursor: pointer;
  filter: opacity(60%);
  border-radius: 20px;

  &:hover {
    filter: none;
  }
`;
