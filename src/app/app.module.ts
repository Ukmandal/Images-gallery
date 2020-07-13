import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navabr.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ImageService } from './images/images.service';
import { ImageFilterPipe } from './shared/filter.pipe';
import { AppRoutingModule } from './app-routing';
import { ImageDetailsComponent } from './images/image-details.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GalleryComponent,
    ImageDetailsComponent,
    ImageFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
  ],
  providers:[ImageService,ImageFilterPipe],
  bootstrap: [AppComponent]
})
export class AppModule {
}
