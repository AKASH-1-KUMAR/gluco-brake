(()=>{
const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
function count(el){const n=+el.dataset.n,t0=performance.now();(function f(t){const k=Math.min((t-t0)/1600,1);el.textContent=Math.round(n*(1-Math.pow(1-k,3)));if(k<1)requestAnimationFrame(f)})(t0)}
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');if(e.target.dataset.n)count(e.target);io.unobserve(e.target)}}),{threshold:.2});
function splitWords(el){let i=0;(function w(n){[...n.childNodes].forEach(c=>{if(c.nodeType===3){const f=document.createDocumentFragment();c.textContent.split(/(\s+)/).forEach(s=>{if(!s)return;if(/^\s+$/.test(s))f.append(' ');else{const e=document.createElement('span');e.className='wd';e.style.setProperty('--i',i++);e.textContent=s;f.append(e)}});c.replaceWith(f)}else if(c.nodeType===1&&c.tagName!=='BR')w(c)})})(el);el.classList.add('sp','split')}
$$('h1,h2').forEach(splitWords);
$$('.lead,.sub,.cta,.eye,section>.tag').forEach(e=>e.classList.add('r'));
$$('.r,.split,[data-n]').forEach(e=>io.observe(e));
$$('.tilt').forEach(c=>{c.onmousemove=e=>{const b=c.getBoundingClientRect(),x=(e.clientX-b.left)/b.width-.5,y=(e.clientY-b.top)/b.height-.5;c.style.transform='perspective(700px) rotateY('+x*14+'deg) rotateX('+-y*14+'deg) translateZ(6px)'};c.onmouseleave=()=>{c.style.transform=''}});
(()=>{
const NS='http://www.w3.org/2000/svg',eso=$('#eso'),gut=$('#gut'),vsl=$('#vsl'),lay=$('#lay'),gel=$('#gel'),tb=$('#tb'),bowl=$('#bowl'),mo=$('#mo'),lk=$('#lk');
const L=[eso,gut,vsl].map(p=>p.getTotalLength()),at=(p,d)=>p.getPointAtLength(Math.min(d,p.getTotalLength()));
const TS=3.2,END=24,A=4.8,D=.35,N=48;
const cp=w=>{const u=(t-TS)%2;return w&&t<1.3?'1 · Chew one tablet 2 minutes before the meal.':w&&t<TS?'2 · Fiber and ACV coat the stomach and form a gel mesh.':t<TS?'Empty stomach. Nothing is slowing the meal down.':t<TS+6?(u<.7?'The hand brings a bite to the mouth.':u<1.5?'Chewing breaks the food into tiny pieces.':'Swallowed: the food slides down the esophagus.'):t<14?(w?'3 · The mesh slows the stomach and the enzyme lock blocks part of the sugar.':'Acid breaks the food down and the stomach empties fast.'):t<19?'The portal vein carries sugar to the liver. It stores a share as glycogen and passes the rest on to the blood.':(w?'Result: a lower, flatter curve and steady energy.':'Result: a sharp spike, then the 3 PM crash.')};
for(let k=0;k<6;k++){const o=at(gut,L[1]*(.2+k*.04)),r=document.createElementNS(NS,'rect');r.setAttribute('x',-3.5);r.setAttribute('y',-3.5);r.setAttribute('width',7);r.setAttribute('height',7);r.setAttribute('fill','#3ddc84');r.setAttribute('transform','translate('+o.x+','+o.y+') rotate(45)');lk.append(r)}
const mk=(c,r)=>{const e=document.createElementNS(NS,'circle');e.setAttribute('r',r);e.setAttribute('fill',c);lay.append(e);return e};
const hop=(p,ph,x,y)=>{p.ph=ph;p.h=0;p.fx=p.x;p.fy=p.y;p.tx=x;p.ty=y};
let mode='no',t=0,ps=[],q=[],G=90,peak=90,run=false,vis=false,auto=true,nf=0,ta=0,rel=0,lastRec=0,cv={no:[],with:[]},pk={},bs=[0,0,0];
function reset(m){mode=m;t=0;ps=[];q=[];G=90;peak=90;nf=0;ta=0;rel=0;lastRec=0;bs=[0,0,0];cv[m]=[{t:0,g:90}];pk[m]=0;run=true;lay.innerHTML='';gel.style.opacity=0;lk.style.opacity=0;$('#bn').classList.toggle('on',m==='no');$('#bw').classList.toggle('on',m==='with');$('#res').textContent='';draw()}
function step(dt){
t+=dt;const w=mode==='with';
document.getElementById('strip').style.opacity=w?1:0;
if(w&&!ta&&t>=1.3){ta=1;for(let i=0;i<8;i++)ps.push({e:mk('#b6ff3c',2.6),k:'act',ph:'eso',d:0,dl:i*.1,x:150,y:80,i})}
const BT=2,ez=x=>x*x*(3-2*x),R=[44,322],M=[141,92],T0=[116,326],cl=x=>Math.max(0,Math.min(1,x));let hx=R[0],hy=R[1],mr=t<TS?1:0,ch=0,tab=0;if(w&&t<2.8){if(t<1.9){const f=t<.9?ez(t/.9):t<1.5?1:1-ez((t-1.5)/.4);hx=T0[0]+(M[0]-T0[0])*f;hy=T0[1]+(M[1]-T0[1])*f;mr=t<.9?1:0;ch=t>=.9&&t<1.5?1:0;tab=t<1.5?1:0}else{const f=ez(cl((t-1.9)/.9));hx=T0[0]+(R[0]-T0[0])*f;hy=T0[1]+(R[1]-T0[1])*f;mr=0}}
for(let k=0;k<3;k++){const u=t-TS-k*BT;if(u>=.7&&!bs[k]){bs[k]=1;for(let c=0;c<16;c++){const a=Math.random()*6.28,r=Math.sqrt(Math.random())*20;ps.push({e:mk('#f4a261',4.6),k:'food',ph:'chew',t0:TS+k*BT+.7,ci:c,dl:0,x:148,y:80,i:nf,sx:188+Math.cos(a)*r*.9,sy:212+Math.sin(a)*r});nf++}}
if(u>=0&&u<2){const f=u<.7?ez(u/.7):u<1.5?1:1-ez((u-1.5)/.5);hx=R[0]+(M[0]-R[0])*f;hy=R[1]+(M[1]-R[1])*f;mr=u<.7?1:0;ch=u>=.7&&u<1.5?1:0}}
const fq=cl((R[1]-hy)/(R[1]-M[1])),ex=64+16*fq,ey=246-34*fq,ax=hx-ex,ay=hy-ey,al=Math.hypot(ax,ay)||1;
$('#am').setAttribute('d','M84 136L'+ex.toFixed(1)+' '+ey.toFixed(1)+'L'+hx.toFixed(1)+' '+hy.toFixed(1));$('#hg').setAttribute('transform','translate('+hx.toFixed(1)+','+hy.toFixed(1)+') rotate('+(Math.atan2(ay,ax)*57.3+90).toFixed(1)+')');$('#mr').setAttribute('cx',(hx+ax/al*15).toFixed(1));$('#mr').setAttribute('cy',(hy+ay/al*15).toFixed(1));$('#mr').setAttribute('opacity',mr);$('#mr').setAttribute('fill',tab?'#b8e84a':'#f4a261');$('#mr').setAttribute('r',tab?4:5.5);
mo.setAttribute('ry',ch?2+3*Math.abs(Math.sin(t*14)):2);
if(t>=TS+1.6){rel+=dt;const gap=w?.15:.12;while(rel>=gap&&q.length){rel-=gap;hop(q.shift(),'h1',162,246)}if(!q.length)rel=Math.min(rel,gap)}
G-=(G-90)*D*dt;
for(const p of ps){
if(p.dl>0){p.dl-=dt;p.e.style.opacity=0;continue}p.e.style.opacity=1;
if(p.ph==='eso'){p.d+=90*dt;const o=at(eso,p.d);p.x=o.x;p.y=o.y;if(p.d>=L[0]){if(p.k==='act'){p.ph='x';gel.style.opacity=1}else{p.ph='stm';q.push(p)}}}
else if(p.ph==='chew'){p.x=148+Math.sin(t*30+p.i*2)*4;p.y=80+Math.cos(t*26+p.i*3)*3;const f=Math.min((t-p.t0)/.8,1);p.e.setAttribute('r',4.6-2.2*f);if(f>=1){p.ph='eso';p.d=0;p.dl=p.ci*.03}}
else if(p.ph==='stm'){p.x=p.sx+Math.sin(t*3+p.i)*1.3;p.y=p.sy+Math.cos(t*2.4+p.i)*1.3}
else if(p.ph==='h1'||p.ph==='h2'){p.h+=dt/.3;const k=Math.min(p.h,1);p.x=p.fx+(p.tx-p.fx)*k;p.y=p.fy+(p.ty-p.fy)*k;if(k>=1){p.ph=p.ph==='h1'?'gut':p.st?'st':'vsl';p.d=0}}
else if(p.ph==='gut'){p.d+=90*dt;const o=at(gut,p.d);p.x=o.x;p.y=o.y;
if(!p.dec&&p.d>=L[1]*.3){p.dec=1;if(w&&p.i%5===0){p.e.setAttribute('fill','#3ddc84');p.e.setAttribute('r',4.2)}else if(p.i%3===0){p.st=1;p.e.setAttribute('fill','#ffd43b');hop(p,'h2',100+Math.random()*50,186+Math.random()*20)}else{const s=at(vsl,0);hop(p,'h2',s.x,s.y);p.e.setAttribute('fill','#f76707');G+=A}}
if(p.d>=L[1])p.ph='x'}
else if(p.ph==='vsl'){p.d+=70*dt;const o=at(vsl,p.d);p.x=o.x;p.y=o.y;if(p.d>=L[2])p.ph='x'}
p.e.setAttribute('cx',p.x);p.e.setAttribute('cy',p.y)}
ps=ps.filter(p=>p.ph!=='x'||(p.e.remove(),false));
peak=Math.max(peak,G);lk.style.opacity=w&&t>TS+2.5?1:0;
if(t-lastRec>=.25){cv[mode].push({t,g:G});lastRec=t}
if(t>=END){run=false;pk[mode]=peak;const o=pk.no&&pk.with;$('#res').textContent=o?'Simulated spike height: about '+Math.round((1-(pk.with-90)/(pk.no-90))*100)+'% lower with Gluco-Brake. Illustrative model based on the product’s 25–35% target, not a clinical result.':'Peak: about '+Math.round(peak)+' mg/dL.'+(auto?' Now watching the same meal with Gluco-Brake…':' Run the other mode to compare.');if(auto&&mode==='no')setTimeout(()=>{if(auto)reset('with')},2200)}}
function draw(){
const pt=a=>a.map(o=>(o.t/END*320).toFixed(1)+','+(140-(o.g-80)/100*130).toFixed(1)).join(' '),w=mode==='with';
$('#cA').setAttribute('points',pt(cv.no));$('#cB').setAttribute('points',pt(cv.with));$('#gv').textContent=Math.round(G);
$('#cap').textContent=w&&t<1.3?'1 · Chew one tablet 2 minutes before the meal.':w&&t<TS?'2 · Fiber and ACV coat the stomach and form a gel mesh.':t<TS?'Empty stomach. Nothing is slowing the meal down.':t<TS+3?(w?'The meal arrives and meets the mesh.':'The meal arrives.'):t<17?(w?'3 · The mesh slows the release, and the enzyme lock blocks part of the sugar.':'Food empties fast and sugar floods the blood.'):(w?'Result: a lower, flatter curve and steady energy.':'Result: a sharp spike, then the 3 PM crash.');$('#cap').textContent=cp(w)}
$('#bn').onclick=()=>{auto=false;reset('no')};$('#bw').onclick=()=>{auto=false;reset('with')};$('#rp').onclick=()=>{auto=false;reset(mode)};
new IntersectionObserver(es=>es.forEach(e=>{vis=e.isIntersecting;if(vis&&!t&&!run)reset('no')}),{threshold:.35}).observe($('#sim'));
let last=performance.now();(function f(n){const dt=Math.min((n-last)/1000,.05);last=n;if(run&&vis){step(dt);draw()}requestAnimationFrame(f)})(last);
})();
if(!window.THREE)return;
let gl;try{gl=new THREE.WebGLRenderer({canvas:$('#gl'),alpha:true,antialias:true})}catch(e){return}
gl.setPixelRatio(Math.min(devicePixelRatio,2));
const S=new THREE.Scene(),C=new THREE.PerspectiveCamera(38,1,.1,100);C.position.set(0,0,10);
S.add(new THREE.AmbientLight(0xffffff,.85));
const L1=new THREE.PointLight(0xc6ff4a,1.7,60);L1.position.set(6,6,8);S.add(L1);
const L2=new THREE.PointLight(0x2de2e6,1.7,60);L2.position.set(-7,-4,6);S.add(L2);
const mat=new THREE.MeshStandardMaterial({color:0xb8e84a,roughness:.3,metalness:.15,emissive:0x2a4a05,emissiveIntensity:.5});
const tab=new THREE.Group();
const body=new THREE.Mesh(new THREE.CylinderGeometry(1.35,1.35,.5,72),mat);
const rim=new THREE.Mesh(new THREE.TorusGeometry(1.35,.16,24,72),mat);rim.rotation.x=Math.PI/2;
const gr=new THREE.Mesh(new THREE.BoxGeometry(2.4,.04,.07),new THREE.MeshStandardMaterial({color:0x4a7a10}));gr.position.y=.27;
tab.add(body,rim,gr);S.add(tab);
const rings=[2.2,2.8,3.4].map((r,i)=>{const m=new THREE.Mesh(new THREE.TorusGeometry(r,.012,8,128),new THREE.MeshBasicMaterial({color:i%2?0x2de2e6:0x8fdc2a,transparent:true,opacity:.65}));m.rotation.set(1.2+i*.4,i*.7,0);S.add(m);return m});
const mg=new THREE.SphereGeometry(.13,16,16),mm=new THREE.MeshStandardMaterial({color:0xf76707,roughness:.3});
const mol=Array.from({length:44},()=>{const m=new THREE.Mesh(mg,mm);m.userData={r:3+Math.random()*5,th:Math.random()*6.28,y:(Math.random()-.5)*8,s:.08+Math.random()*.22};m.scale.setScalar(.6+Math.random()*1.2);S.add(m);return m});
const tg=new THREE.PlaneGeometry(34,16,64,28),T=new THREE.Mesh(tg,new THREE.MeshBasicMaterial({color:0x2fbf71,wireframe:true,transparent:true,opacity:.3}));
T.rotation.x=-1.25;T.position.set(0,-4.6,-4);S.add(T);
const P=tg.attributes.position;
function rs(){const w=innerWidth,h=innerHeight;gl.setSize(w,h,false);C.aspect=w/h;C.updateProjectionMatrix()}
addEventListener('resize',rs);rs();
let sp=0,mx=0,my=0,t=0,last=performance.now();
addEventListener('pointermove',e=>{mx=e.clientX/innerWidth-.5;my=e.clientY/innerHeight-.5});
const hot=new THREE.Color(0xf76707),grn=new THREE.Color(0x3ddc84);
(function loop(n){
const dt=Math.min((n-last)/1000,.05);last=n;t+=dt;
const mxs=document.documentElement.scrollHeight-innerHeight,p=mxs>0?scrollY/mxs:0;sp+=(p-sp)*.06;
const wide=innerWidth>820,k=Math.min(sp*1.5,1);
$('#gl').style.opacity=1-.5*Math.min(sp*8,1);
tab.position.x=wide?2.5*Math.cos(sp*Math.PI*3):0;
tab.position.y=(wide?0:1.7*(1-Math.min(sp*5,1)))+Math.sin(t*1.3)*.15;
tab.rotation.set(.9+Math.sin(t)*.1+my*.5,t*.6+sp*12,mx*.3);
tab.scale.setScalar((wide?1:.72)*(1+.25*Math.sin(sp*Math.PI)));
rings.forEach((r,i)=>{r.position.copy(tab.position);r.rotation.z=t*(.2+i*.12)});
mol.forEach(m=>{const d=m.userData;d.th+=d.s*dt;m.position.set(Math.cos(d.th)*d.r,d.y+Math.sin(t+d.r)*.3,Math.sin(d.th)*d.r*.5-2)});
mm.color.lerpColors(hot,grn,k);
const amp=1.8-1.68*k;
for(let i=0;i<P.count;i++){const x=P.getX(i),y=P.getY(i);P.setZ(i,amp*(Math.sin(x*.6+t)+Math.cos(y*.9+t*.8))*(.6+.4*Math.sin(x*.2)))}
P.needsUpdate=true;
C.position.x+=(mx*1.2-C.position.x)*.05;C.position.y+=(-my*.8-C.position.y)*.05;C.lookAt(0,0,0);
gl.render(S,C);requestAnimationFrame(loop)})(performance.now());
})();
