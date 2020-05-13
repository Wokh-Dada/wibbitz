import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NewsComponent } from './news/news.component';
import { NewPostsComponent } from './new-posts/new-posts.component';
import { PopularResourcesComponent } from './popular-resources/popular-resources.component';
import { EventsComponent } from './events/events.component';
import { NewListenerComponent } from './new-listener/new-listener.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NewsComponent,
    NewPostsComponent,
    PopularResourcesComponent,
    EventsComponent,
    NewListenerComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
