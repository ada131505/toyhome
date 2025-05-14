function bgm() {
    if (bgmaudio.paused) {
        bgmaudio.play();
        $("#bgm").css("background-image", "url('toyhomeimg/speaker.PNG')");
    } else {
        bgmaudio.pause();
        $("#bgm").css("background-image", "url('toyhomeimg/mute.PNG')");
    }
}

function topicmenu() {
    click.currentTime = 0;
    click.play();
    if ($("#topicbutton").css("display") == "block") {
        $("#topicmenu").css("background-color", "#ffe0e4");
        $("#topicbutton").fadeOut(100);
    } else {
        $("#topicbutton").fadeIn(100);
        $("#topicmenu").css("background-color", "#ffafb8");
    }
}

function heart() {
    click.currentTime = 0;
    click.play();
    if ($("#heartcontent").css("display") == "block") {
        $("#heart").css("background-color", "#ffe0e4");
        $("#heartcontent").fadeOut(100);
    } else {
        $("#heartcontent").fadeIn(100);
        $("#topicmenu").css("background-color", "#ffe0e4");
        $("#topicbutton").fadeOut(100);
        $("#heart").css("background-color", "#ffafb8");
    }
}

function fix() {
    click.currentTime = 0;
    click.play();
}

function buy() {
    click.currentTime = 0;
    click.play();
}

function bag() {
    click.currentTime = 0;
    click.play();
}

function heart1() {
    click.currentTime = 0;
    click.play();
}