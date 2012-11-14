jquery-fbDialog
===============

Simple jQuery plug-in for creating Facebook Dialogs using Facebook JS SDK

### Usage:
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
    data-method="something-incorrect" <!-- replaced by method paramater because it's wrong -->
    data-link="http://google.com"
    data-picture="https://reward-zone.nerderylabs.com/assets/images/logo.png?nocache=1350490492"
    data-name="This is the name parameter"
    data-caption="This is the caption parameter"
    data-description="This is the description parameter">Feed Post Dialog</a>```