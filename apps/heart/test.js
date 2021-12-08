function rd(a) {
    wOSI2C.writeTo(0x44, a);
    return wOSI2C.readFrom(0x44,1)[0]; 
  }

function wr(a,d) { 
    wOSI2C.writeTo(0x44,a,d);
  }

function init_values(){
    wr(0x1 , 0x1););
    wr(0x2 , 0x1);
    wr(0x3 , 0xf);
    wr(0x4 , 0x3);
    wr(0x5 , 0x0);
    wr(0x6 , 0x0);
    wr(0x7 , 0x11);
    wr(0x8 , 0x18);
    wr(0x9 , 0xa);
    wr(0xa , 0x8c);
    wr(0xb , 0x22);
    wr(0xc , 0x7);
    wr(0xd , 0x67);
    wr(0xe , 0xf);
    wr(0xf , 0x0);
    wr(0x10 , 0xd0);
    wr(0x11 , 0x7);
    wr(0x12 , 0x10);
    wr(0x13 , 0x0);
    wr(0x14 , 0x0);
    wr(0x15 , 0xff);
    wr(0x16 , 0xff);
    wr(0x17 , 0xf);
    wr(0x18 , 0x3);
    wr(0x19 , 0x0);
    wr(0x1a , 0x13);
    wr(0x1b , 0x7f);
    wr(0x1c , 0x2f);
    wr(0x1e , 0x2);
    wr(0x1f , 0x10);
    wr(0x20 , 0x4);
    wr(0x21 , 0x8);
    wr(0x22 , 0x0);
    wr(0x23 , 0x0);
    wr(0x24 , 0x0);
    wr(0x7f , 0x10);
    wr(0x80 , 0xa);
    wr(0x81 , 0xb);
    wr(0x82 , 0x82);
    wr(0x83 , 0x54);
    wr(0x84 , 0x3);
    wr(0x85 , 0x0);
    wr(0x86 , 0x0);
    wr(0x87 , 0x0);
    wr(0xc0 , 0x84);
}
  function reg(){
    for(var i=0;i<=0xc0; i++){
      var v=rd(i);
      if (v!=163) console.log("loc: ",i.toString(16),"val: ",rd(i).toString(16));
    }
  }
  