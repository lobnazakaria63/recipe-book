import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormComponent } from './components/form/form.component';
import { ViewComponent } from './components/view/view.component';
import { ListComponent } from './components/list/list.component';
import { RecipesRoutingModule } from "./recipes-routing.module";

@NgModule({
    declarations:[
        ViewComponent,
        ListComponent,
        FormComponent
  ],
    imports:[
        CommonModule,
        RecipesRoutingModule
    ],
})

export class RecipesModule {

}