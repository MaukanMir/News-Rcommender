<script>
import "../../app.css";
import NavBar from "../../lib/Nav.svelte"
import {userSession} from "../../stores/userSession";

let user;
let password;

const handleFormRequest = () => {

};

</script>

<NavBar/>
<div class="center-container">
    <h1 class="header">Login</h1>
<div class="container">
    <form class ="form" on:submit|preventDefault={handleFormRequest}> 

    <label for="username">Username</label>
    <input 
    type="text"
    placeholder="username"
    required
    id = "user"
    bind:value ={user}
    >
    <label for="username">Password</label>
    <input 
    type="password"
    placeholder="password"
    required
    id = "password"
    bind:value ={password}
    >
    <button class = "submit">Submit</button>
    <p class="register">Don't have an account? Register <strong> <a href="/register">Here</a></strong></p>

    </form>
</div>
    
</div>
<body>
</body>

<style>
    :global(body){

    }
    .center-container{
        display:flex;
        justify-content: center;
        align-items: center;
        margin-top: 200px;
        flex-direction: column;
    }

    .container{
        display: flex;
        flex-direction: column;
        background-color: white;
        height:400px;
        width:400px;
        justify-content: center;
        align-items: center;
        border-radius: 10px;
    }

    .form{
        display: flex;
        flex-direction: column;
        justify-content: center;
        color:blueviolet;
    }

    .form input{
        border-radius: 5px;
        padding: 5px;
        width: 200px;
        color:blueviolet;
        height: 20px;
        width:300px;
    }

    .form label{
        margin: 20px 0px;
        font-size: 20px;
    }

    .submit{
        background-color:blueviolet;
        color:white;
        border-radius: 10px;
        border:none;
        height:40px;
        width: 320px;
        margin: 20px 0px;
        cursor: pointer;
    }

    .submit:hover{
        background-color: green;
        cursor: pointer;
    }

    .register strong a{
        text-decoration: none;
    }

</style>