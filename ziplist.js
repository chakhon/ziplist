const listOne = ['a', 'b', 'c'];
const listTwo = [1, 2, 3];

function zipList(firstList, secondList) {
  const list = [];
  for (let i = 0; i < firstList.length; i++) {
    list.push(firstList[i]);
    list.push(secondList[i]);
  }
  return list;
}
function zipListTheSimpleWay(firstList, secondList) {
  const list = _.zip(firstList, secondList);
  return _.flatten(list);
}

console.log(zipList(listOne, listTwo));
console.log(zipListTheSimpleWay(listOne, listTwo));
