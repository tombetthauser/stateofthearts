let arr = [
  "collab",
  "wage",
  "you",
  "any",
  "final",
  "thoughts",
  "regarding",
  "thsurvey?",
  "good",
  "job",
]

let hash = {}

arr.forEach(ele => {
  hash[ele] ? hash[ele] = hash[ele] + 1 : hash[ele] = 1;
})

let objArr = Object.keys(hash).map(key => {
  return { name: key, value: hash[key] }
})

console.log(objArr)