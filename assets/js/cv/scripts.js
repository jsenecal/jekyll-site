(function ($) {

    "use strict";

    /* ==========================================================================
     ieViewportFix - fixes viewport problem in IE 10 SnapMode and IE Mobile 10
     ========================================================================== */

    function ieViewportFix() {

        var msViewportStyle = document.createElement("style");

        msViewportStyle.appendChild(
            document.createTextNode(
                "@-ms-viewport { width: device-width; }"
            )
        );

        if (navigator.userAgent.match(/IEMobile\/10\.0/)) {

            msViewportStyle.appendChild(
                document.createTextNode(
                    "@-ms-viewport { width: auto !important; }"
                )
            );
        }

        document.getElementsByTagName("head")[0].appendChild(msViewportStyle);

    }

    /* ==========================================================================
     handleBackToTop
     ========================================================================== */

    function handleBackToTop() {
        $('#back-to-top').click(function () {
            $('html, body').animate({scrollTop: 0}, 'slow');
            return false;
        });
    }

    /* ==========================================================================
     showHidebackToTop
     ========================================================================== */

    function showHidebackToTop() {
        if ($(window).scrollTop() > $(window).height() / 2) {
            $("#back-to-top").removeClass('gone');
            $("#back-to-top").addClass('visible');
        } else {
            $("#back-to-top").removeClass('visible');
            $("#back-to-top").addClass('gone');
        }
    }

    /* ==========================================================================
     When document is ready, do
     ========================================================================== */

    $(document).ready(function () {

        ieViewportFix();
        handleBackToTop();
        showHidebackToTop();
    });

    /* ==========================================================================
     When the window is scrolled, do
     ========================================================================== */

    $(window).scroll(function () {
        showHidebackToTop();
    });
})
(window.jQuery);

// non jQuery scripts below
