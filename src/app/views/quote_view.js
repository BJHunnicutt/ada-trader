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
  }
});

export default QuoteView;
