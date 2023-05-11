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
		ed.coba = [e.movementX,e.movementY,]
		//return 0
		if(
			(Math.abs(e.movementX)>55) &&
			(Math.abs(e.movementY)>55)
		){
			lih(ed.coba)
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
		[71]:'g',
	}
	let pejet = {}
	let pejeve = e=>{
		let nk = namakey[e.keyCode]
		if(!nk){return}
		let dipejet = pejet[nk] = (e.type === 'keydown')
		switch(nk){
			case 'g':
				if(dipejet){
					canv.requestPointerLock()
				}else{
					document.exitPointerLock()
				}
			break
		}
	}
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
					//pojoktampil(e,o,dt,)
					fpojok(e,o,dt,)
					tarikgaris(e,o,dt,)
				break
				case 'naik':
					fpojoknaikeve(e,o,dt,)
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
	let pojokhoverbox = grid.hoverbox = m2d.create()
	let m
	m = pojokhoverbox
		m2d.scale(m,m,[14,14,],)
	m = null
	
	let grid_freenodes = bikinobj('grid_freenodes',fkosong,)
	let grid_linkednodes = bikinobj('grid_linkednodes',fkosong,)
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
				//cx.fillText('HHalaloo ttest '+Math.random(),0,0,)
			break
		}
	},)
	/*
	let tom_coba = bikinobj('tom_coba',
		(e,o,dt,)=>{
			switch(e){
				case 'hitung0':
					let m = o.matlok
					m2d.rotate(m,m,.01,)
				break
				case 'tampil':
					cx.fillStyle = (hov0 === o)?'red':'#00ffff44'
					cx.save()
						cx.transform(...o.hoverbox)
						cx.fillRect(-1,-1,2,2,)
					cx.restore()
					cx.fillStyle = '#00ff00'
					cx.font = '22px Consolas'
					cx.fillText(o.nama+' '+Math.random(),0,0,)
					
				break
				case 'klik':
					lih(e+' '+o.nama)
				break
			}
		},
	)
	tom_coba.hoverbox = m2d.create()
	let m = null
	m = tom_coba.matlok
			m2d.translate(m,m,[-243,110,],)
	m = tom_coba.hoverbox
		m2d.scale(m,m,[111,222,])
		m[1] = 99.96
	m = null
	
	let tom_cobalain = bikinobj('tom_cobalain',
		(e,o,dt,)=>{
			switch(e){
				case 'hitung0':
					let m = o.matlok
					m2d.rotate(m,m,.01*dt*60/1000,)
				break
				case 'tampil':
					cx.fillStyle = (hov0 === o)?'red':'#00ffff44'
					cx.save()
						cx.transform(...o.hoverbox)
						cx.fillRect(-1,-1,2,2,)
					cx.restore()
					cx.fillStyle = '#00ff00'
					cx.font = '22px Consolas'
					cx.fillText(o.nama+' '+Math.random(),0,0,)
				break
				case 'klik':
					lih(e+' '+o.nama)
				break
			}
		},
	)
	tom_cobalain.hoverbox = m2d.create()
	m2d.copy(tom_cobalain.matlok,tom_coba.matlok,)
	m2d.copy(tom_cobalain.hoverbox,tom_coba.hoverbox,)
	tom_cobalain.fmouse = tom_coba.fmouse
	*/
	let mouse_pos = bikinobj('mouse_pos',(e,o,dt,)=>{
		switch(e){
			case 'hitung0':
				let m = o.matlok
				m2d.invert(m,o.parent.matglo,)
				m2d.mul(m,m,matmouse,)
			break
			case 'tampil':
				//cx.ellipse(0,0,5,5,0,0,359.99,)
				cx.fillStyle = 'white'
				cx.font = '17px Consolas'
				//cx.fillText('mouse '+Math.random(),0,0,)
				cx.fillText(hov0.tex??hov0.nama??hov0,16,33,)
				cx.fillStyle = 'white'
				cx.fillRect(-4,-4,8,8,)
			break
		}
	},)
	/*
	let tom_geser = bikinobj('tom_geser',
		(e,o,dt,)=>{
			switch(e){
				case 'tampil':
					cx.fillStyle = '#ffff0044'
					cx.save()
						cx.transform(...o.hoverbox)
						cx.fillRect(-1,-1,2,2,)
					cx.restore()
					cx.strokeStyle = (hov0 === o)?'white':'#00aaaa'
					cx.lineWidth = 3
					cx.stroke(o.bentuk)
					cx.fill()
				break
				case 'turun':
					canv.requestPointerLock().then(lih)
				break
				case 'naik':
					document.exitPointerLock()
				break
			}
		},
	)
	tom_geser.warna = 'cyan'
	tom_geser.tex = 'Geser'
	tom_geser.hoverbox = m2d.create()
	tom_geser.bentuk = new Path2D()
	let m
	m = tom_geser.hoverbox
		m2d.scale(m,m,[22,22,])
	m = null
	let b = tom_geser.bentuk
	let ten = 17//tengsh
	let uju = 6//ujung
	b.moveTo(-ten+uju	,0+uju	,)
	b.lineTo(-ten	,0	,)
	b.lineTo(ten	,0	,)
	b.lineTo(ten-uju	,0-uju	,)
	b.moveTo(-ten+uju	,0-uju	,)
	b.lineTo(-ten	,0	,)
	b.moveTo(ten	,0	,)
	b.lineTo(ten-uju	,0+uju	,)
	b.moveTo(0+uju	,-ten+uju	,)
	b.lineTo(0	,-ten	,)
	b.lineTo(0	,ten	,)
	b.lineTo(0-uju	,ten-uju	,)
	b.moveTo(0-uju	,-ten+uju	,)
	b.lineTo(0	,-ten	,)
	b.moveTo(0	,ten	,)
	b.lineTo(0+uju	,ten-uju	,)
	*/
	let tom_bikinnode = bikinobj('tom_bikinnode',
		(e,o,dt,)=>{
			let m
			switch(e){
				case 'tampil':
					cx.fillStyle = '#ffffff33'
					cx.save()
						cx.transform(...o.hoverbox)
						cx.fillRect(-1,-1,2,2,)
					cx.restore()
					cx.strokeStyle = 'white'
					cx.lineWidth = 2
					cx.stroke(o.bentuk)
				break
				case 'klik':
					let node = bikinobj('node_'+Date.now(),fnode,)
					node.hoverbox = m2d.create()
					m = node.matlok
						m2d.translate(m,matide,[matcam[4],matcam[5],],)
					m = node.hoverbox
						m2d.translate(m,m,[55,55,],)
						m2d.scale(m,m,[55,55,],)
					m = null
					chi(grid_freenodes,node,)
					
					let kiriatas = bikinobj('kiriatas_'+Date.now(),fpojok,)//mulai
					kiriatas.hoverbox = pojokhoverbox
					kiriatas.tipe = KIRIATAS
					chi(node,kiriatas,)
					
					let kiribawah = bikinobj('kiribawah_'+Date.now(),fpojok,)//masuk
					kiribawah.hoverbox = pojokhoverbox
					kiribawah.tipe = KIRIBAWAH
					chi(node,kiribawah,)
					
					let kananbawah = bikinobj('kananbawah_'+Date.now(),fpojok,)//keluar
					kananbawah.hoverbox = pojokhoverbox
					kananbawah.tipe = KANANBAWAH
					chi(node,kananbawah,)
					
					let freenodes = bikinobj('freenodes_'+Date.now(),fkosong,)//keluar
					chi(node,freenodes,)
				break
			}
		},
	)
	let p = tom_bikinnode.bentuk = new Path2D()
	p.rect(-11,-11,22,22,)
	p.moveTo(-8,0,)
	p.lineTo(8,0,)
	p.moveTo(0,-8,)
	p.lineTo(0,8,)
	tom_bikinnode.tex = 'Bikin node'
	tom_bikinnode.hoverbox = m2d.create()
	m = tom_bikinnode.hoverbox
		m2d.scale(m,m,[11,11,])
	m = tom_bikinnode.matlok
		m2d.translate(m,m,[
			-edp/2+22	,
			-edt/2+22	,
		])
	m = null
	
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
						cx.fillText('Tahan G untuk menggerakan world',-33,44,)
						cx.fillText('Mouse wheel untuk zoom world',-33,66,)
					}
				break
			}
		},
	)
	tom_help.hoverbox = tom_bikinnode.hoverbox
	tom_help.tex = 'Petunjuk'
	m = tom_help.matlok
		m2d.translate(m,m,[
			-edp/2+22*2.2	,
			-edt/2+22	,
		])
	m = null
	//children, yang atas = muncul di belakang
	let chi = (par,chi,)=>par.children.push(chi)
		chi(global,grid,)
			chi(grid,grid_freenodes,)
			chi(grid,grid_linkednodes,)
		chi(global,UI,)
	//		chi(UI,tom_coba,)
	//			chi(tom_coba,tom_cobalain,)
	//		chi(UI,tom_geser,)
			chi(UI,menu,)
				chi(menu,tom_bikinnode,)
				chi(menu,tom_help,)
			chi(UI,mouse_pos,)
			chi(UI,border,)
	
	let fnode = (e,o,dt,)=>{
		let m
		switch(e){
			case 'hitung0':
				if(tah0 !== o){break}
				m = o.matlok
				m2d.mul(m,matcam,matmouse,)
				m2d.translate(m,matide,[m[4]+mxo,m[5]+myo,],)
			break
			case 'tampil':
				cx.fillStyle = '#ff0000aa'
				cx.save()
					cx.transform(...o.hoverbox)
					cx.fillRect(-1,-1,2,2,)
				cx.restore()
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
	let fpojok = (e,o,dt,)=>{
		switch(e){
			case 'hitung0':
				switch(o.tipe){
					case KANANBAWAH:
						o.matlok[4] = o.parent.hoverbox[4]*2
					case KIRIBAWAH:
						o.matlok[5] = o.parent.hoverbox[5]*2
					break
				}
			break
			case 'tampil':
				if(tah0?.hasOwnProperty('tipe') && (hov0 === o)){
					if(
						((
							(tah0.tipe === KIRIATAS) ||
							(tah0.tipe === KANANBAWAH)
						) && (o.tipe === KIRIBAWAH)) ||
						((tah0.tipe === KIRIBAWAH) && (
							(o.tipe === KIRIATAS) ||
							(o.tipe === KANANBAWAH)
						))
					){
						cx.fillStyle = '#00ff00'
					}else{
						cx.fillStyle = 'red'
					}
				}else{
					cx.fillStyle = 'white'
				}
				cx.save()
					cx.transform(...o.hoverbox)
					cx.fillRect(-1,-1,2,2,)
				cx.restore()
				tarikgaris(e,o,dt,)
			break
			case 'naik':
				fpojoknaikeve(e,o,dt,)
			break
		}
	}
	let fpojoknaikeve = (e,o,dt,)=>{
		lih([o.nama,tah1.nama,])
		//sampe sini, coba cara bukan tarik garis, coba cara hover & tekan keyboard
		let fr = grid_freenodes.children
		if((o.tipe === KIRIATAS) && (tah1.tipe === KIRIBAWAH)){
			;(o.children[3]??o.children[1]).children.unshift((fr.splice(fr.indexOf(tah1),1,)[0]))
		}else 
		if((tah1.tipe === KIRIATAS) && (o.tipe === KIRIBAWAH)){
			;(tah1.children[3]??tah1.children[1]).children.unshift((fr.splice(fr.indexOf(o),1,)[0]))
		}
	}
	/*
	let pojoktampil = (e,o,dt,)=>{
		cx.fillStyle = 'white'
		cx.save()
			cx.transform(...o.hoverbox)
			cx.fillRect(-1,-1,2,2,)
		cx.restore()
		tarikgaris(e,o,dt,)
	}
	let fkiriatas = (e,o,dt,)=>{
		switch(e){
			case 'tampil':
				pojoktampil(e,o,dt,)
			break
		}
	}
	let fkiribawah = (e,o,dt,)=>{
		switch(e){
			case 'hitung0':
				o.matlok[5] = o.parent.hoverbox[5]*2
			break
			case 'tampil':
				pojoktampil(e,o,dt,)
			break
		}
	}
	let fkananbawah = (e,o,dt,)=>{
		switch(e){
			case 'hitung0':
				o.matlok[4] = o.parent.hoverbox[4]*2
				o.matlok[5] = o.parent.hoverbox[5]*2
			break
			case 'tampil':
				pojoktampil(e,o,dt,)
			break
		}
	}
	*/
	
	let tarikgaris = (e,o,dt,)=>{
		if(tah0 === o){
			cx.lineWidth = 9
			m2d.invert(mathasil,matmouse,)
			m2d.mul(mathasil,mathasil,o.matglo,)
			m2d.invert(mathasil,mathasil,)
			cx.strokeStyle = 'yellow'
			cx.beginPath()
			cx.moveTo(0,0,)
			cx.lineTo(mathasil[4],mathasil[5],)
			cx.stroke()
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