import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ListComponent } from "./components/list/list.component";
import { FormComponent } from "./components/form/form.component";
import { ViewComponent } from "./components/view/view.component";

const routes:Routes = [
    {path:'',component:ListComponent},
    {path:'add-recipe', component:FormComponent},
    {path:'edit-recipe/:id', component:FormComponent},
    {path:'view-recipe/:id' , component:ViewComponent}
]

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})

export class RecipesRoutingModule{

}