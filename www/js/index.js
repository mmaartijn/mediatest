var media;

function createMedia(){
    return new Media('myFile.wav', 
        function(){ 
            //alert('success!');
        }, function(err){
            alert('err');
            alert(err.message); 
        }
    );
};

$(document).ready(function(){
    $('button').on('tap', function(e){
        $('#txtLastButton').text($(this).text());
        
        switch ($(this).attr('id'))
        {
            case 'btnStart':
                startRecording();
                break;
            case 'btnStop':
                stopRecording();
                break;
            case 'btnPlay':
                playRecordedFile();
                break;
            case 'btnPause':
                playRecordedFile();
                break;
        }
    });
});

function startRecording(){
    $('#btnStop').prop('disabled', false);
    $('#btnStart').prop('disabled', true);
    media = createMedia();
    media.startRecord();
}

function stopRecording(){
    $('#btnStop').prop('disabled', true);
    $('#btnStart').prop('disabled', false);
    $('#btnPlay').prop('disabled', false);

    if(media){
        media.stopRecord();
        media.release();
        media = undefined;
    }
}

function playRecordedFile(){
    $('#btnStart').prop('disabled', true);
    $('#btnPlay').prop('disabled', true);
    $('#btnPause').prop('disabled', false);
    media = createMedia();
    media.play();
}

function pauseRecordedFile(){
    $('#btnPayse').prop('disabled', true);
    $('#btnStart').prop('disabled', false);
    $('#btnPlay').prop('disabled', false);

    media.pause();
}