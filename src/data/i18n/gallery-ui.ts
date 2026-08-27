import type { LocaleCode } from './locales';

export type GalleryUi = {
	eyebrow: string;
	title: string;
	subtitle: string;
	lead: string;
	highlights: { title: string; copy: string }[];
	updatesLabel: string;
	updatesShort: string;
};

export const galleryUi: Record<LocaleCode, GalleryUi> = {
	en: {
		eyebrow: 'TarkovHack',
		title: 'TarkovHack gallery',
		subtitle: 'Simple TarkovHack visuals — ESP, wallhack, aimbot, and radar for Escape from Tarkov on PC.',
		lead: 'TarkovHack helps you spot PMCs, Scavs, loot, and extracts with ESP, aimbot, and radar in one license.',
		highlights: [
			{ title: 'TarkovHack esp', copy: 'See players through walls with TarkovHack esp and wallhack overlays.' },
			{ title: 'TarkovHack radar', copy: 'Track nearby threats with TarkovHack radar before you push or extract.' },
			{ title: 'TarkovHack aimbot', copy: 'Use soft aim and aimbot controls tuned for Tarkov raids on Windows PC.' },
		],
		updatesLabel: 'TarkovHack updates',
		updatesShort: 'Updates',
	},
	es: {
		eyebrow: 'TarkovHack',
		title: 'Galería Escape from Tarkov',
		subtitle: 'Visuales de Escape from Tarkov con loadouts, peleas de escuadrón y combate raid — junto a herramientas ESP, radar y Aimbot.',
		lead: 'TarkovHack está pensado para el loop BR de Escape from Tarkov: leer el mapa, rastrear escuadrones enemigos, lootear y sobrevivir al extract.',
		highlights: [
			{ title: 'ESP de players y escuadrones', copy: 'Detecta players enemigos y contornos de escuadrón en Customs y scav-run para elegir peleas con mejor información.' },
			{ title: 'Marcadores de loot y cofres', copy: 'Resalta loadouts, cofres y loot de alto nivel sin saturar la pantalla en plena partida.' },
			{ title: 'Controles Aimbot Escape from Tarkov', copy: 'Ajusta suavidad, prioridad de objetivo y teclas para AR, SMG y francotirador antes de comprar.' },
		],
		updatesLabel: 'Actualizaciones TarkovHack',
		updatesShort: 'Updates',
	},
	fr: {
		eyebrow: 'TarkovHack',
		title: 'Galerie Escape from Tarkov',
		subtitle: 'Visuels Escape from Tarkov — loadouts, combats d\'escouade et raid — avec ESP, radar et Aimbot.',
		lead: 'TarkovHack suit la boucle BR de Escape from Tarkov : lire la carte, suivre les escouades, loot et survivre au extract.',
		highlights: [
			{ title: 'ESP players & escouades', copy: 'Repérez les players ennemis sur Customs et scav-run pour choisir vos engagements.' },
			{ title: 'Marqueurs loot & coffres', copy: 'Mettez en évidence loadouts, coffres et loot haut niveau sans encombrer l\'écran.' },
			{ title: 'Réglages Aimbot Escape from Tarkov', copy: 'Ajustez fluidité, priorité cible et raccourcis pour AR, SMG et sniper.' },
		],
		updatesLabel: 'Mises à jour TarkovHack',
		updatesShort: 'Updates',
	},
	de: {
		eyebrow: 'TarkovHack',
		title: 'Escape from Tarkov Galerie',
		subtitle: 'Escape from Tarkov-Bilder zu Loadouts, Squad-Kämpfen und raid — mit ESP, Radar und Aimbot.',
		lead: 'TarkovHack passt zur Raid-Schleife von Escape from Tarkov: Karte lesen, Gegner-Trupps tracken, looten und Extract überleben.',
		highlights: [
			{ title: 'Player- & Squad-ESP', copy: 'Erkenne feindliche Playeren auf Customs und scav-run für bessere Rotationsentscheidungen.' },
			{ title: 'Loot- & Vertragsmarker', copy: 'Hebe Loadout-Drops, Verträge und High-Tier-Loot hervor ohne Screen-Spam.' },
			{ title: 'Escape from Tarkov Aimbot Steuerung', copy: 'Feinjustiere Glätte, Zielpriorität und Hotkeys für AR, SMG und Sniper.' },
		],
		updatesLabel: 'TarkovHack Updates',
		updatesShort: 'Updates',
	},
	pt: {
		eyebrow: 'TarkovHack',
		title: 'Galeria Escape from Tarkov',
		subtitle: 'Visuais de Escape from Tarkov com loadouts, combates de esquadrão e raid — com ESP, radar e Aimbot.',
		lead: 'TarkovHack segue o loop BR do Escape from Tarkov: ler o mapa, rastrear esquadrões, lootar e sobreviver ao extract.',
		highlights: [
			{ title: 'ESP de players e esquadrões', copy: 'Detecte players inimigos em Customs e scav-run para escolher lutas com melhor intel.' },
			{ title: 'Marcadores de loot e cofres', copy: 'Destaque loadouts, cofres e loot de alto nível sem poluir a tela.' },
			{ title: 'Controles Aimbot Escape from Tarkov', copy: 'Ajuste suavidade, prioridade de alvo e atalhos para AR, SMG e sniper.' },
		],
		updatesLabel: 'Atualizações TarkovHack',
		updatesShort: 'Updates',
	},
	it: {
		eyebrow: 'TarkovHack',
		title: 'Galleria Escape from Tarkov',
		subtitle: 'Immagini Escape from Tarkov — loadout, scontri di squadra e raid — con ESP, radar e Aimbot.',
		lead: 'TarkovHack è pensato per il loop BR di Escape from Tarkov: leggere la mappa, tracciare squadre nemiche, loot e sopravvivere al extract.',
		highlights: [
			{ title: 'ESP playeri e squadre', copy: 'Individua playeri nemici su Customs e scav-run per scegliere i fight con più intel.' },
			{ title: 'Marker loot e coffreti', copy: 'Evidenzia loadout, coffreti e loot di alto livello senza riempire lo schermo.' },
			{ title: 'Controlli Aimbot Escape from Tarkov', copy: 'Regola smoothness, priorità bersaglio e hotkey per AR, SMG e sniper.' },
		],
		updatesLabel: 'Aggiornamenti TarkovHack',
		updatesShort: 'Updates',
	},
	nl: {
		eyebrow: 'TarkovHack',
		title: 'Escape from Tarkov galerij',
		subtitle: 'Escape from Tarkov-beelden van loadouts, squadgevechten en raid — met ESP, radar en Aimbot.',
		lead: 'TarkovHack volgt de raid-loop van Escape from Tarkov: kaart lezen, vijandelijke squads volgen, looten en de extract overleven.',
		highlights: [
			{ title: 'Player- & squad-ESP', copy: 'Spot vijandelijke players op Customs en scav-run voor betere rotatiebeslissingen.' },
			{ title: 'Loot- & chestmarkers', copy: 'Markeer loadout-drops, chesten en high-tier loot zonder schermoverlast.' },
			{ title: 'Escape from Tarkov Aimbot instellingen', copy: 'Stel smoothness, doelprioriteit en hotkeys af voor AR, SMG en sniper.' },
		],
		updatesLabel: 'TarkovHack updates',
		updatesShort: 'Updates',
	},
	pl: {
		eyebrow: 'TarkovHack',
		title: 'Galeria Escape from Tarkov',
		subtitle: 'Grafiki Escape from Tarkov — loadouty, walki drużynowe i raid — z ESP, radar i Aimbot.',
		lead: 'TarkovHack pasuje do pętli BR Escape from Tarkov: czytaj mapę, śledź wrogie drużyny, lootuj i przeżyj extract.',
		highlights: [
			{ title: 'ESP players i drużyn', copy: 'Wykrywaj wrogich players na Customs i scav-run dla lepszych decyzji rotacyjnych.' },
			{ title: 'Markery lootu i skrzyń', copy: 'Podświetlaj loadouty, petity i wysokiej klasy loot bez zaśmiecania ekranu.' },
			{ title: 'Sterowanie Aimbot Escape from Tarkov', copy: 'Dostosuj płynność, priorytet celu i skróty dla AR, SMG i snajperki.' },
		],
		updatesLabel: 'Aktualizacje TarkovHack',
		updatesShort: 'Updates',
	},
	ru: {
		eyebrow: 'TarkovHack',
		title: 'Галерея Escape from Tarkov',
		subtitle: 'Визуалы Escape from Tarkov — лоадауты, бои отрядов и raid — с ESP, радаром и Aimbot.',
		lead: 'TarkovHack создан для рейд-циклу Escape from Tarkov: читать карту, отслеживать вражеские отряды, лут и выживать в extract.',
		highlights: [
			{ title: 'ESP игроков и отрядов', copy: 'Замечайте вражеских игроков на Customs и scav-run для лучших решений по ротации.' },
			{ title: 'Маркеры лута и сундуков', copy: 'Подсвечивайте loadout, сундуки и высокий лут без перегрузки экрана.' },
			{ title: 'Настройки Aimbot Escape from Tarkov', copy: 'Настройте плавность, приоритет цели и горячие клавиши для AR, SMG и снайперки.' },
		],
		updatesLabel: 'Обновления TarkovHack',
		updatesShort: 'Updates',
	},
	tr: {
		eyebrow: 'TarkovHack',
		title: 'Escape from Tarkov galerisi',
		subtitle: 'Loadout, takım savaşları ve raid görselleri — ESP, radar ve Aimbot ile.',
		lead: 'TarkovHack, Escape from Tarkov BR döngüsü için: haritayı oku, düşman takımları izle, loot al ve extract\'da hayatta kal.',
		highlights: [
			{ title: 'Player ve takım ESP', copy: 'Customs ve scav-run\'da düşman playerleri görerek daha iyi rotasyon kararları alın.' },
			{ title: 'Loot ve kontrat işaretleri', copy: 'Loadout, kontrat ve üst seviye loot\'u ekranı doldurmadan vurgulayın.' },
			{ title: 'Escape from Tarkov Aimbot kontrolleri', copy: 'AR, SMG ve sniper için yumuşaklık, hedef önceliği ve kısayolları ayarlayın.' },
		],
		updatesLabel: 'TarkovHack güncellemeleri',
		updatesShort: 'Updates',
	},
	ar: {
		eyebrow: 'TarkovHack',
		title: 'معرض Escape from Tarkov',
		subtitle: 'صور Escape from Tarkov — loadouts ومعارك الفرق وraid — مع ESP ورادار وAimbot.',
		lead: 'TarkovHack مبني لحلقة BR في Escape from Tarkov: قراءة الخريطة، تتبع الفرق، جمع اللوت والنجاة في extract.',
		highlights: [
			{ title: 'ESP للمشغلين والفرق', copy: 'اكتشف players المعادين على Customs وscav-run لاختيار القتالات بذكاء.' },
			{ title: 'علامات اللوت والصناديق', copy: 'أبرز loadouts والصناديق واللوت العالي دون ازدحام الشاشة.' },
			{ title: 'تحكم Aimbot Escape from Tarkov', copy: 'اضبط النعومة وأولوية الهدف والاختصارات للـ AR وSMG والقناص.' },
		],
		updatesLabel: 'تحديثات TarkovHack',
		updatesShort: 'Updates',
	},
	ja: {
		eyebrow: 'TarkovHack',
		title: 'Escape from Tarkov ギャラリー',
		subtitle: 'ロードアウト、スクワッド戦、BRコンバットのEscape from Tarkovビジュアル — ESP、レーダー、エイムボット付き。',
		lead: 'TarkovHackはEscape from TarkovのBRループ向け：マップを読み、敵スクワッドを追跡し、ルートしてextractを生き延びる。',
		highlights: [
			{ title: 'players＆スクワッドESP', copy: 'Customsとscav-runで敵playersを把握し、ローテ判断を改善。' },
			{ title: 'ルート＆チェストマーカー', copy: 'ロードアウト、チェスト、高ティアルートを画面を埋めずに表示。' },
			{ title: 'Escape from Tarkovエイムボット設定', copy: 'AR、SMG、スナイパー向けにスムーズさ、ターゲット優先度、ホットキーを調整。' },
		],
		updatesLabel: 'TarkovHack更新',
		updatesShort: 'Updates',
	},
	ko: {
		eyebrow: 'TarkovHack',
		title: 'Escape from Tarkov 갤러리',
		subtitle: '로드아웃, 스쿼드 전투, BR 컴뱃 Escape from Tarkov 비주얼 — ESP, 레이더, 에임봇 포함.',
		lead: 'TarkovHack는 Escape from Tarkov BR 루프용: 맵 읽기, 적 스쿼드 추적, 루트 수집, extract 생존.',
		highlights: [
			{ title: 'players & 스쿼드 ESP', copy: 'Customs와 scav-run에서 적 players를 파악해 로테이션 결정을 개선.' },
			{ title: '루트 & 상자 마커', copy: '로드아웃, 상자, 고티어 루트를 화면을 가리지 않고 강조.' },
			{ title: 'Escape from Tarkov 에임봇 컨트롤', copy: 'AR, SMG, 스나이퍼용 부드러움, 타겟 우선순위, 단축키 조정.' },
		],
		updatesLabel: 'TarkovHack 업데이트',
		updatesShort: 'Updates',
	},
	zh: {
		eyebrow: 'TarkovHack',
		title: 'Escape from Tarkov 图库',
		subtitle: 'Escape from Tarkov 视觉 — 配装、小队战斗和大逃杀 — 配合 ESP、雷达和自瞄。',
		lead: 'TarkovHack 为 Escape from Tarkov BR 循环设计：读图、追踪敌方小队、搜刮并在 extract 存活。',
		highlights: [
			{ title: 'players与小队 ESP', copy: '在 Customs 和 scav-run 发现敌方players，做出更好的转点决策。' },
			{ title: '物资与宝箱标记', copy: '高亮配装、宝箱和高级物资，不遮挡屏幕。' },
			{ title: 'Escape from Tarkov 自瞄控制', copy: '调整 AR、SMG 和狙击的平滑度、目标优先级和热键。' },
		],
		updatesLabel: 'TarkovHack 更新',
		updatesShort: 'Updates',
	},
	hi: {
		eyebrow: 'TarkovHack',
		title: 'Escape from Tarkov गैलरी',
		subtitle: 'Loadout, squad fights और raid visuals — ESP, radar और Aimbot के साथ।',
		lead: 'TarkovHack Escape from Tarkov BR loop के लिए: map पढ़ें, enemy squads track करें, loot करें और extract survive करें।',
		highlights: [
			{ title: 'Player & Squad ESP', copy: 'Customs और scav-run पर enemy players spot करें बेहतर rotation decisions के लिए।' },
			{ title: 'Loot & Chest Markers', copy: 'Loadout drops, chests और high-tier loot highlight करें screen clutter के बिना।' },
			{ title: 'Escape from Tarkov Aimbot Controls', copy: 'AR, SMG और sniper के लिए smoothness, target priority और hotkeys tune करें।' },
		],
		updatesLabel: 'TarkovHack updates',
		updatesShort: 'Updates',
	},
	id: {
		eyebrow: 'TarkovHack',
		title: 'Galeri Escape from Tarkov',
		subtitle: 'Visual Escape from Tarkov — loadout, pertempuran squad, dan raid — dengan ESP, radar, dan Aimbot.',
		lead: 'TarkovHack untuk loop BR Escape from Tarkov: baca peta, lacak squad musuh, loot, dan selamat di extract.',
		highlights: [
			{ title: 'ESP player & squad', copy: 'Deteksi player musuh di Customs dan scav-run untuk keputusan rotasi lebih baik.' },
			{ title: 'Marker loot & peti', copy: 'Sorot loadout, peti, dan loot tier tinggi tanpa membanjiri layar.' },
			{ title: 'Kontrol Aimbot Escape from Tarkov', copy: 'Atur smoothness, prioritas target, dan hotkey untuk AR, SMG, dan sniper.' },
		],
		updatesLabel: 'Update TarkovHack',
		updatesShort: 'Updates',
	},
	th: {
		eyebrow: 'TarkovHack',
		title: 'แกลเลอรี Escape from Tarkov',
		subtitle: 'ภาพ Escape from Tarkov — loadout การต่อสู้ทีม และ raid — พร้อม ESP เรดาร์และ Aimbot',
		lead: 'TarkovHack สำหรับลูป BR ของ Escape from Tarkov: อ่านแผนที่ ติดตามทีมศัตรู เก็บ loot และรอด extract',
		highlights: [
			{ title: 'ESP ผู้เล่นและทีม', copy: 'มองเห็นศัตรูบน Customs และ scav-run เพื่อตัดสินใจหมุนเวียนได้ดีขึ้น' },
			{ title: 'มาร์กเกอร์ loot และหีบ', copy: 'เน้น loadout หีบและ loot ระดับสูงโดยไม่รกหน้าจอ' },
			{ title: 'ควบคุม Aimbot Escape from Tarkov', copy: 'ปรับความนุ่ม ลำดับเป้าหมาย และ hotkey สำหรับ AR SMG และ sniper' },
		],
		updatesLabel: 'อัปเดต TarkovHack',
		updatesShort: 'Updates',
	},
	vi: {
		eyebrow: 'TarkovHack',
		title: 'Thư viện Escape from Tarkov',
		subtitle: 'Hình ảnh Escape from Tarkov — loadout, chiến đấu squad và raid — với ESP, radar và Aimbot.',
		lead: 'TarkovHack cho vòng BR Escape from Tarkov: đọc bản đồ, theo dõi squad địch, loot và sống sót extract.',
		highlights: [
			{ title: 'ESP player & squad', copy: 'Phát hiện player địch trên Customs và scav-run để quyết định rotate tốt hơn.' },
			{ title: 'Đánh dấu loot & rương', copy: 'Làm nổi bật loadout, rương và loot cao cấp mà không che màn hình.' },
			{ title: 'Điều khiển Aimbot Escape from Tarkov', copy: 'Tinh chỉnh độ mượt, ưu tiên mục tiêu và phím tắt cho AR, SMG và sniper.' },
		],
		updatesLabel: 'Cập nhật TarkovHack',
		updatesShort: 'Updates',
	},
	uk: {
		eyebrow: 'TarkovHack',
		title: 'Галерея Escape from Tarkov',
		subtitle: 'Візуали Escape from Tarkov — loadout, бої загонів і raid — з ESP, радаром і Aimbot.',
		lead: 'TarkovHack для рейд-циклу Escape from Tarkov: читати карту, відстежувати ворожі загони, лут і виживати в extract.',
		highlights: [
			{ title: 'ESP гравців і загонів', copy: 'Помічайте ворожих гравців на Customs і scav-run для кращих ротацій.' },
			{ title: 'Маркери луту й скринь', copy: 'Підсвічуйте loadout, контракти та високий лут без перевантаження екрана.' },
			{ title: 'Налаштування Aimbot Escape from Tarkov', copy: 'Налаштуйте плавність, пріоритет цілі та гарячі клавіші для AR, SMG і снайперки.' },
		],
		updatesLabel: 'Оновлення TarkovHack',
		updatesShort: 'Updates',
	},
	cs: {
		eyebrow: 'TarkovHack',
		title: 'Galerie Escape from Tarkov',
		subtitle: 'Escape from Tarkov vizuály — loadouty, squad souboje a raid — s ESP, radarem a Aimbot.',
		lead: 'TarkovHack pro BR smyčku Escape from Tarkov: číst mapu, sledovat nepřátelské squady, loot a přežít extract.',
		highlights: [
			{ title: 'ESP players a squadů', copy: 'Spozorujte nepřátelské operátory na Customs a scav-run pro lepší rotační rozhodnutí.' },
			{ title: 'Markery lootu a petitů', copy: 'Zvýrazněte loadouty, petity a high-tier loot bez přeplnění obrazovky.' },
			{ title: 'Ovládání Aimbot Escape from Tarkov', copy: 'Nastavte smoothness, prioritu cíle a hotkeys pro AR, SMG a sniper.' },
		],
		updatesLabel: 'Aktualizace TarkovHack',
		updatesShort: 'Updates',
	},
	ro: {
		eyebrow: 'TarkovHack',
		title: 'Galerie Escape from Tarkov',
		subtitle: 'Vizualuri Escape from Tarkov — loadout, lupte de squad și raid — cu ESP, radar și Aimbot.',
		lead: 'TarkovHack pentru bucla BR Escape from Tarkov: citește harta, urmărește squad-uri inamice, loot și supraviețuiește extract.',
		highlights: [
			{ title: 'ESP playeri și squad-uri', copy: 'Detectează playeri inamici pe Customs și scav-run pentru decizii de rotație mai bune.' },
			{ title: 'Markere loot și cheste', copy: 'Evidențiază loadout-uri, cheste și loot de nivel înalt fără a aglomera ecranul.' },
			{ title: 'Controale Aimbot Escape from Tarkov', copy: 'Ajustează smoothness, prioritate țintă și hotkeys pentru AR, SMG și sniper.' },
		],
		updatesLabel: 'Actualizări TarkovHack',
		updatesShort: 'Updates',
	},
	sv: {
		eyebrow: 'TarkovHack',
		title: 'Escape from Tarkov galleri',
		subtitle: 'Escape from Tarkov-bilder — loadouts, squadstrider och raid — med ESP, radar och Aimbot.',
		lead: 'TarkovHack för Escape from Tarkov:s raid-loop: läs kartan, spåra fiendesquads, loota och överlev extract.',
		highlights: [
			{ title: 'Player- & squad-ESP', copy: 'Spotta fiendeplayerer på Customs och scav-run för bättre rotationsbeslut.' },
			{ title: 'Loot- & petitsmarkörer', copy: 'Markera loadout-drops, petit och high-tier loot utan skärmklutter.' },
			{ title: 'Escape from Tarkov Aimbot-kontroller', copy: 'Justera smoothness, målprioritet och snabbtangenter för AR, SMG och sniper.' },
		],
		updatesLabel: 'TarkovHack uppdateringar',
		updatesShort: 'Updates',
	},
};

export function getGalleryUi(locale: LocaleCode): GalleryUi {
	return galleryUi[locale];
}
