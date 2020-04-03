const america = '美国'
const OR = '俄勒冈州'
const WA = '华盛顿州'

// Given list of dates of occurences get most recent occurence or return none
const getMostRecentItem = (dateList) => {
    const recent = dateList ? Object.values(dateList).slice(-1)[0] : 0
    const item = recent ? recent : 0
    return item
}

const processState = (state) => {
    delete state['ENGLISH']
    delete state['confirmedCount']
    delete state['curedCount']
    delete state['deadCount']

    const processed = Object.values(state).map(county => {
        const { ENGLISH, confirmedCount, curedCount, deadCount } = county

        const confirmedCountRecent = getMostRecentItem(confirmedCount)
        const curedCountRecent = getMostRecentItem(curedCount)
        const deadCountRecent = getMostRecentItem(deadCount)

        const processedCounty = Object.assign({}, {
            ENGLISH,
            confirmedCount: confirmedCountRecent,
            curedCount: curedCountRecent,
            deadCount: deadCountRecent
        })

        return processedCounty
    })
    return processed
}

export const processData = (json) => {
    const oregonData = json[america][OR]
    const washingtonData = json[america][WA]
    const dataStates = [oregonData, washingtonData]
    const processedOregonData = processState(oregonData)
    console.log(processedOregonData)
    return processedOregonData
}