'use strict'

let ru = {}//rumus
;(()=>{
	ru.lihat = a=>{
		console.groupCollapsed(a)
			console.trace(a)
		console.groupEnd()
		return a
	}
	ru.cla = a=>document.getElementsByClassName(a)
	ru.tambaharrele = (arr,o,pos)=>(arr.indexOf(o)<0)?arr.splice(pos,0,o):0
	//ru.hapusarrele = (arr,o)=>(arr.indexOf(o)<0)?0:arr.splice(arr.indexOf(o),1)
	ru.habisarr = arr=>arr.splice(0,arr.length)
	;{
		ru.uniqarr = a=>a.filter(fi)
		let fi = (aa,bb,cc,)=>cc.indexOf(aa) === bb
	}
	ru.adaarrele = (arr,o)=>arr.indexOf(o)>=0
	;{
		ru.arrelesama = (a,b,)=>{
			arrb = b
			return Array.isArray(a) &&
			Array.isArray(b) &&
			(a.length === b.length) &&
			a.every(ev)
		}
		let arrb
		let ev = (val, index) => val === arrb[index]
	}
	ru.acak = a=>Math.round(Math.random()*a)
	ru.rgba = (r,g,b,a,)=>`rgba(${r},${g},${b},${a})`
	ru.mod = (a,b,)=>b?((a%b)+b)%b:0
	
})()