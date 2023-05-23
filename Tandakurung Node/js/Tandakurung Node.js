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
	
rencana:
1.	tombol saat tekan, paak node dipilih
2.	bikin upload gambar ke node
`	)
	let canv = ed.canv = document.createElement('canvas')
	document.body.appendChild(canv)
	let edp = ed.panjang = canv.width = 1000*1.3
	let edt = ed.tinggi = canv.height = 600*1.3
	let cx = ed.cx = canv.getContext('2d',{willReadFrequently:true,},)
	cx.imageSmoothingEnabled = false
	
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
		if(texfokuskah()){return}
		let m = matcam
		m2d.scale(m,m,[
			2**(e.deltaY/1111),
			2**(e.deltaY/1111),
		],)
	})
	m2d.scale(matcam,matcam,[3,3,],)
	let namakey = {
		[67]:'c'	,
		[68]:'d'	,
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
		if(dipejet && texfokuskah()){return}
		let m
		let hov0ini = (hov0 === true)?grid:hov0
		
		//UI jangan ikut
		let oini = hov0ini
		//let bubar = 111
		while(oini){
			//if(--bubar < 0){throw 'keBABLASen'}
			
			if(oini === UI){
				//lih('ini dari UI')
				if(dipejet){
					//lih('===== keluar')
					return 0
				}
				break
			}
			oini = oini.parent
		}
		//ok,lanjut
		switch(nk){
			case 'g':
				if(dipejet === 1){
					canv.requestPointerLock()
				}else if(!dipejet){
					document.exitPointerLock()
				}
			break
			case 'n':
				if(dipejet === 1){
					bikinnode(hov0ini,)
				}
			break
			case 'p':
				if(dipejet === 1){
					tahP = nodedipilih
				}else if(
					!dipejet &&
					tahP
				){//lepas
					if(
						(tahP !== grid) &&
						!oini
					){//bukan dari grid
						//hov0ini
						let o = hov0ini
						//let bubar = 111
						while(o){
							//if(--bubar <= 0){throw 'keBABLASen'}
							
							if(o === tahP){
								o = 'keluar'
								break
							}
							o = o.parent.parent
						}
						//lanjut
						if(o !== 'keluar'){
							let chi = tahP.parent.children
							let mtah = tahP.matlok
							let mhov = hov0ini.group.matglo
							m2d.invert(mtah,mhov,)
							m2d.mul(mtah,mtah,matmouse,)
							m2d.translate(mtah,matide,[mtah[4],mtah[5],],)
							
							chi.splice(chi.indexOf(tahP),1,)
							hov0ini.group.children.push(tahP)
						}
					}
					tahP = null
				}
			break
			case 's':
				if(dipejet === 1){
					tahS = nodedipilih
				}else if(
					!dipejet &&
					tahS
				){//lepas
					if(!oini){
						//tahS
						let lanjut = true
						let o = tahS
						//let bubar = 111
						while(o){
							//if(--bubar <= 0){throw 'keBABLASen'}
							
							if(o === hov0ini){//atasan yang sama
								lanjut = false
								break
							}
							o = o.parent.parent
						}
						//hov0ini
						o = hov0ini
						//bubar = 111
						while(o){
							//if(--bubar <= 0){throw 'keBABLASen'}
							
							if(o === tahS){
								lanjut = false
								break
							}
							o = o.parent.parent
						}
						if(lanjut){
							lih(tahS.nama+' tukar dengan '+hov0ini.nama)
							let chi0 = tahS.parent.children
							let chi1 = hov0ini.parent.children
							let node0 = chi0.indexOf(tahS)
							let node1 = chi1.indexOf(hov0ini)
							//tukar parent
							;[
								chi0[node0],
								chi1[node1],
							] = [
								chi1[node1],
								chi0[node0],
							]
							//matrix tukar pos
							;[
								chi1[node1].matlok[4],
								chi1[node1].matlok[5],
								chi0[node0].matlok[4],
								chi0[node0].matlok[5],
							] = [
								chi0[node0].matlok[4],
								chi0[node0].matlok[5],
								chi1[node1].matlok[4],
								chi1[node1].matlok[5],
							]
						}
					}
					tahS = null
				}
			break
			case 'c':
				if(dipejet === 1){
					tahC = nodedipilih
				}else if(
					!dipejet &&
					tahC
				){
					if(!oini){
						let arr_asli = [tahC]//yang disalin
						let arr_baru = []//node baru
						//let bubar = 222
						for(let naA = 0;naA<arr_asli.length;naA++){
							//if(--bubar <= 0){throw 'keBABLASen'}
							
							let chiasli = arr_asli[naA].group.children
							for(let naB = 0;naB < chiasli.length;naB++){
								arr_asli.splice(naA+naB+1,0,chiasli[naB],)
							}
						}
						for(let naA in arr_asli){
							naA = +naA
							let nodebaru = bikinnode(
								arr_baru[
									arr_asli.
									indexOf(
										arr_asli[naA].
										parent.
										parent
									)
								]??
								hov0ini
							)
							arr_baru.push(nodebaru)
							
							//salin prop
							nodebaru.judul	= arr_asli[naA].judul
							nodebaru.data	= arr_asli[naA].data
							nodebaru.awal	= arr_asli[naA].awal
							nodebaru.akhir	= arr_asli[naA].akhir
							if(naA){
								m2d.copy(nodebaru.matlok,arr_asli[naA].matlok,)
							}
						}
					}
					tahC = null
				}
			break
			case 'delete':
				if(
					(dipejet === 1) &&
					nodedipilih &&
					(nodedipilih !== grid)
				){
					let chi = nodedipilih.parent.children
					chi.splice(chi.indexOf(nodedipilih),1,)
					nodedipilih = null
					cla('judul')[0].value = 
					cla('awal')[0].value = 
					cla('akhir')[0].value = ''
					cla('data')[0].value = 'Harap pilih node untuk mengisi data'
				}
				//
			break
			case 'd':
				if(
					(dipejet === 1) &&
					(nodedipilih !== grid)
				){
					let c = nodedipilih.children
					if(c.length){
						c.pop()
					}else{
						c.push(nodedipilih.group)
					}
				}
			break
		}
	}
	let tahS = null//tukar
	let tahP = null//masuk ke parent
	let tahC = null//salin
	addEventListener('keydown',pejeve,)
	addEventListener('keyup',pejeve,)
	let bikinnode = parnode=>{
		let node = bikinobj('node_'+namaunik,fnode,)
		let parentgroup = parnode.group
		node.hoverbox = m2d.create()
		m = node.matlok
			m2d.invert(m,parentgroup.matglo)
			m2d.mul(m,m,matmouse,)
			m2d.translate(m,matide,[m[4],m[5],],)
		m2d.copy(node.hoverbox,ukuranhoverbox,)
		
		chi(parentgroup,node,)
		
		let nodegroup = node.group = bikinobj('node_group_'+namaunik,fkosong,)
		chi(node,nodegroup,)
		
		node.judul = 'judul '+node.nama
		node.awal = 
		node.akhir = ''
		node.data = ''
		
		namaunik++
		return node
	}
	
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
					garishubung(e,o,dt,)
				break
			}
		},
	)
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
	
	let grid_group = grid.group = bikinobj('grid_group',fkosong,)
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
				cx.fillText(hov0.tex??hov0.nama??hov0,16,11,)
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
					ftom(e,o,dt,'?',)
					
					cx.font = '19px Consolas'
					if(hov0 === o){
						let x = 0
						let y = -30
						cx.fillText('Mouse tekan = pilih node'	,x	,(y++)*22	,)//sampe sini, semua harus dari node dipilih
						cx.fillText('Mouse wheel = zoom world'	,x	,(y++)*22	,)
						cx.fillText('Tahan G = gerakan world'	,x	,(y++)*22	,)
						cx.fillText('Tekan P = node terpilih masuk ke node menjadi child'	,x	,(y++)*22	,)
						cx.fillText('Tekan S = pilih node untuk ditukar'	,x	,(y++)*22	,)
						cx.fillText('tekan C = salin node'	,x	,(y++)*22	,)
						cx.fillText('Tekan N = child baru'	,x	,(y++)*22	,)
						cx.fillText('Tekan D = tampil/sembunyi children'	,x	,(y++)*22	,)
						cx.fillText('Tekan Delete = hapus node'	,x	,(y++)*22	,)
					}
				break
			}
		},
	)
	tom_help.hoverbox = m2d.create()
	tom_help.tex = 'Petunjuk'
	let m
	m = tom_help.hoverbox
		m2d.scale(m,m,[11,11,])
	m = tom_help.matlok
		m2d.translate(m,m,[
			-edp/2+22	,
			edt/2-22*(1+1.5*0)	,
		])
	m = null
	
	let tom_save = bikinobj('tom_save',
		(e,o,dt,)=>{
			let m
			switch(e){
				case 'tampil':
					ftom(e,o,dt,'',)
					cx.lineWidth = 1
					cx.stroke(o.bentuk)
				break
				case 'klik':
					let arr = [grid]
					let h = [{children:[]}]
					for(let naA = 0;naA < arr.length;naA++){
						let vaA = arr[naA]
						let c = vaA.group.children
						for(let naB in c){
							naB = +naB
							let vaB = c[naB]
							arr.splice(naA+naB+1,0,vaB,)
							
							let o = {
								nama	:vaB.nama	,
								judul	:vaB.judul	,
								awal	:vaB.awal	,
								akhir	:vaB.akhir	,
								data	:vaB.data	,
								x	:vaB.matlok[4]	,
								y	:vaB.matlok[5]	,
								show	:!!vaB.children.length	,
								children	:[]	,
							}
							h.splice(naA+naB+1,0,o,)
							h[naA].children.push(o)
						}
					}
					lih(arr)
					lih(h)
					simpanfile(JSON.stringify(h[0],null,'\t',),'text/json','proyekku.json',)
				break
			}
		},
	)
	tom_save.hoverbox = tom_help.hoverbox
	tom_save.tex = 'Simpan Project'
	tom_save.bentuk = new Path2D()
	m = tom_save.matlok
		m2d.translate(m,m,[
			-edp/2+22	,
			edt/2-22*(1+1.5*2)	,
		])
	m = null
	let p = tom_save.bentuk
		p.moveTo(-7	,-7	,)
		p.lineTo(7-3	,-7	,)
		p.lineTo(7	,-7+3	,)
		p.lineTo(7	,7	,)
		p.lineTo(-7	,7	,)
		p.closePath()
		p.moveTo(-7+4	,-7	,)
		p.lineTo(-7+4	,-7+4	,)
		p.lineTo(7-4	,-7+4	,)
		p.lineTo(7-4	,-7	,)
		p.moveTo(-7+3	,7-2	,);p.lineTo(7-3	,7-2	,)
		p.moveTo(-7+3	,7-4	,);p.lineTo(7-3	,7-4	,)
		p.moveTo(-7+3	,7-6	,);p.lineTo(7-3	,7-6	,)
	p = null
	
	let tom_buka = bikinobj('tom_buka',
		(e,o,dt,)=>{
			let m
			switch(e){
				case 'tampil':
					ftom(e,o,dt,'',)
					cx.lineWidth = 1
					cx.stroke(o.bentuk)
				break
				case 'klik':
					cla('buka')[0].value = ''
					cla('buka')[0].click()
				break
			}
		},
	)
	tom_buka.hoverbox = tom_help.hoverbox
	tom_buka.tex = 'Buka'
	tom_buka.bentuk = new Path2D()
	m = tom_buka.matlok
		m2d.translate(m,m,[
			-edp/2+22	,
			edt/2-22*(1+1.5*1)	,
		])
		//lihat bentar
		/*
		m2d.translate(m,m,[
			333	,
			-333	,
		])
		m2d.scale(m,m,[
			11	,
			11	,
		])
		*/
		
	m = null
	p = tom_buka.bentuk
		p.moveTo(-7	,7	,)
		p.lineTo(-7+4	,-7+5	,)
		p.lineTo(7+2	,-7+5	,)
		p.lineTo(7-2	,7	,)
		p.lineTo(-7	,7	,)
		p.lineTo(-7	,-7	,)
		p.lineTo(-7+4	,-7	,)
		p.lineTo(0	,-7+3	,)
		p.lineTo(7-2	,-7+3	,)
		p.lineTo(7-2	,-7+5	,)
	p = null
	
	let tom_export = bikinobj('tom_export',
		(e,o,dt,)=>{
			let m
			switch(e){
				case 'tampil':
					ftom(e,o,dt,'',)
					cx.lineWidth = 1
					cx.stroke(o.bentuk)
				break
				case 'klik':
					cla('UI')[0].classList.remove('hlmawal')
					cla('UI')[0].classList.remove('hlmdata')
					cla('UI')[0].classList.add('hlmexport')
					
					let arr = [grid.group.children]
					let h0 = [[]]
					
					for(let naA = 0;naA<arr.length;naA++){
						let vaA = arr[naA]
						let c = vaA
						for(let naB in c){
							naB = +naB
							let vaB = c[naB]
							arr.splice(naA+naB+1,0,vaB.group.children,)
							let isi = {
								data	:vaB.data	,
								awal	:vaB.awal	,
								nodes	:[]	,
								akhir	:vaB.akhir	,
								tab	:''	,
							}
							h0.splice(naA+naB+1,0,isi.nodes,)
							h0[naA].push(isi)
						}
					}
					
					lih(arr)
					lih(h0)
					let h1 = [h0[0]]
					for(let naA = 0;naA<h1.length;naA++){
						let vaA = h1[naA]//[{},{},{},{},...,]
						if(!(vaA instanceof Array)){continue}
						h1.splice(naA,1,)
						for(let naB in vaA){
							let vaB = vaA[naB]
							h1.splice(naA+naB*4,0,
								tambahtab(vaB.tab,vaB.data,)	,
								vaB.tab+vaB.awal	,
								vaB.nodes	,
								vaB.tab+vaB.akhir	,
							)
							for(let vaC of vaB.nodes){
								vaC.tab = vaB.tab+'\t'
							}
						}
						naA--
					}
					
					hasilexport = cla('output')[0].textContent = h1.join('\n')
				break
			}
		},
	)
	tom_export.hoverbox = tom_help.hoverbox
	tom_export.tex = 'Export'
	tom_export.bentuk = new Path2D()
	m = tom_export.matlok
		m2d.translate(m,m,[
			-edp/2+22	,
			edt/2-22*(1+1.5*3)	,
		])
		//lihat bentar
		/*
		m2d.translate(m,m,[
			333	,
			-333	,
		])
		m2d.scale(m,m,[
			11	,
			11	,
		])
		*/
		
	m = null
	p = tom_export.bentuk
		p.moveTo(-7,	7-3	,)
		p.lineTo(-7,	7	,)
		p.lineTo(7,	7	,)
		p.lineTo(7,	7-3	,)
		p.moveTo(0,	7-3	,)
		p.lineTo(0,	-7	,)
		p.moveTo(-7,	0	,)
		p.lineTo(0,	-7	,)
		p.lineTo(7,	0	,)
	p = null
	
	let tom_edit = bikinobj('tom_edit',
		(e,o,dt,)=>{
			let m
			switch(e){
				case 'tampil':
					ftom(e,o,dt,'',)
					cx.lineWidth = 1
					cx.stroke(o.bentuk)
				break
				case 'klik':
					cla('UI')[0].classList.remove('hlmawal')
					cla('UI')[0].classList.add('hlmdata')
					cla('UI')[0].classList.remove('hlmexport')
					cla('data')[0].focus()
				break
			}
		},
	)
	tom_edit.hoverbox = tom_help.hoverbox
	tom_edit.tex = 'Edit node'
	tom_edit.bentuk = new Path2D()
	m = tom_edit.matlok
		m2d.translate(m,m,[
			-edp/2+22	,
			edt/2-22*(1+1.5*4)	,
		])
		//lihat bentar
		/*
		m2d.translate(m,m,[
			333	,
			-333	,
		])
		m2d.scale(m,m,[
			11	,
			11	,
		])
		*/
	m = null
	p = tom_edit.bentuk
		p.moveTo(-7	,7	,)
		p.lineTo(-7+1	,7-5	,)
		p.lineTo(7-4	,-7	,)
		p.lineTo(7	,-7+4	,)
		p.lineTo(-7+5	,7-1	,)
		p.closePath()
		p.moveTo(-7+3	,7-3	,)
		p.lineTo(7-4	,-7+4	,)
		p.moveTo(-7+1	,7-5	,)
		p.lineTo(-7+5	,7-1	,)
		p.moveTo(7-6	,-7+2	,)
		p.lineTo(7-2	,-7+6	,)
	p = null
	
	//children, yang atas = muncul di belakang
	let chi = (par,chi,)=>par.children.push(chi)
		chi(global,grid,)
			chi(grid,grid_group,)
		chi(global,UI,)
			chi(UI,menu,)
				chi(menu,tom_help,)
				chi(menu,tom_save,)
				chi(menu,tom_buka,)
				chi(menu,tom_export,)
				chi(menu,tom_edit,)
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
				if(o.children.length){
					m2d.copy(o.hoverbox,ukuranhoverbox,)
					if(o.parent.parent !== grid){
						m[4] = Math.max(22,m[4],)
						m[5] = Math.max(22,m[5],)
					}
				}
				fukurhoverbox(o)
				
			break
			case 'tampil':
				//(>1 tahan) bersamaan
				if(tahP && tahS){
					cx.fillStyle = 'black'
				}else
				//tahP
				if(tahP === o){
					cx.fillStyle = 'blue'
				}else if(
					tahP &&
					(hov0 === o)
				){
					cx.fillStyle = '#00ff00'
					//hov0ini
					let oini = hov0
					//let bubar = 111
					while(oini){
						//if(--bubar <= 0){throw 'keBABLASen'}
						
						if(oini === tahP){
							cx.fillStyle = 'red'
							break
						}
						oini = oini.parent.parent
					}
				}else 
				//tahS
				if(tahS === o){
					cx.fillStyle = 'blue'
				}else if(
					tahS &&
					(hov0 === o)
				){
					cx.fillStyle = '#00ff00'
					//tahS
					let oini = tahS
					//let bubar = 111
					while(oini){
						//if(--bubar <= 0){throw 'keBABLASen'}
						
						if(oini === hov0){
							cx.fillStyle = 'red'
							break
						}
						oini = oini.parent.parent
					}
					//hov0ini
					oini = hov0
					//bubar = 111
					while(oini){
						//if(--bubar <= 0){throw 'keBABLASen'}
						
						if(oini === tahS){
							cx.fillStyle = 'red'
							break
						}
						oini = oini.parent.parent
					}
					
				}else
				//tahC
				if(tahS === o){
					cx.fillStyle = 'blue'
				}else if(
					tahC &&
					(hov0 === o)
				){
					cx.fillStyle = '#00ff00'
				}else
				//lain
				if(hov0 === o){
					cx.fillStyle = '#444444'
				}else{
					cx.fillStyle = '#222222ee'
				}
				
				m = o.hoverbox
				cx.save()
					cx.transform(...m)
					cx.fillRect(-1,-1,2,2,)
				cx.restore()
				cx.strokeStyle = o.children.length?'cyan':'blue'
				cx.fillStyle = 'white'
				cx.font = '77px Consolas'
				cx.fillStyle = (nodedipilih === o)?'white':'#ffffff77'
				cx.fillText(o.judul,0,-26,)
				cx.lineWidth = 6
				cx.strokeRect(0,0,m[4]*2,m[5]*2,)
				cx.fillStyle = (nodedipilih === o)?'white':'black'
				cx.fillRect(-11	,-11	,22	,22	,)
				cx.fillRect(-11	,m[5]*2-11	,22	,22	,)
				cx.fillRect(m[4]*2-11	,m[5]*2-11	,22	,22	,)
				garishubung(e,o,dt,)
			break
			case 'turun':
				m = o.matlok
				mxo = m[4]
				myo = m[5]
				m2d.mul(m,matcam,matmouse,)
				m2d.translate(m,matide,[m[4],m[5],],)
				mxo -= m[4]
				myo -= m[5]
				nodedipilih = o
				cla('judul')[0].value = o.judul
				cla('awal')[0].value = o.awal
				cla('akhir')[0].value = o.akhir
				cla('data')[0].value = o.data
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
	let garishubung = (e,o,dt,)=>{
		let c = o.children[0]?.children
		if(!c){return}
		
		for(let naA = 0;naA < c.length;naA++){
			let ml0 = c[naA-1]?.matlok
			let ml1 = c[naA]?.matlok
			let mh0 = c[naA-1]?.hoverbox
			let mh1 = c[naA]?.hoverbox
			
			cx.strokeStyle = '#00ffff44'
			cx.beginPath()
			;ml0?
				cx.moveTo(
					ml0[4]+mh0[4]*2	,
					ml0[5]+mh0[5]*2	,
				)
			:
				cx.moveTo(0,0,)
			
			cx.lineTo(ml1[4],ml1[5]+mh1[5]*2,)
			cx.stroke()
		}
	}
	let nodedipilih = null
	let cla = ru.cla
	let texfokuskah = ()=>//jika true, jangan interaksi canvas 
		(document.activeElement.tagName === 'INPUT') ||
		(document.activeElement.tagName === 'TEXTAREA') ||
		!cla('hlmawal').length
	
	let htmltexeve = e=>
		(nodedipilih??{})[e.currentTarget.id] = e.currentTarget.value
	
	
	cla('judul')[0].addEventListener('input',htmltexeve,)
	cla('judul')[0].addEventListener('change',htmltexeve,)
	cla('data')[0].addEventListener('input',htmltexeve,)
	cla('data')[0].addEventListener('change',htmltexeve,)
	cla('awal')[0].addEventListener('input',htmltexeve,)
	cla('awal')[0].addEventListener('change',htmltexeve,)
	cla('akhir')[0].addEventListener('input',htmltexeve,)
	cla('akhir')[0].addEventListener('change',htmltexeve,)
	
		/*
	cla('Sdata')[0].addEventListener('click',e=>{
		let c = cla('UI')[0].classList
		if(c.contains('UItutupdata')){
			c.remove('UItutupdata')
			e.currentTarget.textContent = 'Tutup'
			cla('data')[0].focus()
		}else{
			c.add('UItutupdata')
			e.currentTarget.textContent = 'Data'
		}
		
	})
		*/
	let ftom = (e,o,dt,tex,)=>{
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
		cx.fillText(tex,-6.5,7,)
	}
	cla('buka')[0].addEventListener('change',e=>e.currentTarget.files[0].text().then(bukafile),)
	let bukafile = e=>{
		let arr = [lih(JSON.parse(e))]
		let h = [grid]//hasil
		
		for(let naA = 0;naA<arr.length;naA++){
			let vaA = arr[naA]
			let c = vaA.children
			for(let naB in c){
				naB = +naB
				let vaB = c[naB]
				arr.splice(naA+naB+1,0,vaB,)
				vaB.parent = vaA
				let node = bikinnode(h[naA])
				
				h.splice(naA+naB+1,0,node,)
				node.nama = vaB.nama
				node.awal = vaB.awal
				node.akhir = vaB.akhir
				node.judul = vaB.judul
				node.data = vaB.data
				m2d.translate(node.matlok,matide,[vaB.x,vaB.y,],)
				if(!vaB.show)
					node.children.pop()
				
			}
		}
		lih(arr)
		lih(h)
	}
	let simpanfile = (data,tipe,nama,)=>{
		const link = document.createElement("a");
		const file = new Blob(
			[data]	,
			{type: tipe,}	,
		)
		link.href = URL.createObjectURL(file);
		link.download = nama
		link.click();
		URL.revokeObjectURL(link.href);
	}
	//let tambahtab = (tabini,data,)=>data.replace(/\n/g,tabini+'\t\t',)
	let tambahtab = (tabini,data,)=>(tabini+data).replace(/\n/g,'\n'+tabini,)
	cla('data')[0].addEventListener('keydown', e=>{
		if (e.key == 'Tab') {
			e.preventDefault();
			let ini = e.currentTarget
			var start = ini.selectionStart;
			var end = ini.selectionEnd;
	
			// set textarea value to: text before caret + tab + text after caret
			ini.value = ini.value.substring(0, start) + "\t" + ini.value.substring(end);
	
			// put caret at right position again
			ini.selectionStart = ini.selectionEnd = start + 1;
		}
	})
	cla('kembali')[0].addEventListener('click',e=>{
		cla('UI')[0].classList.add('hlmawal')
		cla('UI')[0].classList.remove('hlmdata')
		cla('UI')[0].classList.remove('hlmexport')
	})
	let hasilexport
	cla('Sexport')[0].addEventListener('click',e=>{
		simpanfile(
			hasilexport	,
			''	,
			'export'	,
		)
	})
	
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
