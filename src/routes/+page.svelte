<script>
    import NavBar from "../lib/Nav.svelte"
    import {userSession} from "../stores/userSession"
    import { onMount } from "svelte";

    let user;
    onMount(async () => {
    userSession.subscribe(storeValue => {
        if (storeValue.user) {
            user = storeValue.user;
        }
    });
});



</script>

<body>
    <NavBar/>
    <div class="image-container">
        <div class="container">

        </div>
    </div>

</body>

<style global>
    :global(body){
    }

    .header{
        color:whitesmoke;
    }

    .image-container{
        display:flex;
        flex-direction: column;
    }

</style>
