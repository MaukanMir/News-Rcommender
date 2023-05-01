<script>
import {userSession} from "../../stores/userSession";
import {onMount} from "svelte";
import Nav from "../../lib/Nav.svelte";
import {goto} from "$app/navigation"

let username;
let email;
let dob;
let _id;

const signUserOut = ()=>{
    userSession.set({"username":"","_id":"","email":""})
}

onMount(async()=>{
    userSession.subscribe(storeValue =>{
        if(storeValue.user){
            username = storeValue.user;
            email = storeValue.email;
            dob = storeValue.dob;
            _id = storeValue._id;
        }else{
            goto("/")
        }
    })
});


</script>
<div class="container">
    <div class="inside-container">
        <h2>Username:{username}</h2>
        <h2>Email:{email}</h2>
        <h2>Date Of Birth:{dob}</h2>
        <button class ="signout" on:click={()=> signUserOut()}>Sign Out</button>
    </div>
</div>
<Nav/>


<style>
    :global(body){}
    .container{
        display:flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: whitesmoke;
        color:blueviolet;
    }
    .inside-container{
        display: flex;
        flex-direction: column;
        color:blueviolet;
    }
    .signout{
        color:whitesmoke;
        background-color: blueviolet;
        height:100px;
    }
    .signout:hover{
        color:whitesmoke;
        color:green;
    }

</style>