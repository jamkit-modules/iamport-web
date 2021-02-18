document.addEventListener('DOMContentLoaded', function() {
    var cleanup_style = document.createElement('style');

    cleanup_style.innerHTML = `
        .css-p018rk-CurrentProfile,
        #unknown {
            display: none !important;
        }
    `;
    
    document.head.appendChild(cleanup_style);
});
