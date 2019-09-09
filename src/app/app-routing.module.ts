import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



import { ArticlesJavascriptComponent } from "./articles-javascript/articles-javascript.component";
import { ArticlesTecnologyComponent  } from "./articles-tecnology/articles-tecnology.component";


const routes: Routes = [
  { path: 'articles', component: ArticlesTecnologyComponent },
  { path: 'articles-javascript', component: ArticlesJavascriptComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
