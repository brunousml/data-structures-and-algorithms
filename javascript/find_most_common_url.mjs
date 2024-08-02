/*

For this question, you are given a log file from a simple web server. Each line in the log file contains a URL and nothing else. Your job is to write code that will fetch/download the log file from the internet, process it, and output the most popular URL in the file. You do not need to normalize the URLs in the log files.

Use the following sample log files:

logfile1 = "https://public.karat.io/content/urls2.txt" -> the most common URL is http://www.example.com (with 1170 occurrences)
logfile2 = "https://public.karat.io/content/q015/single_url.txt" -> the result is http://www.example.com (1 occurrence)

*/


// Given the url when getData then it returns my response json body
// Given the url when getData got wrong then prints error out
// Given the url when getData receive a http status differnt from 200 then prints server error out
async function getData(url) {
    try {
        const res = await fetch(url)
        if(res.ok){
            // console.log(await res.text())
            const data = await res.text()

            // create a list and sort it
            const listOfUrls = data.split('\n')
            listOfUrls.sort()

            // removes blank strings
            return listOfUrls.filter(n=>n)
        } else {
            console.log(`Server Error:`, res.json())
        }

    } catch (error) {
        console.log(error)
    }
}

//
async function theMostCommonUrlUsingLoopsAndSortFunction(url) {

    // Get Data
    const data = await getData(url)

    // console.log(listOfUrls)

    let count,
        max = 0,
        el
    for (let i = 0; i < data.length; i++) {
        if(!data[i])
            continue

        if(data[i] === data[i-1]) {
            count++
        } else {
            count = 1
        }
        // console.log('count', count)
        // console.log('max', max)
        // console.log('el', el)
        // console.log('current', listOfUrls[i])
        // console.log('\n')

        if(count > max) {
            max = count
            el = data[i]
        } else if(count == max && el === undefined) {
            el = data[i]
        }
    }

    return el.trim()
}



async function theMostCommonUrlUsingObject(url) {
    const data = await getData(url)
    const obj = {}

    let el,
        max = 0

    for(let i = 0; i < data.length; i++) {
        if(!obj[data[i]]) obj[data[i]] = 1
        else obj[data[i]]++
        // console.log('current', data[i])
        // console.log('obj[current]', obj[data[i]])
    }

    for(const i in obj) {
        if(max < obj[i]) {
            max = obj[i]
            el = i
        }
    }

    // console.log('data', data)
    // console.log('obj', obj)
    console.log('el', el)
    // console.log('\n')

    return el.trim()

}

async function theMostCommonUrlUsingMap(url) {
    const data = await getData(url)
    let result = new Map()

    // console.log(data)

    for(const i in data) {
        // console.log('current', data[i])
        // console.log('mapped', result.get(data[i]))
        if(!result.get(data[i])) result.set(data[i], 1)
        else result.set(data[i], result.get(data[i]) + 1)
        // console.log('current', data[i])
        // console.log('result[current]', result.get(data[i]) + 1)
    }

    let max = 0, el
    result.forEach((val, key, map) => {
        if(max < val) {
            max = val
            el = key
        }
    })

    // console.log('data', data)
    // console.log('result', result)
    // console.log('el', el)
    // console.log('\n')

    return el.trim()

}

async function theMostCommonUrlUsingFilterAndReduce(url) {
    const data = await getData(url)

    const reduceMethod = (previous, current) =>
        data.filter(el => el === current).length
        >
        data.filter(el => el === previous).length
            ?
            current : previous

    const result = Array.from(new Set(data)).reduce(reduceMethod)

    return result.trim()
}

async function theMostCommonUrlUsingReduceAndMap(url) {
    const data = await getData(url)

    const frequencyMap = data.reduce((acc, curr) => {
        // console.log(acc)
        acc[curr] = (acc[curr] || 0) + 1
        return acc
    }, {})
    // console.log(frequencyMap)

    let result, max=0

    for(const [el, count] of Object.entries(frequencyMap)) {
        if(count > max) {
            max = count
            result = el
        }
    }

    // console.log(result)
    return result.trim()
}

const _ = require('lodash')

async function theMostCommonUrlUsingLoadsh(url) {
    const data = await getData(url)

    let freq = _.countBy(data)
    return _.maxBy(Object.keys(freq), o => freq[o]).trim()
}

// ARRANGE
const url1 = `https://public.karat.io/content/urls2.txt`;
const url2 = `https://public.karat.io/content/q015/single_url.txt`

const assertTest = res => console.log(res, `\n test passed? ${res == 'http://www.example.com'} \n`)


// ACT & ASSERT

// WHEN using Sort and Loops
// Given the url1 then I need to find the http://www.example.com
theMostCommonUrlUsingLoopsAndSortFunction(url1).then(assertTest)

// Given the url2 then I need to find the http://www.example.com
theMostCommonUrlUsingLoopsAndSortFunction(url2).then(assertTest)

// WHEN using Object
// Given the url1 then I need to find the http://www.example.com
theMostCommonUrlUsingObject(url1).then(assertTest)

// Given the url2 then I need to find the http://www.example.com
theMostCommonUrlUsingObject(url2).then(assertTest)

// WHEN using Map
// Given the url1 then I need to find the http://www.example.com
theMostCommonUrlUsingMap(url1).then(assertTest)

// Given the url2 then I need to find the http://www.example.com
theMostCommonUrlUsingObject(url2).then(assertTest)

// WHEN using Filter and Reduce
// Given the url1 then I need to find the http://www.example.com
theMostCommonUrlUsingFilterAndReduce(url1).then(assertTest)

// Given the url2 then I need to find the http://www.example.com
theMostCommonUrlUsingObject(url2).then(assertTest)

// WHEN using Reduce and Map
// Given the url1 then I need to find the http://www.example.com
theMostCommonUrlUsingReduceAndMap(url1).then(assertTest)

// Given the url2 then I need to find the http://www.example.com
theMostCommonUrlUsingReduceAndMap(url2).then(assertTest)

// WHEN using Loadash
// Given the url1 then I need to find the http://www.example.com
theMostCommonUrlUsingLoadsh(url1).then(assertTest)

// Given the url2 then I need to find the http://www.example.com
theMostCommonUrlUsingLoadsh(url2).then(assertTest)


