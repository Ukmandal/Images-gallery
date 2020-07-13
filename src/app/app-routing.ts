import { Routes, RouterModule } from '@angular/router';
import { GalleryComponent } from './gallery/gallery.component';
import { ImageDetailsComponent } from './images/image-details.component';

const appRoutes: Routes = [
    {path: 'gallery', component: GalleryComponent},
    {path: 'image/:id', component: ImageDetailsComponent},
    { path: '', redirectTo: '/gallery', pathMatch: 'full' },

];
export const AppRoutingModule = RouterModule.forRoot(appRoutes);