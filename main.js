// Local component 
var local = new Vue({
    el: '#localcomponent',
    components: {
            "local-component": {
            template: "<h1>Welcome to Disney foods, I hope you enjoy the food and have an amazing time.</h1>",
        }
    }
});

Vue.component('child',{
    props: {
      text: {
        type: String,
        required: true
      }
    },
    template: `<div>{{ text }}</div>`
  });

// Props for description
  new Vue({
    el: '#app',
    data() {
      return {
        message: 'Disney foods is here to provide joy for everyone and all ages, we hope you enjoy this disney themed website and our amazing food from your favourite disney movies.'
      }
    }
  })

// Image with Vue
  new Vue({
    el: "#mickey",
    data: {
      image: './Images/mickeymouse.gif'
    }
  })
// The tile above the pages link
var linktitle = new Vue({
  el: '#linktitle',
  data: {
    paragraph: 'Visit the pages here'
  }
})
  

