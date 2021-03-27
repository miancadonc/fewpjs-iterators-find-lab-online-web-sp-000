const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(objectArray){
  const winYear = objectArray.find(obj => {
    return obj.result === "W"
  })

  return (!!winYear) ? winYear.year : undefined
}