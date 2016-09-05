///<reference path="../typings/main/ambient/d3/index.d.ts" />
///<reference path="../typings/main/ambient/jquery/index.d.ts" />
import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//Components
export import UIButtonComponent = require('./components/ui-button/ui-button.component');
export import UIButtonGroupComponent = require('./components/ui-button/ui-button-group.component');
export import UICardComponent = require('./components/ui-card/ui-card.component');
export import UICardTextComponent = require('./components/ui-card/ui-card-text.component');
export import UICardTitleComponent = require('./components/ui-card/ui-card-title.component');
export import UICardBlockComponent = require('./components/ui-card/ui-card-block.component');
export import UIColumnComponent = require('./components/ui-column/ui-column.component');
export import UIContainerComponent = require('./components/ui-container/ui-container.component');
export import UIListComponent = require('./components/ui-list/ui-list.component');
export import UINavbarComponent = require('./components/ui-navbar/ui-navbar.component');
export import UINavbarHeaderComponent = require('./components/ui-navbar/ui-navbar-header.component');
export import UIRowComponent = require('./components/ui-row/ui-row.component');
export import UIIconComponent = require('./components/ui-icon/ui-icon.component');
export import UIInputComponent = require('./components/ui-input/ui-input.component');
export import UIInputGroupComponent = require('./components/ui-input/ui-input-group.component');
export import UIAddonComponent = require('./components/ui-input/ui-addon.component');
export import UIPasswordComponent = require('./components/ui-input/ui-password.component');
export import UIFormComponent = require('./components/ui-form/ui-form.component');
export import UITypeaheadComponent = require('./components/ui-typeahead/ui-typeahead.component');
export import UILoaderCircularComponent = require('./components/ui-loader-circular/ui-loader-circular.component');

export const UI_COMPONENTS = [
	UIButtonComponent,
	UIButtonGroupComponent,
	UICardComponent,
	UICardTextComponent,
	UICardTitleComponent,
	UICardBlockComponent,
	UIColumnComponent,
	UIContainerComponent,
	UIListComponent,
	UINavbarComponent,
	UINavbarHeaderComponent,
	UIRowComponent,
	UIIconComponent,
	UIInputComponent,
	UIInputGroupComponent,
	UIAddonComponent,
	UIPasswordComponent,
	UIFormComponent,
	UITypeaheadComponent,
	UILoaderCircularComponent
]

//Providers
export import UIModalService = require('./services/ui-modal.service');
export import UIResourceCacheService = require('./services/ui-resource-cache.service');

@NgModule({
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule
	],
	declarations: [
		UIButtonComponent.UIButtonComponent,
		UIButtonGroupComponent.UIButtonGroupComponent,
		UICardComponent.UICardComponent,
		UICardTextComponent.UICardTextComponent,
		UICardTitleComponent.UICardTitleComponent,
		UICardBlockComponent.UICardBlockComponent,
		UIColumnComponent.UIColumnComponent,
		UIContainerComponent.UIContainerComponent,
		UIListComponent.UIListComponent,
		UINavbarComponent.UINavbarComponent,
		UINavbarHeaderComponent.UINavbarHeaderComponent,
		UIRowComponent.UIRowComponent,
		UIIconComponent.UIIconComponent,
		UIInputComponent.UIInputComponent,
		UIInputGroupComponent.UIInputGroupComponent,
		UIAddonComponent.UIAddonComponent,
		UIPasswordComponent.UIPasswordComponent,
		UIFormComponent.UIFormComponent,
		UITypeaheadComponent.UITypeaheadComponent,
		UILoaderCircularComponent.UILoaderCircularComponent
	],
	exports: [
		UIButtonComponent.UIButtonComponent,
		UIButtonGroupComponent.UIButtonGroupComponent,
		UICardComponent.UICardComponent,
		UICardTextComponent.UICardTextComponent,
		UICardTitleComponent.UICardTitleComponent,
		UICardBlockComponent.UICardBlockComponent,
		UIColumnComponent.UIColumnComponent,
		UIContainerComponent.UIContainerComponent,
		UIListComponent.UIListComponent,
		UINavbarComponent.UINavbarComponent,
		UINavbarHeaderComponent.UINavbarHeaderComponent,
		UIRowComponent.UIRowComponent,
		UIIconComponent.UIIconComponent,
		UIInputComponent.UIInputComponent,
		UIInputGroupComponent.UIInputGroupComponent,
		UIAddonComponent.UIAddonComponent,
		UIPasswordComponent.UIPasswordComponent,
		UIFormComponent.UIFormComponent,
		UITypeaheadComponent.UITypeaheadComponent,
		UILoaderCircularComponent.UILoaderCircularComponent
	],
	providers: [
		UIModalService.UIModalService,
		UIResourceCacheService.UIResourceCacheService
	]
})
export class Angular2UIModule { 
}