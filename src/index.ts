///<reference path="../typings/main/ambient/d3/index.d.ts" />
///<reference path="../typings/main/ambient/jquery/index.d.ts" />
import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
//import { CORE_DIRECTIVES } from '@angular/common';

//Components
import { UIButtonComponent } from './components/ui-button/ui-button.component';
import { UIButtonGroupComponent } from './components/ui-button/ui-button-group.component'
import { UICardComponent } from './components/ui-card/ui-card.component';
import { UICardTextComponent } from './components/ui-card/ui-card-text.component';
import { UICardTitleComponent } from './components/ui-card/ui-card-title.component';
import { UICardBlockComponent } from './components/ui-card/ui-card-block.component';
import { UIColumnComponent } from './components/ui-column/ui-column.component';
import { UIContainerComponent } from './components/ui-container/ui-container.component';
import { UIListComponent } from './components/ui-list/ui-list.component';
import { UINavbarComponent } from './components/ui-navbar/ui-navbar.component';
import { UINavbarHeaderComponent } from './components/ui-navbar/ui-navbar-header.component';
import { UIRowComponent } from './components/ui-row/ui-row.component';
import { UIIconComponent } from './components/ui-icon/ui-icon.component';
import { UIInputComponent } from './components/ui-input/ui-input.component';
import { UIInputGroupComponent } from './components/ui-input/ui-input-group.component';
import { UIAddonComponent } from './components/ui-input/ui-addon.component';
import { UIPasswordComponent } from './components/ui-input/ui-password.component';
import { UIFormComponent } from './components/ui-form/ui-form.component';
import { UITypeaheadComponent } from './components/ui-typeahead/ui-typeahead.component';
import { UILoaderCircularComponent } from './components/ui-loader-circular/ui-loader-circular.component';

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

//export { UIListComponent } from './components/ui-list/ui-list.component';
//export { UICardComponent } from './components/ui-card/ui-card.component';
//export { UICardBlockComponent } from './components/ui-card/ui-card-block.component';
//export { UICardTextComponent } from './components/ui-card/ui-card-text.component';
//export { UICardTitleComponent } from './components/ui-card/ui-card-title.component';
//export { UIContainerComponent } from './components/ui-container/ui-container.component';
//export { UIColumnComponent } from './components/ui-column/ui-column.component';
//export { UIRowComponent } from './components/ui-row/ui-row.component';
//export { UIButtonComponent } from './components/ui-button/ui-button.component';
//export { UIButtonGroupComponent } from './components/ui-button/ui-button-group.component';

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
	],
	exports: [
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
	],
	providers: [
		UIModalService.UIModalService,
		UIResourceCacheService.UIResourceCacheService
	]
})
export class Angular2UIModule { 
}