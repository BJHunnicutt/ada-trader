// import $ from 'jquery';
// import Backbone from 'backbone';
// import _ from 'underscore';

// import TaskView from 'app/views/task_view';


const QuoteView = Backbone.View.extend({
  initialize: function(options) {
    this.stock = options.stock;
    this.template = options.template;
  },

  render: function() {
    var html = this.template({stock: this.stock});
    this.$el.html(html);
    // this.$el.html('<p>Hello World</p>');

    return this;
  },

  ////////////// ADDING EVENTS //////////////
  events: {
    'click .btn-buy': 'buyStock',
    'click .btn-sell': 'sellStock'
  },

  buyStock: function(event) {
    console.log('buyStock called');
    // Suppress that behavior.
    event.preventDefault();

    // Add $1 to the price of the stock
    this.stock.price = this.stock.price + 1;

    // Re-render the quote
    this.render();
  },

  sellStock: function(event) {
    console.log('sellStock called');
    // Suppress that behavior.
    event.preventDefault();

    // Add $1 to the price of the stock
    this.stock.price = this.stock.price - 1;

    // Re-render the quote
    this.render();
  },

  //////////////////////////////////////////

});

export default QuoteView;
