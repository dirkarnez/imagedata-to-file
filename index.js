const width = 100;
const height = 100;
const offscreenCanvas = new OffscreenCanvas(width, height);
    const ctx = offscreenCanvas.getContext('2d');
    // Draw content onto the offscreenCanvas using ctx methods
    ctx.fillStyle = 'blue';
    ctx.fillRect(0, 0, width, height);
    offscreenCanvas.convertToBlob({
        type: 'image/jpeg',
        quality: 0.9 // Optional: specify JPEG quality (0.0 to 1.0)
    })
    .then(blob => {
        // The 'blob' variable now holds the JPEG image data as a Blob
        // You can then use this blob for various purposes, such as:
        // 1. Creating a URL for display:
        //    const imageUrl = URL.createObjectURL(blob);
        //    console.log('JPEG Image URL:', imageUrl);
        // 2. Sending it to a server:
        //    fetch('/upload-image', { method: 'POST', body: blob });
        console.log(URL.createObjectURL(blob));
    })
    .catch(error => {
        console.error('Error creating JPEG blob:', error);
    });
