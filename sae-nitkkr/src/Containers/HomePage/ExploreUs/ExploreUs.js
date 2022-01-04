import react from "react";

import "./ExploreUs.css";


const stat1=document.querySelectorAll('.count1');
const stat2=document.querySelectorAll('.count2');
const stat3=document.querySelectorAll('.count3');
stat1.forEach(count1 => {
	const updateCount = () => {
		const target = +count1.getAttribute('data-target');
		const count = +count1.innerText;

	
		const inc = target / 1000;

	
		if (count < target) {
		
			count1.innerText = Math.ceil(count + inc);

			setTimeout(updateCount, 2);
		} else {
			count1.innerText = target;
		}
	};

	updateCount();
});

stat2.forEach(count2 => {
	const updateCount = () => {
		const target = +count2.getAttribute('data-target');
		const count = +count2.innerText;

	
		const inc = target /1000;

	
		if (count < target) {
		
			count2.innerText = Math.ceil(count + inc);

			setTimeout(updateCount, 75);
		} else {
			count2.innerText = target;
		}
	};

	updateCount();
});
stat3.forEach(count3 => {
	const updateCount = () => {
		const target = +count3.getAttribute('data-target');
		const count = +count3.innerText;

	
		const inc = target / 1000;

	
		if (count < target) {
		
			count3.innerText = Math.ceil(count + inc);

			setTimeout(updateCount, 1);
		} else {
			count3.innerText = target;
		}
	};

	updateCount();
});

function ExploreUs() {

  return (
    <div className="counter-body">
    <div className="counter-container">
    <div className="counter-counter">
    <img src="https://img.icons8.com/ios-glyphs/30/ffffff/user-group-man-woman.png" className="counter-icon"/>
        <h3 data-target="117" className="count1">0</h3>
        <h6>Members in Club</h6>
    </div>
    <div className="counter-counter">
    <img src="https://img.icons8.com/office/80/000000/trophy--v1.png" className="counter-icon" />
        <h3 data-target="30" className="count2">0</h3>
        <h6>Awards Won</h6>
    </div>
    <div className="counter-counter">
    <img src="https://img.icons8.com/emoji/48/ffffff/racing-car.png" className="counter-icon"/>
        <h3 data-target="16" className="count3">0</h3>
        <h6>Cars designed</h6>
    </div>
    </div>
</div>
);
}



export default ExploreUs;