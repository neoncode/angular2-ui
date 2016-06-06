import { Component, Input } from '@angular/core';


@Component({ 
	selector:'ui-navbar',
	template: `
		<div class="navbar navbar-light">
			<ng-content></ng-content>
		</div>
	`
})
export class UINavbarComponent { 
	constructor() { 
	}

	
}