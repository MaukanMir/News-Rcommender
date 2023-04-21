<script>
    import NavBar from "../lib/Nav.svelte"
    import {userSession} from "../stores/userSession"
    import { onMount } from "svelte";
    require('dotenv').config();

    RAPID_NAME_KEY = process.env.RAPID_NAME_KEY
    RAPID_API_KEY = process.env.RAPID_API_KEY;

    RAPID_NAME_HOST = process.env.RAPID_NAME_HOST
    RAPID_HOST = process.env.RAPID_HOST


    const configureAPI = ()=>{
        const options = {
            method:"GET",
            headers:{
                RAPID_NAME_KEY: RAPID_API_KEY,
		        RAPID_HOST: RAPID_HOST
            }
        }

    const rapid_results = fetch('', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
    }

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
