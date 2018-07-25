function status() {
	var db = ["-1d4", "なし", "1d4", "1d6"];

	age = Math.floor(Math.random() * 100) + 1;
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
	kno = edu * 5;
	if (kno >= 100) {
		kno = 99;
	};
	hp = Math.ceil((siz + con) / 2);
	mp = pow;

	edu_p = edu * 20;
	int_p = inte * 10;

	default_point[39] = kno;
	default_point[0] = dex * 2;//回避と母国語初期値

	var put_age = document.getElementById("age");
	put_age.innerHTML = age;

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
	var put_kno = document.getElementById("kno");
	put_kno.innerHTML = kno;
	var put_hp = document.getElementById("hp");
	put_hp.innerHTML = hp;
	var put_mp = document.getElementById("mp");
	put_mp.innerHTML = mp;

	if (33 <= siz + str && siz + str <= 36)			//ダメージボーナス計算
	{
		var put_db = document.getElementById("db");
		put_db.innerHTML = db[3];
	}else if (25 <= siz + str && siz + str <= 32)
	{
		var put_db = document.getElementById("db");
		put_db.innerHTML = db[2];
	}else if (17 <= siz + str && siz + str <= 24)
	{
		var put_db = document.getElementById("db");
		put_db.innerHTML = db[1];
	}else if (13 <= siz + str && siz +str <= 16)
	{
		var put_db = document.getElementById("db");
		put_db.innerHTML = db[0];
	}
};