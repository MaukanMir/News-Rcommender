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

    const images = [
        "https://images.pexels.com/photos/12328572/pexels-photo-12328572.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/414943/pexels-photo-414943.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/2267338/pexels-photo-2267338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/5794641/pexels-photo-5794641.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/4799534/pexels-photo-4799534.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/2258357/pexels-photo-2258357.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/2538121/pexels-photo-2538121.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    ]

    // const rapidResultsAPI = () => {
    // const options = {
    //     method: "GET",
    //     headers: {
    //         "X-RapidAPI-Key": rapidApiKey,
    //         "X-RapidAPI-Host": rapidHost,
    //     },
    // };
    // fetch(rapidBaseUrl, options)
    //     .then(response => response.json())
    //     .then(response => console.log(response))
    //     .catch(err => console.error(err));
    // };

    let user;
    onMount(async () => {
        userSession.subscribe(storeValue => {
        if (storeValue.user) {
            user = storeValue.user;
        }
    });
    // rapidResultsAPI();

    });
</script>

<body>
    <NavBar/>
        <div class="container">
            <img alt="" class="img" src ="https://images.pexels.com/photos/2258357/pexels-photo-2258357.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
    </div>

</body>

<style global>
    :global(body){
    }

    .header{
        color:whitesmoke;
    }

    .container{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 1000px;
        width: 2000px;
    }

    .img{
    object-fit: cover;
    border-radius: 10px;
    height:1000px;
    width:50%;
    
    }

</style>
