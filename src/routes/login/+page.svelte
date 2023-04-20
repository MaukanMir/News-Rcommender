<script>
import "../../app.css";
import NavBar from "../../lib/Nav.svelte"
import {userSession} from "../../stores/userSession";

let user;
let password;
</script>

<NavBar/>
<div class="center-container">
    <h1 class="header">Login</h1>
<div class="container">
    <form class ="form"> 
    <label for="username">Username</label>
    <input 
    type="text"
    placeholder="username"
    required
    id = user
    bind:value ={user}
    >

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
        height:500px;
        width:400px;
        justify-content: center;
        align-items: center;
        border-radius: 10px;
    }

</style>