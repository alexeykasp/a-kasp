document.addEventListener('DOMContentLoaded', () => {
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', (event) => {
            event.stopPropagation();
            const content = header.nextElementSibling;
            const isOpen = content.style.maxHeight;

            document.querySelectorAll('.accordion-content').forEach(content => {
                content.style.maxHeight = null;
                content.style.padding = null;
            });

            if (!isOpen) {
                content.style.maxHeight = content.scrollHeight + 'px';
                content.style.padding = '10px 20px';
            }
        });
    });

    document.addEventListener('click', () => {
        document.querySelectorAll('.accordion-content').forEach(content => {
            content.style.maxHeight = null;
            content.style.padding = null;
        });
    });
});