System.register([], function (_export) {
    'use strict';

    return {
        setters: [],
        execute: function () {
            $(function () {
                function toggleNavItem($item) {
                    if ($item.hasClass('uk-active')) {
                        $item.removeClass('uk-active');
                    } else {
                        $item.addClass('uk-active');
                    }
                }

                $('#whiteboardBtn').click(function () {
                    toggleNavItem($(this).parent());
                    $('#whiteboardWrapper').slideToggle();
                });

                $('#newTab').click(function () {
                    var $this = $(this);
                    var tabName;

                    UIkit.modal.prompt("輸入標籤名稱：", tabName, function (value) {
                        if (value === '') {
                            return;
                        }
                        $this.removeClass('uk-active');
                        console.log($this);
                        $this.before('<li class="uk-active"><a>' + value + '</a></li>');
                    }, { labels: { Ok: "確認", Cancel: "取消" } });
                });
            });
        }
    };
});