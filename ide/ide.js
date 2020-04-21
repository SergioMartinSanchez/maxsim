// maxsim.tech


import "./jquery-3.5.0.min.js";
import "./jquery-ui.min.js";
import "./ace/ace.js";


var ide_editor = '';
var ide_footer = '<a href="https://maxsim.tech">maxsim</a><span style="float:right;margin-right:25px;">Ctrl+S = save</span>';
$("body").append('<div id="ide"><div id="ide_footer">' + ide_footer + '</div><div id="ide_editor"></div></div>');


$.get(ide_dir + "api/read?file=" + maxsim_target, function(data){
    $("#ide_editor").text(data);
    
    ide_editor = ace.edit("ide_editor");
    ace.config.set("basePath", ide_dir + "ace");
    ide_editor.setTheme("ace/theme/monokai");
    ide_editor.session.setMode("ace/mode/php");
    ide_editor.focus();
    ide_editor.navigateFileEnd();
    ide_editor.setShowPrintMargin(false);
    
    $("#ide_editor").resizable({ 
        handles: "w", 
        minWidth: 80, 
        maxWidth: $(window).width(), 
        alsoResize: "#ide_footer"
    });
    $(".ui-resizable-handle.ui-resizable-w").css("width", 50);
});


$("<link/>", {
   rel: "stylesheet",
   type: "text/css",
   href: ide_dir + "ide.css"
}).appendTo("head");

$("<link/>", {
   rel: "stylesheet",
   type: "text/css",
   href: ide_dir + "jquery-ui.min.css"
}).appendTo("head");


$("body").on("keydown", function(e) {
    if (e.keyCode == 27) {
        $("#ide").toggle();
        ide_editor.focus();
        e.preventDefault();
    } else if ($("#ide").is(":visible") == true && e.ctrlKey && e.keyCode == 83) {
        $("#ide").toggle();
        $.post(ide_dir + "api/write?file=" + maxsim_target, { code: ide_editor.getValue() }, function(data){
            location.reload();
        });
        e.preventDefault();
    }
});


