// Vue Feedback form 
var myform = new Vue({
    el: '#myform',
    data: {
      name: '',
      subject: '',
      phone: '',
      email: '',
      selected: 'selected',
      message: '',
      rating: '',
      errors: [],
    },
    methods: {
      processForm: function(e) {
          if (this.name && this.phone && this.subject && this.email && this.message) {
              return true;
          }
        
         this.errors = [];

         if (!this.name) {
             this.errors.push('Name required');
         }

         if (!this.subject) {
          this.errors.push('Subject required');
        }

         if (this.phone < 10) {
            this.errors.push('Mobile number is an invalid length');
         }

         if (!this.email) {
           this.errors.push('Email required');
         }

         if (!this.message) {
          this.errors.push('Missing a message');
         }
       
          if (!this.errors.length) {
            return true;
        }

         e.preventDefault();
      },
    // Vue slider method 
      value: ({
        data: {
          rating: 3
        }
      })
    }
 });

