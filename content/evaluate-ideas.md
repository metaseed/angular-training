<!-- .slide: data-background="./slide/images/background.jpg" -->
<!-- .slide: id="evaluate-ideas" -->

# Angular Advanced

## Evaluate Ideas Online

---

* [Typescript PlayGround](http://www.typescriptlang.org/play/index.html): trying typescript features online

* use Plunker to evaluate Angular online

  * [Quick Start](https://embed.plnkr.co/?show=preview&show=app%2Fapp.component.ts): the template as a start point

---

## Evaluate Offline

* Chrome Developer Tools as a utility to evaluate javascript.
  * <kbd>F12</kbd> to launch the tool

* QuickStart

```bash
git clone https://github.com/angular/quickstart.git quickstart
cd quickstart
npm install
npm start
```

* Using angular-cli:
  * `ng n project-name`

## Why Offline

* you can't ship your app in plunker
* you aren't always online when writing code
* transpile TypeScript in the browser is slow
* the type support, refactoring, and code completion only work in your local IDE