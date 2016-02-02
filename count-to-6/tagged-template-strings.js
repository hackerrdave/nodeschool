console.log(html`<b>${process.argv[2]} says</b>: "${process.argv[3]}"`);

function html(pieces, ...subs) {
  var result = pieces[0];

  for (var i = 0; i < subs.length; i++) {
    result += escape(subs[i]) + pieces[i + 1];
  }

  return result;
}

function escape(s) {
  return s.replace(/&/g, "&amp;")
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;")
          .replace(/'/g, "&apos;")
          .replace(/"/g, "&quot;");
}

