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
        flex-direction: row-reverse;
        justify-content: flex-end;
        align-items: center;
        color: white;
        margin: 35px 0;
        font-size: 28px;
        text-decoration: none;
        box-shadow: 0 0 5px white;
        border-radius: 15px;
        height: 125px;
        width: 100%;
        max-width: 550px;
    }

    a p{
        font-size: 18px;
        padding: 0 15px;
        margin-left: 35px;
        text-align: center;
    }

    a img{
        max-height: 100%;
        border-top-left-radius: 15px;
        border-bottom-left-radius: 15px;
    }

    .sites{
        display: flex;
        flex-direction: column;
        max-width: 100%;
    }
</style>
