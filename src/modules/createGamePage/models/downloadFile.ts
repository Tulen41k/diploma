export function downloadFile(text: string, filename: string) {
    const blob = new Blob([text], {type: 'text/plain'});

    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = filename;

    document.body.appendChild(a);
    a.click();

    URL.revokeObjectURL(url);

    a.remove();
}