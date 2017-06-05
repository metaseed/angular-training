# How to start

* install vscode-reveal extension and edit vscode config`(ctrl+,)`

```json
    // revealjs
    "revealjs.margin": 0.05,
    "revealjs.history": true,
    "revealjs.previewLinks": true,
    "revealjs.customTheme": "style",
    "revealjs.theme": "white",
    "revealjs.width": "100%",
    "revealjs.height": "100%",
    "revealjs.highlightTheme": "color-brewer",
    "revealjs.slideNumber": true,
    "revealjs.center": false,
```

control the background and id of the slide.

```html
<!-- .slide: data-background="./slide/images/background.jpg" -->
<!-- .slide: id="routing-advanced" -->
```

## Reference


## Tricks

* term definition list

```html
<dl>
  <dt>Coffee</dt>
  <dd>Black hot drink</dd>
  <dt>Milk</dt>
  <dd>White cold drink</dd>
</dl>
```

* remove node modules recursively

```bash
npm install -g rm-modules
rm-modules
```

* [markdown cheat sheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
