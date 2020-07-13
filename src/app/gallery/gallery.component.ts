import { Component, OnChanges, Input } from "@angular/core";
import { ImageService } from "../images/images.service";

@Component({
    selector: 'app-gallery',
    templateUrl: 'gallery.component.html',
    styles: [`
    .li {
        display: inline;
    }

    .tn {
        margin: 6px;
        border: 4px solid #eee;
        box-shadow: #555 1px 8px 1px;
    }
    `]
})
export class GalleryComponent implements OnChanges {
    title = 'Recent Photos';

    @Input() filterBy? : string ="all";
    visibleImages: any[] =[];

    constructor(
        private imageService: ImageService,
    ){
        this.visibleImages = this.imageService.getImages();
    }

    ngOnChanges(){
        this.visibleImages = this.imageService.getImages();
    }
}