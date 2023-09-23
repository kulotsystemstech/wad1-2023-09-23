const app = Vue.createApp({
    data() {
        return {
            firstName: 'Juan',
            lastName : 'Dela Cruz',
            age: 21,
            gender: 'male',
            favColors: ['red', 'green', 'blue']
        }
    }
});

app.mount('#app');