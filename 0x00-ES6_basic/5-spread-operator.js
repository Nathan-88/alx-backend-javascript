export default function concatArrays(array1, array2, string) {
    let array3 = [...array1, ...array2, ...string];
    return array3;
}