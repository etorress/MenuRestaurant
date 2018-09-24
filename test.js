/*function parseMenu(ul, menu) {
    for (var i=0;i<menu.length;i++) {
        var li=$(ul).append('<li><a href="'+menu[i].link+'">'+menu[i].name+'</a></li>');
        if (menu[i].sub!=null) {
            var subul=$('<ul id="submenu'+menu[i].link+'"></ul>');
            $(li).append(subul);
            parseMenu($(subul), menu[i].sub);
        }
    }
}

var menu=$('#menu');
parseMenu(menu, JSON.menu);
*/

var getMenuItem = function (itemData) {
        var item = $("<li>")
            .append(
        $("<a>", {
            href: '#' + itemData.link,
            html: itemData.name
        }));
        if (itemData.sub) {
            var subList = $("<ul>");
            $.each(itemData.sub, function () {
                subList.append(getMenuItem(this));
            });
            item.append(subList);
        }
        return item;
    };

    var $menu = $("#menu")
    $.each(data.menu, function () {
        $menu.append(
            getMenuItem(this)
        );
    });
    $menu.menu();
