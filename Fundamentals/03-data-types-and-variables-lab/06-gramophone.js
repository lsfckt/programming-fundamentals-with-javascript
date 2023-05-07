function gramophone(bandName, albumName, songName) {

    let durationInSeconds = (albumName.length * bandName.length) * songName.length / 2;
    let rotations = Math.ceil(durationInSeconds / 2.5)
    console.log(`The plate was rotated ${rotations} times.`)

}
gramophone('Rammstein', 'Sehnsucht',
'Engel')