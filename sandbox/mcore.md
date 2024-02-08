<!--
script: global.js

@HSH.debug
    <script>
        document.write(@input);
    </script>
@end


@HSH.validate
<script>
    const q = Q("@0");
    q.tries++;
    q.input = @input; 
    @1(@input);
</script>
@end

-->

# Dummy

