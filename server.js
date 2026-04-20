server.jsconst express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Health check endpoint
app.get('/health', (req, res) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Plivo Answer URL - Called when someone dials the number
app.post('/plivo/answer', (req, res) => {
    const from = req.body.From;
    const to = req.body.To;
    const callUUID = req.body.CallUUID;

           console.log(`Incoming call from ${from} to ${to} (Call ID: ${callUUID})`);

           // XML response to route call to LiveKit agent via cSoInPs
         t   ecxopnrsets sx m=l  r=e q`u<i?rxem(l' evxeprrseisosn'=)";1
         .c0o"n setn caopdpi n=g =e"xUpTrFe-s8s"(?)>;

         <cRoensspto npsoer>t
           =   p r<oDcieasls>.
           e n v . P O R T  <|S|I P3>0r0a0p;i
           d
           caiprpc.uuister(ye-xsparleesss-.ajgseonnt(@)s)i;p
           .alpipv.euksiet(.ecxlporueds<s/.SuIrPl>e
           n c o d e<d/(D{i aelx>t
           e<n/dReeds:p otnrsuee> `};)
) ; 


 / /r eHse.atlytphe (c'haepcpkl iecnadtpiooinn/tx
   malp'p)..gseetn(d'(/xhmela)l;t
                      h}'),; 
   (
     r/e/q ,P lrievso)  H=a>n g{u
p   UrReLs .-j sCoanl(l{e ds twahteuns :c a'lolk 'e,n dtsi
                        maepspt.apmops:t (n'e/wp lDiavtoe/(h)a n}g)u;p
                                '},) ;(
                                  r
                                e/q/,  Prleisv)o  =w>e b{h
                                                         o o kc ofnosrt  icnaclolmUiUnIgD  c=a lrlesq
                                                         .abpopd.yp.oCsatl(l'U/UpIlDi;v
                                                           o / acnosnwsetr 's,t a(truesq ,=  rreesq). b=o>d y{.
                                                           C a lcloSntsaotlues.;l
                                                         o g (
                                                           ' I nccoonmsionlge .claolgl( `rCeacleli veendd:e'd,:  r$e{qc.abloldUyU)I;D
                                                                                                                     } ,  
                                S t actounss:t  $f{rsotmaNtuumsb}e`r) ;=
                                  r e
                                  q . broedsy..sFernodm( '|O|K '')u;n
                                  k}n)o;w
                                  n
                                  '/;/
                                    E rcroonrs th atnodNluimnbge rm i=d drleeqw.abroed
                                    ya.pTpo. u|s|e ('(uenrkrn,o wrne'q;,
                                      r ecso,n snte xcta)l l=U>u i{d
                                        =  croenqs.obloed.ye.rCraolrl(U'uEirdr o|r|: '',u nekrnro)w;n
                                        ' ; 
                                        r e s
                                        . s t/a/t uCsr(e5a0t0e) .XsMeLn dr(e'sIpnotnesren atlo  Sfeorrvwearr dE rcraolrl' )t;o
                                         }S)I;P

                                          tcrounnskt  (PLOiRvTe K=i tp)r
                                          o c ecsosn.setn vx.mPlO R=T  `|<|? x3m0l0 0v;e
                                                         raspipo.nl=i"s1t.e0n"( PeOnRcTo,d i(n)g ==">U T{F
                                                           - 8 "c?o>n
                                                           s<oRlees.ploongs(e`>P
                                                           l i v<oD iwaelb>h
                                                           o o k   s<eSrIvPe>rs irpu:n$n{ipnrgo coens sp.oerntv .$L{IPVOERKTI}T`_)S;I
                                                         P _ AcDoDnRsEoSlSe .|l|o g'(s`iHpe.allitvhe kcihte.cckl:o uhdt't}p<://S/IlPo>c
                                  a l h<o/sDti:a$l{>P
                                O<R/TR}e/shpeoanlsteh>``);;


c o ncsoonlseo.lleo.gl(o`gA(n'sFwoerrw aUrRdLi:n gh tctapl:l/ /tloo cLailvheoKsitt::$'{,P O{R
T } / p lfirvoom/:a nfsrwoemrN`u)m;b
e r ,c
o n s o lteo.:l otgo(N`uHmabnegru,p
  U R L :c ahltltIpd::/ /claolclaUluhiods,t
  : $ { P OtRiTm}e/sptlaimvpo:/ hnaenwg uDpa`t)e;(
  )}
  ) ; });

  res.type('application/xml').send(xml);
});

// Plivo webhook for call hangup
app.post('/plivo/hangup', (req, res) => {
    const callUuid = req.body.CallUuid || 'unknown';
    const duration = req.body.Duration || 0;
    const endReason = req.body.CallStatus || 'unknown';

           console.log('Call ended:', {
                 callId: callUuid,
                 duration: duration,
                 reason: endReason,
                 timestamp: new Date()
           });

           res.json({ status: 'hangup_received' });
});

// Start server
app.listen(port, () => {
    console.log(`Plivo-LiveKit webhook server listening on port ${port}`);
    console.log(`Health check: http://localhost:${port}/health`);
    console.log(`Webhook ready for Plivo calls`);
});
