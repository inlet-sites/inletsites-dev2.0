<script>
    import Services from "./Services.svelte";
    import Prices from "./Prices.svelte";
    import Process from "./Process.svelte";
    import logoWithText from "$lib/logoWithText.png";
    import logoWhiteText from "$lib/logoWhiteText.png";

    import heroOne from "$lib/landingImages/one.webp";
    import heroTwo from "$lib/landingImages/two.webp";
    import heroThree from "$lib/landingImages/three.webp";
    import heroFour from "$lib/landingImages/four.webp";
    import heroFive from "$lib/landingImages/five.webp";

    let heroImg = $state();
    let heroClass = $state();
    let hero = $state(logoWhiteText);
    let rand = Math.floor(Math.random() * 5);
    switch(rand){
        case 0: heroImg = heroOne; break;
        case 1: heroImg = heroTwo; break;
        case 2: heroImg = heroThree; break;
        case 3: heroImg = heroFour; break;
        case 4: heroImg = heroFive; break;
    }
</script>

<svelte:head>
    <title>Inlet Sites</title>
</svelte:head>

<div class="container">
    <div class="hero {heroClass}">
        <div class="heroOverlay"></div>

        <img class="heroImage" src={heroImg} alt="Sunrise over Murrells Inlet">

        <img class="heroLogo" src={hero} alt="Inlet Sites Logo">

        <h2>Custom Websites and Software, Built Locally, Just For You</h2>

        <h3>Create a professional online presence for your business</h3>

        <div class="buttonBox">
            <a class="getStarted" href="/contact">Get Started</a>
            <a class="viewWork" href="/our-work">View Our Work</a>
        </div>
    </div>

    <Services/>

    <Prices/>

    <Process/>
</div>

<style>
    .container{
        height: 100%;
        width: 100%;
    }

    .hero{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        width: 100%; 
        height: 100vh;
        position: relative;
        padding: 100px 0;
    }

    .heroOverlay{
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background: rgba(4, 30, 66, 0.75);
    }

    .heroImage{
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        right: 0;
        z-index: -1;
        object-fit: cover;
    }

    .heroLogo{
        height: 85px;
        z-index: 2;
        max-width: 100%;
    }

    .hero h2{
        color: white;
        text-align: center;
        padding: 15px;
        border-radius: 15px;
        z-index: 2;
        font-size: 48px;
        max-width: 675px;
    }

    .hero h3{
        font-size: 20px;
        color: white;
        z-index: 2;
        text-align: center;
        padding: 0 15px;
    }

    .buttonBox{
        z-index: 2;
        margin-top: 35px;
    }

    .getStarted{
        background: rgb(0, 160, 220);
        color: white;
        border-radius: 10px;
        padding: 15px;
        text-decoration: none;
        font-weight: bold;
        cursor: pointer;
        margin-right: 35px;
    }

    .getStarted:hover{
        background: rgb(4, 30, 66);
    }

    .viewWork{
        border: 2px solid rgb(0, 160, 220);
        color: rgb(0, 160, 220);
        border-radius: 10px;
        padding: 15px;
        text-decoration: none;
        background: none;
        font-weight: bold;
        cursor: pointer;
    }

    .viewWork:hover{
        background: rgb(0, 160, 220);
        color: white;
    }

    @media screen and (max-width: 700px){
        .hero h2{
            font-size: 30px;
        }
    }
</style>

