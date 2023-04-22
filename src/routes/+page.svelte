<!-- App.svelte -->
<script>
    import NavBar from "../lib/Nav.svelte";
    import { userSession } from "../stores/userSession";
    import { onMount } from "svelte";

    const rapidApiKey = import.meta.env.VITE_RAPID_API_KEY;
    const rapidNameKey = import.meta.env.VITE_RAPID_NAME_KEY;
    const rapidHost = import.meta.env.VITE_RAPID_HOST;
    const rapidNameHost = import.meta.env.VITE_RAPID_NAME_HOST;
    const rapidBaseUrl = import.meta.env.VITE_RAPID_BASE_URL;

    const rapidResultsAPI = () => {
      const options = {
        method: "GET",
        headers: {
            "X-RapidAPI-Key": rapidApiKey,
            "X-RapidAPI-Host": rapidHost,
        },
      };
      fetch(rapidBaseUrl, options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
    };
    let user;
    onMount(async () => {
        userSession.subscribe(storeValue => {
        if (storeValue.user) {
            user = storeValue.user;
        }
    });
    rapidResultsAPI();

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
