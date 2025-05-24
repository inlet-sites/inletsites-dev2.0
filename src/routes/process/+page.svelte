<svelte:head>
    <title>Process | Inlet Sites</title>
    <meta name="description" content="A description of the process for web development with Inlet Sites">
</svelte:head>

<div class="Process">
    <div class="header">
        <h1>The Process</h1>
        <h2 class="subtitle">Creating your site, from idea to online</h2>
    </div>

    <div class="content">
        <p class="top">We understand that there is a lot of jargon around creating websites and other IT stuff, and if you are not familiar with it, then it can be difficult. We are here to take all the pain out of that process for you. We handle all of the technical stuff and just make sure that you get what you need for your business.</p>

        <p class="top">Here we will outline the entire process so you know what to expect. The main thing to keep in mind though, is that you can schedule a free consultation whenever you want and we will walk you through everything and handle everything for you.</p>

        <ol>
            <li>
                <h2>Consultation</h2>
                <p>Schedule a consultation with us. We will figure out exactly what you want. We will discus together what you want for you website as well as giving a rough estimate of price. In order to understand your needs, we may schedule further meetings with you to truly understand what you need and how we can best provide it.</p>
            </li>
            <li>
                <h2>Pricing and agreement</h2>
                <p>Once we understand what you are looking for, we will create a firm price for you. If you are ok with the price, the services and everything else, then we can start working on your site. No payment is expected at this point.</p>
            </li>
            <li>
                <h2>Development</h2>
                <p>After we have come to an agreement, we start working on your website. The time it will take to create it will vary depending on the requirements of the site and we will inform you of that before we begin.</p>
            </li>
            <li>
                <h2>Website review</h2>
                <p>Once development is finished we will present you with the full working site so that you can review it. If it is not exactly what you want, let us know, and we will go back and update it to your standards. You pay nothing until you are happy with it.</p>
            </li>
            <li>
                <h2>Payment and hosting</h2>
                <p>Once you approve of the site and are happy with how it works and looks, then we will accept payment for development. Once payment is recieved, the site goes live on your domain.</p>
            </li>
            <li>
                <h2>Ongoing maintenance</h2>
                <p>We will send you a bill once a month for hosting and all other monthly costs. Other than that, you don't have to do anything more. We will ensure that the website stays online in good working order. If there are any issues then you can contact us at any time. If you need further functionality for your site in the future, then call us up and we can start back at step 1!</p>
            </li>
        </ol>
    </div>
</div>

<style>
    .Process{
        background: var(--lightBackground);
        padding-bottom: 35px;
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

    h1{
        text-align: center;
        font-size: 55px;
    }

    .subtitle{
        font-size: 24px;
        text-align: center;
    }

    .content{
        width: 90%;
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 10px;
    }

    li{
        margin-top: 35px;
        font-size: 22px;
    }

    li p{
        font-size: 18px;
    }

    .top{
        margin: 25px;
        font-size: 18px;
        text-align: center;
    }

    @media screen and (max-width: 800px){
        .container{
            padding: 15px;
        }

        .top{
            margin: 25px 0;
        }
    }

    @media screen and (max-width: 600px){
        .header h1{
            margin-bottom: 0;
        }
    }
</style>
