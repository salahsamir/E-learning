import Buttons from 'Ui/Buttons.tsx'
import Textarea from 'Ui/Textarea.tsx'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { BaseApi } from 'util/BaseApi'
interface IProps{
type:string,
id:string
}
const Quize = ({ type, id }: IProps) => {
  const [questions, setQuestions] = useState<any[] | undefined>(undefined);
  let nav=useNavigate()

  const fetchQuiz = async () => {
    try {
      const response = await axios.get(`${BaseApi}/course/${type}/${id}`);
      if (response.status === 200) {
        setQuestions(response.data.curriculum.questions);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchQuiz();
    
    
  }, [type, id]);

  return (
    <div className="flex justify-center items-center my-5  ">
      <div>
      {questions && questions.length > 0 ? (
        questions.map((question: any) => <div key={question.id}  className='my-5'>
            <h3 className='text-xl text-white'>{question.text}</h3>
            <Textarea name={question.text} />

        </div>


            
            
            
      )) : (
        <div>No questions found</div>
      )}
       <div className="flex justify-center mt-2">
       <Buttons bgColor='bg-green-500'  onClick={()=>nav(-1)}>Complete</Buttons>
       </div>
    
      </div>
    </div>
 
  )
}

export default Quize