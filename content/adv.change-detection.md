<!-- .slide: data-background="./images/title-slide.jpg" -->
<!-- .slide: id="change-detection" -->
## Change Dection

# Angular Advanced

---

## History

* **Angular 1**: the framework kept a long list of watchers (one for every property bound to our templates) that needed to be checked every-time a digest cycle was started. This was called dirty checking and it was the only change detection mechanism available. Models were able to change directives, directives were able to change models, directives were able to change other directives and models were able to change other models.

* **Angular**: the flow of information is unidirectional, our code is responsible for updating the models. Angular is only responsible for reflecting those changes in the components and the DOM by means of the selected change detection strategy.

---

## Change Detection (Angular 1 vs 2)

![File Structure](./images/angular1-vs-angular2.jpg)

* Angular 1: Two-way data binding. Nodes traversed one or more times.
> 10 $digest() iterations reached. Aborting!

* Angular 2+: One-way data binding. Nodes traversed once.(root first)

---

## Angular Change Detection

[example](http://plnkr.co/edit/XvSEu0GbAEIaOxMRSgBI?p=preview)

---
* [reference](https://angular-2-training-book.rangle.io/handout/change-detection/) sfdf
https://angular-2-training-book.rangle.io/handout/advanced-angular/
https://blog.thoughtram.io/angular/2016/02/22/angular-2-change-detection-explained.html