function job_decision() {
	var job = ['医師', 'エンジニア', '狂信者', '警察官', '芸術家', 
	'古物研究家', 'コンピューター技術者', '作家', '自衛官', 'ジャーナリスト', 
	'宗教家','店主', '私立探偵', 'スポーツ選手', '大学教授', 'タレント', 
	'超心理学者','ディレッタント', 'ドライバー', '農林業従事者', 'ビジネスマン', 
	'法律家','放浪者', '暴力団組員', 'ミュージシャン', 'メンタルセラピスト'];
	var i;
	var j;
	var cnt;
	i = Math.floor(Math.random() * job.length);

	var job_name = document.getElementById("job_name");
	job_name.innerHTML = job[i];

	skil_temp = [];
	skil_point = [];

	switch(i){
		case 0:										//医師
			skil_temp.push(40);
			skil_temp.push(12);
			skil_temp.push(44);
			skil_temp.push(36);
			skil_temp.push(49);
			skil_temp.push(37);
			skil_temp.push(56);
			skil_temp.push(58);

			skil_point.push(default_point[40]);
			skil_point.push(default_point[12]);
			skil_point.push(default_point[44]);
			skil_point.push(default_point[36]);
			skil_point.push(default_point[49]);
			skil_point.push(default_point[37]);
			skil_point.push(default_point[56]);
			skil_point.push(default_point[58]);
			break;
			
		case 1:										//エンジニア
			skil_temp.push(25);
			skil_temp.push(46);
			skil_temp.push(26);
			skil_temp.push(32);
			skil_temp.push(22);
			skil_temp.push(54);
			skil_temp.push(58);

			skil_point.push(default_point[25]);
			skil_point.push(default_point[46]);
			skil_point.push(default_point[26]);
			skil_point.push(default_point[32]);
			skil_point.push(default_point[22]);
			skil_point.push(default_point[54]);
			skil_point.push(default_point[58]);
			cnt = Math.floor((Math.random() * 3)) + 1;
			if (cnt == 1){
				skil_temp.push(42);
				skil_point.push(default_point[42]);
			}else if (cnt == 2){
				skil_temp.push(50);
				skil_point.push(default_point[50]);
			}else if (cnt == 3){
				skil_temp.push(51);
				skil_point.push(default_point[51]);
			}
			break;
		case 2:										//狂信者
			skil_temp.push(14);
			skil_temp.push(15);
			skil_temp.push(47);
			skil_temp.push(37);
			skil_temp.push(22);
			skil_temp.push(58);

			skil_point.push(default_point[14]);
			skil_point.push(default_point[15]);
			skil_point.push(default_point[47]);
			skil_point.push(default_point[37]);
			skil_point.push(default_point[22]);
			skil_point.push(default_point[58]);
			
			cnt = Math.floor((Math.random() * 5)) + 1;
			if (cnt == 1){
				skil_temp.push(42);
				skil_point.push(default_point[42]);
			}else if (cnt == 2){
				skil_temp.push(32);
				skil_point.push(default_point[32]);
			}else if (cnt == 3){
				skil_temp.push(55);
				skil_point.push(default_point[55]);
			}else if (cnt == 4){
				skil_temp.push(56);
				skil_point.push(default_point[56]);
			}else if (cnt == 5){
				skil_temp.push(7);
				skil_point.push(default_point[7]);
			}
			skil_temp[7] = skil_temp[6];
			skil_point[7] = skil_point[6];
			while(skil_temp[7] == skil_temp[6]){
				skil_temp[7] = skil_temp[6];
				skil_point[7] = skil_point[6];
				skil_temp.splice(7, 7);
				cnt = Math.floor((Math.random() * 5)) + 1;
				if (cnt == 1){
					skil_temp.push(42);
					skil_point.push(default_point[42]);
				}else if (cnt == 2){
					skil_temp.push(32);
					skil_point.push(default_point[32]);
				}else if (cnt == 3){
					skil_temp.push(55);
					skil_point.push(default_point[55]);
				}else if (cnt == 4){
					skil_temp.push(56);
					skil_point.push(default_point[56]);
				}else if (cnt == 5){
					skil_temp.push(7);
					skil_point.push(default_point[7]);
				}
			}
			break;

		case 3:										//警察官
			skil_temp.push(35);
			skil_temp.push(22);
			skil_temp.push(47);
			skil_temp.push(37);
			skil_temp.push(20);
			skil_temp.push(55);
			skil_temp.push(23);

			skil_point.push(default_point[35]);
			skil_point.push(default_point[22]);
			skil_point.push(default_point[47]);
			skil_point.push(default_point[37]);
			skil_point.push(default_point[20]);
			skil_point.push(default_point[55]);
			skil_point.push(default_point[23]);
			cnt = Math.floor((Math.random() * 6)) + 1;
			if (cnt == 1){
				skil_temp.push(24);
				skil_point.push(default_point[24]);
			}else if (cnt == 2){
				skil_temp.push(36);
				skil_point.push(default_point[36]);
			}else if (cnt == 3){
				skil_temp.push(2);
				skil_point.push(default_point[2]);
			}else if (cnt == 4){
				skil_temp.push(6);
				skil_point.push(default_point[6]);
			}else if (cnt == 5){
				skil_temp.push(7);
				skil_point.push(default_point[7]);
			}else if (cnt == 6){
				skil_temp.push(59);
				skil_point.push(default_point[59]);
			}
			break;
			
		case 4:										//芸術家
			skil_temp.push(35);
			skil_temp.push(43);
			skil_temp.push(46);
			skil_temp.push(18);
			skil_temp.push(47);
			skil_temp.push(29);
			skil_temp.push(23);
			skil_temp.push(57);

			skil_point.push(default_point[35]);
			skil_point.push(default_point[43]);
			skil_point.push(default_point[46]);
			skil_point.push(default_point[18]);
			skil_point.push(default_point[47]);
			skil_point.push(default_point[29]);
			skil_point.push(default_point[23]);
			skil_point.push(default_point[57]);
			break;
			
		case 5:										//古物研究家
			skil_temp.push(43);
			skil_temp.push(46);
			skil_temp.push(29);
			skil_temp.push(22);
			skil_temp.push(38);
			skil_temp.push(58);
			skil_temp.push(23);
			skil_temp.push(57);

			skil_point.push(default_point[43]);
			skil_point.push(default_point[46]);
			skil_point.push(default_point[29]);
			skil_point.push(default_point[22]);
			skil_point.push(default_point[38]);
			skil_point.push(default_point[58]);
			skil_point.push(default_point[23]);
			skil_point.push(default_point[57]);
			break;
			
		case 6:										//コンピューター技術者
			skil_temp.push(35);
			skil_temp.push(44);
			skil_temp.push(46);
			skil_temp.push(32);
			skil_temp.push(51);
			skil_temp.push(22);
			skil_temp.push(54);
			skil_temp.push(58);

			skil_point.push(default_point[35]);
			skil_point.push(default_point[44]);
			skil_point.push(default_point[46]);
			skil_point.push(default_point[32]);
			skil_point.push(default_point[51]);
			skil_point.push(default_point[22]);
			skil_point.push(default_point[54]);
			skil_point.push(default_point[58]);
			break;
			
		case 7:										//作家
			skil_temp.push(41);
			skil_temp.push(43);
			skil_temp.push(47);
			skil_temp.push(37);
			skil_temp.push(22);
			skil_temp.push(58);
			skil_temp.push(39);
			skil_temp.push(57);

			skil_point.push(default_point[41]);
			skil_point.push(default_point[43]);
			skil_point.push(default_point[47]);
			skil_point.push(default_point[37]);
			skil_point.push(default_point[22]);
			skil_point.push(default_point[58]);
			skil_point.push(default_point[39]);
			skil_point.push(default_point[57]);
			break;
		
		case 8:										//自衛官
			skil_temp.push(24);
			skil_temp.push(12);
			skil_temp.push(25);
			skil_temp.push(26);
			skil_temp.push(30);
			skil_temp.push(33);

			skil_point.push(default_point[24]);
			skil_point.push(default_point[12]);
			skil_point.push(default_point[25]);
			skil_point.push(default_point[26]);
			skil_point.push(default_point[60]);
			skil_point.push(default_point[33]);
			
			cnt = Math.floor((Math.random() * 15)) + 1;
			if (cnt == 1){
				skil_temp.push(15);
				skil_point.push(default_point[15]);
			}else if (cnt == 2){
				skil_temp.push(44);
				skil_point.push(default_point[44]);
			}else if (cnt == 3){
				skil_temp.push(17);
				skil_point.push(default_point[17]);
			}else if (cnt == 4){
				skil_temp.push(36);
				skil_point.push(default_point[36]);
			}else if (cnt == 5){
				skil_temp.push(37);
				skil_point.push(default_point[37]);
			}else if (cnt == 6){
				skil_temp.push(38);
				skil_point.push(default_point[38]);
			}else if (cnt == 7){
				skil_temp.push(55);
				skil_point.push(default_point[55]);
			}else if (cnt == 8){
				skil_temp.push(3);
				skil_point.push(default_point[3]);
			}else if (cnt == 9){
				skil_temp.push(1);
				skil_point.push(default_point[1]);
			}else if (cnt == 10){
				skil_temp.push(2);
				skil_point.push(default_point[2]);
			}else if (cnt == 11){
				skil_temp.push(6);
				skil_point.push(default_point[6]);
			}else if (cnt == 12){
				skil_temp.push(7);
				skil_point.push(default_point[7]);
			}else if (cnt == 13){
				skil_temp.push(16);
				skil_point.push(default_point[16]);
			}else if (cnt == 14){
				skil_temp.push(11);
				skil_point.push(default_point[11]);
			}else if (cnt == 15){
				skil_temp.push(8);
				skil_point.push(default_point[8]);
			}
			skil_temp[7] = skil_temp[6];
			skil_point[7] = skil_point[6];
			while(skil_temp[7] == skil_temp[6]){
				skil_temp[7] = skil_temp[6];
				skil_point[7] = skil_point[6];
				skil_temp.splice(7, 7);
				cnt = Math.floor((Math.random() * 15)) + 1;
				if (cnt == 1){
					skil_temp.push(15);
					skil_point.push(default_point[15]);
				}else if (cnt == 2){
					skil_temp.push(44);
					skil_point.push(default_point[44]);
				}else if (cnt == 3){
					skil_temp.push(17);
					skil_point.push(default_point[17]);
				}else if (cnt == 4){
					skil_temp.push(36);
					skil_point.push(default_point[36]);
				}else if (cnt == 5){
					skil_temp.push(37);
					skil_point.push(default_point[37]);
				}else if (cnt == 6){
					skil_temp.push(38);
					skil_point.push(default_point[38]);
				}else if (cnt == 7){
					skil_temp.push(55);
					skil_point.push(default_point[55]);
				}else if (cnt == 8){
					skil_temp.push(3);
					skil_point.push(default_point[3]);
				}else if (cnt == 9){
					skil_temp.push(1);
					skil_point.push(default_point[1]);
				}else if (cnt == 10){
					skil_temp.push(2);
					skil_point.push(default_point[2]);
				}else if (cnt == 11){
					skil_temp.push(6);
					skil_point.push(default_point[6]);
				}else if (cnt == 12){
					skil_temp.push(7);
					skil_point.push(default_point[7]);
				}else if (cnt == 13){
					skil_temp.push(16);
					skil_point.push(default_point[16]);
				}else if (cnt == 14){
				skil_temp.push(11);
				skil_point.push(default_point[11]);
				}else if (cnt == 15){
					skil_temp.push(8);
					skil_point.push(default_point[8]);
				}
			}
			break;
			
		case 9:										//ジャーナリスト
			skil_temp.push(35);
			skil_temp.push(19);
			skil_temp.push(47);
			skil_temp.push(37);
			skil_temp.push(22);
			skil_temp.push(58);
			skil_temp.push(39);
			skil_temp.push(57);

			skil_point.push(default_point[35]);
			skil_point.push(default_point[19]);
			skil_point.push(default_point[47]);
			skil_point.push(default_point[37]);
			skil_point.push(default_point[22]);
			skil_point.push(default_point[58]);
			skil_point.push(default_point[39]);
			skil_point.push(default_point[57]);
			break;
			
		case 10:										//宗教家
			skil_temp.push(41);
			skil_temp.push(16);
			skil_temp.push(44);
			skil_temp.push(47);
			skil_temp.push(37);
			skil_temp.push(22);
			skil_temp.push(57);

			skil_point.push(default_point[41]);
			skil_point.push(default_point[16]);
			skil_point.push(default_point[44]);
			skil_point.push(default_point[47]);
			skil_point.push(default_point[37]);
			skil_point.push(default_point[22]);
			skil_point.push(default_point[57]);
			cnt = Math.floor((Math.random() * 3)) + 1;
			if (cnt == 1){
				skil_temp.push(35);
				skil_point.push(default_point[35]);
			}else if (cnt == 2){
				skil_temp.push(36);
				skil_point.push(default_point[36]);
			}else if (cnt == 3){
				skil_temp.push(58);
				skil_point.push(default_point[58]);
			}
			break;
			
		case 11:										//店主
			skil_temp.push(35);
			skil_temp.push(16);
			skil_temp.push(44);
			skil_temp.push(47);
			skil_temp.push(36);
			skil_temp.push(38);

			skil_point.push(default_point[24]);
			skil_point.push(default_point[12]);
			skil_point.push(default_point[25]);
			skil_point.push(default_point[26]);
			skil_point.push(default_point[60]);
			skil_point.push(default_point[33]);
			
			cnt = Math.floor((Math.random() * 2)) + 1;
			if (cnt == 1){
				skil_temp.push(24);
				skil_point.push(default_point[24]);
			}else if (cnt == 2){
				skil_temp.push(46);
				skil_point.push(default_point[46]);
			}
			cnt = Math.floor((Math.random() * skil.length)) + 1;
			skil_temp[7] = cnt;
			skil_point[7] = default_point[cnt];
			for(var k = 0; k < 7; k++){
				if(skil_temp[7] == skil_temp[k]){
					cnt = Math.floor((Math.random() * skil.length)) + 1;
					skil_temp[7] = cnt;
					skil_point[7] = default_point[cnt];
					k = 0;
				}
			}
			break;
			
		case 12:										//私立探偵
			skil_temp.push(35);
			skil_temp.push(13);
			skil_temp.push(47);
			skil_temp.push(20);
			skil_temp.push(22);
			skil_temp.push(55);
			skil_temp.push(23);

			skil_point.push(default_point[35]);
			skil_point.push(default_point[13]);
			skil_point.push(default_point[47]);
			skil_point.push(default_point[20]);
			skil_point.push(default_point[22]);
			skil_point.push(default_point[55]);
			skil_point.push(default_point[23]);
			cnt = Math.floor((Math.random() * 4)) + 1;
			if (cnt == 1){
				skil_temp.push(16);
				skil_point.push(default_point[16]);
			}else if (cnt == 2){
				skil_temp.push(18);
				skil_point.push(default_point[18]);
			}else if (cnt == 3){
				skil_temp.push(38);
				skil_point.push(default_point[38]);
			}else if (cnt == 4){
				skil_temp.push(59);
				skil_point.push(default_point[59]);
			}
			break;
			
		case 13:										//スポーツ選手
			skil_temp.push(0);
			skil_temp.push(43);
			skil_temp.push(20);
			skil_temp.push(5);
			skil_temp.push(21);

			skil_point.push(default_point[0]);
			skil_point.push(default_point[43]);
			skil_point.push(default_point[20]);
			skil_point.push(default_point[5]);
			skil_point.push(default_point[21]);
			
			cnt = Math.floor((Math.random() * 10)) + 1;
			if (cnt == 1){
				skil_temp.push(12);
				skil_point.push(default_point[12]);
			}else if (cnt == 2){
				skil_temp.push(27);
				skil_point.push(default_point[27]);
			}else if (cnt == 3){
				skil_temp.push(28);
				skil_point.push(default_point[28]);
			}else if (cnt == 4){
				skil_temp.push(3);
				skil_point.push(default_point[3]);
			}else if (cnt == 5){
				skil_temp.push(1);
				skil_point.push(default_point[1]);
			}else if (cnt == 6){
				skil_temp.push(4);
				skil_point.push(default_point[4]);
			}else if (cnt == 7){
				skil_temp.push(2);
				skil_point.push(default_point[2]);
			}else if (cnt == 8){
				skil_temp.push(6);
				skil_point.push(default_point[6]);
			}else if (cnt == 9){
				skil_temp.push(59);
				skil_point.push(default_point[59]);
			}else if (cnt == 10){
				skil_temp.push(7);
				skil_point.push(default_point[7]);
			}
			skil_temp[6] = skil_temp[5];
			skil_point[6] = skil_point[5];
			while(skil_temp[6] == skil_temp[5]){
				skil_temp[6] = skil_temp[5];
				skil_point[6] = skil_point[5];
				skil_temp.splice(6, 6);
				cnt = Math.floor((Math.random() * 10)) + 1;
				if (cnt == 1){
					skil_temp.push(12);
					skil_point.push(default_point[12]);
				}else if (cnt == 2){
					skil_temp.push(27);
					skil_point.push(default_point[27]);
				}else if (cnt == 3){
					skil_temp.push(28);
					skil_point.push(default_point[28]);
				}else if (cnt == 4){
					skil_temp.push(3);
					skil_point.push(default_point[3]);
				}else if (cnt == 5){
					skil_temp.push(1);
					skil_point.push(default_point[1]);
				}else if (cnt == 6){
					skil_temp.push(4);
					skil_point.push(default_point[4]);
				}else if (cnt == 7){
					skil_temp.push(2);
					skil_point.push(default_point[2]);
				}else if (cnt == 8){
					skil_temp.push(6);
					skil_point.push(default_point[6]);
				}else if (cnt == 9){
					skil_temp.push(59);
					skil_point.push(default_point[59]);
				}else if (cnt == 10){
					skil_temp.push(7);
					skil_point.push(default_point[7]);
				}
			}
			skil_temp[7] = skil_temp[6];
			skil_point[7] = skil_point[6];
			while(skil_temp[7] == skil_temp[6] || skil_temp[7] == skil_temp[5]){
				skil_temp[7] = skil_temp[6];
				skil_point[7] = skil_point[6];
				skil_temp.splice(7, 7);
				cnt = Math.floor((Math.random() * 10)) + 1;
				if (cnt == 1){
					skil_temp.push(12);
					skil_point.push(default_point[12]);
				}else if (cnt == 2){
					skil_temp.push(27);
					skil_point.push(default_point[27]);
				}else if (cnt == 3){
					skil_temp.push(28);
					skil_point.push(default_point[28]);
				}else if (cnt == 4){
					skil_temp.push(3);
					skil_point.push(default_point[3]);
				}else if (cnt == 5){
					skil_temp.push(1);
					skil_point.push(default_point[1]);
				}else if (cnt == 6){
					skil_temp.push(4);
					skil_point.push(default_point[4]);
				}else if (cnt == 7){
					skil_temp.push(2);
					skil_point.push(default_point[2]);
				}else if (cnt == 8){
					skil_temp.push(6);
					skil_point.push(default_point[6]);
				}else if (cnt == 9){
					skil_temp.push(59);
					skil_point.push(default_point[59]);
				}else if (cnt == 10){
					skil_temp.push(10);
					skil_point.push(default_point[10]);
				}
			}
			break;
			
		case 14:										//大学教授
			skil_temp.push(36);
			skil_temp.push(47);
			skil_temp.push(37);
			skil_temp.push(22);
			skil_temp.push(38);
			skil_temp.push(58);

			skil_point.push(default_point[36]);
			skil_point.push(default_point[47]);
			skil_point.push(default_point[37]);
			skil_point.push(default_point[22]);
			skil_point.push(default_point[38]);
			skil_point.push(default_point[58]);
			
			cnt = Math.floor((Math.random() * 12)) + 1;
			if (cnt == 1){
				skil_temp.push(40);
				skil_point.push(default_point[40]);
			}else if (cnt == 2){
				skil_temp.push(42);
				skil_point.push(default_point[42]);
			}else if (cnt == 3){
				skil_temp.push(45);
				skil_point.push(default_point[45]);
			}else if (cnt == 4){
				skil_temp.push(48);
				skil_point.push(default_point[48]);
			}else if (cnt == 5){
				skil_temp.push(49);
				skil_point.push(default_point[49]);
			}else if (cnt == 6){
				skil_temp.push(50);
				skil_point.push(default_point[50]);
			}else if (cnt == 7){
				skil_temp.push(51);
				skil_point.push(default_point[51]);
			}else if (cnt == 8){
				skil_temp.push(52);
				skil_point.push(default_point[52]);
			}else if (cnt == 9){
				skil_temp.push(53);
				skil_point.push(default_point[53]);
			}else if (cnt == 10){
				skil_temp.push(54);
				skil_point.push(default_point[54]);
			}else if (cnt == 11){
				skil_temp.push(55);
				skil_point.push(default_point[55]);
			}else if (cnt == 12){
				skil_temp.push(57);
				skil_point.push(default_point[57]);
			}
			skil_temp[7] = skil_temp[6];
			skil_point[7] = skil_point[6];
			while(skil_temp[7] == skil_temp[6]){
				skil_temp[7] = skil_temp[6];
				skil_point[7] = skil_point[6];
				skil_temp.splice(7, 7);
				cnt = Math.floor((Math.random() * 12)) + 1;
				if (cnt == 1){
					skil_temp.push(40);
					skil_point.push(default_point[40]);
				}else if (cnt == 2){
					skil_temp.push(42);
					skil_point.push(default_point[42]);
				}else if (cnt == 3){
					skil_temp.push(45);
					skil_point.push(default_point[45]);
				}else if (cnt == 4){
					skil_temp.push(48);
					skil_point.push(default_point[48]);
				}else if (cnt == 5){
					skil_temp.push(49);
					skil_point.push(default_point[49]);
				}else if (cnt == 6){
					skil_temp.push(50);
					skil_point.push(default_point[50]);
				}else if (cnt == 7){
					skil_temp.push(51);
					skil_point.push(default_point[51]);
				}else if (cnt == 8){
					skil_temp.push(52);
					skil_point.push(default_point[52]);
				}else if (cnt == 9){
					skil_temp.push(53);
					skil_point.push(default_point[53]);
				}else if (cnt == 10){
					skil_temp.push(54);
					skil_point.push(default_point[54]);
				}else if (cnt == 11){
					skil_temp.push(55);
					skil_point.push(default_point[55]);
				}else if (cnt == 12){
					skil_temp.push(57);
					skil_point.push(default_point[57]);
				}
			}
			break;

		case 15:										//タレント
			skil_temp.push(35);
			skil_temp.push(16);
			skil_temp.push(36);
			skil_temp.push(47);
			skil_temp.push(37);
			skil_temp.push(43);
			skil_temp.push(34);
			skil_temp.push(58);

			skil_point.push(default_point[35]);
			skil_point.push(default_point[16]);
			skil_point.push(default_point[36]);
			skil_point.push(default_point[47]);
			skil_point.push(default_point[37]);
			skil_point.push(default_point[43]);
			skil_point.push(default_point[34]);
			skil_point.push(default_point[58]);
			break;

		case 16:										//超心理学者
			skil_temp.push(41);
			skil_temp.push(48);
			skil_temp.push(18);
			skil_temp.push(47);
			skil_temp.push(19);
			skil_temp.push(22);
			skil_temp.push(58);
			skil_temp.push(57);

			skil_point.push(default_point[41]);
			skil_point.push(default_point[48]);
			skil_point.push(default_point[18]);
			skil_point.push(default_point[47]);
			skil_point.push(default_point[19]);
			skil_point.push(default_point[22]);
			skil_point.push(default_point[58]);
			skil_point.push(default_point[57]);
			break;
			
		case 17:										//ディレッタント
			skil_temp.push(24);
			skil_temp.push(43);
			skil_temp.push(36);
			skil_temp.push(22);
			skil_temp.push(55);
			skil_temp.push(58);

			skil_point.push(default_point[24]);
			skil_point.push(default_point[43]);
			skil_point.push(default_point[36]);
			skil_point.push(default_point[22]);
			skil_point.push(default_point[55]);
			skil_point.push(default_point[58]);
			
			cnt = Math.floor((Math.random() * 4)) + 1;
			if (cnt == 1){
				skil_temp.push(27);
				skil_point.push(default_point[27]);
			}else if (cnt == 2){
				skil_temp.push(18);
				skil_point.push(default_point[18]);
			}else if (cnt == 3){
				skil_temp.push(30);
				skil_point.push(default_point[30]);
			}else if (cnt == 4){
				skil_temp.push(7);
				skil_point.push(default_point[7]);
			}
			skil_temp[7] = skil_temp[6];
			skil_point[7] = skil_point[6];
			while(skil_temp[7] == skil_temp[6]){
				skil_temp[7] = skil_temp[6];
				skil_point[7] = skil_point[6];
				skil_temp.splice(7, 7);
				cnt = Math.floor((Math.random() * 4)) + 1;
				if (cnt == 1){
					skil_temp.push(27);
					skil_point.push(default_point[27]);
				}else if (cnt == 2){
					skil_temp.push(18);
					skil_point.push(default_point[18]);
				}else if (cnt == 3){
					skil_temp.push(30);
					skil_point.push(default_point[30]);
				}else if (cnt == 4){
					skil_temp.push(7);
					skil_point.push(default_point[7]);
				}
			}
			break;
			
		case 18:										//ドライバー
			skil_temp.push(24);
			skil_temp.push(25);
			skil_temp.push(22);
			skil_temp.push(26);
			skil_temp.push(32);
			skil_temp.push(33);
			skil_temp.push(38);
			skil_temp.push(23);

			skil_point.push(default_point[24]);
			skil_point.push(default_point[25]);
			skil_point.push(default_point[22]);
			skil_point.push(default_point[26]);
			skil_point.push(default_point[32]);
			skil_point.push(default_point[33]);
			skil_point.push(default_point[38]);
			skil_point.push(default_point[23]);
			break;
			
		case 19:										//農林業従事者
			skil_temp.push(12);
			skil_temp.push(25);
			skil_temp.push(26);
			skil_temp.push(29);
			skil_temp.push(20);
			skil_temp.push(32);
			skil_temp.push(53);

			skil_point.push(default_point[12]);
			skil_point.push(default_point[25]);
			skil_point.push(default_point[26]);
			skil_point.push(default_point[29]);
			skil_point.push(default_point[20]);
			skil_point.push(default_point[32]);
			skil_point.push(default_point[53]);
			cnt = Math.floor((Math.random() * 3)) + 1;
			if (cnt == 1){
				skil_temp.push(59);
				skil_point.push(default_point[59]);
			}else if (cnt == 2){
				skil_temp.push(11);
				skil_point.push(default_point[11]);
			}else if (cnt == 3){
				skil_temp.push(9);
				skil_point.push(default_point[9]);
			}
			break;
			
		case 20:										//ビジネスマン
			skil_temp.push(35);
			skil_temp.push(44);
			skil_temp.push(46);
			skil_temp.push(36);
			skil_temp.push(37);
			skil_temp.push(38);
			skil_temp.push(55);
			skil_temp.push(58);

			skil_point.push(default_point[35]);
			skil_point.push(default_point[44]);
			skil_point.push(default_point[46]);
			skil_point.push(default_point[36]);
			skil_point.push(default_point[37]);
			skil_point.push(default_point[38]);
			skil_point.push(default_point[55]);
			skil_point.push(default_point[58]);
			break;
			
		case 21:										//法律家
			skil_temp.push(35);
			skil_temp.push(44);
			skil_temp.push(36);
			skil_temp.push(47);
			skil_temp.push(37);
			skil_temp.push(22);
			skil_temp.push(38);
			skil_temp.push(55);

			skil_point.push(default_point[35]);
			skil_point.push(default_point[44]);
			skil_point.push(default_point[36]);
			skil_point.push(default_point[47]);
			skil_point.push(default_point[37]);
			skil_point.push(default_point[22]);
			skil_point.push(default_point[38]);
			skil_point.push(default_point[55]);
			break;
			
		case 22:										//放浪者
			skil_temp.push(35);
			skil_temp.push(15);
			skil_temp.push(16);
			skil_temp.push(17);
			skil_temp.push(47);
			skil_temp.push(38);
			skil_temp.push(23);

			skil_point.push(default_point[35]);
			skil_point.push(default_point[15]);
			skil_point.push(default_point[16]);
			skil_point.push(default_point[17]);
			skil_point.push(default_point[47]);
			skil_point.push(default_point[38]);
			skil_point.push(default_point[23]);
			cnt = Math.floor((Math.random() * 3)) + 1;
			if (cnt == 1){
				skil_temp.push(24);
				skil_point.push(default_point[24]);
			}else if (cnt == 2){
				skil_temp.push(43);
				skil_point.push(default_point[43]);
			}else if (cnt == 3){
				skil_temp.push(58);
				skil_point.push(default_point[58]);
			}
			break;
			
		case 23:										//暴力団組員
			skil_temp.push(35);
			skil_temp.push(14);
			skil_temp.push(43);
			skil_temp.push(48);
			skil_temp.push(38);
			skil_temp.push(23);

			skil_point.push(default_point[35]);
			skil_point.push(default_point[14]);
			skil_point.push(default_point[43]);
			skil_point.push(default_point[48]);
			skil_point.push(default_point[38]);
			skil_point.push(default_point[23]);
			
			cnt = Math.floor((Math.random() * 7)) + 1;
			if (cnt == 1){
				skil_temp.push(15);
				skil_point.push(default_point[15]);
			}else if (cnt == 2){
				skil_temp.push(3);
				skil_point.push(default_point[3]);
			}else if (cnt == 3){
				skil_temp.push(1);
				skil_point.push(default_point[1]);
			}else if (cnt == 4){
				skil_temp.push(2);
				skil_point.push(default_point[2]);
			}else if (cnt == 5){
				skil_temp.push(6);
				skil_point.push(default_point[6]);
			}else if (cnt == 6){
				skil_temp.push(59);
				skil_point.push(default_point[59]);
			}else if (cnt == 7){
				skil_temp.push(7);
				skil_point.push(default_point[7]);
			}
			skil_temp[7] = skil_temp[6];
			skil_point[7] = skil_point[6];
			while(skil_temp[7] == skil_temp[6]){
				skil_temp[7] = skil_temp[6];
				skil_point[7] = skil_point[6];
				skil_temp.splice(7, 7);
				cnt = Math.floor((Math.random() * 7)) + 1;
				if (cnt == 1){
					skil_temp.push(15);
					skil_point.push(default_point[15]);
				}else if (cnt == 2){
					skil_temp.push(3);
					skil_point.push(default_point[3]);
				}else if (cnt == 3){
					skil_temp.push(1);
					skil_point.push(default_point[1]);
				}else if (cnt == 4){
					skil_temp.push(2);
					skil_point.push(default_point[2]);
				}else if (cnt == 5){
					skil_temp.push(6);
					skil_point.push(default_point[6]);
				}else if (cnt == 6){
					skil_temp.push(59);
					skil_point.push(default_point[59]);
				}else if (cnt == 7){
					skil_temp.push(7);
					skil_point.push(default_point[7]);
				}
			}
			break;
			
		case 24:										//ミュージシャン
			skil_temp.push(35);
			skil_temp.push(16);
			skil_temp.push(43);
			skil_temp.push(29);
			skil_temp.push(37);
			skil_temp.push(47);
			skil_temp.push(38);
			skil_temp.push(58);

			skil_point.push(default_point[35]);
			skil_point.push(default_point[16]);
			skil_point.push(default_point[43]);
			skil_point.push(default_point[29]);
			skil_point.push(default_point[37]);
			skil_point.push(default_point[47]);
			skil_point.push(default_point[38]);
			skil_point.push(default_point[55]);
			break;
			
		case 25:										//メンタルセラピスト
			skil_temp.push(35);
			skil_temp.push(43);
			skil_temp.push(36);
			skil_temp.push(37);
			skil_temp.push(47);
			skil_temp.push(19);
			skil_temp.push(55);
			skil_temp.push(58);

			skil_point.push(default_point[35]);
			skil_point.push(default_point[43]);
			skil_point.push(default_point[36]);
			skil_point.push(default_point[37]);
			skil_point.push(default_point[47]);
			skil_point.push(default_point[19]);
			skil_point.push(default_point[55]);
			skil_point.push(default_point[58]);
			break;
	}
}