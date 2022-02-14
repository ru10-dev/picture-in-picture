const videoElement = document.getElementById('video');
const button = document.getElementById('button');

//Prompt to select media stream, pass to video element, then play
async function selectMediaStream () {
    try {   
        const mediaScream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaScream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    } catch {
        //Catch Error Here
        console.log('whops error here: ', error);
    }
}

button.addEventListener('click', async() => {
    //disabled button
    button.disabled = true;
    //Start picture and picture
    await videoElement.requestPictureInPicture();
    //Reset button
    button.disabled = false;
})

//On Load

selectMediaStream();