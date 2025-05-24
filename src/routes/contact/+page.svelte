<svelte:head>
    <title>Contact | Inlet Sites</title>
    <meta name="description" content="Inlet sites web development contact information">
</svelte:head>

<div class="Contact">
    <h1>Get in touch:</h1>

    <a href="mailto:lee@inletsites.dev">lee@inletsites.dev</a>
    <a href="tel:+18434109586">(843) 410-9586</a>
</div>

<style>
    .Contact{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100vh;
        width: 100vw;
        background: var(--lightBackground);
    }

    h1{
        font-size: 38px;
        margin-bottom: 35px;
    }

    a{
        color: black;
        margin: 15px 0;
        font-size: 28px;
        font-weight: bold;
    }
</style>
