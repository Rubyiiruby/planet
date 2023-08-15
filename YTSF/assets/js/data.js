const app = Vue.createApp({
  data() {
    return {
      etf: [
        { id: '0050', name: '元大台灣50' },
        { id: '0056', name: '元大高股息' },
        { id: '006208', name: '富邦台50' },
        { id: '00679B', name: '元大美債20' },
        { id: '00687B', name: '國泰20年美債' },
        { id: '00713', name: '元大台灣高息低波' },
        { id: '00720B', name: '元大投資級公司債' },
        { id: '00751B', name: '元大AAA至A公司債' },
        { id: '00772B', name: '中信高評級公司債' },
        { id: '00850', name: '元大臺灣ESG永續' },
        { id: '00878', name: '國泰永續高股息' },
        { id: '00881', name: '國泰台灣5G+' },
        { id: '00888', name: '永豐台灣ESG' },
        { id: '00891', name: '中信關鍵半導體' },
        { id: '00919', name: '群益台灣精選高息' },
      ],
      stock: [
        { id: '1101', name: '台泥' },
        { id: '1102', name: '亞泥' },
        { id: '1210', name: '大成' },
        { id: '1216', name: '統一' },
        { id: '1227', name: '佳格' },
        { id: '1301', name: '台塑' },
        { id: '1303', name: '南亞' },
        { id: '1326', name: '台化' },
        { id: '1402', name: '遠東新' },
        { id: '1434', name: '福懋' },
        { id: '1477', name: '聚陽' },
        { id: '1504', name: '東元' },
        { id: '1513', name: '中興電' },
        { id: '1590', name: 'KY' },
        { id: '1605', name: '華新' },
        { id: '1717', name: '長興' },
        { id: '1722', name: '台肥' },
        { id: '1802', name: '台玻' },
        { id: '1907', name: '永豐餘' },
        { id: '2002', name: '中鋼' },
        { id: '2006', name: '東和鋼鐵' },
        { id: '2105', name: '正新' },
        { id: '2207', name: '和泰車' },
        { id: '2301', name: '光寶科' },
        { id: '2303', name: '聯電' },
        { id: '2308', name: '台達電' },
        { id: '2313', name: '華通' },
        { id: '2324', name: '仁寶' },
        { id: '2327', name: '國巨' },
        { id: '2330', name: '台積電' },
        { id: '2337', name: '旺宏' },
        { id: '2347', name: '聯強' },
        { id: '2352', name: '佳世達' },
        { id: '2353', name: '宏碁' },
        { id: '2354', name: '鴻準' },
        { id: '2356', name: '英業達' },
        { id: '2360', name: '致茂' },
        { id: '2357', name: '華碩' },
        { id: '2376', name: '技嘉' },
        { id: '2377', name: '微星' },
        { id: '2379', name: '瑞昱' },
        { id: '2382', name: '廣達' },
        { id: '2383', name: '台光電' },
        { id: '2385', name: '群光' },
        { id: '2395', name: '研華' },
        { id: '2408', name: '南亞科' },
        { id: '2409', name: '友達' },
        { id: '2412', name: '中華電' },
        { id: '2449', name: '京元電子' },
        { id: '2454', name: '聯發科' },
        { id: '2474', name: '可成' },
        { id: '2492', name: '華新科' },
        { id: '2603', name: '長榮' },
        { id: '2606', name: '裕民' },
        { id: '2609', name: '陽明' },
        { id: '2615', name: '萬海' },
        { id: '2801', name: '彰銀' },
        { id: '2845', name: '遠東銀' },
        { id: '2880', name: '華南金' },
        { id: '2881', name: '富邦金' },
        { id: '2882', name: '國泰金' },
        { id: '2883', name: '開發金' },
        { id: '2884', name: '玉山金' },
        { id: '2886', name: '兆豐金' },
        { id: '2887', name: '台新金' },
        { id: '2890', name: '永豐金' },
        { id: '2891', name: '中信金' },
        { id: '2892', name: '第一金' },
        { id: '2912', name: '統一超' },
        { id: '3008', name: '大立光' },
        { id: '3017', name: '奇鋐' },
        { id: '3034', name: '聯詠' },
        { id: '3036', name: '文曄' },
        { id: '3037', name: '欣興' },
        { id: '3044', name: '健鼎' },
        { id: '3045', name: '台灣大' },
        { id: '3189', name: '景碩' },
        { id: '3231', name: '緯創' },
        { id: '3481', name: '群創' },
        { id: '3665', name: '貿聯-KY' },
        { id: '3702', name: '大聯大' },
        { id: '3711', name: '日月光投控' },
        { id: '4904', name: '遠傳' },
        { id: '4919', name: '新唐' },
        { id: '4938', name: '和碩' },
        { id: '4958', name: '臻鼎-KY' },
        { id: '5876', name: '上海商銀' },
        { id: '5880', name: '合庫金' },
        { id: '6176', name: '瑞儀' },
        { id: '6239', name: '力成' },
        { id: '6505', name: '台塑化' },
        { id: '6592', name: '和潤企業' },
        { id: '6669', name: '緯穎' },
        { id: '8046', name: '南電' },
        { id: '8464', name: '億豐' },
        { id: '9904', name: '寶成' },
        { id: '9910', name: '豐泰' },
        { id: '9917', name: '中保科' },
        { id: '9921', name: '巨大' },
        { id: '9941', name: '裕融' },
      ],
      mf: [{ name: '元大台灣高股息優質龍頭基金' }],
    }
  },
})

app.mount('#app')
