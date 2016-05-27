import { Component, Input } from '@angular/core';

@Component({
	selector: 'ui-column',
	template: `
		<div [class]="classBinding">
			<ng-content></ng-content>
		</div>
	`
})
export class UIColumnComponent {
	constructor() {
	}

	ngOnInit() { 
		this.classBinding = '';

		if (this.extraSmallWidth != null) {
			this.classBinding = `${this.classBinding} col-xs-${this.extraSmallWidth}`
		}

		if (this.smallWidth != null) {
			this.classBinding = `${this.classBinding} col-sm-${this.smallWidth}`
		}

		if (this.mediumWidth != null) {
			this.classBinding = `${this.classBinding} col-md-${this.mediumWidth}`
		}

		if (this.largeWidth != null) {
			this.classBinding = `${this.classBinding} col-lg-${this.largeWidth}`
		}

		if (this.extraLargeWidth != null) {
			this.classBinding = `${this.classBinding} col-xl-${this.extraLargeWidth}`
		}
	}

	classBinding: string;

	@Input('xs-width') extraSmallWidth: number;
	@Input('sm-width') smallWidth: number;
	@Input('md-width') mediumWidth: number;
	@Input('lg-width') largeWidth: number;
	@Input('xl-width') extraLargeWidth: number;
}