(function(window, $) {
    'use strict';

    $(function () {
        $('#new-todo').on('keypress', function (event) {
            var $this = $(this),
                todo = $(this).val().trim();

            if (event.which !== 13) {
                return;
            }
            if (todo === '') {
                return;
            }
            $('#todo-list').append([
                  '<li>'
                ,     '<div class="view">'
                ,         '<input class="toggle" type="checkbox">'
                ,         '<label>' + todo + '</label>'
                ,         '<button class="destroy"></button>'
                ,     '</div>'
                ,     '<input class="edit" value="' + todo + '">'
                , '</li>'
            ].join(''));

            $('#todo-count').html(
                $('#todo-count').html().replace(/\d+/, function (n) {
                    return +n + 1;
                })
            );

            $this.val('');
        });

    });
})(window, jQuery);
