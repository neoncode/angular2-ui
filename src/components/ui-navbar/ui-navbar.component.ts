import { Component, Input } from '@angular/core';


@Component({ 
	selector:'ui-navbar',
	styles: [`
		nav { 
			height: 50px;
			box-shadow: 5px 5px 15px #888888;
			margin-bottom: 100px;
		}

	`],
	template: `
		<nav class="navbar navbar-default navbar-fixed-top navbar-light bg-faded">
			<ng-content></ng-content>
		</nav>
	`
})
export class UINavbarComponent { 
	constructor() { 
	}

	
}


