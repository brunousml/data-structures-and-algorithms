function binary_search(_list, item) {
    let low = 0,
        high = _list.length - 1,
        mid,
        guess

    while (low <= high) {
        mid = Math.floor((low + high) / 2)
        guess = _list[mid]

        if (mid === item)
            return mid

        if(mid > item)
            high =  mid -1
        else
            low = mid + 1
    }

    return null
}

const my_list = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
console.log(binary_search(my_list, 9))
