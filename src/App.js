import React,{Component} from 'react';
import "./App.css";
import Main from './components/MainComponent';
import { Provider } from 'react-redux';


class App extends Component {

  render() {
    return (
        <div className="QuizApp" style={{
          backgroundColor: '#ff5757',
        }}>
          <Main/>
        </div>
    );
  }
}

export default App;
