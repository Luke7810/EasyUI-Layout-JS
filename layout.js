$(function() {
    $("#nav").tree({
        onClick: function(node) {
        	console.log(node.text);
            if (node.url) {
                if ($('#tabs').tabs('exists', node.text)) {
                    $('#tabs').tabs('select', node.text);
                } else {
                    $('#tabs').tabs('add', {
                        title: node.text,
                        //iconCls: node.iconCls,
                        closable: true,
                        href: node.url
                    });
                }
            }
        }
    });
});
