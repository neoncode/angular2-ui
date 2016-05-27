import { Component, Input } from '@angular/core';

@Component({
	selector: 'ui-container',
	template: `
		<div [class.container]="!fluid" [class.container-fluid]="fluid">
			<ng-content></ng-content>
		</div>
	`
})
export class UIContainerComponent {
	constructor() {
		if (this.fluid == null) {
			this.fluid = false;
		}
	}

	@Input() fluid: boolean
}