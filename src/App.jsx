import { useState } from "react";

function App() {

  const [firstname, setFirstname] = useState('Victorien Lague')

  const changement = (e) => {
    setFirstname(e.target.value)
  }

    return <form>
      <input type="text" name= "firstname" value={firstname} onChange={changement}/>
      {firstname}
    </form>


}
export default App