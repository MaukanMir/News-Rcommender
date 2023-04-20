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


</body>

<style global>
    :global(body){
    }

    .header{
        color:whitesmoke;
    }

</style>
