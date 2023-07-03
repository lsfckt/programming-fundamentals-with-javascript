function extractFile(filePath) {

    let splited = filePath.split('\\');
    let lastString = splited.pop()

    let lastIndex = lastString.lastIndexOf('.');
    let name = lastString.substring(0, lastIndex);
    let ext = lastString.substring(lastIndex + 1);

    console.log(`File name: ${name}\nFile extension: ${ext}`);

}
extractFile('C:\\Internal\\training-internal\\Template.pptx');