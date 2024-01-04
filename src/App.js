import './App.css';
import "bootstrap/dist/css/bootstrap.css"
import styled from 'styled-components';


import { TitleCommon, InputUi } from './Commonui';


function App() {
  return (
    <div className="App bg-light p-5">
      <TitleCommon>필수 정보</TitleCommon>

      <form action="">
        <div className="row">
          <InputUi className="" inputinfo={{
            nm: "company",
            labeltext: "회사이름",
            alerttext: "회사명을 입력해주세요."
          }} >회사이름(필수)</InputUi>
        </div>
      </form>
    </div>
  );
}
export default App;
