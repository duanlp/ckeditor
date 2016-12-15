
CKEDITOR.editorConfig = function( config ) {
	config.height = 300;
	config.enterMode = CKEDITOR.ENTER_BR;// 去掉<p>
	config.shiftEnterMode = CKEDITOR.ENTER_BR;// 去掉<p>
	config.skin = 'office2013';
	
	config.toolbarGroups = [
		{ name: 'document', groups: [ 'mode', 'document', 'doctools' ] },
		{ name: 'clipboard', groups: [ 'clipboard', 'undo' ] },
		{ name: 'forms', groups: [ 'forms' ] },
		{ name: 'paragraph', groups: [ 'list', 'indent', 'blocks', 'align', 'bidi', 'paragraph' ] },
		{ name: 'editing', groups: [ 'find', 'selection', 'spellchecker', 'editing' ] },
		{ name: 'insert', groups: [ 'insert' ] },
		'/',
		{ name: 'styles', groups: [ 'styles' ] },
		{ name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ] },
		{ name: 'colors', groups: [ 'colors' ] },
		
		{ name: 'others', groups: [ 'others' ] },
		{ name: 'links', groups: [ 'links' ] },
		{ name: 'about', groups: [ 'about' ] },
		{ name: 'tools', groups: [ 'tools' ] }
	];

	config.removeButtons = 'About,Flash,Form,Checkbox,Radio,TextField,Textarea,Select,Button,ImageButton,HiddenField,NewPage,Templates,Scayt,Language,Smiley,Iframe,Save,SelectAll,CreateDiv,BidiRtl,BidiLtr,ShowBlocks';
};
