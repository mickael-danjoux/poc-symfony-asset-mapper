import './bootstrap.js';
/*
 * Welcome to your app's main JavaScript file!
 *
 * This file will be included onto the page via the importmap() Twig function,
 * which should already be in your base.html.twig.
 */
import '../styles/app.scss';
import { compareAsc, format } from "date-fns";
import  "bootstrap/dist/js/bootstrap.bundle.min.js"

console.log("---------------------------------------------------");
console.log('Node package example (date-fns): ');
console.log(format(new Date(), 'P'));
console.log("---------------------------------------------------");


console.log('This log comes from assets/app.js - welcome to AssetMapper! 🎉');
