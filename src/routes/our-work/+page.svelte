<script>
    import blacklistAero from "$lib/clients/blacklist-aero.webp";
    import logo from "$lib/favicon.png";
    import utc from "$lib/utc.webp";
</script>

<svelte:head>
    <title>Our Work | Inlet Sites</title>
</svelte:head>

<div class="container">
    <h1>Our work</h1>
    <h2>View some of the work done by Inlet Sites</h2>
    <div class="divider"></div>

    <div class="sites">
        <a href="https://blacklist.aero" class="card">
            <p>BLACKLIST.AERO from Air Justice</p>
            <img src={blacklistAero} alt="Blacklist.aero logo">
        </a>

        <a href="https://inlet.shop" class="card">
            <p>Inlet.Shop from Inlet Sites</p>
            <img src={logo} alt="Inlet Sites logo">
        </a>

        <a href="https://uniqueteakcreations.shop" class="card">
            <p>Unique Teak Creations</p>
            <img src={utc} alt="Unique Teak Creations">
        </a>
    </div>
</div>

<style>
    .container{
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 75px auto;
        width: 90%;
    }

    h1{
        font-size: 38px;
    }

    h2{
        text-align: center;
    }

    .divider{
        border-bottom: 2px solid white;
        width: 100%;
    }

    a{
        display: flex;
        flex-direction: column;
        align-items: center;
        color: white;
        margin: 35px 0;
        font-size: 28px;
        text-decoration: none;
        box-shadow: 0 0 5px white;
        padding: 15px;
        border-radius: 15px;
        height: 250px;
        width: 300px; 
    }

    a p{
        font-size: 14px;
        margin-bottom: 15px;
    }

    a img{
        max-height: 75%;
    }

    .sites{
        display: flex;
        justify-content: space-around;
        flex-wrap: flex;
    }

    .sites a{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        margin: 35px;
    }
</style>
