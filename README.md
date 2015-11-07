# classSelectorHandler

### Plugin to handle multiple CSS class toggles on multiple events

#### Usage

1. Link the script file.

    <script src="selectorHandler.js"></script>

2. Init the object.

    <script>
      var selectorHandler = new SelectorHandler('.container', {
         myElement: classOnToggle1,
         mySecondElement: classOnToggle2
      });
    </script>