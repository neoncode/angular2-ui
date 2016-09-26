

import { NgModule } from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//Components
import UIButtonComponent = require('./components/ui-button/ui-button.component');
import UIButtonGroupComponent = require('./components/ui-button/ui-button-group.component');
import UICardComponent = require('./components/ui-card/ui-card.component');
import UICardTextComponent = require('./components/ui-card/ui-card-text.component');
import UICardTitleComponent = require('./components/ui-card/ui-card-title.component');
import UICardBlockComponent = require('./components/ui-card/ui-card-block.component');
import UIColumnComponent = require('./components/ui-column/ui-column.component');
import UIContainerComponent = require('./components/ui-container/ui-container.component');
import UIListComponent = require('./components/ui-list/ui-list.component');
import UINavbarComponent = require('./components/ui-navbar/ui-navbar.component');
import UINavbarHeaderComponent = require('./components/ui-navbar/ui-navbar-header.component');
import UIRowComponent = require('./components/ui-row/ui-row.component');
import UIIconComponent = require('./components/ui-icon/ui-icon.component');
import UIInputComponent = require('./components/ui-input/ui-input.component');
import UIInputGroupComponent = require('./components/ui-input/ui-input-group.component');
import UIAddonComponent = require('./components/ui-input/ui-addon.component');
import UIPasswordComponent = require('./components/ui-input/ui-password.component');
import UIFormComponent = require('./components/ui-form/ui-form.component');
import UITypeaheadComponent = require('./components/ui-typeahead/ui-typeahead.component');
import UILoaderCircularComponent = require('./components/ui-loader-circular/ui-loader-circular.component');

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
import { UIModalService } from './services/ui-modal.service';
export { UIModalService } from './services/ui-modal.service';

import { UIResourceCacheService } from './services/ui-resource-cache.service';
export { UIResourceCacheService } from './services/ui-resource-cache.service';





@NgModule({
	imports: [
		CommonModule,
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
		UIModalService,
		UIResourceCacheService
	]
})
export class Angular2UIModule { 
}