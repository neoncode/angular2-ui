import { Component, Input } from '@angular/core';

@Component({
	selector: 'ui-card',
	styles: [`
		.lift { 
			box-shadow: 5px 5px 5px #888888;
		}
	`],
	template: `
		<div [class]="classBinding">
			<ng-content></ng-content>
		</div>
	`
})
export class UICardComponent {

	@Input() outline: boolean;
	@Input() theme: string;
	@Input() lift: boolean; 

	constructor() {
		if (this.theme == null) {
			this.theme = 'secondary';
		}

		if (this.outline == null) {
			this.outline = false;
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

	private buildClassBinding() { 
		this.validateInputs();
		this.classBinding = 'card';

		this.classBinding = `${this.classBinding} card-${this.theme}`

		if (this.outline) {
			this.classBinding = `${this.classBinding}-outline`;
		}

		if (this.lift) { 
			this.classBinding = `${this.classBinding} lift`
		}
	}

	ngOnInit() {
		this.buildClassBinding();
	}

	ngOnChanges() { 
		this.buildClassBinding();
	}

	classBinding: string;

}