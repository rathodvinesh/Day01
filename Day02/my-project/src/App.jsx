
import MyBtn from './component/myBtn'
// import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  const handleClick=()=>{
    alert("I an clicked")
  }

  return (
    <>
     <MyBtn text="Button" handleClicked={handleClick}>
      <h2>This is child</h2>
     </MyBtn>
      
    </>
  )
}

export default App
