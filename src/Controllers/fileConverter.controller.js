const _0xef63=['845681AUQbwI','png','rmdirSync','existsSync','38aVHXDe','14710bsdSNC','bitmap','read','mkdirSync','2775','No\x20se\x20pudo\x20crear\x20todos\x20los\x20archivos.','.zip','No\x20es\x20necesario\x20convertir\x20el\x20archivo.','size','pop','JPEG','_maxListeners','addImage','resize','EventEmitter','jspdf','file.pdf\x20[','94pDalcK','Se\x20ha\x20creado\x20la\x20imagen\x20de\x20la\x20pagina\x20','get','width','.jpg','config','split','file.pdf','1721LhYScf','match','t254','readdirSync','t257','tiff','density','end','.pdf','path','length','Error\x20during\x20HTTP\x20request','forEach','numero\x20de\x20ciclos\x20calculados:\x20','random','160tQEfqd','json','No\x20se\x20ha\x20encontrado\x20el\x20archivo.','quality','t258','jpg','query','No\x20se\x20ha\x20logrado\x20consegir\x20la\x20imagen.','No\x20es\x20necesario\x20convertir.','function','rgba','./respuesta','jimp','MIME_JPEG','catch','error','chmodSync','setPage','payload','0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ','convirtiendo\x20','data','message','prototype','encodeImage','.tiff','jpeg','writeHead','then','exports','undefined','t256','tif','Error\x20con\x20la\x20conversion.','compress','\x20Paginas\x20convertidas','decodeImage','toLowerCase','%p\x20','unlinkSync','dotenv','157dqisyk','Este\x20documento\x20no\x20puede\x20ser\x20convertido.','No\x20se\x20ha\x20podido\x20crear\x20la\x20carpeta\x20contenedora.','save','write','log','../tmp/','zip','447740FSaZMZ','5AZbcnf','addPage','height','sync','toRGBA8','text/plain','pdf','zip-local','utif','No\x20se\x20ha\x20logrado\x20consegir\x20el\x20archivo.','status','push','join','27529kvArbd','floor','stringify','605394CerAIj'];const _0x3c2c=function(_0xdf50b,_0x526bdf){_0xdf50b=_0xdf50b-0x191;let _0xef630e=_0xef63[_0xdf50b];return _0xef630e;};const _0x636770=_0x3c2c;(function(_0x80a256,_0x2f0ddc){const _0x41779f=_0x3c2c;while(!![]){try{const _0xf4816c=-parseInt(_0x41779f(0x1a5))+-parseInt(_0x41779f(0x195))*-parseInt(_0x41779f(0x1a2))+parseInt(_0x41779f(0x1c4))*parseInt(_0x41779f(0x1bc))+parseInt(_0x41779f(0x1d3))*parseInt(_0x41779f(0x1fc))+parseInt(_0x41779f(0x194))+parseInt(_0x41779f(0x1aa))*-parseInt(_0x41779f(0x1ab))+parseInt(_0x41779f(0x1a6));if(_0xf4816c===_0x2f0ddc)break;else _0x80a256['push'](_0x80a256['shift']());}catch(_0x1f03f7){_0x80a256['push'](_0x80a256['shift']());}}}(_0xef63,0x6ebd2));const UTIF=require(_0x636770(0x19d)),{jsPDF}=require(_0x636770(0x1ba)),Jimp=require(_0x636770(0x1df)),fs=require('fs'),https=require('https'),path=require(_0x636770(0x1cd)),gm=require('gm'),zipper=require(_0x636770(0x19c));require('events')[_0x636770(0x1b9)][_0x636770(0x1ea)][_0x636770(0x1b6)]=0x64;const respuesta=require(_0x636770(0x1de));let tmp_dir=path[_0x636770(0x1a1)](__dirname,_0x636770(0x192));require(_0x636770(0x1fb))[_0x636770(0x1c1)]();const tmp_path=function(_0x536a5a){tmp_dir=_0x536a5a;},download2PDF=(_0x4f9ab9,_0xfd4545)=>{const _0xaeeffa=_0x636770;let {filepath:_0x1cf2e5}=_0x4f9ab9[_0xaeeffa(0x1d9)],_0x6c64e7=_0x1cf2e5['split']('.'),_0x2d14bc=_0x6c64e7[_0xaeeffa(0x1b4)]();_0x2d14bc=_0x2d14bc[_0xaeeffa(0x1f8)]();switch(_0x2d14bc){case'jpg':case'jpeg':case'png':img2PDF(_0x1cf2e5,_0x458956=>{returnFile(_0xfd4545,_0x458956);});break;case'pdf':_0xfd4545['status'](0x190)[_0xaeeffa(0x1d4)](respuesta['ok'](_0xaeeffa(0x1b2)));break;case _0xaeeffa(0x1c9):case _0xaeeffa(0x1f3):tiff2PDF(_0x1cf2e5,_0x4d0718=>{returnFile(_0xfd4545,_0x4d0718);});break;default:_0xfd4545[_0xaeeffa(0x19f)](0x190)[_0xaeeffa(0x1d4)](respuesta[_0xaeeffa(0x1e2)](_0xaeeffa(0x1fd)));break;}},download2TIFF=(_0x4a2b27,_0x4b2f35)=>{const _0x4bd5c9=_0x636770;let {filepath:_0x317424}=_0x4a2b27[_0x4bd5c9(0x1d9)],_0xc86553=_0x317424[_0x4bd5c9(0x1c2)]('.'),_0x40dd9a=_0xc86553[_0x4bd5c9(0x1b4)]();_0x40dd9a=_0x40dd9a['toLowerCase']();switch(_0x40dd9a){case _0x4bd5c9(0x1d8):case _0x4bd5c9(0x1ed):case _0x4bd5c9(0x1a7):img2tiff(_0x317424,_0x47cc61=>{returnFile(_0x4b2f35,_0x47cc61);});break;case _0x4bd5c9(0x19b):PDF2tiff(_0x317424,_0x48c294=>{returnFile(_0x4b2f35,_0x48c294);});break;case _0x4bd5c9(0x1c9):case _0x4bd5c9(0x1f3):_0x4b2f35[_0x4bd5c9(0x19f)](0xc8)['json'](respuesta['ok'](_0x4bd5c9(0x1b2)));break;default:_0x4b2f35[_0x4bd5c9(0x19f)](0xc8)[_0x4bd5c9(0x1d4)](respuesta[_0x4bd5c9(0x1e2)](_0x4bd5c9(0x1fd)));break;}},download2IMG=(_0x5849f5,_0x45cc77)=>{const _0x36aee2=_0x636770;let {filepath:_0x354df1}=_0x5849f5[_0x36aee2(0x1d9)],_0x4b6819=_0x354df1[_0x36aee2(0x1c2)]('.'),_0x4e55eb=_0x4b6819[_0x36aee2(0x1b4)]();_0x4e55eb=_0x4e55eb[_0x36aee2(0x1f8)]();switch(_0x4e55eb){case'jpg':case'jpeg':case _0x36aee2(0x1a7):_0x45cc77[_0x36aee2(0x19f)](0xc8)[_0x36aee2(0x1d4)](respuesta['ok'](_0x36aee2(0x1db)));break;case'pdf':PDF2img(_0x354df1,_0x1ceb21=>{returnFile(_0x45cc77,_0x1ceb21);});break;case _0x36aee2(0x1c9):case'tif':tiff2img(_0x354df1,_0x494846=>{returnFile(_0x45cc77,_0x494846);});break;default:_0x45cc77[_0x36aee2(0x19f)](0xc8)[_0x36aee2(0x1d4)](respuesta[_0x36aee2(0x1e2)](_0x36aee2(0x1fd)));break;}};module[_0x636770(0x1f0)]={'download2PDF':download2PDF,'download2TIFF':download2TIFF,'download2IMG':download2IMG,'tmp_path':tmp_path};const returnFile=function(_0x34b7e4,_0x1ea67f){const _0x4b95ee=_0x636770;if(_0x1ea67f['estado'])try{let {filepath_nuevo:_0x50b9a4,filename_original:_0xb8258}=_0x1ea67f[_0x4b95ee(0x1e5)];_0x34b7e4['download'](_0x50b9a4,_0xb8258,_0x353498=>{const _0x2b0f76=_0x4b95ee;if(_0x353498){}else fs[_0x2b0f76(0x1fa)](_0x50b9a4);});}catch(_0x331ca6){console[_0x4b95ee(0x191)](_0x331ca6),_0x34b7e4['writeHead'](0x190,{'Content-Type':_0x4b95ee(0x19a)}),_0x34b7e4[_0x4b95ee(0x1cb)]('El\x20archivo\x20no\x20pudo\x20ser\x20generado.');}else console['log'](_0x1ea67f),_0x34b7e4[_0x4b95ee(0x1ee)](0x190,{'Content-Type':'text/plain'}),_0x34b7e4[_0x4b95ee(0x1cb)]('ERROR\x20File\x20does\x20NOT\x20Exist.');},img2tiff=(_0x2ec6a6,_0x1ef72b)=>{const _0x2f9503=_0x636770;let _0x460820=_0x2ec6a6[_0x2f9503(0x1c2)]('/')['pop']()[_0x2f9503(0x1c2)]('.');_0x460820[_0x2f9503(0x1b4)](),_0x460820=_0x460820['join']('.');let _0x5d14e8=_0x2f9503(0x1ec);Jimp[_0x2f9503(0x1ad)](_0x2ec6a6)[_0x2f9503(0x1ef)](_0x80fcf3=>{const _0x536ca9=_0x2f9503;let _0x49ce52=UTIF[_0x536ca9(0x1eb)](_0x80fcf3[_0x536ca9(0x1ac)][_0x536ca9(0x1e8)],_0x80fcf3[_0x536ca9(0x1ac)][_0x536ca9(0x1bf)],_0x80fcf3[_0x536ca9(0x1ac)][_0x536ca9(0x197)]),_0x1e1a8e=Buffer['from'](_0x49ce52),_0x373de5=nameGenerator(0xa)+_0x5d14e8,_0x3f46d2=path[_0x536ca9(0x1a1)](tmp_dir,_0x373de5);fs['writeFile'](_0x3f46d2,_0x1e1a8e,function(_0x2e1411){const _0x47825c=_0x536ca9;_0x2e1411?(console[_0x47825c(0x191)](_0x2e1411),_0x1ef72b(respuesta[_0x47825c(0x1e2)]('No\x20se\x20ha\x20logrado\x20crear\x20al\x20archivo.'))):_0x1ef72b(respuesta['ok']({'filepath_nuevo':_0x3f46d2,'filename_original':_0x460820+_0x5d14e8}));});})[_0x2f9503(0x1e1)](_0x4842a=>{const _0xfcff22=_0x2f9503;console[_0xfcff22(0x191)](_0x4842a),_0x1ef72b(respuesta[_0xfcff22(0x1e2)]('No\x20se\x20ha\x20logrado\x20consegir\x20la\x20imagen.'));});},img2PDF=(_0x34d9e0,_0x1aaa27)=>{const _0x4c4e9d=_0x636770;let _0x3a7f55=_0x34d9e0[_0x4c4e9d(0x1c2)]('/')[_0x4c4e9d(0x1b4)]()[_0x4c4e9d(0x1c2)]('.');_0x3a7f55[_0x4c4e9d(0x1b4)](),_0x3a7f55=_0x3a7f55[_0x4c4e9d(0x1a1)]('.');let _0x545468=_0x4c4e9d(0x1cc);Jimp[_0x4c4e9d(0x1ad)](_0x34d9e0)['then'](_0x3d7ef2=>{const _0x243836=_0x4c4e9d,_0x3d315a=new jsPDF('p','mm',[_0x3d7ef2[_0x243836(0x1ac)][_0x243836(0x1bf)]*1.3,_0x3d7ef2[_0x243836(0x1ac)][_0x243836(0x197)]*1.3]);_0x3d7ef2['getBase64'](Jimp['MIME_JPEG'],function(_0x4ca96a,_0x116bfb){const _0x520f54=_0x243836;_0x3d315a[_0x520f54(0x1b7)](_0x116bfb,_0x520f54(0x1b5),0x0,0x0,_0x3d7ef2[_0x520f54(0x1ac)]['width'],_0x3d7ef2[_0x520f54(0x1ac)][_0x520f54(0x197)]);let _0x405367=nameGenerator(0xa)+_0x545468,_0x131eb2=path[_0x520f54(0x1a1)](tmp_dir,_0x405367);console[_0x520f54(0x191)](_0x131eb2),_0x3d315a[_0x520f54(0x1ff)](_0x131eb2),_0x1aaa27(respuesta['ok']({'filepath_nuevo':_0x131eb2,'filename_original':_0x3a7f55+_0x545468}));});})[_0x4c4e9d(0x1e1)](_0x1142f0=>{const _0x55317d=_0x4c4e9d;console[_0x55317d(0x191)](_0x1142f0),_0x1aaa27(respuesta['error'](_0x55317d(0x1da)));});},tiff2PDF=function(_0x3bf197,_0x3bb6e7){const _0xe7438f=_0x636770;let _0x510c42=_0x3bf197[_0xe7438f(0x1c2)]('/')[_0xe7438f(0x1b4)]()[_0xe7438f(0x1c2)]('.');_0x510c42[_0xe7438f(0x1b4)](),_0x510c42=_0x510c42[_0xe7438f(0x1a1)]('.');let _0x450455='.pdf';tiff2ArrayBuffer(_0x3bf197,async function(_0x26f648,_0x3590a6){const _0x13289a=_0xe7438f;if(_0x26f648['length']==0x0)return _0x3bb6e7(respuesta['error'](_0x13289a(0x19e))),![];let _0x3a6e84=_0x26f648['length'],_0x62069d=0x0,_0x9dccc9=0x1;const _0x12db9c=new jsPDF('p','mm',[_0x26f648[0x0][_0x13289a(0x1f2)][0x0]*_0x9dccc9,_0x26f648[0x0]['t257'][0x0]*_0x9dccc9]);let _0xd0e7fa=0x0,_0x1912e5=tiffsizeExtraPage(_0x26f648,_0x3590a6);for(let _0x17d0cb of _0x26f648){let _0x3bc5b2=tiffPage2RGBA(_0x3590a6,_0x17d0cb,_0xd0e7fa);if(_0x3bc5b2[_0x13289a(0x1dd)][_0x13289a(0x1ce)]!=0x0){let _0x121603=await RGBA2Base64(_0x3bc5b2);_0x62069d==0x0?_0x12db9c[_0x13289a(0x1b7)](_0x121603['src'],'JPEG',0x0,0x0,_0x121603[_0x13289a(0x1bf)],_0x121603[_0x13289a(0x197)]):(_0x12db9c[_0x13289a(0x196)]([_0x121603[_0x13289a(0x1bf)]*_0x9dccc9,_0x121603['height']*_0x9dccc9]),_0x12db9c[_0x13289a(0x1e4)](_0x62069d+0x1),_0x12db9c[_0x13289a(0x1b7)](_0x121603['src'],_0x13289a(0x1b5),0x0,0x0,_0x121603[_0x13289a(0x1bf)],_0x121603['height']));_0x62069d++,console[_0x13289a(0x191)](_0x62069d+_0x13289a(0x1f6));if(_0x62069d>=_0x3a6e84){let _0x2a479b=nameGenerator(0xa)+_0x450455,_0x3d63c5=path[_0x13289a(0x1a1)](tmp_dir,_0x2a479b);console[_0x13289a(0x191)](_0x3d63c5),_0x12db9c[_0x13289a(0x1ff)](_0x3d63c5),_0x3bb6e7(respuesta['ok']({'filepath_nuevo':_0x3d63c5,'filename_original':_0x510c42+_0x450455}));}}_0xd0e7fa+=_0x3bc5b2[_0x13289a(0x1b3)]+_0x1912e5;}});},tiff2img=function(_0x16dca2,_0x353445){const _0x2fade6=_0x636770;let _0x4feac9=_0x16dca2['split']('/')[_0x2fade6(0x1b4)]()[_0x2fade6(0x1c2)]('.');_0x4feac9[_0x2fade6(0x1b4)](),_0x4feac9=_0x4feac9[_0x2fade6(0x1a1)]('.');let _0x124012=_0x2fade6(0x1b1);tiff2ArrayBuffer(_0x16dca2,async function(_0x185b85,_0x4a99d4){const _0x444d86=_0x2fade6;if(_0x185b85[_0x444d86(0x1ce)]==0x0)return _0x353445(respuesta[_0x444d86(0x1e2)](_0x444d86(0x19e))),![];let _0x21f4af=nameGenerator(0xa),_0x47c3e4=path[_0x444d86(0x1a1)](tmp_dir,_0x21f4af);if(!fs[_0x444d86(0x1a9)](_0x47c3e4))try{fs[_0x444d86(0x1ae)](_0x47c3e4,{'recursive':!![]}),fs['chmodSync'](_0x47c3e4,_0x444d86(0x1af));}catch(_0x5e917a){return console[_0x444d86(0x1e2)](_0x5e917a),_0x353445(respuesta[_0x444d86(0x1e2)]('No\x20se\x20ha\x20podido\x20crear\x20la\x20carpeta\x20contenedora.')),![];}let _0x549476=0x0,_0x15df3b=tiffsizeExtraPage(_0x185b85,_0x4a99d4),_0x15e547=!![];for(let _0x3a5339 in _0x185b85){console[_0x444d86(0x191)]('Convirtiendo\x20pagina\x20'+_0x3a5339);let _0x42d054=tiffPage2RGBA(_0x4a99d4,_0x185b85[_0x3a5339],_0x549476);if(_0x42d054[_0x444d86(0x1dd)]['length']!=0x0){let _0x6e3f88=path['join'](tmp_dir,_0x21f4af+'/'+_0x4feac9+'_'+_0x3a5339+_0x444d86(0x1c0)),_0x3857b8=await saveRGBA(_0x42d054,_0x6e3f88);!_0x3857b8&&(_0x15e547=![]);}_0x549476+=_0x42d054[_0x444d86(0x1b3)]+_0x15df3b;}if(!_0x15e547)return _0x353445(respuesta['error'](_0x444d86(0x1b0))),deleteFolderRecursive(_0x47c3e4),![];try{zipper[_0x444d86(0x198)]['zip'](_0x47c3e4)[_0x444d86(0x1f5)]()[_0x444d86(0x1ff)](_0x47c3e4+_0x124012),deleteFolderRecursive(_0x47c3e4),_0x353445(respuesta['ok']({'filepath_nuevo':_0x47c3e4+_0x124012,'filename_original':_0x4feac9+_0x124012}));}catch(_0x15e9c8){console[_0x444d86(0x1e2)](_0x15e9c8),_0x353445(respuesta[_0x444d86(0x1e2)](_0x444d86(0x1f4)));}});},PDF2tiff=function(_0x2843aa,_0x478449){const _0x5bc2ca=_0x636770;let _0x3ad524=_0x2843aa[_0x5bc2ca(0x1c2)]('/')[_0x5bc2ca(0x1b4)]()[_0x5bc2ca(0x1c2)]('.');_0x3ad524['pop'](),_0x3ad524=_0x3ad524['join']('.');let _0x35ae8d=_0x5bc2ca(0x1ec);https['get'](_0x2843aa,function(_0x3abd4b){const _0x408dfc=_0x5bc2ca;let _0x5edd4a=nameGenerator(0xa)+_0x35ae8d,_0x5f2a2d=path[_0x408dfc(0x1a1)](tmp_dir,_0x5edd4a);console[_0x408dfc(0x191)](_0x408dfc(0x1e7)+_0x5edd4a),gm(_0x3abd4b,_0x408dfc(0x1c3))[_0x408dfc(0x1ca)](0x258,0x258)['resize'](0x400)['quality'](0x64)['write'](_0x5f2a2d,function(_0x440701){const _0xa6e6e0=_0x408dfc;_0x440701?(console['error'](_0x440701),_0x478449(respuesta[_0xa6e6e0(0x1e2)](_0xa6e6e0(0x19e)))):_0x478449(respuesta['ok']({'filepath_nuevo':_0x5f2a2d,'filename_original':_0x3ad524+_0x35ae8d}));});})['on'](_0x5bc2ca(0x1e2),function(_0x3455ba){const _0x355fe7=_0x5bc2ca;console['error'](_0x3455ba),_0x478449(respuesta['error'](_0x355fe7(0x1d5)));});},PDF2img=async function(_0x2b008a,_0x1d9eac){const _0x10f9f=_0x636770;let _0x20197d=_0x2b008a[_0x10f9f(0x1c2)]('/')[_0x10f9f(0x1b4)]()['split']('.');_0x20197d[_0x10f9f(0x1b4)](),_0x20197d=_0x20197d['join']('.');let _0x146787=_0x10f9f(0x1b1),_0x561903=await getPageListPDF(_0x2b008a);console[_0x10f9f(0x191)](_0x561903);let _0xc15a3f=0xa,_0x4a2e8b=nameGenerator(0xa),_0x25b8d2=path[_0x10f9f(0x1a1)](tmp_dir,_0x4a2e8b);if(!fs[_0x10f9f(0x1a9)](_0x25b8d2))try{fs[_0x10f9f(0x1ae)](_0x25b8d2,{'recursive':!![]}),fs[_0x10f9f(0x1e3)](_0x25b8d2,_0x10f9f(0x1af));}catch(_0x1d339a){return console[_0x10f9f(0x1e2)](_0x1d339a),_0x1d9eac(respuesta[_0x10f9f(0x1e2)](_0x10f9f(0x1fe))),![];}let _0x468bb9=parseInt(_0x561903/_0xc15a3f);_0x468bb9=_0x561903%_0xc15a3f==0x0?_0x468bb9:_0x468bb9+0x1,console[_0x10f9f(0x191)](_0x10f9f(0x1d1)+_0x468bb9);let _0x550b46=!![];for(let _0x5a97d8=0x0;_0x5a97d8<_0x468bb9;_0x5a97d8++){let _0x545e9f=_0x5a97d8*_0xc15a3f+0x1,_0x4ae383=await convertPDFPage2IMG(_0x2b008a,_0x4a2e8b,_0x20197d,_0x561903,_0x545e9f,_0xc15a3f);!_0x4ae383&&(_0x550b46=![]);}if(!_0x550b46)return _0x1d9eac(respuesta[_0x10f9f(0x1e2)](_0x10f9f(0x1b0))),deleteFolderRecursive(_0x25b8d2),![];try{zipper['sync'][_0x10f9f(0x193)](_0x25b8d2)['compress']()[_0x10f9f(0x1ff)](_0x25b8d2+_0x146787),deleteFolderRecursive(_0x25b8d2),_0x1d9eac(respuesta['ok']({'filepath_nuevo':_0x25b8d2+_0x146787,'filename_original':_0x20197d+_0x146787}));}catch(_0x4336f2){console[_0x10f9f(0x1e2)](_0x4336f2),_0x1d9eac(respuesta[_0x10f9f(0x1e2)]('Error\x20con\x20la\x20conversion.'));}},convertPDFPage2IMG=function(_0x18f343,_0x2783f2,_0x7461ba,_0x424230,_0x488300,_0x5ef154){return new Promise(function(_0x408ccc,_0x3fc961){const _0x379144=_0x3c2c;try{if(_0x424230>=_0x488300){console[_0x379144(0x191)]('Inicio\x20de\x20la\x20parte\x20'+_0x488300);let _0x42f064=!![],_0x3f2e0e=0x0,_0x52cf6e=_0x424230<_0x488300+_0x5ef154?_0x424230:_0x488300+_0x5ef154;https[_0x379144(0x1be)](_0x18f343,function(_0x32680f){const _0x592798=_0x379144;_0x3f2e0e=_0x488300;for(let _0x2b2e8e=_0x488300-0x1;_0x2b2e8e<_0x52cf6e;_0x2b2e8e++){let _0x3caed0=path[_0x592798(0x1a1)](tmp_dir,_0x2783f2+'/'+_0x7461ba+'_'+_0x2b2e8e+_0x592798(0x1c0));gm(_0x32680f,_0x592798(0x1bb)+_0x2b2e8e+']')[_0x592798(0x1ca)](0x258,0x258)[_0x592798(0x1b8)](0x400)[_0x592798(0x1d6)](0x64)[_0x592798(0x200)](_0x3caed0,function(_0x4ebd0e){const _0x509289=_0x592798;_0x4ebd0e&&(console[_0x509289(0x191)](_0x4ebd0e),_0x42f064=![]),_0x3f2e0e++,_0x3f2e0e>_0x52cf6e&&(console[_0x509289(0x191)](_0x3f2e0e),_0x408ccc(_0x42f064)),console[_0x509289(0x191)](_0x509289(0x1bd)+(_0x2b2e8e+0x1)+'!');});}})['on']('error',function(_0x147b6f){const _0x5f074d=_0x379144;console[_0x5f074d(0x1e2)](_0x147b6f),_0x408ccc(![]);});}else _0x408ccc(![]);}catch(_0x3bd551){console[_0x379144(0x1e2)](_0x3bd551),_0x408ccc(![]);}});},getPageListPDF=function(_0x200630){return new Promise(function(_0x5f2f22,_0x4ff7ec){try{https['get'](_0x200630,function(_0x20841f){const _0x25aff3=_0x3c2c;gm(_0x20841f)['identify'](_0x25aff3(0x1f9),function(_0x109906,_0xf34702){const _0x4cd00e=_0x25aff3;if(_0x109906)console[_0x4cd00e(0x191)](_0x109906),_0x4ff7ec(0x0);else{let _0x4b22f2=_0xf34702['toString']()[_0x4cd00e(0x1c5)](/[0-9]+/g);_0x5f2f22(_0x4b22f2[_0x4cd00e(0x1ce)]);}});});}catch(_0x23e2ad){console['error'](_0x23e2ad),_0x4ff7ec(0x0);}});},deleteFolderRecursive=function(_0x4ab6c2){const _0x3ab170=_0x636770;if(fs[_0x3ab170(0x1a9)](_0x4ab6c2)){fs[_0x3ab170(0x1c7)](_0x4ab6c2)[_0x3ab170(0x1d0)]((_0x1d82a7,_0x580af9)=>{const _0x32f416=_0x3ab170,_0xa27da9=path[_0x32f416(0x1a1)](_0x4ab6c2,_0x1d82a7);if(fs['lstatSync'](_0xa27da9)['isDirectory']())deleteFolderRecursive(_0xa27da9);else try{fs['unlinkSync'](_0xa27da9);}catch(_0xbeb42f){return![];}});try{return fs[_0x3ab170(0x1a8)](_0x4ab6c2),!![];}catch(_0x1c9d27){return![];}}},tiff2RGB=function(_0x211abf,_0x30909b){getTiffFileBinary(_0x211abf,function(_0x235e17,_0x1398db){const _0x1f328f=_0x3c2c;let _0x3f341a=[];if(_0x1398db)return typeof _0x30909b==_0x1f328f(0x1dc)&&_0x30909b(_0x3f341a),![];const _0x1d2597=UTIF['decode'](_0x235e17);_0x1d2597[_0x1f328f(0x1ce)]==0x0&&(typeof _0x30909b==_0x1f328f(0x1dc)&&_0x30909b(_0x3f341a));console[_0x1f328f(0x191)](_0x1d2597['length']);if(JSON[_0x1f328f(0x1a4)](_0x1d2597[0x0][_0x1f328f(0x1d7)])==JSON[_0x1f328f(0x1a4)]([0x10,0x10])){var _0x1cbcd3=new Uint8Array(_0x235e17);let _0x57e03e=_0x1d2597[_0x1f328f(0x1ce)],_0x2cdc4c=0x0;for(let _0x2cdc5b of _0x1d2597){_0x3f341a['push']({'width':_0x2cdc5b['t256'][0x0],'height':_0x2cdc5b['t257'][0x0],'size':Number(_0x2cdc5b[_0x1f328f(0x1c8)][0x0]*_0x2cdc5b['t256'][0x0]*0x4),'rgba':[]}),_0x2cdc4c+=Number(_0x2cdc5b[_0x1f328f(0x1c8)][0x0]*_0x2cdc5b[_0x1f328f(0x1f2)][0x0]*0x4);}let _0x479442=(_0x1cbcd3[_0x1f328f(0x1ce)]-_0x2cdc4c-_0x1cbcd3[_0x1f328f(0x1ce)]%0x4)/_0x57e03e,_0x20e264=0x0;for(let _0x25559f in _0x3f341a){for(let _0x10efaf=_0x20e264;_0x10efaf<_0x20e264+_0x3f341a[_0x25559f][_0x1f328f(0x1b3)];_0x10efaf+=0x4){_0x3f341a[_0x25559f]['rgba'][_0x1f328f(0x1a0)](_0x1cbcd3[_0x10efaf]),_0x3f341a[_0x25559f]['rgba']['push'](_0x1cbcd3[_0x10efaf+0x1]),_0x3f341a[_0x25559f][_0x1f328f(0x1dd)][_0x1f328f(0x1a0)](_0x1cbcd3[_0x10efaf]),_0x3f341a[_0x25559f][_0x1f328f(0x1dd)][_0x1f328f(0x1a0)](0xff);}_0x20e264+=_0x3f341a[_0x25559f][_0x1f328f(0x1b3)]+_0x479442;}}else for(let _0x5a9caf=0x0;_0x5a9caf<_0x1d2597['length'];_0x5a9caf++){UTIF[_0x1f328f(0x1f7)](_0x235e17,_0x1d2597[_0x5a9caf]),_0x3f341a[_0x1f328f(0x1a0)]({'width':_0x1d2597[_0x5a9caf][_0x1f328f(0x1f2)][0x0],'height':_0x1d2597[_0x5a9caf][_0x1f328f(0x1c8)][0x0],'size':Number(_0x1d2597[_0x5a9caf][_0x1f328f(0x1c8)][0x0]*_0x1d2597[_0x5a9caf][_0x1f328f(0x1f2)][0x0]*0x4),'rgba':UTIF[_0x1f328f(0x199)](_0x1d2597[_0x5a9caf])});}return typeof _0x30909b==_0x1f328f(0x1dc)&&_0x30909b(_0x3f341a),!![];});},tiff2ArrayBuffer=function(_0x340d94,_0x59c363){getTiffFileBinary(_0x340d94,function(_0x2a73d4,_0x1fa27d){const _0x21e7fc=_0x3c2c;if(_0x1fa27d)return typeof _0x59c363==_0x21e7fc(0x1dc)&&_0x59c363([],null),![];const _0x11f84e=UTIF['decode'](_0x2a73d4);return typeof _0x59c363==_0x21e7fc(0x1dc)&&_0x59c363(_0x11f84e,_0x2a73d4),!![];});},tiffPage2RGBA=function(_0x60a4c0,_0x77bd74,_0x482ab2){const _0x43c968=_0x636770;let _0x351c36={'width':_0x77bd74[_0x43c968(0x1f2)][0x0],'height':_0x77bd74[_0x43c968(0x1c8)][0x0],'size':Number(_0x77bd74[_0x43c968(0x1c8)][0x0]*_0x77bd74[_0x43c968(0x1f2)][0x0]*0x4),'rgba':[]};if(JSON[_0x43c968(0x1a4)](_0x77bd74['t258'])==JSON[_0x43c968(0x1a4)]([0x10,0x10])){var _0x2de77a=new Uint8Array(_0x60a4c0);for(let _0x384d26=_0x482ab2;_0x384d26<_0x482ab2+_0x351c36['size'];_0x384d26+=0x4){_0x351c36[_0x43c968(0x1dd)][_0x43c968(0x1a0)](_0x2de77a[_0x384d26]),_0x351c36[_0x43c968(0x1dd)][_0x43c968(0x1a0)](_0x2de77a[_0x384d26+0x1]),_0x351c36['rgba'][_0x43c968(0x1a0)](_0x2de77a[_0x384d26]),_0x351c36[_0x43c968(0x1dd)]['push'](0xff);}}else{if(JSON[_0x43c968(0x1a4)](_0x77bd74[_0x43c968(0x1d7)])==JSON['stringify']([0x8,0x8,0x8])&&!_0x77bd74[_0x43c968(0x1c6)]){UTIF[_0x43c968(0x1f7)](_0x60a4c0,_0x77bd74),console[_0x43c968(0x191)](_0x77bd74);let _0x590229=_0x77bd74[_0x43c968(0x1bf)],_0x419135=_0x77bd74[_0x43c968(0x197)],_0x39cbbd=_0x590229*_0x419135,_0x2fd2b1=_0x39cbbd*0x4,_0x3727d2=_0x77bd74[_0x43c968(0x1e8)],_0x49c096=new Uint8Array(_0x39cbbd*0x4);for(let _0x369d5b=0x0;_0x369d5b<_0x39cbbd;_0x369d5b++){let _0x132294=_0x369d5b<<0x2,_0x55ac70=_0x369d5b*0x3;_0x49c096[_0x132294]=_0x3727d2[_0x55ac70+0x2],_0x49c096[_0x132294+0x1]=_0x3727d2[_0x55ac70+0x3],_0x49c096[_0x132294+0x2]=_0x3727d2[_0x55ac70],_0x49c096[_0x132294+0x3]=0xff;}_0x351c36[_0x43c968(0x1dd)]=_0x49c096;}else UTIF['decodeImage'](_0x60a4c0,_0x77bd74),_0x351c36={'width':_0x77bd74[_0x43c968(0x1f2)][0x0],'height':_0x77bd74[_0x43c968(0x1c8)][0x0],'size':Number(_0x77bd74[_0x43c968(0x1c8)][0x0]*_0x77bd74[_0x43c968(0x1f2)][0x0]*0x4),'rgba':UTIF['toRGBA8'](_0x77bd74)};}return _0x351c36;},tiffsizeExtraPage=function(_0x50c262,_0x46c022){const _0x53f87a=_0x636770;var _0x12db8b=new Uint8Array(_0x46c022);let _0x4de7f0=_0x50c262[_0x53f87a(0x1ce)],_0x14a6d2=0x0;for(let _0x487f56 of _0x50c262){_0x14a6d2+=Number(_0x487f56[_0x53f87a(0x1c8)][0x0]*_0x487f56[_0x53f87a(0x1f2)][0x0]*0x4);}return(_0x12db8b[_0x53f87a(0x1ce)]-_0x14a6d2-_0x12db8b[_0x53f87a(0x1ce)]%0x4)/_0x4de7f0;},getTiffFileBinary=function(_0x2f282d,_0xe39dbb){const _0x493c4c=_0x636770;https[_0x493c4c(0x1be)](_0x2f282d,function(_0x46c479){const _0x5f4313=_0x493c4c;let _0x4b60c7=[];_0x46c479['on'](_0x5f4313(0x1e8),function(_0x4ada84){_0x4b60c7['push'](_0x4ada84);}),_0x46c479['on']('end',function(){const _0x14b79e=_0x5f4313;let _0x2db2ca=Buffer['concat'](_0x4b60c7);typeof _0xe39dbb==_0x14b79e(0x1dc)&&_0xe39dbb(_0x2db2ca,![]);}),_0x46c479['on'](_0x5f4313(0x1e2),function(_0x1ebbed){const _0x175c2c=_0x5f4313;console[_0x175c2c(0x191)](_0x175c2c(0x1cf)),console[_0x175c2c(0x191)](_0x1ebbed[_0x175c2c(0x1e9)]),typeof _0xe39dbb=='function'&&_0xe39dbb(null,!![]);});});},RGBA2Base64=function(_0x4dc3ec){return new Promise(function(_0x52ae1a,_0x47b0cc){const _0x44fd3d=_0x3c2c;try{new Jimp(_0x4dc3ec[_0x44fd3d(0x1bf)],_0x4dc3ec[_0x44fd3d(0x197)],function(_0x108029,_0x4261d4){const _0x3e7d0f=_0x44fd3d;_0x4261d4['bitmap']['data']=_0x4dc3ec[_0x3e7d0f(0x1dd)],_0x4261d4['getBase64'](Jimp[_0x3e7d0f(0x1e0)],function(_0x5ea2ae,_0x4b423f){const _0x3cb1f4=_0x3e7d0f;_0x52ae1a({'src':_0x4b423f,'width':_0x4261d4['bitmap'][_0x3cb1f4(0x1bf)],'height':_0x4261d4['bitmap'][_0x3cb1f4(0x197)]});});});}catch(_0x1a8f5f){console['error'](_0x1a8f5f),_0x52ae1a({'src':'','width':0x0,'height':0x0});}});},saveRGBA=function(_0x5eac5b,_0x443e30){return new Promise(function(_0x5bbfe0,_0x7f39d6){const _0x45a9be=_0x3c2c;try{new Jimp(_0x5eac5b[_0x45a9be(0x1bf)],_0x5eac5b[_0x45a9be(0x197)],function(_0x533739,_0x566514){const _0x2e7fef=_0x45a9be;_0x566514[_0x2e7fef(0x1ac)][_0x2e7fef(0x1e8)]=_0x5eac5b[_0x2e7fef(0x1dd)],_0x566514[_0x2e7fef(0x200)](_0x443e30,function(){_0x5bbfe0(!![]);});});}catch(_0x295346){console[_0x45a9be(0x1e2)](_0x295346),_0x5bbfe0(![]);}});},nameGenerator=function(_0x1e78f2){const _0x464b65=_0x636770;typeof _0x1e78f2==_0x464b65(0x1f1)&&(_0x1e78f2=0x8);let _0x3695b4=_0x464b65(0x1e6),_0x456029='';for(var _0x2f24ca=0x0;_0x2f24ca<_0x1e78f2;_0x2f24ca++){let _0x79bfe6=Math[_0x464b65(0x1a3)](Math[_0x464b65(0x1d2)]()*_0x3695b4['length']);_0x456029+=_0x3695b4[_0x79bfe6];}return _0x456029;};