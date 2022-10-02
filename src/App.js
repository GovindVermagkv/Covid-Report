import './App.css';
// import Color from './index'
import CovidReport from './covid';
let daming= (()=>{
  let color=document.getElementById("maincontainer")
  let title=document.getElementById("title")
  let dark=document.getElementById("dark")
  if(color.style.backgroundColor !="black"){
    color.style.backgroundColor="black"
    title.style.color="white"
    dark.style.backgroundColor="white"
    dark.style.color="black"
    dark.textContent="Light"

  }
  else{
    color.style.backgroundColor="white"
    title.style.color="black"
    dark.style.backgroundColor="black"
    dark.style.color="white"
    dark.textContent="Dark"
  }
  
 
})

function App() {
  return (
    <>
      <div id='maincontainer'>
        <h1 className="title" id='title'>Covid Report</h1>
        <p id='dark'onClick={daming}>Dark</p>
        <div id='inputarea'>
          <input id='input' placeholder="search by country" />
          <button>search</button>
        </div>
        {/* <covidreport /> */}
        <CovidReport />
      </div>
    </>
  );
}

export default App;
