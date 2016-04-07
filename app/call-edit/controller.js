// call-edit/controller.js
import Ember from 'ember';

export default Ember.Controller.extend({
  submitCall() {
    // Get our model values from the form
    const attributes = this.model;

    // PUT values to server
    fetch(`http://tiny-tn.herokuapp.com/collections/calls/${attributes._id}`, {
      method: `PUT`,
      headers: {
        Accept: `application/json`,
        'Content-Type': `application/json`,
      },
      body: JSON.stringify(attributes),
    }).then((results) => results.json())
    .then((data) => {
      // Show the detail or list of all calls
      this.transitionToRoute(`call-info`, data._id);
    });
  },
});
