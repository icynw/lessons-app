new Vue({
    data() {
        return {
            lessons: lessons,
        }
    },
    created() {
        console.log(lessons)
    },
})
    .$mount('#app')