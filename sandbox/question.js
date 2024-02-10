function Question(name, expected)
{
    this.expected = expected;
    this.name = name;
    this.tries = 0;
    this.solved = false;
}

Question.prototype = {

    addTry: function()
    {
        this.tries++;   
    },

    isSolved: function(yes)
    {
        if (yes === undefined) return this.solved;

        if (yes && !this.solved)
            this.timestamp = Date.now();    // store time of solved

        this.solved = yes;
        return yes;
    },

    solve: function(yes)
    {
        this.tries++;
        this.isSolved(yes);
    },

    check: function(input)
    {
        this.tries++;
        return this.validate(input);
    },

    validate: function(input)
    {
        const jin = JSON.stringify(input);
        const jex = JSON.stringify(this.expected);
        this.isSolved( jin.localeCompare(jex) == 0 );
        return this.isSolved();
    }
}