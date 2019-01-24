<?php

  //text editor will not remove <span>
  function pp_override_mce_options($initArray) {
    $opts = '*[*]';
    $initArray['valid_elements'] = $opts;
    $initArray['extended_valid_elements'] = $opts;
    return $initArray;
  }
  add_filter('tiny_mce_before_init', 'pp_override_mce_options');


	function iweb_modest_youtube_player( $html, $url, $args ) {
		return str_replace( '?feature=oembed', '?rel=0&amp;showinfo=0', $html );
	}
	add_filter( 'oembed_result', 'iweb_modest_youtube_player', 10, 3 );

?>