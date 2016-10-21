function run() {
  let input = document.getElementById("input")
  let output = document.getElementById("output")


  output.textContent = he.encode(input.value, {
    'useNamedReferences': true
  });
}

document.getElementById("input").addEventListener("input", run)

run()