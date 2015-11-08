# classSelectorHandler

### Plugin to handle multiple CSS class toggles on multiple elements

Simple way to toggle CSS class selectors on click event. No plugins, no dependencies only vanilla Javascript.

We create key/value type of wrapper where key represents the element and value is the CSS class selector which will be added to the element when click event occurs. Javascript doesn't have arrays with named indexes (associative arrays) we use Javascripts Object literal syntax to declare key/value pairs.

#### Usage

1. Link the script file.

```<script src="selectorHandler.js"></script>```

2. Init the object with container and elements object arguments. Note: Object properties can't start with dot (.).
```
<script>
  var selectorHandler = new SelectorHandler('.container', {
    myElememt: 'classOnClicke1',
    mySecondElement: 'classOnclick2',
    myThirdelement: 'active',
    myFourthElement: 'green-bg',
    justAnotherelement: 'margin-top'
    random_class_name: 'clicked'
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