jquery-fbDialog
===============

Simple jQuery plug-in for creating Facebook Dialogs using Facebook JS SDK

### Usage:

Handles fb dialog links by taking their data attributes as fb parameters

```
  @param selector string   Optional (or null / false) The selector on which to add the binding
  @param callback function Optional callback function called by FB.ui when complete (takes one parameter)
  @param method   string   Optional method for the FB.ui call (overrides data-method attribute)
    
  @return {Boolean}
```

```
  $(document||selector).fbDialog(selector, callback(response), method);
```
### Examples:
```
  $(document).fbDialog('.feed-post-dialog', function(data) {console.log(data)}, 'feed');
  $('.social-container').fbDialog('.feed-post-dialog');
  $('.feed-post-dialog').fbDialog();
  $('.feed-post-dialog').fbDialog(null, function() {console.log('callback')});
 ```
### Sample HTML:
 ```
 <a class="btn feed-post-dialog"
    data-method="something-incorrect" <!-- replaced by method parameter because it's wrong -->
    data-link="http://google.com"
    data-picture="http://nerdery.com/assets/layout/logo_nerdery.png"
    data-name="This is the name parameter"
    data-caption="This is the caption parameter"
    data-description="This is the description parameter">Feed Post Dialog</a>
```
