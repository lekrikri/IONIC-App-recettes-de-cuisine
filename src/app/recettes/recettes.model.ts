import { Produits } from './produits.model';

export interface Recettes {
    id: string;
    title: string;
    imageUrl: string;
    ingredients: Produits[];
    desc: string;

}
