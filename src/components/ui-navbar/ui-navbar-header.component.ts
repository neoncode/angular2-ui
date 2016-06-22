import { Component, Input } from '@angular/core';

@Component({
	selector: 'ui-navbar-header',
	template: `
		<div class="navbar-header">
			<ng-content></ng-content>
		</div>
	`
})
export class UINavbarHeaderComponent { 
	constructor() { 
	}


}