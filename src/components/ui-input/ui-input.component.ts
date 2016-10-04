import { Component, Input, Output, EventEmitter, Provider, forwardRef, OpaqueToken, Type, ElementRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import * as d3 from 'd3'
const noop = () => { };

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
	provide: <OpaqueToken>NG_VALUE_ACCESSOR, 
		useExisting: <Type<any>>forwardRef(() => UIInputComponent),
		multi: true
	};

@Component({
	selector: 'ui-input',
	template: `
		<div class="form-group">
			<label *ngIf="label != null">{{label}}</label>
			<input [(ngModel)]="model" class="form-control" type="text" placeholder="{{placeholder}}" name="{{label}}" />
		</div>
	`,
	providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
})
export class UIInputComponent implements ControlValueAccessor { 
	private _model: string;
	private _onChangeCallback: (value: any) => void = noop;
	private _onTouchedCallback: () => void = noop;

	constructor(private elementRef: ElementRef) {
		//this.modelEmitter = new EventEmitter<string>();
	}

	@Input() label: string;
	@Input() placeholder: string;
	@Input() autofocus: boolean;
	//@Output('model') modelEmitter: EventEmitter<string>;

	ngOnInit() { 
		if (this.autofocus) { 
			let node:any = d3.select(this.elementRef.nativeElement)
				.select('input')
				.node();

			node.focus();
		}
		
	}

	set model(value:string) {
		this._model = value;
		this._onChangeCallback(this._model);
	}

	get model() { 
		return this._model;
	}



	//From ControlValueAccessor interface
    writeValue(value: any) {
		this._model = value;
    }

    //From ControlValueAccessor interface
    registerOnChange(fn: any) {
		this._onChangeCallback = fn;
    }

    //From ControlValueAccessor interface
    registerOnTouched(fn: any) {
		this._onTouchedCallback = fn;
    }

}