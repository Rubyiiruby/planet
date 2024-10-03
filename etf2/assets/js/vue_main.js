const vm = new Vue({
  el: '#app',
  data() {
    return {
      yScrollValue: '',
      location: [],
      //----------------------------------
      isOpenMenu: false,
      showVideo: false,
      //
      countdownEndTime: 'Oct 25, 2024 00:00:00',
      // countdownEndTime: "Sep 25, 2024 00:00:00",
      countdownInterval: null,
      isCountdownTimeOut: false,
      activityEndTime: 'Oct 31, 2024 16:00:00',
      // activityEndTime: "Sep 31, 2024 18:19:00",
      // section 1
      howToBuy: {
        tabStatus: 0,
        tabs: [
          {
            title: '銷售機構',
            securities: {
              title: '證券商',
              list: [
                '元大證券',
                '元富證券',
                '兆豐證券',
                '統一證券',
                '凱基證券',
                '群益金鼎證券',
                '華南永昌證券',
                '永豐金證券',
                '富邦證券',
                '國泰證券',
                '台新證券',
                '國票證券',
                '玉山證券',
                '第一金證券',
                '中國信託證券',
                '合庫證券',
                '台銀證券',
                '大昌證券',
              ],
            },
            banks: { title: '銀行', list: ['元大銀行', '華南銀行'] },
            notice:
              '若您為上述指定證券商或銀行客戶，可與該銷售機構洽詢申購，申購方式及費率依各銷售機構而定。',
          },
          {
            title: '元大投信',
          },
        ],
      },
      //section 4
      advantages: [
        {
          icon: 'icon-section4-1.svg',
          title: '潛力',
          text: '預估成長率約美國科技股 1.2 倍',
          image: 'img-section4-1.png',
        },
        {
          icon: 'icon-section4-2.svg',
          title: '時機',
          text: '預估本益比約美國科技股 8 成多',
          image: 'img-section4-2.png',
        },
        {
          icon: 'icon-section4-3.svg',
          title: 'CP 值',
          text: '較高報酬、較低波動帶來高 CP 值',
          image: 'img-section4-3.png',
        },
      ],
      // section 5
      strengths: {
        tabStatus: 0,
        tabList: ['政策力', '稀少力', '產能力', '成長力'],
        content: [
          {
            id: 'policy',
            title:
              '國家級錢潮洶湧來襲，全球國防預算已達 2.44 兆美元新高，有望持續加速成長至 3 兆美元以上',
            warning:
              '資料來源：左圖美國2023年國防預算來自斯德哥爾摩國際和平研究所(SIPRI)2024/4，2027年美國國防預算預估達1.2兆美元來自高盛2022/12之報告預測，歐盟、日本及韓國為各區域/國家國防機構2024/3，右圖2.44兆美元來自SIPRI 2024/4，2030年逾3兆美元來自Business Research 2024/9/2。5兆美元係以全球國防預算及GDP占比持續增加來推估，換算國防預算總額每增加1%，約增加1兆美元的產值，元大投信整理。<span class="bold">本文提及之經濟走勢預測不必然代表本基金績效，本基金投資風險請詳閱基金公開說明書。</span>',
          },
          {
            id: 'scarcity',
            title: '高科技、高精密、高機密建立高進入門檻，航太防衛科技產業獨具強大競爭力',
            warning:
              '右圖為2025、2030及2032年之預估值。資料來源：右上Global Market Insights，資料來源時間2023/12。右中Acumen Research and Consulting，資料來源時間2022/10。右下集邦科技(Trend Force)，資料來源時間2022/12。元大投信整理。<span class="bold">以上說明資料僅供參考，不代表本基金實際報酬率及未來收益之保證，不代表本基金未來必然之配置。以上經濟預測不代表基金實際績效或未來績效之保證。本文提及個股、行業及佔比僅為說明之用，不代表基金之必然投資，亦不代表任何金融商品的推介或建議，無特定推薦之意圖。投資人申購基金係持有基金受益憑證，而非本文提及之投資資產或標的。</span>',
          },
          {
            id: 'capacity',
            title: '產能供不應求，歐美、亞太地區聯手共同提升全球航太防衛科技產能',
            warning:
              '各國出口排名來自斯德哥爾摩國際和平研究所(SIPRI)，2024/4。元大投信整理。<span class="bold">本文提及個股、行業及占比僅為說明之用，不代表基金之必然投資，亦不代表任何金融商品的推介或建議，無特定推薦之意圖。投資人申購基金係持有基金受益憑證，而非本文提及之投資資產或標的。以上說明不代表本基金實際報酬率及未來收益之保證。</span>',
          },
          {
            id: 'growth',
            title: '歐美航太防衛科技產業位居全球龍頭地位，亞太地區低基期高潛力，跟進展開長多格局',
            warning:
              '資料來源：左圖斯德哥爾摩國際和平研究所(SIPRI)2024/4，元大投信整理。右圖S&P500航太與國防等權重指數之統計時間2001/1/1-2021/12/31，三菱重工業與韓華航太報酬率統計時間自俄烏戰爭發生年度之2022/1/1-2024/9/27，皆採原幣計價。資料來源：右圖均來自彭博資訊，右圖三菱重工業及韓華航太每股純益資料時間2024-2026，年資料，均為預估值，元大投信整理。<span class="bold">上述提及之指數報酬率為含息報酬率，意指利用指數所計算之投資報酬率中，以原幣投資不計入交易成本，亦包含現金股利之報酬。以上僅為歷史績效，過去績效不代表基金實際報酬率及未來收益之保證。指數報酬率非指基金報酬率，投資人不可直接投資該指數。個股報酬率亦不代表基金實際報酬率之保證。本文提及個股、行業及占比僅為說明之用，不代表基金之必然投資，不代表任何金融商品的推介或建議，無特定推薦意圖。投資人申購基金係持有基金受益憑證，而非本文提及之投資資產或標的。</span>',
          },
        ],
      },
      // section 6
      industry: {
        tabStatus: 0,
        list: [
          {
            icon: 'icon-section6-1.svg',
            title: '雙引擎',
            text: '並重全球航太防衛領頭羊的歐美市場及近年獲利高成長的亞太市場組成雙引擎',
          },
          {
            icon: 'icon-section6-2.svg',
            title: '新贏家',
            text: '精選全球航太防衛科技領域中的大型龍頭企業，最受惠國防預算成長商機',
          },
          {
            icon: 'icon-section6-3.svg',
            title: '好韌性',
            text: '全球國防預算長期成長，為供應鏈帶來穩健現金流與成長動能，兼具攻擊與防禦性',
          },
        ],
        tabs: [
          {
            title: '歐美、亞太地區雙管齊下',
            description:
              '不同於傳統防衛主題式投資大多側重美國供應鏈，本指數依據全球航太防衛最新趨勢而囊括歐美亞三大市場的投資潛力。',
            image: 'img-section6-1',
            notice:
              '註：上述國家權重之計算係根據成分股掛牌交易所之所屬國家，其中歐洲部分包含巴黎泛歐交易所、德國Xetra證券交易所、倫敦證券交易所與米蘭證券交易所。資料來源：指數編製公司ICE、元大投信整理，截至2024/9/27。NYSE FactSet全球航太與防衛科技指數之投資國家，主要篩選於美國、英國、法國、德國、義大利、日本、韓國、台灣、澳洲等交易所掛牌投資標的。<span class="bold">本文提及個股、行業及占比僅為說明之用，不代表基金之必然投資，亦不代表任何金融商品的推介或建議，無特定推薦之意圖。投資國家及交易所與指數成分股會於指數調整時依篩選條件而有所變動。投資人申購基金係持有基金受益憑證，而非本文提及之投資資產或標的。</span>',
          },
          {
            title: '涵蓋受惠國防趨勢的強勢企業',
            description: '追蹤指數囊括績效卓越的強勢企業',
            image: 'img-section6-2',
            notice:
              '資料來源：指數編製公司ICE，元大投信整理。<span class="bold">以上為NYSE FactSet全球航太與防衛科技指數2024/9/27重點成分股，未來指數成分標的可能於指數調整時依篩選條件而有所變動，篩選規則請詳閱公開說明書。本文提及個股、行業及占比僅為說明之用，不代表本基金之必然投資，亦不代表任何金融商品的推介或建議，無特定推薦之意圖。投資人申購基金係持有基金受益憑證，而非本文提及之投資資產或標的。</span>',
          },
          {
            title: '進可攻退可守的蓬勃產業',
            description:
              '近年指數表現呈波動向上趨勢，投資人布局前仍應考量風險承受程度，並留意全球國防預算變化趨勢。',
            image: 'img-section6-3',
            notice:
              'NYSE FactSet全球航太與防衛指數資料起始日自2020/5/8，發布時間自2023/12/14。資料來源：彭博資訊，2020/5/8-2024/9/27，新冠疫情反彈時間2020/5/8-2020/12/31，美國大幅升息時間2022/1/1-2022/12/31，俄烏戰爭以來為2022/2/24-2024/9/27。<span class="bold">以上僅為歷史績效資料，過去績效資料不代表基金實際報酬率及未來績效或收益之保證，不同時間結果亦可能不同。上述提及之指數報酬率均為含息報酬率，意指利用指數所計算之投資報酬率中，以原幣投資不計入交易成本，亦包含現金股利之報酬。指數報酬率非指基金報酬率，投資人不可直接投資該指數。本基金以追蹤標的指數報酬為目標，因此基金之投資績效將視其追蹤之標的指數之走勢而定。然因需負擔交易費用或其他必要之費用(如經理費、保管費、上市費)；或承受期貨及股票對市場信息反應不一所產生的價格波動影響，可能使基金報酬偏離標的指數報酬，且偏離方向無法預估；此外，基金承受相關匯率波動風險可能使基金報酬與投資目標產生偏離。投資前請詳閱公開說明書。</span>',
          },
        ],
      },
      // section 7
      file: {
        tabStatus: 0,
        tabs: [
          {
            title: '基本資料',
            notice:
              '*本基金實際申購手續費之適用費率，由經理公司依基金銷售策略及基金銷售機構之規定作調整，但本基金每受益權單位之申購手續費，最高不得超過投資人申購發行價格之2%。資料來源：基金公開說明書。<span class="bold">風險報酬等級為本公司經依基金之投資策略、風險係數等因素整體綜合考量後，並參酌中華民國證券投資信託暨顧問商業同業公會「基金風險報酬等級分類標準」所訂，該分類標準係計算過去5年基金淨值波動度標準差，以標準差區間予以分類等級，分類為RR1-RR5五級，數字越大代表風險越高。惟此等級分類係基於一般市場狀況反映市場價格波動風險，無法涵蓋所有風險(如：投資標的產業風險、信用風險、流動性風險、利率風險等)，不宜作為投資唯一依據，投資人仍應注意所投資基金個別的風險，並斟酌個人風險承擔能力後辦理投資。有關基金應負擔費用已揭露於基金之公開說明書，投資人可至公開資訊觀測站查詢。</span>',
          },
          {
            title: '指數編製規則',
            notice:
              '*EMEA為歐洲、中東及非洲三大區域。上述「航太與防衛核心」群組中的樣本證券篩選，劃分為亞太區與美洲和EMEA區兩個群組，並依指數篩選規則，於各群組分別選出15檔樣本證券，若某群組挑選出的樣本證券少於15檔，將從另一群組中加入。「賦能工業與科技」群組亦劃分為亞太區與美洲和EMEA區，依指數篩選原則於各群組分別挑選出10檔樣本證券，若某群組挑選出的樣本證券少於10檔，將從另一群組中加入。資料來源：基金公開說明書。<span class="bold">本文提及個股、行業及占比僅為說明之用，不代表本基金之必然投資，亦不代表任何金融商品的推介或建議，無特定推薦之意圖。投資人申購基金係持有基金受益憑證，而非本文提及之投資資產或標的。詳細指數編製規則請詳閱公開說明書。</span>',
          },
        ],
      },
    };
  },
  mounted() {
    window.addEventListener('scroll', this.scrollWatch);

    this.getLocation();

    this.ytPlay();

    this.countDown();
    this.countdownInterval = setInterval(this.countDown, 1000);

    new WOW().init();
    this.loadImagesAndAnimate();
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize);
  },
  computed: {
    isMobile() {
      return window.matchMedia('(max-width: 767px)');
    },
    isTablet() {
      return window.matchMedia('(min-width: 768px) and (max-width: 1023px)');
    },
    isDesktop() {
      return window.matchMedia('(min-width: 1024px)');
    },
    isActivityEnd() {
      const now = new Date();
      const targetTime = new Date(this.activityEndTime);
      return now > targetTime;
    },
  },
  methods: {
    scrollWatch() {
      this.yScrollValue = window.scrollY;
    },
    goTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    getLocation() {
      axios({
        url: 'https://api.yuantafunds.com/ectranslation/api/bridge',
        methods: 'GET',
        params: {
          APIType: 'EC2API',
          AppName: 'FundWeb',
          PageName: 'LeadersFunds',
          Device: '4',
          DeviceId: '0e3ca41f-1d91-4519-b39e-cd649ca38865',
          FuncId: 'CustomerService',
        },
      })
        .then((result) => {
          this.location = result.data.Data.CS;
        })
        .catch((error) => {
          console.error(`${error || error.message}`);
        });
    },
    addr(arr) {
      return `${arr.ComName}：${arr.Address} ${arr.Tel}　${arr.ApprovedNo}`;
    },
    toggleMenu() {
      this.isOpenMenu = !this.isOpenMenu;
    },
    handleScroll(sectionRef) {
      this.$refs[sectionRef].scrollIntoView({ behavior: 'smooth' });
    },
    handleMenuItem(sectionRef) {
      this.handleScroll(sectionRef);
      this.toggleMenu();
    },
    openVideoLightbox() {
      this.showVideo = true;
      document.body.style.overflow = 'hidden';
    },
    closeVideoLightbox() {
      this.showVideo = false;
      document.body.style.overflow = 'auto';
    },
    ytPlay() {
      const videoPlay = document.querySelector('#btn-video-play');
      const ytPlayer = document.querySelector('#ytplayer');
      videoPlay.addEventListener('click', function (e) {
        ytPlayer.src = ytPlayer.src;
      });
    },
    handleChangeTab(tab, index) {
      this[tab].tabStatus = index;
      this.handleScroll(`${tab}Tab`);
    },
    countDown() {
      const now = new Date();
      const targetTime = new Date(this.countdownEndTime);
      const diff = targetTime - now;

      // Countdown ends
      if (diff <= 0) {
        this.isCountdownTimeOut = true;
        clearInterval(this.countdownInterval);
        return;
      }

      const d = Math.floor(diff / (24 * 60 * 60 * 1000));
      const h = Math.floor(diff / (60 * 60 * 1000)) % 24;
      const m = Math.floor(diff / (60 * 1000)) % 60;
      this.$refs['day'].innerText = d;
      this.$refs['hour'].innerText = `0${h}`.slice(-2);
      this.$refs['minute'].innerText = `0${m}`.slice(-2);
    },
    // Custom
    loadImagesAndAnimate() {
      const imageSources = [
        'assets/img/kv-bg.jpg',
        'assets/img/kv-img-map.png',
        'assets/img/kv-img-uav.png',
      ];

      const imagePromises = imageSources.map((src) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.onload = resolve;
          img.onerror = reject;
          img.src = src;
        });
      });

      Promise.all(imagePromises)
        .then(() => {
          this.kvAnimation();
        })
        .catch((error) => {
          console.error('Error loading images:', error);
          this.kvAnimation();
        });
    },
    kvAnimation() {
      const kvWrapper = this.$refs['kvWrapper'];
      kvWrapper.style.opacity = 1;
      kvWrapper.style.visibility = 'visible';

      const tween = gsap
        .timeline()
        .from('.kv-map', { delay: 0.5, opacity: 0, duration: 1 })
        .from('.kv-blur', { opacity: 0, duration: 1 }, '-=1')
        .from('.kv-img-flag-US', { opacity: 0, top: -150, duration: 0.25 }, '-=0.15')
        .from('.kv-img-flag-JP', { opacity: 0, top: -150, duration: 0.25 }, '-=0.15')
        .from('.kv-img-flag-EU', { opacity: 0, top: -50, duration: 0.25 }, '-=0.15')
        .from('.kv-img-flag-KR', { opacity: 0, top: -50, duration: 0.25 }, '-=0.15')
        .from('.kv-img-flag-TW', { opacity: 0, top: -150, duration: 0.25 }, '-=0.15')
        .from('.kv-uav', {
          rotation: 90,
          y: -100,
          x: -100,
          scale: 0,
          duration: 2,
          ease: 'power4.out',
        })
        .from(
          '.kv-slogan-img',
          {
            opacity: 0,
            y: 80,
            scale: 0.5,
            ease: 'power1.inOut',
            duration: 0.5,
          },
          '-=0.75'
        )
        .from(
          '.kv-slogan',
          {
            opacity: 0,
            y: 60,
            scale: 0.5,
            ease: 'power1.inOut',
            duration: 0.5,
          },
          '-=0.35'
        );

      if (!this.isActivityEnd) {
        tween.from('.kv-date', {
          opacity: 0,
          scale: 0.5,
          ease: 'back.inOut (1.7)',
          duration: 0.5,
        });
      }
      if (!this.isActivityEnd) {
        tween.from('.kv-bar', {
          opacity: 0,
          scale: 0.5,
          ease: 'back.inOut (1.8)',
          duration: 0.5,
        });
      }
    },
    handleIndustryItemChangeTab(tab, index) {
      if (!this.isMobile.matches) {
        this[tab].tabStatus = index;
        this.handleScroll('industryList');
      }
    },
    handleIndustryTabChangeTab(tab, index) {
      this[tab].tabStatus = index;
      if (this.isMobile.matches) {
        this.handleScroll('industryTab');
      } else {
        this.handleScroll('industryList');
      }
    },
    handleApplyBtn() {
      this.handleScroll('section1');

      if (this.isCountdownTimeOut) {
        this.handleChangeTab('howToBuy', 1);
      }
    },
  },
});
