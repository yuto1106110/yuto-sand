$(document).ready(function() {
    $(".btn").click(function () {
        var link = $(".link").val();
        var format = $(".format").children("option:selected").val();
        
        // Validate input
        if (link === "" || format === undefined) {
            alert("Please enter a valid video link and select a format.");
            return;
        }

        // Call download function
        download(link, format);
    });

    function download(link, format) {
        $('.button-container')
            .html('<iframe style="height: 50px; border: none; overflow: hidden;" src="https://loader.to/api/button/?url=' + encodeURIComponent(link) + '&f=' + encodeURIComponent(format) + '"></iframe>');
    }
});
