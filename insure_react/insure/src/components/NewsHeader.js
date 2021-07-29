import React from "react";
import styled from "styled-components";

const HeaderBlock = styled.div`
  display: flex;
  height: 50px;
  justify-content: center;
  text-align: center;
  align-items: center;
  font-weight: bold;
  border-bottom: 1px #dedede solid;
`;

const NewsHeader = () => {
  return <HeaderBlock>뉴스 검색 페이지</HeaderBlock>;
};

export default NewsHeader;