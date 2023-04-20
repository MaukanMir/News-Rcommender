<script>
import "../app.css"
import {userSession} from "../stores/userSession"
import { onMount } from "svelte";


    let user;
//     onMount(async () => {
//     userSession.subscribe(storeValue => {
//         if (storeValue.user) {
//             user = storeValue.user;
//         }
//     });
// });

</script>

<body>
    <div class="container">
            <a href="/"><h1 class ="header">Manufacturing Consent</h1> </a>
            <a href="/"> <h2>Sustainability</h2> </a>
            <a href="/"><h2>Live</h2></a>
            <a href="/"><h2>Conflict</h2></a>
            {#if !user}
            <a href="/login"><h2>Login</h2></a>
            {:else}
            <a href="/"><h2>{user}</h2></a>
            {/if}
        </div>

</body>

<style global>
    :global(body){
    }
    .container{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        border: 2px solid whitesmoke;
        padding:12px;
    }

    .container a{
        text-decoration: none;
        color:whitesmoke;
        
    }

    .container a:hover{
        color:blueviolet;
        cursor: pointer;
    }

</style>