import $ from 'jquery';
import Backbone from 'backbone';
import _ from 'underscore';

import QuoteView from 'app/views/quote_view';

const ApplicationView = Backbone.View.extend({
  initialize: function(options) {
    // Store a the full list of tasks
   this.stockData = options.stockData;

   // Compile a template to be shared between the individual tasks
   this.stockTemplate = _.template($('#tmpl-quote-view').html());

   // Keep track of the <ul> element
   this.listElement = this.$('.quotes');

   // Create a TaskView for each task
   this.cardList = [];
   this.stockData.forEach(function(stock) {
     var card = new QuoteView({
       stock: stock,
       template: this.stockTemplate
     });
     this.cardList.push(card);
   }, this); // bind `this` so it's available inside forEach  * i.e. "this" is another argument being passed into the forEach so it knows which "this" to use

  },

  render: function() {
    // Make sure the list in the DOM is empty
    // before we start appending items
    this.listElement.empty();

    // Loop through the data assigned to this view
    this.cardList.forEach(function(card) {
      // Cause the task to render
      card.render();

      // Add that HTML to our task list
      this.listElement.append(card.$el);
    }, this);

    return this; // enable chained calls
  }
});

export default ApplicationView;
