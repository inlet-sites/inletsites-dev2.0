<svelte:head>
    <title>Prices | Inlet Sites</title>
</svelte:head>

<div class="Prices">
    <div class="header">
        <h1>Prices</h1>
        <h2 class="subtitle">A guide to Inlet Sites pricing</h2>
    </div>

    <div class="content">
        <p class="firstNote">*Prices displayed here are a guide to the general prices. Total cost is created on an individual, case-by-case basis.</p>    
        
        <h2 id="businessCard">Business-Card Website</h2>
        <p class="note">*Development costs will be waived for the remainder of 2025 (up to 3 pages)</p>
        <table><tbody>
            <tr>
                <td>Up to 3 pages</td>
                <td>$150.00</td>
            </tr>
            <tr>
                <td>Additional pages</td>
                <td>$50.00/page</td>
            </tr>
            <tr>
                <td>Changes (sites already hosted w/ Inlet Sites)</td>
                <td>2 free, then $25</td>
            </tr>
        </tbody></table>

        <div class="divider"></div>

        <h2>Digital Signage</h2>
        <table><tbody>
            <tr>
                <td>Display</td>
                <td>Variable*</td>
            </tr>
            <tr>
                <td>Other Hardware**</td>
                <td>Approx. $115</td>
            <tr>
            <tr>
                <td>Signage development</td>
                <td>Starting at $100 (depends on scope)</td>
            </tr>
        </tbody></table>

        <p>* Cost will simply be cost of the display. Usually just a cheap television is fine. Depends on size and need. No extra charge from us.</p>
        <p>** Other hardware is simply a small computer/cables/etc. that will be used to run the digital signage on the television.</p>

        <div class="divider"></div>

        <h2>Domain</h2>
        <p>The cost of a domain depends on the domain you want. Inlet Sites charges nothing additional for this.</p>

        <div class="divider"></div>

        <h2>Online Store</h2>
        <table><tbody>
            <tr>
                <td>Personal store page (<a href="https://inlet.shop">Inlet.Shop</a>)</td>
                <td>Free</td>
            </tr>
            <tr>
                <td>Listing items for sale (<a href="https://inlet.shop">Inlet.Shop</a>)</td>
                <td>Free</td>
            </tr>
            <tr>
                <td>Sales through <a href="https://inlet.shop">Inlet.Shop</a></td>
                <td>3.9% + $0.30 per transaction</td>
            </tr>
            <tr>
                <td>Custom solution</td>
                <td>Individually negotiated</td>
            </tr>
        </tbody></table>

        <div class="divider"></div>

        <h2>Blog</h2>
        <p class="note">*Additional service, requires website</p>
        <table><tbody>
            <tr>
                <td>Inlet Sites portal</td>
                <td>$25.00/month</td>
            </tr>
            <tr>
                <td>Portal on website</td>
                <td>$500.00 development cost + $25.00/month</td>
            </tr>
        </tbody></table>

        <div class="divider"></div>

        <h2>Photo Gallery</h2>
        <p class="note">*Additional service, requires website</p>
        <table><tbody>
            <tr>
                <td>Standard gallery using Inlet Sites portal</td>
                <td>$100.00 development</td>
            </tr>
            <tr>
                <td>Custom photo gallery or portal</td>
                <td>Negotiated individually</td>
            </tr>
        </tbody></table>

        <table>
            <caption>Monthly cost based on number of photos</caption>
            <tbody>
                <tr>
                    <td>0-100</td>
                    <td>$5</td>
                </tr>
                <tr>
                    <td>101-500</td>
                    <td>$15</td>
                </tr>
                <tr>
                    <td>501-1000</td>
                    <td>$25</td>
                <tr>
                    <td>1000+</td>
                    <td>$40</td>
                </tr>
            </tbody>
        </table>

        <div class="divider"></div>

        <h2>Email</h2>
        <p class="note">*Additional service, requires website</p>
        <table><tbody>
            <tr>
                <td>Email address at your site</td>
                <td>$5.00/month/email</td>
            </tr>
            <tr>
                <td>Automated emailing</td>
                <td>$0.01/email</td>
            </tr>
        </tbody></table>

        <div class="divider"></div>

        <h2>Hosting</h2>
        <p class="note">*Hosting of custom sites or online stores will be larger and individually negotiated</p>
        <table><tbody>
            <tr>
                <td>Business Card Website</td>
                <td>$10.00/month</td>
            </tr>
            <tr>
                <td>Larger sites</td>
                <td>Individually negotiated</td>
            </tr>
        </tbody></table>

        <div class="divider"></div>


        <div class="divider"></div>

        <h2>Custom software</h2>
        <p>Prices negotiated individually due to individual nature of the requirements. Cost of the static site will laregely reflect prices above, however, server code and database creation/management will increase costs.</p>
    </div>
</div>

<style>
    .Prices{
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

    h1{
        font-size:55px;
        text-align: center;
    }

    .subtitle{
        font-size: 24px;
        margin: 35px 0 0 0;
    }

    .content{
        width: 90%;
        max-width: 1200px;
        margin: 0 auto;
        padding-bottom: 35px;
    }

    .firstNote{
        text-align: center;
    }

    h2{
        margin-bottom: 15px;
        font-size: 38px;
    }

    h2 a{
        color: black;
    }

    table{
        border-collapse: collapse;
    }

    td{
        border: 1px solid rgba(0, 0, 0, 0.25);
        padding: 5px 10px;
        font-size: 22px;
    }

    .note{
        font-size: 14px;
        margin-bottom: 25px;
    }

    caption{
        margin-top: 15px;
    }

    .divider{
        width: 100%;
        border-bottom: 1px solid black;
        margin: 25px 0 20px 0;
    }

    @media screen and (max-width: 600px){
        .header h1{
            margin-bottom: 0;
        }
    }
</style>
