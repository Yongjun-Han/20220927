console.log('test');

process.stdin.setEncoding('utf-8');

process.stdin.on('data', (data) => {
  console.time('monitor')
  console.log('방금 입력받았습니다');
  console.log('당신이 입력한 값은 혹시 이것입니까? :', data);
  console.log('지금 문자열변수에 입력받은 값을 넣었습니다.');
  console.timeEnd('monitor');
  process.exit();
})