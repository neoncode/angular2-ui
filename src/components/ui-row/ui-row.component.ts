import { Component, Input } from '@angular/core';

@Component({
	selector: 'ui-row',
	template: `
		<div class="row">
			<ng-content></ng-content>
		</div>
	`
})
export class UIRowComponent {
	constructor() {

	}
}
