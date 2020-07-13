import { Component } from "@angular/core";
import { ImageService } from "./images.service";

@Component({
    selector: 'app-images',
    templateUrl: 'images.component.html',
})
export class ImagesComponent {
    constructor(
        private imageService: ImageService,
    ){}
}