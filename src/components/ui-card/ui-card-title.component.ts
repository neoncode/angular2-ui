import { Component, Input } from '@angular/core';

@Component({
	selector: 'ui-card-title',
	template: `
		<div class="card-title">
			<ng-content></ng-content>
		</div>
	`
})
export class UICardTitleComponent {

	constructor() { }
}
