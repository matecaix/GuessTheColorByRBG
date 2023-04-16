let square = document.querySelectorAll(".square")
let span = document.querySelector("#colorDisplay")
let mensaje = document.querySelector("#message")
let h1 = document.querySelector("h1")
let resetBtn = document.querySelector("#reset")
let easyBtn = document.querySelector(".easy")
let hardBtn = document.querySelector("#hard")

let numberOfSquares = 6
let clickedColor
let pickedColor

function changeColors(colors, color)
{
  for (let i = 0; i < colors.length; i++)
  {
    square[i].style.backgroundColor = color
  }
} 
function pickColor(colors)
{
  let colorIndex = Math.floor(Math.random() * colors.length)
  return colors[colorIndex]
}
function randomColor()
{
  return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`
}
function generateRandomColors(lon)
{
  let colors = []
  for (let i = 0; i < lon; i++)
  {
    colors.push(randomColor())
  }
  return colors
}
function reset(numberOfSquares)
{
  colors = generateRandomColors(numberOfSquares)
  pickedColor = pickColor(colors)
  span.textContent = pickedColor
  for (let i = 0; i < square.length; i++)
  {
    square[i].style.backgroundColor = colors[i]
    square[i].addEventListener(
      "click", function ()
      {
        clickedColor = square[i].style.backgroundColor
        if (clickedColor != pickedColor)
        {
          mensaje.textContent = "Try Again"
          square[i].style.backgroundColor = "rgb(255 95 172 / 0%)"
        }
        else if (clickedColor == pickedColor)
        {
          mensaje.textContent = "You Won"
          changeColors(colors, pickedColor)
          h1.style.backgroundColor = pickedColor
        }
      }
    )
  }
}

reset(numberOfSquares)

resetBtn.addEventListener(
  "click",function()
  {
    reset(numberOfSquares)
  }
)
easyBtn.addEventListener("click", function()
  {
    easyBtn.classList.add("selected")
    hardBtn.classList.remove("selected")
    numberOfSquares = 3
    reset(numberOfSquares)
    for (let i = 3; i < square.length; i++)
    {
      square[i].style.backgroundColor = "rgb(255 95 172 / 0%)"
    }
  }
)
hardBtn.addEventListener("click", function()
  {
    hardBtn.classList.add("selected")
    easyBtn.classList.remove("selected")
    numberOfSquares = 6
    reset(numberOfSquares)
  }
)