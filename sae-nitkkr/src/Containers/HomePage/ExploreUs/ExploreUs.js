import react from "react";

import "./ExploreUs.css";
import $ from "jquery";
import jQuery from 'jquery'

var animateDone = 0
$(window).scroll(function(){
    function elementScrolled(elem)
    {
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();
        var elemTop = $(elem).offset().top;
        return ((elemTop <= docViewBottom) && (elemTop >= docViewTop));
    }
    
    function updateValue() {
        $('.count').each(function () {
            $(this).prop('Counter', 0).animate({
                Counter: $(this).text()
            }, {
                duration: 3000,
                easing: 'swing',
                step: function (now) {
                    $(this).text(Math.ceil(now));
                }
            });
        });
        // $('.count').each(function () {
        //     var $this = $(this);
        //     jQuery({ Counter: 0 }).animate({ Counter: $this.text() }, {
        //       duration: 1000,
        //       easing: 'swing',
        //       step: function () {
        //         $this.text(Math.ceil(this.Counter));
        //       }
        //     });
        //   });
    }

    // This is where we use the function to detect if ".box2" is scrolled into view, and when it is add the class ".animated" to the <p> child element
    $.fn.exists = function () {
        return this.length !== 0;
    }
    
    if($(".counter-body").exists()){
        if(elementScrolled('.counter-body')) { 
            if(animateDone == 0){ 
                console.log("animate done!");
                updateValue();
                animateDone = 2
            }
        }
    }
  });
 
function ExploreUs() {

    return (
        <div className="counter-body">
            <div className="counter-heading">
                Each One Counts
            </div>
            
            <div className="counter-container">
            <div class="bubbles">
    <div class="bubble"></div>
    <div class="bubble"></div>
    <div class="bubble"></div>
    <div class="bubble"></div>
    <div class="bubble"></div>
    <div class="bubble"></div>
    <div class="bubble"></div>
    <div class="bubble"></div>
    <div class="bubble"></div>
    <div class="bubble"></div>
    <div class="bubble"></div>
    <div class="bubble"></div>
    <div class="bubble"></div>
    <div class="bubble"></div>
    <div class="bubble"></div>
    <div class="bubble"></div>
    <div class="bubble"></div>
    <div class="bubble"></div>
    <div class="bubble"></div>
    <div class="bubble"></div>
    <div class="bubble"></div>
    <div class="bubble"></div>
    <div class="bubble"></div>
    <div class="bubble"></div>
    <div class="bubble"></div>
    <div class="bubble"></div>
    <div class="bubble"></div>
    <div class="bubble"></div>
    <div class="bubble"></div>
    <div class="bubble"></div>
    <div class="bubble"></div>
    <div class="bubble"></div>
    <div class="bubble"></div>
    <div class="bubble"></div>
    <div class="bubble"></div>
    <div class="bubble"></div>
    <div class="bubble"></div>
    <div class="bubble"></div>
    <div class="bubble"></div>
    <div class="bubble"></div>
    <div class="bubble"></div>
    <div class="bubble"></div>
    <div class="bubble"></div>
    <div class="bubble"></div>
    <div class="bubble"></div>
    <div class="bubble"></div>
    <div class="bubble"></div>
    <div class="bubble"></div>
    <div class="bubble"></div>
    <div class="bubble"></div>
    
                <div className="counter-counter">
                    <img src="https://img.icons8.com/ios-glyphs/30/ffffff/user-group-man-woman.png" className="counter-icon" />
                    <h3 data-value="117" className="count">117</h3>
                    <h6>Members in Club</h6>
                </div>
                <div className="counter-counter">
                    <img src="https://img.icons8.com/office/80/000000/trophy--v1.png" className="counter-icon" />
                    <h3 data-target="30" className="count">30</h3>
                    <h6>Awards Won</h6>
                </div>
                <div className="counter-counter">
                <img src="https://img.icons8.com/external-inipagistudio-lineal-color-inipagistudio/64/000000/external-gear-toolkit-inipagistudio-lineal-color-inipagistudio.png" className="counter-icon" />
                    <h3 data-target="16" className="count">16</h3>
                    <h6>Vehicles designed</h6>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default ExploreUs;