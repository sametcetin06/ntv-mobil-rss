import { NgModule } from '@angular/core';
import { CardcomponentComponent } from './cardcomponent/cardcomponent';
import { KategorilerComponent } from './kategoriler/kategoriler';
@NgModule({
	declarations: [CardcomponentComponent,
    KategorilerComponent],
	imports: [],
	exports: [CardcomponentComponent,
    KategorilerComponent]
})
export class ComponentsModule {}
