<script>
    import blacklistImage from "$lib/clients/blacklist-aero.webp";
    import inletSitesImage from "$lib/logoWhite.png";
    import utcImage from "$lib/clients/utc.webp";

    const items = [
        {
            title: "BLACKLIST.AERO",
            text: "Platform for maintaining honesty and good practices in aviation",
            src: blacklistImage,
            url: "https://blacklist.aero"
        },
        {
            title: "Inlet.Shop",
            text: "E-commerce platform for local business to sell online",
            src: inletSitesImage,
            url: "https://inlet.shop"
        },
        {
            title: "Unique Teak Creations",
            text: "Teak furniture beautifylly handcrafted by skilled artisans",
            src: utcImage,
            url: "https://uniqueteakcreations.shop"
        }
    ];
</script>

<svelte:head>
    <title>Our Work | Inlet Sites</title>
    <meta name="description" content="Portfolio pieces for Inlet Sites, a web development company">
</svelte:head>

<div class="OurWork">
    <div class="header">
        <h1>Our Work</h1>
        <h2>Discover our work for other clients</h2>
    </div>

    <div class="clients">
        {#each items as item}
            <a class="client" href={item.url} target="_blank">
                <div class="imageContainer">
                    <img src={item.src} alt={item.title}>
                </div>

                <div class="right">
                    <h2>{item.title}</h2>
                    <p class="itemText">{item.text}</p>
                    <p class="view">View Site</p>
                </div>
            </a>
        {/each}
    </div>
</div>

<style>
    .OurWork{
        background: var(--lightBackground);
    }

    .header{
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: center;
        background: var(--darkBlue);
        height: 250px;
        padding-bottom: 35px;
        color: white;
    }

    .header h1{
        font-size: 55px;
        margin-bottom: 25px;
    }

    .header h2{
        text-align: center;
    }

    .clients{
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        padding: 0 10px;
    }

    .client{
        display: flex;
        height: 250px;
        width: 850px;
        max-width: 100%;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        margin: 35px 0;
        text-decoration: none;
        color: var(--darkBlue);
        background: white;
    }

    .imageContainer{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-basis: 300px;
        flex-grow: 0;
        background: var(--darkBlue);
        height: 100%;
        margin-right: 35px;
    }

    .imageContainer img{
        max-height: 75%;
        max-width: 75%;
    }

    .right{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        flex-basis: 100px;
        flex-grow: 1;
    }

    .right h2{
        font-size: 28px;
    }

    .itemText{
        font-size: 18px;
        color: var(--lightText);
    }

    .view{
        font-size: 22px;
        color: var(--lightBlue);
        font-weight: bold;
        text-decoration: underline;
    }

    @media screen and (max-width: 800px){
        .client{
            flex-direction: column;
            min-height: 500px;
        }

        .imageContainer{
            flex-basis: 200px;
            width: 100%;
            margin-right: 0;
        }

        .right{
            padding: 15px;
        }
    }

    @media screen and (max-width: 600px){
        .header h1{
            margin-bottom: 0;
        }
    }
</style>
