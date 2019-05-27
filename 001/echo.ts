
function echo(log:string):number {
  console.log(log);
  return 123;
}

echo("log");


function woo(target:any) {
  console.log('============');
  console.log(target);
}

@woo
class log {

}

new log();