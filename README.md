#  An array of arguments to pass into the native environment.


## Installation

- Create a new phonegap application with CLI [Phonegap](http://docs.phonegap.com/en/edge/guide_cli_index.md.html#The%20Command-line%20Interface) 


- Add the plugin with CLI

```bash
phonegap local plugin add https://github.com/obiddle/User-ID-Phonegap.git
```

- Add the following line of code to your `index.html 

```html
<button onclick="myPlugin.sayHello();">Say hello to your plugin!</button>
```

- Register plugin within `config.xml` of your app

```xml
<feature name="MyPlugin">
    <param name="ios-package" value="MyPlugin" />
</feature>
```



## 
Owen Biddle // [GOHUNDO](http://www.gohundo.com)

