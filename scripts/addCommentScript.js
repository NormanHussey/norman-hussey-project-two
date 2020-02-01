$(function() {
    const $form = $('form');
    const $commentsSection = $('.comments');
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    function getDaySuffix(day) {
        let suffix;
        switch(day) {
            case 1:
            case 21:
            case 31:
                suffix = 'st';
                break;
            case 2:
            case 22:
                suffix = 'nd';
                break;
            case 3:
            case 23:
                suffix = 'rd';
                break;
            default:
                suffix = 'th';
                break;
        }
        return suffix;
    }

    $form.on('submit', function(e) {
        e.preventDefault();
        const name = $('#name').val();
        const comment = $('#comment').val();
        const currentDate = new Date();
        const year = currentDate.getFullYear();
        const monthNumber = currentDate.getMonth();
        const monthName = months[monthNumber];
        const dayOfMonth = currentDate.getDate();
        const daySuffix = getDaySuffix(dayOfMonth);
        const dayOfWeek = currentDate.getDay();
        const dayName = days[dayOfWeek];
        const newComment = `
            <div class="comment clearfix">
                <div class="imgContainer">
                    <img src="https://i.pravatar.cc/180" alt="${name}'s Avatar Photo">
                </div>
                <div class="contentContainer">
                    <p><time datetime="${year}-${monthNumber + 1}-${dayOfMonth}">${dayName} ${monthName} ${dayOfMonth}${daySuffix}, ${year}</time> by ${name}</p>
                    <p>${comment}</p>
                </div>
            </div>
        `;
        $commentsSection.append(newComment);
        $('#name').val('');
        $('#email').val('');
        $('#comment').val('');
    });

});