new Vue({
    el: '#app',
    data: {
        title: 'Hello World',
        text: "Wow",
        link: "http://www.google.com",
        title2: "Hello World2",
        finLink: '<a href="http://www.drhiot.com">DRHIOT</a>',
        counter: 0,
        x: 0,
        y: 0,
        counter2: 0,
        screenY: 0,
        screenX: 0,
        counter3: 0
    },
    methods: {
        sayHello: function(){
            return "Hello";
        },
        changeTitle: function(event){
            this.title = event.target.value;
        },
        dataObjHello: function(){
            return this.title;
        },
        sayHello2: function(){
            this.title2 = "New Text Here"
            return this.title2;
        },
        increase: function(){
            this.counter++;
        },
        updateCoordinates: function(event){
            this.x = event.clientX;
            this.y = event.clientY;
        },
        increase2: function(step, event){
            this.counter2 += step;
            this.screenY = event.screenY;
            this.screenX = event.screenX;
            console.log(event);
        },
        deadspot: function(event){
            event.stopPropagation();
        },
        alertMe: function(){
            alert('Alert')
        }







        
    }
})

