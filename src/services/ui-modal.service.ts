import { Injectable, ElementRef } from '@angular/core';


/**
	Access to a set of options for displaying modal dialogs to the user.
	Multiple levels of modals are not supported. If a modal is called to pop up with an existing modal already present an error will be presented.
*/
@Injectable()
export class UIModalService { 


	constructor() { 

	}


	show(options:UIModalOptions) { 
		this.validate(options);

		let selection = d3.select(options.parent.nativeElement);


		if (options.template != null) { 
			selection
				.append('div')
				.attr('class', 'modal fade')
				.attr('role', 'dialog')
				.attr('id', 'ui-modal')
				.append('div')
				.attr('class', 'modal-dialog')
				.append('div')
				.attr('class', 'modal-content')
				//.attr('aria-labelledby', '')
				.html(options.template);
		}
		else if(options.templateUrl != null) { 
			let template = d3.html(options.templateUrl, (err, data) => {
				//todo:
			});
		}

		//Bootstrap requires that you use jquery to call instance methods on selected elements
		let modal = $('#ui-modal');

		let bootstrapModal: any = modal;

		bootstrapModal.modal({
			keyboard: options.keyboard,
			backdrop: true,
			show: true
		});

		//Make sure to hide the dialog after it has been hidden
		let onHide = () => {
			modal.remove();
			modal.off('hidden.bs.modal', onHide);
		}
	
		modal.on('hidden.bs.modal', onHide);
	}

	alert(name:string, message:string) { 
		this.show({
			parent: new ElementRef(document.body),
			template: `
				<div class="modal-header">
					<h3>${name}</h3>
				</div>
				<div class="modal-body">
					<p>${message}</p>
				</div>
				<div class="modal-footer">
					<button id="modal-accept" type="button" class="btn btn-primary">Ok</button>
				</div>
			`,
			templateUrl: null,
			keyboard: true	
		})

		d3.select('#modal-accept').on('click', () => { this.hide(); })
	}

	hide() { 
		let modal:any = $('#ui-modal');
		modal.modal('hide');
	}

	private validate(options:UIModalOptions) { 
		if (options.parent == null) { 
			throw new Error('Must specify parent element for modal.');
		}

		//For keyboard we will just set a default value...
		if (options.keyboard == null) { 
			options.keyboard = true;
		}


		if (options.template == null && options.templateUrl == null) { 
			throw new Error('Must specify either template, or template Url for modal');
		}
	}


}


export interface UIModalOptions { 
	parent: ElementRef;
	template: string;
	templateUrl: string;
	keyboard: boolean;
}
