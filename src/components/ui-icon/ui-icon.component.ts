import { ElementRef, Component, Input, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
	selector: 'ui-icon',
	template: `
		<img *ngIf="imageSource != null" [src]="imageSource" />
	`,

})

export class UIIconComponent implements OnInit {
	constructor(private http: Http, private elementRef: ElementRef) { 
	}

	ngOnInit() { 

		if (this.imageSource != null && this.svgSource != null) { 
			throw new Error('Must specify an image source OR an svg source, but not both.');
		}

		if (this.imageSource == null && this.svgSource == null) { 
			throw new Error('Must specify an image source or an SVG source.');
		}

		if (this.svgSource != null) { 
			//We have to get the svg and pull it into the HTML
			this.http.get(this.svgSource)
				.subscribe(svg => {
					let html = svg.text();
					d3.select(this.elementRef.nativeElement).html(html);
				});
		}

	}

	@Input('img-src') imageSource: string;
	@Input('svg-src') svgSource: string;

}