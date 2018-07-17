var str, con, pow, dex, app, siz, inte, edu;
var san, lck, ide, kno, hp, mp;
var edu_p, int_p;


function status() {

	str = Math.floor((Math.random() * 6)) + 1 + Math.floor((Math.random() * 6)) + 1 + Math.floor((Math.random() * 6)) + 1;
	con = Math.floor((Math.random() * 6)) + 1 + Math.floor((Math.random() * 6)) + 1 + Math.floor((Math.random() * 6)) + 1;
	pow = Math.floor((Math.random() * 6)) + 1 + Math.floor((Math.random() * 6)) + 1 + Math.floor((Math.random() * 6)) + 1;
	dex = Math.floor((Math.random() * 6)) + 1 + Math.floor((Math.random() * 6)) + 1 + Math.floor((Math.random() * 6)) + 1;
	app = Math.floor((Math.random() * 6)) + 1 + Math.floor((Math.random() * 6)) + 1 + Math.floor((Math.random() * 6)) + 1;
	siz = Math.floor((Math.random() * 6)) + 1 + Math.floor((Math.random() * 6)) + 1 + 6;
	inte = Math.floor((Math.random() * 6)) + 1 + Math.floor((Math.random() * 6)) + 1 + 6;
	edu = Math.floor((Math.random() * 6)) + 1 + Math.floor((Math.random() * 6)) + 1 + Math.floor((Math.random() * 6)) + 1 + 3;


	san = pow * 5;
	lck = pow * 5;
	ide = inte * 5;
	hp = Math.ceil((siz + con) / 2);
	mp = pow;

	edu_p = edu * 20;
	int_p = inte * 10;


	var put_str = document.getElementById("str");
	put_str.innerHTML = str;
	var put_con = document.getElementById("con");
	put_con.innerHTML = con;
	var put_pow = document.getElementById("pow");
	put_pow.innerHTML = pow;
	var put_dex = document.getElementById("dex");
	put_dex.innerHTML = dex;
	var put_app = document.getElementById("app");
	put_app.innerHTML = app;
	var put_siz = document.getElementById("siz");
	put_siz.innerHTML = siz;
	var put_inte = document.getElementById("inte");
	put_inte.innerHTML = inte;
	var put_edu = document.getElementById("edu");
	put_edu.innerHTML = edu;

	var put_san = document.getElementById("san");
	put_san.innerHTML = san;
	var put_lck = document.getElementById("lck");
	put_lck.innerHTML = lck;
	var put_ide = document.getElementById("ide");
	put_ide.innerHTML = ide;
	var put_hp = document.getElementById("hp");
	put_hp.innerHTML = hp;
	var put_mp = document.getElementById("mp");
	put_mp.innerHTML = mp;

	var put_int_p = document.getElementById("int_p");
	put_int_p.innerHTML = int_p;
	var put_edu_p = document.getElementById("edu_p");
	put_edu_p.innerHTML = edu_p;
};