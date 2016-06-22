import { Component, Input } from '@angular/core';


@Component({
	selector: 'ui-form',
	template: `
		<form [class.form-inline]="inline">
			<ng-content></ng-content>
		</form>
	`
})
export class UIFormComponent { 
		constructor() { 
		}

		@Input() inline: boolean;
}
