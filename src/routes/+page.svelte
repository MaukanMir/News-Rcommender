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
        "https://ideas.ted.com/wp-content/uploads/sites/3/2019/04/featured_art_corruption_istock.jpg",
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
        "We got you covered"
    ]

    const politicalTopics = ["Brazil","Presdential","Biden","Trump","China","Oil","Cobalt"]

    let username;
    onMount(async () => {
        userSession.subscribe(storeValue => {
        if (storeValue.user) {
            username = storeValue.username;
        }
    });
    });
    // Initialize the current slide index to 0
    let currentSlideIndex = 0;
    let titleIndex =0

    // Define the function to update the current slide index
    const updateCurrentSlideIndex = () => {
        currentSlideIndex = (currentSlideIndex + 1) % slides.length;
        titleIndex = (titleIndex + 1) % slides.length;

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
                <div class="image-wrapper">
                <p class="header">{titles[titleIndex]}</p>
                <img alt="slide.alt" class="img" src={slide} />
                </div>
            {/if}
            {/each}
        </div>
        <div class ="newsLinks">
            <article class ="news-links-article">
                {#each politicalTopics as topic}
                <div class ="topicsContainer">
                    <p>{topic}</p>

                </div>
                {/each}

            </article>
        </div>

</body>

<style global>
    :global(body){
    }
    .container {
    position:relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 200px;
}

.newsLinks{
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 70px;
    padding:20px;
}

.news-links-article{
    border: whitesmoke solid 3px;
}

.topicsContainer{
    margin: 10px 10px;
    cursor: pointer;

}

</style>
