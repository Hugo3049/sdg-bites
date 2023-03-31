loop_json();

async function loop_json() {
  const output = await fetch_api();
  console.log(output);
}

function set_html() {}

function set_classes() {}

function set_src() {}

async function fetch_api() {
  const data = await fetch("http://127.0.0.1:8000/posts");
  const output = await data.json();
  return output;
}
