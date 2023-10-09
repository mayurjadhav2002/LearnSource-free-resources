const watchdog = new CKSource.EditorWatchdog();

window.watchdog = watchdog;

watchdog.setCreator( ( element, config ) => {
	return CKSource.Editor
		.create( element, config )
		.then( editor => {
			return editor;
		} );
} );

watchdog.setDestructor( editor => {
	return editor.destroy();
} );

watchdog.on( 'error', handleSampleError );

watchdog
	.create( document.querySelector( '.editor' ), {
		// Editor configuration.
	} )
	.catch( handleSampleError );

function handleSampleError( error ) {
	const issueUrl = 'https://github.com/ckeditor/ckeditor5/issues';

	const message = [
		'Oops, something went wrong!',
		`Please, report the following error on ${ issueUrl } with the build id "e7lga1764w6r-gcenzr13jq5u" and the error stack trace:`
	].join( '\n' );

	console.error( message );
	console.error( error );
}
