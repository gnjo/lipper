# lipper
for markdown pre code 
# dev
https://codepen.io/gnjo/pen/Xwopow?editors=1010
# usage
~~~
let li=lipper('```'); //tag ```
li.lex(str).ret //return result 
li.lex(str).get(line) //active line the inner tag
~~~
result
~~~
{
  "sline": 65,
  "eline": 92,
  "head": "```js",
  "tail": "```",
  "body": "let getmode=(mode)=>{\n if(/^javascript|^js/.test(mode))return 'js'\n if(/^pug/.test(mode))return 'pug'\n if(/^text\\/x-scss/.test(mode))return 'scss'\n if(/^css/.test(mode))return 'css'\n return void 0;\n}\nlet getmessage=(d)=>{\n  let m=(d.error)?d.message:JSON.stringify(d,null,'  ')\n  if((!d.error)&&d.mode==='pug') m=d.obj.html.trim()\n  if((!d.error)&&d.mode==='js') m=d.message\n  if((!d.error)&&d.mode==='scss') m=d.obj.text\n  if((!d.error)&&d.mode==='css') m=d.code\n  return m; \n}\n\ncodeable('.ed',(el,obj)=>{\n let mode=getmode(el.dataset.mode)\n ,code=el.dataset.text\n ,caller=(d)=>{ \n  //console.log(d)\n  fn.q('.con').textContent=getmessage(d)\n }\n if(mode) ec(code,mode,caller)\n})\n",
  "str": "```js\nlet getmode=(mode)=>{\n if(/^javascript|^js/.test(mode))return 'js'\n if(/^pug/.test(mode))return 'pug'\n if(/^text\\/x-scss/.test(mode))return 'scss'\n if(/^css/.test(mode))return 'css'\n return void 0;\n}\nlet getmessage=(d)=>{\n  let m=(d.error)?d.message:JSON.stringify(d,null,'  ')\n  if((!d.error)&&d.mode==='pug') m=d.obj.html.trim()\n  if((!d.error)&&d.mode==='js') m=d.message\n  if((!d.error)&&d.mode==='scss') m=d.obj.text\n  if((!d.error)&&d.mode==='css') m=d.code\n  return m; \n}\n\ncodeable('.ed',(el,obj)=>{\n let mode=getmode(el.dataset.mode)\n ,code=el.dataset.text\n ,caller=(d)=>{ \n  //console.log(d)\n  fn.q('.con').textContent=getmessage(d)\n }\n if(mode) ec(code,mode,caller)\n})\n\n```",
  "tag": "```",
  "param": "js"
}
~~~
