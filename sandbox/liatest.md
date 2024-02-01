<!--
dark: true
script: https://cdnjs.cloudflare.com/ajax/libs/three.js/0.159.0/three.min.js
script: https://code.jquery.com/jquery-3.7.1.min.js
script: global.js
script: scene.js

@Store
<script>
    const q = Q("@0");
    q.tries++;
    q.input = @input;
    let result = true;
    if (typeof(@input) == "object")
    {
        for (let i = 0; i < q.input.length; i++)
            result = result && (q.input[i] == @1[i])
    }
    else
    {
        result = @input == @1;
    }
    if (result)
        G().send(q);
    result;
</script>
@end

@Test
<script>
    const q = Q(@0);
    alert(@0);
    alert(@input);
</script>
@end
-->
# Lia 



## Normale Frage

- [[ ]] Frage 1
- [[x]] Richtig
- [[?]] Ein Hinweis
@Store(normal, "01")

## Number

Was ist 2 * 2

[[4]]
@Store(number, 4)

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