<script>
import "../../app.css";
import NavBar from "../../lib/Nav.svelte"
import {userSession} from "../../stores/userSession";
</script>

<NavBar/>
<div class="container">

</div>
<body>
</body>

<style>
    :global(body){

    }

    .container{
        display: flex;
        flex-direction: column;
        background-color: white;
        height:400px;
        width:600px;
        justify-content: center;
    }

</style>