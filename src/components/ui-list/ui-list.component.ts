import { Component, Input, OnInit, OnChanges } from '@angular/core';

@Component({
	selector:'ui-list',
	template: `
		<div class="list-group">
			<a class="list-group-item" [class.active]="item.active()" *ngFor="let item of viewModels" (click)="selected_fn(item)">{{item.display()}}</a>
		</div>
	`
})
export class UIListComponent implements OnInit, OnChanges  { 

	constructor() { 
	}

	ngOnInit() { 
		
		if(this.display_fn == null) { 
			//TODO: some coercion may be appropriate here...
		}

		this.viewModels = ViewModel.FromArray<any>(this.items, this.display_fn, this.active_fn);
	}

	ngOnChanges(changes) { 

	}

	@Input() items: any[];
	@Input('display-fn') display_fn: ((x:any) => string);
	@Input('selected-fn') selected_fn: ((x:any) => void);
	@Input('active-fn') active_fn: ((x:any) => boolean);


	viewModels: ViewModel<any>[];

}

export class ViewModel<TModel> { 

	static FromArray<TModel>(models: TModel[], display: (x: TModel) => string, active: (x: TModel) => boolean) { 
		return models.map(x => { return new ViewModel<TModel>(x, display, active) });
	}

	constructor(public originalModel: TModel, display:(x: TModel) => string, active:(x: TModel) => boolean) { 
		this.display = display.bind(this, originalModel);
		this.active = active.bind(this, originalModel);
	}

	display: (x: TModel) => string;
	active: (x: TModel) => boolean;
	
}