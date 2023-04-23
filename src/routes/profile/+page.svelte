<script>
import {userSession} from "../../stores/userSession";
import {onMount} from "svelte";

let user;
let email;

onMount(async()=>{
    userSession.subscribe(storeValue =>{
        if(storeValue.user){
            user = storeValue.user;
            email = storeValue.email;
        }
    })
})


</script>

<style>

</style>