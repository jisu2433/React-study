import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { DiaryStateContext } from "../App";
import { getStringDate } from "../util/date";
import { emotionList } from "../util/emotion";
import MyHeader from "../components/MyHeader";
import MyButton from "../components/MyButton";

const Diary = () => {
  const {id} = useParams();
  const diaryList = useContext(DiaryStateContext);
  const navigate = useNavigate();
  const [data, setDate] = useState();
  
  useEffect(() => {
    const titleElement = document.getElementsByTagName('title')[0];
    titleElement.innerHTML = `Write - ${id}번 기록`;
  },[]);

  useEffect(()=>{
    if(diaryList.length >= 1){
      const targetDiary = diaryList.find(
        (it)=>parseInt(it.id) === parseInt(id)
      );
      
      if(targetDiary){
        setDate(targetDiary);
      }else{
        alert("없는 기록입니다.")
        navigate('/',{replace:true});
      }
    }
  },[id, diaryList]);

  if(!data){
    return <div className="DiaryPage">로딩중입니다...</div>;
  } else {
    const curEmotionData = emotionList.find(
      (it)=>parseInt(it.emotion_id) === parseInt(data.emotion)
    );

    return (
      <div className="DiaryPage">
        <MyHeader headText={`${getStringDate(new Date(data.date))} 기록`}
        leftChild={
          <MyButton text={'< 뒤로가기'} onClick={() => navigate(-1)}/>
        }
        rightChild={
          <MyButton 
            text={"수정하기"}
            onClick={() => navigate(`/edit/${data.id}`)}
          />
        }
      />
      <article>
        <section>
          <h4>오늘의 감정</h4>
          <div 
            className={[
              "diary_img_wrapper", 
              `diary_img_wrapper_${data.emotion}`,
            ].join(" ")}
          >
            <img src={curEmotionData.emotion_img}/>
            <div className="emotion_descript">
              {curEmotionData.emotion_descript}
            </div>
          </div>
        </section>
        <section>
          <h4>오늘의 기록</h4>
          <div className="diary_content_wrapper">
            <p>{data.content}</p>
          </div>
        </section>
      </article>
    </div>
  );
  }
};

export default Diary;