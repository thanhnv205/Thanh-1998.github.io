$(document).ready(function() {

    $('.item-trip label').on('click', function() {
        $(this).parents('.item-trip').toggleClass('active');

        if ($('.item-trip').hasClass('active')) {
            $('.item-trip').removeClass('active');
            $(this).parents('.item-trip').toggleClass('active');
        }
    });

    $('.toggle').on('click', function() {
        $(this).toggleClass('active');
        $(this).parents('body').find('.customer-first').toggleClass('hide_icon');
        $('.header-mid').toggleClass('active');
        $('.overlay').toggleClass('active');
    });

    $('.overlay').click(function() {
        $('.toggle').removeClass('active');
        $('.header-mid').removeClass('active');
        $(this).removeClass('active');
        $(this).parents('body').find('.customer-first').removeClass('hide_icon');
    });

    $('.list-sort li').on('click', function() {
        $(this).parents('.list-sort').toggleClass('active');
    });


    $('.sub-sort li').click(function() {
        let text = $(this).html();
        $(this).parents('.list-sort').find('.item-parent').html(text);
    });


    let clickTrip = document.querySelector('.customer-first'),
        tripOne = $('.customer-first'),
        tripTwo = $('.customer-second');
    if (clickTrip) {
        clickTrip.addEventListener('click', function(e) {
            if (e.offsetX > clickTrip.offsetWidth) {
                clickTrip.classList.add('change');
                let name1 = tripOne.find('.name-city').html(),
                    name2 = tripTwo.find('.name-city').html(),
                    des1 = tripOne.find('.des-city').html(),
                    des2 = tripTwo.find('.des-city').html();

                tripOne.find('.name-city').html(name2);
                tripTwo.find('.name-city').html(name1);
                tripOne.find('.des-city').html(des2);
                tripTwo.find('.des-city').html(des1);
            }
        });
    }


    $('.title-describe-item').click(function() {
        if (!$(this).hasClass('active')) {
            let contentId = $(this).attr('id').replace('cap', 'content');
            $('.title-describe-item').removeClass('active');
            $(this).addClass('active');
            $('.tab-des-detail').hide();
            $('#' + contentId).fadeIn();
            console.log(contentId);
        }
    });

    $('.see-more').click(function() {
        $(this).parents('.main-detail-booking').toggleClass('active');
    });

    $('.filter-item').on('click', function() {
        $(this).toggleClass('active');
        if ($('.filter-item').hasClass('active')) {
            $('.filter-item').removeClass('active')
            $(this).toggleClass('active');
        };

    });
    $('.sub-filter-item').click(function() {
        let text = $(this).html();
        $(this).parents('.filter-item').find('.item-parent').html(text);
    });



    /* choose a booking date */
    var calIn = $("#departure").datepicker({ disabled: false, firstDay: 0, altField: "#check-departure", altFormat: 'dd/mm/yy', minDate: 0, onSelect: checkCalendarDates, dateFormat: 'dd/mm/yy' });
    calIn.datepicker('setDate', new Date());

    var calOut = $("#return").datepicker({ disabled: false, firstDay: 0, altField: "#return", altFormat: 'dd/mm/yy', minDate: 1, onSelect: checkCalendarDates, dateFormat: 'dd/mm/yy' });
    calOut.datepicker('setDate', new Date());

    function checkCalendarDates(date, datePickerO) {
        var dateIn = calIn.datepicker("getDate");
        var dateOut = calOut.datepicker("getDate");

        if (dateIn >= dateOut && calIn.attr("id") === datePickerO.id)
            calOut.datepicker('setDate', new Date(dateIn.getTime() + (24 * 60 * 60 * 1000)));

        if (dateOut <= dateIn && calOut.attr("id") === datePickerO.id)
            calIn.datepicker('setDate', new Date(dateOut.getTime() - (24 * 60 * 60 * 1000)));
    }
});