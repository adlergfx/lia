function send(data)
{
    $.ajax({
        url:"http://localhost:8001/api",
        type:"POST",
        data:JSON.stringify(data),
        contentType:"application/json; charset=utf-8",
        dataType:"json",
        success: ()=>{
            console.log("send ok")
        }
      });
}

function G(field)
{
    window.G = window.G || {};
    window.G.send = send;
    return window.G;
}

function Q(name)
{
    G()[name] = G()[name] || {tries: 0};
    return G()[name];
}


