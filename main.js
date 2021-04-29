var app = new Vue({
    el: "#app",

    data: {
        // todo: "",
        // todos: [ ]
        like: false,
        liked: false,
        retweet: false,
        retweeted: false,
        comment: false,
        commented: false,
        counter: null,
        inp: "",
        inps: []
    }, 

    methods: {

        addComment: function(){
            this.comment = true
        },

         cancel: function(){
             this.comment = false
         }, 

        done: function(){
                this.inps.push(this.inp);
                this.inp = "";
                this.comment = false;
                this.commented = true;
                this.counter ++
        },

        removeComment: function(inp){
            var indexItem = this.inps.indexOf(inp);
            this.inps.splice(indexItem, 1);
            this.counter --;
            if(this.counter == 0){
                this.counter = "";
                this.commented = false;
            }
        }

    }

})