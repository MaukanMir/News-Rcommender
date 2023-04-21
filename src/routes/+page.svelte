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

const getNewsEvents = (async ()=>{
    const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '30dea41a84mshb54915bc7ed061fp116a11jsn2d115545030e',
		'X-RapidAPI-Host': 'google-news-api1.p.rapidapi.com'
	}
};

const results = fetch('https://google-news-api1.p.rapidapi.com/search?language=%3CREQUIRED%3E', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

    console.log(results)

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
