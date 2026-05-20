
const input = [
    [ 1876, "theguarantors.com"],
    [ 9002, "mail.google.com"],
    [ 2356, "maps.google.com"]
]

const output = [
    {"theguarantors.com": 1876 ,
        "maps.google.com": 2356,
        "mail.google.com": 9002,
        "google.com": 11358,
        "com": 13234}
]


function countPair(data) {
    const result = {}

    data.forEach((el) => {
        console.log(el[1])

        const subdomains = el[1]
        result[el[1]] = el[0]

        let sdList = subdomains.split('.')
        sdList.forEach((item, k) => {
            if(k != 0) {
                console.log(item, k)
                const currentItem = item != 'com' ? `${item}.com` : item
                console.log(currentItem)
                if(result[currentItem] == undefined) result[currentItem] = el[0]
                else result[currentItem] = result[currentItem] + el[0]
            }
        })
    })


    return [Object.keys(result).sort().reverse().reduce(
        (obj, key) => {
            obj[key] = result[key];
            return obj;
        },
        {}
    )]
}

const testResult = countPair(input)
console.log('count pairs success: ', testResult === output, testResult, output)
