System.register(['firepad.js'], function (_export) {
    'use strict';

    var applyFirepad, addCodepadToList, getAllCodepad;
    return {
        setters: [function (_firepadJs) {
            applyFirepad = _firepadJs.applyFirepad;
            addCodepadToList = _firepadJs.addCodepadToList;
            getAllCodepad = _firepadJs.getAllCodepad;
        }],
        execute: function () {

            $(function () {
                var $editorTabs = $('#editorTabs');
                var $defaultTab = $editorTabs.find('.uk-active'),
                    $currentTab = $defaultTab;

                function undoTabStyle($active, $prev) {
                    if ($prev === false) {
                        $prev = $defaultTab;
                    }
                    if ($prev.hasClass('uk-active')) {
                        $prev = $currentTab;
                    }
                    $prev.addClass('uk-active');
                    $active.removeClass('uk-active');
                    return $prev;
                }

                function loadAndInitTabs() {
                    getAllCodepad(function (data) {
                        for (var key in data) {
                            $('#newTab').before('<li><a>' + key + '</a></li>');
                        }
                        $editorTabs.find('li:first-child').addClass('uk-active');
                    });
                }

                $editorTabs.on('change.uk.tab', function (e, $active, $prev) {
                    if (!$active.hasClass('new-tab')) {
                        $currentTab = $prev;
                        applyFirepad($active.children('a').text());
                        return;
                    }
                    $prev = undoTabStyle($active, $prev);

                    UIkit.modal.prompt("輸入標籤名稱：", null, function (value) {
                        if (value === '') {
                            return;
                        }
                        applyFirepad(value);
                        addCodepadToList(value);
                        $prev.removeClass('uk-active');
                        $('#newTab').before('<li class="uk-active"><a>' + value + '</a></li>');
                    }, { labels: { Ok: "確認", Cancel: "取消" } });
                });

                loadAndInitTabs();
            });
        }
    };
});