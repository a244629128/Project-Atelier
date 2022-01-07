import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });

import React from 'react';
import { shallow, mount, render } from 'enzyme';
//example data
import exampleQuestions from '../../../example/questions.js';
//components
import AddQuestionForm from '../../../client/src/components/QnAcomponents/AddQuestionForm.jsx';
import MainQnA from '../../../client/src/components/QnAcomponents/mainQnA.jsx';
//import QuestionsList from '../../../client/src/components/QnAcomponents/QuestionsList.jsx';
import QuestionItem from '../../../client/src/components/QnAcomponents/QuestionsListItem.jsx';



describe('Main Questions and Answers form', function() {
  xit('should render without throwing an error', function() {
    expect(shallow(<MainQnA/>).contains( <div className='qna-component-name'><h1>Questions and Answers</h1></div>)).toBe(true);
  });

  xit('should be selectable by class', function() {
    expect(shallow(<MainQnA />).is('.qna-main-component')).toBe(true);
  });

  xit('should mount in a full DOM', function() {
    expect(mount(<MainQnA />).find('.qna-main-component').length).toBe(1);
  });

  it('should render to static HTML', function() {
    var text = 'Questions and AnswersAdd a new question';
    expect(render(<MainQnA />).text()).toEqual(text);
  });
});

describe('Rendering one question item', function() {
  it('should render without throwing an error', function() {
    expect(shallow(<QuestionItem question={exampleQuestions.questions.results[0]}/>).contains( <div className='question-item-helpful-keyword' >Helpful?</div>)).toBe(true);
  });

  it('should be selectable by class', function() {
    expect(shallow(<QuestionItem question={exampleQuestions.questions.results[0]}/>).is('.question-item-wrap')).toBe(true);
  });

  it('should mount in a full DOM', function() {
    expect(mount(<QuestionItem question={exampleQuestions.questions.results[0]}/>).find('.question-item-wrap').length).toBe(1);
  });

  it('should render to static HTML', function() {
    var text = 'Q:Why is this product cheaper here than other sites?Helpful?Yes(4)Add answerA:We are selling it here without any markup from the middleman!By user SellerAugust 17, 2018;Helpful?Yes(4)Report';
    expect(render(<QuestionItem question={exampleQuestions.questions.results[0]}/>).text()).toEqual(text);
  });
});

describe('Add new question form', function() {
  it('should render without throwing an error', function() {
    expect(shallow(<AddQuestionForm />).contains(<div className = 'qna-add-question-main-title'>Ask a question</div>)).toBe(true);
  });

  it('should be selectable by class', function() {
    expect(shallow(<AddQuestionForm />).is('.qna-add-new-question-form')).toBe(true);
  });

  it('should mount in a full DOM', function() {
    expect(mount(<AddQuestionForm />).find('.qna-add-new-question-form').length).toBe(1);
  });

  it('should render to static HTML', function() {
    var text = 'Ask a questionAbout the Your question*What\'s your nickname?*For privacy reasons, do not use your full name or email addressYour email?*For authentication reasons, you will not be emailed';
    expect(render(<AddQuestionForm />).text()).toEqual(text);
  });
});