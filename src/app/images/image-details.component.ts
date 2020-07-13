import { Component, OnInit } from "@angular/core";
import { ImageService } from "./images.service";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: 'app-images-details',
    templateUrl: 'image-details.component.html',
    styles: [`
    .img-container{
        margin: 24px;
        box-shadow: #555 1px 2px 8px 1px;
        min-height: 660px;
        width: 900px;
        background-position: center;
        background-repeat: no-repeat;
        align-content: center;
    }

    .caption-row{
        padding: 24px;
        text-align: center;
    }
    `]
})
export class ImageDetailsComponent implements OnInit {

    image: any;

    constructor(
        private imageService: ImageService,
        private route: ActivatedRoute,
    ){}

    ngOnInit(){
        this.image = this.imageService.getImage(
            +this.route.snapshot.params['id']
        )
    }
}