import list from './list.mjs'

function getMaps(name) {
  return list.filter((item) => item.name.toLowerCase().includes(name.toLowerCase()))
}

const results = getMaps(process.argv[2])
const items = results.map((it) => ({
  title: `Open Gaardian Map for "${it.name}"`,
  arg: it.href,
}))

// if (!items.length) {
items.push({
  title: `Search for "aardwolf ${process.argv[2]} map" on Google`,
  arg: `https://www.google.com/search?q=aardwolf+${process.argv[2]}+map`,
})
// }

console.log(JSON.stringify({ items }))
