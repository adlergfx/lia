function Quiz(name)
{
    this.name = name || "Quiz";
    this.questions = {};
    this.sended = false;
    this.timestamp = Date.now();
}

Quiz.Get = function(name)
{
    name = name || "Quiz";

    window.quizzes = window.quizzes || { };   // be sure we have an object
    if (!window.quizzes[name]) window.quizzes[name] = new Quiz(name);
    return window.quizzes[name];   // allow instances of different quizzes
},

Quiz.prototype = {

    addQuestion: function(q)
    {
        this.questions[q.name] = q;
    },

    getQuestion: function(name, expected)
    {
        // questions already exists
        if (!(name in this.questions))
        {
            this.questions[name] = new Question(name, expected);
        }
        return this.questions[name];
    },

    isSended: function()
    {
        return this.sended;
    },

    send: function(host, method)
    {
        host = host || "https://xrlab.hs-harz.de/lia";
        method = method || "POST";
        this.sended = true;
        $.ajax({
            url: host,
            type: method,
            data:JSON.stringify(this),
            contentType:"application/json; charset=utf-8",
            dataType:"json",
            success: ()=>{
                console.log("send ok")
            }
        });
    }

};