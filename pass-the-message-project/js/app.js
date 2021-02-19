
(function() {
    // Get DOM
    const form = document.querySelector('#message-form')
    const message = document.querySelector('#message');
    const btn = document.querySelector('#SubmitBtn');
    const feedback = document.querySelector('.feedback')
    const content = document.querySelector('.message-content');

    // Events
    form.addEventListener('submit', function(e) {

        // Prevent forms default submission
        e.preventDefault()

        // 
        if (message.value === '') {
            feedback.classList.add('show')
            setTimeout(function(){
                feedback.classList.remove('show')
            }, 2000)
        } else {
            content.textContent = message.value
            message.value = ''
        }
    });
})();



