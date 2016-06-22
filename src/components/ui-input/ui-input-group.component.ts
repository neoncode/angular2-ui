import { Component, Input } from '@angular/core';


@Component({
	selector: 'ui-input-group', 
	template: `
		<div class="input-group">
			<ng-content></ng-content>
		</div>
	` 
})
export class UIInputGroupComponent { 
		constructor() { 
		}
}