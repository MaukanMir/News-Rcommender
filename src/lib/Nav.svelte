<script>
import "../app.css"
</script>

<body>
    <div class="container">

            <a href="none"><h1 class ="header">Manufacturing Consent</h1> </a>
            <a href="none"> <h2>Sustainability</h2> </a>
            <a href="none"><h2>Live</h2></a>
            <a href="none"><h2>Conflict</h2></a>
            <a href="none"><h2>Sign In</h2></a>
        </div>

</body>

<style global>
    :global(body){
    }
    .container{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        border: 2px solid whitesmoke;
        padding:12px;
    }

    .container a{
        text-decoration: none;
        
    }

    .container:hover{
        color:blueviolet;
        cursor: pointer;
    }

</style>