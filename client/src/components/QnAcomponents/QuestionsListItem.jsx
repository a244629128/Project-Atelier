import React from 'react';
import QuestionsListItemAnswer from './QuestionsListItemAnswer.jsx';

class QuestionsListItem extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    let moreAnswers;
    console.log('this is length', Object.keys(this.props.question.answers).length);
    let length = Object.keys(this.props.question.answers).length;
    if(length > 2){
      moreAnswers = <button>Load more answers</button>
    } else {
      moreAnswers = <div></div>
    }

    return(
      <div>

        {/* beginning of question item */}

        <div className='question-item'>
          <div className='question-item-q-letter'><h2>Q:</h2></div><div className='question-item-body'><h3>{this.props.question.question_body}</h3></div>
          <div className='question-item-helpful-keyword'>Helpful?</div>
          <div className='question-item-yes-button'>Yes({this.props.question.question_helpfulness})</div>
          <div className='question-item-add-answer-link'>Add answer</div>
        </div>
       {/* end of question item */}
       {
         Object.values(this.props.question.answers).map((answer, key) => {
           return <QuestionsListItemAnswer answer={answer} key={key}/>
         })
       }
       {moreAnswers}


      </div>
      )


  }




}

export default QuestionsListItem;