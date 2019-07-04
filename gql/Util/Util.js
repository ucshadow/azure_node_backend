class Util {
  static UUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      let r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

  static concatSchema(source, queries, types) {
    let s = source.split('\n');
    queries.forEach(e => {
      let arr = e.split('\n');
      arr.forEach((l, i)=> {
        if(l.trim().startsWith('type Query')) {
          let cur = i + 1;
          while(arr[cur].indexOf('}') < 0) {
            s[2] += '\n' + arr[cur] + '\n';
            cur++
          }
        }
      })
    });

    types.forEach(e => {
      s.push('\n' + e + '\n')
    });
    return s.join('\n');
  }
}

module.exports = Util;