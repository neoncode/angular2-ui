import { Component, Input } from '@angular/core';


@Component({ 
	selector:'ui-navbar',
	template: `
		<nav class="navbar navbar-light bg-faded">
			<ng-content></ng-content>
		</nav>
	`
})
export class UINavbarComponent { 
	constructor() { 
	}

	
}


