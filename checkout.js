// The Vue content for the delivery and billing address
var head = new Vue({
    el: '#head',
    data: {
        header: "<h2> Checkout </h2>"
    }
})

const app = new Vue({
    el:'#checkout',
    data:{
      daddress:false,
      billing_address:{
        name: '',
        street: '',
        city: '',
        state: '',
        postcode: ''
      },
      shipping_address:{
        name: '',
        street: '',
        city: '',
        state: '',
        postcode: ''
      }
      
    },
    methods:{
      copyBilling() {
        if(this.daddress) {
          for(let key in this.billing_address) {
            this.shipping_address[key] = this.billing_address[key];
          }
        }
      }
    }
  })
// The checkbox for the payment form
var checkbox = new Vue({
    el: '#checkbox',
    data: {
        checked: []
    }
})