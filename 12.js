const arr = ["L/黄色", "S/黄色", "M/黄色", "L/红色", "S/红色", "M/红色"];

function computed() {
  let newArrOne = {};

  for(let i of arr) {
    const item = i.split('/');
    for(let j =0; j < item.length; j++) {
      newArrOne[j] = newArrOne[j] ?? new Set();
      newArrOne[j].add(item[j])
    }
  }

  console.log(newArrOne)
}

computed()
