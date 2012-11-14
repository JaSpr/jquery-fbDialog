/*!
 * jQuery Facebook Dialog plug-in v0.1.0
 * https://github.com/JaSpr/jquery-fbDialog
 * Requires jQuery 1.8.2
 * Requires latest Facebook JS SDK
 *
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 */

/**
 * Usage:
 *
 * $(document||selector).fbDialog(selector, callback(response), method);
 *
 * Examples:
 * $(document).fbDialog('.feed-post-dialog', function(data) {console.log(data)}, 'feed');
 * $('.social-container').fbDialog('.feed-post-dialog');
 * $('.feed-post-dialog').fbDialog();
 * $('.feed-post-dialog').fbDialog(null, function() {console.log('callback')});
 *
 * Sample HTML:
 *
 * <a class="btn feed-post-dialog"
 *    data-method="something-incorrect" <!-- replaced by method paramater because it's wrong -->
 *    data-link="http://google.com"
 *    data-picture="https://reward-zone.nerderylabs.com/assets/images/logo.png?nocache=1350490492"
 *    data-name="This is the name parameter"
 *    data-caption="This is the caption parameter"
 *    data-description="This is the description parameter">Feed Post Dialog</a>
 */
(function( $ ){

    /**
     * Handles fb dialog links by taking their data attributes as fb parameters
     *
     * @param selector string   Optional (or null / false) The selector on which to add the binding
     * @param callback function Optional callback function (takes one parameter)
     * @param method   string   The method for the FB.ui call (optional, overrides data-method attribute)
     *
     * @return {Boolean}
     */
    $.fn.fbDialog = function(selector, callback, method) {

        // selector is optional, but must be a string
        selector = typeof(selector) === 'string' && selector !== '' ? selector : false;

        // callback is optional
        callback = typeof(callback) === 'function' ? callback : function() {};

        this.on('click', selector, function(e){
            e.preventDefault();
            var params = $(this).data();

            // method can be overridden
            params.method = method || params.method;
            FB.ui(params, callback);
        });
        return true;

    };
})( jQuery );
