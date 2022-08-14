import React, { useEffect, useState } from "react";
import ColorFulMessage from "./beginnerComponents/ColorfulMessage";

const BeginnerApp = () => {
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(false);

  const onClickCountUp = () => {
    setNum(num + 1);
  };
  // 1つ目にstateの変数名, 2つ目にstateを更新する関数名, ()の中で初期値を設定できる

  const onClickSwitchFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  };

  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        faceShowFlag || setFaceShowFlag(true);
      } else {
        faceShowFlag && setFaceShowFlag(false);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [num]);

  return (
    <>
      {/* h1タグの外側{} Javascriptの記述であることを示す, 内側{} オブジェクトであることを示す */}
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      <ColorFulMessage color="blue">お元気ですか？</ColorFulMessage>
      <ColorFulMessage color="pink">元気です！</ColorFulMessage>
      <button onClick={onClickCountUp}>カウントアップ！</button>
      <br />
      <button onClick={onClickSwitchFlag}>on/off</button>
      <p>{num}</p>
      {faceShowFlag && <p>(　˙-˙　)</p>}
    </>
  );
};

export default BeginnerApp;
