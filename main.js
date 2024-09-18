function downloadFile(event) {
    event.preventDefault();
    const link = document.createElement('a');
    link.href = '../files/Rachel_Huang_Resume.pdf';
    link.download = 'Rachel_Huang_Resume';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}