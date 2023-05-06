<script>
    import "../../app.css";
    import NavBar from "../../lib/Nav.svelte"
    import {userSession} from "../../stores/userSession";
    import {goto} from "$app/navigation"
    
    let username;
    let email
    let password;
    let dob;
    let duplicateError = false;
    let duplicateErrorMessage ="";

    const createUser = (userInfo)=>{
        userSession.set(userInfo);
        goto("/profile");
}
    
    const handleFormRequest = async () => {
        try{
            const response = await fetch("http://localhost:8093/userRegister",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body: JSON.stringify({
                    "username":username,
                    "email":email,
                    "dob":dob,
                    "password":password,
                    "createdAt":new Date().toISOString()
                })
            });
            const storedData = await response.json();
            if(response.status === 200){
                duplicateError = false;
                createUser({
                    _id:storedData._id,
                    username:storedData.username,
                    email:storedData.email
                })
            }else if(response.status === 409){
                duplicateError = true;
                duplicateErrorMessage = storedData.body
            }
        }catch(error){
            console.log(error)
        }
    
    };
    
    </script>
    
    <NavBar/>
    <div class="center-container">
        <h1 class="header">Register</h1>
    <div class="container">
    <form class ="form" on:submit|preventDefault={handleFormRequest}>
            <label for="email">Email</label>
            <input 
            type="text"
            placeholder="Email"
            required
            id = "email"
            bind:value ={email}
            >
            <label for="email">Date Of Birth</label>
            <input 
            type="date"
            placeholder="DOB"
            required
            id = "dob"
            bind:value ={dob}
            >
        <label for="username">Username</label>
        <input 
        type="text"
        placeholder="username"
        required
        id = "user"
        bind:value ={username}
        >
        <label for="username">Password</label>
        <input 
        type="password"
        placeholder="password"
        required
        id = "password"
        bind:value ={password}
        >
        <button class = "submit">Submit</button>
        <p class = {duplicateError ? "DisplayError":"NotDisplayError"}>{duplicateErrorMessage}</p>
        <p class="register">Have an account? Login <strong> <a href="/login">Here</a></strong></p>
        </form>
    </div>
        
    </div>
    <body>
    </body>
    
    <style>
        :global(body){
    
        }
        .center-container{
            display:flex;
            justify-content: center;
            align-items: center;
            margin-top: 200px;
            flex-direction: column;
        }
    
        .container{
            display: flex;
            flex-direction: column;
            background-color: white;
            height:600px;
            width:500px;
            justify-content: center;
            align-items: center;
            border-radius: 10px;
        }
    
        .form{
            display: flex;
            flex-direction: column;
            justify-content: center;
            color:blueviolet;
        }
    
        .form input{
            border-radius: 5px;
            padding: 10px;
            width: 200px;
            color:blueviolet;
            height: 20px;
            width:300px;
            border-radius: 10px;
            border: 2px solid blueviolet;
            font-size: 20px;
        }
    
        .form label{
            margin: 15px 0px;
            font-size: 20px;
        }
    
        .submit{
            background-color:blueviolet;
            color:white;
            border-radius: 10px;
            border:none;
            height:40px;
            width: 320px;
            margin: 20px 0px;
            cursor: pointer;
        }
    
        .submit:hover{
            background-color: green;
            cursor: pointer;
        }
    
        .register strong a{
            text-decoration: none;
        }
        .register{
            text-align: center;
        }

        .header{
            font-size: 2rem;
        }

        .DisplayError{
            text-align: center;
            color:red;
        }
        .NotDisplayError{
            display: none;
        }
    
    </style>