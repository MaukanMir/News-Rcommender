<script>
import {userSession} from "../../stores/userSession";
import {onMount} from "svelte";
import Nav from "../../lib/Nav.svelte";
import {goto} from "$app/navigation"

let user;
let email;
let dob;
let _id;

onMount(async()=>{
    userSession.subscribe(storeValue =>{
        if(storeValue.user){
            user = storeValue.user;
            email = storeValue.email;
            dob = storeValue.dob;
            _id = storeValue._id;
        }else{
            goto("/")
        }
    })
});


</script>
<Nav/>

<style>
    :global(body){}

</style>