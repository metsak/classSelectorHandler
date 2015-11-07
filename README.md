# classSelectorHandler

### Plugin to handle multiple CSS class toggles on multiple elements

Simple way to handle click event on multiple CSS class selectors. No plugins, no dependencies only vanilla Javascript.

#### Usage

1. Link the script file.

```<script src="selectorHandler.js"></script>```

2. Init the object with container and elements object arguments.

```
<script>
  var selectorHandler = new SelectorHandler('.container', {
    myElememt: 'classOnClicke1',
    mySecondElement: 'classOnclick2'
  });
</script>
```

#### Browser compatibility
* IE 10+
* EDGE Yes 
* Chome Yes
* Firefox Yes
* Opera 11.5
* Safari 5.1