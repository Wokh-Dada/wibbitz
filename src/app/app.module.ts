import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './res/view/header/header.component';
import { NewsComponent } from './theme-one/res/view/news/news.component';
import { NewPostsComponent } from './res/view/new-posts/new-posts.component';
import { PopularResourcesComponent } from './theme-one/res/view/popular-resources/popular-resources.component';
import { EventsComponent } from './theme-one/res/view/events/events.component';
import { NewListenerComponent } from './res/view/new-listener/new-listener.component';
import { FooterComponent } from './res/view/footer/footer.component';
import { ThemeOneComponent } from './theme-one/theme-one.component';
import { ThemeTwoComponent } from './theme-two/theme-two.component';
import {NewSinglePostComponent} from './res/view/new-single-post/new-single-post.component';
import { SidebarComponent } from './theme-one/res/view/news/res/view/sidebar/sidebar.component';
import { PopularAsideComponent } from './theme-one/res/view/popular-resources/res/view/popular-aside/popular-aside.component';
import { BlogComponent } from './theme-two/res/view/blog/blog.component';
import { HeaderSecondComponent } from './header-second/header-second.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NewsComponent,
    NewPostsComponent,
    PopularResourcesComponent,
    EventsComponent,
    NewListenerComponent,
    FooterComponent,
    ThemeOneComponent,
    ThemeTwoComponent,
    NewSinglePostComponent,
    SidebarComponent,
    PopularAsideComponent,
    BlogComponent,
    HeaderSecondComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
