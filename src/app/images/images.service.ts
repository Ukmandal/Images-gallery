import { Injectable } from "@angular/core";

@Injectable()
export class ImageService {
    visibleImages = [];
    getImages() {
        return this.visibleImages = IMAGES.slice(0);
    }

    getImage(id: number) {
        return IMAGES.slice(0).find(image => image.id == id)
    }
}

const IMAGES = [
    { "id": 1, "category": "boats", "caption": "view from a boat", "url": "../../assets/images/avatar-1.jpg" },
    { "id": 2, "category": "boats", "caption": "view from a boat", "url": "../../assets/images/avatar-2.jpg" },
    { "id": 3, "category": "boats", "caption": "view from a boat", "url": "../../assets/images/avatar-3.jpg" },
    { "id": 4, "category": "boats", "caption": "view from a boat", "url": "../../assets/images/avatar-4.jpg" },
    { "id": 5, "category": "camping", "caption": "view from a camping", "url": "../../assets/images/avatar-9.jpg" },
    { "id": 6, "category": "camping", "caption": "view from a camping", "url": "../../assets/images/avatar-10.jpg" },
    { "id": 7, "category": "camping", "caption": "view from a camping", "url": "../../assets/images/avatar-11.jpg" },
    { "id": 8, "category": "camping", "caption": "view from a camping", "url": "../../assets/images/avatar-12.jpg" },
    { "id": 9, "category": "library", "caption": "view from a library", "url": "../../assets/images/avatar-5.jpg" },
    { "id": 10, "category": "library", "caption": "view from a library", "url": "../../assets/images/avatar-6.jpg" },
    { "id": 11, "category": "library", "caption": "view from a library", "url": "../../assets/images/avatar-7.jpg" },
    { "id": 12, "category": "library", "caption": "view from a library", "url": "../../assets/images/avatar-8.jpg" },
    { "id": 13, "category": "house", "caption": "view from a house", "url": "../../assets/images/house1.jpg" },
    { "id": 14, "category": "house", "caption": "view from a house", "url": "../../assets/images/house2.jpg" },
    { "id": 15, "category": "house", "caption": "view from a house", "url": "../../assets/images/house3.jpg" },
    { "id": 16, "category": "house", "caption": "view from a house", "url": "../../assets/images/house4.jpg" },
    { "id": 17, "category": "car", "caption": "view from a car", "url": "../../assets/images/car1.jpg" },
    { "id": 18, "category": "car", "caption": "view from a car", "url": "../../assets/images/car2.jpg" },
    { "id": 19, "category": "car", "caption": "view from a car", "url": "../../assets/images/car3.jpg" },
    { "id": 20, "category": "car", "caption": "view from a car", "url": "../../assets/images/car4.jpg" },
    { "id": 21, "category": "bike", "caption": "view from a bike", "url": "../../assets/images/bike-1.jpg" },
    { "id": 22, "category": "bike", "caption": "view from a bike", "url": "../../assets/images/bike-2.jpg" },
    { "id": 23, "category": "bike", "caption": "view from a bike", "url": "../../assets/images/bike-3.jpg" },
    { "id": 24, "category": "bike", "caption": "view from a bike", "url": "../../assets/images/bike-4.jpg" },
    { "id": 25, "category": "tree", "caption": "view from a tree", "url": "../../assets/images/tree-1.jpg" },
    { "id": 26, "category": "tree", "caption": "view from a tree", "url": "../../assets/images/tree-2.jpg" },
    { "id": 27, "category": "tree", "caption": "view from a tree", "url": "../../assets/images/tree-3.jpg" },
    { "id": 28, "category": "tree", "caption": "view from a tree", "url": "../../assets/images/tree-4.jpg" },
    { "id": 29, "category": "animal", "caption": "view from a animal", "url": "../../assets/images/animal1.jpg" },
    { "id": 30, "category": "animal", "caption": "view from a animal", "url": "../../assets/images/animal2.jpg" },
    { "id": 31, "category": "animal", "caption": "view from a animal", "url": "../../assets/images/animal3.jpg" },
    { "id": 32, "category": "animal", "caption": "view from a animal", "url": "../../assets/images/animal4.jpg" },
    { "id": 33, "category": "animal", "caption": "view from a animal", "url": "../../assets/images/animal5.jpg" },
    { "id": 34, "category": "animal", "caption": "view from a animal", "url": "../../assets/images/animal6.jpg" },
    { "id": 35, "category": "animal", "caption": "view from a animal", "url": "../../assets/images/animal7.jpg" },
    { "id": 36, "category": "animal", "caption": "view from a animal", "url": "../../assets/images/animal8.jpg" },
    { "id": 37, "category": "panda", "caption": "view from a panda", "url": "../../assets/images/panda1.jpg" },
    { "id": 38, "category": "panda", "caption": "view from a panda", "url": "../../assets/images/panda2.jpg" },
    { "id": 39, "category": "panda", "caption": "view from a panda", "url": "../../assets/images/panda3.jpg" },
    { "id": 40, "category": "panda", "caption": "view from a panda", "url": "../../assets/images/panda4.jpg" },
    { "id": 41, "category": "berry", "caption": "view from a berry", "url": "../../assets/images/berry1.jpg" },
    { "id": 41, "category": "berry", "caption": "view from a berry", "url": "../../assets/images/berry2.jpg" },
    { "id": 43, "category": "berry", "caption": "view from a berry", "url": "../../assets/images/berry3.jpg" },
    { "id": 44, "category": "berry", "caption": "view from a berry", "url": "../../assets/images/berry4.jpg" },
    { "id": 45, "category": "solar", "caption": "view from a solar", "url": "../../assets/images/solar1.jpg" },
    { "id": 46, "category": "solar", "caption": "view from a solar", "url": "../../assets/images/solar2.jpg" },
    { "id": 47, "category": "solar", "caption": "view from a solar", "url": "../../assets/images/solar3.jpg" },
    { "id": 48, "category": "solar", "caption": "view from a solar", "url": "../../assets/images/solar4.jpg" },
    { "id": 49, "category": "solar", "caption": "view from a solar", "url": "../../assets/images/solar5.jpg" },
    { "id": 50, "category": "solar", "caption": "view from a solar", "url": "../../assets/images/solar6.jpg" },
    { "id": 51, "category": "solar", "caption": "view from a solar", "url": "../../assets/images/solar7.jpg" },
    { "id": 52, "category": "solar", "caption": "view from a solar", "url": "../../assets/images/solar8.jpg" },
    { "id": 53, "category": "solar", "caption": "view from a solar", "url": "../../assets/images/solar9.jpg" },

]