let songInfo = [];

$(".add").click(function() {
    let songName = $(".song").val();
    let artistName = $(".artist").val();
    let songLength = $(".length").val();
    let songPic= $(".picture").val();
    let songLink = $(".link").val();

    let object = { 
        songName, 
        artistName,
        songLength,
        songPic,
        songLink
    }

    songInfo.push(object);

    $(".songList").empty();

    songInfo.forEach(function(info) {
        $(".songList").append(`
        <div> ${info.songName} </div> 
        <div> ${info.artistName} </div>
        <div> Song Length: ${info.songLength}</div>
        <div> <a href = "${info.songLink}" > Click To Hear Song </a> </div>
        `);
        
        
    });

}); 
