function Config(cfg)
{
    // guarantee, that a config is available
    G().config = G().config || {};

    if (cfg !== undefined)
    {
        // We got a config, thus we override maybe existing settings
        G().config = Object.assign(G().config, cfg);
    }
    
    // return new, maybe merged object
    return G().config;
}


function send(data)
{
    let host = Config().host || "https://xrlab.hs-harz.de/lia";

    $.ajax({
        url: host,
        type:"POST",
        data:JSON.stringify(data),
        contentType:"application/json; charset=utf-8",
        dataType:"json",
        success: ()=>{
            console.log("send ok")
        }
        });
    
    return true;
}

/**
 * @returns creates and provides global scope
 */
function G()
{
    window.G = window.G || {};
    window.G.send = send;
    return window.G;
}

/**
 * @deprecated will be removed in the future
 * @param {string} name of the question record
 * @returns a record where to store the number of tries
 */
function Q(name)
{
    G()[name] = G()[name] || {tries: 0};
    return G()[name];
}


