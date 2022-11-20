let map = new Map([
  ["apple", "worm"],
  ["ground", "green"],
  ["head", "brain"],
]);

for (let name of map.keys()) {
  console.log(`Ключ — ${name}, значение — ${map.get(name)}`);
}
