'use strict'

let editor = {}
let ed = editor
;{
	let ed = editor
	//
	let lih = ru.lihat
	lih(
`
bug:
1.	saat 
		mouse bergerak &
		g turun
	maka
		kamera teleport
`	)
	let canv = ed.canv = document.createElement('canvas')
	document.body.appendChild(canv)
	let edp = ed.panjang = canv.width = 1000
	let edt = ed.tinggi = canv.height = 600
	let cx = ed.cx = canv.getContext('2d',{willReadFrequently:true,},)
	cx.imageSmoothingEnabled = false
	
	const KIRIATAS = 0
	const KIRIBAWAH = 1
	const KANANBAWAH = 2
	
	let namaunik = 0
	let m2d = glMatrix.mat2d
	let matide = m2d.create()//identity
	let mattengah = m2d.create()
	let mathasil = m2d.create()
	let whmax = 2222
	let ttadi = 0
	let lukis = now=>{
		requestAnimationFrame(lukis)
		let dt = now-ttadi
		ttadi = now
		
		ed.canv.width = Math.max(
			edp,
			Math.min(
				innerWidth*ed.tinggi/innerHeight	,
				whmax	,
			),
		)
		ed.canv.height = Math.max(
			edt,
			Math.min(
				innerHeight*ed.panjang/innerWidth	,
				whmax	,
			),
		)
		
		m2d.translate(mattengah,matide,[
			canv.width/2	,
			canv.height/2	,
		],)
		ru.habisarr(arr_obj)
		arr_obj.push(global)
		//let bubar = 1111
		for(let naA = 0;naA<arr_obj.length;naA++){
			//if(--bubar<0){lih(arr_obj);throw 'keBABLASen'}
			
			let vaA = arr_obj[naA]
			for(let naB in vaA.children){
				let vaB = vaA.children[naB = +naB]
				vaB.parent = vaA
				arr_obj.splice(naA+naB+1,0,vaB,)
			}
		}
		
		hov0 = true
		for(let naA = arr_obj.length-1;naA>=0;naA--){
			let vaA = arr_obj[naA]
			if(kenabox(vaA,matmouse,)){
				hov0 = vaA
				break
			}
		}
		for(let vaA of arr_obj){
			cx.save()
				vaA.feve(moueve(vaA),vaA,dt,)
				vaA.feve('hitung0',vaA,dt,)
				hitungmat(vaA)
			cx.restore()
		}
		for(let vaA of arr_obj){
			cx.save()
				m2d.mul(mathasil,mattengah,vaA.matglo,)
				cx.setTransform(...mathasil)
				vaA.feve('tampil',vaA,dt,)
			cx.restore()
		}
		hov1 = hov0
		//ed.coba = [hov0,hov1,tah0,tah1,kli,]
	}
	let arr_obj = []
	let bikinobj = (nama,feve,)=>{
		let o = {}
		
		o.x = 0
		o.y = 0
		o.nama = nama
		o.feve = feve
		o.matlok = m2d.create()
		o.matglo = m2d.create()
		o.parent = null
		o.children = []
		
		return o
	}
	let hitungmat = o=>{
		o.parent?
			m2d.mul(o.matglo,o.parent.matglo,o.matlok,)
		:
			m2d.copy(o.matglo,o.matlok,)
		
	}
	let fkosong = ()=>{}
	let matcam = m2d.create()
	let matmouse = m2d.create()
	let matkenahasil = m2d.create()
	let hov0 = null//hover
	let hov1 = null//hover
	let tah0 = null//tahan
	let tah1 = null//tahan
	let kli = null
	let kenabox = (o,titik,)=>{
		if(!o.hoverbox){return false}
		m2d.mul(matkenahasil,o.matglo,o.hoverbox,)
		m2d.invert(matkenahasil,matkenahasil,)
		m2d.mul(matkenahasil,matkenahasil,titik,)
		
		return (
			(matkenahasil[4] <= 1) &&
			(matkenahasil[4] >= -1) &&
			(matkenahasil[5] <= 1) &&
			(matkenahasil[5] >= -1)
		)
	}
	let moueve = o=>{//mouse event
		if(
			(hov0 === o) &&
			(hov1 !== o)
		){
			return 'datang'
		}else if(
			(hov0 !== o) &&
			(hov1 === o)
		){
			return 'pergi'
		}else if(
			(hov0 === o) &&
			(tah0 === o) &&
			(tah0 !== tah1)
		){
			return 'turun'
		}else if(
			(hov0 === o) &&
			(tah0 !== tah1)
		){
			return 'naik'
		}else if(
			(kli === o) &&
			(kli === hov0)
		){
			return 'klik'
		}
		return null
	}
	let mx//simpan mouse pos saat geser pointer lock
	let my//simpan mouse pos saat geser pointer lock
	let mxo//offsetnya
	let myo//offsetnya
	let mousemoveeve = e=>{
		if(document.pointerLockElement === canv){return}
		let mousex = ((mx = e.x)/canv.clientWidth-.5)*canv.width
		let mousey = ((my = e.y)/canv.clientHeight-.5)*canv.height
		m2d.translate(matmouse,matide,[mousex,mousey,],)
		
	}
	canv.addEventListener('mousemove',mousemoveeve,)
	canv.addEventListener('mousedown',e=>{
		tah0 = true
		for(let naA = arr_obj.length-1;naA>=0;naA--){
			let vaA = arr_obj[naA]
			if(kenabox(vaA,matmouse,)){
				tah0 = vaA
				break
			}
		}
		for(let vaA of arr_obj){
			vaA.feve(moueve(vaA),vaA,null,)
		}
		tah1 = tah0
	})
	addEventListener('mouseup',e=>{
		tah0 = null
		for(let vaA of arr_obj){
			vaA.feve(moueve(vaA),vaA,null,)
		}
		kli = tah1
		tah1 = tah0
		for(let vaA of arr_obj){
			vaA.feve(moueve(vaA),vaA,null,)
		}
		kli = null
	})
	canv.addEventListener('pointermove',e=>{
		if(document.pointerLockElement !== canv){return}
		let m = matcam
		m2d.translate(m,m,[e.movementX*2,e.movementY*2,],)
		//return 0
		if(
			(Math.abs(e.movementX)>55) &&
			(Math.abs(e.movementY)>55)
		){
			lih([e.movementX,e.movementY,])
		}
	},)
	addEventListener('wheel',e=>{
		let m = matcam
		m2d.scale(m,m,[
			2**(e.deltaY/1111),
			2**(e.deltaY/1111),
		],)
	})
	let namakey = {
		[71]:'g'	,
		[78]:'n'	,
		[80]:'p'	,
		[83]:'s'	,
		[46]:'delete'	,
	}
	let pejet = {}
	let pejeve = e=>{
		//lih(e.keyCode)
		let nk = namakey[e.keyCode]
		if(!nk){return}
		let kd = e.type === 'keydown'
		let dipejet = pejet[nk] = (!!pejet[nk] === kd)?!!pejet[nk]:+kd
		let m
		let hov0ini = (hov0 === true)?grid:hov0
		switch(nk){
			case 'g':
				if(dipejet === 1){
					lih('pejetttt g')
					canv.requestPointerLock()
				}else if(!dipejet){
					document.exitPointerLock()
				}
			break
			case 'n':
				if(dipejet === 1){
					let node = bikinobj('node_'+Date.now(),fnode,)
					let parentgroup = hov0ini.children[0]
					node.hoverbox = m2d.create()
					m = node.matlok
						m2d.invert(m,parentgroup.matglo)
						m2d.mul(m,m,matmouse,)
						m2d.translate(m,matide,[m[4],m[5],],)
					m2d.copy(node.hoverbox,ukuranhoverbox,)
					
					chi(parentgroup,node,)
					
					let nodegroup = bikinobj('node_group_'+Date.now(),fkosong,)//keluar
					chi(node,nodegroup,)
				}
			break
			case 'p':
				if(dipejet === 1){
					tahP = hov0ini
				}else if(!dipejet){//lepas
					/*if(tahP === hov0ini){//node baru
					
						let node = bikinobj('node_'+Date.now(),fnode,)
						let parentgroup = hov0ini.children[0]
						node.hoverbox = m2d.create()
						m = node.matlok
							m2d.invert(m,parentgroup.matglo)
							m2d.mul(m,m,matmouse,)
							m2d.translate(m,matide,[m[4],m[5],],)
						m2d.copy(node.hoverbox,ukuranhoverbox,)
						
						chi(parentgroup,node,)
						
						let nodegroup = bikinobj('node_group_'+Date.now(),fkosong,)//keluar
						chi(node,nodegroup,)
						
					}else */
					if(tahP !== grid){//bukan dari grid
						//tahP
						let o = tahP
						let bubar = 111
						while(o){
							if(--bubar <= 0){throw 'keBABLASen'}
							
							if(o === hov0ini){
								o = 'keluar'
								break
							}
							o = o.parent.parent
						}
						//hov0ini
						o = hov0ini
						bubar = 111
						while(o){
							if(--bubar <= 0){throw 'keBABLASen'}
							
							if(o === tahP){
								o = 'keluar'
								break
							}
							o = o.parent.parent
						}
						//lanjut
						if(o !== 'keluar'){
							let chi = tahP.parent.children
							m = tahP.matlok
							;((hov0ini === true)?grid:hov0ini).children[0].children.push(chi.splice(chi.indexOf(tahP),1,)[0])
						}
					}
					tahP = null
				}
			break
			case 's':
				if(dipejet === 1){
					tahS = hov0ini
					//sampe sini, tukar node
				}else if(!dipejet){//lepas
					
					tahS = null
				}
			break
			case 'delete':
				if(
					(dipejet === 1) &&
					(hov0ini !== grid)
				){
					let chi = hov0ini.parent.children
					chi.splice(chi.indexOf(hov0ini),1,)
				}
				//
			break
		}
	}
	let tahS = null//tukar
	let tahP = null//mencari parent
	addEventListener('keydown',pejeve,)
	addEventListener('keyup',pejeve,)
	
	//obj
	let global//INGAT!! ini jadi objek global
	ed.global = global = bikinobj('global',
		(e,o,dt,)=>{
			switch(e){
				case 'hitung0':
					m2d.invert(o.matlok,matcam,)
				break
			}
		},
	)
	let grid = bikinobj('grid',
		(e,o,dt,)=>{
			switch(e){
				case 'tampil':
					cx.lineWidth = 4
					cx.strokeStyle = 'white'
					cx.stroke(o.bentuk)
					cx.lineWidth = 9
					cx.strokeStyle = 'red'
					cx.beginPath()
					cx.moveTo(-10000,0,)
					cx.lineTo(10000,0,)
					cx.stroke()
					cx.strokeStyle = 'green'
					cx.beginPath()
					cx.moveTo(0,-10000,)
					cx.lineTo(0,10000,)
					cx.stroke()
					/*
					fpojok(e,o,dt,)
					tarikgaris(e,o,dt,)
					*/
				break
				case 'naik':
					//fpojoknaikeve(e,o,dt,)
				break
			}
		},
	)
	grid.tipe = KIRIATAS
	grid.bentuk = new Path2D()
	for(let naA = 0;naA < 10;naA++){
		let p = grid.bentuk
		let j = 1000//jarak antar garis
		let u = 10000//panjang garis, jarak ujung ke ujung
		//kanan
		p.moveTo(naA*j,-u,)
		p.lineTo(naA*j,u,)
		//kiri
		p.moveTo(-naA*j,-u,)
		p.lineTo(-naA*j,u,)
		//atas
		p.moveTo(-u,-naA*j,)
		p.lineTo(u,-naA*j,)
		//bawah
		p.moveTo(-u,naA*j,)
		p.lineTo(u,naA*j,)
	}
	
	let grid_group = bikinobj('grid_group',fkosong,)
	let UI = bikinobj('UI',
		(e,o,dt,)=>{
			switch(e){
				case 'hitung0':
					let m = o.matlok
					m2d.copy(m,matcam,)
				break
			}
		},
	)
	let menu = bikinobj('menu',fkosong,)
	let border = bikinobj('border',(e,o,dt,)=>{
		switch(e){
			case 'tampil':
				cx.fillStyle = '#00ff00'
				cx.strokeStyle = 'cyan'
				cx.lineWidth = 3
				cx.font = '22px Consolas'
				cx.strokeRect(-edp/2,-edt/2,edp,edt,)
			break
		}
	},)
	
	let mouse_pos = bikinobj('mouse_pos',(e,o,dt,)=>{
		switch(e){
			case 'hitung0':
				let m = o.matlok
				m2d.invert(m,o.parent.matglo,)
				m2d.mul(m,m,matmouse,)
			break
			case 'tampil':
				cx.fillStyle = 'white'
				cx.font = '17px Consolas'
				cx.fillText(hov0.tex??hov0.nama??hov0,16,33,)
				cx.fillStyle = 'white'
				cx.fillRect(-4,-4,8,8,)
			break
		}
	},)
	
	let tom_help = bikinobj('tom_help',
		(e,o,dt,)=>{
			let m
			switch(e){
				case 'tampil':
					let hb = o.hoverbox
					cx.fillStyle = '#ffffff33'
					cx.save()
						cx.transform(...hb)
						cx.fillRect(-1,-1,2,2,)
					cx.restore()
					cx.strokeStyle = cx.fillStyle = 'white'
					cx.lineWidth = 2
					cx.strokeRect(-hb[0],-hb[3],hb[0]*2,hb[3]*2,)
					cx.font = '22px Consolas'
					cx.fillText('?',-6.5,7,)
					cx.font = '16px Consolas'
					if(hov0 === o){
						let y = 0
						cx.fillText('Tahan G = menggerakan world'	,11	,(y++)*22+44	,)
						cx.fillText('Mouse wheel = zoom world'	,11	,(y++)*22+44	,)
						cx.fillText('P turun = pilih node untuk jadi child'	,11	,(y++)*22+44	,)
						cx.fillText('P naik = pilih node untuk jadi parent'	,11	,(y++)*22+44	,)
						cx.fillText('N turun = child baru'	,11	,(y++)*22+44	,)
					}
				break
			}
		},
	)
	tom_help.hoverbox = m2d.create()
	let m
	m = tom_help.hoverbox
		m2d.scale(m,m,[11,11,])
	tom_help.tex = 'Petunjuk'
	m = tom_help.matlok
		m2d.translate(m,m,[
			-edp/2+22	,
			-edt/2+22	,
		])
	m = null
	//children, yang atas = muncul di belakang
	let chi = (par,chi,)=>par.children.push(chi)
		chi(global,grid,)
			chi(grid,grid_group,)
		chi(global,UI,)
			chi(UI,menu,)
				chi(menu,tom_help,)
			chi(UI,mouse_pos,)
			chi(UI,border,)
	
	let fnode = (e,o,dt,)=>{
		let m
		switch(e){
			case 'hitung0':
				m = o.matlok
				if(tah0 === o){
					m2d.mul(m,matcam,matmouse,)
					m2d.translate(m,matide,[m[4]+mxo,m[5]+myo,],)
				}
				m2d.copy(o.hoverbox,ukuranhoverbox,)
				if(o.parent.parent !== grid){
					m[4] = Math.max(22,m[4],)
					m[5] = Math.max(22,m[5],)
				}
				fukurhoverbox(o)
				
			break
			case 'tampil':
				//tahS tahP bersamaan
				if(tahP && tahS){
					ed.coba = 'tahP tahS '+Math.random()
					cx.fillStyle = 'black'
				}else
				//tahP
				if(
					tahP &&
					(hov0 === o)
				){
					cx.fillStyle = '#00ff00'
					//hov0ini
					let oini = hov0
					let bubar = 111
					while(oini){
						if(--bubar <= 0){throw 'keBABLASen'}
						
						if(oini === tahP){
							cx.fillStyle = 'red'
							break
						}
						oini = oini.parent.parent
					}
				}else if(tahP === o){
					cx.fillStyle = 'blue'
				}else
				//tahS
				if(
					tahS &&
					(hov0 === o)
				){
					cx.fillStyle = '#00ff00'
					//tahS
					let oini = tahS
					let bubar = 111
					while(oini){
						if(--bubar <= 0){throw 'keBABLASen'}
						
						if(oini === hov0){
							cx.fillStyle = 'red'
							break
						}
						oini = oini.parent.parent
					}
					//hov0ini
					oini = hov0
					bubar = 111
					while(oini){
						if(--bubar <= 0){throw 'keBABLASen'}
						
						if(oini === tahS){
							cx.fillStyle = 'red'
							break
						}
						oini = oini.parent.parent
					}
					
				}else if(tahS === o){
					cx.fillStyle = 'blue'
				}else
				//lain
				if(hov0 === o){
					cx.fillStyle = '#ffffff77'
				}else{
					cx.fillStyle = '#55555577'
				}
				
				m = o.hoverbox
				cx.save()
					cx.transform(...m)
					cx.fillRect(-1,-1,2,2,)
				cx.restore()
				cx.strokeStyle =
				cx.fillStyle = 'white'
				cx.lineWidth = 6
				cx.strokeRect(0,0,m[4]*2,m[5]*2,)
				cx.fillRect(-11	,-11	,22	,22	,)
				cx.fillRect(-11	,m[5]*2-11	,22	,22	,)
				cx.fillRect(m[4]*2-11	,m[5]*2-11	,22	,22	,)
			break
			case 'turun':
				m = o.matlok
				mxo = m[4]
				myo = m[5]
				m2d.mul(m,matcam,matmouse,)
				m2d.translate(m,matide,[m[4],m[5],],)
				mxo -= m[4]
				myo -= m[5]
			break
		}
	}
	
	let ukuranhoverbox = m2d.create()
	m = ukuranhoverbox
		m2d.translate(m,m,[55,55,],)
		m2d.scale(m,m,[55,55,],)
	m = null
	let fukurhoverbox = o=>{//resize ukuran hoverbox
		while(o){
			let m = o.hoverbox
			let mp = o.parent.parent.hoverbox
			if(!mp){return}
			let x = mp[4]
			let y = mp[5]
			m2d.mul(mp,o.matlok,m,)
			m2d.translate(mp,matide,[
				Math.max(x,(mp[4]+m[4])/2+11,),
				Math.max(y,(mp[5]+m[5])/2+11,),
			],)
			m2d.scale(mp,mp,[mp[4],mp[5],],)
			
			//lanjut
			if((o = o.parent.parent) === grid){return}
		}
	}
	
	ed.lihatobj = (o,tab = '\t',)=>{
		o = o || global
		lih(tab+o.nama)
		for(let vaA of o.children){
			ed.lihatobj(vaA,tab+'|\t')
		}
	}
	
	requestAnimationFrame(lukis)
}
editor = null