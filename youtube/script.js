<script>
    $(".btn").click(function () {
        var link = $(".link").val();
        var format = $(".format").children("option:selected").val();
        
        // download関数を呼び出す
        download(link, format);
    });

    function download(link, format) {
        // iframeを生成し、指定されたリンクとフォーマットを使用して埋め込む
        $('.button-container').html('<iframe style="height: 50px; border: none; overflow: hidden;" src="https://loader.to/api/button/?url=' + encodeURIComponent(link) + '&f=' + encodeURIComponent(format) + '"></iframe>');
    }
</script>
