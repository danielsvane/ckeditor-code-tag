CKEDITOR.plugins.add( 'codeTag', {
  icons: 'code',
  init: function( editor ) {

    var style = new CKEDITOR.style( { element: 'code' } );

    // Listen to contextual style activation.
    editor.attachStyleStateChange( style, function (state) {
      !editor.readOnly && editor.getCommand( 'wrapCode').setState(state);
    } );

    // Create the command.
    editor.addCommand( 'wrapCode', new CKEDITOR.styleCommand( style ) );

    // Register the button, if the button plugin is enabled.
    if ( editor.ui.addButton ) {
      editor.ui.addButton( 'Code', {
        label: 'Code',
        command: 'wrapCode',
        toolbar: 'insert'
      } );
    }
  }
});
