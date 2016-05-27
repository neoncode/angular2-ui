import { Component, Input } from '@angular/core';

@Component({
	selector: 'ui-card-block',
	template: `
		<div class="card-block">
			<ng-content></ng-content>
		</div>
	`
})
export class UICardBlockComponent {

	constructor() { }
}