(function(jQuery,undefined){jQuery(window).ready(function(){if('undefined'!==typeof tdcAdminIFrameUI){var $liveIframe=tdcAdminIFrameUI.getLiveIframe();if($liveIframe.length){$liveIframe.load(function(){$liveIframe.contents().find('body').append('<textarea class="tdw-css-writer-editor" style="display: none"></textarea>');});}}});})(jQuery);