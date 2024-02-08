<!--

script: global.js

@HSH.debug
    <script>
        document.write(@input);
    </script>
@end



@HSH.store
@@ Currently more check & store
<script>
    const q = Q("@0");
    q.tries++;
    q.input = [@input]; // unsure, but @input returns array of stuff
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

-->

# Dummy

