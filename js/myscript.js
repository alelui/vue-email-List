// alert('Ciaone');
const app = new Vue({
    el : '#root',
    data:{
        emails: []
    },
    methods:{

    },
    created(){

        for(let i = 0; i < 10; i++){
            // Make a request for a user with a given ID
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((response) => {
                //console.log(response.data.response);
                this.emails.push(response.data.response);
                // console.log(this.emails);
            })

            .catch(function (error) {
                console.log(error);
            })
        }
    }

})