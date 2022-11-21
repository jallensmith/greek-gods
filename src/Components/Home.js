import React from 'react';
import { Container, Button} from 'semantic-ui-react'
import '/home/theallensmiths/Projects/greek-gods/src/index.css'; 

function Home() {
    // { useContext }

    // const [userLogData, setUserLogData] = useState({
    //       user: null
    //       password: ''
    // })
    // function handleLogIn() {
    // set({
    // setUser(usernameInput)
    // })

    // }

    // function handleLogOut() {
    // setUserLogData({
    //       user: null
    //       password: ''
    // })
    // }

    // <header>
    //   <h1>Title</h1>
    //   <nav>
    //     {user ? (
    //       <button onClick={handleLogoutClick}>Logout</button>
    //     ) : (
    //       <button onClick={handleLoginClick}>Login</button>
    //     )}
    //   </nav>
    // </header>


    return (
        <div>
            <header class="text-center">
                <h1 class="text-info">“Never honor the gods in one breath and take the gods for fools the next.” ― Sophocles, Oedipus Rex</h1>
            </header>

            <img class="rounded mx-auto d-block" src="https://tshop.r10s.com/039/864/74c9/d777/c02a/009a/f27d/11d6e89e1854ab3a295add.jpg?_ex=600x600" alt="colossus of rhodes"></img>
             <Container>
             <nav id="login-navbar">
                <Button onClick={(event) => console.log(event)}>Login</Button>
                <Button onClick={(event) => console.log(event)}>Logout</Button>
            </nav>
            </Container>
        </div>
    )
}

export default Home
// validation of login and password
// user - welcome user language
// God of the Day 