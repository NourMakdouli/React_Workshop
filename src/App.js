import './App.css';
import { findLongestWord , totalMarks,countDistinct} from './Ecmascript/reponse.js'


function App() {
let tab =['gggggg','ttttttttttttttt','rrrr'];


const input = [
  ["a", "b", "c"],
  ["c", "d", "f"],
  ["d", "f", "g"]
]
  let students=[{name :'nour' , id :1 , marks : 98},
  {name :'acil' , id :2 , marks : 20},
  {name :'rayen' , id :3 , marks : 60},
  {name :'gaith' , id : 4 , marks : 100},];





  return (
    
    //console.log(totalMarks(students))
   // console.log(findLongestWord(tab))
    console.log(countDistinct(input))

  )
   
}

export default App;
