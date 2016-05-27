import { Component, Input } from '@angular/core';


@Component({
	selector: 'ui-button',
	template: `
		<button [class]="classBinding">
			<ng-content></ng-content>
		</button>
	`
})
export class UIButtonComponent { 

	@Input('theme') theme: string;
	@Input('outline') outline: boolean;
	@Input('block') block: boolean;

	constructor() { 
		if (this.theme == null) { 
			this.theme = 'secondary';
		}

		if (this.outline == null) {
			this.outline = false;
		}

		if (this.block == null) {
			this.block = false;
		}

	}

	validateInputs() { 

		if (this.theme != 'primary'
			&& this.theme != 'secondary'
			&& this.theme != 'success'
			&& this.theme != 'info'
			&& this.theme != 'warning'
			&& this.theme != 'danger') { 
			throw new Error('The specified theme is not supported. The available themes are: "primary", "secondary", "success", "info", "warning" or "danger"');
		}
	}


	ngOnInit() { 
		this.validateInputs();
		this.classBinding = 'btn';

		this.classBinding = `${this.classBinding} btn-${this.theme}`

		if (this.outline) {
			this.classBinding = `${this.classBinding}-outline`;
		}


		if (this.block) {
			this.classBinding = `${this.classBinding} btn-block`;
		}

	}

	classBinding: string;


	


}