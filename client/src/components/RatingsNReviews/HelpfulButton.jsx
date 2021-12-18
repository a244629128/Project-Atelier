import React, {useState, useEffect} from 'react';
import axios from 'axios';

const HelpfulButton = ({reviewId, helpfulness, markClicked, clickedList})=>{
  // console.log('this is the reviewId:', reviewId);
  const [helpfulnessCount, setHelpfulnessCount] = useState(0);
  const [Id, setId] = useState(0);
  const [clicked, setClicked] = useState(false);

  useEffect(()=>{
    if (clickedList.has(reviewId)) {
      // console.log('clickedList already has:', Id, clickedList.has(reviewId), clicked );
      setClicked(true);
    }
    setHelpfulnessCount(helpfulness);
    setId(reviewId);
  }, [helpfulness]);


  const helpfulnessonClicked = function (e) {
    if (!clickedList.has(Id)) {
      markClicked(Id, helpfulness);
      setHelpfulnessCount(helpfulnessCount + 1);
      e.target.className += ' onClicked';
      axios.post('/updateHelpfulness', {Id: Id})
        .catch((err) => {
          console.log('This is updatehelfulness amount err:', err);
        });
    } else {
      console.log('already click');
      return;
    }
  };
  return (
    <div>
      {clicked ? <div><span>HelpFul ?</span> <span id={reviewId} className= { 'helpful-1 onClicked ' + reviewId} onClick ={ helpfulnessonClicked }>Yes (<span>{helpfulnessCount}</span>)</span> <span> | Report</span> </div> : <div><span>HelpFul ?</span> <span id={reviewId} className= { 'helpful-1 ' + reviewId} onClick ={ helpfulnessonClicked }>Yes (<span>{helpfulnessCount}</span>)</span> <span> | Report</span> </div>}
    </div>
  );
};

export default HelpfulButton;
