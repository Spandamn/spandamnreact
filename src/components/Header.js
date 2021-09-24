import React from 'react';

function Header() {
    return (<header class="sec1" data-overlay-dark="6" data-background="assets/back.jpg" id="section1" data-scroll-index="0" data-anchor="page1">
				<h1>Spandan C. Punwatkar</h1>
				<div id="imageBlock">
					<img src={"assets/picture.jpg"} className="img-responsive" alt="Spandan" id="spandan" height={534} width={427} style={{'border': '5px solid #FFFFFF'}}></img>	
				</div><button id="togglePhoto" class="btn btn-secondary" title="Toggle Image lol" onmouseover="onButtonHoverActivePassiveSwitch(this.id)" onmouseout="onButtonHoverActivePassiveSwitch(this.id)" onclick="toggleImage()">-</button>
				<br/>
				<div class="intro">
					<h2>
						Hello! My name is Spandan Punwatkar, and I'm a Computer Programmer. I also have many other interests, but I mainly work in the field of Computer Science.
						I am studying at Jawaharlal Nehru Engineering College (Aurangabad, Maharashtra, India), which is affiliated to Dr. Babasaheb Ambedkar Technological University (Lonere, Maharashtra, India).
					</h2>
				</div>
		</header>);
  }
  
  export default Header;
  