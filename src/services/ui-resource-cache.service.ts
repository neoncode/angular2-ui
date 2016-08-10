import { Injectable, ElementRef } from '@angular/core';


@Injectable()
export class UIResourceCacheService { 

	private cache:any;

	constructor() { 
		this.cache = {};
	}

	getResource(identifier: string) { 
		return this.cache[identifier];
	}

	setResource(identifier: string, resource: any) { 
		this.cache[identifier] = resource;
	}

}