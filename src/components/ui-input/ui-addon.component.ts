import { Component, Input } from '@angular/core';

@Component({
	selector:'ui-addon',
	template: `
		<span [class.input-group-btn]="type == 'button'"><ng-content></ng-content></span>
	`
})
export class UIAddonComponent { 
	constructor() { 
	}


	/**
	Types: text, button, 
	*/
	@Input() type: string;
}