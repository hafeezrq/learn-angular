import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServersComponent } from './basics/servers/servers.component';
import { ServerComponent } from './basics/server/server.component';
import { SuccessAlertComponent } from './basics/assignments/assignment1/success-alert/success-alert.component';
import { WarningAlertComponent } from './basics/assignments/assignment1/warning-alert/warning-alert.component';
import { UserComponent } from './basics/assignments/assignment2/user/user.component';
import { Assignment3Component } from './basics/assignments/assignment3/assignment3.component';
import { HeaderComponent } from './project/header/header.component';
import { RecipesComponent } from './project/recipes/recipes.component';
import { RecipeDetailComponent } from './project/recipes/recipe-detail/recipe-detail.component';
import { RecipeListComponent } from './project/recipes/recipe-list/recipe-list.component';
import { ShoppingListComponent } from './project/shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './project/shopping-list/shopping-edit/shopping-edit.component';
import { MainProjectComponent } from './project/main-project.component';
import { RecipeItemComponent } from './project/recipes/recipe-list/recipe-item/recipe-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ServersComponent,
    ServerComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
    UserComponent,
    Assignment3Component,
    MainProjectComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeDetailComponent,
    RecipeListComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    RecipeItemComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
