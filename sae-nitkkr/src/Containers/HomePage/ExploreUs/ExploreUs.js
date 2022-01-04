import react from "react";

import "./ExploreUs.css";
import $ from "jquery";
import jQuery from 'jquery'

$('.count').each(function() {
  $(this).prop('Counter', 0).animate({
      Counter: $(this).text()
  }, {
      duration: 5000,
      easing: 'swing',
      step: function(now) {
          $(this).text(Math.ceil(now));
      }
  });
});

jQuery(document).ready(function($) {

  setInterval(function() {
      updateValue();
  }, 6000);

});

function updateValue() {

  $('#count').html(Math.floor(Math.random() * (1000 - 1)) + 1);
  $('#count').each(function() {

      $(this).prop('Counter', 0).animate({
          Counter: $(this).text()
      }, {
          duration: 3000,
          easing: 'swing',
          step: function(now) {
              $(this).text(Math.ceil(now));
          }
      });
  });
}

function ExploreUs() {

  return (
    <div className="counter-body">
    <div className="counter-container">
    <div className="counter-counter">
    <img src="https://img.icons8.com/ios-glyphs/30/ffffff/user-group-man-woman.png" className="counter-icon"/>
        <h3 data-value="117" className="count">117</h3>
        <h6>Members in Club</h6>
    </div>
    <div className="counter-counter">
    <img src="https://img.icons8.com/office/80/000000/trophy--v1.png" className="counter-icon" />
        <h3 data-target="30" className="count">30</h3>
        <h6>Awards Won</h6>
    </div>
    <div className="counter-counter">
    <img src="https://img.icons8.com/emoji/48/ffffff/racing-car.png" className="counter-icon"/>
        <h3 data-target="16" className="count">16</h3>
        <h6>Card designed</h6>
    </div>
    </div>
</div>
);
}



export default ExploreUs;