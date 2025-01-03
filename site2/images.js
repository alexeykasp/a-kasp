async function loadBase64Images(jsonPath) {
    try {
        const response = await fetch(jsonPath);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        for (const [id, base64] of Object.entries(data)) {
            const imgElement = document.getElementById(id);
            if (imgElement) {
                imgElement.src = base64;
            }
        }
    } catch (error) {
        console.error('Error loading images:', error);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    loadBase64Images('images.b64.json');
});