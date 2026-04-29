( function() {
    'use strict';
    var toggle = document.querySelector( '.menu-toggle' );
    var nav    = document.querySelector( '.main-nav' );
    if ( ! toggle || ! nav ) return;

    toggle.addEventListener( 'click', function() {
        var open = nav.classList.toggle( 'is-open' );
        toggle.setAttribute( 'aria-expanded', open );
    } );

    // Close on outside click
    document.addEventListener( 'click', function( e ) {
        if ( nav.classList.contains( 'is-open' ) && ! nav.contains( e.target ) && ! toggle.contains( e.target ) ) {
            nav.classList.remove( 'is-open' );
            toggle.setAttribute( 'aria-expanded', 'false' );
        }
    } );
} )();
