import { Directive, Component, Input, Output, EventEmitter, OnInit, OnChanges } from '@angular/core';
import { Observable } from 'rxjs/Observable';



@Component({
	selector: 'ui-typeahead',
	template: `
		<input class="form-control" autocomplete="off" [(ngModel)]="searchText" />
		<div class="dropdown-menu  search-results">
        	<a *ngFor="let item of list" class="dropdown-item" (click)="onClick(item)">{{item}}</a>
        </div>
	`
})

export class UITypeaheadComponent implements OnInit, OnChanges { 

	@Input() public search: (searchText: string) => Observable<string[]>;
	@Output() public selected = new EventEmitter<string>();

	public searchText: string;

	public searchResults: string[];

	constructor() { 
	}
	

	ngOnInit() { 

	}

	ngOnChanges() { 
		this.search(this.searchText).subscribe(results => { 
			this.searchResults = results;
		});
	}

	public onClick(item: string) {

	}

}


