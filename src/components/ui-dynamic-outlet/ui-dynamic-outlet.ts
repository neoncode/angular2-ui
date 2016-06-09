import { Component, Directive, Input, ViewContainerRef, ComponentResolver, ComponentMetadata, ReflectiveInjector, ComponentFactory } from '@angular/core';

/**
 * Note that html is not sanitized, only use Html that is from a trusted source.
 */
@Directive({
    selector: '[ui-dynamic-outlet]',
})
export class UIDynamicOutlet {
    @Input('dynamic-outlet') src: string;

    constructor(private vcRef: ViewContainerRef, private resolver: ComponentResolver) {
    }

    ngOnChanges() {
        if (!this.src) return;

        const metadata = new ComponentMetadata({
            selector: 'dynamic-html',
            template: this.src,
        });
        this.createComponentFactory(this.resolver, metadata)
            .then(factory => {
                const injector = ReflectiveInjector.fromResolvedProviders([], this.vcRef.parentInjector);
                this.vcRef.createComponent(factory, 0, injector, []);
            });
    }

    createComponentFactory(resolver: ComponentResolver, metadata: ComponentMetadata): Promise<ComponentFactory<any>> {
        const cmpClass = class DynamicComponent { };
        const decoratedCmp = Component(metadata)(cmpClass);
        return resolver.resolveComponent(decoratedCmp);
    }
}

