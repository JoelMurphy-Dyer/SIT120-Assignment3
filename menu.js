// Vue for star rating
Vue.component('star-rating', {
    props: {
      'name': String,
      'value': null,
      'id': String,
      'disabled': Boolean,
      'required': Boolean
    },
    template: '<div class="star-rating">\
    <label class="star-rating__star" v-for="rating in ratings" \
    :class="{\'is-selected\': ((value >= rating) && value != null), \'is-disabled\': disabled}" \
    v-on:click="set(rating)" v-on:mouseover="star_over(rating)" v-on:mouseout="star_out">\
    <input class="star-rating star-rating__checkbox" type="radio" :value="rating" :name="name" \
    v-model="value" :disabled="disabled"><i class="fas fa-star"></i></label></div>',

data: function() {
return {
  temp_value: null,
  ratings: [1, 2, 3, 4, 5]
};
},

methods: {
/* Stars on mouseover */
star_over: function(index) {
  var self = this;

  if (!this.disabled) {
    this.temp_value = this.value;
    return this.value = index;
  }

},

/* When the mouse stops hovering */
star_out: function() {
  var self = this;

  if (!this.disabled) {
    return this.value = this.temp_value;
  }
},

/* Sets the rating.*/
set: function(value) {
  var self = this;

  if (!this.disabled) {
    this.temp_value = value;
    return this.value = value;
  }
}
}
});
// These apps are the implementation of the ratingns in the menu items
new Vue({
el: '#app',
})

new Vue({
el: '#app2',
})

new Vue({
el: '#app1'

});
// Vue for the quantity selecter
Vue.component('quantity', {
  template: `
    <div class="quantity-toggle">
      <button @click="decrement()">&mdash;</button>
      <input type="text" :value="quantity" readonly>
      <button @click="increment()">&#xff0b;</button>
    </div>
  `,
  data () {
    return {
      quantity: 0
    }
  },
  // Increment
  methods: {
    increment () {
      this.quantity++
    },
    // Decriment
    decrement () {
      if(this.quantity === 0) {
        alert('Error: Cannot go below zero for quantity')
      } else {
        this.quantity--
      }
    }
  }
});
// Implementation of the quantity selector in the in the menu items 
new Vue({
  el: '#amount'
})

new Vue({
  el: '#amount2'
})

new Vue({
  el: '#amount3'
});

