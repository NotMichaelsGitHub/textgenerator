var app = new Vue({
    el: '#app',
    data: {
        before: 'Hello Vue.js!',
        after: ''
    },
    methods: {
        swapupperandlower: function () {
            var temp = this.before.split('');
            for(var x = 0; x < temp.length; x++){
                // console.log(containsSpecialCharacters(temp[x]))
                if(containsSpecialCharacters(temp[x]) == true){
                    temp[x] = temp[x];
                }
                else if (temp[x] == temp[x].toUpperCase()) {
                    console.log('upper');
                    temp[x] = temp[x].toLowerCase();
                }
                else if (temp[x] == temp[x].toLowerCase()){
                    console.log('lower');
                    temp[x] = temp[x].toLocaleUpperCase();
                }

            }
            this.after = temp.join('');
        },
        berespectful: function () {
            var temp = this.before.split('');
            for(var x = 0; x < temp.length; x++){
                if(containsSpecialCharacters(temp[x]) == true){
                    temp[x] = temp[x];
                }
                else {
                    temp[x] = 'F';
                }

            }
            this.after = temp.join('');
        },
        spongebobify: function () {
            var temp = this.before.split('');
            var even = true;
            for(var x = 0; x < temp.length; x++){
                if(containsSpecialCharacters(temp[x]) == true){
                    temp[x] = temp[x];
                }
                else if (even == true) {
                    temp[x] = temp[x].toLocaleUpperCase();
                    even = false;
                }
                else if (even == false){
                    temp[x] = temp[x].toLocaleLowerCase();
                    even = true;
                }

            }
            this.after = temp.join('');
        }
    }
});

function containsSpecialCharacters(str){
    var regex = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/g;
    return regex.test(str);
}
