function selectionSort(arr: number[], order: 'asc' | 'desc'): number[] {
  /**
   * const testArr = [5, 2, 9, 1, 5, 6];
   * 需求 从小到大 升序asc 降序desc
   * 返回一个新数组不改变原数组
   *
   * 实现思路
   * 两层循环嵌套
   * 未排序数组的头一个值和剩余未排序数组的值比较
   * 记住最大或者最小值得索引
   * 执行头一个值和最小值的互换操作
   */
  const newArr: number[] = arr.slice()
  for (let i = 0; i < newArr.length; i++) {
    let index = i
    for (let j = i + 1; j < newArr.length; j++) {
      // 第一轮循环早到最小值 记住它的索引, 然后和index为0的值互换
      if (order === 'asc') {
        if (newArr[j] < newArr[index]) {
          index = j
        }
      } else {
        if (newArr[j] > newArr[index]) {
          index = j
        }
      }
    }
    // 执行互换工作
    if (i !== index) [newArr[i], newArr[index]] = [newArr[index], newArr[i]]
  }

  return newArr
}

const testArr = [5, 2, 9, 1, 1, 5, 6]
const newArr = selectionSort(testArr, 'desc')
console.log(newArr)
