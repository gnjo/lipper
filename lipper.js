
;(function(root){
 let fn={}
 fn.crcTable=(function(){
  var c,crcTable = [];
  for(var n =0; n < 256; n++){
   c = n;
   for(var k =0; k < 8; k++){
    c = ((c&1) ? (0xEDB88320 ^ (c >>> 1)) : (c >>> 1));
   }
   crcTable[n] = c;
  }
  return crcTable;
 })();//early gen
 fn.crc32 = function(str,hex=true) {
  var crcTable = fn.crcTable,pad=( (d,l)=>('000000000000000000'+d).slice(-1*l))
  ,crc = 0 ^ (-1)
  ;
  for (var i = 0; i < str.length; i++ ) crc = (crc >>> 8) ^ crcTable[(crc ^ str.charCodeAt(i)) & 0xFF]
  ;
  crc = (crc ^ (-1)) >>> 0
  ;
  return (hex)?pad(crc.toString(16),8):crc
 }
 fn.deep=d=>JSON.parse(JSON.stringify(d));
 fn.clone=fn.deep
 ;
 let is={}
 is.in=(a,v,b)=>{return (Math.min(a,b)<=v&&v<=Math.max(a,b)) }

 function entry(tag){
  if(!tag)return console.log('not tag')
  var o={}
  o.tag=tag;
  o.re=new RegExp(`^${o.tag}`)
  o.re2=new RegExp(`^${o.tag}(.+)${o.tag}`)
  o.crc=fn.crc32('')
  o.ret=[]
  o.lex=(str)=>{
   let crc=fn.crc32(str)
   if(o.crc===crc)return o;
   o.crc=crc;
   let ary=str.split('\n')
   o.ret=ary.map((d,i)=>{return (o.re.test(d)&&(!o.re2.test(d)) )?i:void 0}).filter(d=>d)
   .map((d,i,a)=>{return (i%2||(!a[i+1]))?void 0:{sline:d,eline:a[i+1],head:'',tail:'',body:'',str:''}}).filter(d=>d)
   .map(d=>{
    d.head=ary[d.sline];
    d.tail=ary[d.eline];
    d.str=ary.slice(d.sline,d.eline+1).join('\n')
    d.body=ary.slice(d.sline+1,d.eline).join('\n')
    d.tag=o.tag
    d.param=d.head.replace(d.tag,'')
    return d;
   })
   return o;
  }
  o.get=(line)=>{
   let col=o.ret.filter(d=>{return is.in(d.sline,line,d.eline) }).pop()
   return (col)?fn.clone(col):void 0
  }
  return o;
 }
 root.lipper=entry;
 /*usage
 ;(async ()=>{
  let url="https://raw.githubusercontent.com/gnjo/ec/master/README.md"
  let data=await fetch(url).then(d=>d.text())
  let li=lipper('```')  
  ;
  console.log(li.lex(data).get(88))
 })(); 
 */
})(this);
