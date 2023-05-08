function cone(radius, height) {

    let volumeOfCone = (1 / 3) * Math.PI * Math.pow(radius, 2) * height;
    let slantHeightCone = Math.sqrt(radius ** 2 + height ** 2)
    let lateralSurfaceArea = Math.PI * radius * slantHeightCone;
    let baseSurfaceArea = Math.PI * (radius ** 2);
    let totalSurfaceArea = lateralSurfaceArea + baseSurfaceArea;

    console.log(`volume = ${volumeOfCone.toFixed(4)}`);
    console.log(`area = ${totalSurfaceArea.toFixed(4)}`);

}
cone(3, 5)