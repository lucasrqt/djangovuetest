var app = new Vue({
    delimiters: ['[[', ']]'],
    el: '#app',
    data: {
        message: 'Hello world !'
    },
    methods: {
        connect: function () {
            alert('connected');
        },
        disconnect: function() {
            alert('disconnected')
        }
    }
});
