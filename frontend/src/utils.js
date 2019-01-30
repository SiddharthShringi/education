// function to get data in chart.js required format

export function getData(data, year, area, gender='total'){
    function getState() {
        return data.filter(obj => (obj.year === year && obj.area === area)).map(obj => obj.region)
    }

    function getpercent() {
        return data.filter(obj => (obj.year === year && obj.area === area)).map(obj => obj[gender])
    }
    console.log(data[`${gender}`])

    return {
        labels: getState(),
        datasets: [{
            label: `Literacy Rate (${year}) (${area})`,
            data: getpercent(),
            backgroundColor: '#0b46a5'
        }]
    }
}

// function to get data in google chart format


export function getStackedData(data, years, background, gender='total') {

    function getState(year) {
        return data.filter(obj => obj.year === year).map(obj => obj.region)
    }

    function getPercent(year) {
        return data.filter(obj => obj.year === year).map(obj => obj[gender])
    }

    return {
        labels: getState(years[0]),
        datasets: years.map((value, index) => {
            return {
                label: `Literacy Rate (${value})`,
                data: getPercent(value),
                backgroundColor: background[index]
            }
        })
    }
}

