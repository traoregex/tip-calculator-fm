
import './App.scss';
import BillBox from './BillBox';
import PeopleBox from './PeopleBox';
import RatioList from './RatioList';
import ScreenDisplay from './ScreenDisplay';

function App() {
  return (
    <div className="flex-center">
      <div className="main-wrapper">
        <h1>
          <span className="part-title">spli</span>
          <span className="part-title">tter</span>
        </h1>
        <div className="calculator">
          <div className="control">
            <BillBox />
            <RatioList />
            <PeopleBox />
          </div>
          <div className="display">
            <ScreenDisplay tip={4.27} total={32.79} />
          </div>
        </div>
      </div>
      <div class="attribution">
        Challenge by <a rel="noreferrer" href="https://www.frontendmentor.io/challenges/tip-calculator-app-ugJNGbJUX" target="_blank">Frontend Mentor</a>. 
        Coded by <a rel="noreferrer" href="https://github.com/traoregex/tip-calculator-fm">TRAORE Geraud Lionel</a>.
      </div>
    </div>
  );
}

export default App;
