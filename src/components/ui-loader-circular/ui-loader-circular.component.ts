import { Component, Input } from '@angular/core'

@Component({
	selector: 'ui-loader-circular',
	template: `
	<div class="ui-showbox">
  		<div class="ui-loader">
			<svg class="circular" viewBox="25 25 50 50">
      			<circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10" [style.stroke]="color"/>
    		</svg>
    	</div>
    </div>
  
	`,
	styles: [`
		body {
		  background-color: #eee;
		}

		.ui-showbox {
		  top: 0;
		  bottom: 0;
		  left: 0;
		  right: 0;
		}

		.ui-loader {
		  position: relative;
		  margin: 0px auto;
		  width: 100px;
		}

		.ui-loader:before {
		  content: '';
		  display: block;
		  padding-top: 100%;
		}

		.circular {
		  -webkit-animation: rotate 2s linear infinite;
		          animation: rotate 2s linear infinite;
		  height: 100%;
		  -webkit-transform-origin: center center;
		          transform-origin: center center;
		  width: 100%;
		  position: absolute;
		  top: 0;
		  bottom: 0;
		  left: 0;
		  right: 0;
		  margin: auto;
		}

		.path {
		  stroke-dasharray: 1, 200;
		  stroke-dashoffset: 0;
		  -webkit-animation: dash 1.5s ease-in-out infinite, color 6s ease-in-out infinite;
		          animation: dash 1.5s ease-in-out infinite, color 6s ease-in-out infinite;
		  stroke-linecap: round;
		}

		@-webkit-keyframes rotate {
		  100% {
		    -webkit-transform: rotate(360deg);
		            transform: rotate(360deg);
		  }
		}

		@keyframes rotate {
		  100% {
		    -webkit-transform: rotate(360deg);
		            transform: rotate(360deg);
		  }
		}
		@-webkit-keyframes dash {
		  0% {
		    stroke-dasharray: 1, 200;
		    stroke-dashoffset: 0;
		  }
		  50% {
		    stroke-dasharray: 89, 200;
		    stroke-dashoffset: -35px;
		  }
		  100% {
		    stroke-dasharray: 89, 200;
		    stroke-dashoffset: -124px;
		  }
		}
		@keyframes dash {
		  0% {
		    stroke-dasharray: 1, 200;
		    stroke-dashoffset: 0;
		  }
		  50% {
		    stroke-dasharray: 89, 200;
		    stroke-dashoffset: -35px;
		  }
		  100% {
		    stroke-dasharray: 89, 200;
		    stroke-dashoffset: -124px;
		  }
		}

	`]
})
export class UILoaderCircularComponent { 
	constructor() { 
	}

	ngOnInit() { 
		this.style = `stroke:${this.color}`;
	}

	@Input() color: string;

	style: string;

}