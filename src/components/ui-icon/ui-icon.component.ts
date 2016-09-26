import { ElementRef, Component, Input, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import * as d3 from '@types/d3';
import { UIResourceCacheService } from '../../services/ui-resource-cache.service';

@Component({
	selector: 'ui-icon',
	template: `
		<img *ngIf="imageSource != null" [src]="imageSource" [width]="widthText" [height]="heightText" />
	`,

})

export class UIIconComponent implements OnInit {
	constructor(private http: Http, private elementRef: ElementRef, private cache: UIResourceCacheService) { 
	}

	addSvg(html: string) { 
		d3.select(this.elementRef.nativeElement)
			.html(html)
			.select('svg')
			.attr('width', this.width + 'px')
			.attr('height', this.height + 'px');
	}

	ngOnInit() { 

		if (this.width == null) { 
			this.width = 24;
		}

		if (this.height == null) { 
			this.height = 24;
		}

		if (this.imageSource != null && this.svgSource != null) { 
			throw new Error('Must specify an image source OR an svg source, but not both.');
		}

		if (this.imageSource == null && this.svgSource == null) { 
			throw new Error('Must specify an image source or an SVG source.');
		}

		if (this.svgSource != null) { 
			//We have to get the svg and pull it into the HTML
			//First check a cache to see if we have loaded it already...
			let svgHtml = this.cache.getResource(this.svgSource);
			if (svgHtml != null) { 
				this.addSvg(svgHtml);
			}
			else { 

				this.http.get(this.svgSource)
					.subscribe(svg => {
						let html = svg.text();
						this.cache.setResource(this.svgSource, html);
						this.addSvg(html);
					}, error => { 
						console.log(error);
					});
			}
			
		}

	}

	@Input('img-src') imageSource: string;
	@Input('svg-src') svgSource: string;

	@Input() width: number;
	@Input() height: number; 

	get widthText():string {
		return `${this.width}px`
	}

	get heightText(): string {
		return `${this.height}px`
	}

}