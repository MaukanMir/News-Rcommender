<!-- App.svelte -->
<script>
    import dotenv from 'dotenv';
    dotenv.config();
    const RAPID_NAME_KEY = process.env.RAPID_NAME_KEY;
    const RAPID_API_KEY = process.env.RAPID_API_KEY;
    const RAPID_NAME_HOST = process.env.RAPID_NAME_HOST;
    const RAPID_HOST = process.env.RAPID_HOST;
    const RAPID_BASE_URL = process.env.RAPID_BASE_URL;
    console.log(RAPID_NAME_KEY, RAPID_API_KEY, RAPID_NAME_HOST, RAPID_HOST, RAPID_BASE_URL);

    import NavBar from "../lib/Nav.svelte";
    import { userSession } from "../stores/userSession";
    import { onMount } from "svelte";
  
    const rapidResultsAPI = () => {
      const options = {
        method: "GET",
        headers: {
          [RAPID_NAME_KEY]: RAPID_API_KEY,
          [RAPID_NAME_HOST]: RAPID_HOST,
        },
      };
  
      fetch(RAPID_BASE_URL, options)
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
