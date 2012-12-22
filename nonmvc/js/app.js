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

        $('#main').on('change', 'input.toggle', function () {
            var $this = $(this),
                done = $this.is(':checked');

            if (done) {
                $this.parents('li').addClass('completed');
                $('#clear-completed').html(
                    $('#clear-completed').html().replace(/\d+/, function (n) { return +n + 1; })
                ).show();
                $('#todo-count').html(
                    $('#todo-count').html().replace(/\d+/, function (n) {
                        return n - 1;
                    })
                );
            } else {
                $this.parents('li').removeClass('completed');
                $('#clear-completed').html(
                    $('#clear-completed').html().replace(/\d+/, function (n) {
                        if (n === '1') {
                            $('#clear-completed').hide();
                        }
                        return n - 1;
                    })
                );
                $('#todo-count').html(
                    $('#todo-count').html().replace(/\d+/, function (n) {
                        return +n + 1;
                    })
                );
            }
        });

    });
})(window, jQuery);
