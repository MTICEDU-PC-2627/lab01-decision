const fs=require('fs'),vm=require('vm'),assert=require('node:assert/strict'),{webcrypto}=require('node:crypto');
const html=fs.readFileSync(__dirname+'/index.html','utf8');const script=html.match(/<script>([\s\S]*)<\/script>/)[1];
let listeners={};const elements={};const el=id=>elements[id]??=( {value:'',innerHTML:'',textContent:'',hidden:true,disabled:false,addEventListener(){},setAttribute(){},classList:{toggle(){}}} );
const storage={};const ctx=vm.createContext({console,crypto:webcrypto,TextEncoder,Blob,URL,setTimeout(){},clearTimeout(){},confirm:()=>true,localStorage:{getItem:k=>storage[k],setItem:(k,v)=>storage[k]=v},document:{querySelector:s=>el(s),querySelectorAll:()=>[],addEventListener:(t,cb)=>listeners[t]=cb},window:{},navigator:{}});
vm.runInContext(script,ctx);const run=s=>vm.runInContext(s,ctx);const click=async(id,dataset={})=>listeners.click({target:{closest:()=>({id,dataset,disabled:false,setAttribute(){}})}});
(async()=>{
assert.equal(run('DECK.length'),28);
assert.equal(run('new Set(DECK.map(c=>c.id)).size'),28);
assert.equal(run('new Set(INITIAL_CARDS.map(c=>c.name)).size'),14);
assert.equal(run('JSON.stringify(INITIAL_CARDS.map(c=>c.name))'),run('JSON.stringify(VARIANT_CARDS.map(c=>c.name))'));
assert.equal(run('VARIANT_CARDS.every((c,i)=>c.bg!==INITIAL_CARDS[i].bg && drawing(c)!==drawing(INITIAL_CARDS[i]))'),true);
assert.equal(run('state.root.cards.length'),14);
assert.deepEqual(Array.from(run('BASE')), ['cao','baleia','tartaruga','coelho','peixe','caranguejo','aranha','cobra','abelha','mosca','minhoca','pato','galinha','pinguim']);
assert.match(el('#app').innerHTML,/Por separar/);
run("state.drafts.root.q='Tem asas?';BASE.forEach((id,i)=>state.drafts.root.assign[id]=i<6?'yes':'no')");
await click('commit');assert.equal(run('stats().questions'),1);assert.equal(run('state.root.yes.cards.length'),6);assert.equal(run('state.root.no.cards.length'),8);
run("state.selected=state.root.yes.id;render();state.drafts[state.selected].q='É mamífero?';find(state.selected).cards.forEach((id,i)=>state.drafts[state.selected].assign[id]=i<3?'yes':'no')");await click('commit');assert.equal(run('stats().questions'),2);assert.equal(run('stats().depth'),2);
run("state.tab='tree';render()");assert.match(el('#app').innerHTML,/Tem asas/);assert.match(el('#app').innerHTML,/É mamífero/);
assert.equal(run('validate(exportState()).root.yes.yes.cards.length'),3);
assert.throws(()=>run("validate({...exportState(), root:{...state.root,cards:['coelho']}})"));
assert.throws(()=>run("validate({...exportState(),root:{...state.root,yes:{...state.root.yes,cards:['coelho','coelho']}}})"));
for(const c of run('DECK.filter(c=>c.animal)')){assert.match(run(`drawing(DECK.find(c=>c.id==='${c.id}'))`),/<svg/)}
const keys=new Set();for(let i=0;i<320;i++){const id=run(`DECK[${i%28}].id`);const key=await run(`makeKey('${id}')`);assert.equal(await run(`decodeKey('${key}')`),id);assert.equal(key.length,5);keys.add(key)}
const key=await run("makeKey('cao-preto')");await assert.rejects(run(`decodeKey('${key.slice(0,-1)+(key.endsWith('0')?'1':'0')}')`));await assert.rejects(run("decodeKey('invalid')"));
run("state.tab='play';state.game.key="+JSON.stringify(key)+";render()");assert(!el('#app').innerHTML.includes('Pelo preto em vez de branco'));assert.match(el('#app').innerHTML,/A outra equipa sabe/);
await click('',{answer:'yes'});assert.equal(run('state.game.history.length'),1);await click('',{answer:'no'});assert.equal(run('state.game.history.length'),2);await click('backGame');assert.equal(run('state.game.history.length'),1);await click('restartGame');assert.equal(run('state.game.node'),'root');
run("state.drafts.root={q:'Pergunta guardada?',assign:{coelho:'yes'}};persist();const old=JSON.parse(JSON.stringify(state));state=validate(old);restoreSession(old)");assert.equal(run('state.game.key'),key);assert.equal(run('state.tab'),'play');
// Actual leaf result: manual judgment, not automatic classification.
run("state.game.node=state.root.no.id;state.game.history=[{node:'root',q:'Tem asas?',a:'no'}];render()");el('#guess').value='Sem decisão';await click('',{result:'Indecisão'});assert.equal(run('state.rounds.length'),1);assert.equal(run('state.rounds[0].actual'),'Cão');assert.equal(run('state.game.finished'),true);await click('',{result:'Acerto'});assert.equal(run('state.rounds.length'),1);
run("state.team='<script>alert(1)</script>';state.reflections.r0='<img src=x>';state.tab='reflect';render()");assert(!el('#app').innerHTML.includes('<img src=x>'));assert.equal(run('exportState().game.key'),'');assert.equal(run('exportState().opponents.length'),0);
for(const t of ['build','tree','play','reflect','guide']){run(`state.tab='${t}';render()`);assert(el('#app').innerHTML.length>100)}
run("state.tab='play';state.game=fresh().game;render()");
assert.match(el('#app').innerHTML,/14 cartas iniciais/);
assert.match(el('#app').innerHTML,/14 variantes/);
assert.doesNotMatch(el('#app').innerHTML,/option value="(?:novel|all)"/);
for(const pool of ['base','variation']){
  el('#pool').value=pool;
  await click('generate');
  const id=await run('decodeKey(state.game.key)');
  assert(run(`POOLS.${pool}`).includes(id));
}
run("state.tab='build';state.selected=state.root.no.id;render()");assert.match(el('#app').innerHTML,/id="openDecision"/);assert(!el('#app').innerHTML.includes('Ou termina este ramo'));await click('openDecision');assert.equal(el('#decisionEditor').hidden,false);el('#leafLabel').value='Informação insuficiente';await click('saveLabel');assert.equal(run('find(state.selected).label'),'Informação insuficiente');assert.match(el('#app').innerHTML,/Decisão atual do ramo/);el('#leafLabel').value='';await click('saveLabel');assert.equal(run('find(state.selected).label'),'Informação insuficiente');
assert.match(run('imageSVG(treeImage())'), /Sim/);assert.match(run('imageSVG(treeImage())'), /&lt;script&gt;/);assert.match(run('imageSVG(resultsImage())'), /Indecisão/);run('state.rounds=[]');assert.match(run('imageSVG(resultsImage())'), /Ainda não/);run("state.root=fresh().root;state.root.label='W'.repeat(300)");assert(run('treeImage().h')>400);assert.match(run('answersText()'), /Atividade #PC01/);assert.match(run('answersText()'), /<img src=x>/);assert.match(run('answersText()'), /Sem resposta/);// Old keys retain their original card slots; removed cards are rejected.
for(let i=0;i<40;i++){const legacy=await run(`(async()=>{const nonce='AAAAAAAAAAAAAAAA',mask=await digest('quem-sou-eu:deck2:'+nonce),payload=(${i}^parseInt(mask.slice(0,2),16)).toString(16).padStart(2,'0').toUpperCase();return 'QS2-'+nonce+'-'+payload+'-'+(await digest('QS2:'+nonce+':'+payload)).slice(0,8)})()`);const decoded=run('decodeKey('+JSON.stringify(legacy)+')');const id=run('KEY_SLOTS['+i+']');if(id)assert.equal(await decoded,id);else await assert.rejects(decoded,/Carta não reconhecida/)}
// Multi-team guardian: add, replace, reject own/duplicate keys, persist, migrate and remove.
run("state.tab='play';state.root=fresh().root;state.opponents=[];render()");
const guardA=await run("makeKey('coelho')"),guardB=await run("makeKey('cao-preto')"),guardC=await run("makeKey('pato')");
el('#incomingTeam').value='Azul';el('#incoming').value=guardA;await click('decode');
el('#incomingTeam').value='<img src=x>';el('#incoming').value=guardB;await click('decode');
assert.equal(run('state.opponents.length'),2);assert.match(el('#app').innerHTML,/Azul/);assert(!el('#app').innerHTML.includes('<img src=x>'));
el('#incomingTeam').value='azul';el('#incoming').value=guardC;await click('decode');assert.equal(run('state.opponents.length'),2);assert.equal(run('state.opponents[0].id'),'pato');
el('#incomingTeam').value='Verde';el('#incoming').value=guardB;await click('decode');assert.equal(run('state.opponents.length'),2);
el('#incoming').value=run('state.game.key');await click('decode');assert.equal(run('state.opponents.length'),2);
run('const savedGuard=JSON.parse(JSON.stringify(state));state=validate(savedGuard);restoreSession(savedGuard)');assert.equal(run('state.opponents.length'),2);assert.equal(run('exportState().opponents.length'),0);
await click('',{removeOpponent:'0'});assert.equal(run('state.opponents.length'),1);
await click('clearOpponent');assert.equal(run('state.opponents.length'),0);
run('restoreSession({opponent:{key:'+JSON.stringify(guardA)+',id:"coelho"}})');assert.equal(run('state.opponents[0].name'),'Equipa 1');
run('restoreSession({opponents:[null,{key:"invalid",id:"coelho"}]})');assert.equal(run('state.opponents.length'),0);
assert(run('VARIANT_CARDS.some(c=>c.mirror)'));
assert(run('VARIANT_CARDS.some(c=>c.rotation)'));
assert(run('VARIANT_CARDS.some(c=>c.scale)'));
assert(run('VARIANT_CARDS.some(c=>c.art)'));
assert(run('DECK.every(c=>/<(?:path|ellipse|circle|rect) /.test(drawing(c)))'));
console.log('PASS: manual partitions, recursive tree, import validation, 320 short-key round-trips and legacy QS2 compatibility, invalid key rejection, hidden card, game traversal, undo, persistence, round journal, escaping and all views.');
})().catch(e=>{console.error(e);process.exitCode=1});
