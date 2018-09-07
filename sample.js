function splitText(text) {
  arr = []
  for (let index = 0; index < ((text.length/500) + 1); index++) {
    const element = text.substr(index * 500, 500 + (index * 500));
    console.log(element)
    console.log("----")
    arr.push(element)
  }
  console.log(arr.filter(String))
  return arr
}

a = "It’s most likely not going to be out until October, but we’ve already seen a lot of Google’s Pixel 3. A lot, a lot. And here’s a lot more. The umpteenth leak of the upcoming smartphone details just about every nook and cranny you could even want to see of the thing. In fact, there are actually competing leaks of the device this morning , one of which actually took the handset’s camera for a spin, publishing a number of those photos.It’s tough to say how much of this is controlled leaking is intentional. Ultimately, these leaks keep the product on the radar well ahead of launch, even if they do remove most or all of the surprise. Whatever the case, this thing is all over the place.In the case of the Pixel 3/Pixel 3 XL, reaction seems to be reasonably positive to everything but that massive notch up top."

splitText(a)