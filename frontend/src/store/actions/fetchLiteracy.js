export const fetchLiteracy = (literacyData) => {
    console.log(literacyData)
    return {
        type: "FETCH_LITERACY_DATA",
        data: literacyData
    }
}