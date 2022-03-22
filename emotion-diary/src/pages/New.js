import { useEffect } from "react";
import DiaryEditor from "../components/DiaryEditor";

const New = () => {

  useEffect(() => {
    const titleElement = document.getElementsByTagName('title')[0];
    titleElement.innerHTML = `독서 기록장 - 새 기록`;
  },[]);

  return (
    <div>
      <DiaryEditor/>
    </div>
  );
};

export default New;