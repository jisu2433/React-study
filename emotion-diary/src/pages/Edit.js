import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { DiaryStateContext } from "../App";
import DiaryEditor from "../components/DiaryEditor";

const Edit = () => {
  const [originData, setOriginData] = useState();
  const navigate = useNavigate();
  const { id } = useParams();

  const diaryList = useContext(DiaryStateContext);

  useEffect(() => {
    const titleElement = document.getElementsByTagName('title')[0];
    titleElement.innerHTML = `독서 기록장 - ${id}번 기록 수정`;
  },[]);

  useEffect(()=>{
    if(diaryList.length >= 1){
      const targetDiary = diaryList.find((it)=>parseInt(it.id) === parseInt(id)
      );
      console.log(targetDiary);

      if(targetDiary){
        setOriginData(targetDiary);
      }else{
        navigate('/',{ replace:true })
      }
    }
  },[id,diaryList]);

  return (
    <div>{originData && <DiaryEditor isEdit={true} originData={originData}/>}</div>
  );
};

export default Edit;