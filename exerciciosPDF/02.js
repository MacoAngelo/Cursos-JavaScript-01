function classificaTriangulo(ladoA, ladoB, ladoC) {
    if (ladoA === ladoB && ladoB === ladoC) {
        console.log('Triângulo Equilátero')
    } else if (ladoA === ladoB || ladoB === ladoC || ladoC === ladoA) {
        console.log('Triângulo Isósceles')
    } else {
        console.log('Triângulo Escaleno')
    }
}


classificaTriangulo(10, 10, 10);
classificaTriangulo(10, 10, 0);
classificaTriangulo(10, 0, 10);
classificaTriangulo(0, 10, 10);
classificaTriangulo(8, 12, 10);