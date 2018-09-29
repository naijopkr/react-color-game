export const createRandomColor = () => {
  const red = Math.floor(Math.random() * 256)
  const green = Math.floor(Math.random() * 256)
  const blue = Math.floor(Math.random() * 256)
  return { red, green, blue }
}

export const pickColor = (arr) => {
  const pickedColor = Math.floor(Math.random() * arr.length)
  return arr[pickedColor]
}

export const changeColor = (color) => {
  document.querySelector('.Header').style.backgroundColor = color
  document.querySelectorAll('button').forEach(btn => {
    btn.style.color = color
  })
}
