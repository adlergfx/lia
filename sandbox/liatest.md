<!--
dark: true
script: https://cdnjs.cloudflare.com/ajax/libs/three.js/0.159.0/three.min.js
script: https://code.jquery.com/jquery-3.7.1.min.js
script: scene.js
script: question.js
script: quiz.js
-->
# Lia 


## Normale Frage

- [[ ]] Frage Test
- [[x]] Richtig
- [[?]] Ein Hinweis
<script>
    Quiz.Get().getQuestion("normal", [0,1]).check(@input);
</script>


## Number

Was ist 2 * 2

[[4]]
<script>
    Quiz.Get().getQuestion("numeric", 4).check(@input);
</script>


## THREE.JS


<lia-keep>
    <div id="canvas"></div>
</lia-keep>

<script>
    createScene((yes)=>{
        Quiz.Get().getQuestion("cube").solve(yes);
    });
</script>

Bitte wählen Sie den grünen Würfel

[[!]]
<script>
        Quiz.Get().getQuestion("cube").isSolved(yes);
</script>

## Submit


Can I submit the results?

- [ ] Submit
<script output="done">"@input"</script>


<script>
    let done = @input(`done`);
    if (done[0]) 
    {
        Quiz.Get().send();
        send.lia("Danke, ihre Antwort wurde gespeichert");
    }
</script>




