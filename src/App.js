import './App.css';
import "bootstrap/dist/css/bootstrap.css"
import { TitleCommon, InputUi } from './Commonui';



function App() {
 

  return (
    <div className="App bg-light p-5">
      <TitleCommon className='mb-5'>필수 정보</TitleCommon>

      <form action="">
        <div className="row justify-content-center align-items-center">
   
          <InputUi className={`col-lg-6 `}   inputinfo={{
            nm: "company",
            labeltext: "회사이름",
            alerttext: "회사명을 입력해주세요."
          }} >회사이름(필수)</InputUi>
        
          <InputUi className="col-lg-6"   inputinfo={{
            nm: "telnumber",
            labeltext: "전화번호",
            alerttext: "전화번호을 입력해주세요."
          }} >전화번호(필수)</InputUi>
          
           <InputUi className="col-lg-12"   inputinfo={{
            nm: "subject",
            labeltext: "제목",
            alerttext: "제목을 입력해주세요."
          }} >전화번호(필수)</InputUi>
        </div>
        <button>전송</button>
      </form>
    </div>
  );
}
export default App;
