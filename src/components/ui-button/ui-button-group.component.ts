import { Component, Input } from '@angular/core';


@Component({
	selector:'ui-button-group',
	template:`
		<div class="btn-group">
			<ng-content></ng-content>
		</div>
	`
})
export class UIButtonGroupComponent { 

}