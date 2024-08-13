module.exports = (objetosParams) => {
    for (let propriedade in objetosParams) {
        if (/Id|id/.test(propriedade)) {
            objetosParams[propriedade] = Number(objetosParams[propriedade])
        }
    }

    return objetosParams
}
