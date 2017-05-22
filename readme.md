* vscode config`(ctrl+,)`
```json
    "revealjs.theme": "white",
    "revealjs.width": "100%",
    "revealjs.height": "100%",
    "revealjs.highlightTheme": "color-brewer",
    "revealjs.slideNumber": true,
    "revealjs.center": false,
```
* remove node modules recursively
```bash
npm install -g rm-modules
rm-modules
```
* add before every markdown file
```config
---
customTheme: "style"
---
```