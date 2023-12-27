
import './App.css';
import Buttoncom from './button_color';

function App() {

   const btnarr= [ {
    btName :'1',
    btcolor:'primary'
  }, {
    btName :'2',
    btcolor:'info'
  }, {
    btName :'3',
    btcolor:'secondary'
  }, {
    btName :'4',
    btcolor:'success'
  }, {
    btName :'5',
    btcolor:'warning'
  }, {
    btName :'6',
    btcolor:'dark'
  }, {
    btName :'7',
    btcolor:'danger'
  }, {
    btName :'8',
    btcolor:'light'
  }, {
    btName :'9',
    btcolor:'primary'
  }, {
    btName :'0',
    btcolor:'success'
  }];
   
   
   
  return (
    <div className="App">
      <br/><br/>
      {btnarr.map((num)=>{
       
       return <Buttoncom btn ={num.btName} btColor ={num.btcolor}/>

      })}
      
    </div>
  );
}

export default App;
