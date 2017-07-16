# Qapitalize
I was developing one of my ongoing projects. And I needed to qapitalize a text that is given by the user. Without losing time, I searched a related repository in npm. And BAM! I WAS SHOCKED!. Because there was no repository about this subject.

So, I decided to develop this super duper project. Because one of the important things in development process is to "not reuse". And we should always aim to use npm instead of writing a few lines.

# Install
    npm install qapitalize --save

# Usage
Node:
```javascript
var qapitalize = require("qapitalize");
var val = qapitalize.it("all your base are belong to us.");
console.log(val);
```

Typescript:
```javascript
import { it } from "qapitalize";
var val = it("all your base are belong to us.");
console.log(val);
```

## Development
> First of all, take a fork.

    npm run build

> Send a PR.

## Development Test
> Ensure ./lib/index.ts test lines are uncommented.

> And ensure ./dist folder contains a copy of ./lib/resource.json file.

    node ./dist/index.js