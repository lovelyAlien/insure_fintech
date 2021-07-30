import axios from "axios";
import React, { useState } from "react";

const Carinfo = () => {
  const [result, setResult] = useState(undefined);
  const getCarInfo = () => {
    const option = {
      method: "POST",
      url: "/assist/common/carzen/CarAllInfoInquiry",
      headers: {
        Authorization: "Token {사용자 발급 토큰}",
        "Content-Type": "application/json;charset=UTF-8",
      },
      data: {
        REGINUMBER: "{여러분들 자동차번호}",
        OWNERNAME: "{소유주}",
      },
    };
    axios(option).then((response) => {
      console.log(response.data);
      setResult(response.data);
    });
  };
  return (
    <div>
      <button onClick={getCarInfo}>차량 조회하기</button>
    </div>
  );
};

export default Carinfo;