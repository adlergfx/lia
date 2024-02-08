<!--
dark: true
script: https://cdnjs.cloudflare.com/ajax/libs/three.js/0.159.0/three.min.js
script: https://code.jquery.com/jquery-3.7.1.min.js
script: scene.js

import: mcore.md

@onload
    //Config({host: "http://localhost"});
@end

-->
# Lia 

@HSH.myMessage(Simon)

## Normale Frage

- [[ ]] Frage 1
- [[x]] Richtig
- [[?]] Ein Hinweis
@HSH.store(normal, "01")


## Number

Was ist 2 * 2
[[4]]
@HSH.store(number, 4)

## Scripted Answer

<lia-keep>
    <input type="button" id="testBtn" value="press me"/>
</lia-keep>
<script>
    let elem = document.getElementById("testBtn");
    elem.addEventListener("click",()=>{
        Q("scripted").result = true;
    });
    Q("scripted").result = false;
    console.log("initialized");
</script>

Das ist interessant

[[!]]
<script>
    const scripted = Q("scripted");
    scripted.tries++;

    if (scripted.result)
    {
        G().send(scripted);
    }

    scripted.result;
</script>

## THREE.JS


<lia-keep>
    <div id="canvas""></div>
</lia-keep>

<script>
    createScene();
</script>

Bitte wählen Sie den grünen Würfel

[[!]]
<script>
    const cube = Q("cube");
    cube.tries++;
    if (cube.selected)
        G().send(cube);
    cube.selected;
</script>