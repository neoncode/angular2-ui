import { Component, Input } from '@angular/core';

@Component({
	selector: 'ui-card-text',
	template: `
		<div class="card-text">
			<ng-content></ng-content>
		</div>
	`
})
export class UICardTextComponent {

	constructor() { }
}