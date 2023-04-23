<!-- App.svelte -->
<script>
    import NavBar from "../lib/Nav.svelte";
    import { userSession } from "../stores/userSession";
    import { onMount} from "svelte";

    const rapidApiKey = import.meta.env.VITE_RAPID_API_KEY;
    const rapidNameKey = import.meta.env.VITE_RAPID_NAME_KEY;
    const rapidHost = import.meta.env.VITE_RAPID_HOST;
    const rapidNameHost = import.meta.env.VITE_RAPID_NAME_HOST;
    const rapidBaseUrl = import.meta.env.VITE_RAPID_BASE_URL;

    const slides = [
        "https://images.pexels.com/photos/12328572/pexels-photo-12328572.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/414943/pexels-photo-414943.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/2267338/pexels-photo-2267338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/5794641/pexels-photo-5794641.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/4799534/pexels-photo-4799534.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/2258357/pexels-photo-2258357.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/2538121/pexels-photo-2538121.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    ]

    const titles = [
        "All the latest news",
        "Find Answers",
        "Personalized Stories",
        "Sustainaibility",
        "Corruption, its all here",
        "The News like never before",
        "Its all here",
        "The Wonder, the excitment"
    ]

    let user;
    onMount(async () => {
        userSession.subscribe(storeValue => {
        if (storeValue.user) {
            user = storeValue.user;
        }
    });

    });
    // Initialize the current slide index to 0
    let currentSlideIndex = 0;

    // Define the function to update the current slide index
    const updateCurrentSlideIndex = () => {
        currentSlideIndex = (currentSlideIndex + 1) % slides.length;

    };
    // Start the slideshow on mount
    onMount(() => {
    const intervalId = setInterval(() => {
        updateCurrentSlideIndex();
    }, 3000); // Change the slide every 3 seconds
    });

</script>

<body>
    <NavBar/>
    <div class="container">
        {#each slides as slide, index}
        {#if index === currentSlideIndex}
        <img alt="slide.alt" class="img" src ={slide}/>
        {/if}
        {/each}
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
        margin-top: 200px;
    }

    .img{
    object-fit: cover;
    border-radius: 10px;
    height:600px;
    width:600px;
    transition: opacity 0.6s ease-in-out;
    }

</style>
