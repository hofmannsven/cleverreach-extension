(
	function( $ ) {
		'use strict';

		$( cre.selector + cre.container_selector + ' form' ).on( 'submit', function() {

			var $cr_container = $( this ).closest( cre.selector + cre.container_selector );

			$.ajax( {
				url       : cre.ajaxurl,
				type      : 'POST',
				dataType  : 'JSON',
				data      : {
					action : 'cre_ajax_controller_interaction',
					nonce  : cre.nonce,
					form   : $( this ).data( 'form' ),
					list   : $( this ).data( 'list' ),
					source : $( this ).data( 'source' ),
					cr_form: $( this ).serialize()
				},
				beforeSend: function() {
					$cr_container.find( cre.selector + cre.response_selector ).remove();
					$cr_container.append( '<p class="' + cre.loading_selector + '">' + cre.loading + '</p>' );
				},
				success   : function( response ) {
					$cr_container.find( cre.selector + cre.loading_selector ).remove();
					if ( response.type === 'success' ) {
						$cr_container.append( '<p class="' + cre.response_selector + ' ' + cre.success_selector + '">' + cre.success + '</p>' );
						$cr_container.trigger('cre:success', response);
					} else {
						$cr_container.append( '<p class="' + cre.response_selector + ' ' + cre.error_selector + '">' + response.status + '</p>' );
						$cr_container.trigger('cre:error', response);
					}
				},
				error     : function(response, status, error) {
					$cr_container.find( cre.selector + cre.loading_selector ).remove();
					$cr_container.append( '<p class="' + cre.response_selector + ' ' + cre.error_selector + '">' + cre.error + '</p>' );
					$cr_container.trigger('cre:server_error', response, status, error);
				}
			} );

			return false;

		} );

	}
)( jQuery );

