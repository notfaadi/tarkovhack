import type { LocaleCode } from './locales';

export type PageSection = { h2: string; paragraphs: string[]; list?: string[] };
export type PageContent = {
	title: string;
	description: string;
	h1: string;
	intro: string;
	imageAlt: string;
	galleryTitle: string;
	heroImage: string;
	sections: PageSection[];
	ctaPrimary: string;
	ctaSecondary?: string;
	ctaSecondaryHref?: string;
};
export type LocaleUi = {
	nav: { home: string; hacks: string; aimbot: string; esp: string; features: string; pricing: string; setup: string; updates: string; faq: string; buyNow: string };
	hero: { accent: string; accentShort: string; subtitle: string; subtitleShort: string; buyNow: string; seeFeatures: string };
	trust: { status: string; statusNote: string; statusShort: string; delivery: string; platform: string; antiCheat: string; antiCheatShort: string };
	product: { title: string; addToCart: string; monthly: string; lifetime: string; available: string; gameBadge: string; platformBadge: string; statusBadge: string };
	reviews: { title: string; subtitle: string; outOf: string; countLabel: string };
	common: { buyNow: string; readGuide: string; language: string; officialLanguageNote: string; relatedPages: string };
	footer: { explore: string; help: string; tagline: string };
	images: {
		hero: string; espWallhack: string; aimbotCombat: string; squadFight: string; playerEsp: string;
		headerArt: string; cheatsPackage: string; rebootFight: string; battleRoyale: string; battleRoyaleIsland: string;
	};
};
export type PageId = 'home' | 'tarkov-esp' | 'tarkov-aimbot' | 'features' | 'pricing' | 'setup' | 'updates' | 'faq' | 'support' | 'undetected' | 'wallhack' | 'radar' | 'battleye' | 'cheats-2026' | 'hacks' | 'cheat-download' | 'mod-menu' | 'soft-aim' | 'best-cheats' | 'aimbot-hack' | 'esp-hack' | 'unlock-all' | 'privacy' | 'refund' | 'terms';

export const i18nContent: Record<LocaleCode, { ui: LocaleUi; pages: Record<PageId, PageContent> }> = {
		en: {
			ui: {
				nav: {
					home: "Home",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Features",
					pricing: "Pricing",
					setup: "Setup",
					updates: "Updates",
					faq: "FAQ",
					buyNow: "Buy Now",
				},
				hero: {
					accent: "2026 — Undetected ESP, Aimbot & Wallhack",
					accentShort: "Undetected TarkovHack 2026",
					subtitle: "TarkovHack with tarkov esp, radar hack and tarkov aimbot for Windows PC — BattlEye maintenance included.",
					subtitleShort: "Tarkov esp, radar & aimbot for PC",
					buyNow: "Buy TarkovHack",
					seeFeatures: "See Features",
				},
				trust: {
					status: "Online",
					statusNote: "TarkovHack — undetected TarkovHack live for Tarkov on Windows PC.",
					statusShort: "Live",
					delivery: "Instant digital delivery",
					platform: "Windows 10 & 11",
					antiCheat: "BattlEye maintenance supported",
					antiCheatShort: "BattlEye anti-cheat supported",
				},
				product: {
					title: "TarkovHack",
					addToCart: "Add to Cart",
					monthly: "Monthly",
					lifetime: "Lifetime",
					available: "Available now",
					gameBadge: "Tarkov",
					platformBadge: "Windows PC",
					statusBadge: "Undetected TarkovHack",
				},
				reviews: {
					title: "What players say",
					subtitle: "Recent feedback from TarkovHack buyers",
					outOf: "out of 5",
					countLabel: "reviews",
				},
				common: {
					buyNow: "Buy TarkovHack",
					readGuide: "Read guide",
					language: "Language",
					officialLanguageNote: "English is official; other locales are translated.",
					relatedPages: "Related pages",
				},
				footer: {
					explore: "Explore",
					help: "Help & legal",
					tagline: "Undetected TarkovHack for PC.\nESP, wallhack, radar & aimbot.",
				},
				images: {
					hero: "TarkovHack hero — ESP and aimbot overlay in Escape from Tarkov",
					espWallhack: "Wallhack outlines showing PMCs and Scavs through walls",
					aimbotCombat: "Soft aim assist overlay during an Escape from Tarkov raid",
					squadFight: "TarkovHack combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Tarkov raid",
					headerArt: "Aimbot view and bone priority controls for Tarkov",
					cheatsPackage: "2D radar threat overlay for Escape from Tarkov",
					rebootFight: "Aimbot assist during a Tarkov firefight",
					battleRoyale: "TarkovHack in-raid overview for Windows PC",
					battleRoyaleIsland: "ESP markers for loot and extracts in Tarkov",
				},
			},
			pages: {
				home: {
					title: "TarkovHack 2026 | Undetected ESP, Aimbot & Wallhack",
					description: "TarkovHack for Windows PC — ESP, soft aim, radar, and BattlEye updates. Compare plans and buy.",
					h1: "TarkovHack — Undetected ESP, Wallhack & Aimbot",
					intro: "TarkovHack is the undetected TarkovHack package for Windows PC — built for Escape from Tarkov on Windows PC. Tarkov esp wallhack, 2D radar, and tarkov aimbot with BattlEye maintenance after every major patch.",
					imageAlt: "TarkovHack homepage hero — ESP and aimbot for Escape from Tarkov",
					galleryTitle: "TarkovHack gallery — ESP, Aimbot and wallhack visuals",
					ctaPrimary: "Buy TarkovHack",
					ctaSecondary: "See all features",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Why players choose TarkovHack in 2026",
							paragraphs: [
								"Tarkov rewards map awareness. TarkovHack combines ESP wallhack for enemy players and loot, radar-style threat cues, and configurable Aimbot so you can read fights before committing — on raid, scav-run, and competitive lobbies.",
								"Official seasons, patches, and anti-cheat updates come from <a href=\"https://www.escapefromtarkov.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Escape from Tarkov</a> and <a href=\"https://www.battleye.com/\" target=\"_blank\" rel=\"noopener noreferrer\">BattlEye Anti-Cheat</a>. We rebuild ESP, radar, and Aimbot modules when those patches require maintenance — then post status on the <a href=\"/updates/\">Updates page</a>.",
								"Licenses ship digitally after payment confirmation. Monthly ($35) and lifetime ($150) plans include BattlEye maintenance rebuilds when anti-cheat or game patches require updates.",
								"Start with the <a href=\"/tarkov-cheats/\">TarkovHack pillar</a>, <a href=\"/tarkov-esp/\">ESP guide</a>, <a href=\"/tarkov-aimbot/\">Aimbot controls</a>, and <a href=\"/tarkov-cheats/\">undetected status</a> pages if you are comparing tools before checkout.",
							],
						},
						{
							h2: "ESP wallhack, radar hack, and Aimbot in one license",
							paragraphs: [
								"Instead of stacking separate tools, TarkovHack bundles player ESP wallhack, loot markers, 2D radar overlays, and Aimbot profiles in one undetected package built for PMC raids and scav-runs — covering both “TarkovHack” and “escape from TarkovHack” search intent.",
								"Browse the <a href=\"/tarkov-esp/\">ESP</a>, <a href=\"/tarkov-aimbot/\">Aimbot</a>, <a href=\"/tarkov-esp/\">wallhack</a>, and <a href=\"/tarkov-radar-hack/\">radar</a> pages for control details — or jump to <a href=\"/pricing/\">Pricing</a> for monthly and lifetime options.",
								"Before patch days, check <a href=\"https://www.escapefromtarkov.com/support\" target=\"_blank\" rel=\"noopener noreferrer\">Escape from Tarkov Support</a> for Battlestate Games service health, then confirm our maintenance notes so you are not queueing on an outdated build.",
								"Ready to buy? Open <a href=\"/pricing/\">Pricing</a>, follow <a href=\"/setup/\">Setup</a> after delivery, and keep <a href=\"/faq/\">FAQ</a> / <a href=\"/support/\">Support</a> bookmarked for license questions.",
							],
						},
					],
					heroImage: "/images/tarkov-cheats-esp.webp",
				},
				"tarkov-esp": {
					title: "Tarkov ESP 2026 | Player Boxes & Wallhack",
					description: "Tarkov ESP for Windows PC — player boxes, loot markers, and distance readouts. Part of our undetected TarkovHack for Escape from Tarkov.",
					h1: "Tarkov ESP — Player Boxes & Wallhack",
					intro: "Tarkov esp visibility tools for raid and scav-run. Read enemy squads, PMCs, Scavs, loot, and distance before you commit — toggleable tarkov esp wallhack overlays bundled in our TarkovHack package.",
					imageAlt: "Tarkov ESP player boxes and distance readouts in a raid",
					galleryTitle: "Tarkov ESP overlay visuals",
					ctaPrimary: "Buy TarkovHack",
					ctaSecondary: "Tarkov wallhack guide",
					ctaSecondaryHref: "/tarkov-esp/",
					sections: [
						{
							h2: "What Tarkov ESP solves in raids",
							paragraphs: [
								"Tarkov maps punish incomplete information. TarkovHack ESP wallhack helps you spot enemy squads early, spot PMCs and Scavs before they push your angle, and mark high-value loot worth the detour.",
								"On raid, scav-run, and competitive lobbies, that visibility gap is often the difference between a clean third-party and a wiped squad. ESP ships bundled with radar overlays and Aimbot in one license.",
								"Tarkov’s live seasons and map updates are published by Battlestate Games (<a href=\"https://www.escapefromtarkov.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Escape from Tarkov</a>). When POIs or loot rules shift, ESP categories stay useful because they track players and containers — not a single static landmark.",
							],
						},
						{
							h2: "Player, boss, and loot ESP wallhack categories",
							paragraphs: [
								"Toggle enemy player outlines, boss markers, extract cues, and loot pins so only raid-critical ESP wallhack overlays stay active during rotations.",
								"Distance readouts and snapline options help you control engagement range. Team and enemy colour coding supports PMC raids and scav-runs lobbies alike.",
								"Compare category detail on the <a href=\"/tarkov-esp/\">wallhack page</a> and pair visibility with the <a href=\"/tarkov-radar-hack/\">radar hack</a> for flanks outside your FOV.",
							],
							list: [
								"Enemy player ESP outlines with distance",
								"Loot and container markers for faster rotations",
								"Boss and extract awareness cues",
								"Toggleable categories to reduce overlay noise",
							],
						},
						{
							h2: "Undetected ESP with BattlEye maintenance",
							paragraphs: [
								"TarkovHack ESP wallhack is maintained for Tarkov with rebuilds after BattlEye anti-cheat patches. Check the <a href=\"/updates/\">Updates page</a> before you queue — no cheat guarantees permanent undetected status.",
								"Read <a href=\"https://www.battleye.com/\" target=\"_blank\" rel=\"noopener noreferrer\">BattlEye Anti-Cheat</a> for how anti-cheat updates ship, then cross-check our <a href=\"/updates/\">BattlEye bypass maintenance guide</a> after major patches.",
								"Checkout includes instant digital delivery for Windows 10 and 11. After purchase, follow the <a href=\"/setup/\">Setup guide</a> and tune overlays before your first raid.",
							],
						},
						{
							h2: "ESP next steps — Aimbot, pricing, and support",
							paragraphs: [
								"ESP alone wins information wars; Aimbot covers the firefight. Review <a href=\"/tarkov-aimbot/\">Aimbot controls</a> if you want one license for visibility and assist.",
								"Compare monthly ($35) and lifetime ($150) on <a href=\"/pricing/\">Pricing</a>, then keep <a href=\"/support/\">Support</a> ready if activation needs a human reply.",
								"Still researching? The <a href=\"/tarkov-cheats/\">TarkovHack pillar</a> and <a href=\"/tarkov-cheats/\">2026 buyer guide</a> summarize the full stack.",
							],
						},
					],
					heroImage: "/images/tarkov-cheats-radar.webp",
				},
				"tarkov-aimbot": {
					title: "Tarkov Aimbot 2026 | Soft Aim for Windows PC",
					description: "Tarkov aimbot with soft aim tuning for Windows PC. FOV, bone priority, and hotkeys bundled with ESP boxes in our TarkovHack package.",
					h1: "Tarkov Aimbot — Soft Aim for Windows PC",
					intro: "Configurable Aimbot tools for Tarkov firefights. Smoothness, FOV, bone priority, and per-weapon profiles — bundled with ESP wallhack and radar in one undetected license.",
					imageAlt: "Tarkov aimbot and soft aim controls on Windows PC",
					galleryTitle: "Tarkov Aimbot combat previews",
					ctaPrimary: "Buy TarkovHack",
					ctaSecondary: "See ESP wallhack",
					ctaSecondaryHref: "/tarkov-esp/",
					sections: [
						{
							h2: "Aimbot tuned for Tarkov combat pace",
							paragraphs: [
								"Tarkov mixes long-range AR fights with close-quarters SMG pushes. TarkovHack Aimbot includes smoothness, FOV, and sensitivity controls tuned for that pace — with hotkey toggles mid-match.",
								"Bone priority and target selection options cover closest player, lowest health, or highest-threat targets during squad fights and close-range scav fights.",
								"Weapon balance and season rules change via <a href=\"https://www.escapefromtarkov.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Escape from Tarkov</a>. Revisit Aimbot FOV and smoothness after major combat patches so assist still matches the live TTK windows.",
							],
						},
						{
							h2: "Per-weapon Aimbot profiles",
							paragraphs: [
								"Save separate Aimbot profiles for ARs, SMGs, and bolt-actions. Switch between long-range DMR fights and dorms clears without reopening menus every raid.",
								"Prefer softer tracking? Read the <a href=\"/tarkov-aimbot/\">soft aim guide</a>.",
								"Aimbot ships alongside <a href=\"/tarkov-esp/\">ESP wallhack</a> and <a href=\"/tarkov-radar-hack/\">2D radar</a> in the same TarkovHack license.",
							],
							list: [
								"Smoothness, FOV, and sensitivity sliders",
								"Bone priority and threat-based targeting",
								"Hotkeys to toggle Aimbot mid-match",
								"Per-weapon profile slots for AR / SMG / bolt-action",
							],
						},
						{
							h2: "BattlEye maintenance for undetected Aimbot",
							paragraphs: [
								"TarkovHack rebuilds Aimbot behavior when BattlEye anti-cheat or major Tarkov patches land. Maintenance notes appear on the <a href=\"/updates/\">Updates page</a> so you know when a new build is live.",
								"Cross-check service health on <a href=\"https://www.escapefromtarkov.com/support\" target=\"_blank\" rel=\"noopener noreferrer\">Escape from Tarkov Support</a> and anti-cheat context on <a href=\"https://www.battleye.com/\" target=\"_blank\" rel=\"noopener noreferrer\">BattlEye Anti-Cheat</a>, then follow our <a href=\"/updates/\">BattlEye maintenance guide</a> before queueing on patch day.",
								"Responsible settings matter — undetected status requires ongoing maintenance, not set-and-forget configs. Start with conservative smoothness, then tune.",
							],
						},
						{
							h2: "Buy Aimbot with ESP — pricing and setup",
							paragraphs: [
								"Every plan includes Aimbot plus ESP and radar. Compare options on <a href=\"/pricing/\">Pricing</a>, then activate with the <a href=\"/setup/\">Setup guide</a>.",
								"Questions about delivery or profiles? Use <a href=\"/faq/\">FAQ</a> or email <a href=\"/support/\">Support</a> with your order ID.",
								"Want the full control list first? Open <a href=\"/features/\">Features</a> before checkout.",
							],
						},
					],
					heroImage: "/images/tarkov-cheats-aimbot.webp",
				},
				features: {
					title: "TarkovHack Features | ESP, Soft Aim & Radar",
					description: "Full TarkovHack feature list: ESP boxes, soft aim, radar, and toggles for Windows PC. Review controls before checkout.",
					h1: "TarkovHack Features — Full Control List",
					intro: "Every ESP wallhack, radar hack, and Aimbot control included in the TarkovHack package for Tarkov on Windows PC — with BattlEye maintenance after major patches.",
					imageAlt: "TarkovHack features — ESP, soft aim, and radar screenshots",
					galleryTitle: "TarkovHack feature gallery",
					ctaPrimary: "Buy TarkovHack",
					ctaSecondary: "View pricing",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "ESP wallhack and visibility features",
							paragraphs: [
								"Enemy player ESP wallhack, boss and extract awareness cues, loot and container markers, distance readouts, snaplines, and toggleable ESP categories for raid-critical overlays only.",
								"Team and enemy colour coding supports PMC raids and scav-runs. Deep-dive the <a href=\"/tarkov-esp/\">ESP page</a> and <a href=\"/tarkov-esp/\">wallhack guide</a> for category-level detail.",
								"Map and loot systems evolve with <a href=\"https://www.escapefromtarkov.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Escape from Tarkov</a> wipe and map updates — toggleable ESP categories keep overlays useful when POIs rotate.",
							],
						},
						{
							h2: "Radar hack and Aimbot controls",
							paragraphs: [
								"2D radar overlay with directional threat cues, configurable range for rotations and late-raid extracts, plus Aimbot smoothness, FOV, bone priority, hotkeys, and per-weapon profiles.",
								"All tools share in-client toggles so you can adjust ESP, radar, and Aimbot during live Tarkov sessions. See <a href=\"/tarkov-radar-hack/\">radar</a> and <a href=\"/tarkov-aimbot/\">Aimbot</a> for settings walkthroughs.",
								"Prefer a menu-first workflow? The <a href=\"/tarkov-cheats/\">mod menu page</a> explains mid-match toggles without alt-tabbing.",
							],
						},
						{
							h2: "Licensing, delivery, and BattlEye maintenance",
							paragraphs: [
								"Monthly ($35) and lifetime ($150) licenses with instant digital delivery. BattlEye maintenance rebuilds publish on the <a href=\"/updates/\">Updates page</a> after anti-cheat or game patches.",
								"Monitor <a href=\"https://www.escapefromtarkov.com/support\" target=\"_blank\" rel=\"noopener noreferrer\">Escape from Tarkov Support</a> on patch days, then confirm rebuild notes before you queue. Setup and billing help lives on <a href=\"/support/\">Support</a> and support@tarkovhack.com.",
								"Next step: compare plans on <a href=\"/pricing/\">Pricing</a> or read <a href=\"/tarkov-cheats/\">how undetected maintenance works</a>.",
							],
						},
					],
					heroImage: "/images/tarkov-cheats-aimbot-view.webp",
				},
				pricing: {
					title: "TarkovHack Pricing | $35/mo or $150 Life",
					description: "TarkovHack pricing: $35/month or $150 lifetime for ESP, soft aim, and radar on Windows PC. Instant delivery — pick a plan.",
					h1: "TarkovHack Pricing — Monthly & Lifetime",
					intro: "Choose monthly or lifetime access to undetected TarkovHack — ESP wallhack, radar hack, and Aimbot for Tarkov on Windows PC. Instant digital delivery after payment.",
					imageAlt: "TarkovHack store plans for monthly and lifetime licenses",
					galleryTitle: "TarkovHack package visuals",
					ctaPrimary: "Buy TarkovHack",
					ctaSecondary: "Read setup guide",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Monthly and lifetime TarkovHack plans",
							paragraphs: [
								"Monthly license: $35 USD for 30 days of full ESP wallhack, radar hack, and Aimbot access with BattlEye maintenance included during your term.",
								"Lifetime license: $150 USD for long-term access to the same undetected TarkovHack package — ideal if you play Tarkov regularly across seasons.",
								"Both plans unlock the same feature stack described on <a href=\"/features/\">Features</a>. Choose monthly to test, or lifetime if you already know you want the full toolkit.",
							],
						},
						{
							h2: "What every plan includes",
							paragraphs: [
								"Player ESP wallhack, loot markers, 2D radar overlays, Aimbot controls, in-client toggles, and maintenance rebuilds after BattlEye anti-cheat or major Tarkov patches.",
								"Season calendars and client updates come from <a href=\"https://www.escapefromtarkov.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Escape from Tarkov</a>. Active licenses receive rebuild access when we publish maintenance on <a href=\"/updates/\">Updates</a>.",
								"Digital delivery starts after payment confirmation. Keep your order reference for <a href=\"/support/\">Support</a> requests and follow <a href=\"/setup/\">Setup</a> for first launch.",
							],
						},
						{
							h2: "Refund, billing, and buying checklist",
							paragraphs: [
								"Review the <a href=\"/refund-policy/\">Refund Policy</a> before purchase. For billing or delivery issues, contact Support with your order details.",
								"Prices are listed in USD. Availability is worldwide for Windows 10 and 11 PCs.",
								"Still comparing tools? Read <a href=\"/tarkov-cheats/\">TarkovHack</a>, <a href=\"/tarkov-cheats/\">undetected status</a>, and <a href=\"/faq/\">FAQ</a> before you checkout.",
							],
						},
					],
					heroImage: "/images/tarkov-cheats-raid.webp",
				},
				setup: {
					title: "TarkovHack Setup | Windows PC Guide",
					description: "Set up TarkovHack on Windows PC — activate ESP boxes, soft aim profiles, and . Check BattlEye updates before your first queue.",
					h1: "TarkovHack Setup — Windows PC Guide",
					intro: "Install and configure TarkovHack for Tarkov on Windows 10 or 11. Activate your license, load ESP wallhack and Aimbot profiles, and verify BattlEye maintenance status before queueing.",
					imageAlt: "TarkovHack setup guide screenshot for Windows PC",
					galleryTitle: "TarkovHack setup visuals",
					ctaPrimary: "Buy TarkovHack",
					ctaSecondary: "Contact support",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Before you install TarkovHack",
							paragraphs: [
								"Confirm your order email and license details. Check the <a href=\"/updates/\">Updates page</a> for the latest BattlEye maintenance build before launching Tarkov.",
								"Also glance at <a href=\"https://www.escapefromtarkov.com/support\" target=\"_blank\" rel=\"noopener noreferrer\">Escape from Tarkov Support</a> if Battlestate Games services look unstable on patch day — a platform outage is not a license fault.",
								"TarkovHack requires Windows 10 or 11. Close conflicting overlay software that may interfere with ESP wallhack or Aimbot toggles.",
							],
						},
						{
							h2: "Activate ESP wallhack and Aimbot profiles",
							paragraphs: [
								"Follow the delivery instructions in your license email. Load default ESP wallhack categories for PMCs, Scavs, and loot — then tune radar range and Aimbot smoothness to your playstyle.",
								"Use in-client hotkeys to toggle ESP, radar, and Aimbot mid-match. Details for BattlEye module live on <a href=\"/tarkov-esp/\">ESP</a>, <a href=\"/tarkov-aimbot/\">Aimbot</a>, and <a href=\"/tarkov-cheats/\">mod menu</a>.",
								"Prefer a soft tracking feel? Start with the <a href=\"/tarkov-aimbot/\">soft aim</a> recommendations before raising aggressiveness.",
							],
						},
						{
							h2: "After Tarkov or BattlEye anti-cheat patches",
							paragraphs: [
								"When Battlestate Games ships a major Tarkov update or BattlEye anti-cheat patch, revisit Updates before queueing. Download maintenance rebuilds when posted.",
								"Official anti-cheat background: <a href=\"https://www.battleye.com/\" target=\"_blank\" rel=\"noopener noreferrer\">BattlEye Anti-Cheat</a>. Our practical workflow is documented on the <a href=\"/updates/\">BattlEye bypass page</a> and <a href=\"/tarkov-cheats/\">undetected guide</a>.",
								"Contact <a href=\"/support/\">Support</a> with your order ID if activation fails after a patch — include Windows version and error details for faster replies.",
							],
						},
					],
					heroImage: "/images/tarkov-cheats-radar.webp",
				},
				updates: {
					title: "TarkovHack Updates | BattlEye Maintenance Log",
					description: "TarkovHack update log: BattlEye rebuilds for ESP boxes, soft aim, and radar on Windows PC. Check status before queueing after patches.",
					h1: "TarkovHack Updates — Maintenance Log",
					intro: "Track BattlEye maintenance and Tarkov patch rebuilds for the undetected ESP wallhack, radar hack, and Aimbot package. Check here before queueing after major updates.",
					imageAlt: "TarkovHack live status after BattlEye and game patches",
					galleryTitle: "Tarkov patch and maintenance visuals",
					ctaPrimary: "Buy TarkovHack",
					ctaSecondary: "Undetected status guide",
					ctaSecondaryHref: "/tarkov-cheats/",
					sections: [
						{
							h2: "Why the Updates page matters",
							paragraphs: [
								"Tarkov and BattlEye anti-cheat receive frequent patches. TarkovHack publishes maintenance notes when ESP wallhack, radar, or Aimbot behavior needs a rebuild.",
								"Use <a href=\"https://www.escapefromtarkov.com/support\" target=\"_blank\" rel=\"noopener noreferrer\">Escape from Tarkov Support</a> for Battlestate Games platform health and this page for TarkovHack build status — both matter on big update days.",
								"Checking this log before you queue reduces surprises after game days or seasonal launches on raid and scav-run.",
							],
						},
						{
							h2: "What maintenance entries cover",
							paragraphs: [
								"Entries note BattlEye anti-cheat compatibility status, rebuilt ESP wallhack overlays, radar range fixes, Aimbot tuning after weapon balance changes, and digital delivery of new builds to active licenses.",
								"Lifetime and monthly subscribers receive rebuild access during active license terms. See <a href=\"/pricing/\">Pricing</a> if you need to renew.",
								"For context on why rebuilds happen, read the <a href=\"/updates/\">BattlEye bypass guide</a> and <a href=\"/tarkov-cheats/\">undetected TarkovHack</a> explainer.",
							],
						},
						{
							h2: "Staying undetected after patches",
							paragraphs: [
								"No cheat guarantees permanent undetected status. Combine maintenance updates with responsible in-game settings and patch awareness.",
								"Follow season notes from <a href=\"https://www.escapefromtarkov.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Escape from Tarkov</a>, then confirm our rebuild is live before you queue.",
								"For urgent status questions after a BattlEye update, contact <a href=\"/support/\">Support</a> with your license tier and last played build version.",
							],
						},
					],
					heroImage: "/images/tarkov-cheats-esp.webp",
				},
				faq: {
					title: "TarkovHack FAQ | ESP, Soft Aim & Radar Answers",
					description: "TarkovHack FAQ: ESP boxes, soft aim, BattlEye maintenance, and pricing for PC. Clear answers before you buy.",
					h1: "TarkovHack FAQ — Common Questions",
					intro: "Answers about undetected TarkovHack — ESP wallhack, radar hack, Aimbot, BattlEye maintenance, checkout, and Tarkov compatibility on Windows PC.",
					imageAlt: "TarkovHack FAQ — delivery, setup, and update answers",
					galleryTitle: "TarkovHack FAQ visuals",
					ctaPrimary: "Buy TarkovHack",
					ctaSecondary: "Contact support",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "What is TarkovHack?",
							paragraphs: [
								"TarkovHack is an undetected cheat package for Tarkov on Windows PC. It includes ESP wallhack, 2D radar-style awareness, and Aimbot controls with BattlEye maintenance updates.",
								"Packages cover raid and scav-run. Explore <a href=\"/features/\">Features</a> for the full control list and <a href=\"/tarkov-esp/\">ESP</a> / <a href=\"/tarkov-aimbot/\">Aimbot</a> for module detail.",
								"Tarkov itself is published by Battlestate Games (<a href=\"https://www.escapefromtarkov.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Escape from Tarkov</a>). Cheats are third-party tools and may violate Battlestate Games' rules — use is at your own risk.",
							],
						},
						{
							h2: "Are TarkovHack undetected in 2026?",
							paragraphs: [
								"TarkovHack is maintained with rebuilds after BattlEye anti-cheat and game patches. Check the <a href=\"/updates/\">Updates page</a> for current status — no cheat can guarantee permanent undetected operation.",
								"Read <a href=\"/tarkov-cheats/\">undetected TarkovHack</a> and the <a href=\"/updates/\">BattlEye guide</a> for the maintenance workflow.",
								"Responsible settings and reading maintenance notes before queueing are essential.",
							],
						},
						{
							h2: "Delivery, pricing, and support",
							paragraphs: [
								"Licenses deliver digitally after payment confirmation. Monthly is $35; lifetime is $150 USD — see <a href=\"/pricing/\">Pricing</a>.",
								"Contact support@tarkovhack.com or the <a href=\"/support/\">Support page</a> with order details for setup or billing help. First launch steps are on <a href=\"/setup/\">Setup</a>.",
								"Refund eligibility is covered in the <a href=\"/refund-policy/\">Refund Policy</a>.",
							],
						},
					],
					heroImage: "/images/tarkov-cheats-aimbot-view.webp",
				},
				support: {
					title: "TarkovHack Support | Help & Contact",
					description: "Contact TarkovHack support for licenses, ESP setup, soft aim profiles, and on Windows PC. Include your order ID for faster help.",
					h1: "TarkovHack Support — Contact Us",
					intro: "Get help with TarkovHack licenses, checkout, ESP wallhack setup, Aimbot profiles, and BattlEye maintenance for Tarkov on Windows PC.",
					imageAlt: "TarkovHack support page for license and setup help",
					galleryTitle: "TarkovHack support resources",
					ctaPrimary: "Email support",
					ctaSecondary: "Read setup guide",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "When to contact support",
							paragraphs: [
								"Reach out for order issues, license activation failures, ESP wallhack or Aimbot setup questions, and post-patch problems after BattlEye maintenance rebuilds.",
								"Include your order ID, license tier (monthly or lifetime), Windows version, and a clear description of the issue.",
								"Many answers already live in <a href=\"/faq/\">FAQ</a>, <a href=\"/setup/\">Setup</a>, and <a href=\"/updates/\">Updates</a> — check those first for faster resolution.",
							],
						},
						{
							h2: "Response times and scope",
							paragraphs: [
								"Support requests are reviewed daily. TarkovHack support covers delivery, billing, setup, and maintenance — not in-game coaching or account recovery for Battlestate Games bans.",
								"Account and game policy questions belong with Battlestate Games. We can help with license delivery and product configuration only.",
								"Check the Updates page and FAQ before opening a ticket — many post-patch questions are answered there.",
							],
						},
						{
							h2: "Self-service resources",
							paragraphs: [
								"Setup guide, Features list, Updates log, Refund Policy, and Terms of Use are linked from the footer. BattlEye bypass notes live on the dedicated <a href=\"/updates/\">BattlEye anti-cheat page</a>.",
								"Email: support@tarkovhack.com",
								"Ready to purchase or renew? Open <a href=\"/pricing/\">Pricing</a>. Need feature detail first? See <a href=\"/features/\">Features</a>.",
							],
						},
					],
					heroImage: "/images/tarkov-cheats-raid.webp",
				},
				undetected: {
					title: "Undetected TarkovHack 2026 | BattlEye Maintenance",
					description: "Undetected TarkovHack with BattlEye maintenance for ESP boxes, soft aim, and radar on Windows PC. Check status before you queue.",
					h1: "Undetected TarkovHack — BattlEye Maintenance",
					intro: "How TarkovHack stays maintained for Tarkov after BattlEye anti-cheat patches — ESP wallhack, radar hack, and Aimbot rebuilds for Windows PC.",
					imageAlt: "TarkovHack undetected status overview for Windows PC",
					galleryTitle: "Undetected TarkovHack visuals",
					ctaPrimary: "Buy TarkovHack",
					ctaSecondary: "BattlEye bypass guide",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "What undetected means for TarkovHack",
							paragraphs: [
								"Undetected TarkovHack means the package is actively maintained against BattlEye anti-cheat and major Tarkov patches — not that detection is impossible forever.",
								"Rebuilds target ESP wallhack overlays, radar behavior, and Aimbot signatures after BattlEye security updates.",
								"Anti-cheat technology is documented by <a href=\"https://www.battleye.com/\" target=\"_blank\" rel=\"noopener noreferrer\">BattlEye Anti-Cheat</a>; Tarkov client updates ship through <a href=\"https://www.escapefromtarkov.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Escape from Tarkov</a>. Undetected status is an ongoing process tied to those releases.",
							],
						},
						{
							h2: "BattlEye maintenance workflow",
							paragraphs: [
								"When BattlEye anti-cheat or Tarkov updates ship, the team assesses ESP, radar, and Aimbot modules, publishes status on the <a href=\"/updates/\">Updates page</a>, and delivers rebuilt builds to active licenses.",
								"On patch mornings, also check <a href=\"https://www.escapefromtarkov.com/support\" target=\"_blank\" rel=\"noopener noreferrer\">Escape from Tarkov Support</a> for launcher outages that can look like product failures.",
								"Deep technical workflow: <a href=\"/updates/\">BattlEye bypass Tarkov guide</a>. Feature stack: <a href=\"/features/\">Features</a>.",
							],
						},
						{
							h2: "Responsible use and next steps",
							paragraphs: [
								"Combine maintenance with conservative in-game settings. Read the <a href=\"/faq/\">FAQ</a> and Updates log regularly — undetected status is not a one-time promise.",
								"Lifetime and monthly plans include rebuild access during active terms — see <a href=\"/pricing/\">Pricing</a>.",
								"New buyers should also read <a href=\"/tarkov-cheats/\">TarkovHack 2026</a> and complete <a href=\"/setup/\">Setup</a> after delivery.",
							],
						},
					],
					heroImage: "/images/tarkov-cheats-wallhack.webp",
				},
				wallhack: {
					title: "Tarkov Wallhack 2026 | ESP Boxes & Visibility",
					description: "Tarkov wallhack ESP with player boxes and loot markers for Windows PC. Undetected TarkovHack — learn overlays and buy.",
					h1: "Tarkov Wallhack — ESP Boxes & Visibility",
					intro: "Tarkov wallhack ESP for Tarkov — see players, loot, bosses, and containers through toggleable wallhack overlays built for PMC raids and scav-runs.",
					imageAlt: "Tarkov wallhack visibility through walls in a raid",
					galleryTitle: "Tarkov wallhack ESP gallery",
					ctaPrimary: "Buy TarkovHack",
					ctaSecondary: "Tarkov ESP page",
					ctaSecondaryHref: "/tarkov-esp/",
					sections: [
						{
							h2: "Wallhack ESP vs raw aim tools",
							paragraphs: [
								"A Tarkov wallhack focuses on information — player outlines, loot pins, boss threat cues — rather than automatic aiming. TarkovHack bundles wallhack ESP with radar and optional Aimbot in one license.",
								"Toggle categories so only the wallhack overlays you need stay active during rotations and extract holds.",
								"For the broader ESP keyword page see <a href=\"/tarkov-esp/\">Tarkov ESP</a>; for combat assist see <a href=\"/tarkov-aimbot/\">Aimbot</a>.",
							],
						},
						{
							h2: "Map coverage for wallhack ESP",
							paragraphs: [
								"Wallhack overlays support raid, scav-run, and competitive lobbies with distance readouts and snaplines for engagement control.",
								"Season maps and POI changes are announced via <a href=\"https://www.escapefromtarkov.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Escape from Tarkov</a>. Wallhack remains useful because it tracks entities, not fixed landmarks alone.",
								"Pair wallhack awareness with <a href=\"/tarkov-radar-hack/\">radar hack</a> cues for flanks during building and rooftop fights.",
							],
						},
						{
							h2: "Undetected wallhack maintenance",
							paragraphs: [
								"ESP wallhack modules rebuild after BattlEye anti-cheat patches. Follow the <a href=\"/updates/\">Updates page</a> and complete checkout for instant license delivery on Windows PC.",
								"Learn the full maintenance story on <a href=\"/tarkov-cheats/\">undetected TarkovHack</a> and <a href=\"/updates/\">BattlEye bypass</a>.",
								"Ready to buy? Compare <a href=\"/pricing/\">Pricing</a> or continue to the <a href=\"/tarkov-esp/\">ESP hack</a> landing for alternate search wording.",
							],
						},
					],
					heroImage: "/images/tarkov-cheats-wallhack.webp",
				},
				radar: {
					title: "Tarkov Radar Hack 2026 | 2D Threat Overlay",
					description: "Tarkov radar hack for flank awareness on Windows PC. Bundled with ESP boxes, soft aim, and radar in our TarkovHack package.",
					h1: "Tarkov Radar Hack — 2D Threat Awareness",
					intro: "2D radar-style overlay for Tarkov — directional threat cues for nearby players outside your line of sight, bundled with ESP wallhack and Aimbot.",
					imageAlt: "Tarkov 2D radar overlay showing nearby threats",
					galleryTitle: "Tarkov radar hack visuals",
					ctaPrimary: "Buy TarkovHack",
					ctaSecondary: "See ESP wallhack",
					ctaSecondaryHref: "/tarkov-esp/",
					sections: [
						{
							h2: "Why radar hack matters in Tarkov",
							paragraphs: [
								"raids fights happen in three dimensions — rooftops, windows, and flanks. A 2D radar overlay shows nearby player threats outside direct line of sight so you can reposition before a third party.",
								"TarkovHack radar complements <a href=\"/tarkov-esp/\">ESP wallhack</a> markers during squad pushes and extract camp fights.",
								"Mode rules and seasonal changes come from <a href=\"https://www.escapefromtarkov.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Escape from Tarkov</a>. Radar range remains configurable when map scale or mobility meta shifts.",
							],
						},
						{
							h2: "Configurable radar range",
							paragraphs: [
								"Adjust radar range for early rotations versus tight extract holds. Directional cues highlight flanks during building clears and flank pushes across raid and scav-run.",
								"Toggle radar alongside ESP and Aimbot with in-client hotkeys during live matches — see the <a href=\"/tarkov-cheats/\">mod menu</a> page.",
								"Combat follow-up lives on <a href=\"/tarkov-aimbot/\">Aimbot</a> when you convert radar info into a fight.",
							],
						},
						{
							h2: "Maintenance and licensing",
							paragraphs: [
								"Radar hack modules receive BattlEye maintenance rebuilds with the full TarkovHack package. Monthly and lifetime licenses include digital delivery — see <a href=\"/pricing/\">Pricing</a>.",
								"Check <a href=\"/updates/\">Updates</a> after major Tarkov patches before relying on previous radar configs.",
								"New to the stack? Start at <a href=\"/features/\">Features</a> or <a href=\"/tarkov-cheats/\">undetected status</a>.",
							],
						},
					],
					heroImage: "/images/tarkov-cheats-radar.webp",
				},
				battleye: {
					title: "BattlEye Bypass Tarkov | TarkovHack Maintenance",
					description: "How TarkovHack rebuild after BattlEye patches — ESP boxes, soft aim, and radar maintenance for Windows PC. Read before queueing.",
					h1: "BattlEye Bypass — TarkovHack Maintenance",
					intro: "Understand BattlEye anti-cheat maintenance for TarkovHack — how ESP wallhack, radar hack, and Aimbot rebuild after Tarkov security updates.",
					imageAlt: "TarkovHack maintenance after a BattlEye patch",
					galleryTitle: "BattlEye maintenance visuals",
					ctaPrimary: "Buy TarkovHack",
					ctaSecondary: "Check updates",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "BattlEye anti-cheat overview",
							paragraphs: [
								"BattlEye anti-cheat is Battlestate Games' anti-cheat for Tarkov on PC (see <a href=\"https://www.battleye.com/\" target=\"_blank\" rel=\"noopener noreferrer\">BattlEye Anti-Cheat</a>). Security updates can affect ESP wallhack, radar, and Aimbot behavior — requiring maintenance rebuilds for undetected packages.",
								"TarkovHack monitors BattlEye patch notes and Tarkov seasonal updates from <a href=\"https://www.escapefromtarkov.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Escape from Tarkov</a> to schedule module reviews.",
								"“BattlEye bypass” in our wording means timely maintenance — not a permanent free pass around anti-cheat.",
							],
						},
						{
							h2: "What happens after a BattlEye patch",
							paragraphs: [
								"The team tests ESP overlays, radar signatures, and Aimbot profiles against the new build, publishes status on <a href=\"/updates/\">Updates</a>, and ships rebuilt packages to active licenses.",
								"Confirm Battlestate Games service health on <a href=\"https://www.escapefromtarkov.com/support\" target=\"_blank\" rel=\"noopener noreferrer\">Escape from Tarkov Support</a> if the launcher or matchmaking fails during the same window.",
								"Avoid queueing on old builds after major patch days until maintenance notes confirm a new release. Related reading: <a href=\"/tarkov-cheats/\">undetected TarkovHack</a>.",
							],
						},
						{
							h2: "No permanent bypass guarantee",
							paragraphs: [
								"BattlEye bypass in practice means timely maintenance. Read the undetected guide, <a href=\"/faq/\">FAQ</a>, and Updates log before every session.",
								"Contact <a href=\"/support/\">Support</a> if activation fails immediately after a posted rebuild.",
								"Buying for the first time? Compare <a href=\"/pricing/\">Pricing</a> and finish <a href=\"/setup/\">Setup</a> only after Updates shows a live build.",
							],
						},
					],
					heroImage: "/images/tarkov-cheats-aimbot.webp",
				},
				"cheats-2026": {
					title: "TarkovHack 2026 | ESP Soft Aim & Radar",
					description: "Best TarkovHack 2026: ESP boxes, soft aim, and radar for Windows PC. Undetected TarkovHack with BattlEye maintenance — compare and buy.",
					h1: "TarkovHack 2026 — ESP, Soft Aim & Radar",
					intro: "The 2026 TarkovHack package for Tarkov — undetected ESP wallhack, radar hack, and Aimbot with BattlEye maintenance, instant delivery, and Windows PC support.",
					imageAlt: "TarkovHack product overview for Escape from Tarkov",
					galleryTitle: "TarkovHack 2026 gallery",
					ctaPrimary: "Buy TarkovHack",
					ctaSecondary: "Compare features",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Why TarkovHack buyers choose TarkovHack in 2026",
							paragraphs: [
								"2026 seasons bring new maps, weapons, and BattlEye anti-cheat updates. TarkovHack bundles ESP wallhack, radar hack, and Aimbot with active maintenance — not a stale prior-year build.",
								"Track official season messaging on <a href=\"https://www.escapefromtarkov.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Escape from Tarkov</a>, then use our <a href=\"/updates/\">Updates log</a> for product rebuild timing.",
								"Monthly ($35) and lifetime ($150) plans cover raid and scav-run loops — see <a href=\"/pricing/\">Pricing</a>.",
							],
						},
						{
							h2: "Full feature stack for 2026 buyers",
							paragraphs: [
								"Player ESP wallhack, loot markers, 2D radar overlays, Aimbot profiles, in-client toggles, and post-patch rebuilds — one license instead of stacking separate tools.",
								"Deep links: <a href=\"/tarkov-cheats/\">TarkovHack pillar</a>, <a href=\"/tarkov-esp/\">ESP</a>, <a href=\"/tarkov-aimbot/\">Aimbot</a>, <a href=\"/tarkov-esp/\">wallhack</a>, <a href=\"/tarkov-radar-hack/\">radar</a>, <a href=\"/tarkov-cheats/\">undetected</a>.",
								"Instant digital delivery after checkout confirmation worldwide.",
							],
						},
						{
							h2: "Before you buy in 2026",
							paragraphs: [
								"Read the <a href=\"/tarkov-cheats/\">TarkovHack</a> pillar, Features, Pricing, Setup, and Updates pages. Check undetected status notes after every major patch — responsible use and maintenance awareness matter.",
								"Also compare the <a href=\"/tarkov-cheats/\">TarkovHack</a> checklist, <a href=\"/blog/tarkov-cheats-2026-whats-new/\">2026 blog guide</a>, and <a href=\"/faq/\">FAQ</a>.",
								"Support is available at support@tarkovhack.com via the <a href=\"/support/\">Support page</a>.",
							],
						},
					],
					heroImage: "/images/tarkov-cheats-esp.webp",
				},
				hacks: {
					title: "TarkovHack 2026 | Undetected ESP Aimbot Guide",
					description: "TarkovHack for Windows PC: undetected ESP wallhack, radar hack, and Aimbot with BattlEye maintenance. Compare TarkovHack options and buy the full package.",
					h1: "TarkovHack — Undetected ESP, Aimbot & Wallhack",
					intro: "TarkovHack for raid and scav-run combine ESP wallhack visibility, 2D radar-style threat cues, and Aimbot controls in one undetected Windows PC license — maintained after BattlEye anti-cheat patches. This is the pillar guide for TarkovHack in 2026.",
					imageAlt: "TarkovHack product page — ESP, aimbot, and radar",
					galleryTitle: "TarkovHack gallery — ESP, Aimbot, wallhack",
					ctaPrimary: "Buy TarkovHack",
					ctaSecondary: "See undetected guide",
					ctaSecondaryHref: "/tarkov-cheats/",
					sections: [
						{
							h2: "What TarkovHack include in 2026",
							paragraphs: [
								"Players searching for TarkovHack usually want visibility and combat tools without stacking separate downloads. TarkovHack bundles player ESP wallhack, loot markers, 2D radar overlays, and configurable Aimbot in one maintained package — the same toolkit often called TarkovHack.",
								"Coverage spans raid and scav-run with in-client toggles for live matches. Monthly ($35) and lifetime ($150) licenses unlock the full stack.",
								"Official game updates come from <a href=\"https://www.escapefromtarkov.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Escape from Tarkov</a>; our hacks package tracks those releases via the <a href=\"/updates/\">Updates page</a>. Cross-check platform health on <a href=\"https://www.escapefromtarkov.com/support\" target=\"_blank\" rel=\"noopener noreferrer\">Escape from Tarkov Support</a> before patch-day queues.",
							],
						},
						{
							h2: "How this TarkovHack pillar fits nearby pages",
							paragraphs: [
								"Use this pillar for the core product overview. For year-specific buying notes, see the <a href=\"/tarkov-cheats/\">TarkovHack 2026</a> and <a href=\"/tarkov-cheats/\">TarkovHack</a> pages cover buyer comparisons in cheats wording.",
								"Deep-dive modules: <a href=\"/tarkov-esp/\">Tarkov ESP</a>, <a href=\"/tarkov-aimbot/\">Tarkov Aimbot</a>, <a href=\"/tarkov-esp/\">wallhack</a>, <a href=\"/tarkov-radar-hack/\">radar hack</a>, and <a href=\"/tarkov-aimbot/\">soft aim</a>.",
								"Blog guides expand BattlEye keyword: <a href=\"/blog/tarkov-cheats-complete-guide-2026/\">hacks complete guide</a>, <a href=\"/blog/escape-from-tarkov-cheats-buyers-guide/\">cheats buyers guide</a>, and <a href=\"/blog/undetected-tarkov-cheats-battleye/\">undetected BattlEye notes</a>.",
							],
						},
						{
							h2: "TarkovHack vs single-feature tools",
							paragraphs: [
								"Standalone hacks often cover only wallhack or only aim assist. TarkovHack maps the full raid loop: read enemy squads, track bosses and containers, spot flanks on radar, and tune Aimbot per weapon class.",
								"Compare the <a href=\"/tarkov-esp/\">ESP</a>, <a href=\"/tarkov-aimbot/\">Aimbot</a>, and <a href=\"/features/\">Features</a> pages — or review <a href=\"/pricing/\">Pricing</a> for monthly and lifetime licenses.",
								"Related landings: <a href=\"/setup/\">cheat download</a>, <a href=\"/tarkov-cheats/\">mod menu</a>, <a href=\"/tarkov-aimbot/\">aimbot</a>, <a href=\"/tarkov-esp/\">ESP</a>.",
							],
						},
						{
							h2: "Undetected TarkovHack with BattlEye maintenance",
							paragraphs: [
								"Undetected TarkovHack require rebuilds after BattlEye anti-cheat and major Tarkov patches. Check Updates before queueing — maintenance notes confirm when a new build is live. No package can promise permanent undetected status.",
								"See <a href=\"https://www.battleye.com/\" target=\"_blank\" rel=\"noopener noreferrer\">BattlEye Anti-Cheat</a> for anti-cheat background and our <a href=\"/updates/\">BattlEye bypass guide</a> for the practical workflow. Pair with <a href=\"/tarkov-cheats/\">undetected TarkovHack</a> for status language buyers expect.",
								"Digital delivery runs after checkout for Windows 10 and 11 PCs worldwide. After purchase, follow <a href=\"/setup/\">Setup</a> and keep <a href=\"/support/\">Support</a> ready with your order ID.",
							],
						},
					],
					heroImage: "/images/tarkov-cheats-raid.webp",
				},
				"cheat-download": {
					title: "Tarkov Hack Download 2026 | Instant Access",
					description: "Tarkov cheat download with instant license delivery — ESP boxes, soft aim, and radar for Windows PC. Buy, activate, and play.",
					h1: "Tarkov Hack Download — Instant License Delivery",
					intro: "How Tarkov cheat download works for Tarkov — digital license delivery after payment confirmation, with ESP wallhack, radar hack, and Aimbot access on Windows PC.",
					imageAlt: "TarkovHack download and install delivery flow",
					galleryTitle: "Tarkov cheat download visuals",
					ctaPrimary: "Buy TarkovHack",
					ctaSecondary: "Setup guide",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "How Tarkov cheat download delivery works",
							paragraphs: [
								"After checkout confirms payment, TarkovHack license details arrive digitally by email. No physical shipment — access begins once activation instructions are delivered.",
								"Keep your order confirmation and license email ready for the <a href=\"/setup/\">Setup guide</a> and Support requests.",
								"If Battlestate Games services are down, check <a href=\"https://www.escapefromtarkov.com/support\" target=\"_blank\" rel=\"noopener noreferrer\">Escape from Tarkov Support</a> before assuming a download failure.",
							],
						},
						{
							h2: "What your download unlocks",
							paragraphs: [
								"Every Tarkov cheat download includes player ESP wallhack, loot and container markers, 2D radar overlays, Aimbot profiles, and in-client toggles for PMC raids and scav-runs.",
								"Monthly ($35) and lifetime ($150) plans share the same feature stack — compare options on the <a href=\"/pricing/\">Pricing page</a>.",
								"Feature detail: <a href=\"/features/\">Features</a>. Module pages: <a href=\"/tarkov-esp/\">ESP</a>, <a href=\"/tarkov-aimbot/\">Aimbot</a>.",
							],
						},
						{
							h2: "After purchase — setup and updates",
							paragraphs: [
								"Follow Setup to activate ESP wallhack and Aimbot on Windows 10 or 11. When Tarkov or BattlEye anti-cheat patches ship, check the <a href=\"/updates/\">Updates page</a> for maintenance rebuilds.",
								"Contact <a href=\"/support/\">Support</a> with your order ID if delivery or activation fails within 24 hours of purchase.",
								"Also read <a href=\"/tarkov-cheats/\">undetected status</a> so you know what “download ready” means after a patch.",
							],
						},
					],
					heroImage: "/images/tarkov-cheats-raid.webp",
				},
				"mod-menu": {
					title: "Tarkov Mod Menu 2026 | ESP & Soft Aim Toggles",
					description: "Tarkov mod menu for in-match toggles — ESP boxes, soft aim, radar, and on Windows PC. Undetected TarkovHack package.",
					h1: "Tarkov Mod Menu — In-Client Control Panel",
					intro: "Tarkov mod menu controls for Tarkov — toggle ESP wallhack categories, radar range, and Aimbot profiles mid-match without leaving your Tarkov session on Windows PC.",
					imageAlt: "TarkovHack in-game menu controls",
					galleryTitle: "Tarkov mod menu gallery",
					ctaPrimary: "Buy TarkovHack",
					ctaSecondary: "Full feature list",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "What a Tarkov mod menu controls",
							paragraphs: [
								"A Tarkov mod menu is the in-client panel where you enable ESP wallhack overlays, adjust radar range, and switch Aimbot profiles during live matches. TarkovHack keeps those toggles accessible with hotkeys.",
								"Toggle player outlines, loot markers, vehicle cues, and per-weapon Aimbot settings without alt-tabbing out of Tarkov.",
								"Control deep-dives: <a href=\"/tarkov-esp/\">ESP</a>, <a href=\"/tarkov-aimbot/\">Aimbot</a>, <a href=\"/tarkov-radar-hack/\">radar</a>.",
							],
						},
						{
							h2: "Mod menu categories for PMC raids and scav-runs",
							paragraphs: [
								"Separate ESP wallhack categories for players, loot, containers, and bosses let you reduce overlay noise during rotations and extract holds.",
								"Radar hack range and Aimbot smoothness adjust from the same mod menu — useful when ${EXT.tarkov} seasons change fight distances and mobility.",
								"Soft tracking players should start with <a href=\"/tarkov-aimbot/\">soft aim</a> profiles before aggressive FOV.",
							],
						},
						{
							h2: "Maintained mod menu after BattlEye patches",
							paragraphs: [
								"Tarkov mod menu behavior is rebuilt when BattlEye anti-cheat or major Tarkov updates land. Follow the <a href=\"/updates/\">Updates page</a> and <a href=\"/updates/\">BattlEye bypass guide</a> before queueing on patch days.",
								"Checkout with instant digital delivery for monthly and lifetime licenses — see <a href=\"/pricing/\">Pricing</a>.",
								"Need install steps? Open <a href=\"/setup/\">Setup</a> after your license email arrives.",
							],
						},
					],
					heroImage: "/images/tarkov-cheats-radar.webp",
				},
				"soft-aim": {
					title: "Tarkov Soft Aim 2026 | Smooth Aimbot Settings",
					description: "Tarkov soft aim settings for natural tracking on Windows PC. Smoothness, FOV, and bone priority — included in our TarkovHack with ESP boxes.",
					h1: "Tarkov Soft Aim — Smooth Aimbot Controls",
					intro: "Tarkov soft aim settings for Tarkov — configurable Aimbot smoothness, FOV, bone priority, and hotkey toggles bundled with ESP wallhack and radar in one undetected license.",
					imageAlt: "Tarkov soft aim FOV and smoothness settings",
					galleryTitle: "Tarkov soft aim gallery",
					ctaPrimary: "Buy TarkovHack",
					ctaSecondary: "Aimbot controls",
					ctaSecondaryHref: "/tarkov-aimbot/",
					sections: [
						{
							h2: "What Tarkov soft aim means",
							paragraphs: [
								"Tarkov soft aim refers to Aimbot behavior tuned for smooth, natural-looking tracking rather than instant snap. TarkovHack exposes smoothness, FOV, and sensitivity sliders so you control how assist feels in BR firefights.",
								"Bone priority and target selection cover closest player, lowest health, or highest-threat targets during squad fights.",
								"Full Aimbot documentation: <a href=\"/tarkov-aimbot/\">Tarkov Aimbot</a>. Alternate wording: <a href=\"/tarkov-aimbot/\">aimbot hack</a>.",
							],
						},
						{
							h2: "Soft aim profiles per weapon class",
							paragraphs: [
								"Save separate soft aim profiles for ARs, SMGs, and bolt-actions. Switch between long-range AR beams and close-quarters room clears with hotkeys mid-match.",
								"Weapon TTKs shift with <a href=\"https://www.escapefromtarkov.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Escape from Tarkov</a> balance patches — retune smoothness after major combat updates.",
								"Soft aim ships alongside <a href=\"/tarkov-esp/\">ESP wallhack</a> and <a href=\"/tarkov-radar-hack/\">2D radar</a> overlays.",
							],
						},
						{
							h2: "Undetected soft aim with BattlEye maintenance",
							paragraphs: [
								"Aimbot modules rebuild after BattlEye anti-cheat patches. Check the <a href=\"/updates/\">Updates page</a> before queueing — responsible settings and maintenance awareness matter for undetected play.",
								"Monthly and lifetime licenses checkout with digital delivery on Windows PC — <a href=\"/pricing/\">Pricing</a>.",
								"Activation help: <a href=\"/setup/\">Setup</a> · status questions: <a href=\"/support/\">Support</a>.",
							],
						},
					],
					heroImage: "/images/tarkov-cheats-aimbot-view.webp",
				},
				"best-cheats": {
					title: "Best TarkovHack 2026 | Buyer Guide",
					description: "Best TarkovHack for 2026: ESP boxes, soft aim, and BattlEye maintenance on Windows PC. Use this checklist before checkout.",
					h1: "Best TarkovHack — 2026 Buyer Guide",
					intro: "Compare the TarkovHack for Tarkov in 2026 — undetected ESP wallhack, radar hack, and Aimbot in one maintained package with BattlEye anti-cheat rebuilds and instant delivery.",
					imageAlt: "TarkovHack overview for Escape from Tarkov on PC",
					galleryTitle: "Best TarkovHack gallery",
					ctaPrimary: "Buy TarkovHack",
					ctaSecondary: "Compare pricing",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "What makes the TarkovHack in 2026",
							paragraphs: [
								"The TarkovHack combine active BattlEye maintenance, a full ESP wallhack and radar stack, configurable Aimbot, and clear update communication — not a stale build from a prior season.",
								"TarkovHack covers raid and scav-run with in-client toggles and post-patch rebuilds.",
								"Verify the live game is healthy via <a href=\"https://www.escapefromtarkov.com/support\" target=\"_blank\" rel=\"noopener noreferrer\">Escape from Tarkov Support</a>, then confirm our <a href=\"/updates/\">Updates</a> note before you judge any package “best.”",
							],
						},
						{
							h2: "Best TarkovHack feature checklist",
							paragraphs: [
								"Look for player ESP wallhack, loot markers, 2D radar overlays, Aimbot profiles, hotkey toggles, and documented maintenance after Tarkov patches.",
								"Review <a href=\"/features/\">Features</a>, <a href=\"/tarkov-cheats/\">undetected status</a>, and <a href=\"/tarkov-cheats/\">TarkovHack 2026</a> before checkout — monthly ($35) and lifetime ($150) plans available.",
								"Module pages worth opening: <a href=\"/tarkov-esp/\">ESP</a>, <a href=\"/tarkov-aimbot/\">Aimbot</a>, <a href=\"/tarkov-cheats/\">hacks</a>.",
							],
						},
						{
							h2: "Buying the TarkovHack safely",
							paragraphs: [
								"Purchase through secure checkout for instant digital delivery. Read Setup, FAQ, and Updates pages before your first queue — and contact Support with order details if activation needs help.",
								"No cheat guarantees permanent undetected status — combine maintenance with responsible in-game settings.",
								"Remember: using cheats can violate Battlestate Games terms. Proceed only if you accept that risk.",
							],
						},
					],
					heroImage: "/images/tarkov-cheats-esp.webp",
				},
				"aimbot-hack": {
					title: "Tarkov Aimbot Hack 2026 | Soft Aim Assist",
					description: "Tarkov aimbot hack with soft aim for Windows PC. FOV, bone priority, and hotkeys — bundled with ESP boxes in our TarkovHack package.",
					h1: "Tarkov Aimbot Hack — Soft Aim Assist",
					intro: "Tarkov aimbot hack tools for Tarkov — smoothness, FOV, bone priority, per-weapon profiles, and hotkey toggles bundled with ESP wallhack and radar in one undetected license.",
					imageAlt: "Tarkov aimbot hack controls and bone priority",
					galleryTitle: "Tarkov aimbot hack gallery",
					ctaPrimary: "Buy TarkovHack",
					ctaSecondary: "Aimbot settings",
					ctaSecondaryHref: "/tarkov-aimbot/",
					sections: [
						{
							h2: "Tarkov aimbot hack vs visibility tools",
							paragraphs: [
								"A Tarkov aimbot hack focuses on assisted targeting during firefights — while ESP wallhack and radar handle map awareness. TarkovHack bundles aimbot hack modules with visibility overlays in one license.",
								"Smoothness, FOV, and sensitivity controls tune assist for Tarkov combat pace across PMC raids and scav-runs.",
								"Prefer softer tracking language? See <a href=\"/tarkov-aimbot/\">soft aim</a>. Full settings: <a href=\"/tarkov-aimbot/\">Aimbot page</a>.",
							],
						},
						{
							h2: "Aimbot hack controls and hotkeys",
							paragraphs: [
								"Bone priority options cover head, chest, or dynamic targets. Hotkeys enable or disable aimbot hack mid-match without opening menus during rotations or late-raid extracts.",
								"Per-weapon profile slots separate long-range AR tuning from close-quarters SMG settings.",
								"Balance patches from <a href=\"https://www.escapefromtarkov.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Escape from Tarkov</a> can change ideal FOV — retune after major weapon updates.",
							],
						},
						{
							h2: "Undetected aimbot hack maintenance",
							paragraphs: [
								"Aimbot hack signatures rebuild after BattlEye anti-cheat updates. Follow the <a href=\"/updates/\">Updates page</a> and <a href=\"/updates/\">BattlEye bypass guide</a> before queueing after patch days.",
								"Checkout with instant digital delivery for Windows 10 and 11 — <a href=\"/pricing/\">Pricing</a>.",
								"Pair with <a href=\"/tarkov-esp/\">ESP</a> for the full information + assist loop.",
							],
						},
					],
					heroImage: "/images/tarkov-cheats-aimbot-view.webp",
				},
				"esp-hack": {
					title: "Tarkov ESP Hack 2026 | Player Boxes & Loot",
					description: "Tarkov ESP hack with player boxes and loot markers for Windows PC. Undetected TarkovHack with — see overlays and buy.",
					h1: "Tarkov ESP Hack — Player Boxes Guide",
					intro: "Tarkov ESP hack overlays for Tarkov — player outlines, boss threat cues, loot and container markers with distance readouts across raid and scav-run.",
					imageAlt: "Tarkov ESP hack boxes and loot markers",
					galleryTitle: "Tarkov ESP hack gallery",
					ctaPrimary: "Buy TarkovHack",
					ctaSecondary: "ESP controls",
					ctaSecondaryHref: "/tarkov-esp/",
					sections: [
						{
							h2: "What a Tarkov ESP hack shows",
							paragraphs: [
								"A Tarkov ESP hack renders enemy player outlines, vehicle positions, and loot pins through walls and terrain — closing the information gap before you commit to a fight.",
								"Distance readouts and snapline options help control engagement range during squad pushes and third-party scenarios.",
								"Canonical visibility guide: <a href=\"/tarkov-esp/\">Tarkov ESP</a>. Wallhack wording: <a href=\"/tarkov-esp/\">wallhack</a>.",
							],
						},
						{
							h2: "ESP hack categories for raids",
							paragraphs: [
								"Toggle player ESP hack, loot markers, chest pins, and vehicle cues independently so only raid-critical overlays stay active during rotations.",
								"Team and enemy colour coding supports PMC raids and scav-runs.",
								"POI and loot changes publish through <a href=\"https://www.escapefromtarkov.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Escape from Tarkov</a> — keep categories toggled to what the current map rewards.",
							],
						},
						{
							h2: "Undetected ESP hack with BattlEye maintenance",
							paragraphs: [
								"ESP hack modules rebuild after BattlEye anti-cheat and Tarkov patches. Check the <a href=\"/updates/\">Updates page</a> before queueing — pair ESP hack awareness with <a href=\"/tarkov-radar-hack/\">radar hack</a> for flank reads.",
								"Licenses deliver digitally after checkout on Windows PC — see <a href=\"/pricing/\">Pricing</a>.",
								"Install steps: <a href=\"/setup/\">Setup</a>. Status questions: <a href=\"/tarkov-cheats/\">undetected guide</a>.",
							],
						},
					],
					heroImage: "/images/tarkov-cheats-wallhack.webp",
				},
				"unlock-all": {
					title: "Tarkov Unlock All 2026 | What It Really Means",
					description: "Tarkov unlock all explained vs real TarkovHack — ESP boxes, soft aim, and radar for Windows PC. Know what you are buying.",
					h1: "Tarkov Unlock All — What Players Search For",
					intro: "Tarkov unlock all is a common search term for Tarkov — this page clarifies what unlock-all tools claim versus the ESP wallhack, radar hack, and Aimbot tools TarkovHack actually provides on Windows PC.",
					imageAlt: "TarkovHack license features overview",
					galleryTitle: "Tarkov unlock all guide visuals",
					ctaPrimary: "Buy TarkovHack",
					ctaSecondary: "See features",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "What Tarkov unlock all usually means",
							paragraphs: [
								"Tarkov unlock all searches often refer to instant access to weapons, camos, skins, or battle pass tiers. Those claims differ from visibility and combat-assist tools like ESP wallhack and Aimbot.",
								"TarkovHack focuses on in-match awareness — player ESP, loot markers, radar overlays, and configurable Aimbot — not account-wide cosmetic unlocks.",
								"Cosmetics and wipe progression items are sold through <a href=\"https://www.escapefromtarkov.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Escape from Tarkov</a>. Be wary of unlock-all downloads that promise free skins — they are often scams.",
							],
						},
						{
							h2: "Visibility tools vs unlock-all claims",
							paragraphs: [
								"ESP wallhack helps you spot enemy squads, bosses, and high-value loot during live matches. Radar hack adds flank awareness; Aimbot covers combat assist with smoothness and hotkey controls.",
								"For loadout planning during a match, loot and container markers speed map rotations — see the <a href=\"/tarkov-esp/\">ESP</a> and <a href=\"/features/\">Features</a> pages for the full tool list.",
								"Related: <a href=\"/tarkov-cheats/\">TarkovHack</a> and <a href=\"/tarkov-cheats/\">TarkovHack</a>.",
							],
						},
						{
							h2: "Buying TarkovHack for the right reasons",
							paragraphs: [
								"If you need undetected ESP wallhack, radar hack, and Aimbot for Tarkov on Windows PC, compare <a href=\"/pricing/\">Pricing</a> and read the <a href=\"/setup/\">Setup guide</a> before checkout.",
								"Check the <a href=\"/updates/\">Updates page</a> after BattlEye anti-cheat patches — maintenance rebuilds publish for active licenses.",
								"Questions? <a href=\"/faq/\">FAQ</a> and <a href=\"/support/\">Support</a> cover delivery and configuration — not cosmetic unlocks.",
							],
						},
					],
					heroImage: "/images/tarkov-cheats-radar.webp",
				},
				privacy: {
					title: "Privacy Policy | TarkovHack",
					description: "Privacy policy for TarkovHack. How we handle support emails, order data, and checkout for TarkovHack licenses on tarkovhack.com.",
					h1: "Privacy Policy",
					intro: "How TarkovHack handles information when you browse tarkovhack.com or contact support about a Tarkov license.",
					imageAlt: "TarkovHack privacy policy page",
					galleryTitle: "TarkovHack legal resources",
					ctaPrimary: "Email support",
					ctaSecondary: "Read terms of use",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we may collect",
							paragraphs: [
								"We may collect contact details you send by email, order references needed to resolve support requests, and basic technical data used to operate and secure the website.",
								"We do not sell personal data. Checkout payment details are processed by the checkout provider — review their privacy terms for transaction data.",
							],
							list: [
								"Contact details you send by email",
								"Order references for support requests",
								"Basic technical data for site security",
							],
						},
						{
							h2: "How information is used",
							paragraphs: [
								"Information is used to respond to support requests, process order issues, improve site reliability, and meet legal obligations when required.",
								"Analytics may use aggregated traffic data without identifying individual TarkovHack customers.",
							],
						},
						{
							h2: "Your choices and contact",
							paragraphs: [
								"You may request correction or deletion of support email data by contacting support@tarkovhack.com with your request details.",
								"Policy updates publish on this page. Continued use of tarkovhack.com after updates means you accept the revised policy. Also see <a href=\"/terms/\">Terms of Use</a> and <a href=\"/refund-policy/\">Refund Policy</a>.",
							],
						},
					],
					heroImage: "/images/tarkov-cheats-aimbot.webp",
				},
				refund: {
					title: "Refund Policy | TarkovHack",
					description: "Refund policy for TarkovHack. Digital delivery terms and eligibility for TarkovHack packages with ESP, soft aim, and radar.",
					h1: "Refund Policy",
					intro: "Refund terms for TarkovHack licenses — ESP wallhack, radar hack, and Aimbot packages purchased through checkout for Tarkov.",
					imageAlt: "TarkovHack refund policy page",
					galleryTitle: "TarkovHack billing resources",
					ctaPrimary: "Contact support",
					ctaSecondary: "Read privacy policy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digital delivery and eligibility",
							paragraphs: [
								"TarkovHack licenses deliver digitally after payment confirmation. Because access begins immediately, refunds are limited to cases outlined below.",
								"Submit refund requests within 24 hours of purchase with your order ID and reason.",
							],
						},
						{
							h2: "When refunds may be approved",
							paragraphs: [
								"Duplicate charges, failed delivery despite confirmed payment, or technical activation failures verified by support may qualify for review.",
								"Refund decisions are final. Chargebacks without contacting support first may result in license revocation. See also <a href=\"/terms/\">Terms of Use</a>.",
							],
						},
						{
							h2: "How to request a refund",
							paragraphs: [
								"Email support@tarkovhack.com with subject \"Refund Request\", your order ID, purchase date, and issue summary — or use the <a href=\"/support/\">Support page</a>.",
								"Approved refunds process back to the original payment method when possible. Pricing details live on <a href=\"/pricing/\">Pricing</a>.",
							],
						},
					],
					heroImage: "/images/tarkov-cheats-raid.webp",
				},
				terms: {
					title: "Terms of Use 2026 | TarkovHack Rules",
					description: "Terms of use for tarkovhack.com and TarkovHack licenses. Usage rules, anti-cheat risk, and liability for Windows PC cheats.",
					h1: "Terms of Use",
					intro: "Terms governing use of tarkovhack.com and TarkovHack licenses for Tarkov on Windows PC.",
					imageAlt: "TarkovHack terms of use page",
					galleryTitle: "TarkovHack legal pages",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy policy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Acceptance and license scope",
							paragraphs: [
								"By purchasing or using TarkovHack you agree to these terms. Licenses grant personal use of ESP wallhack, radar, and Aimbot tools for Tarkov on Windows PC only.",
								"Sharing, reselling, or reverse-engineering the package violates these terms and may revoke access.",
							],
						},
						{
							h2: "Risk and anti-cheat disclaimer",
							paragraphs: [
								"Using cheats in Tarkov may violate Battlestate Games terms and result in account penalties. TarkovHack provides maintenance but does not guarantee undetected status or account safety.",
								"You assume all risk. We are not liable for bans, data loss, or damages arising from product use. See also <a href=\"/tarkov-cheats/\">undetected status</a>.",
							],
						},
						{
							h2: "Changes and governing law",
							paragraphs: [
								"We may update these terms by posting revisions on this page. Continued use after changes constitutes acceptance.",
								"Contact support@tarkovhack.com for questions. Related policies: <a href=\"/privacy-policy/\">Privacy</a> and <a href=\"/refund-policy/\">Refunds</a>.",
							],
						},
					],
					heroImage: "/images/tarkov-cheats-aimbot-view.webp",
				},
			},
		},
		es: {
			ui: {
				nav: {
					home: "Inicio",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Funciones",
					pricing: "Precios",
					setup: "Instalación",
					updates: "Actualizaciones",
					faq: "FAQ",
					buyNow: "Comprar",
				},
				hero: {
					accent: "Trucos Tarkov indetectables",
					accentShort: "TarkovHack",
					subtitle: "ESP wallhack, radar hack y Aimbot para Tarkov en PC Windows — mantenimiento BattlEye anti-cheat incluido.",
					subtitleShort: "ESP, radar y Aimbot para Tarkov PC",
					buyNow: "Comprar ahora",
					seeFeatures: "Ver funciones",
				},
				trust: {
					status: "En línea",
					statusNote: "El paquete TarkovHack está activo para Tarkov en PC Windows.",
					statusShort: "Activo",
					delivery: "Entrega digital instantánea",
					platform: "Windows 10 y 11",
					antiCheat: "Mantenimiento BattlEye anti-cheat incluido",
					antiCheatShort: "BattlEye anti-cheat incluido",
				},
				product: {
					title: "TarkovHack",
					addToCart: "Añadir al carrito",
					monthly: "Mensual",
					lifetime: "De por vida",
					available: "Disponible ahora",
					gameBadge: "Tarkov",
					platformBadge: "PC Windows",
					statusBadge: "Paquete indetectable",
				},
				reviews: {
					title: "Lo que dicen los jugadores",
					subtitle: "Comentarios recientes de compradores de TarkovHack",
					outOf: "de 5",
					countLabel: "reseñas",
				},
				common: {
					buyNow: "Comprar ahora",
					readGuide: "Leer guía",
					language: "Idioma",
					officialLanguageNote: "El inglés es el idioma oficial. Otras versiones están traducidas para SEO global.",
					relatedPages: "Páginas relacionadas",
				},
				footer: {
					explore: "Explorar",
					help: "Ayuda y legal",
					tagline: "ESP, wallhack, radar y Aimbot indetectables para Tarkov — checkout en Zadeyo.",
				},
				images: {
					hero: "TarkovHack hero — ESP and aimbot overlay in Escape from Tarkov",
					espWallhack: "Wallhack outlines showing PMCs and Scavs through walls",
					aimbotCombat: "Soft aim assist overlay during an Escape from Tarkov raid",
					squadFight: "TarkovHack combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Tarkov raid",
					headerArt: "Aimbot view and bone priority controls for Tarkov",
					cheatsPackage: "2D radar threat overlay for Escape from Tarkov",
					rebootFight: "Aimbot assist during a Tarkov firefight",
					battleRoyale: "TarkovHack in-raid overview for Windows PC",
					battleRoyaleIsland: "ESP markers for loot and extracts in Tarkov",
				},
			},
			pages: {
				home: {
					title: "TarkovHack 2026 | ESP, Wallhack y Aimbot",
					description: "Trucos Escape from Tarkov indetectables para Escape from Tarkov en PC. ESP wallhack, radar hack y Aimbot con mantenimiento BattlEye anti-cheat. Entrega digital",
					h1: "TarkovHack — ESP, Wallhack y Aimbot indetectables",
					intro: "Paquete undetected para Escape from Tarkov en Windows PC: ESP wallhack, radar y Aimbot con mantenimiento BattlEye anti-cheat tras cada parche.",
					imageAlt: "Tarkov ESP player tags hack",
					galleryTitle: "Galería TarkovHack — ESP, Aimbot y wallhack",
					heroImage: "/images/tarkov-cheats-esp.webp",
					ctaPrimary: "Comprar TarkovHack",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Por qué eligen TarkovHack en 2026",
							paragraphs: [
								"TarkovHack ofrece ESP wallhack, radar hack y tarkov aimbot indetectables para Tarkov en Windows PC. Ideal para leer escuadrones enemigos en BR y scav-run.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen BattlEye anti-cheat maintenance.",
							],
						},
						{
							h2: "ESP wallhack, radar y Aimbot en una licencia",
							paragraphs: [
								"TarkovHack ofrece ESP wallhack, radar hack y tarkov aimbot indetectables para Tarkov en Windows PC. Una licencia en lugar de herramientas separadas.",
								"Consulta la página Updates antes de jugar tras parches de BattlEye anti-cheat. Ningún cheat garantiza estado indetectable permanente.",
							],
						},
					],
				},
				"tarkov-esp": {
					title: "ESP Tarkov | Cajas de jugador y wallhack",
					description: "ESP Tarkov: player boxes, loot markers, and wallhack overlays. entrega digital instantánea. indetectables — Windows PC.",
					h1: "ESP Tarkov",
					intro: "TarkovHack ofrece ESP wallhack, radar hack y tarkov aimbot indetectables para Tarkov en Windows PC. ESP Tarkov.",
					imageAlt: "Tarkov ESP player boxes and distance readouts in a raid",
					galleryTitle: "ESP Tarkov",
					heroImage: "/images/tarkov-cheats-radar.webp",
					ctaPrimary: "Comprar TarkovHack",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/tarkov-cheats/",
					sections: [
						{
							h2: "ESP Tarkov",
							paragraphs: [
								"TarkovHack ofrece ESP wallhack, radar hack y tarkov aimbot indetectables para Tarkov en Windows PC. player boxes, loot markers, and wallhack overlays.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen BattlEye anti-cheat maintenance.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de BattlEye anti-cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen BattlEye anti-cheat maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen BattlEye anti-cheat maintenance.",
								"Contacta support@tarkovhack.com para solicitudes legales o de soporte.",
							],
						},
					],
				},
				"tarkov-aimbot": {
					title: "Aimbot Tarkov | Controles soft aim",
					description: "Aimbot Tarkov: soft aim, FOV, and per-weapon Aimbot profiles. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Aimbot Tarkov",
					intro: "TarkovHack ofrece ESP wallhack, radar hack y tarkov aimbot indetectables para Tarkov en Windows PC. Aimbot Tarkov.",
					imageAlt: "Tarkov aimbot and soft aim controls on Windows PC",
					galleryTitle: "Aimbot Tarkov",
					heroImage: "/images/tarkov-cheats-aimbot.webp",
					ctaPrimary: "Comprar TarkovHack",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/tarkov-esp/",
					sections: [
						{
							h2: "Aimbot Tarkov",
							paragraphs: [
								"TarkovHack ofrece ESP wallhack, radar hack y tarkov aimbot indetectables para Tarkov en Windows PC. soft aim, FOV, and per-weapon Aimbot profiles.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen BattlEye anti-cheat maintenance.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de BattlEye anti-cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen BattlEye anti-cheat maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen BattlEye anti-cheat maintenance.",
								"Contacta support@tarkovhack.com para solicitudes legales o de soporte.",
							],
						},
					],
				},
				features: {
					title: "Funciones | Lista completa de funciones",
					description: "Funciones: ESP, soft aim, radar controls. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Funciones",
					intro: "TarkovHack ofrece ESP wallhack, radar hack y tarkov aimbot indetectables para Tarkov en Windows PC. Funciones.",
					imageAlt: "TarkovHack features — ESP, soft aim, and radar screenshots",
					galleryTitle: "Funciones",
					heroImage: "/images/tarkov-cheats-aimbot-view.webp",
					ctaPrimary: "Comprar TarkovHack",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Funciones",
							paragraphs: [
								"TarkovHack ofrece ESP wallhack, radar hack y tarkov aimbot indetectables para Tarkov en Windows PC. ESP, soft aim, radar controls.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen BattlEye anti-cheat maintenance.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de BattlEye anti-cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen BattlEye anti-cheat maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen BattlEye anti-cheat maintenance.",
								"Contacta support@tarkovhack.com para solicitudes legales o de soporte.",
							],
						},
					],
				},
				pricing: {
					title: "Precios | Mensual y de por vida",
					description: "Precios: $35 monthly or $150 lifetime licenses. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Precios",
					intro: "TarkovHack ofrece ESP wallhack, radar hack y tarkov aimbot indetectables para Tarkov en Windows PC. Precios.",
					imageAlt: "TarkovHack store plans for monthly and lifetime licenses",
					galleryTitle: "Precios",
					heroImage: "/images/tarkov-cheats-raid.webp",
					ctaPrimary: "Comprar TarkovHack",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Precios",
							paragraphs: [
								"TarkovHack ofrece ESP wallhack, radar hack y tarkov aimbot indetectables para Tarkov en Windows PC. $35 monthly or $150 lifetime licenses.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen BattlEye anti-cheat maintenance.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de BattlEye anti-cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen BattlEye anti-cheat maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen BattlEye anti-cheat maintenance.",
								"Contacta support@tarkovhack.com para solicitudes legales o de soporte.",
							],
						},
					],
				},
				setup: {
					title: "Instalación | Guía de instalación PC",
					description: "Instalación: Windows PC activation and first-launch setup. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Instalación",
					intro: "TarkovHack ofrece ESP wallhack, radar hack y tarkov aimbot indetectables para Tarkov en Windows PC. Instalación.",
					imageAlt: "TarkovHack setup guide screenshot for Windows PC",
					galleryTitle: "Instalación",
					heroImage: "/images/tarkov-cheats-radar.webp",
					ctaPrimary: "Comprar TarkovHack",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Instalación",
							paragraphs: [
								"TarkovHack ofrece ESP wallhack, radar hack y tarkov aimbot indetectables para Tarkov en Windows PC. Windows PC activation and first-launch setup.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen BattlEye anti-cheat maintenance.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de BattlEye anti-cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen BattlEye anti-cheat maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen BattlEye anti-cheat maintenance.",
								"Contacta support@tarkovhack.com para solicitudes legales o de soporte.",
							],
						},
					],
				},
				updates: {
					title: "Actualizaciones | Registro BattlEye",
					description: "Actualizaciones: BattlEye patch status and rebuild notes. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Actualizaciones",
					intro: "TarkovHack ofrece ESP wallhack, radar hack y tarkov aimbot indetectables para Tarkov en Windows PC. Actualizaciones.",
					imageAlt: "TarkovHack live status after BattlEye and game patches",
					galleryTitle: "Actualizaciones",
					heroImage: "/images/tarkov-cheats-esp.webp",
					ctaPrimary: "Comprar TarkovHack",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/tarkov-cheats/",
					sections: [
						{
							h2: "Actualizaciones",
							paragraphs: [
								"TarkovHack ofrece ESP wallhack, radar hack y tarkov aimbot indetectables para Tarkov en Windows PC. BattlEye patch status and rebuild notes.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen BattlEye anti-cheat maintenance.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de BattlEye anti-cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen BattlEye anti-cheat maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen BattlEye anti-cheat maintenance.",
								"Contacta support@tarkovhack.com para solicitudes legales o de soporte.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Preguntas frecuentes",
					description: "FAQ: ESP, soft aim, delivery, and BattlEye questions. entrega digital instantánea. indetectables — Windows PC.",
					h1: "FAQ",
					intro: "TarkovHack ofrece ESP wallhack, radar hack y tarkov aimbot indetectables para Tarkov en Windows PC. FAQ.",
					imageAlt: "TarkovHack FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/tarkov-cheats-aimbot-view.webp",
					ctaPrimary: "Comprar TarkovHack",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"TarkovHack ofrece ESP wallhack, radar hack y tarkov aimbot indetectables para Tarkov en Windows PC. ESP, soft aim, delivery, and BattlEye questions.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen BattlEye anti-cheat maintenance.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de BattlEye anti-cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen BattlEye anti-cheat maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen BattlEye anti-cheat maintenance.",
								"Contacta support@tarkovhack.com para solicitudes legales o de soporte.",
							],
						},
					],
				},
				support: {
					title: "Soporte | Ayuda y contacto",
					description: "Soporte: order help and license support contact. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Soporte",
					intro: "TarkovHack ofrece ESP wallhack, radar hack y tarkov aimbot indetectables para Tarkov en Windows PC. Soporte.",
					imageAlt: "TarkovHack support page for license and setup help",
					galleryTitle: "Soporte",
					heroImage: "/images/tarkov-cheats-raid.webp",
					ctaPrimary: "Comprar TarkovHack",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Soporte",
							paragraphs: [
								"TarkovHack ofrece ESP wallhack, radar hack y tarkov aimbot indetectables para Tarkov en Windows PC. order help and license support contact.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen BattlEye anti-cheat maintenance.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de BattlEye anti-cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen BattlEye anti-cheat maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen BattlEye anti-cheat maintenance.",
								"Contacta support@tarkovhack.com para solicitudes legales o de soporte.",
							],
						},
					],
				},
				undetected: {
					title: "Trucos indetectables | Estado indetectable",
					description: "Trucos indetectables: undetected maintenance after BattlEye anti-cheat patches. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Trucos indetectables",
					intro: "TarkovHack ofrece ESP wallhack, radar hack y tarkov aimbot indetectables para Tarkov en Windows PC. Trucos indetectables.",
					imageAlt: "TarkovHack undetected status overview for Windows PC",
					galleryTitle: "Trucos indetectables",
					heroImage: "/images/tarkov-cheats-wallhack.webp",
					ctaPrimary: "Comprar TarkovHack",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/tarkov-cheats/",
					sections: [
						{
							h2: "Trucos indetectables",
							paragraphs: [
								"TarkovHack ofrece ESP wallhack, radar hack y tarkov aimbot indetectables para Tarkov en Windows PC. undetected maintenance after BattlEye anti-cheat patches.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen BattlEye anti-cheat maintenance.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de BattlEye anti-cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen BattlEye anti-cheat maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen BattlEye anti-cheat maintenance.",
								"Contacta support@tarkovhack.com para solicitudes legales o de soporte.",
							],
						},
					],
				},
				wallhack: {
					title: "Wallhack Tarkov | Visibilidad ESP",
					description: "Wallhack Tarkov: wallhack ESP for players, loot, and distance. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Wallhack Tarkov",
					intro: "TarkovHack ofrece ESP wallhack, radar hack y tarkov aimbot indetectables para Tarkov en Windows PC. Wallhack Tarkov.",
					imageAlt: "Tarkov wallhack visibility through walls in a raid",
					galleryTitle: "Wallhack Tarkov",
					heroImage: "/images/tarkov-cheats-wallhack.webp",
					ctaPrimary: "Comprar TarkovHack",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/tarkov-esp/",
					sections: [
						{
							h2: "Wallhack Tarkov",
							paragraphs: [
								"TarkovHack ofrece ESP wallhack, radar hack y tarkov aimbot indetectables para Tarkov en Windows PC. wallhack ESP for players, loot, and distance.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen BattlEye anti-cheat maintenance.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de BattlEye anti-cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen BattlEye anti-cheat maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen BattlEye anti-cheat maintenance.",
								"Contacta support@tarkovhack.com para solicitudes legales o de soporte.",
							],
						},
					],
				},
				radar: {
					title: "Radar hack | Radar 2D de amenazas",
					description: "Radar hack: 2D radar cues for flanks and rotations. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Radar hack",
					intro: "TarkovHack ofrece ESP wallhack, radar hack y tarkov aimbot indetectables para Tarkov en Windows PC. Radar hack.",
					imageAlt: "Tarkov 2D radar overlay showing nearby threats",
					galleryTitle: "Radar hack",
					heroImage: "/images/tarkov-cheats-radar.webp",
					ctaPrimary: "Comprar TarkovHack",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/tarkov-esp/",
					sections: [
						{
							h2: "Radar hack",
							paragraphs: [
								"TarkovHack ofrece ESP wallhack, radar hack y tarkov aimbot indetectables para Tarkov en Windows PC. 2D radar cues for flanks and rotations.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen BattlEye anti-cheat maintenance.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de BattlEye anti-cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen BattlEye anti-cheat maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen BattlEye anti-cheat maintenance.",
								"Contacta support@tarkovhack.com para solicitudes legales o de soporte.",
							],
						},
					],
				},
				battleye: {
					title: "Bypass BattlEye | Mantenimiento de parches",
					description: "Bypass BattlEye: how BattlEye updates are handled for Escape from Tarkov hacks. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Bypass BattlEye",
					intro: "TarkovHack ofrece ESP wallhack, radar hack y tarkov aimbot indetectables para Tarkov en Windows PC. Bypass BattlEye.",
					imageAlt: "TarkovHack maintenance after a BattlEye patch",
					galleryTitle: "Bypass BattlEye",
					heroImage: "/images/tarkov-cheats-aimbot.webp",
					ctaPrimary: "Comprar TarkovHack",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Bypass BattlEye",
							paragraphs: [
								"TarkovHack ofrece ESP wallhack, radar hack y tarkov aimbot indetectables para Tarkov en Windows PC. how BattlEye updates are handled for Escape from Tarkov hacks.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen BattlEye anti-cheat maintenance.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de BattlEye anti-cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen BattlEye anti-cheat maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen BattlEye anti-cheat maintenance.",
								"Contacta support@tarkovhack.com para solicitudes legales o de soporte.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Trucos Tarkov 2026 | Guía del comprador",
					description: "Trucos Tarkov 2026: 2026 TarkovHack checklist before checkout. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Trucos Tarkov 2026",
					intro: "TarkovHack ofrece ESP wallhack, radar hack y tarkov aimbot indetectables para Tarkov en Windows PC. Trucos Tarkov 2026.",
					imageAlt: "TarkovHack product overview for Escape from Tarkov",
					galleryTitle: "Trucos Tarkov 2026",
					heroImage: "/images/tarkov-cheats-esp.webp",
					ctaPrimary: "Comprar TarkovHack",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/tarkov-cheats/",
					sections: [
						{
							h2: "Trucos Tarkov 2026",
							paragraphs: [
								"TarkovHack ofrece ESP wallhack, radar hack y tarkov aimbot indetectables para Tarkov en Windows PC. 2026 TarkovHack checklist before checkout.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen BattlEye anti-cheat maintenance.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de BattlEye anti-cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen BattlEye anti-cheat maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen BattlEye anti-cheat maintenance.",
								"Contacta support@tarkovhack.com para solicitudes legales o de soporte.",
							],
						},
					],
				},
				hacks: {
					title: "Trucos Tarkov | Guía ESP y Aimbot",
					description: "Trucos Tarkov: the Escape from Tarkov hacks pillar for ESP and Aimbot. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Trucos Tarkov",
					intro: "TarkovHack ofrece ESP wallhack, radar hack y tarkov aimbot indetectables para Tarkov en Windows PC. Trucos Tarkov.",
					imageAlt: "TarkovHack product page — ESP, aimbot, and radar",
					galleryTitle: "Trucos Tarkov",
					heroImage: "/images/tarkov-cheats-raid.webp",
					ctaPrimary: "Comprar TarkovHack",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Trucos Tarkov",
							paragraphs: [
								"TarkovHack ofrece ESP wallhack, radar hack y tarkov aimbot indetectables para Tarkov en Windows PC. the Escape from Tarkov hacks pillar for ESP and Aimbot.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen BattlEye anti-cheat maintenance.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de BattlEye anti-cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen BattlEye anti-cheat maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen BattlEye anti-cheat maintenance.",
								"Contacta support@tarkovhack.com para solicitudes legales o de soporte.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Descarga TarkovHack | Acceso instantáneo",
					description: "Descarga TarkovHack: digital license download after payment. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Descarga TarkovHack",
					intro: "TarkovHack ofrece ESP wallhack, radar hack y tarkov aimbot indetectables para Tarkov en Windows PC. Descarga TarkovHack.",
					imageAlt: "TarkovHack download and install delivery flow",
					galleryTitle: "Descarga TarkovHack",
					heroImage: "/images/tarkov-cheats-raid.webp",
					ctaPrimary: "Comprar TarkovHack",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Descarga TarkovHack",
							paragraphs: [
								"TarkovHack ofrece ESP wallhack, radar hack y tarkov aimbot indetectables para Tarkov en Windows PC. digital license download after payment.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen BattlEye anti-cheat maintenance.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de BattlEye anti-cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen BattlEye anti-cheat maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen BattlEye anti-cheat maintenance.",
								"Contacta support@tarkovhack.com para solicitudes legales o de soporte.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Menú mod Tarkov | Controles en partida",
					description: "Menú mod Tarkov: in-client ESP and soft aim toggles. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Menú mod Tarkov",
					intro: "TarkovHack ofrece ESP wallhack, radar hack y tarkov aimbot indetectables para Tarkov en Windows PC. Menú mod Tarkov.",
					imageAlt: "TarkovHack in-game menu controls",
					galleryTitle: "Menú mod Tarkov",
					heroImage: "/images/tarkov-cheats-radar.webp",
					ctaPrimary: "Comprar TarkovHack",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Menú mod Tarkov",
							paragraphs: [
								"TarkovHack ofrece ESP wallhack, radar hack y tarkov aimbot indetectables para Tarkov en Windows PC. in-client ESP and soft aim toggles.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen BattlEye anti-cheat maintenance.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de BattlEye anti-cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen BattlEye anti-cheat maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen BattlEye anti-cheat maintenance.",
								"Contacta support@tarkovhack.com para solicitudes legales o de soporte.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Soft aim Tarkov | Ajustes soft aim",
					description: "Soft aim Tarkov: smooth soft aim settings for Windows PC. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Soft aim Tarkov",
					intro: "TarkovHack ofrece ESP wallhack, radar hack y tarkov aimbot indetectables para Tarkov en Windows PC. Soft aim Tarkov.",
					imageAlt: "Tarkov soft aim FOV and smoothness settings",
					galleryTitle: "Soft aim Tarkov",
					heroImage: "/images/tarkov-cheats-aimbot-view.webp",
					ctaPrimary: "Comprar TarkovHack",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/tarkov-aimbot/",
					sections: [
						{
							h2: "Soft aim Tarkov",
							paragraphs: [
								"TarkovHack ofrece ESP wallhack, radar hack y tarkov aimbot indetectables para Tarkov en Windows PC. smooth soft aim settings for Windows PC.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen BattlEye anti-cheat maintenance.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de BattlEye anti-cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen BattlEye anti-cheat maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen BattlEye anti-cheat maintenance.",
								"Contacta support@tarkovhack.com para solicitudes legales o de soporte.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Mejores trucos Tarkov | Lista de compra",
					description: "Mejores trucos Tarkov: what to compare before buying TarkovHack. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Mejores trucos Tarkov",
					intro: "TarkovHack ofrece ESP wallhack, radar hack y tarkov aimbot indetectables para Tarkov en Windows PC. Mejores trucos Tarkov.",
					imageAlt: "TarkovHack overview for Escape from Tarkov on PC",
					galleryTitle: "Mejores trucos Tarkov",
					heroImage: "/images/tarkov-cheats-esp.webp",
					ctaPrimary: "Comprar TarkovHack",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Mejores trucos Tarkov",
							paragraphs: [
								"TarkovHack ofrece ESP wallhack, radar hack y tarkov aimbot indetectables para Tarkov en Windows PC. what to compare before buying TarkovHack.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen BattlEye anti-cheat maintenance.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de BattlEye anti-cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen BattlEye anti-cheat maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen BattlEye anti-cheat maintenance.",
								"Contacta support@tarkovhack.com para solicitudes legales o de soporte.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Hack aimbot Tarkov | Asistencia soft aim",
					description: "Hack aimbot Tarkov: undetected Aimbot hack assist for Escape from Tarkov. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Hack aimbot Tarkov",
					intro: "TarkovHack ofrece ESP wallhack, radar hack y tarkov aimbot indetectables para Tarkov en Windows PC. Hack aimbot Tarkov.",
					imageAlt: "Tarkov aimbot hack controls and bone priority",
					galleryTitle: "Hack aimbot Tarkov",
					heroImage: "/images/tarkov-cheats-aimbot-view.webp",
					ctaPrimary: "Comprar TarkovHack",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/tarkov-aimbot/",
					sections: [
						{
							h2: "Hack aimbot Tarkov",
							paragraphs: [
								"TarkovHack ofrece ESP wallhack, radar hack y tarkov aimbot indetectables para Tarkov en Windows PC. undetected Aimbot hack assist for Escape from Tarkov.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen BattlEye anti-cheat maintenance.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de BattlEye anti-cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen BattlEye anti-cheat maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen BattlEye anti-cheat maintenance.",
								"Contacta support@tarkovhack.com para solicitudes legales o de soporte.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Hack ESP Tarkov | Cajas y loot",
					description: "Hack ESP Tarkov: ESP hack boxes, loot pins, and distance. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Hack ESP Tarkov",
					intro: "TarkovHack ofrece ESP wallhack, radar hack y tarkov aimbot indetectables para Tarkov en Windows PC. Hack ESP Tarkov.",
					imageAlt: "Tarkov ESP hack boxes and loot markers",
					galleryTitle: "Hack ESP Tarkov",
					heroImage: "/images/tarkov-cheats-wallhack.webp",
					ctaPrimary: "Comprar TarkovHack",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/tarkov-esp/",
					sections: [
						{
							h2: "Hack ESP Tarkov",
							paragraphs: [
								"TarkovHack ofrece ESP wallhack, radar hack y tarkov aimbot indetectables para Tarkov en Windows PC. ESP hack boxes, loot pins, and distance.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen BattlEye anti-cheat maintenance.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de BattlEye anti-cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen BattlEye anti-cheat maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen BattlEye anti-cheat maintenance.",
								"Contacta support@tarkovhack.com para solicitudes legales o de soporte.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Unlock all Tarkov | Qué significa",
					description: "Unlock all Tarkov: unlock-all searches vs real ESP and Aimbot tools. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Unlock all Tarkov",
					intro: "TarkovHack ofrece ESP wallhack, radar hack y tarkov aimbot indetectables para Tarkov en Windows PC. Unlock all Tarkov.",
					imageAlt: "TarkovHack license features overview",
					galleryTitle: "Unlock all Tarkov",
					heroImage: "/images/tarkov-cheats-radar.webp",
					ctaPrimary: "Comprar TarkovHack",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unlock all Tarkov",
							paragraphs: [
								"TarkovHack ofrece ESP wallhack, radar hack y tarkov aimbot indetectables para Tarkov en Windows PC. unlock-all searches vs real ESP and Aimbot tools.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen BattlEye anti-cheat maintenance.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de BattlEye anti-cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen BattlEye anti-cheat maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen BattlEye anti-cheat maintenance.",
								"Contacta support@tarkovhack.com para solicitudes legales o de soporte.",
							],
						},
					],
				},
				privacy: {
					title: "Política de privacidad | TarkovHack",
					description: "Política de privacidad for TarkovHack — ESP wallhack, Aimbot, Windows PC.",
					h1: "Política de privacidad",
					intro: "TarkovHack ofrece ESP wallhack, radar hack y tarkov aimbot indetectables para Tarkov en Windows PC. Política de privacidad for tarkovhack.com and Escape from Tarkov licenses.",
					imageAlt: "TarkovHack",
					galleryTitle: "TarkovHack",
					heroImage: "/images/tarkov-cheats-aimbot.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Leer términos",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Información que recopilamos",
							paragraphs: [
								"TarkovHack ofrece ESP wallhack, radar hack y tarkov aimbot indetectables para Tarkov en Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"Payment details are processed by Zadeyo checkout — not stored on tarkovhack.com.",
							],
						},
						{
							h2: "Uso de la información",
							paragraphs: [
								"TarkovHack ofrece ESP wallhack, radar hack y tarkov aimbot indetectables para Tarkov en Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Consulta la página Updates antes de jugar tras parches de BattlEye anti-cheat. Ningún cheat garantiza estado indetectable permanente.",
							],
						},
						{
							h2: "Tus derechos",
							paragraphs: [
								"Contacta support@tarkovhack.com para solicitudes legales o de soporte.",
								"Email: support@tarkovhack.com",
							],
						},
					],
				},
				refund: {
					title: "Política de reembolso | TarkovHack",
					description: "Política de reembolso for TarkovHack — ESP wallhack, Aimbot, Windows PC.",
					h1: "Política de reembolso",
					intro: "TarkovHack ofrece ESP wallhack, radar hack y tarkov aimbot indetectables para Tarkov en Windows PC. Política de reembolso for tarkovhack.com and Escape from Tarkov licenses.",
					imageAlt: "TarkovHack",
					galleryTitle: "TarkovHack",
					heroImage: "/images/tarkov-cheats-raid.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Leer privacidad",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Entrega digital",
							paragraphs: [
								"TarkovHack ofrece ESP wallhack, radar hack y tarkov aimbot indetectables para Tarkov en Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen BattlEye anti-cheat maintenance.",
							],
						},
						{
							h2: "Cuándo se aprueba",
							paragraphs: [
								"TarkovHack ofrece ESP wallhack, radar hack y tarkov aimbot indetectables para Tarkov en Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Consulta la página Updates antes de jugar tras parches de BattlEye anti-cheat. Ningún cheat garantiza estado indetectable permanente.",
							],
						},
						{
							h2: "Cómo solicitar",
							paragraphs: [
								"Contacta support@tarkovhack.com para solicitudes legales o de soporte.",
								"Email: support@tarkovhack.com",
							],
						},
					],
				},
				terms: {
					title: "Términos de uso | TarkovHack",
					description: "Términos de uso for TarkovHack — ESP wallhack, Aimbot, Windows PC.",
					h1: "Términos de uso",
					intro: "TarkovHack ofrece ESP wallhack, radar hack y tarkov aimbot indetectables para Tarkov en Windows PC. Términos de uso for tarkovhack.com and Escape from Tarkov licenses.",
					imageAlt: "TarkovHack",
					galleryTitle: "TarkovHack",
					heroImage: "/images/tarkov-cheats-aimbot-view.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Leer privacidad",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Aceptación de términos",
							paragraphs: [
								"TarkovHack ofrece ESP wallhack, radar hack y tarkov aimbot indetectables para Tarkov en Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen BattlEye anti-cheat maintenance.",
							],
						},
						{
							h2: "Riesgos y anti-cheat",
							paragraphs: [
								"TarkovHack ofrece ESP wallhack, radar hack y tarkov aimbot indetectables para Tarkov en Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "Cambios",
							paragraphs: [
								"Contacta support@tarkovhack.com para solicitudes legales o de soporte.",
								"Email: support@tarkovhack.com",
							],
						},
					],
				},
			},
		},
		fr: {
			ui: {
				nav: {
					home: "Accueil",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Fonctions",
					pricing: "Tarifs",
					setup: "Installation",
					updates: "Mises à jour",
					faq: "FAQ",
					buyNow: "Acheter",
				},
				hero: {
					accent: "Triches Tarkov indétectables",
					accentShort: "TarkovHack",
					subtitle: "ESP wallhack, radar hack et Aimbot pour Tarkov sur PC Windows — maintenance BattlEye anti-cheat incluse.",
					subtitleShort: "ESP, radar et Aimbot pour Tarkov PC",
					buyNow: "Acheter",
					seeFeatures: "Voir les fonctions",
				},
				trust: {
					status: "En ligne",
					statusNote: "Le pack TarkovHack est actif pour Tarkov sur PC Windows.",
					statusShort: "Actif",
					delivery: "Livraison numérique instantanée",
					platform: "Windows 10 et 11",
					antiCheat: "Maintenance BattlEye anti-cheat incluse",
					antiCheatShort: "BattlEye anti-cheat inclus",
				},
				product: {
					title: "TarkovHack",
					addToCart: "Ajouter au panier",
					monthly: "Mensuel",
					lifetime: "À vie",
					available: "Disponible",
					gameBadge: "Tarkov",
					platformBadge: "PC Windows",
					statusBadge: "Pack indétectable",
				},
				reviews: {
					title: "Ce que disent les joueurs",
					subtitle: "Avis récents des acheteurs TarkovHack",
					outOf: "sur 5",
					countLabel: "avis",
				},
				common: {
					buyNow: "Acheter",
					readGuide: "Lire le guide",
					language: "Langue",
					officialLanguageNote: "L'anglais est la langue officielle. Les autres versions sont traduites pour le SEO mondial.",
					relatedPages: "Pages associées",
				},
				footer: {
					explore: "Explorer",
					help: "Aide et légal",
					tagline: "ESP, wallhack, radar et Aimbot indétectables pour Tarkov — checkout via Zadeyo.",
				},
				images: {
					hero: "TarkovHack hero — ESP and aimbot overlay in Escape from Tarkov",
					espWallhack: "Wallhack outlines showing PMCs and Scavs through walls",
					aimbotCombat: "Soft aim assist overlay during an Escape from Tarkov raid",
					squadFight: "TarkovHack combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Tarkov raid",
					headerArt: "Aimbot view and bone priority controls for Tarkov",
					cheatsPackage: "2D radar threat overlay for Escape from Tarkov",
					rebootFight: "Aimbot assist during a Tarkov firefight",
					battleRoyale: "TarkovHack in-raid overview for Windows PC",
					battleRoyaleIsland: "ESP markers for loot and extracts in Tarkov",
				},
			},
			pages: {
				home: {
					title: "TarkovHack 2026 | ESP, Wallhack et Aimbot",
					description: "Triches Escape from Tarkov indétectables pour Escape from Tarkov sur PC. ESP wallhack, radar hack et Aimbot avec maintenance BattlEye anti-cheat. Livraison",
					h1: "TarkovHack — ESP, Wallhack et Aimbot indétectables",
					intro: "Pack undetected pour Escape from Tarkov sur PC Windows : ESP wallhack, radar et Aimbot avec maintenance BattlEye anti-cheat après chaque patch.",
					imageAlt: "Tarkov ESP player tags hack",
					galleryTitle: "Galerie TarkovHack — ESP, Aimbot et wallhack",
					heroImage: "/images/tarkov-cheats-esp.webp",
					ctaPrimary: "Acheter TarkovHack",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Pourquoi choisir TarkovHack en 2026",
							paragraphs: [
								"TarkovHack combine ESP wallhack, radar hack et tarkov aimbot indétectables pour Tarkov sur PC Windows. Parfait pour lire les escouades ennemies en BR et scav-run.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye anti-cheat.",
							],
						},
						{
							h2: "ESP wallhack, radar et Aimbot en une licence",
							paragraphs: [
								"TarkovHack combine ESP wallhack, radar hack et tarkov aimbot indétectables pour Tarkov sur PC Windows. Une licence au lieu d'outils séparés.",
								"Consultez Updates après les patchs BattlEye anti-cheat. Aucune triche ne garantit un statut indétectable permanent.",
							],
						},
					],
				},
				"tarkov-esp": {
					title: "ESP Tarkov | Boîtes joueur et wallhack",
					description: "ESP Tarkov: player boxes, loot markers, and wallhack overlays. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "ESP Tarkov",
					intro: "TarkovHack combine ESP wallhack, radar hack et tarkov aimbot indétectables pour Tarkov sur PC Windows. ESP Tarkov.",
					imageAlt: "Tarkov ESP player boxes and distance readouts in a raid",
					galleryTitle: "ESP Tarkov",
					heroImage: "/images/tarkov-cheats-radar.webp",
					ctaPrimary: "Acheter TarkovHack",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/tarkov-cheats/",
					sections: [
						{
							h2: "ESP Tarkov",
							paragraphs: [
								"TarkovHack combine ESP wallhack, radar hack et tarkov aimbot indétectables pour Tarkov sur PC Windows. player boxes, loot markers, and wallhack overlays.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye anti-cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs BattlEye anti-cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye anti-cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye anti-cheat.",
								"Contactez support@tarkovhack.com pour le support ou les demandes légales.",
							],
						},
					],
				},
				"tarkov-aimbot": {
					title: "Aimbot Tarkov | Contrôles soft aim",
					description: "Aimbot Tarkov: soft aim, FOV, and per-weapon Aimbot profiles. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Aimbot Tarkov",
					intro: "TarkovHack combine ESP wallhack, radar hack et tarkov aimbot indétectables pour Tarkov sur PC Windows. Aimbot Tarkov.",
					imageAlt: "Tarkov aimbot and soft aim controls on Windows PC",
					galleryTitle: "Aimbot Tarkov",
					heroImage: "/images/tarkov-cheats-aimbot.webp",
					ctaPrimary: "Acheter TarkovHack",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/tarkov-esp/",
					sections: [
						{
							h2: "Aimbot Tarkov",
							paragraphs: [
								"TarkovHack combine ESP wallhack, radar hack et tarkov aimbot indétectables pour Tarkov sur PC Windows. soft aim, FOV, and per-weapon Aimbot profiles.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye anti-cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs BattlEye anti-cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye anti-cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye anti-cheat.",
								"Contactez support@tarkovhack.com pour le support ou les demandes légales.",
							],
						},
					],
				},
				features: {
					title: "Fonctions | Liste complète des fonctions",
					description: "Fonctions: ESP, soft aim, radar controls. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Fonctions",
					intro: "TarkovHack combine ESP wallhack, radar hack et tarkov aimbot indétectables pour Tarkov sur PC Windows. Fonctions.",
					imageAlt: "TarkovHack features — ESP, soft aim, and radar screenshots",
					galleryTitle: "Fonctions",
					heroImage: "/images/tarkov-cheats-aimbot-view.webp",
					ctaPrimary: "Acheter TarkovHack",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Fonctions",
							paragraphs: [
								"TarkovHack combine ESP wallhack, radar hack et tarkov aimbot indétectables pour Tarkov sur PC Windows. ESP, soft aim, radar controls.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye anti-cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs BattlEye anti-cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye anti-cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye anti-cheat.",
								"Contactez support@tarkovhack.com pour le support ou les demandes légales.",
							],
						},
					],
				},
				pricing: {
					title: "Tarifs | Mensuel et à vie",
					description: "Tarifs: $35 monthly or $150 lifetime licenses. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Tarifs",
					intro: "TarkovHack combine ESP wallhack, radar hack et tarkov aimbot indétectables pour Tarkov sur PC Windows. Tarifs.",
					imageAlt: "TarkovHack store plans for monthly and lifetime licenses",
					galleryTitle: "Tarifs",
					heroImage: "/images/tarkov-cheats-raid.webp",
					ctaPrimary: "Acheter TarkovHack",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Tarifs",
							paragraphs: [
								"TarkovHack combine ESP wallhack, radar hack et tarkov aimbot indétectables pour Tarkov sur PC Windows. $35 monthly or $150 lifetime licenses.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye anti-cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs BattlEye anti-cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye anti-cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye anti-cheat.",
								"Contactez support@tarkovhack.com pour le support ou les demandes légales.",
							],
						},
					],
				},
				setup: {
					title: "Installation | Guide d'installation PC",
					description: "Installation: Windows PC activation and first-launch setup. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Installation",
					intro: "TarkovHack combine ESP wallhack, radar hack et tarkov aimbot indétectables pour Tarkov sur PC Windows. Installation.",
					imageAlt: "TarkovHack setup guide screenshot for Windows PC",
					galleryTitle: "Installation",
					heroImage: "/images/tarkov-cheats-radar.webp",
					ctaPrimary: "Acheter TarkovHack",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Installation",
							paragraphs: [
								"TarkovHack combine ESP wallhack, radar hack et tarkov aimbot indétectables pour Tarkov sur PC Windows. Windows PC activation and first-launch setup.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye anti-cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs BattlEye anti-cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye anti-cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye anti-cheat.",
								"Contactez support@tarkovhack.com pour le support ou les demandes légales.",
							],
						},
					],
				},
				updates: {
					title: "Mises à jour | Journal BattlEye",
					description: "Mises à jour: BattlEye patch status and rebuild notes. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Mises à jour",
					intro: "TarkovHack combine ESP wallhack, radar hack et tarkov aimbot indétectables pour Tarkov sur PC Windows. Mises à jour.",
					imageAlt: "TarkovHack live status after BattlEye and game patches",
					galleryTitle: "Mises à jour",
					heroImage: "/images/tarkov-cheats-esp.webp",
					ctaPrimary: "Acheter TarkovHack",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/tarkov-cheats/",
					sections: [
						{
							h2: "Mises à jour",
							paragraphs: [
								"TarkovHack combine ESP wallhack, radar hack et tarkov aimbot indétectables pour Tarkov sur PC Windows. BattlEye patch status and rebuild notes.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye anti-cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs BattlEye anti-cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye anti-cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye anti-cheat.",
								"Contactez support@tarkovhack.com pour le support ou les demandes légales.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Questions fréquentes",
					description: "FAQ: ESP, soft aim, delivery, and BattlEye questions. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "FAQ",
					intro: "TarkovHack combine ESP wallhack, radar hack et tarkov aimbot indétectables pour Tarkov sur PC Windows. FAQ.",
					imageAlt: "TarkovHack FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/tarkov-cheats-aimbot-view.webp",
					ctaPrimary: "Acheter TarkovHack",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"TarkovHack combine ESP wallhack, radar hack et tarkov aimbot indétectables pour Tarkov sur PC Windows. ESP, soft aim, delivery, and BattlEye questions.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye anti-cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs BattlEye anti-cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye anti-cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye anti-cheat.",
								"Contactez support@tarkovhack.com pour le support ou les demandes légales.",
							],
						},
					],
				},
				support: {
					title: "Support | Aide et contact",
					description: "Support: order help and license support contact. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Support",
					intro: "TarkovHack combine ESP wallhack, radar hack et tarkov aimbot indétectables pour Tarkov sur PC Windows. Support.",
					imageAlt: "TarkovHack support page for license and setup help",
					galleryTitle: "Support",
					heroImage: "/images/tarkov-cheats-raid.webp",
					ctaPrimary: "Acheter TarkovHack",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Support",
							paragraphs: [
								"TarkovHack combine ESP wallhack, radar hack et tarkov aimbot indétectables pour Tarkov sur PC Windows. order help and license support contact.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye anti-cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs BattlEye anti-cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye anti-cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye anti-cheat.",
								"Contactez support@tarkovhack.com pour le support ou les demandes légales.",
							],
						},
					],
				},
				undetected: {
					title: "Triches indétectables | Statut indétectable",
					description: "Triches indétectables: undetected maintenance after BattlEye anti-cheat patches. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Triches indétectables",
					intro: "TarkovHack combine ESP wallhack, radar hack et tarkov aimbot indétectables pour Tarkov sur PC Windows. Triches indétectables.",
					imageAlt: "TarkovHack undetected status overview for Windows PC",
					galleryTitle: "Triches indétectables",
					heroImage: "/images/tarkov-cheats-wallhack.webp",
					ctaPrimary: "Acheter TarkovHack",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/tarkov-cheats/",
					sections: [
						{
							h2: "Triches indétectables",
							paragraphs: [
								"TarkovHack combine ESP wallhack, radar hack et tarkov aimbot indétectables pour Tarkov sur PC Windows. undetected maintenance after BattlEye anti-cheat patches.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye anti-cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs BattlEye anti-cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye anti-cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye anti-cheat.",
								"Contactez support@tarkovhack.com pour le support ou les demandes légales.",
							],
						},
					],
				},
				wallhack: {
					title: "Wallhack Tarkov | Visibilité ESP",
					description: "Wallhack Tarkov: wallhack ESP for players, loot, and distance. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Wallhack Tarkov",
					intro: "TarkovHack combine ESP wallhack, radar hack et tarkov aimbot indétectables pour Tarkov sur PC Windows. Wallhack Tarkov.",
					imageAlt: "Tarkov wallhack visibility through walls in a raid",
					galleryTitle: "Wallhack Tarkov",
					heroImage: "/images/tarkov-cheats-wallhack.webp",
					ctaPrimary: "Acheter TarkovHack",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/tarkov-esp/",
					sections: [
						{
							h2: "Wallhack Tarkov",
							paragraphs: [
								"TarkovHack combine ESP wallhack, radar hack et tarkov aimbot indétectables pour Tarkov sur PC Windows. wallhack ESP for players, loot, and distance.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye anti-cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs BattlEye anti-cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye anti-cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye anti-cheat.",
								"Contactez support@tarkovhack.com pour le support ou les demandes légales.",
							],
						},
					],
				},
				radar: {
					title: "Radar hack | Radar 2D des menaces",
					description: "Radar hack: 2D radar cues for flanks and rotations. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Radar hack",
					intro: "TarkovHack combine ESP wallhack, radar hack et tarkov aimbot indétectables pour Tarkov sur PC Windows. Radar hack.",
					imageAlt: "Tarkov 2D radar overlay showing nearby threats",
					galleryTitle: "Radar hack",
					heroImage: "/images/tarkov-cheats-radar.webp",
					ctaPrimary: "Acheter TarkovHack",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/tarkov-esp/",
					sections: [
						{
							h2: "Radar hack",
							paragraphs: [
								"TarkovHack combine ESP wallhack, radar hack et tarkov aimbot indétectables pour Tarkov sur PC Windows. 2D radar cues for flanks and rotations.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye anti-cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs BattlEye anti-cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye anti-cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye anti-cheat.",
								"Contactez support@tarkovhack.com pour le support ou les demandes légales.",
							],
						},
					],
				},
				battleye: {
					title: "Bypass BattlEye | Maintenance des patchs",
					description: "Bypass BattlEye: how BattlEye updates are handled for Escape from Tarkov hacks. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Bypass BattlEye",
					intro: "TarkovHack combine ESP wallhack, radar hack et tarkov aimbot indétectables pour Tarkov sur PC Windows. Bypass BattlEye.",
					imageAlt: "TarkovHack maintenance after a BattlEye patch",
					galleryTitle: "Bypass BattlEye",
					heroImage: "/images/tarkov-cheats-aimbot.webp",
					ctaPrimary: "Acheter TarkovHack",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Bypass BattlEye",
							paragraphs: [
								"TarkovHack combine ESP wallhack, radar hack et tarkov aimbot indétectables pour Tarkov sur PC Windows. how BattlEye updates are handled for Escape from Tarkov hacks.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye anti-cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs BattlEye anti-cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye anti-cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye anti-cheat.",
								"Contactez support@tarkovhack.com pour le support ou les demandes légales.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Triches Tarkov 2026 | Guide acheteur",
					description: "Triches Tarkov 2026: 2026 TarkovHack checklist before checkout. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Triches Tarkov 2026",
					intro: "TarkovHack combine ESP wallhack, radar hack et tarkov aimbot indétectables pour Tarkov sur PC Windows. Triches Tarkov 2026.",
					imageAlt: "TarkovHack product overview for Escape from Tarkov",
					galleryTitle: "Triches Tarkov 2026",
					heroImage: "/images/tarkov-cheats-esp.webp",
					ctaPrimary: "Acheter TarkovHack",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/tarkov-cheats/",
					sections: [
						{
							h2: "Triches Tarkov 2026",
							paragraphs: [
								"TarkovHack combine ESP wallhack, radar hack et tarkov aimbot indétectables pour Tarkov sur PC Windows. 2026 TarkovHack checklist before checkout.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye anti-cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs BattlEye anti-cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye anti-cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye anti-cheat.",
								"Contactez support@tarkovhack.com pour le support ou les demandes légales.",
							],
						},
					],
				},
				hacks: {
					title: "Triches Tarkov | Guide ESP et Aimbot",
					description: "Triches Tarkov: the Escape from Tarkov hacks pillar for ESP and Aimbot. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Triches Tarkov",
					intro: "TarkovHack combine ESP wallhack, radar hack et tarkov aimbot indétectables pour Tarkov sur PC Windows. Triches Tarkov.",
					imageAlt: "TarkovHack product page — ESP, aimbot, and radar",
					galleryTitle: "Triches Tarkov",
					heroImage: "/images/tarkov-cheats-raid.webp",
					ctaPrimary: "Acheter TarkovHack",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Triches Tarkov",
							paragraphs: [
								"TarkovHack combine ESP wallhack, radar hack et tarkov aimbot indétectables pour Tarkov sur PC Windows. the Escape from Tarkov hacks pillar for ESP and Aimbot.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye anti-cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs BattlEye anti-cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye anti-cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye anti-cheat.",
								"Contactez support@tarkovhack.com pour le support ou les demandes légales.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Téléchargement TarkovHack | Accès instantané",
					description: "Téléchargement TarkovHack: digital license download after payment. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Téléchargement TarkovHack",
					intro: "TarkovHack combine ESP wallhack, radar hack et tarkov aimbot indétectables pour Tarkov sur PC Windows. Téléchargement TarkovHack.",
					imageAlt: "TarkovHack download and install delivery flow",
					galleryTitle: "Téléchargement TarkovHack",
					heroImage: "/images/tarkov-cheats-raid.webp",
					ctaPrimary: "Acheter TarkovHack",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Téléchargement TarkovHack",
							paragraphs: [
								"TarkovHack combine ESP wallhack, radar hack et tarkov aimbot indétectables pour Tarkov sur PC Windows. digital license download after payment.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye anti-cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs BattlEye anti-cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye anti-cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye anti-cheat.",
								"Contactez support@tarkovhack.com pour le support ou les demandes légales.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Menu mod Tarkov | Contrôles en jeu",
					description: "Menu mod Tarkov: in-client ESP and soft aim toggles. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Menu mod Tarkov",
					intro: "TarkovHack combine ESP wallhack, radar hack et tarkov aimbot indétectables pour Tarkov sur PC Windows. Menu mod Tarkov.",
					imageAlt: "TarkovHack in-game menu controls",
					galleryTitle: "Menu mod Tarkov",
					heroImage: "/images/tarkov-cheats-radar.webp",
					ctaPrimary: "Acheter TarkovHack",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Menu mod Tarkov",
							paragraphs: [
								"TarkovHack combine ESP wallhack, radar hack et tarkov aimbot indétectables pour Tarkov sur PC Windows. in-client ESP and soft aim toggles.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye anti-cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs BattlEye anti-cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye anti-cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye anti-cheat.",
								"Contactez support@tarkovhack.com pour le support ou les demandes légales.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Soft aim Tarkov | Réglages soft aim",
					description: "Soft aim Tarkov: smooth soft aim settings for Windows PC. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Soft aim Tarkov",
					intro: "TarkovHack combine ESP wallhack, radar hack et tarkov aimbot indétectables pour Tarkov sur PC Windows. Soft aim Tarkov.",
					imageAlt: "Tarkov soft aim FOV and smoothness settings",
					galleryTitle: "Soft aim Tarkov",
					heroImage: "/images/tarkov-cheats-aimbot-view.webp",
					ctaPrimary: "Acheter TarkovHack",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/tarkov-aimbot/",
					sections: [
						{
							h2: "Soft aim Tarkov",
							paragraphs: [
								"TarkovHack combine ESP wallhack, radar hack et tarkov aimbot indétectables pour Tarkov sur PC Windows. smooth soft aim settings for Windows PC.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye anti-cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs BattlEye anti-cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye anti-cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye anti-cheat.",
								"Contactez support@tarkovhack.com pour le support ou les demandes légales.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Meilleures triches Tarkov | Checklist acheteur",
					description: "Meilleures triches Tarkov: what to compare before buying TarkovHack. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Meilleures triches Tarkov",
					intro: "TarkovHack combine ESP wallhack, radar hack et tarkov aimbot indétectables pour Tarkov sur PC Windows. Meilleures triches Tarkov.",
					imageAlt: "TarkovHack overview for Escape from Tarkov on PC",
					galleryTitle: "Meilleures triches Tarkov",
					heroImage: "/images/tarkov-cheats-esp.webp",
					ctaPrimary: "Acheter TarkovHack",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Meilleures triches Tarkov",
							paragraphs: [
								"TarkovHack combine ESP wallhack, radar hack et tarkov aimbot indétectables pour Tarkov sur PC Windows. what to compare before buying TarkovHack.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye anti-cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs BattlEye anti-cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye anti-cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye anti-cheat.",
								"Contactez support@tarkovhack.com pour le support ou les demandes légales.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Hack aimbot Tarkov | Assistance soft aim",
					description: "Hack aimbot Tarkov: undetected Aimbot hack assist for Escape from Tarkov. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Hack aimbot Tarkov",
					intro: "TarkovHack combine ESP wallhack, radar hack et tarkov aimbot indétectables pour Tarkov sur PC Windows. Hack aimbot Tarkov.",
					imageAlt: "Tarkov aimbot hack controls and bone priority",
					galleryTitle: "Hack aimbot Tarkov",
					heroImage: "/images/tarkov-cheats-aimbot-view.webp",
					ctaPrimary: "Acheter TarkovHack",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/tarkov-aimbot/",
					sections: [
						{
							h2: "Hack aimbot Tarkov",
							paragraphs: [
								"TarkovHack combine ESP wallhack, radar hack et tarkov aimbot indétectables pour Tarkov sur PC Windows. undetected Aimbot hack assist for Escape from Tarkov.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye anti-cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs BattlEye anti-cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye anti-cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye anti-cheat.",
								"Contactez support@tarkovhack.com pour le support ou les demandes légales.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Hack ESP Tarkov | Boîtes et loot",
					description: "Hack ESP Tarkov: ESP hack boxes, loot pins, and distance. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Hack ESP Tarkov",
					intro: "TarkovHack combine ESP wallhack, radar hack et tarkov aimbot indétectables pour Tarkov sur PC Windows. Hack ESP Tarkov.",
					imageAlt: "Tarkov ESP hack boxes and loot markers",
					galleryTitle: "Hack ESP Tarkov",
					heroImage: "/images/tarkov-cheats-wallhack.webp",
					ctaPrimary: "Acheter TarkovHack",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/tarkov-esp/",
					sections: [
						{
							h2: "Hack ESP Tarkov",
							paragraphs: [
								"TarkovHack combine ESP wallhack, radar hack et tarkov aimbot indétectables pour Tarkov sur PC Windows. ESP hack boxes, loot pins, and distance.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye anti-cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs BattlEye anti-cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye anti-cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye anti-cheat.",
								"Contactez support@tarkovhack.com pour le support ou les demandes légales.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Unlock all Tarkov | Ce que ça signifie",
					description: "Unlock all Tarkov: unlock-all searches vs real ESP and Aimbot tools. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Unlock all Tarkov",
					intro: "TarkovHack combine ESP wallhack, radar hack et tarkov aimbot indétectables pour Tarkov sur PC Windows. Unlock all Tarkov.",
					imageAlt: "TarkovHack license features overview",
					galleryTitle: "Unlock all Tarkov",
					heroImage: "/images/tarkov-cheats-radar.webp",
					ctaPrimary: "Acheter TarkovHack",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unlock all Tarkov",
							paragraphs: [
								"TarkovHack combine ESP wallhack, radar hack et tarkov aimbot indétectables pour Tarkov sur PC Windows. unlock-all searches vs real ESP and Aimbot tools.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye anti-cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs BattlEye anti-cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye anti-cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye anti-cheat.",
								"Contactez support@tarkovhack.com pour le support ou les demandes légales.",
							],
						},
					],
				},
				privacy: {
					title: "Politique de confidentialité | TarkovHack",
					description: "Politique de confidentialité for TarkovHack — ESP wallhack, Aimbot, PC Windows.",
					h1: "Politique de confidentialité",
					intro: "TarkovHack combine ESP wallhack, radar hack et tarkov aimbot indétectables pour Tarkov sur PC Windows. Politique de confidentialité for tarkovhack.com and Escape from Tarkov licenses.",
					imageAlt: "TarkovHack",
					galleryTitle: "TarkovHack",
					heroImage: "/images/tarkov-cheats-aimbot.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Lire conditions",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Informations collectées",
							paragraphs: [
								"TarkovHack combine ESP wallhack, radar hack et tarkov aimbot indétectables pour Tarkov sur PC Windows. Contact email, Zadeyo order references, and basic site security data.",
								"Payment details are processed by Zadeyo checkout — not stored on tarkovhack.com.",
							],
						},
						{
							h2: "Utilisation",
							paragraphs: [
								"TarkovHack combine ESP wallhack, radar hack et tarkov aimbot indétectables pour Tarkov sur PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Consultez Updates après les patchs BattlEye anti-cheat. Aucune triche ne garantit un statut indétectable permanent.",
							],
						},
						{
							h2: "Vos droits",
							paragraphs: [
								"Contactez support@tarkovhack.com pour le support ou les demandes légales.",
								"Email: support@tarkovhack.com",
							],
						},
					],
				},
				refund: {
					title: "Politique de remboursement | TarkovHack",
					description: "Politique de remboursement for TarkovHack — ESP wallhack, Aimbot, PC Windows.",
					h1: "Politique de remboursement",
					intro: "TarkovHack combine ESP wallhack, radar hack et tarkov aimbot indétectables pour Tarkov sur PC Windows. Politique de remboursement for tarkovhack.com and Escape from Tarkov licenses.",
					imageAlt: "TarkovHack",
					galleryTitle: "TarkovHack",
					heroImage: "/images/tarkov-cheats-raid.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Livraison numérique",
							paragraphs: [
								"TarkovHack combine ESP wallhack, radar hack et tarkov aimbot indétectables pour Tarkov sur PC Windows. Contact email, Zadeyo order references, and basic site security data.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye anti-cheat.",
							],
						},
						{
							h2: "Approbation",
							paragraphs: [
								"TarkovHack combine ESP wallhack, radar hack et tarkov aimbot indétectables pour Tarkov sur PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Consultez Updates après les patchs BattlEye anti-cheat. Aucune triche ne garantit un statut indétectable permanent.",
							],
						},
						{
							h2: "Comment demander",
							paragraphs: [
								"Contactez support@tarkovhack.com pour le support ou les demandes légales.",
								"Email: support@tarkovhack.com",
							],
						},
					],
				},
				terms: {
					title: "Conditions d'utilisation | TarkovHack",
					description: "Conditions d'utilisation for TarkovHack — ESP wallhack, Aimbot, PC Windows.",
					h1: "Conditions d'utilisation",
					intro: "TarkovHack combine ESP wallhack, radar hack et tarkov aimbot indétectables pour Tarkov sur PC Windows. Conditions d'utilisation for tarkovhack.com and Escape from Tarkov licenses.",
					imageAlt: "TarkovHack",
					galleryTitle: "TarkovHack",
					heroImage: "/images/tarkov-cheats-aimbot-view.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Acceptation",
							paragraphs: [
								"TarkovHack combine ESP wallhack, radar hack et tarkov aimbot indétectables pour Tarkov sur PC Windows. Contact email, Zadeyo order references, and basic site security data.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance BattlEye anti-cheat.",
							],
						},
						{
							h2: "Risques",
							paragraphs: [
								"TarkovHack combine ESP wallhack, radar hack et tarkov aimbot indétectables pour Tarkov sur PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "Modifications",
							paragraphs: [
								"Contactez support@tarkovhack.com pour le support ou les demandes légales.",
								"Email: support@tarkovhack.com",
							],
						},
					],
				},
			},
		},
		de: {
			ui: {
				nav: {
					home: "Start",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Features",
					pricing: "Preise",
					setup: "Setup",
					updates: "Updates",
					faq: "FAQ",
					buyNow: "Kaufen",
				},
				hero: {
					accent: "Undetected TarkovHack",
					accentShort: "TarkovHack",
					subtitle: "ESP Wallhack, Radar Hack und Aimbot für Tarkov auf Windows PC — BattlEye anti-cheat-Wartung inklusive.",
					subtitleShort: "ESP, Radar & Aimbot für Tarkov PC",
					buyNow: "Jetzt kaufen",
					seeFeatures: "Features ansehen",
				},
				trust: {
					status: "Online",
					statusNote: "TarkovHack Paket ist live für Tarkov auf Windows PC.",
					statusShort: "Live",
					delivery: "Sofortige digitale Lieferung",
					platform: "Windows 10 & 11",
					antiCheat: "BattlEye anti-cheat-Wartung unterstützt",
					antiCheatShort: "BattlEye anti-cheat Support",
				},
				product: {
					title: "TarkovHack",
					addToCart: "In den Warenkorb",
					monthly: "Monatlich",
					lifetime: "Lifetime",
					available: "Jetzt verfügbar",
					gameBadge: "Tarkov",
					platformBadge: "Windows PC",
					statusBadge: "Undetected Paket",
				},
				reviews: {
					title: "Was Spieler sagen",
					subtitle: "Aktuelles Feedback von TarkovHack Käufern",
					outOf: "von 5",
					countLabel: "Bewertungen",
				},
				common: {
					buyNow: "Jetzt kaufen",
					readGuide: "Guide lesen",
					language: "Sprache",
					officialLanguageNote: "Englisch ist die offizielle Sprache. Andere Locales sind für globales SEO übersetzt.",
					relatedPages: "Verwandte Seiten",
				},
				footer: {
					explore: "Entdecken",
					help: "Hilfe & Rechtliches",
					tagline: "Undetected ESP, Wallhack, Radar und Aimbot für Tarkov — Checkout über Zadeyo.",
				},
				images: {
					hero: "TarkovHack hero — ESP and aimbot overlay in Escape from Tarkov",
					espWallhack: "Wallhack outlines showing PMCs and Scavs through walls",
					aimbotCombat: "Soft aim assist overlay during an Escape from Tarkov raid",
					squadFight: "TarkovHack combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Tarkov raid",
					headerArt: "Aimbot view and bone priority controls for Tarkov",
					cheatsPackage: "2D radar threat overlay for Escape from Tarkov",
					rebootFight: "Aimbot assist during a Tarkov firefight",
					battleRoyale: "TarkovHack in-raid overview for Windows PC",
					battleRoyaleIsland: "ESP markers for loot and extracts in Tarkov",
				},
			},
			pages: {
				home: {
					title: "TarkovHack 2026 | ESP, Wallhack & Aimbot",
					description: "Undetected TarkovHack für Escape from Tarkov auf PC. ESP Wallhack, Radar Hack und Aimbot mit BattlEye anti-cheat-Wartung. Sofortige digitale Lieferung.",
					h1: "TarkovHack — Undetected ESP, Wallhack & Aimbot",
					intro: "Undetected Windows PC Paket für Escape from Tarkov: ESP Wallhack, Radar und Aimbot mit BattlEye anti-cheat-Wartung nach jedem Patch.",
					imageAlt: "Tarkov ESP player tags hack",
					galleryTitle: "TarkovHack Galerie — ESP, Aimbot und Wallhack",
					heroImage: "/images/tarkov-cheats-esp.webp",
					ctaPrimary: "TarkovHack kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Warum TarkovHack 2026 führt",
							paragraphs: [
								"TarkovHack bündelt ESP wallhack, radar hack und tarkov aimbot als undetected Paket für Tarkov auf Windows PC. Ideal um feindliche Squads in BR und scav-run zu lesen.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye anti-cheat-Wartung.",
							],
						},
						{
							h2: "ESP Wallhack, Radar und Aimbot in einer Lizenz",
							paragraphs: [
								"TarkovHack bündelt ESP wallhack, radar hack und tarkov aimbot als undetected Paket für Tarkov auf Windows PC. Eine Lizenz statt separater Tools.",
								"Updates-Seite nach BattlEye anti-cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
							],
						},
					],
				},
				"tarkov-esp": {
					title: "Tarkov ESP | Spielerboxen & Wallhack",
					description: "Tarkov ESP: player boxes, loot markers, and wallhack overlays. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Tarkov ESP",
					intro: "TarkovHack bündelt ESP wallhack, radar hack und tarkov aimbot als undetected Paket für Tarkov auf Windows PC. Tarkov ESP.",
					imageAlt: "Tarkov ESP player boxes and distance readouts in a raid",
					galleryTitle: "Tarkov ESP",
					heroImage: "/images/tarkov-cheats-radar.webp",
					ctaPrimary: "TarkovHack kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/tarkov-cheats/",
					sections: [
						{
							h2: "Tarkov ESP",
							paragraphs: [
								"TarkovHack bündelt ESP wallhack, radar hack und tarkov aimbot als undetected Paket für Tarkov auf Windows PC. player boxes, loot markers, and wallhack overlays.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye anti-cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach BattlEye anti-cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye anti-cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye anti-cheat-Wartung.",
								"support@tarkovhack.com für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				"tarkov-aimbot": {
					title: "Tarkov Aimbot | Soft-Aim Steuerung",
					description: "Tarkov Aimbot: soft aim, FOV, and per-weapon Aimbot profiles. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Tarkov Aimbot",
					intro: "TarkovHack bündelt ESP wallhack, radar hack und tarkov aimbot als undetected Paket für Tarkov auf Windows PC. Tarkov Aimbot.",
					imageAlt: "Tarkov aimbot and soft aim controls on Windows PC",
					galleryTitle: "Tarkov Aimbot",
					heroImage: "/images/tarkov-cheats-aimbot.webp",
					ctaPrimary: "TarkovHack kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/tarkov-esp/",
					sections: [
						{
							h2: "Tarkov Aimbot",
							paragraphs: [
								"TarkovHack bündelt ESP wallhack, radar hack und tarkov aimbot als undetected Paket für Tarkov auf Windows PC. soft aim, FOV, and per-weapon Aimbot profiles.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye anti-cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach BattlEye anti-cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye anti-cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye anti-cheat-Wartung.",
								"support@tarkovhack.com für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				features: {
					title: "Features | Vollständige Feature-Liste",
					description: "Features: ESP, soft aim, radar controls. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Features",
					intro: "TarkovHack bündelt ESP wallhack, radar hack und tarkov aimbot als undetected Paket für Tarkov auf Windows PC. Features.",
					imageAlt: "TarkovHack features — ESP, soft aim, and radar screenshots",
					galleryTitle: "Features",
					heroImage: "/images/tarkov-cheats-aimbot-view.webp",
					ctaPrimary: "TarkovHack kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Features",
							paragraphs: [
								"TarkovHack bündelt ESP wallhack, radar hack und tarkov aimbot als undetected Paket für Tarkov auf Windows PC. ESP, soft aim, radar controls.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye anti-cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach BattlEye anti-cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye anti-cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye anti-cheat-Wartung.",
								"support@tarkovhack.com für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				pricing: {
					title: "Preise | Monatlich & Lifetime",
					description: "Preise: $35 monthly or $150 lifetime licenses. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Preise",
					intro: "TarkovHack bündelt ESP wallhack, radar hack und tarkov aimbot als undetected Paket für Tarkov auf Windows PC. Preise.",
					imageAlt: "TarkovHack store plans for monthly and lifetime licenses",
					galleryTitle: "Preise",
					heroImage: "/images/tarkov-cheats-raid.webp",
					ctaPrimary: "TarkovHack kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Preise",
							paragraphs: [
								"TarkovHack bündelt ESP wallhack, radar hack und tarkov aimbot als undetected Paket für Tarkov auf Windows PC. $35 monthly or $150 lifetime licenses.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye anti-cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach BattlEye anti-cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye anti-cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye anti-cheat-Wartung.",
								"support@tarkovhack.com für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				setup: {
					title: "Setup | PC Setup-Anleitung",
					description: "Setup: Windows PC activation and first-launch setup. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Setup",
					intro: "TarkovHack bündelt ESP wallhack, radar hack und tarkov aimbot als undetected Paket für Tarkov auf Windows PC. Setup.",
					imageAlt: "TarkovHack setup guide screenshot for Windows PC",
					galleryTitle: "Setup",
					heroImage: "/images/tarkov-cheats-radar.webp",
					ctaPrimary: "TarkovHack kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Setup",
							paragraphs: [
								"TarkovHack bündelt ESP wallhack, radar hack und tarkov aimbot als undetected Paket für Tarkov auf Windows PC. Windows PC activation and first-launch setup.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye anti-cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach BattlEye anti-cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye anti-cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye anti-cheat-Wartung.",
								"support@tarkovhack.com für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				updates: {
					title: "Updates | BattlEye Wartungslog",
					description: "Updates: BattlEye patch status and rebuild notes. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Updates",
					intro: "TarkovHack bündelt ESP wallhack, radar hack und tarkov aimbot als undetected Paket für Tarkov auf Windows PC. Updates.",
					imageAlt: "TarkovHack live status after BattlEye and game patches",
					galleryTitle: "Updates",
					heroImage: "/images/tarkov-cheats-esp.webp",
					ctaPrimary: "TarkovHack kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/tarkov-cheats/",
					sections: [
						{
							h2: "Updates",
							paragraphs: [
								"TarkovHack bündelt ESP wallhack, radar hack und tarkov aimbot als undetected Paket für Tarkov auf Windows PC. BattlEye patch status and rebuild notes.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye anti-cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach BattlEye anti-cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye anti-cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye anti-cheat-Wartung.",
								"support@tarkovhack.com für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Häufige Fragen",
					description: "FAQ: ESP, soft aim, delivery, and BattlEye questions. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "FAQ",
					intro: "TarkovHack bündelt ESP wallhack, radar hack und tarkov aimbot als undetected Paket für Tarkov auf Windows PC. FAQ.",
					imageAlt: "TarkovHack FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/tarkov-cheats-aimbot-view.webp",
					ctaPrimary: "TarkovHack kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"TarkovHack bündelt ESP wallhack, radar hack und tarkov aimbot als undetected Paket für Tarkov auf Windows PC. ESP, soft aim, delivery, and BattlEye questions.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye anti-cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach BattlEye anti-cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye anti-cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye anti-cheat-Wartung.",
								"support@tarkovhack.com für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				support: {
					title: "Support | Hilfe & Kontakt",
					description: "Support: order help and license support contact. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Support",
					intro: "TarkovHack bündelt ESP wallhack, radar hack und tarkov aimbot als undetected Paket für Tarkov auf Windows PC. Support.",
					imageAlt: "TarkovHack support page for license and setup help",
					galleryTitle: "Support",
					heroImage: "/images/tarkov-cheats-raid.webp",
					ctaPrimary: "TarkovHack kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Support",
							paragraphs: [
								"TarkovHack bündelt ESP wallhack, radar hack und tarkov aimbot als undetected Paket für Tarkov auf Windows PC. order help and license support contact.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye anti-cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach BattlEye anti-cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye anti-cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye anti-cheat-Wartung.",
								"support@tarkovhack.com für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				undetected: {
					title: "Undetected Cheats | Undetected Status",
					description: "Undetected Cheats: undetected maintenance after BattlEye anti-cheat patches. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Undetected Cheats",
					intro: "TarkovHack bündelt ESP wallhack, radar hack und tarkov aimbot als undetected Paket für Tarkov auf Windows PC. Undetected Cheats.",
					imageAlt: "TarkovHack undetected status overview for Windows PC",
					galleryTitle: "Undetected Cheats",
					heroImage: "/images/tarkov-cheats-wallhack.webp",
					ctaPrimary: "TarkovHack kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/tarkov-cheats/",
					sections: [
						{
							h2: "Undetected Cheats",
							paragraphs: [
								"TarkovHack bündelt ESP wallhack, radar hack und tarkov aimbot als undetected Paket für Tarkov auf Windows PC. undetected maintenance after BattlEye anti-cheat patches.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye anti-cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach BattlEye anti-cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye anti-cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye anti-cheat-Wartung.",
								"support@tarkovhack.com für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				wallhack: {
					title: "Tarkov Wallhack | ESP Sichtbarkeit",
					description: "Tarkov Wallhack: wallhack ESP for players, loot, and distance. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Tarkov Wallhack",
					intro: "TarkovHack bündelt ESP wallhack, radar hack und tarkov aimbot als undetected Paket für Tarkov auf Windows PC. Tarkov Wallhack.",
					imageAlt: "Tarkov wallhack visibility through walls in a raid",
					galleryTitle: "Tarkov Wallhack",
					heroImage: "/images/tarkov-cheats-wallhack.webp",
					ctaPrimary: "TarkovHack kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/tarkov-esp/",
					sections: [
						{
							h2: "Tarkov Wallhack",
							paragraphs: [
								"TarkovHack bündelt ESP wallhack, radar hack und tarkov aimbot als undetected Paket für Tarkov auf Windows PC. wallhack ESP for players, loot, and distance.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye anti-cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach BattlEye anti-cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye anti-cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye anti-cheat-Wartung.",
								"support@tarkovhack.com für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				radar: {
					title: "Radar Hack | 2D Bedrohungsradar",
					description: "Radar Hack: 2D radar cues for flanks and rotations. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Radar Hack",
					intro: "TarkovHack bündelt ESP wallhack, radar hack und tarkov aimbot als undetected Paket für Tarkov auf Windows PC. Radar Hack.",
					imageAlt: "Tarkov 2D radar overlay showing nearby threats",
					galleryTitle: "Radar Hack",
					heroImage: "/images/tarkov-cheats-radar.webp",
					ctaPrimary: "TarkovHack kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/tarkov-esp/",
					sections: [
						{
							h2: "Radar Hack",
							paragraphs: [
								"TarkovHack bündelt ESP wallhack, radar hack und tarkov aimbot als undetected Paket für Tarkov auf Windows PC. 2D radar cues for flanks and rotations.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye anti-cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach BattlEye anti-cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye anti-cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye anti-cheat-Wartung.",
								"support@tarkovhack.com für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				battleye: {
					title: "BattlEye Bypass | Patch-Wartung",
					description: "BattlEye Bypass: how BattlEye updates are handled for Escape from Tarkov hacks. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "BattlEye Bypass",
					intro: "TarkovHack bündelt ESP wallhack, radar hack und tarkov aimbot als undetected Paket für Tarkov auf Windows PC. BattlEye Bypass.",
					imageAlt: "TarkovHack maintenance after a BattlEye patch",
					galleryTitle: "BattlEye Bypass",
					heroImage: "/images/tarkov-cheats-aimbot.webp",
					ctaPrimary: "TarkovHack kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "BattlEye Bypass",
							paragraphs: [
								"TarkovHack bündelt ESP wallhack, radar hack und tarkov aimbot als undetected Paket für Tarkov auf Windows PC. how BattlEye updates are handled for Escape from Tarkov hacks.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye anti-cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach BattlEye anti-cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye anti-cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye anti-cheat-Wartung.",
								"support@tarkovhack.com für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "TarkovHack 2026 | Käuferleitfaden",
					description: "TarkovHack 2026: 2026 TarkovHack checklist before checkout. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "TarkovHack 2026",
					intro: "TarkovHack bündelt ESP wallhack, radar hack und tarkov aimbot als undetected Paket für Tarkov auf Windows PC. TarkovHack 2026.",
					imageAlt: "TarkovHack product overview for Escape from Tarkov",
					galleryTitle: "TarkovHack 2026",
					heroImage: "/images/tarkov-cheats-esp.webp",
					ctaPrimary: "TarkovHack kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/tarkov-cheats/",
					sections: [
						{
							h2: "TarkovHack 2026",
							paragraphs: [
								"TarkovHack bündelt ESP wallhack, radar hack und tarkov aimbot als undetected Paket für Tarkov auf Windows PC. 2026 TarkovHack checklist before checkout.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye anti-cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach BattlEye anti-cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye anti-cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye anti-cheat-Wartung.",
								"support@tarkovhack.com für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				hacks: {
					title: "TarkovHack | ESP Aimbot Guide",
					description: "TarkovHack: the Escape from Tarkov hacks pillar for ESP and Aimbot. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "TarkovHack",
					intro: "TarkovHack bündelt ESP wallhack, radar hack und tarkov aimbot als undetected Paket für Tarkov auf Windows PC. TarkovHack.",
					imageAlt: "TarkovHack product page — ESP, aimbot, and radar",
					galleryTitle: "TarkovHack",
					heroImage: "/images/tarkov-cheats-raid.webp",
					ctaPrimary: "TarkovHack kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "TarkovHack",
							paragraphs: [
								"TarkovHack bündelt ESP wallhack, radar hack und tarkov aimbot als undetected Paket für Tarkov auf Windows PC. the Escape from Tarkov hacks pillar for ESP and Aimbot.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye anti-cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach BattlEye anti-cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye anti-cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye anti-cheat-Wartung.",
								"support@tarkovhack.com für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Tarkov Cheat Download | Sofortzugang",
					description: "Tarkov Cheat Download: digital license download after payment. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Tarkov Cheat Download",
					intro: "TarkovHack bündelt ESP wallhack, radar hack und tarkov aimbot als undetected Paket für Tarkov auf Windows PC. Tarkov Cheat Download.",
					imageAlt: "TarkovHack download and install delivery flow",
					galleryTitle: "Tarkov Cheat Download",
					heroImage: "/images/tarkov-cheats-raid.webp",
					ctaPrimary: "TarkovHack kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Tarkov Cheat Download",
							paragraphs: [
								"TarkovHack bündelt ESP wallhack, radar hack und tarkov aimbot als undetected Paket für Tarkov auf Windows PC. digital license download after payment.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye anti-cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach BattlEye anti-cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye anti-cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye anti-cheat-Wartung.",
								"support@tarkovhack.com für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Tarkov Mod-Menü | In-Game Toggles",
					description: "Tarkov Mod-Menü: in-client ESP and soft aim toggles. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Tarkov Mod-Menü",
					intro: "TarkovHack bündelt ESP wallhack, radar hack und tarkov aimbot als undetected Paket für Tarkov auf Windows PC. Tarkov Mod-Menü.",
					imageAlt: "TarkovHack in-game menu controls",
					galleryTitle: "Tarkov Mod-Menü",
					heroImage: "/images/tarkov-cheats-radar.webp",
					ctaPrimary: "TarkovHack kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Tarkov Mod-Menü",
							paragraphs: [
								"TarkovHack bündelt ESP wallhack, radar hack und tarkov aimbot als undetected Paket für Tarkov auf Windows PC. in-client ESP and soft aim toggles.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye anti-cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach BattlEye anti-cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye anti-cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye anti-cheat-Wartung.",
								"support@tarkovhack.com für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Tarkov Soft Aim | Soft-Aim Einstellungen",
					description: "Tarkov Soft Aim: smooth soft aim settings for Windows PC. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Tarkov Soft Aim",
					intro: "TarkovHack bündelt ESP wallhack, radar hack und tarkov aimbot als undetected Paket für Tarkov auf Windows PC. Tarkov Soft Aim.",
					imageAlt: "Tarkov soft aim FOV and smoothness settings",
					galleryTitle: "Tarkov Soft Aim",
					heroImage: "/images/tarkov-cheats-aimbot-view.webp",
					ctaPrimary: "TarkovHack kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/tarkov-aimbot/",
					sections: [
						{
							h2: "Tarkov Soft Aim",
							paragraphs: [
								"TarkovHack bündelt ESP wallhack, radar hack und tarkov aimbot als undetected Paket für Tarkov auf Windows PC. smooth soft aim settings for Windows PC.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye anti-cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach BattlEye anti-cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye anti-cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye anti-cheat-Wartung.",
								"support@tarkovhack.com für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Beste TarkovHack | Käufer-Checkliste",
					description: "Beste TarkovHack: what to compare before buying TarkovHack. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Beste TarkovHack",
					intro: "TarkovHack bündelt ESP wallhack, radar hack und tarkov aimbot als undetected Paket für Tarkov auf Windows PC. Beste TarkovHack.",
					imageAlt: "TarkovHack overview for Escape from Tarkov on PC",
					galleryTitle: "Beste TarkovHack",
					heroImage: "/images/tarkov-cheats-esp.webp",
					ctaPrimary: "TarkovHack kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Beste TarkovHack",
							paragraphs: [
								"TarkovHack bündelt ESP wallhack, radar hack und tarkov aimbot als undetected Paket für Tarkov auf Windows PC. what to compare before buying TarkovHack.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye anti-cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach BattlEye anti-cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye anti-cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye anti-cheat-Wartung.",
								"support@tarkovhack.com für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Tarkov Aimbot Hack | Soft-Aim Assist",
					description: "Tarkov Aimbot Hack: undetected Aimbot hack assist for Escape from Tarkov. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Tarkov Aimbot Hack",
					intro: "TarkovHack bündelt ESP wallhack, radar hack und tarkov aimbot als undetected Paket für Tarkov auf Windows PC. Tarkov Aimbot Hack.",
					imageAlt: "Tarkov aimbot hack controls and bone priority",
					galleryTitle: "Tarkov Aimbot Hack",
					heroImage: "/images/tarkov-cheats-aimbot-view.webp",
					ctaPrimary: "TarkovHack kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/tarkov-aimbot/",
					sections: [
						{
							h2: "Tarkov Aimbot Hack",
							paragraphs: [
								"TarkovHack bündelt ESP wallhack, radar hack und tarkov aimbot als undetected Paket für Tarkov auf Windows PC. undetected Aimbot hack assist for Escape from Tarkov.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye anti-cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach BattlEye anti-cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye anti-cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye anti-cheat-Wartung.",
								"support@tarkovhack.com für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Tarkov ESP Hack | Boxen & Loot",
					description: "Tarkov ESP Hack: ESP hack boxes, loot pins, and distance. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Tarkov ESP Hack",
					intro: "TarkovHack bündelt ESP wallhack, radar hack und tarkov aimbot als undetected Paket für Tarkov auf Windows PC. Tarkov ESP Hack.",
					imageAlt: "Tarkov ESP hack boxes and loot markers",
					galleryTitle: "Tarkov ESP Hack",
					heroImage: "/images/tarkov-cheats-wallhack.webp",
					ctaPrimary: "TarkovHack kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/tarkov-esp/",
					sections: [
						{
							h2: "Tarkov ESP Hack",
							paragraphs: [
								"TarkovHack bündelt ESP wallhack, radar hack und tarkov aimbot als undetected Paket für Tarkov auf Windows PC. ESP hack boxes, loot pins, and distance.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye anti-cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach BattlEye anti-cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye anti-cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye anti-cheat-Wartung.",
								"support@tarkovhack.com für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Tarkov Unlock All | Was es bedeutet",
					description: "Tarkov Unlock All: unlock-all searches vs real ESP and Aimbot tools. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Tarkov Unlock All",
					intro: "TarkovHack bündelt ESP wallhack, radar hack und tarkov aimbot als undetected Paket für Tarkov auf Windows PC. Tarkov Unlock All.",
					imageAlt: "TarkovHack license features overview",
					galleryTitle: "Tarkov Unlock All",
					heroImage: "/images/tarkov-cheats-radar.webp",
					ctaPrimary: "TarkovHack kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Tarkov Unlock All",
							paragraphs: [
								"TarkovHack bündelt ESP wallhack, radar hack und tarkov aimbot als undetected Paket für Tarkov auf Windows PC. unlock-all searches vs real ESP and Aimbot tools.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye anti-cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach BattlEye anti-cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye anti-cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye anti-cheat-Wartung.",
								"support@tarkovhack.com für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				privacy: {
					title: "Datenschutz | TarkovHack",
					description: "Datenschutz for TarkovHack — ESP wallhack, Aimbot, Windows PC.",
					h1: "Datenschutz",
					intro: "TarkovHack bündelt ESP wallhack, radar hack und tarkov aimbot als undetected Paket für Tarkov auf Windows PC. Datenschutz for tarkovhack.com and Escape from Tarkov licenses.",
					imageAlt: "TarkovHack",
					galleryTitle: "TarkovHack",
					heroImage: "/images/tarkov-cheats-aimbot.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Nutzungsbedingungen",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Erhobene Daten",
							paragraphs: [
								"TarkovHack bündelt ESP wallhack, radar hack und tarkov aimbot als undetected Paket für Tarkov auf Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"Payment details are processed by Zadeyo checkout — not stored on tarkovhack.com.",
							],
						},
						{
							h2: "Datennutzung",
							paragraphs: [
								"TarkovHack bündelt ESP wallhack, radar hack und tarkov aimbot als undetected Paket für Tarkov auf Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Updates-Seite nach BattlEye anti-cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
							],
						},
						{
							h2: "Ihre Rechte",
							paragraphs: [
								"support@tarkovhack.com für Support und rechtliche Anfragen.",
								"Email: support@tarkovhack.com",
							],
						},
					],
				},
				refund: {
					title: "Rückerstattung | TarkovHack",
					description: "Rückerstattung for TarkovHack — ESP wallhack, Aimbot, Windows PC.",
					h1: "Rückerstattung",
					intro: "TarkovHack bündelt ESP wallhack, radar hack und tarkov aimbot als undetected Paket für Tarkov auf Windows PC. Rückerstattung for tarkovhack.com and Escape from Tarkov licenses.",
					imageAlt: "TarkovHack",
					galleryTitle: "TarkovHack",
					heroImage: "/images/tarkov-cheats-raid.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digitale Lieferung",
							paragraphs: [
								"TarkovHack bündelt ESP wallhack, radar hack und tarkov aimbot als undetected Paket für Tarkov auf Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye anti-cheat-Wartung.",
							],
						},
						{
							h2: "Genehmigung",
							paragraphs: [
								"TarkovHack bündelt ESP wallhack, radar hack und tarkov aimbot als undetected Paket für Tarkov auf Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Updates-Seite nach BattlEye anti-cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
							],
						},
						{
							h2: "Anfrage stellen",
							paragraphs: [
								"support@tarkovhack.com für Support und rechtliche Anfragen.",
								"Email: support@tarkovhack.com",
							],
						},
					],
				},
				terms: {
					title: "Nutzungsbedingungen | TarkovHack",
					description: "Nutzungsbedingungen for TarkovHack — ESP wallhack, Aimbot, Windows PC.",
					h1: "Nutzungsbedingungen",
					intro: "TarkovHack bündelt ESP wallhack, radar hack und tarkov aimbot als undetected Paket für Tarkov auf Windows PC. Nutzungsbedingungen for tarkovhack.com and Escape from Tarkov licenses.",
					imageAlt: "TarkovHack",
					galleryTitle: "TarkovHack",
					heroImage: "/images/tarkov-cheats-aimbot-view.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Annahme",
							paragraphs: [
								"TarkovHack bündelt ESP wallhack, radar hack und tarkov aimbot als undetected Paket für Tarkov auf Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. BattlEye anti-cheat-Wartung.",
							],
						},
						{
							h2: "Risiko",
							paragraphs: [
								"TarkovHack bündelt ESP wallhack, radar hack und tarkov aimbot als undetected Paket für Tarkov auf Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "Änderungen",
							paragraphs: [
								"support@tarkovhack.com für Support und rechtliche Anfragen.",
								"Email: support@tarkovhack.com",
							],
						},
					],
				},
			},
		},
		pt: {
			ui: {
				nav: {
					home: "Início",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Recursos",
					pricing: "Preços",
					setup: "Instalação",
					updates: "Atualizações",
					faq: "FAQ",
					buyNow: "Comprar",
				},
				hero: {
					accent: "Cheats Tarkov indetectáveis",
					accentShort: "TarkovHack",
					subtitle: "ESP wallhack, radar hack e Aimbot para Tarkov no PC Windows — manutenção BattlEye anti-cheat incluída.",
					subtitleShort: "ESP, radar e Aimbot para Tarkov PC",
					buyNow: "Comprar agora",
					seeFeatures: "Ver recursos",
				},
				trust: {
					status: "Online",
					statusNote: "O pacote TarkovHack está ativo para Tarkov no PC Windows.",
					statusShort: "Ativo",
					delivery: "Entrega digital instantânea",
					platform: "Windows 10 e 11",
					antiCheat: "Manutenção BattlEye anti-cheat incluída",
					antiCheatShort: "BattlEye anti-cheat incluído",
				},
				product: {
					title: "TarkovHack",
					addToCart: "Adicionar ao carrinho",
					monthly: "Mensal",
					lifetime: "Vitalício",
					available: "Disponível agora",
					gameBadge: "Tarkov",
					platformBadge: "PC Windows",
					statusBadge: "Pacote indetectável",
				},
				reviews: {
					title: "O que os jogadores dizem",
					subtitle: "Feedback recente de compradores TarkovHack",
					outOf: "de 5",
					countLabel: "avaliações",
				},
				common: {
					buyNow: "Comprar agora",
					readGuide: "Ler guia",
					language: "Idioma",
					officialLanguageNote: "Inglês é o idioma oficial. Outros idiomas são traduzidos para SEO global.",
					relatedPages: "Páginas relacionadas",
				},
				footer: {
					explore: "Explorar",
					help: "Ajuda e legal",
					tagline: "ESP, wallhack, radar e Aimbot indetectáveis para Tarkov — checkout via Zadeyo.",
				},
				images: {
					hero: "TarkovHack hero — ESP and aimbot overlay in Escape from Tarkov",
					espWallhack: "Wallhack outlines showing PMCs and Scavs through walls",
					aimbotCombat: "Soft aim assist overlay during an Escape from Tarkov raid",
					squadFight: "TarkovHack combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Tarkov raid",
					headerArt: "Aimbot view and bone priority controls for Tarkov",
					cheatsPackage: "2D radar threat overlay for Escape from Tarkov",
					rebootFight: "Aimbot assist during a Tarkov firefight",
					battleRoyale: "TarkovHack in-raid overview for Windows PC",
					battleRoyaleIsland: "ESP markers for loot and extracts in Tarkov",
				},
			},
			pages: {
				home: {
					title: "TarkovHack 2026 | ESP, Wallhack e Aimbot",
					description: "Cheats Escape from Tarkov indetectáveis para Escape from Tarkov no PC. ESP wallhack, radar hack e Aimbot com manutenção BattlEye anti-cheat. Entrega digital",
					h1: "TarkovHack — ESP, Wallhack e Aimbot indetectáveis",
					intro: "Pacote undetected para Escape from Tarkov no Windows PC: ESP wallhack, radar e Aimbot com manutenção BattlEye anti-cheat após cada patch.",
					imageAlt: "Tarkov ESP player tags hack",
					galleryTitle: "Galeria TarkovHack — ESP, Aimbot e wallhack",
					heroImage: "/images/tarkov-cheats-esp.webp",
					ctaPrimary: "Comprar TarkovHack",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Por que escolher TarkovHack em 2026",
							paragraphs: [
								"TarkovHack reúne ESP wallhack, radar hack e tarkov aimbot indetectáveis para Tarkov no PC Windows. Ideal para ler esquadrões inimigos em BR e scav-run.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye anti-cheat.",
							],
						},
						{
							h2: "ESP wallhack, radar e Aimbot numa licença",
							paragraphs: [
								"TarkovHack reúne ESP wallhack, radar hack e tarkov aimbot indetectáveis para Tarkov no PC Windows. Uma licença em vez de ferramentas separadas.",
								"Verifique Updates após patches BattlEye anti-cheat. Nenhum cheat garante status indetectável permanente.",
							],
						},
					],
				},
				"tarkov-esp": {
					title: "ESP Tarkov | Caixas de jogador e wallhack",
					description: "ESP Tarkov: player boxes, loot markers, and wallhack overlays. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "ESP Tarkov",
					intro: "TarkovHack reúne ESP wallhack, radar hack e tarkov aimbot indetectáveis para Tarkov no PC Windows. ESP Tarkov.",
					imageAlt: "Tarkov ESP player boxes and distance readouts in a raid",
					galleryTitle: "ESP Tarkov",
					heroImage: "/images/tarkov-cheats-radar.webp",
					ctaPrimary: "Comprar TarkovHack",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/tarkov-cheats/",
					sections: [
						{
							h2: "ESP Tarkov",
							paragraphs: [
								"TarkovHack reúne ESP wallhack, radar hack e tarkov aimbot indetectáveis para Tarkov no PC Windows. player boxes, loot markers, and wallhack overlays.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye anti-cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches BattlEye anti-cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye anti-cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye anti-cheat.",
								"Contacte support@tarkovhack.com para suporte ou questões legais.",
							],
						},
					],
				},
				"tarkov-aimbot": {
					title: "Aimbot Tarkov | Controles soft aim",
					description: "Aimbot Tarkov: soft aim, FOV, and per-weapon Aimbot profiles. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Aimbot Tarkov",
					intro: "TarkovHack reúne ESP wallhack, radar hack e tarkov aimbot indetectáveis para Tarkov no PC Windows. Aimbot Tarkov.",
					imageAlt: "Tarkov aimbot and soft aim controls on Windows PC",
					galleryTitle: "Aimbot Tarkov",
					heroImage: "/images/tarkov-cheats-aimbot.webp",
					ctaPrimary: "Comprar TarkovHack",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/tarkov-esp/",
					sections: [
						{
							h2: "Aimbot Tarkov",
							paragraphs: [
								"TarkovHack reúne ESP wallhack, radar hack e tarkov aimbot indetectáveis para Tarkov no PC Windows. soft aim, FOV, and per-weapon Aimbot profiles.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye anti-cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches BattlEye anti-cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye anti-cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye anti-cheat.",
								"Contacte support@tarkovhack.com para suporte ou questões legais.",
							],
						},
					],
				},
				features: {
					title: "Recursos | Lista completa de recursos",
					description: "Recursos: ESP, soft aim, radar controls. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Recursos",
					intro: "TarkovHack reúne ESP wallhack, radar hack e tarkov aimbot indetectáveis para Tarkov no PC Windows. Recursos.",
					imageAlt: "TarkovHack features — ESP, soft aim, and radar screenshots",
					galleryTitle: "Recursos",
					heroImage: "/images/tarkov-cheats-aimbot-view.webp",
					ctaPrimary: "Comprar TarkovHack",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Recursos",
							paragraphs: [
								"TarkovHack reúne ESP wallhack, radar hack e tarkov aimbot indetectáveis para Tarkov no PC Windows. ESP, soft aim, radar controls.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye anti-cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches BattlEye anti-cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye anti-cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye anti-cheat.",
								"Contacte support@tarkovhack.com para suporte ou questões legais.",
							],
						},
					],
				},
				pricing: {
					title: "Preços | Mensal e vitalício",
					description: "Preços: $35 monthly or $150 lifetime licenses. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Preços",
					intro: "TarkovHack reúne ESP wallhack, radar hack e tarkov aimbot indetectáveis para Tarkov no PC Windows. Preços.",
					imageAlt: "TarkovHack store plans for monthly and lifetime licenses",
					galleryTitle: "Preços",
					heroImage: "/images/tarkov-cheats-raid.webp",
					ctaPrimary: "Comprar TarkovHack",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Preços",
							paragraphs: [
								"TarkovHack reúne ESP wallhack, radar hack e tarkov aimbot indetectáveis para Tarkov no PC Windows. $35 monthly or $150 lifetime licenses.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye anti-cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches BattlEye anti-cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye anti-cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye anti-cheat.",
								"Contacte support@tarkovhack.com para suporte ou questões legais.",
							],
						},
					],
				},
				setup: {
					title: "Instalação | Guia de instalação PC",
					description: "Instalação: Windows PC activation and first-launch setup. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Instalação",
					intro: "TarkovHack reúne ESP wallhack, radar hack e tarkov aimbot indetectáveis para Tarkov no PC Windows. Instalação.",
					imageAlt: "TarkovHack setup guide screenshot for Windows PC",
					galleryTitle: "Instalação",
					heroImage: "/images/tarkov-cheats-radar.webp",
					ctaPrimary: "Comprar TarkovHack",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Instalação",
							paragraphs: [
								"TarkovHack reúne ESP wallhack, radar hack e tarkov aimbot indetectáveis para Tarkov no PC Windows. Windows PC activation and first-launch setup.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye anti-cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches BattlEye anti-cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye anti-cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye anti-cheat.",
								"Contacte support@tarkovhack.com para suporte ou questões legais.",
							],
						},
					],
				},
				updates: {
					title: "Atualizações | Registro BattlEye",
					description: "Atualizações: BattlEye patch status and rebuild notes. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Atualizações",
					intro: "TarkovHack reúne ESP wallhack, radar hack e tarkov aimbot indetectáveis para Tarkov no PC Windows. Atualizações.",
					imageAlt: "TarkovHack live status after BattlEye and game patches",
					galleryTitle: "Atualizações",
					heroImage: "/images/tarkov-cheats-esp.webp",
					ctaPrimary: "Comprar TarkovHack",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/tarkov-cheats/",
					sections: [
						{
							h2: "Atualizações",
							paragraphs: [
								"TarkovHack reúne ESP wallhack, radar hack e tarkov aimbot indetectáveis para Tarkov no PC Windows. BattlEye patch status and rebuild notes.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye anti-cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches BattlEye anti-cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye anti-cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye anti-cheat.",
								"Contacte support@tarkovhack.com para suporte ou questões legais.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Perguntas frequentes",
					description: "FAQ: ESP, soft aim, delivery, and BattlEye questions. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "FAQ",
					intro: "TarkovHack reúne ESP wallhack, radar hack e tarkov aimbot indetectáveis para Tarkov no PC Windows. FAQ.",
					imageAlt: "TarkovHack FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/tarkov-cheats-aimbot-view.webp",
					ctaPrimary: "Comprar TarkovHack",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"TarkovHack reúne ESP wallhack, radar hack e tarkov aimbot indetectáveis para Tarkov no PC Windows. ESP, soft aim, delivery, and BattlEye questions.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye anti-cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches BattlEye anti-cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye anti-cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye anti-cheat.",
								"Contacte support@tarkovhack.com para suporte ou questões legais.",
							],
						},
					],
				},
				support: {
					title: "Suporte | Ajuda e contato",
					description: "Suporte: order help and license support contact. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Suporte",
					intro: "TarkovHack reúne ESP wallhack, radar hack e tarkov aimbot indetectáveis para Tarkov no PC Windows. Suporte.",
					imageAlt: "TarkovHack support page for license and setup help",
					galleryTitle: "Suporte",
					heroImage: "/images/tarkov-cheats-raid.webp",
					ctaPrimary: "Comprar TarkovHack",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Suporte",
							paragraphs: [
								"TarkovHack reúne ESP wallhack, radar hack e tarkov aimbot indetectáveis para Tarkov no PC Windows. order help and license support contact.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye anti-cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches BattlEye anti-cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye anti-cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye anti-cheat.",
								"Contacte support@tarkovhack.com para suporte ou questões legais.",
							],
						},
					],
				},
				undetected: {
					title: "Cheats indetectáveis | Status indetectável",
					description: "Cheats indetectáveis: undetected maintenance after BattlEye anti-cheat patches. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Cheats indetectáveis",
					intro: "TarkovHack reúne ESP wallhack, radar hack e tarkov aimbot indetectáveis para Tarkov no PC Windows. Cheats indetectáveis.",
					imageAlt: "TarkovHack undetected status overview for Windows PC",
					galleryTitle: "Cheats indetectáveis",
					heroImage: "/images/tarkov-cheats-wallhack.webp",
					ctaPrimary: "Comprar TarkovHack",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/tarkov-cheats/",
					sections: [
						{
							h2: "Cheats indetectáveis",
							paragraphs: [
								"TarkovHack reúne ESP wallhack, radar hack e tarkov aimbot indetectáveis para Tarkov no PC Windows. undetected maintenance after BattlEye anti-cheat patches.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye anti-cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches BattlEye anti-cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye anti-cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye anti-cheat.",
								"Contacte support@tarkovhack.com para suporte ou questões legais.",
							],
						},
					],
				},
				wallhack: {
					title: "Wallhack Tarkov | Visibilidade ESP",
					description: "Wallhack Tarkov: wallhack ESP for players, loot, and distance. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Wallhack Tarkov",
					intro: "TarkovHack reúne ESP wallhack, radar hack e tarkov aimbot indetectáveis para Tarkov no PC Windows. Wallhack Tarkov.",
					imageAlt: "Tarkov wallhack visibility through walls in a raid",
					galleryTitle: "Wallhack Tarkov",
					heroImage: "/images/tarkov-cheats-wallhack.webp",
					ctaPrimary: "Comprar TarkovHack",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/tarkov-esp/",
					sections: [
						{
							h2: "Wallhack Tarkov",
							paragraphs: [
								"TarkovHack reúne ESP wallhack, radar hack e tarkov aimbot indetectáveis para Tarkov no PC Windows. wallhack ESP for players, loot, and distance.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye anti-cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches BattlEye anti-cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye anti-cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye anti-cheat.",
								"Contacte support@tarkovhack.com para suporte ou questões legais.",
							],
						},
					],
				},
				radar: {
					title: "Radar hack | Radar 2D de ameaças",
					description: "Radar hack: 2D radar cues for flanks and rotations. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Radar hack",
					intro: "TarkovHack reúne ESP wallhack, radar hack e tarkov aimbot indetectáveis para Tarkov no PC Windows. Radar hack.",
					imageAlt: "Tarkov 2D radar overlay showing nearby threats",
					galleryTitle: "Radar hack",
					heroImage: "/images/tarkov-cheats-radar.webp",
					ctaPrimary: "Comprar TarkovHack",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/tarkov-esp/",
					sections: [
						{
							h2: "Radar hack",
							paragraphs: [
								"TarkovHack reúne ESP wallhack, radar hack e tarkov aimbot indetectáveis para Tarkov no PC Windows. 2D radar cues for flanks and rotations.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye anti-cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches BattlEye anti-cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye anti-cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye anti-cheat.",
								"Contacte support@tarkovhack.com para suporte ou questões legais.",
							],
						},
					],
				},
				battleye: {
					title: "Bypass BattlEye | Manutenção de patches",
					description: "Bypass BattlEye: how BattlEye updates are handled for Escape from Tarkov hacks. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Bypass BattlEye",
					intro: "TarkovHack reúne ESP wallhack, radar hack e tarkov aimbot indetectáveis para Tarkov no PC Windows. Bypass BattlEye.",
					imageAlt: "TarkovHack maintenance after a BattlEye patch",
					galleryTitle: "Bypass BattlEye",
					heroImage: "/images/tarkov-cheats-aimbot.webp",
					ctaPrimary: "Comprar TarkovHack",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Bypass BattlEye",
							paragraphs: [
								"TarkovHack reúne ESP wallhack, radar hack e tarkov aimbot indetectáveis para Tarkov no PC Windows. how BattlEye updates are handled for Escape from Tarkov hacks.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye anti-cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches BattlEye anti-cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye anti-cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye anti-cheat.",
								"Contacte support@tarkovhack.com para suporte ou questões legais.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Cheats Tarkov 2026 | Guia do comprador",
					description: "Cheats Tarkov 2026: 2026 TarkovHack checklist before checkout. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Cheats Tarkov 2026",
					intro: "TarkovHack reúne ESP wallhack, radar hack e tarkov aimbot indetectáveis para Tarkov no PC Windows. Cheats Tarkov 2026.",
					imageAlt: "TarkovHack product overview for Escape from Tarkov",
					galleryTitle: "Cheats Tarkov 2026",
					heroImage: "/images/tarkov-cheats-esp.webp",
					ctaPrimary: "Comprar TarkovHack",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/tarkov-cheats/",
					sections: [
						{
							h2: "Cheats Tarkov 2026",
							paragraphs: [
								"TarkovHack reúne ESP wallhack, radar hack e tarkov aimbot indetectáveis para Tarkov no PC Windows. 2026 TarkovHack checklist before checkout.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye anti-cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches BattlEye anti-cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye anti-cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye anti-cheat.",
								"Contacte support@tarkovhack.com para suporte ou questões legais.",
							],
						},
					],
				},
				hacks: {
					title: "Cheats Tarkov | Guia ESP e Aimbot",
					description: "Cheats Tarkov: the Escape from Tarkov hacks pillar for ESP and Aimbot. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Cheats Tarkov",
					intro: "TarkovHack reúne ESP wallhack, radar hack e tarkov aimbot indetectáveis para Tarkov no PC Windows. Cheats Tarkov.",
					imageAlt: "TarkovHack product page — ESP, aimbot, and radar",
					galleryTitle: "Cheats Tarkov",
					heroImage: "/images/tarkov-cheats-raid.webp",
					ctaPrimary: "Comprar TarkovHack",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Cheats Tarkov",
							paragraphs: [
								"TarkovHack reúne ESP wallhack, radar hack e tarkov aimbot indetectáveis para Tarkov no PC Windows. the Escape from Tarkov hacks pillar for ESP and Aimbot.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye anti-cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches BattlEye anti-cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye anti-cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye anti-cheat.",
								"Contacte support@tarkovhack.com para suporte ou questões legais.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Download TarkovHack | Acesso instantâneo",
					description: "Download TarkovHack: digital license download after payment. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Download TarkovHack",
					intro: "TarkovHack reúne ESP wallhack, radar hack e tarkov aimbot indetectáveis para Tarkov no PC Windows. Download TarkovHack.",
					imageAlt: "TarkovHack download and install delivery flow",
					galleryTitle: "Download TarkovHack",
					heroImage: "/images/tarkov-cheats-raid.webp",
					ctaPrimary: "Comprar TarkovHack",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Download TarkovHack",
							paragraphs: [
								"TarkovHack reúne ESP wallhack, radar hack e tarkov aimbot indetectáveis para Tarkov no PC Windows. digital license download after payment.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye anti-cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches BattlEye anti-cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye anti-cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye anti-cheat.",
								"Contacte support@tarkovhack.com para suporte ou questões legais.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Menu mod Tarkov | Controles in-game",
					description: "Menu mod Tarkov: in-client ESP and soft aim toggles. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Menu mod Tarkov",
					intro: "TarkovHack reúne ESP wallhack, radar hack e tarkov aimbot indetectáveis para Tarkov no PC Windows. Menu mod Tarkov.",
					imageAlt: "TarkovHack in-game menu controls",
					galleryTitle: "Menu mod Tarkov",
					heroImage: "/images/tarkov-cheats-radar.webp",
					ctaPrimary: "Comprar TarkovHack",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Menu mod Tarkov",
							paragraphs: [
								"TarkovHack reúne ESP wallhack, radar hack e tarkov aimbot indetectáveis para Tarkov no PC Windows. in-client ESP and soft aim toggles.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye anti-cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches BattlEye anti-cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye anti-cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye anti-cheat.",
								"Contacte support@tarkovhack.com para suporte ou questões legais.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Soft aim Tarkov | Ajustes soft aim",
					description: "Soft aim Tarkov: smooth soft aim settings for Windows PC. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Soft aim Tarkov",
					intro: "TarkovHack reúne ESP wallhack, radar hack e tarkov aimbot indetectáveis para Tarkov no PC Windows. Soft aim Tarkov.",
					imageAlt: "Tarkov soft aim FOV and smoothness settings",
					galleryTitle: "Soft aim Tarkov",
					heroImage: "/images/tarkov-cheats-aimbot-view.webp",
					ctaPrimary: "Comprar TarkovHack",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/tarkov-aimbot/",
					sections: [
						{
							h2: "Soft aim Tarkov",
							paragraphs: [
								"TarkovHack reúne ESP wallhack, radar hack e tarkov aimbot indetectáveis para Tarkov no PC Windows. smooth soft aim settings for Windows PC.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye anti-cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches BattlEye anti-cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye anti-cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye anti-cheat.",
								"Contacte support@tarkovhack.com para suporte ou questões legais.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Melhores cheats Tarkov | Checklist do comprador",
					description: "Melhores cheats Tarkov: what to compare before buying TarkovHack. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Melhores cheats Tarkov",
					intro: "TarkovHack reúne ESP wallhack, radar hack e tarkov aimbot indetectáveis para Tarkov no PC Windows. Melhores cheats Tarkov.",
					imageAlt: "TarkovHack overview for Escape from Tarkov on PC",
					galleryTitle: "Melhores cheats Tarkov",
					heroImage: "/images/tarkov-cheats-esp.webp",
					ctaPrimary: "Comprar TarkovHack",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Melhores cheats Tarkov",
							paragraphs: [
								"TarkovHack reúne ESP wallhack, radar hack e tarkov aimbot indetectáveis para Tarkov no PC Windows. what to compare before buying TarkovHack.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye anti-cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches BattlEye anti-cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye anti-cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye anti-cheat.",
								"Contacte support@tarkovhack.com para suporte ou questões legais.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Hack aimbot Tarkov | Assistência soft aim",
					description: "Hack aimbot Tarkov: undetected Aimbot hack assist for Escape from Tarkov. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Hack aimbot Tarkov",
					intro: "TarkovHack reúne ESP wallhack, radar hack e tarkov aimbot indetectáveis para Tarkov no PC Windows. Hack aimbot Tarkov.",
					imageAlt: "Tarkov aimbot hack controls and bone priority",
					galleryTitle: "Hack aimbot Tarkov",
					heroImage: "/images/tarkov-cheats-aimbot-view.webp",
					ctaPrimary: "Comprar TarkovHack",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/tarkov-aimbot/",
					sections: [
						{
							h2: "Hack aimbot Tarkov",
							paragraphs: [
								"TarkovHack reúne ESP wallhack, radar hack e tarkov aimbot indetectáveis para Tarkov no PC Windows. undetected Aimbot hack assist for Escape from Tarkov.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye anti-cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches BattlEye anti-cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye anti-cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye anti-cheat.",
								"Contacte support@tarkovhack.com para suporte ou questões legais.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Hack ESP Tarkov | Caixas e loot",
					description: "Hack ESP Tarkov: ESP hack boxes, loot pins, and distance. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Hack ESP Tarkov",
					intro: "TarkovHack reúne ESP wallhack, radar hack e tarkov aimbot indetectáveis para Tarkov no PC Windows. Hack ESP Tarkov.",
					imageAlt: "Tarkov ESP hack boxes and loot markers",
					galleryTitle: "Hack ESP Tarkov",
					heroImage: "/images/tarkov-cheats-wallhack.webp",
					ctaPrimary: "Comprar TarkovHack",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/tarkov-esp/",
					sections: [
						{
							h2: "Hack ESP Tarkov",
							paragraphs: [
								"TarkovHack reúne ESP wallhack, radar hack e tarkov aimbot indetectáveis para Tarkov no PC Windows. ESP hack boxes, loot pins, and distance.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye anti-cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches BattlEye anti-cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye anti-cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye anti-cheat.",
								"Contacte support@tarkovhack.com para suporte ou questões legais.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Unlock all Tarkov | O que significa",
					description: "Unlock all Tarkov: unlock-all searches vs real ESP and Aimbot tools. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Unlock all Tarkov",
					intro: "TarkovHack reúne ESP wallhack, radar hack e tarkov aimbot indetectáveis para Tarkov no PC Windows. Unlock all Tarkov.",
					imageAlt: "TarkovHack license features overview",
					galleryTitle: "Unlock all Tarkov",
					heroImage: "/images/tarkov-cheats-radar.webp",
					ctaPrimary: "Comprar TarkovHack",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unlock all Tarkov",
							paragraphs: [
								"TarkovHack reúne ESP wallhack, radar hack e tarkov aimbot indetectáveis para Tarkov no PC Windows. unlock-all searches vs real ESP and Aimbot tools.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye anti-cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches BattlEye anti-cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye anti-cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye anti-cheat.",
								"Contacte support@tarkovhack.com para suporte ou questões legais.",
							],
						},
					],
				},
				privacy: {
					title: "Política de privacidade | TarkovHack",
					description: "Política de privacidade for TarkovHack — ESP wallhack, Aimbot, PC Windows.",
					h1: "Política de privacidade",
					intro: "TarkovHack reúne ESP wallhack, radar hack e tarkov aimbot indetectáveis para Tarkov no PC Windows. Política de privacidade for tarkovhack.com and Escape from Tarkov licenses.",
					imageAlt: "TarkovHack",
					galleryTitle: "TarkovHack",
					heroImage: "/images/tarkov-cheats-aimbot.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read terms",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we collect",
							paragraphs: [
								"TarkovHack reúne ESP wallhack, radar hack e tarkov aimbot indetectáveis para Tarkov no PC Windows. Contact email, Zadeyo order references, and basic site security data.",
								"Payment details are processed by Zadeyo checkout — not stored on tarkovhack.com.",
							],
						},
						{
							h2: "How we use data",
							paragraphs: [
								"TarkovHack reúne ESP wallhack, radar hack e tarkov aimbot indetectáveis para Tarkov no PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Verifique Updates após patches BattlEye anti-cheat. Nenhum cheat garante status indetectável permanente.",
							],
						},
						{
							h2: "Your rights",
							paragraphs: [
								"Contacte support@tarkovhack.com para suporte ou questões legais.",
								"Email: support@tarkovhack.com",
							],
						},
					],
				},
				refund: {
					title: "Política de reembolso | TarkovHack",
					description: "Política de reembolso for TarkovHack — ESP wallhack, Aimbot, PC Windows.",
					h1: "Política de reembolso",
					intro: "TarkovHack reúne ESP wallhack, radar hack e tarkov aimbot indetectáveis para Tarkov no PC Windows. Política de reembolso for tarkovhack.com and Escape from Tarkov licenses.",
					imageAlt: "TarkovHack",
					galleryTitle: "TarkovHack",
					heroImage: "/images/tarkov-cheats-raid.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digital delivery",
							paragraphs: [
								"TarkovHack reúne ESP wallhack, radar hack e tarkov aimbot indetectáveis para Tarkov no PC Windows. Contact email, Zadeyo order references, and basic site security data.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye anti-cheat.",
							],
						},
						{
							h2: "Refund approval",
							paragraphs: [
								"TarkovHack reúne ESP wallhack, radar hack e tarkov aimbot indetectáveis para Tarkov no PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Verifique Updates após patches BattlEye anti-cheat. Nenhum cheat garante status indetectável permanente.",
							],
						},
						{
							h2: "How to request",
							paragraphs: [
								"Contacte support@tarkovhack.com para suporte ou questões legais.",
								"Email: support@tarkovhack.com",
							],
						},
					],
				},
				terms: {
					title: "Termos de uso | TarkovHack",
					description: "Termos de uso for TarkovHack — ESP wallhack, Aimbot, PC Windows.",
					h1: "Termos de uso",
					intro: "TarkovHack reúne ESP wallhack, radar hack e tarkov aimbot indetectáveis para Tarkov no PC Windows. Termos de uso for tarkovhack.com and Escape from Tarkov licenses.",
					imageAlt: "TarkovHack",
					galleryTitle: "TarkovHack",
					heroImage: "/images/tarkov-cheats-aimbot-view.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Acceptance of terms",
							paragraphs: [
								"TarkovHack reúne ESP wallhack, radar hack e tarkov aimbot indetectáveis para Tarkov no PC Windows. Contact email, Zadeyo order references, and basic site security data.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção BattlEye anti-cheat.",
							],
						},
						{
							h2: "Risk disclaimer",
							paragraphs: [
								"TarkovHack reúne ESP wallhack, radar hack e tarkov aimbot indetectáveis para Tarkov no PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "Policy changes",
							paragraphs: [
								"Contacte support@tarkovhack.com para suporte ou questões legais.",
								"Email: support@tarkovhack.com",
							],
						},
					],
				},
			},
		},
		it: {
			ui: {
				nav: {
					home: "Home",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Funzioni",
					pricing: "Prezzi",
					setup: "Setup",
					updates: "Aggiornamenti",
					faq: "FAQ",
					buyNow: "Acquista",
				},
				hero: {
					accent: "Cheat Tarkov indetectable",
					accentShort: "TarkovHack",
					subtitle: "ESP wallhack, radar hack e Aimbot per Tarkov su PC Windows — manutenzione BattlEye anti-cheat inclusa.",
					subtitleShort: "ESP, radar e Aimbot per Tarkov PC",
					buyNow: "Acquista ora",
					seeFeatures: "Vedi funzioni",
				},
				trust: {
					status: "Online",
					statusNote: "Il pacchetto TarkovHack è attivo per Tarkov su PC Windows.",
					statusShort: "Attivo",
					delivery: "Consegna digitale istantanea",
					platform: "Windows 10 e 11",
					antiCheat: "Manutenzione BattlEye anti-cheat supportata",
					antiCheatShort: "BattlEye anti-cheat supportato",
				},
				product: {
					title: "TarkovHack",
					addToCart: "Aggiungi al carrello",
					monthly: "Mensile",
					lifetime: "A vita",
					available: "Disponibile ora",
					gameBadge: "Tarkov",
					platformBadge: "PC Windows",
					statusBadge: "Pacchetto indetectable",
				},
				reviews: {
					title: "Cosa dicono i giocatori",
					subtitle: "Feedback recente dagli acquirenti TarkovHack",
					outOf: "su 5",
					countLabel: "recensioni",
				},
				common: {
					buyNow: "Acquista ora",
					readGuide: "Leggi guida",
					language: "Lingua",
					officialLanguageNote: "L'inglese è la lingua ufficiale. Altre versioni sono tradotte per SEO globale.",
					relatedPages: "Pagine correlate",
				},
				footer: {
					explore: "Esplora",
					help: "Aiuto e legale",
					tagline: "ESP, wallhack, radar e Aimbot indetectable per Tarkov — checkout via Zadeyo.",
				},
				images: {
					hero: "TarkovHack hero — ESP and aimbot overlay in Escape from Tarkov",
					espWallhack: "Wallhack outlines showing PMCs and Scavs through walls",
					aimbotCombat: "Soft aim assist overlay during an Escape from Tarkov raid",
					squadFight: "TarkovHack combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Tarkov raid",
					headerArt: "Aimbot view and bone priority controls for Tarkov",
					cheatsPackage: "2D radar threat overlay for Escape from Tarkov",
					rebootFight: "Aimbot assist during a Tarkov firefight",
					battleRoyale: "TarkovHack in-raid overview for Windows PC",
					battleRoyaleIsland: "ESP markers for loot and extracts in Tarkov",
				},
			},
			pages: {
				home: {
					title: "TarkovHack 2026 | ESP, Wallhack e Aimbot",
					description: "Cheat Escape from Tarkov indetectable per Escape from Tarkov su PC. ESP wallhack, radar hack e Aimbot con manutenzione BattlEye anti-cheat. Consegna digitale",
					h1: "TarkovHack — ESP, Wallhack e Aimbot indetectable",
					intro: "Pacchetto undetected per Escape from Tarkov su PC Windows: ESP wallhack, radar e Aimbot con manutenzione BattlEye anti-cheat dopo ogni patch.",
					imageAlt: "Tarkov ESP player tags hack",
					galleryTitle: "Galleria TarkovHack — ESP, Aimbot e wallhack",
					heroImage: "/images/tarkov-cheats-esp.webp",
					ctaPrimary: "Acquista TarkovHack",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Perché scegliere TarkovHack nel 2026",
							paragraphs: [
								"TarkovHack unisce ESP wallhack, radar hack e tarkov aimbot indetectable per Tarkov su PC Windows. Ideale per leggere squadre nemiche in BR e scav-run.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye anti-cheat.",
							],
						},
						{
							h2: "ESP wallhack, radar e Aimbot in una licenza",
							paragraphs: [
								"TarkovHack unisce ESP wallhack, radar hack e tarkov aimbot indetectable per Tarkov su PC Windows. Una licenza invece di tool separati.",
								"Controlla Updates dopo patch BattlEye anti-cheat. Nessun cheat garantisce stato indetectable permanente.",
							],
						},
					],
				},
				"tarkov-esp": {
					title: "ESP Tarkov | Box giocatore e wallhack",
					description: "ESP Tarkov: player boxes, loot markers, and wallhack overlays. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "ESP Tarkov",
					intro: "TarkovHack unisce ESP wallhack, radar hack e tarkov aimbot indetectable per Tarkov su PC Windows. ESP Tarkov.",
					imageAlt: "Tarkov ESP player boxes and distance readouts in a raid",
					galleryTitle: "ESP Tarkov",
					heroImage: "/images/tarkov-cheats-radar.webp",
					ctaPrimary: "Acquista TarkovHack",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/tarkov-cheats/",
					sections: [
						{
							h2: "ESP Tarkov",
							paragraphs: [
								"TarkovHack unisce ESP wallhack, radar hack e tarkov aimbot indetectable per Tarkov su PC Windows. player boxes, loot markers, and wallhack overlays.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye anti-cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch BattlEye anti-cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye anti-cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye anti-cheat.",
								"Contatta support@tarkovhack.com per supporto o richieste legali.",
							],
						},
					],
				},
				"tarkov-aimbot": {
					title: "Aimbot Tarkov | Controlli soft aim",
					description: "Aimbot Tarkov: soft aim, FOV, and per-weapon Aimbot profiles. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Aimbot Tarkov",
					intro: "TarkovHack unisce ESP wallhack, radar hack e tarkov aimbot indetectable per Tarkov su PC Windows. Aimbot Tarkov.",
					imageAlt: "Tarkov aimbot and soft aim controls on Windows PC",
					galleryTitle: "Aimbot Tarkov",
					heroImage: "/images/tarkov-cheats-aimbot.webp",
					ctaPrimary: "Acquista TarkovHack",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/tarkov-esp/",
					sections: [
						{
							h2: "Aimbot Tarkov",
							paragraphs: [
								"TarkovHack unisce ESP wallhack, radar hack e tarkov aimbot indetectable per Tarkov su PC Windows. soft aim, FOV, and per-weapon Aimbot profiles.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye anti-cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch BattlEye anti-cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye anti-cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye anti-cheat.",
								"Contatta support@tarkovhack.com per supporto o richieste legali.",
							],
						},
					],
				},
				features: {
					title: "Funzioni | Elenco completo funzioni",
					description: "Funzioni: ESP, soft aim, radar controls. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Funzioni",
					intro: "TarkovHack unisce ESP wallhack, radar hack e tarkov aimbot indetectable per Tarkov su PC Windows. Funzioni.",
					imageAlt: "TarkovHack features — ESP, soft aim, and radar screenshots",
					galleryTitle: "Funzioni",
					heroImage: "/images/tarkov-cheats-aimbot-view.webp",
					ctaPrimary: "Acquista TarkovHack",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Funzioni",
							paragraphs: [
								"TarkovHack unisce ESP wallhack, radar hack e tarkov aimbot indetectable per Tarkov su PC Windows. ESP, soft aim, radar controls.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye anti-cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch BattlEye anti-cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye anti-cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye anti-cheat.",
								"Contatta support@tarkovhack.com per supporto o richieste legali.",
							],
						},
					],
				},
				pricing: {
					title: "Prezzi | Mensile e lifetime",
					description: "Prezzi: $35 monthly or $150 lifetime licenses. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Prezzi",
					intro: "TarkovHack unisce ESP wallhack, radar hack e tarkov aimbot indetectable per Tarkov su PC Windows. Prezzi.",
					imageAlt: "TarkovHack store plans for monthly and lifetime licenses",
					galleryTitle: "Prezzi",
					heroImage: "/images/tarkov-cheats-raid.webp",
					ctaPrimary: "Acquista TarkovHack",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Prezzi",
							paragraphs: [
								"TarkovHack unisce ESP wallhack, radar hack e tarkov aimbot indetectable per Tarkov su PC Windows. $35 monthly or $150 lifetime licenses.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye anti-cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch BattlEye anti-cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye anti-cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye anti-cheat.",
								"Contatta support@tarkovhack.com per supporto o richieste legali.",
							],
						},
					],
				},
				setup: {
					title: "Setup | Guida setup PC",
					description: "Setup: Windows PC activation and first-launch setup. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Setup",
					intro: "TarkovHack unisce ESP wallhack, radar hack e tarkov aimbot indetectable per Tarkov su PC Windows. Setup.",
					imageAlt: "TarkovHack setup guide screenshot for Windows PC",
					galleryTitle: "Setup",
					heroImage: "/images/tarkov-cheats-radar.webp",
					ctaPrimary: "Acquista TarkovHack",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Setup",
							paragraphs: [
								"TarkovHack unisce ESP wallhack, radar hack e tarkov aimbot indetectable per Tarkov su PC Windows. Windows PC activation and first-launch setup.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye anti-cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch BattlEye anti-cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye anti-cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye anti-cheat.",
								"Contatta support@tarkovhack.com per supporto o richieste legali.",
							],
						},
					],
				},
				updates: {
					title: "Aggiornamenti | Log manutenzione BattlEye",
					description: "Aggiornamenti: BattlEye patch status and rebuild notes. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Aggiornamenti",
					intro: "TarkovHack unisce ESP wallhack, radar hack e tarkov aimbot indetectable per Tarkov su PC Windows. Aggiornamenti.",
					imageAlt: "TarkovHack live status after BattlEye and game patches",
					galleryTitle: "Aggiornamenti",
					heroImage: "/images/tarkov-cheats-esp.webp",
					ctaPrimary: "Acquista TarkovHack",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/tarkov-cheats/",
					sections: [
						{
							h2: "Aggiornamenti",
							paragraphs: [
								"TarkovHack unisce ESP wallhack, radar hack e tarkov aimbot indetectable per Tarkov su PC Windows. BattlEye patch status and rebuild notes.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye anti-cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch BattlEye anti-cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye anti-cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye anti-cheat.",
								"Contatta support@tarkovhack.com per supporto o richieste legali.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Domande frequenti",
					description: "FAQ: ESP, soft aim, delivery, and BattlEye questions. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "FAQ",
					intro: "TarkovHack unisce ESP wallhack, radar hack e tarkov aimbot indetectable per Tarkov su PC Windows. FAQ.",
					imageAlt: "TarkovHack FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/tarkov-cheats-aimbot-view.webp",
					ctaPrimary: "Acquista TarkovHack",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"TarkovHack unisce ESP wallhack, radar hack e tarkov aimbot indetectable per Tarkov su PC Windows. ESP, soft aim, delivery, and BattlEye questions.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye anti-cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch BattlEye anti-cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye anti-cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye anti-cheat.",
								"Contatta support@tarkovhack.com per supporto o richieste legali.",
							],
						},
					],
				},
				support: {
					title: "Supporto | Aiuto e contatto",
					description: "Supporto: order help and license support contact. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Supporto",
					intro: "TarkovHack unisce ESP wallhack, radar hack e tarkov aimbot indetectable per Tarkov su PC Windows. Supporto.",
					imageAlt: "TarkovHack support page for license and setup help",
					galleryTitle: "Supporto",
					heroImage: "/images/tarkov-cheats-raid.webp",
					ctaPrimary: "Acquista TarkovHack",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Supporto",
							paragraphs: [
								"TarkovHack unisce ESP wallhack, radar hack e tarkov aimbot indetectable per Tarkov su PC Windows. order help and license support contact.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye anti-cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch BattlEye anti-cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye anti-cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye anti-cheat.",
								"Contatta support@tarkovhack.com per supporto o richieste legali.",
							],
						},
					],
				},
				undetected: {
					title: "Cheat indetectable | Stato indetectable",
					description: "Cheat indetectable: undetected maintenance after BattlEye anti-cheat patches. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Cheat indetectable",
					intro: "TarkovHack unisce ESP wallhack, radar hack e tarkov aimbot indetectable per Tarkov su PC Windows. Cheat indetectable.",
					imageAlt: "TarkovHack undetected status overview for Windows PC",
					galleryTitle: "Cheat indetectable",
					heroImage: "/images/tarkov-cheats-wallhack.webp",
					ctaPrimary: "Acquista TarkovHack",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/tarkov-cheats/",
					sections: [
						{
							h2: "Cheat indetectable",
							paragraphs: [
								"TarkovHack unisce ESP wallhack, radar hack e tarkov aimbot indetectable per Tarkov su PC Windows. undetected maintenance after BattlEye anti-cheat patches.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye anti-cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch BattlEye anti-cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye anti-cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye anti-cheat.",
								"Contatta support@tarkovhack.com per supporto o richieste legali.",
							],
						},
					],
				},
				wallhack: {
					title: "Wallhack Tarkov | Visibilità ESP",
					description: "Wallhack Tarkov: wallhack ESP for players, loot, and distance. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Wallhack Tarkov",
					intro: "TarkovHack unisce ESP wallhack, radar hack e tarkov aimbot indetectable per Tarkov su PC Windows. Wallhack Tarkov.",
					imageAlt: "Tarkov wallhack visibility through walls in a raid",
					galleryTitle: "Wallhack Tarkov",
					heroImage: "/images/tarkov-cheats-wallhack.webp",
					ctaPrimary: "Acquista TarkovHack",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/tarkov-esp/",
					sections: [
						{
							h2: "Wallhack Tarkov",
							paragraphs: [
								"TarkovHack unisce ESP wallhack, radar hack e tarkov aimbot indetectable per Tarkov su PC Windows. wallhack ESP for players, loot, and distance.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye anti-cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch BattlEye anti-cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye anti-cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye anti-cheat.",
								"Contatta support@tarkovhack.com per supporto o richieste legali.",
							],
						},
					],
				},
				radar: {
					title: "Radar hack | Radar 2D minacce",
					description: "Radar hack: 2D radar cues for flanks and rotations. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Radar hack",
					intro: "TarkovHack unisce ESP wallhack, radar hack e tarkov aimbot indetectable per Tarkov su PC Windows. Radar hack.",
					imageAlt: "Tarkov 2D radar overlay showing nearby threats",
					galleryTitle: "Radar hack",
					heroImage: "/images/tarkov-cheats-radar.webp",
					ctaPrimary: "Acquista TarkovHack",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/tarkov-esp/",
					sections: [
						{
							h2: "Radar hack",
							paragraphs: [
								"TarkovHack unisce ESP wallhack, radar hack e tarkov aimbot indetectable per Tarkov su PC Windows. 2D radar cues for flanks and rotations.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye anti-cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch BattlEye anti-cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye anti-cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye anti-cheat.",
								"Contatta support@tarkovhack.com per supporto o richieste legali.",
							],
						},
					],
				},
				battleye: {
					title: "Bypass BattlEye | Manutenzione patch",
					description: "Bypass BattlEye: how BattlEye updates are handled for Escape from Tarkov hacks. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Bypass BattlEye",
					intro: "TarkovHack unisce ESP wallhack, radar hack e tarkov aimbot indetectable per Tarkov su PC Windows. Bypass BattlEye.",
					imageAlt: "TarkovHack maintenance after a BattlEye patch",
					galleryTitle: "Bypass BattlEye",
					heroImage: "/images/tarkov-cheats-aimbot.webp",
					ctaPrimary: "Acquista TarkovHack",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Bypass BattlEye",
							paragraphs: [
								"TarkovHack unisce ESP wallhack, radar hack e tarkov aimbot indetectable per Tarkov su PC Windows. how BattlEye updates are handled for Escape from Tarkov hacks.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye anti-cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch BattlEye anti-cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye anti-cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye anti-cheat.",
								"Contatta support@tarkovhack.com per supporto o richieste legali.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Cheat Tarkov 2026 | Guida acquirente",
					description: "Cheat Tarkov 2026: 2026 TarkovHack checklist before checkout. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Cheat Tarkov 2026",
					intro: "TarkovHack unisce ESP wallhack, radar hack e tarkov aimbot indetectable per Tarkov su PC Windows. Cheat Tarkov 2026.",
					imageAlt: "TarkovHack product overview for Escape from Tarkov",
					galleryTitle: "Cheat Tarkov 2026",
					heroImage: "/images/tarkov-cheats-esp.webp",
					ctaPrimary: "Acquista TarkovHack",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/tarkov-cheats/",
					sections: [
						{
							h2: "Cheat Tarkov 2026",
							paragraphs: [
								"TarkovHack unisce ESP wallhack, radar hack e tarkov aimbot indetectable per Tarkov su PC Windows. 2026 TarkovHack checklist before checkout.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye anti-cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch BattlEye anti-cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye anti-cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye anti-cheat.",
								"Contatta support@tarkovhack.com per supporto o richieste legali.",
							],
						},
					],
				},
				hacks: {
					title: "Cheat Tarkov | Guida ESP e Aimbot",
					description: "Cheat Tarkov: the Escape from Tarkov hacks pillar for ESP and Aimbot. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Cheat Tarkov",
					intro: "TarkovHack unisce ESP wallhack, radar hack e tarkov aimbot indetectable per Tarkov su PC Windows. Cheat Tarkov.",
					imageAlt: "TarkovHack product page — ESP, aimbot, and radar",
					galleryTitle: "Cheat Tarkov",
					heroImage: "/images/tarkov-cheats-raid.webp",
					ctaPrimary: "Acquista TarkovHack",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Cheat Tarkov",
							paragraphs: [
								"TarkovHack unisce ESP wallhack, radar hack e tarkov aimbot indetectable per Tarkov su PC Windows. the Escape from Tarkov hacks pillar for ESP and Aimbot.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye anti-cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch BattlEye anti-cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye anti-cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye anti-cheat.",
								"Contatta support@tarkovhack.com per supporto o richieste legali.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Download TarkovHack | Accesso istantaneo",
					description: "Download TarkovHack: digital license download after payment. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Download TarkovHack",
					intro: "TarkovHack unisce ESP wallhack, radar hack e tarkov aimbot indetectable per Tarkov su PC Windows. Download TarkovHack.",
					imageAlt: "TarkovHack download and install delivery flow",
					galleryTitle: "Download TarkovHack",
					heroImage: "/images/tarkov-cheats-raid.webp",
					ctaPrimary: "Acquista TarkovHack",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Download TarkovHack",
							paragraphs: [
								"TarkovHack unisce ESP wallhack, radar hack e tarkov aimbot indetectable per Tarkov su PC Windows. digital license download after payment.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye anti-cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch BattlEye anti-cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye anti-cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye anti-cheat.",
								"Contatta support@tarkovhack.com per supporto o richieste legali.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Mod menu Tarkov | Toggle in-game",
					description: "Mod menu Tarkov: in-client ESP and soft aim toggles. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Mod menu Tarkov",
					intro: "TarkovHack unisce ESP wallhack, radar hack e tarkov aimbot indetectable per Tarkov su PC Windows. Mod menu Tarkov.",
					imageAlt: "TarkovHack in-game menu controls",
					galleryTitle: "Mod menu Tarkov",
					heroImage: "/images/tarkov-cheats-radar.webp",
					ctaPrimary: "Acquista TarkovHack",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Mod menu Tarkov",
							paragraphs: [
								"TarkovHack unisce ESP wallhack, radar hack e tarkov aimbot indetectable per Tarkov su PC Windows. in-client ESP and soft aim toggles.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye anti-cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch BattlEye anti-cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye anti-cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye anti-cheat.",
								"Contatta support@tarkovhack.com per supporto o richieste legali.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Soft aim Tarkov | Impostazioni soft aim",
					description: "Soft aim Tarkov: smooth soft aim settings for Windows PC. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Soft aim Tarkov",
					intro: "TarkovHack unisce ESP wallhack, radar hack e tarkov aimbot indetectable per Tarkov su PC Windows. Soft aim Tarkov.",
					imageAlt: "Tarkov soft aim FOV and smoothness settings",
					galleryTitle: "Soft aim Tarkov",
					heroImage: "/images/tarkov-cheats-aimbot-view.webp",
					ctaPrimary: "Acquista TarkovHack",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/tarkov-aimbot/",
					sections: [
						{
							h2: "Soft aim Tarkov",
							paragraphs: [
								"TarkovHack unisce ESP wallhack, radar hack e tarkov aimbot indetectable per Tarkov su PC Windows. smooth soft aim settings for Windows PC.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye anti-cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch BattlEye anti-cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye anti-cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye anti-cheat.",
								"Contatta support@tarkovhack.com per supporto o richieste legali.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Migliori cheat Tarkov | Checklist acquirente",
					description: "Migliori cheat Tarkov: what to compare before buying TarkovHack. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Migliori cheat Tarkov",
					intro: "TarkovHack unisce ESP wallhack, radar hack e tarkov aimbot indetectable per Tarkov su PC Windows. Migliori cheat Tarkov.",
					imageAlt: "TarkovHack overview for Escape from Tarkov on PC",
					galleryTitle: "Migliori cheat Tarkov",
					heroImage: "/images/tarkov-cheats-esp.webp",
					ctaPrimary: "Acquista TarkovHack",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Migliori cheat Tarkov",
							paragraphs: [
								"TarkovHack unisce ESP wallhack, radar hack e tarkov aimbot indetectable per Tarkov su PC Windows. what to compare before buying TarkovHack.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye anti-cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch BattlEye anti-cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye anti-cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye anti-cheat.",
								"Contatta support@tarkovhack.com per supporto o richieste legali.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Hack aimbot Tarkov | Assist soft aim",
					description: "Hack aimbot Tarkov: undetected Aimbot hack assist for Escape from Tarkov. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Hack aimbot Tarkov",
					intro: "TarkovHack unisce ESP wallhack, radar hack e tarkov aimbot indetectable per Tarkov su PC Windows. Hack aimbot Tarkov.",
					imageAlt: "Tarkov aimbot hack controls and bone priority",
					galleryTitle: "Hack aimbot Tarkov",
					heroImage: "/images/tarkov-cheats-aimbot-view.webp",
					ctaPrimary: "Acquista TarkovHack",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/tarkov-aimbot/",
					sections: [
						{
							h2: "Hack aimbot Tarkov",
							paragraphs: [
								"TarkovHack unisce ESP wallhack, radar hack e tarkov aimbot indetectable per Tarkov su PC Windows. undetected Aimbot hack assist for Escape from Tarkov.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye anti-cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch BattlEye anti-cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye anti-cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye anti-cheat.",
								"Contatta support@tarkovhack.com per supporto o richieste legali.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Hack ESP Tarkov | Box e loot",
					description: "Hack ESP Tarkov: ESP hack boxes, loot pins, and distance. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Hack ESP Tarkov",
					intro: "TarkovHack unisce ESP wallhack, radar hack e tarkov aimbot indetectable per Tarkov su PC Windows. Hack ESP Tarkov.",
					imageAlt: "Tarkov ESP hack boxes and loot markers",
					galleryTitle: "Hack ESP Tarkov",
					heroImage: "/images/tarkov-cheats-wallhack.webp",
					ctaPrimary: "Acquista TarkovHack",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/tarkov-esp/",
					sections: [
						{
							h2: "Hack ESP Tarkov",
							paragraphs: [
								"TarkovHack unisce ESP wallhack, radar hack e tarkov aimbot indetectable per Tarkov su PC Windows. ESP hack boxes, loot pins, and distance.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye anti-cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch BattlEye anti-cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye anti-cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye anti-cheat.",
								"Contatta support@tarkovhack.com per supporto o richieste legali.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Unlock all Tarkov | Cosa significa",
					description: "Unlock all Tarkov: unlock-all searches vs real ESP and Aimbot tools. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Unlock all Tarkov",
					intro: "TarkovHack unisce ESP wallhack, radar hack e tarkov aimbot indetectable per Tarkov su PC Windows. Unlock all Tarkov.",
					imageAlt: "TarkovHack license features overview",
					galleryTitle: "Unlock all Tarkov",
					heroImage: "/images/tarkov-cheats-radar.webp",
					ctaPrimary: "Acquista TarkovHack",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unlock all Tarkov",
							paragraphs: [
								"TarkovHack unisce ESP wallhack, radar hack e tarkov aimbot indetectable per Tarkov su PC Windows. unlock-all searches vs real ESP and Aimbot tools.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye anti-cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch BattlEye anti-cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye anti-cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye anti-cheat.",
								"Contatta support@tarkovhack.com per supporto o richieste legali.",
							],
						},
					],
				},
				privacy: {
					title: "Informativa privacy | TarkovHack",
					description: "Informativa privacy for TarkovHack — ESP wallhack, Aimbot, PC Windows.",
					h1: "Informativa privacy",
					intro: "TarkovHack unisce ESP wallhack, radar hack e tarkov aimbot indetectable per Tarkov su PC Windows. Informativa privacy for tarkovhack.com and Escape from Tarkov licenses.",
					imageAlt: "TarkovHack",
					galleryTitle: "TarkovHack",
					heroImage: "/images/tarkov-cheats-aimbot.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read terms",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we collect",
							paragraphs: [
								"TarkovHack unisce ESP wallhack, radar hack e tarkov aimbot indetectable per Tarkov su PC Windows. Contact email, Zadeyo order references, and basic site security data.",
								"Payment details are processed by Zadeyo checkout — not stored on tarkovhack.com.",
							],
						},
						{
							h2: "How we use data",
							paragraphs: [
								"TarkovHack unisce ESP wallhack, radar hack e tarkov aimbot indetectable per Tarkov su PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Controlla Updates dopo patch BattlEye anti-cheat. Nessun cheat garantisce stato indetectable permanente.",
							],
						},
						{
							h2: "Your rights",
							paragraphs: [
								"Contatta support@tarkovhack.com per supporto o richieste legali.",
								"Email: support@tarkovhack.com",
							],
						},
					],
				},
				refund: {
					title: "Politica di rimborso | TarkovHack",
					description: "Politica di rimborso for TarkovHack — ESP wallhack, Aimbot, PC Windows.",
					h1: "Politica di rimborso",
					intro: "TarkovHack unisce ESP wallhack, radar hack e tarkov aimbot indetectable per Tarkov su PC Windows. Politica di rimborso for tarkovhack.com and Escape from Tarkov licenses.",
					imageAlt: "TarkovHack",
					galleryTitle: "TarkovHack",
					heroImage: "/images/tarkov-cheats-raid.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digital delivery",
							paragraphs: [
								"TarkovHack unisce ESP wallhack, radar hack e tarkov aimbot indetectable per Tarkov su PC Windows. Contact email, Zadeyo order references, and basic site security data.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye anti-cheat.",
							],
						},
						{
							h2: "Refund approval",
							paragraphs: [
								"TarkovHack unisce ESP wallhack, radar hack e tarkov aimbot indetectable per Tarkov su PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Controlla Updates dopo patch BattlEye anti-cheat. Nessun cheat garantisce stato indetectable permanente.",
							],
						},
						{
							h2: "How to request",
							paragraphs: [
								"Contatta support@tarkovhack.com per supporto o richieste legali.",
								"Email: support@tarkovhack.com",
							],
						},
					],
				},
				terms: {
					title: "Termini di utilizzo | TarkovHack",
					description: "Termini di utilizzo for TarkovHack — ESP wallhack, Aimbot, PC Windows.",
					h1: "Termini di utilizzo",
					intro: "TarkovHack unisce ESP wallhack, radar hack e tarkov aimbot indetectable per Tarkov su PC Windows. Termini di utilizzo for tarkovhack.com and Escape from Tarkov licenses.",
					imageAlt: "TarkovHack",
					galleryTitle: "TarkovHack",
					heroImage: "/images/tarkov-cheats-aimbot-view.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Acceptance of terms",
							paragraphs: [
								"TarkovHack unisce ESP wallhack, radar hack e tarkov aimbot indetectable per Tarkov su PC Windows. Contact email, Zadeyo order references, and basic site security data.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione BattlEye anti-cheat.",
							],
						},
						{
							h2: "Risk disclaimer",
							paragraphs: [
								"TarkovHack unisce ESP wallhack, radar hack e tarkov aimbot indetectable per Tarkov su PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "Policy changes",
							paragraphs: [
								"Contatta support@tarkovhack.com per supporto o richieste legali.",
								"Email: support@tarkovhack.com",
							],
						},
					],
				},
			},
		},
		nl: {
			ui: {
				nav: {
					home: "Home",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Functies",
					pricing: "Prijzen",
					setup: "Setup",
					updates: "Updates",
					faq: "FAQ",
					buyNow: "Kopen",
				},
				hero: {
					accent: "Undetected TarkovHack",
					accentShort: "TarkovHack",
					subtitle: "ESP wallhack, radar hack en Aimbot voor Tarkov op Windows PC — BattlEye anti-cheat-onderhoud inbegrepen.",
					subtitleShort: "ESP, radar & Aimbot voor Tarkov PC",
					buyNow: "Nu kopen",
					seeFeatures: "Bekijk functies",
				},
				trust: {
					status: "Online",
					statusNote: "TarkovHack pakket is live voor Tarkov op Windows PC.",
					statusShort: "Live",
					delivery: "Directe digitale levering",
					platform: "Windows 10 & 11",
					antiCheat: "BattlEye anti-cheat-onderhoud ondersteund",
					antiCheatShort: "BattlEye anti-cheat support",
				},
				product: {
					title: "TarkovHack",
					addToCart: "In winkelwagen",
					monthly: "Maandelijks",
					lifetime: "Lifetime",
					available: "Nu beschikbaar",
					gameBadge: "Tarkov",
					platformBadge: "Windows PC",
					statusBadge: "Undetected pakket",
				},
				reviews: {
					title: "Wat spelers zeggen",
					subtitle: "Recente feedback van TarkovHack kopers",
					outOf: "van 5",
					countLabel: "reviews",
				},
				common: {
					buyNow: "Nu kopen",
					readGuide: "Lees gids",
					language: "Taal",
					officialLanguageNote: "Engels is de officiële taal. Andere talen zijn vertaald voor wereldwijde SEO.",
					relatedPages: "Gerelateerde pagina's",
				},
				footer: {
					explore: "Verkennen",
					help: "Help & juridisch",
					tagline: "Undetected ESP, wallhack, radar en Aimbot voor Tarkov — checkout via Zadeyo.",
				},
				images: {
					hero: "TarkovHack hero — ESP and aimbot overlay in Escape from Tarkov",
					espWallhack: "Wallhack outlines showing PMCs and Scavs through walls",
					aimbotCombat: "Soft aim assist overlay during an Escape from Tarkov raid",
					squadFight: "TarkovHack combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Tarkov raid",
					headerArt: "Aimbot view and bone priority controls for Tarkov",
					cheatsPackage: "2D radar threat overlay for Escape from Tarkov",
					rebootFight: "Aimbot assist during a Tarkov firefight",
					battleRoyale: "TarkovHack in-raid overview for Windows PC",
					battleRoyaleIsland: "ESP markers for loot and extracts in Tarkov",
				},
			},
			pages: {
				home: {
					title: "TarkovHack 2026 | ESP, Wallhack & Aimbot",
					description: "Undetected TarkovHack voor Escape from Tarkov op PC. ESP wallhack, radar hack en Aimbot met BattlEye anti-cheat-onderhoud. Directe digitale levering.",
					h1: "TarkovHack — Undetected ESP, Wallhack & Aimbot",
					intro: "Undetected Windows PC pakket voor Escape from Tarkov: ESP wallhack, radar en Aimbot met BattlEye anti-cheat-onderhoud na elke patch.",
					imageAlt: "Tarkov ESP player tags hack",
					galleryTitle: "TarkovHack galerij — ESP, Aimbot en wallhack",
					heroImage: "/images/tarkov-cheats-esp.webp",
					ctaPrimary: "TarkovHack kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Waarom TarkovHack in 2026",
							paragraphs: [
								"TarkovHack bundelt ESP wallhack, radar hack en tarkov aimbot als undetected pakket voor Tarkov op Windows PC. Ideaal om vijandelijke squads te lezen in BR en scav-run.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye anti-cheat-onderhoud.",
							],
						},
						{
							h2: "ESP wallhack, radar en Aimbot in één licentie",
							paragraphs: [
								"TarkovHack bundelt ESP wallhack, radar hack en tarkov aimbot als undetected pakket voor Tarkov op Windows PC. Eén licentie in plaats van losse tools.",
								"Check Updates na BattlEye anti-cheat-patches. Geen cheat garandeert permanent undetected status.",
							],
						},
					],
				},
				"tarkov-esp": {
					title: "Tarkov ESP | Player Boxes & Wallhack",
					description: "Tarkov ESP: player boxes, loot markers, and wallhack overlays. directe digitale levering. undetected — Windows PC.",
					h1: "Tarkov ESP",
					intro: "TarkovHack bundelt ESP wallhack, radar hack en tarkov aimbot als undetected pakket voor Tarkov op Windows PC. Tarkov ESP.",
					imageAlt: "Tarkov ESP player boxes and distance readouts in a raid",
					galleryTitle: "Tarkov ESP",
					heroImage: "/images/tarkov-cheats-radar.webp",
					ctaPrimary: "TarkovHack kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/tarkov-cheats/",
					sections: [
						{
							h2: "Tarkov ESP",
							paragraphs: [
								"TarkovHack bundelt ESP wallhack, radar hack en tarkov aimbot als undetected pakket voor Tarkov op Windows PC. player boxes, loot markers, and wallhack overlays.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye anti-cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na BattlEye anti-cheat-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye anti-cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye anti-cheat-onderhoud.",
								"support@tarkovhack.com voor support en juridische vragen.",
							],
						},
					],
				},
				"tarkov-aimbot": {
					title: "Tarkov Aimbot | Soft Aim Controls",
					description: "Tarkov Aimbot: soft aim, FOV, and per-weapon Aimbot profiles. directe digitale levering. undetected — Windows PC.",
					h1: "Tarkov Aimbot",
					intro: "TarkovHack bundelt ESP wallhack, radar hack en tarkov aimbot als undetected pakket voor Tarkov op Windows PC. Tarkov Aimbot.",
					imageAlt: "Tarkov aimbot and soft aim controls on Windows PC",
					galleryTitle: "Tarkov Aimbot",
					heroImage: "/images/tarkov-cheats-aimbot.webp",
					ctaPrimary: "TarkovHack kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/tarkov-esp/",
					sections: [
						{
							h2: "Tarkov Aimbot",
							paragraphs: [
								"TarkovHack bundelt ESP wallhack, radar hack en tarkov aimbot als undetected pakket voor Tarkov op Windows PC. soft aim, FOV, and per-weapon Aimbot profiles.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye anti-cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na BattlEye anti-cheat-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye anti-cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye anti-cheat-onderhoud.",
								"support@tarkovhack.com voor support en juridische vragen.",
							],
						},
					],
				},
				features: {
					title: "Functies | Full Feature List",
					description: "Functies: ESP, soft aim, radar controls. directe digitale levering. undetected — Windows PC.",
					h1: "Functies",
					intro: "TarkovHack bundelt ESP wallhack, radar hack en tarkov aimbot als undetected pakket voor Tarkov op Windows PC. Functies.",
					imageAlt: "TarkovHack features — ESP, soft aim, and radar screenshots",
					galleryTitle: "Functies",
					heroImage: "/images/tarkov-cheats-aimbot-view.webp",
					ctaPrimary: "TarkovHack kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Functies",
							paragraphs: [
								"TarkovHack bundelt ESP wallhack, radar hack en tarkov aimbot als undetected pakket voor Tarkov op Windows PC. ESP, soft aim, radar controls.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye anti-cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na BattlEye anti-cheat-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye anti-cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye anti-cheat-onderhoud.",
								"support@tarkovhack.com voor support en juridische vragen.",
							],
						},
					],
				},
				pricing: {
					title: "Prijzen | Monthly & Lifetime",
					description: "Prijzen: $35 monthly or $150 lifetime licenses. directe digitale levering. undetected — Windows PC.",
					h1: "Prijzen",
					intro: "TarkovHack bundelt ESP wallhack, radar hack en tarkov aimbot als undetected pakket voor Tarkov op Windows PC. Prijzen.",
					imageAlt: "TarkovHack store plans for monthly and lifetime licenses",
					galleryTitle: "Prijzen",
					heroImage: "/images/tarkov-cheats-raid.webp",
					ctaPrimary: "TarkovHack kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Prijzen",
							paragraphs: [
								"TarkovHack bundelt ESP wallhack, radar hack en tarkov aimbot als undetected pakket voor Tarkov op Windows PC. $35 monthly or $150 lifetime licenses.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye anti-cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na BattlEye anti-cheat-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye anti-cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye anti-cheat-onderhoud.",
								"support@tarkovhack.com voor support en juridische vragen.",
							],
						},
					],
				},
				setup: {
					title: "Setup | PC Setup Guide",
					description: "Setup: Windows PC activation and first-launch setup. directe digitale levering. undetected — Windows PC.",
					h1: "Setup",
					intro: "TarkovHack bundelt ESP wallhack, radar hack en tarkov aimbot als undetected pakket voor Tarkov op Windows PC. Setup.",
					imageAlt: "TarkovHack setup guide screenshot for Windows PC",
					galleryTitle: "Setup",
					heroImage: "/images/tarkov-cheats-radar.webp",
					ctaPrimary: "TarkovHack kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Setup",
							paragraphs: [
								"TarkovHack bundelt ESP wallhack, radar hack en tarkov aimbot als undetected pakket voor Tarkov op Windows PC. Windows PC activation and first-launch setup.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye anti-cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na BattlEye anti-cheat-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye anti-cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye anti-cheat-onderhoud.",
								"support@tarkovhack.com voor support en juridische vragen.",
							],
						},
					],
				},
				updates: {
					title: "Updates | BattlEye Maintenance Log",
					description: "Updates: BattlEye patch status and rebuild notes. directe digitale levering. undetected — Windows PC.",
					h1: "Updates",
					intro: "TarkovHack bundelt ESP wallhack, radar hack en tarkov aimbot als undetected pakket voor Tarkov op Windows PC. Updates.",
					imageAlt: "TarkovHack live status after BattlEye and game patches",
					galleryTitle: "Updates",
					heroImage: "/images/tarkov-cheats-esp.webp",
					ctaPrimary: "TarkovHack kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/tarkov-cheats/",
					sections: [
						{
							h2: "Updates",
							paragraphs: [
								"TarkovHack bundelt ESP wallhack, radar hack en tarkov aimbot als undetected pakket voor Tarkov op Windows PC. BattlEye patch status and rebuild notes.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye anti-cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na BattlEye anti-cheat-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye anti-cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye anti-cheat-onderhoud.",
								"support@tarkovhack.com voor support en juridische vragen.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Common Answers",
					description: "FAQ: ESP, soft aim, delivery, and BattlEye questions. directe digitale levering. undetected — Windows PC.",
					h1: "FAQ",
					intro: "TarkovHack bundelt ESP wallhack, radar hack en tarkov aimbot als undetected pakket voor Tarkov op Windows PC. FAQ.",
					imageAlt: "TarkovHack FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/tarkov-cheats-aimbot-view.webp",
					ctaPrimary: "TarkovHack kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"TarkovHack bundelt ESP wallhack, radar hack en tarkov aimbot als undetected pakket voor Tarkov op Windows PC. ESP, soft aim, delivery, and BattlEye questions.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye anti-cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na BattlEye anti-cheat-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye anti-cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye anti-cheat-onderhoud.",
								"support@tarkovhack.com voor support en juridische vragen.",
							],
						},
					],
				},
				support: {
					title: "Support | Help & Contact",
					description: "Support: order help and license support contact. directe digitale levering. undetected — Windows PC.",
					h1: "Support",
					intro: "TarkovHack bundelt ESP wallhack, radar hack en tarkov aimbot als undetected pakket voor Tarkov op Windows PC. Support.",
					imageAlt: "TarkovHack support page for license and setup help",
					galleryTitle: "Support",
					heroImage: "/images/tarkov-cheats-raid.webp",
					ctaPrimary: "TarkovHack kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Support",
							paragraphs: [
								"TarkovHack bundelt ESP wallhack, radar hack en tarkov aimbot als undetected pakket voor Tarkov op Windows PC. order help and license support contact.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye anti-cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na BattlEye anti-cheat-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye anti-cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye anti-cheat-onderhoud.",
								"support@tarkovhack.com voor support en juridische vragen.",
							],
						},
					],
				},
				undetected: {
					title: "Undetected Cheats | BattlEye Safe Status",
					description: "Undetected Cheats: undetected maintenance after BattlEye anti-cheat patches. directe digitale levering. undetected — Windows PC.",
					h1: "Undetected Cheats",
					intro: "TarkovHack bundelt ESP wallhack, radar hack en tarkov aimbot als undetected pakket voor Tarkov op Windows PC. Undetected Cheats.",
					imageAlt: "TarkovHack undetected status overview for Windows PC",
					galleryTitle: "Undetected Cheats",
					heroImage: "/images/tarkov-cheats-wallhack.webp",
					ctaPrimary: "TarkovHack kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/tarkov-cheats/",
					sections: [
						{
							h2: "Undetected Cheats",
							paragraphs: [
								"TarkovHack bundelt ESP wallhack, radar hack en tarkov aimbot als undetected pakket voor Tarkov op Windows PC. undetected maintenance after BattlEye anti-cheat patches.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye anti-cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na BattlEye anti-cheat-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye anti-cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye anti-cheat-onderhoud.",
								"support@tarkovhack.com voor support en juridische vragen.",
							],
						},
					],
				},
				wallhack: {
					title: "Tarkov Wallhack | ESP Visibility",
					description: "Tarkov Wallhack: wallhack ESP for players, loot, and distance. directe digitale levering. undetected — Windows PC.",
					h1: "Tarkov Wallhack",
					intro: "TarkovHack bundelt ESP wallhack, radar hack en tarkov aimbot als undetected pakket voor Tarkov op Windows PC. Tarkov Wallhack.",
					imageAlt: "Tarkov wallhack visibility through walls in a raid",
					galleryTitle: "Tarkov Wallhack",
					heroImage: "/images/tarkov-cheats-wallhack.webp",
					ctaPrimary: "TarkovHack kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/tarkov-esp/",
					sections: [
						{
							h2: "Tarkov Wallhack",
							paragraphs: [
								"TarkovHack bundelt ESP wallhack, radar hack en tarkov aimbot als undetected pakket voor Tarkov op Windows PC. wallhack ESP for players, loot, and distance.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye anti-cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na BattlEye anti-cheat-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye anti-cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye anti-cheat-onderhoud.",
								"support@tarkovhack.com voor support en juridische vragen.",
							],
						},
					],
				},
				radar: {
					title: "Radar Hack | 2D Threat Overlay",
					description: "Radar Hack: 2D radar cues for flanks and rotations. directe digitale levering. undetected — Windows PC.",
					h1: "Radar Hack",
					intro: "TarkovHack bundelt ESP wallhack, radar hack en tarkov aimbot als undetected pakket voor Tarkov op Windows PC. Radar Hack.",
					imageAlt: "Tarkov 2D radar overlay showing nearby threats",
					galleryTitle: "Radar Hack",
					heroImage: "/images/tarkov-cheats-radar.webp",
					ctaPrimary: "TarkovHack kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/tarkov-esp/",
					sections: [
						{
							h2: "Radar Hack",
							paragraphs: [
								"TarkovHack bundelt ESP wallhack, radar hack en tarkov aimbot als undetected pakket voor Tarkov op Windows PC. 2D radar cues for flanks and rotations.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye anti-cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na BattlEye anti-cheat-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye anti-cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye anti-cheat-onderhoud.",
								"support@tarkovhack.com voor support en juridische vragen.",
							],
						},
					],
				},
				battleye: {
					title: "BattlEye Bypass | Patch Maintenance",
					description: "BattlEye Bypass: how BattlEye updates are handled for Escape from Tarkov hacks. directe digitale levering. undetected — Windows PC.",
					h1: "BattlEye Bypass",
					intro: "TarkovHack bundelt ESP wallhack, radar hack en tarkov aimbot als undetected pakket voor Tarkov op Windows PC. BattlEye Bypass.",
					imageAlt: "TarkovHack maintenance after a BattlEye patch",
					galleryTitle: "BattlEye Bypass",
					heroImage: "/images/tarkov-cheats-aimbot.webp",
					ctaPrimary: "TarkovHack kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "BattlEye Bypass",
							paragraphs: [
								"TarkovHack bundelt ESP wallhack, radar hack en tarkov aimbot als undetected pakket voor Tarkov op Windows PC. how BattlEye updates are handled for Escape from Tarkov hacks.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye anti-cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na BattlEye anti-cheat-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye anti-cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye anti-cheat-onderhoud.",
								"support@tarkovhack.com voor support en juridische vragen.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "TarkovHack 2026 | Buyer Guide",
					description: "TarkovHack 2026: 2026 TarkovHack checklist before checkout. directe digitale levering. undetected — Windows PC.",
					h1: "TarkovHack 2026",
					intro: "TarkovHack bundelt ESP wallhack, radar hack en tarkov aimbot als undetected pakket voor Tarkov op Windows PC. TarkovHack 2026.",
					imageAlt: "TarkovHack product overview for Escape from Tarkov",
					galleryTitle: "TarkovHack 2026",
					heroImage: "/images/tarkov-cheats-esp.webp",
					ctaPrimary: "TarkovHack kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/tarkov-cheats/",
					sections: [
						{
							h2: "TarkovHack 2026",
							paragraphs: [
								"TarkovHack bundelt ESP wallhack, radar hack en tarkov aimbot als undetected pakket voor Tarkov op Windows PC. 2026 TarkovHack checklist before checkout.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye anti-cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na BattlEye anti-cheat-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye anti-cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye anti-cheat-onderhoud.",
								"support@tarkovhack.com voor support en juridische vragen.",
							],
						},
					],
				},
				hacks: {
					title: "TarkovHack | ESP Aimbot Guide",
					description: "TarkovHack: the Escape from Tarkov hacks pillar for ESP and Aimbot. directe digitale levering. undetected — Windows PC.",
					h1: "TarkovHack",
					intro: "TarkovHack bundelt ESP wallhack, radar hack en tarkov aimbot als undetected pakket voor Tarkov op Windows PC. TarkovHack.",
					imageAlt: "TarkovHack product page — ESP, aimbot, and radar",
					galleryTitle: "TarkovHack",
					heroImage: "/images/tarkov-cheats-raid.webp",
					ctaPrimary: "TarkovHack kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "TarkovHack",
							paragraphs: [
								"TarkovHack bundelt ESP wallhack, radar hack en tarkov aimbot als undetected pakket voor Tarkov op Windows PC. the Escape from Tarkov hacks pillar for ESP and Aimbot.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye anti-cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na BattlEye anti-cheat-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye anti-cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye anti-cheat-onderhoud.",
								"support@tarkovhack.com voor support en juridische vragen.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Tarkov Cheat Download | Instant Access",
					description: "Tarkov Cheat Download: digital license download after payment. directe digitale levering. undetected — Windows PC.",
					h1: "Tarkov Cheat Download",
					intro: "TarkovHack bundelt ESP wallhack, radar hack en tarkov aimbot als undetected pakket voor Tarkov op Windows PC. Tarkov Cheat Download.",
					imageAlt: "TarkovHack download and install delivery flow",
					galleryTitle: "Tarkov Cheat Download",
					heroImage: "/images/tarkov-cheats-raid.webp",
					ctaPrimary: "TarkovHack kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Tarkov Cheat Download",
							paragraphs: [
								"TarkovHack bundelt ESP wallhack, radar hack en tarkov aimbot als undetected pakket voor Tarkov op Windows PC. digital license download after payment.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye anti-cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na BattlEye anti-cheat-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye anti-cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye anti-cheat-onderhoud.",
								"support@tarkovhack.com voor support en juridische vragen.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Tarkov Mod Menu | In-Game Toggles",
					description: "Tarkov Mod Menu: in-client ESP and soft aim toggles. directe digitale levering. undetected — Windows PC.",
					h1: "Tarkov Mod Menu",
					intro: "TarkovHack bundelt ESP wallhack, radar hack en tarkov aimbot als undetected pakket voor Tarkov op Windows PC. Tarkov Mod Menu.",
					imageAlt: "TarkovHack in-game menu controls",
					galleryTitle: "Tarkov Mod Menu",
					heroImage: "/images/tarkov-cheats-radar.webp",
					ctaPrimary: "TarkovHack kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Tarkov Mod Menu",
							paragraphs: [
								"TarkovHack bundelt ESP wallhack, radar hack en tarkov aimbot als undetected pakket voor Tarkov op Windows PC. in-client ESP and soft aim toggles.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye anti-cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na BattlEye anti-cheat-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye anti-cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye anti-cheat-onderhoud.",
								"support@tarkovhack.com voor support en juridische vragen.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Tarkov Soft Aim | Smooth Aim Settings",
					description: "Tarkov Soft Aim: smooth soft aim settings for Windows PC. directe digitale levering. undetected — Windows PC.",
					h1: "Tarkov Soft Aim",
					intro: "TarkovHack bundelt ESP wallhack, radar hack en tarkov aimbot als undetected pakket voor Tarkov op Windows PC. Tarkov Soft Aim.",
					imageAlt: "Tarkov soft aim FOV and smoothness settings",
					galleryTitle: "Tarkov Soft Aim",
					heroImage: "/images/tarkov-cheats-aimbot-view.webp",
					ctaPrimary: "TarkovHack kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/tarkov-aimbot/",
					sections: [
						{
							h2: "Tarkov Soft Aim",
							paragraphs: [
								"TarkovHack bundelt ESP wallhack, radar hack en tarkov aimbot als undetected pakket voor Tarkov op Windows PC. smooth soft aim settings for Windows PC.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye anti-cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na BattlEye anti-cheat-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye anti-cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye anti-cheat-onderhoud.",
								"support@tarkovhack.com voor support en juridische vragen.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Beste TarkovHack | Buyer Checklist",
					description: "Beste TarkovHack: what to compare before buying TarkovHack. directe digitale levering. undetected — Windows PC.",
					h1: "Beste TarkovHack",
					intro: "TarkovHack bundelt ESP wallhack, radar hack en tarkov aimbot als undetected pakket voor Tarkov op Windows PC. Beste TarkovHack.",
					imageAlt: "TarkovHack overview for Escape from Tarkov on PC",
					galleryTitle: "Beste TarkovHack",
					heroImage: "/images/tarkov-cheats-esp.webp",
					ctaPrimary: "TarkovHack kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Beste TarkovHack",
							paragraphs: [
								"TarkovHack bundelt ESP wallhack, radar hack en tarkov aimbot als undetected pakket voor Tarkov op Windows PC. what to compare before buying TarkovHack.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye anti-cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na BattlEye anti-cheat-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye anti-cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye anti-cheat-onderhoud.",
								"support@tarkovhack.com voor support en juridische vragen.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Tarkov Aimbot Hack | Soft Aim Assist",
					description: "Tarkov Aimbot Hack: undetected Aimbot hack assist for Escape from Tarkov. directe digitale levering. undetected — Windows PC.",
					h1: "Tarkov Aimbot Hack",
					intro: "TarkovHack bundelt ESP wallhack, radar hack en tarkov aimbot als undetected pakket voor Tarkov op Windows PC. Tarkov Aimbot Hack.",
					imageAlt: "Tarkov aimbot hack controls and bone priority",
					galleryTitle: "Tarkov Aimbot Hack",
					heroImage: "/images/tarkov-cheats-aimbot-view.webp",
					ctaPrimary: "TarkovHack kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/tarkov-aimbot/",
					sections: [
						{
							h2: "Tarkov Aimbot Hack",
							paragraphs: [
								"TarkovHack bundelt ESP wallhack, radar hack en tarkov aimbot als undetected pakket voor Tarkov op Windows PC. undetected Aimbot hack assist for Escape from Tarkov.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye anti-cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na BattlEye anti-cheat-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye anti-cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye anti-cheat-onderhoud.",
								"support@tarkovhack.com voor support en juridische vragen.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Tarkov ESP Hack | Boxes & Loot",
					description: "Tarkov ESP Hack: ESP hack boxes, loot pins, and distance. directe digitale levering. undetected — Windows PC.",
					h1: "Tarkov ESP Hack",
					intro: "TarkovHack bundelt ESP wallhack, radar hack en tarkov aimbot als undetected pakket voor Tarkov op Windows PC. Tarkov ESP Hack.",
					imageAlt: "Tarkov ESP hack boxes and loot markers",
					galleryTitle: "Tarkov ESP Hack",
					heroImage: "/images/tarkov-cheats-wallhack.webp",
					ctaPrimary: "TarkovHack kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/tarkov-esp/",
					sections: [
						{
							h2: "Tarkov ESP Hack",
							paragraphs: [
								"TarkovHack bundelt ESP wallhack, radar hack en tarkov aimbot als undetected pakket voor Tarkov op Windows PC. ESP hack boxes, loot pins, and distance.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye anti-cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na BattlEye anti-cheat-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye anti-cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye anti-cheat-onderhoud.",
								"support@tarkovhack.com voor support en juridische vragen.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Tarkov Unlock All | What It Means",
					description: "Tarkov Unlock All: unlock-all searches vs real ESP and Aimbot tools. directe digitale levering. undetected — Windows PC.",
					h1: "Tarkov Unlock All",
					intro: "TarkovHack bundelt ESP wallhack, radar hack en tarkov aimbot als undetected pakket voor Tarkov op Windows PC. Tarkov Unlock All.",
					imageAlt: "TarkovHack license features overview",
					galleryTitle: "Tarkov Unlock All",
					heroImage: "/images/tarkov-cheats-radar.webp",
					ctaPrimary: "TarkovHack kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Tarkov Unlock All",
							paragraphs: [
								"TarkovHack bundelt ESP wallhack, radar hack en tarkov aimbot als undetected pakket voor Tarkov op Windows PC. unlock-all searches vs real ESP and Aimbot tools.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye anti-cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na BattlEye anti-cheat-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye anti-cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye anti-cheat-onderhoud.",
								"support@tarkovhack.com voor support en juridische vragen.",
							],
						},
					],
				},
				privacy: {
					title: "Privacybeleid | TarkovHack",
					description: "Privacybeleid for TarkovHack — ESP wallhack, Aimbot, Windows PC.",
					h1: "Privacybeleid",
					intro: "TarkovHack bundelt ESP wallhack, radar hack en tarkov aimbot als undetected pakket voor Tarkov op Windows PC. Privacybeleid for tarkovhack.com and Escape from Tarkov licenses.",
					imageAlt: "TarkovHack",
					galleryTitle: "TarkovHack",
					heroImage: "/images/tarkov-cheats-aimbot.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read terms",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we collect",
							paragraphs: [
								"TarkovHack bundelt ESP wallhack, radar hack en tarkov aimbot als undetected pakket voor Tarkov op Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"Payment details are processed by Zadeyo checkout — not stored on tarkovhack.com.",
							],
						},
						{
							h2: "How we use data",
							paragraphs: [
								"TarkovHack bundelt ESP wallhack, radar hack en tarkov aimbot als undetected pakket voor Tarkov op Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Check Updates na BattlEye anti-cheat-patches. Geen cheat garandeert permanent undetected status.",
							],
						},
						{
							h2: "Your rights",
							paragraphs: [
								"support@tarkovhack.com voor support en juridische vragen.",
								"Email: support@tarkovhack.com",
							],
						},
					],
				},
				refund: {
					title: "Restitutiebeleid | TarkovHack",
					description: "Restitutiebeleid for TarkovHack — ESP wallhack, Aimbot, Windows PC.",
					h1: "Restitutiebeleid",
					intro: "TarkovHack bundelt ESP wallhack, radar hack en tarkov aimbot als undetected pakket voor Tarkov op Windows PC. Restitutiebeleid for tarkovhack.com and Escape from Tarkov licenses.",
					imageAlt: "TarkovHack",
					galleryTitle: "TarkovHack",
					heroImage: "/images/tarkov-cheats-raid.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digital delivery",
							paragraphs: [
								"TarkovHack bundelt ESP wallhack, radar hack en tarkov aimbot als undetected pakket voor Tarkov op Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye anti-cheat-onderhoud.",
							],
						},
						{
							h2: "Refund approval",
							paragraphs: [
								"TarkovHack bundelt ESP wallhack, radar hack en tarkov aimbot als undetected pakket voor Tarkov op Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Check Updates na BattlEye anti-cheat-patches. Geen cheat garandeert permanent undetected status.",
							],
						},
						{
							h2: "How to request",
							paragraphs: [
								"support@tarkovhack.com voor support en juridische vragen.",
								"Email: support@tarkovhack.com",
							],
						},
					],
				},
				terms: {
					title: "Gebruiksvoorwaarden | TarkovHack",
					description: "Gebruiksvoorwaarden for TarkovHack — ESP wallhack, Aimbot, Windows PC.",
					h1: "Gebruiksvoorwaarden",
					intro: "TarkovHack bundelt ESP wallhack, radar hack en tarkov aimbot als undetected pakket voor Tarkov op Windows PC. Gebruiksvoorwaarden for tarkovhack.com and Escape from Tarkov licenses.",
					imageAlt: "TarkovHack",
					galleryTitle: "TarkovHack",
					heroImage: "/images/tarkov-cheats-aimbot-view.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Acceptance of terms",
							paragraphs: [
								"TarkovHack bundelt ESP wallhack, radar hack en tarkov aimbot als undetected pakket voor Tarkov op Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. BattlEye anti-cheat-onderhoud.",
							],
						},
						{
							h2: "Risk disclaimer",
							paragraphs: [
								"TarkovHack bundelt ESP wallhack, radar hack en tarkov aimbot als undetected pakket voor Tarkov op Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "Policy changes",
							paragraphs: [
								"support@tarkovhack.com voor support en juridische vragen.",
								"Email: support@tarkovhack.com",
							],
						},
					],
				},
			},
		},
		pl: {
			ui: {
				nav: {
					home: "Strona główna",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Funkcje",
					pricing: "Cennik",
					setup: "Instalacja",
					updates: "Aktualizacje",
					faq: "FAQ",
					buyNow: "Kup teraz",
				},
				hero: {
					accent: "Undetected cheaty Tarkov",
					accentShort: "TarkovHack",
					subtitle: "ESP wallhack, radar hack i Aimbot do Tarkov na PC Windows — konserwacja BattlEye anti-cheat w cenie.",
					subtitleShort: "ESP, radar i Aimbot dla Tarkov PC",
					buyNow: "Kup teraz",
					seeFeatures: "Zobacz funkcje",
				},
				trust: {
					status: "Online",
					statusNote: "Pakiet TarkovHack jest aktywny dla Tarkov na PC Windows.",
					statusShort: "Aktywny",
					delivery: "Natychmiastowa dostawa cyfrowa",
					platform: "Windows 10 i 11",
					antiCheat: "Wsparcie konserwacji BattlEye anti-cheat",
					antiCheatShort: "BattlEye anti-cheat wsparcie",
				},
				product: {
					title: "TarkovHack",
					addToCart: "Dodaj do koszyka",
					monthly: "Miesięcznie",
					lifetime: "Dożywotnio",
					available: "Dostępne teraz",
					gameBadge: "Tarkov",
					platformBadge: "PC Windows",
					statusBadge: "Pakiet undetected",
				},
				reviews: {
					title: "Co mówią gracze",
					subtitle: "Ostatnie opinie kupujących TarkovHack",
					outOf: "na 5",
					countLabel: "opinii",
				},
				common: {
					buyNow: "Kup teraz",
					readGuide: "Czytaj poradnik",
					language: "Język",
					officialLanguageNote: "Angielski jest językiem oficjalnym. Inne wersje są tłumaczone dla globalnego SEO.",
					relatedPages: "Powiązane strony",
				},
				footer: {
					explore: "Odkrywaj",
					help: "Pomoc i prawo",
					tagline: "Undetected ESP, wallhack, radar i Aimbot dla Tarkov — checkout przez Zadeyo.",
				},
				images: {
					hero: "TarkovHack hero — ESP and aimbot overlay in Escape from Tarkov",
					espWallhack: "Wallhack outlines showing PMCs and Scavs through walls",
					aimbotCombat: "Soft aim assist overlay during an Escape from Tarkov raid",
					squadFight: "TarkovHack combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Tarkov raid",
					headerArt: "Aimbot view and bone priority controls for Tarkov",
					cheatsPackage: "2D radar threat overlay for Escape from Tarkov",
					rebootFight: "Aimbot assist during a Tarkov firefight",
					battleRoyale: "TarkovHack in-raid overview for Windows PC",
					battleRoyaleIsland: "ESP markers for loot and extracts in Tarkov",
				},
			},
			pages: {
				home: {
					title: "TarkovHack 2026 | ESP, Wallhack i Aimbot",
					description: "Undetected cheaty Escape from Tarkov dla Escape from Tarkov na PC. ESP wallhack, radar hack i Aimbot z konserwacją BattlEye anti-cheat. Natychmiastowa dostawa",
					h1: "TarkovHack — Undetected ESP, Wallhack i Aimbot",
					intro: "Pakiet undetected dla Escape from Tarkov na Windows PC: ESP wallhack, radar i Aimbot z konserwacją BattlEye anti-cheat po każdym patchu.",
					imageAlt: "Tarkov ESP player tags hack",
					galleryTitle: "Galeria TarkovHack — ESP, Aimbot i wallhack",
					heroImage: "/images/tarkov-cheats-esp.webp",
					ctaPrimary: "Kup TarkovHack",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Dlaczego TarkovHack w 2026",
							paragraphs: [
								"TarkovHack łączy ESP wallhack, radar hack i tarkov aimbot jako pakiet undetected dla Tarkov na PC Windows. Idealny do czytania wrogich squadów w BR i scav-run.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye anti-cheat.",
							],
						},
						{
							h2: "ESP wallhack, radar i Aimbot w jednej licencji",
							paragraphs: [
								"TarkovHack łączy ESP wallhack, radar hack i tarkov aimbot jako pakiet undetected dla Tarkov na PC Windows. Jedna licencja zamiast osobnych narzędzi.",
								"Sprawdź Updates po patchach BattlEye anti-cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
							],
						},
					],
				},
				"tarkov-esp": {
					title: "ESP Tarkov | Player Boxes & Wallhack",
					description: "ESP Tarkov: player boxes, loot markers, and wallhack overlays. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "ESP Tarkov",
					intro: "TarkovHack łączy ESP wallhack, radar hack i tarkov aimbot jako pakiet undetected dla Tarkov na PC Windows. ESP Tarkov.",
					imageAlt: "Tarkov ESP player boxes and distance readouts in a raid",
					galleryTitle: "ESP Tarkov",
					heroImage: "/images/tarkov-cheats-radar.webp",
					ctaPrimary: "Kup TarkovHack",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/tarkov-cheats/",
					sections: [
						{
							h2: "ESP Tarkov",
							paragraphs: [
								"TarkovHack łączy ESP wallhack, radar hack i tarkov aimbot jako pakiet undetected dla Tarkov na PC Windows. player boxes, loot markers, and wallhack overlays.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach BattlEye anti-cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye anti-cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye anti-cheat.",
								"support@tarkovhack.com w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				"tarkov-aimbot": {
					title: "Aimbot Tarkov | Soft Aim Controls",
					description: "Aimbot Tarkov: soft aim, FOV, and per-weapon Aimbot profiles. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Aimbot Tarkov",
					intro: "TarkovHack łączy ESP wallhack, radar hack i tarkov aimbot jako pakiet undetected dla Tarkov na PC Windows. Aimbot Tarkov.",
					imageAlt: "Tarkov aimbot and soft aim controls on Windows PC",
					galleryTitle: "Aimbot Tarkov",
					heroImage: "/images/tarkov-cheats-aimbot.webp",
					ctaPrimary: "Kup TarkovHack",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/tarkov-esp/",
					sections: [
						{
							h2: "Aimbot Tarkov",
							paragraphs: [
								"TarkovHack łączy ESP wallhack, radar hack i tarkov aimbot jako pakiet undetected dla Tarkov na PC Windows. soft aim, FOV, and per-weapon Aimbot profiles.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach BattlEye anti-cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye anti-cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye anti-cheat.",
								"support@tarkovhack.com w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				features: {
					title: "Funkcje | Full Feature List",
					description: "Funkcje: ESP, soft aim, radar controls. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Funkcje",
					intro: "TarkovHack łączy ESP wallhack, radar hack i tarkov aimbot jako pakiet undetected dla Tarkov na PC Windows. Funkcje.",
					imageAlt: "TarkovHack features — ESP, soft aim, and radar screenshots",
					galleryTitle: "Funkcje",
					heroImage: "/images/tarkov-cheats-aimbot-view.webp",
					ctaPrimary: "Kup TarkovHack",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Funkcje",
							paragraphs: [
								"TarkovHack łączy ESP wallhack, radar hack i tarkov aimbot jako pakiet undetected dla Tarkov na PC Windows. ESP, soft aim, radar controls.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach BattlEye anti-cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye anti-cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye anti-cheat.",
								"support@tarkovhack.com w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				pricing: {
					title: "Cennik | Monthly & Lifetime",
					description: "Cennik: $35 monthly or $150 lifetime licenses. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Cennik",
					intro: "TarkovHack łączy ESP wallhack, radar hack i tarkov aimbot jako pakiet undetected dla Tarkov na PC Windows. Cennik.",
					imageAlt: "TarkovHack store plans for monthly and lifetime licenses",
					galleryTitle: "Cennik",
					heroImage: "/images/tarkov-cheats-raid.webp",
					ctaPrimary: "Kup TarkovHack",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Cennik",
							paragraphs: [
								"TarkovHack łączy ESP wallhack, radar hack i tarkov aimbot jako pakiet undetected dla Tarkov na PC Windows. $35 monthly or $150 lifetime licenses.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach BattlEye anti-cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye anti-cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye anti-cheat.",
								"support@tarkovhack.com w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				setup: {
					title: "Instalacja | PC Setup Guide",
					description: "Instalacja: Windows PC activation and first-launch setup. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Instalacja",
					intro: "TarkovHack łączy ESP wallhack, radar hack i tarkov aimbot jako pakiet undetected dla Tarkov na PC Windows. Instalacja.",
					imageAlt: "TarkovHack setup guide screenshot for Windows PC",
					galleryTitle: "Instalacja",
					heroImage: "/images/tarkov-cheats-radar.webp",
					ctaPrimary: "Kup TarkovHack",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Instalacja",
							paragraphs: [
								"TarkovHack łączy ESP wallhack, radar hack i tarkov aimbot jako pakiet undetected dla Tarkov na PC Windows. Windows PC activation and first-launch setup.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach BattlEye anti-cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye anti-cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye anti-cheat.",
								"support@tarkovhack.com w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				updates: {
					title: "Aktualizacje | BattlEye Maintenance Log",
					description: "Aktualizacje: BattlEye patch status and rebuild notes. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Aktualizacje",
					intro: "TarkovHack łączy ESP wallhack, radar hack i tarkov aimbot jako pakiet undetected dla Tarkov na PC Windows. Aktualizacje.",
					imageAlt: "TarkovHack live status after BattlEye and game patches",
					galleryTitle: "Aktualizacje",
					heroImage: "/images/tarkov-cheats-esp.webp",
					ctaPrimary: "Kup TarkovHack",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/tarkov-cheats/",
					sections: [
						{
							h2: "Aktualizacje",
							paragraphs: [
								"TarkovHack łączy ESP wallhack, radar hack i tarkov aimbot jako pakiet undetected dla Tarkov na PC Windows. BattlEye patch status and rebuild notes.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach BattlEye anti-cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye anti-cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye anti-cheat.",
								"support@tarkovhack.com w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Common Answers",
					description: "FAQ: ESP, soft aim, delivery, and BattlEye questions. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "FAQ",
					intro: "TarkovHack łączy ESP wallhack, radar hack i tarkov aimbot jako pakiet undetected dla Tarkov na PC Windows. FAQ.",
					imageAlt: "TarkovHack FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/tarkov-cheats-aimbot-view.webp",
					ctaPrimary: "Kup TarkovHack",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"TarkovHack łączy ESP wallhack, radar hack i tarkov aimbot jako pakiet undetected dla Tarkov na PC Windows. ESP, soft aim, delivery, and BattlEye questions.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach BattlEye anti-cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye anti-cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye anti-cheat.",
								"support@tarkovhack.com w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				support: {
					title: "Wsparcie | Help & Contact",
					description: "Wsparcie: order help and license support contact. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Wsparcie",
					intro: "TarkovHack łączy ESP wallhack, radar hack i tarkov aimbot jako pakiet undetected dla Tarkov na PC Windows. Wsparcie.",
					imageAlt: "TarkovHack support page for license and setup help",
					galleryTitle: "Wsparcie",
					heroImage: "/images/tarkov-cheats-raid.webp",
					ctaPrimary: "Kup TarkovHack",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Wsparcie",
							paragraphs: [
								"TarkovHack łączy ESP wallhack, radar hack i tarkov aimbot jako pakiet undetected dla Tarkov na PC Windows. order help and license support contact.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach BattlEye anti-cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye anti-cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye anti-cheat.",
								"support@tarkovhack.com w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				undetected: {
					title: "Cheaty undetected | BattlEye Safe Status",
					description: "Cheaty undetected: undetected maintenance after BattlEye anti-cheat patches. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Cheaty undetected",
					intro: "TarkovHack łączy ESP wallhack, radar hack i tarkov aimbot jako pakiet undetected dla Tarkov na PC Windows. Cheaty undetected.",
					imageAlt: "TarkovHack undetected status overview for Windows PC",
					galleryTitle: "Cheaty undetected",
					heroImage: "/images/tarkov-cheats-wallhack.webp",
					ctaPrimary: "Kup TarkovHack",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/tarkov-cheats/",
					sections: [
						{
							h2: "Cheaty undetected",
							paragraphs: [
								"TarkovHack łączy ESP wallhack, radar hack i tarkov aimbot jako pakiet undetected dla Tarkov na PC Windows. undetected maintenance after BattlEye anti-cheat patches.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach BattlEye anti-cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye anti-cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye anti-cheat.",
								"support@tarkovhack.com w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				wallhack: {
					title: "Wallhack Tarkov | ESP Visibility",
					description: "Wallhack Tarkov: wallhack ESP for players, loot, and distance. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Wallhack Tarkov",
					intro: "TarkovHack łączy ESP wallhack, radar hack i tarkov aimbot jako pakiet undetected dla Tarkov na PC Windows. Wallhack Tarkov.",
					imageAlt: "Tarkov wallhack visibility through walls in a raid",
					galleryTitle: "Wallhack Tarkov",
					heroImage: "/images/tarkov-cheats-wallhack.webp",
					ctaPrimary: "Kup TarkovHack",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/tarkov-esp/",
					sections: [
						{
							h2: "Wallhack Tarkov",
							paragraphs: [
								"TarkovHack łączy ESP wallhack, radar hack i tarkov aimbot jako pakiet undetected dla Tarkov na PC Windows. wallhack ESP for players, loot, and distance.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach BattlEye anti-cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye anti-cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye anti-cheat.",
								"support@tarkovhack.com w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				radar: {
					title: "Radar hack | 2D Threat Overlay",
					description: "Radar hack: 2D radar cues for flanks and rotations. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Radar hack",
					intro: "TarkovHack łączy ESP wallhack, radar hack i tarkov aimbot jako pakiet undetected dla Tarkov na PC Windows. Radar hack.",
					imageAlt: "Tarkov 2D radar overlay showing nearby threats",
					galleryTitle: "Radar hack",
					heroImage: "/images/tarkov-cheats-radar.webp",
					ctaPrimary: "Kup TarkovHack",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/tarkov-esp/",
					sections: [
						{
							h2: "Radar hack",
							paragraphs: [
								"TarkovHack łączy ESP wallhack, radar hack i tarkov aimbot jako pakiet undetected dla Tarkov na PC Windows. 2D radar cues for flanks and rotations.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach BattlEye anti-cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye anti-cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye anti-cheat.",
								"support@tarkovhack.com w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				battleye: {
					title: "Bypass BattlEye | Patch Maintenance",
					description: "Bypass BattlEye: how BattlEye updates are handled for Escape from Tarkov hacks. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Bypass BattlEye",
					intro: "TarkovHack łączy ESP wallhack, radar hack i tarkov aimbot jako pakiet undetected dla Tarkov na PC Windows. Bypass BattlEye.",
					imageAlt: "TarkovHack maintenance after a BattlEye patch",
					galleryTitle: "Bypass BattlEye",
					heroImage: "/images/tarkov-cheats-aimbot.webp",
					ctaPrimary: "Kup TarkovHack",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Bypass BattlEye",
							paragraphs: [
								"TarkovHack łączy ESP wallhack, radar hack i tarkov aimbot jako pakiet undetected dla Tarkov na PC Windows. how BattlEye updates are handled for Escape from Tarkov hacks.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach BattlEye anti-cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye anti-cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye anti-cheat.",
								"support@tarkovhack.com w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Cheaty Tarkov 2026 | Buyer Guide",
					description: "Cheaty Tarkov 2026: 2026 TarkovHack checklist before checkout. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Cheaty Tarkov 2026",
					intro: "TarkovHack łączy ESP wallhack, radar hack i tarkov aimbot jako pakiet undetected dla Tarkov na PC Windows. Cheaty Tarkov 2026.",
					imageAlt: "TarkovHack product overview for Escape from Tarkov",
					galleryTitle: "Cheaty Tarkov 2026",
					heroImage: "/images/tarkov-cheats-esp.webp",
					ctaPrimary: "Kup TarkovHack",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/tarkov-cheats/",
					sections: [
						{
							h2: "Cheaty Tarkov 2026",
							paragraphs: [
								"TarkovHack łączy ESP wallhack, radar hack i tarkov aimbot jako pakiet undetected dla Tarkov na PC Windows. 2026 TarkovHack checklist before checkout.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach BattlEye anti-cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye anti-cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye anti-cheat.",
								"support@tarkovhack.com w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				hacks: {
					title: "Cheaty Tarkov | ESP Aimbot Guide",
					description: "Cheaty Tarkov: the Escape from Tarkov hacks pillar for ESP and Aimbot. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Cheaty Tarkov",
					intro: "TarkovHack łączy ESP wallhack, radar hack i tarkov aimbot jako pakiet undetected dla Tarkov na PC Windows. Cheaty Tarkov.",
					imageAlt: "TarkovHack product page — ESP, aimbot, and radar",
					galleryTitle: "Cheaty Tarkov",
					heroImage: "/images/tarkov-cheats-raid.webp",
					ctaPrimary: "Kup TarkovHack",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Cheaty Tarkov",
							paragraphs: [
								"TarkovHack łączy ESP wallhack, radar hack i tarkov aimbot jako pakiet undetected dla Tarkov na PC Windows. the Escape from Tarkov hacks pillar for ESP and Aimbot.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach BattlEye anti-cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye anti-cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye anti-cheat.",
								"support@tarkovhack.com w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Pobieranie TarkovHack | Instant Access",
					description: "Pobieranie TarkovHack: digital license download after payment. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Pobieranie TarkovHack",
					intro: "TarkovHack łączy ESP wallhack, radar hack i tarkov aimbot jako pakiet undetected dla Tarkov na PC Windows. Pobieranie TarkovHack.",
					imageAlt: "TarkovHack download and install delivery flow",
					galleryTitle: "Pobieranie TarkovHack",
					heroImage: "/images/tarkov-cheats-raid.webp",
					ctaPrimary: "Kup TarkovHack",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Pobieranie TarkovHack",
							paragraphs: [
								"TarkovHack łączy ESP wallhack, radar hack i tarkov aimbot jako pakiet undetected dla Tarkov na PC Windows. digital license download after payment.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach BattlEye anti-cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye anti-cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye anti-cheat.",
								"support@tarkovhack.com w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Mod menu Tarkov | In-Game Toggles",
					description: "Mod menu Tarkov: in-client ESP and soft aim toggles. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Mod menu Tarkov",
					intro: "TarkovHack łączy ESP wallhack, radar hack i tarkov aimbot jako pakiet undetected dla Tarkov na PC Windows. Mod menu Tarkov.",
					imageAlt: "TarkovHack in-game menu controls",
					galleryTitle: "Mod menu Tarkov",
					heroImage: "/images/tarkov-cheats-radar.webp",
					ctaPrimary: "Kup TarkovHack",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Mod menu Tarkov",
							paragraphs: [
								"TarkovHack łączy ESP wallhack, radar hack i tarkov aimbot jako pakiet undetected dla Tarkov na PC Windows. in-client ESP and soft aim toggles.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach BattlEye anti-cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye anti-cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye anti-cheat.",
								"support@tarkovhack.com w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Soft aim Tarkov | Smooth Aim Settings",
					description: "Soft aim Tarkov: smooth soft aim settings for Windows PC. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Soft aim Tarkov",
					intro: "TarkovHack łączy ESP wallhack, radar hack i tarkov aimbot jako pakiet undetected dla Tarkov na PC Windows. Soft aim Tarkov.",
					imageAlt: "Tarkov soft aim FOV and smoothness settings",
					galleryTitle: "Soft aim Tarkov",
					heroImage: "/images/tarkov-cheats-aimbot-view.webp",
					ctaPrimary: "Kup TarkovHack",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/tarkov-aimbot/",
					sections: [
						{
							h2: "Soft aim Tarkov",
							paragraphs: [
								"TarkovHack łączy ESP wallhack, radar hack i tarkov aimbot jako pakiet undetected dla Tarkov na PC Windows. smooth soft aim settings for Windows PC.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach BattlEye anti-cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye anti-cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye anti-cheat.",
								"support@tarkovhack.com w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Najlepsze cheaty Tarkov | Buyer Checklist",
					description: "Najlepsze cheaty Tarkov: what to compare before buying TarkovHack. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Najlepsze cheaty Tarkov",
					intro: "TarkovHack łączy ESP wallhack, radar hack i tarkov aimbot jako pakiet undetected dla Tarkov na PC Windows. Najlepsze cheaty Tarkov.",
					imageAlt: "TarkovHack overview for Escape from Tarkov on PC",
					galleryTitle: "Najlepsze cheaty Tarkov",
					heroImage: "/images/tarkov-cheats-esp.webp",
					ctaPrimary: "Kup TarkovHack",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Najlepsze cheaty Tarkov",
							paragraphs: [
								"TarkovHack łączy ESP wallhack, radar hack i tarkov aimbot jako pakiet undetected dla Tarkov na PC Windows. what to compare before buying TarkovHack.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach BattlEye anti-cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye anti-cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye anti-cheat.",
								"support@tarkovhack.com w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Hack aimbot Tarkov | Soft Aim Assist",
					description: "Hack aimbot Tarkov: undetected Aimbot hack assist for Escape from Tarkov. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Hack aimbot Tarkov",
					intro: "TarkovHack łączy ESP wallhack, radar hack i tarkov aimbot jako pakiet undetected dla Tarkov na PC Windows. Hack aimbot Tarkov.",
					imageAlt: "Tarkov aimbot hack controls and bone priority",
					galleryTitle: "Hack aimbot Tarkov",
					heroImage: "/images/tarkov-cheats-aimbot-view.webp",
					ctaPrimary: "Kup TarkovHack",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/tarkov-aimbot/",
					sections: [
						{
							h2: "Hack aimbot Tarkov",
							paragraphs: [
								"TarkovHack łączy ESP wallhack, radar hack i tarkov aimbot jako pakiet undetected dla Tarkov na PC Windows. undetected Aimbot hack assist for Escape from Tarkov.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach BattlEye anti-cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye anti-cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye anti-cheat.",
								"support@tarkovhack.com w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Hack ESP Tarkov | Boxes & Loot",
					description: "Hack ESP Tarkov: ESP hack boxes, loot pins, and distance. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Hack ESP Tarkov",
					intro: "TarkovHack łączy ESP wallhack, radar hack i tarkov aimbot jako pakiet undetected dla Tarkov na PC Windows. Hack ESP Tarkov.",
					imageAlt: "Tarkov ESP hack boxes and loot markers",
					galleryTitle: "Hack ESP Tarkov",
					heroImage: "/images/tarkov-cheats-wallhack.webp",
					ctaPrimary: "Kup TarkovHack",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/tarkov-esp/",
					sections: [
						{
							h2: "Hack ESP Tarkov",
							paragraphs: [
								"TarkovHack łączy ESP wallhack, radar hack i tarkov aimbot jako pakiet undetected dla Tarkov na PC Windows. ESP hack boxes, loot pins, and distance.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach BattlEye anti-cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye anti-cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye anti-cheat.",
								"support@tarkovhack.com w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Unlock all Tarkov | What It Means",
					description: "Unlock all Tarkov: unlock-all searches vs real ESP and Aimbot tools. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Unlock all Tarkov",
					intro: "TarkovHack łączy ESP wallhack, radar hack i tarkov aimbot jako pakiet undetected dla Tarkov na PC Windows. Unlock all Tarkov.",
					imageAlt: "TarkovHack license features overview",
					galleryTitle: "Unlock all Tarkov",
					heroImage: "/images/tarkov-cheats-radar.webp",
					ctaPrimary: "Kup TarkovHack",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unlock all Tarkov",
							paragraphs: [
								"TarkovHack łączy ESP wallhack, radar hack i tarkov aimbot jako pakiet undetected dla Tarkov na PC Windows. unlock-all searches vs real ESP and Aimbot tools.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach BattlEye anti-cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye anti-cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye anti-cheat.",
								"support@tarkovhack.com w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				privacy: {
					title: "Polityka prywatności | TarkovHack",
					description: "Polityka prywatności for TarkovHack — ESP wallhack, Aimbot, PC Windows.",
					h1: "Polityka prywatności",
					intro: "TarkovHack łączy ESP wallhack, radar hack i tarkov aimbot jako pakiet undetected dla Tarkov na PC Windows. Polityka prywatności for tarkovhack.com and Escape from Tarkov licenses.",
					imageAlt: "TarkovHack",
					galleryTitle: "TarkovHack",
					heroImage: "/images/tarkov-cheats-aimbot.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read terms",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we collect",
							paragraphs: [
								"TarkovHack łączy ESP wallhack, radar hack i tarkov aimbot jako pakiet undetected dla Tarkov na PC Windows. Contact email, Zadeyo order references, and basic site security data.",
								"Payment details are processed by Zadeyo checkout — not stored on tarkovhack.com.",
							],
						},
						{
							h2: "How we use data",
							paragraphs: [
								"TarkovHack łączy ESP wallhack, radar hack i tarkov aimbot jako pakiet undetected dla Tarkov na PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Sprawdź Updates po patchach BattlEye anti-cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
							],
						},
						{
							h2: "Your rights",
							paragraphs: [
								"support@tarkovhack.com w sprawach wsparcia i prawnych.",
								"Email: support@tarkovhack.com",
							],
						},
					],
				},
				refund: {
					title: "Polityka zwrotów | TarkovHack",
					description: "Polityka zwrotów for TarkovHack — ESP wallhack, Aimbot, PC Windows.",
					h1: "Polityka zwrotów",
					intro: "TarkovHack łączy ESP wallhack, radar hack i tarkov aimbot jako pakiet undetected dla Tarkov na PC Windows. Polityka zwrotów for tarkovhack.com and Escape from Tarkov licenses.",
					imageAlt: "TarkovHack",
					galleryTitle: "TarkovHack",
					heroImage: "/images/tarkov-cheats-raid.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digital delivery",
							paragraphs: [
								"TarkovHack łączy ESP wallhack, radar hack i tarkov aimbot jako pakiet undetected dla Tarkov na PC Windows. Contact email, Zadeyo order references, and basic site security data.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye anti-cheat.",
							],
						},
						{
							h2: "Refund approval",
							paragraphs: [
								"TarkovHack łączy ESP wallhack, radar hack i tarkov aimbot jako pakiet undetected dla Tarkov na PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Sprawdź Updates po patchach BattlEye anti-cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
							],
						},
						{
							h2: "How to request",
							paragraphs: [
								"support@tarkovhack.com w sprawach wsparcia i prawnych.",
								"Email: support@tarkovhack.com",
							],
						},
					],
				},
				terms: {
					title: "Warunki użytkowania | TarkovHack",
					description: "Warunki użytkowania for TarkovHack — ESP wallhack, Aimbot, PC Windows.",
					h1: "Warunki użytkowania",
					intro: "TarkovHack łączy ESP wallhack, radar hack i tarkov aimbot jako pakiet undetected dla Tarkov na PC Windows. Warunki użytkowania for tarkovhack.com and Escape from Tarkov licenses.",
					imageAlt: "TarkovHack",
					galleryTitle: "TarkovHack",
					heroImage: "/images/tarkov-cheats-aimbot-view.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Acceptance of terms",
							paragraphs: [
								"TarkovHack łączy ESP wallhack, radar hack i tarkov aimbot jako pakiet undetected dla Tarkov na PC Windows. Contact email, Zadeyo order references, and basic site security data.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją BattlEye anti-cheat.",
							],
						},
						{
							h2: "Risk disclaimer",
							paragraphs: [
								"TarkovHack łączy ESP wallhack, radar hack i tarkov aimbot jako pakiet undetected dla Tarkov na PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "Policy changes",
							paragraphs: [
								"support@tarkovhack.com w sprawach wsparcia i prawnych.",
								"Email: support@tarkovhack.com",
							],
						},
					],
				},
			},
		},
		ru: {
			ui: {
				nav: {
					home: "Главная",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Функции",
					pricing: "Цены",
					setup: "Установка",
					updates: "Обновления",
					faq: "FAQ",
					buyNow: "Купить",
				},
				hero: {
					accent: "Undetected читы Tarkov",
					accentShort: "TarkovHack",
					subtitle: "ESP wallhack, radar hack и Aimbot для Tarkov на Windows PC — обслуживание BattlEye anti-cheat включено.",
					subtitleShort: "ESP, radar и Aimbot для Tarkov PC",
					buyNow: "Купить",
					seeFeatures: "Смотреть функции",
				},
				trust: {
					status: "Онлайн",
					statusNote: "Пакет TarkovHack активен для Tarkov на Windows PC.",
					statusShort: "Активен",
					delivery: "Мгновенная цифровая доставка",
					platform: "Windows 10 и 11",
					antiCheat: "Поддержка обслуживания BattlEye anti-cheat",
					antiCheatShort: "BattlEye anti-cheat поддержка",
				},
				product: {
					title: "TarkovHack",
					addToCart: "В корзину",
					monthly: "Месяц",
					lifetime: "Навсегда",
					available: "Доступно сейчас",
					gameBadge: "Tarkov",
					platformBadge: "Windows PC",
					statusBadge: "Undetected пакет",
				},
				reviews: {
					title: "Что говорят игроки",
					subtitle: "Недавние отзывы покупателей TarkovHack",
					outOf: "из 5",
					countLabel: "отзывов",
				},
				common: {
					buyNow: "Купить",
					readGuide: "Читать гайд",
					language: "Язык",
					officialLanguageNote: "Английский — официальный язык. Другие версии переведены для глобального SEO.",
					relatedPages: "Похожие страницы",
				},
				footer: {
					explore: "Обзор",
					help: "Помощь и право",
					tagline: "Undetected ESP, wallhack, radar и Aimbot для Tarkov — оплата через Zadeyo.",
				},
				images: {
					hero: "TarkovHack hero — ESP and aimbot overlay in Escape from Tarkov",
					espWallhack: "Wallhack outlines showing PMCs and Scavs through walls",
					aimbotCombat: "Soft aim assist overlay during an Escape from Tarkov raid",
					squadFight: "TarkovHack combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Tarkov raid",
					headerArt: "Aimbot view and bone priority controls for Tarkov",
					cheatsPackage: "2D radar threat overlay for Escape from Tarkov",
					rebootFight: "Aimbot assist during a Tarkov firefight",
					battleRoyale: "TarkovHack in-raid overview for Windows PC",
					battleRoyaleIsland: "ESP markers for loot and extracts in Tarkov",
				},
			},
			pages: {
				home: {
					title: "TarkovHack 2026 | ESP, Wallhack и Aimbot",
					description: "Undetected читы Escape from Tarkov для Escape from Tarkov на PC. ESP wallhack, radar hack и Aimbot с обслуживанием BattlEye anti-cheat. Мгновенная цифровая",
					h1: "TarkovHack — Undetected ESP, Wallhack и Aimbot",
					intro: "Undetected пакет для Escape from Tarkov на Windows PC: ESP wallhack, radar и Aimbot с обслуживанием BattlEye anti-cheat после патчей.",
					imageAlt: "Tarkov ESP player tags hack",
					galleryTitle: "Галерея TarkovHack — ESP, Aimbot и wallhack",
					heroImage: "/images/tarkov-cheats-esp.webp",
					ctaPrimary: "Купить TarkovHack",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Почему выбирают TarkovHack в 2026",
							paragraphs: [
								"TarkovHack объединяет ESP wallhack, radar hack и tarkov aimbot в undetected пакете для Tarkov на Windows PC. Идеально для чтения вражеских отрядов в BR и scav-run.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye anti-cheat.",
							],
						},
						{
							h2: "ESP wallhack, radar и Aimbot в одной лицензии",
							paragraphs: [
								"TarkovHack объединяет ESP wallhack, radar hack и tarkov aimbot в undetected пакете для Tarkov на Windows PC. Одна лицензия вместо отдельных инструментов.",
								"Проверяйте Updates после патчей BattlEye anti-cheat. Ни один чит не гарантирует постоянный undetected статус.",
							],
						},
					],
				},
				"tarkov-esp": {
					title: "ESP Tarkov | Боксы игроков и wallhack",
					description: "ESP Tarkov: player boxes, loot markers, and wallhack overlays. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "ESP Tarkov",
					intro: "TarkovHack объединяет ESP wallhack, radar hack и tarkov aimbot в undetected пакете для Tarkov на Windows PC. ESP Tarkov.",
					imageAlt: "Tarkov ESP player boxes and distance readouts in a raid",
					galleryTitle: "ESP Tarkov",
					heroImage: "/images/tarkov-cheats-radar.webp",
					ctaPrimary: "Купить TarkovHack",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/tarkov-cheats/",
					sections: [
						{
							h2: "ESP Tarkov",
							paragraphs: [
								"TarkovHack объединяет ESP wallhack, radar hack и tarkov aimbot в undetected пакете для Tarkov на Windows PC. player boxes, loot markers, and wallhack overlays.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей BattlEye anti-cheat. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye anti-cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye anti-cheat.",
								"support@tarkovhack.com для поддержки и юридических вопросов.",
							],
						},
					],
				},
				"tarkov-aimbot": {
					title: "Aimbot Tarkov | Управление soft aim",
					description: "Aimbot Tarkov: soft aim, FOV, and per-weapon Aimbot profiles. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Aimbot Tarkov",
					intro: "TarkovHack объединяет ESP wallhack, radar hack и tarkov aimbot в undetected пакете для Tarkov на Windows PC. Aimbot Tarkov.",
					imageAlt: "Tarkov aimbot and soft aim controls on Windows PC",
					galleryTitle: "Aimbot Tarkov",
					heroImage: "/images/tarkov-cheats-aimbot.webp",
					ctaPrimary: "Купить TarkovHack",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/tarkov-esp/",
					sections: [
						{
							h2: "Aimbot Tarkov",
							paragraphs: [
								"TarkovHack объединяет ESP wallhack, radar hack и tarkov aimbot в undetected пакете для Tarkov на Windows PC. soft aim, FOV, and per-weapon Aimbot profiles.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей BattlEye anti-cheat. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye anti-cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye anti-cheat.",
								"support@tarkovhack.com для поддержки и юридических вопросов.",
							],
						},
					],
				},
				features: {
					title: "Функции | Полный список функций",
					description: "Функции: ESP, soft aim, radar controls. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Функции",
					intro: "TarkovHack объединяет ESP wallhack, radar hack и tarkov aimbot в undetected пакете для Tarkov на Windows PC. Функции.",
					imageAlt: "TarkovHack features — ESP, soft aim, and radar screenshots",
					galleryTitle: "Функции",
					heroImage: "/images/tarkov-cheats-aimbot-view.webp",
					ctaPrimary: "Купить TarkovHack",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Функции",
							paragraphs: [
								"TarkovHack объединяет ESP wallhack, radar hack и tarkov aimbot в undetected пакете для Tarkov на Windows PC. ESP, soft aim, radar controls.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей BattlEye anti-cheat. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye anti-cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye anti-cheat.",
								"support@tarkovhack.com для поддержки и юридических вопросов.",
							],
						},
					],
				},
				pricing: {
					title: "Цены | Месяц и lifetime",
					description: "Цены: $35 monthly or $150 lifetime licenses. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Цены",
					intro: "TarkovHack объединяет ESP wallhack, radar hack и tarkov aimbot в undetected пакете для Tarkov на Windows PC. Цены.",
					imageAlt: "TarkovHack store plans for monthly and lifetime licenses",
					galleryTitle: "Цены",
					heroImage: "/images/tarkov-cheats-raid.webp",
					ctaPrimary: "Купить TarkovHack",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Цены",
							paragraphs: [
								"TarkovHack объединяет ESP wallhack, radar hack и tarkov aimbot в undetected пакете для Tarkov на Windows PC. $35 monthly or $150 lifetime licenses.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей BattlEye anti-cheat. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye anti-cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye anti-cheat.",
								"support@tarkovhack.com для поддержки и юридических вопросов.",
							],
						},
					],
				},
				setup: {
					title: "Установка | Гайд по установке",
					description: "Установка: Windows PC activation and first-launch setup. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Установка",
					intro: "TarkovHack объединяет ESP wallhack, radar hack и tarkov aimbot в undetected пакете для Tarkov на Windows PC. Установка.",
					imageAlt: "TarkovHack setup guide screenshot for Windows PC",
					galleryTitle: "Установка",
					heroImage: "/images/tarkov-cheats-radar.webp",
					ctaPrimary: "Купить TarkovHack",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Установка",
							paragraphs: [
								"TarkovHack объединяет ESP wallhack, radar hack и tarkov aimbot в undetected пакете для Tarkov на Windows PC. Windows PC activation and first-launch setup.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей BattlEye anti-cheat. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye anti-cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye anti-cheat.",
								"support@tarkovhack.com для поддержки и юридических вопросов.",
							],
						},
					],
				},
				updates: {
					title: "Обновления | Журнал BattlEye",
					description: "Обновления: BattlEye patch status and rebuild notes. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Обновления",
					intro: "TarkovHack объединяет ESP wallhack, radar hack и tarkov aimbot в undetected пакете для Tarkov на Windows PC. Обновления.",
					imageAlt: "TarkovHack live status after BattlEye and game patches",
					galleryTitle: "Обновления",
					heroImage: "/images/tarkov-cheats-esp.webp",
					ctaPrimary: "Купить TarkovHack",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/tarkov-cheats/",
					sections: [
						{
							h2: "Обновления",
							paragraphs: [
								"TarkovHack объединяет ESP wallhack, radar hack и tarkov aimbot в undetected пакете для Tarkov на Windows PC. BattlEye patch status and rebuild notes.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей BattlEye anti-cheat. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye anti-cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye anti-cheat.",
								"support@tarkovhack.com для поддержки и юридических вопросов.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Частые вопросы",
					description: "FAQ: ESP, soft aim, delivery, and BattlEye questions. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "FAQ",
					intro: "TarkovHack объединяет ESP wallhack, radar hack и tarkov aimbot в undetected пакете для Tarkov на Windows PC. FAQ.",
					imageAlt: "TarkovHack FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/tarkov-cheats-aimbot-view.webp",
					ctaPrimary: "Купить TarkovHack",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"TarkovHack объединяет ESP wallhack, radar hack и tarkov aimbot в undetected пакете для Tarkov на Windows PC. ESP, soft aim, delivery, and BattlEye questions.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей BattlEye anti-cheat. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye anti-cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye anti-cheat.",
								"support@tarkovhack.com для поддержки и юридических вопросов.",
							],
						},
					],
				},
				support: {
					title: "Поддержка | Помощь и контакт",
					description: "Поддержка: order help and license support contact. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Поддержка",
					intro: "TarkovHack объединяет ESP wallhack, radar hack и tarkov aimbot в undetected пакете для Tarkov на Windows PC. Поддержка.",
					imageAlt: "TarkovHack support page for license and setup help",
					galleryTitle: "Поддержка",
					heroImage: "/images/tarkov-cheats-raid.webp",
					ctaPrimary: "Купить TarkovHack",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Поддержка",
							paragraphs: [
								"TarkovHack объединяет ESP wallhack, radar hack и tarkov aimbot в undetected пакете для Tarkov на Windows PC. order help and license support contact.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей BattlEye anti-cheat. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye anti-cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye anti-cheat.",
								"support@tarkovhack.com для поддержки и юридических вопросов.",
							],
						},
					],
				},
				undetected: {
					title: "Undetected читы | Статус undetected",
					description: "Undetected читы: undetected maintenance after BattlEye anti-cheat patches. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Undetected читы",
					intro: "TarkovHack объединяет ESP wallhack, radar hack и tarkov aimbot в undetected пакете для Tarkov на Windows PC. Undetected читы.",
					imageAlt: "TarkovHack undetected status overview for Windows PC",
					galleryTitle: "Undetected читы",
					heroImage: "/images/tarkov-cheats-wallhack.webp",
					ctaPrimary: "Купить TarkovHack",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/tarkov-cheats/",
					sections: [
						{
							h2: "Undetected читы",
							paragraphs: [
								"TarkovHack объединяет ESP wallhack, radar hack и tarkov aimbot в undetected пакете для Tarkov на Windows PC. undetected maintenance after BattlEye anti-cheat patches.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей BattlEye anti-cheat. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye anti-cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye anti-cheat.",
								"support@tarkovhack.com для поддержки и юридических вопросов.",
							],
						},
					],
				},
				wallhack: {
					title: "Wallhack Tarkov | Видимость ESP",
					description: "Wallhack Tarkov: wallhack ESP for players, loot, and distance. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Wallhack Tarkov",
					intro: "TarkovHack объединяет ESP wallhack, radar hack и tarkov aimbot в undetected пакете для Tarkov на Windows PC. Wallhack Tarkov.",
					imageAlt: "Tarkov wallhack visibility through walls in a raid",
					galleryTitle: "Wallhack Tarkov",
					heroImage: "/images/tarkov-cheats-wallhack.webp",
					ctaPrimary: "Купить TarkovHack",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/tarkov-esp/",
					sections: [
						{
							h2: "Wallhack Tarkov",
							paragraphs: [
								"TarkovHack объединяет ESP wallhack, radar hack и tarkov aimbot в undetected пакете для Tarkov на Windows PC. wallhack ESP for players, loot, and distance.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей BattlEye anti-cheat. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye anti-cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye anti-cheat.",
								"support@tarkovhack.com для поддержки и юридических вопросов.",
							],
						},
					],
				},
				radar: {
					title: "Radar hack | 2D радар угроз",
					description: "Radar hack: 2D radar cues for flanks and rotations. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Radar hack",
					intro: "TarkovHack объединяет ESP wallhack, radar hack и tarkov aimbot в undetected пакете для Tarkov на Windows PC. Radar hack.",
					imageAlt: "Tarkov 2D radar overlay showing nearby threats",
					galleryTitle: "Radar hack",
					heroImage: "/images/tarkov-cheats-radar.webp",
					ctaPrimary: "Купить TarkovHack",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/tarkov-esp/",
					sections: [
						{
							h2: "Radar hack",
							paragraphs: [
								"TarkovHack объединяет ESP wallhack, radar hack и tarkov aimbot в undetected пакете для Tarkov на Windows PC. 2D radar cues for flanks and rotations.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей BattlEye anti-cheat. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye anti-cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye anti-cheat.",
								"support@tarkovhack.com для поддержки и юридических вопросов.",
							],
						},
					],
				},
				battleye: {
					title: "Bypass BattlEye | Обслуживание патчей",
					description: "Bypass BattlEye: how BattlEye updates are handled for Escape from Tarkov hacks. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Bypass BattlEye",
					intro: "TarkovHack объединяет ESP wallhack, radar hack и tarkov aimbot в undetected пакете для Tarkov на Windows PC. Bypass BattlEye.",
					imageAlt: "TarkovHack maintenance after a BattlEye patch",
					galleryTitle: "Bypass BattlEye",
					heroImage: "/images/tarkov-cheats-aimbot.webp",
					ctaPrimary: "Купить TarkovHack",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Bypass BattlEye",
							paragraphs: [
								"TarkovHack объединяет ESP wallhack, radar hack и tarkov aimbot в undetected пакете для Tarkov на Windows PC. how BattlEye updates are handled for Escape from Tarkov hacks.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей BattlEye anti-cheat. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye anti-cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye anti-cheat.",
								"support@tarkovhack.com для поддержки и юридических вопросов.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Читы Tarkov 2026 | Гайд покупателя",
					description: "Читы Tarkov 2026: 2026 TarkovHack checklist before checkout. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Читы Tarkov 2026",
					intro: "TarkovHack объединяет ESP wallhack, radar hack и tarkov aimbot в undetected пакете для Tarkov на Windows PC. Читы Tarkov 2026.",
					imageAlt: "TarkovHack product overview for Escape from Tarkov",
					galleryTitle: "Читы Tarkov 2026",
					heroImage: "/images/tarkov-cheats-esp.webp",
					ctaPrimary: "Купить TarkovHack",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/tarkov-cheats/",
					sections: [
						{
							h2: "Читы Tarkov 2026",
							paragraphs: [
								"TarkovHack объединяет ESP wallhack, radar hack и tarkov aimbot в undetected пакете для Tarkov на Windows PC. 2026 TarkovHack checklist before checkout.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей BattlEye anti-cheat. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye anti-cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye anti-cheat.",
								"support@tarkovhack.com для поддержки и юридических вопросов.",
							],
						},
					],
				},
				hacks: {
					title: "Читы Tarkov | Гайд ESP и Aimbot",
					description: "Читы Tarkov: the Escape from Tarkov hacks pillar for ESP and Aimbot. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Читы Tarkov",
					intro: "TarkovHack объединяет ESP wallhack, radar hack и tarkov aimbot в undetected пакете для Tarkov на Windows PC. Читы Tarkov.",
					imageAlt: "TarkovHack product page — ESP, aimbot, and radar",
					galleryTitle: "Читы Tarkov",
					heroImage: "/images/tarkov-cheats-raid.webp",
					ctaPrimary: "Купить TarkovHack",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Читы Tarkov",
							paragraphs: [
								"TarkovHack объединяет ESP wallhack, radar hack и tarkov aimbot в undetected пакете для Tarkov на Windows PC. the Escape from Tarkov hacks pillar for ESP and Aimbot.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей BattlEye anti-cheat. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye anti-cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye anti-cheat.",
								"support@tarkovhack.com для поддержки и юридических вопросов.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Скачать TarkovHack | Мгновенный доступ",
					description: "Скачать TarkovHack: digital license download after payment. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Скачать TarkovHack",
					intro: "TarkovHack объединяет ESP wallhack, radar hack и tarkov aimbot в undetected пакете для Tarkov на Windows PC. Скачать TarkovHack.",
					imageAlt: "TarkovHack download and install delivery flow",
					galleryTitle: "Скачать TarkovHack",
					heroImage: "/images/tarkov-cheats-raid.webp",
					ctaPrimary: "Купить TarkovHack",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Скачать TarkovHack",
							paragraphs: [
								"TarkovHack объединяет ESP wallhack, radar hack и tarkov aimbot в undetected пакете для Tarkov на Windows PC. digital license download after payment.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей BattlEye anti-cheat. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye anti-cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye anti-cheat.",
								"support@tarkovhack.com для поддержки и юридических вопросов.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Мод-меню Tarkov | Игровые переключатели",
					description: "Мод-меню Tarkov: in-client ESP and soft aim toggles. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Мод-меню Tarkov",
					intro: "TarkovHack объединяет ESP wallhack, radar hack и tarkov aimbot в undetected пакете для Tarkov на Windows PC. Мод-меню Tarkov.",
					imageAlt: "TarkovHack in-game menu controls",
					galleryTitle: "Мод-меню Tarkov",
					heroImage: "/images/tarkov-cheats-radar.webp",
					ctaPrimary: "Купить TarkovHack",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Мод-меню Tarkov",
							paragraphs: [
								"TarkovHack объединяет ESP wallhack, radar hack и tarkov aimbot в undetected пакете для Tarkov на Windows PC. in-client ESP and soft aim toggles.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей BattlEye anti-cheat. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye anti-cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye anti-cheat.",
								"support@tarkovhack.com для поддержки и юридических вопросов.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Soft aim Tarkov | Настройки soft aim",
					description: "Soft aim Tarkov: smooth soft aim settings for Windows PC. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Soft aim Tarkov",
					intro: "TarkovHack объединяет ESP wallhack, radar hack и tarkov aimbot в undetected пакете для Tarkov на Windows PC. Soft aim Tarkov.",
					imageAlt: "Tarkov soft aim FOV and smoothness settings",
					galleryTitle: "Soft aim Tarkov",
					heroImage: "/images/tarkov-cheats-aimbot-view.webp",
					ctaPrimary: "Купить TarkovHack",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/tarkov-aimbot/",
					sections: [
						{
							h2: "Soft aim Tarkov",
							paragraphs: [
								"TarkovHack объединяет ESP wallhack, radar hack и tarkov aimbot в undetected пакете для Tarkov на Windows PC. smooth soft aim settings for Windows PC.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей BattlEye anti-cheat. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye anti-cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye anti-cheat.",
								"support@tarkovhack.com для поддержки и юридических вопросов.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Лучшие читы Tarkov | Чеклист покупателя",
					description: "Лучшие читы Tarkov: what to compare before buying TarkovHack. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Лучшие читы Tarkov",
					intro: "TarkovHack объединяет ESP wallhack, radar hack и tarkov aimbot в undetected пакете для Tarkov на Windows PC. Лучшие читы Tarkov.",
					imageAlt: "TarkovHack overview for Escape from Tarkov on PC",
					galleryTitle: "Лучшие читы Tarkov",
					heroImage: "/images/tarkov-cheats-esp.webp",
					ctaPrimary: "Купить TarkovHack",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Лучшие читы Tarkov",
							paragraphs: [
								"TarkovHack объединяет ESP wallhack, radar hack и tarkov aimbot в undetected пакете для Tarkov на Windows PC. what to compare before buying TarkovHack.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей BattlEye anti-cheat. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye anti-cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye anti-cheat.",
								"support@tarkovhack.com для поддержки и юридических вопросов.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Хак aimbot Tarkov | Soft aim ассист",
					description: "Хак aimbot Tarkov: undetected Aimbot hack assist for Escape from Tarkov. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Хак aimbot Tarkov",
					intro: "TarkovHack объединяет ESP wallhack, radar hack и tarkov aimbot в undetected пакете для Tarkov на Windows PC. Хак aimbot Tarkov.",
					imageAlt: "Tarkov aimbot hack controls and bone priority",
					galleryTitle: "Хак aimbot Tarkov",
					heroImage: "/images/tarkov-cheats-aimbot-view.webp",
					ctaPrimary: "Купить TarkovHack",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/tarkov-aimbot/",
					sections: [
						{
							h2: "Хак aimbot Tarkov",
							paragraphs: [
								"TarkovHack объединяет ESP wallhack, radar hack и tarkov aimbot в undetected пакете для Tarkov на Windows PC. undetected Aimbot hack assist for Escape from Tarkov.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей BattlEye anti-cheat. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye anti-cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye anti-cheat.",
								"support@tarkovhack.com для поддержки и юридических вопросов.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Хак ESP Tarkov | Боксы и лут",
					description: "Хак ESP Tarkov: ESP hack boxes, loot pins, and distance. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Хак ESP Tarkov",
					intro: "TarkovHack объединяет ESP wallhack, radar hack и tarkov aimbot в undetected пакете для Tarkov на Windows PC. Хак ESP Tarkov.",
					imageAlt: "Tarkov ESP hack boxes and loot markers",
					galleryTitle: "Хак ESP Tarkov",
					heroImage: "/images/tarkov-cheats-wallhack.webp",
					ctaPrimary: "Купить TarkovHack",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/tarkov-esp/",
					sections: [
						{
							h2: "Хак ESP Tarkov",
							paragraphs: [
								"TarkovHack объединяет ESP wallhack, radar hack и tarkov aimbot в undetected пакете для Tarkov на Windows PC. ESP hack boxes, loot pins, and distance.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей BattlEye anti-cheat. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye anti-cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye anti-cheat.",
								"support@tarkovhack.com для поддержки и юридических вопросов.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Unlock all Tarkov | Что это значит",
					description: "Unlock all Tarkov: unlock-all searches vs real ESP and Aimbot tools. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Unlock all Tarkov",
					intro: "TarkovHack объединяет ESP wallhack, radar hack и tarkov aimbot в undetected пакете для Tarkov на Windows PC. Unlock all Tarkov.",
					imageAlt: "TarkovHack license features overview",
					galleryTitle: "Unlock all Tarkov",
					heroImage: "/images/tarkov-cheats-radar.webp",
					ctaPrimary: "Купить TarkovHack",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unlock all Tarkov",
							paragraphs: [
								"TarkovHack объединяет ESP wallhack, radar hack и tarkov aimbot в undetected пакете для Tarkov на Windows PC. unlock-all searches vs real ESP and Aimbot tools.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей BattlEye anti-cheat. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye anti-cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye anti-cheat.",
								"support@tarkovhack.com для поддержки и юридических вопросов.",
							],
						},
					],
				},
				privacy: {
					title: "Политика конфиденциальности | TarkovHack",
					description: "Политика конфиденциальности for TarkovHack — ESP wallhack, Aimbot, Windows PC.",
					h1: "Политика конфиденциальности",
					intro: "TarkovHack объединяет ESP wallhack, radar hack и tarkov aimbot в undetected пакете для Tarkov на Windows PC. Политика конфиденциальности for tarkovhack.com and Escape from Tarkov licenses.",
					imageAlt: "TarkovHack",
					galleryTitle: "TarkovHack",
					heroImage: "/images/tarkov-cheats-aimbot.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read terms",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we collect",
							paragraphs: [
								"TarkovHack объединяет ESP wallhack, radar hack и tarkov aimbot в undetected пакете для Tarkov на Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"Payment details are processed by Zadeyo checkout — not stored on tarkovhack.com.",
							],
						},
						{
							h2: "How we use data",
							paragraphs: [
								"TarkovHack объединяет ESP wallhack, radar hack и tarkov aimbot в undetected пакете для Tarkov на Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Проверяйте Updates после патчей BattlEye anti-cheat. Ни один чит не гарантирует постоянный undetected статус.",
							],
						},
						{
							h2: "Your rights",
							paragraphs: [
								"support@tarkovhack.com для поддержки и юридических вопросов.",
								"Email: support@tarkovhack.com",
							],
						},
					],
				},
				refund: {
					title: "Политика возврата | TarkovHack",
					description: "Политика возврата for TarkovHack — ESP wallhack, Aimbot, Windows PC.",
					h1: "Политика возврата",
					intro: "TarkovHack объединяет ESP wallhack, radar hack и tarkov aimbot в undetected пакете для Tarkov на Windows PC. Политика возврата for tarkovhack.com and Escape from Tarkov licenses.",
					imageAlt: "TarkovHack",
					galleryTitle: "TarkovHack",
					heroImage: "/images/tarkov-cheats-raid.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digital delivery",
							paragraphs: [
								"TarkovHack объединяет ESP wallhack, radar hack и tarkov aimbot в undetected пакете для Tarkov на Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye anti-cheat.",
							],
						},
						{
							h2: "Refund approval",
							paragraphs: [
								"TarkovHack объединяет ESP wallhack, radar hack и tarkov aimbot в undetected пакете для Tarkov на Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Проверяйте Updates после патчей BattlEye anti-cheat. Ни один чит не гарантирует постоянный undetected статус.",
							],
						},
						{
							h2: "How to request",
							paragraphs: [
								"support@tarkovhack.com для поддержки и юридических вопросов.",
								"Email: support@tarkovhack.com",
							],
						},
					],
				},
				terms: {
					title: "Условия использования | TarkovHack",
					description: "Условия использования for TarkovHack — ESP wallhack, Aimbot, Windows PC.",
					h1: "Условия использования",
					intro: "TarkovHack объединяет ESP wallhack, radar hack и tarkov aimbot в undetected пакете для Tarkov на Windows PC. Условия использования for tarkovhack.com and Escape from Tarkov licenses.",
					imageAlt: "TarkovHack",
					galleryTitle: "TarkovHack",
					heroImage: "/images/tarkov-cheats-aimbot-view.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Acceptance of terms",
							paragraphs: [
								"TarkovHack объединяет ESP wallhack, radar hack и tarkov aimbot в undetected пакете для Tarkov на Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание BattlEye anti-cheat.",
							],
						},
						{
							h2: "Risk disclaimer",
							paragraphs: [
								"TarkovHack объединяет ESP wallhack, radar hack и tarkov aimbot в undetected пакете для Tarkov на Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "Policy changes",
							paragraphs: [
								"support@tarkovhack.com для поддержки и юридических вопросов.",
								"Email: support@tarkovhack.com",
							],
						},
					],
				},
			},
		},
		tr: {
			ui: {
				nav: {
					home: "Ana sayfa",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Özellikler",
					pricing: "Fiyatlar",
					setup: "Kurulum",
					updates: "Güncellemeler",
					faq: "SSS",
					buyNow: "Satın al",
				},
				hero: {
					accent: "Undetected Tarkov hileleri",
					accentShort: "TarkovHack",
					subtitle: "Tarkov Windows PC için ESP wallhack, radar hack ve Aimbot — BattlEye anti-cheat bakımı dahil.",
					subtitleShort: "Tarkov PC için ESP, radar ve Aimbot",
					buyNow: "Satın al",
					seeFeatures: "Özellikleri gör",
				},
				trust: {
					status: "Çevrimiçi",
					statusNote: "TarkovHack paketi Tarkov Windows PC için aktif.",
					statusShort: "Aktif",
					delivery: "Anında dijital teslimat",
					platform: "Windows 10 ve 11",
					antiCheat: "BattlEye anti-cheat bakım desteği",
					antiCheatShort: "BattlEye anti-cheat destek",
				},
				product: {
					title: "TarkovHack",
					addToCart: "Sepete ekle",
					monthly: "Aylık",
					lifetime: "Ömür boyu",
					available: "Şimdi mevcut",
					gameBadge: "Tarkov",
					platformBadge: "Windows PC",
					statusBadge: "Undetected paket",
				},
				reviews: {
					title: "Oyuncular ne diyor",
					subtitle: "TarkovHack alıcılarından son geri bildirimler",
					outOf: "/5",
					countLabel: "yorum",
				},
				common: {
					buyNow: "Satın al",
					readGuide: "Rehberi oku",
					language: "Dil",
					officialLanguageNote: "Resmi dil İngilizcedir. Diğer diller küresel SEO için çevrilmiştir.",
					relatedPages: "İlgili sayfalar",
				},
				footer: {
					explore: "Keşfet",
					help: "Yardım ve yasal",
					tagline: "Tarkov için undetected ESP, wallhack, radar ve Aimbot — Zadeyo checkout.",
				},
				images: {
					hero: "TarkovHack hero — ESP and aimbot overlay in Escape from Tarkov",
					espWallhack: "Wallhack outlines showing PMCs and Scavs through walls",
					aimbotCombat: "Soft aim assist overlay during an Escape from Tarkov raid",
					squadFight: "TarkovHack combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Tarkov raid",
					headerArt: "Aimbot view and bone priority controls for Tarkov",
					cheatsPackage: "2D radar threat overlay for Escape from Tarkov",
					rebootFight: "Aimbot assist during a Tarkov firefight",
					battleRoyale: "TarkovHack in-raid overview for Windows PC",
					battleRoyaleIsland: "ESP markers for loot and extracts in Tarkov",
				},
			},
			pages: {
				home: {
					title: "TarkovHack 2026 | ESP, Wallhack ve Aimbot",
					description: "Escape from Tarkov için undetected hileler. ESP wallhack, radar hack ve Aimbot — BattlEye anti-cheat bakımı. Anında dijital teslimat.",
					h1: "TarkovHack — Undetected ESP, Wallhack ve Aimbot",
					intro: "Escape from Tarkov Windows PC undetected paketi: ESP wallhack, radar ve Aimbot — BattlEye anti-cheat bakımı dahil.",
					imageAlt: "Tarkov ESP player tags hack",
					galleryTitle: "TarkovHack galeri — ESP, Aimbot ve wallhack",
					heroImage: "/images/tarkov-cheats-esp.webp",
					ctaPrimary: "TarkovHack satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "2026'da neden TarkovHack",
							paragraphs: [
								"TarkovHack, Tarkov için Windows PC üzerinde ESP wallhack, radar hack ve tarkov aimbot undetected paket sunar. BR ve scav-run'da düşman squad okumak için ideal.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "ESP wallhack, radar ve Aimbot tek lisans",
							paragraphs: [
								"TarkovHack, Tarkov için Windows PC üzerinde ESP wallhack, radar hack ve tarkov aimbot undetected paket sunar. Ayrı araçlar yerine tek lisans.",
								"BattlEye anti-cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
							],
						},
					],
				},
				"tarkov-esp": {
					title: "Tarkov ESP | Player Boxes & Wallhack",
					description: "Tarkov ESP: player boxes, loot markers, and wallhack overlays. anında dijital teslimat. undetected — Windows PC.",
					h1: "Tarkov ESP",
					intro: "TarkovHack, Tarkov için Windows PC üzerinde ESP wallhack, radar hack ve tarkov aimbot undetected paket sunar. Tarkov ESP.",
					imageAlt: "Tarkov ESP player boxes and distance readouts in a raid",
					galleryTitle: "Tarkov ESP",
					heroImage: "/images/tarkov-cheats-radar.webp",
					ctaPrimary: "TarkovHack satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/tarkov-cheats/",
					sections: [
						{
							h2: "Tarkov ESP",
							paragraphs: [
								"TarkovHack, Tarkov için Windows PC üzerinde ESP wallhack, radar hack ve tarkov aimbot undetected paket sunar. player boxes, loot markers, and wallhack overlays.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye anti-cheat bakımı içerir.",
								"Destek ve yasal sorular için support@tarkovhack.com.",
							],
						},
					],
				},
				"tarkov-aimbot": {
					title: "Tarkov Aimbot | Soft Aim Controls",
					description: "Tarkov Aimbot: soft aim, FOV, and per-weapon Aimbot profiles. anında dijital teslimat. undetected — Windows PC.",
					h1: "Tarkov Aimbot",
					intro: "TarkovHack, Tarkov için Windows PC üzerinde ESP wallhack, radar hack ve tarkov aimbot undetected paket sunar. Tarkov Aimbot.",
					imageAlt: "Tarkov aimbot and soft aim controls on Windows PC",
					galleryTitle: "Tarkov Aimbot",
					heroImage: "/images/tarkov-cheats-aimbot.webp",
					ctaPrimary: "TarkovHack satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/tarkov-esp/",
					sections: [
						{
							h2: "Tarkov Aimbot",
							paragraphs: [
								"TarkovHack, Tarkov için Windows PC üzerinde ESP wallhack, radar hack ve tarkov aimbot undetected paket sunar. soft aim, FOV, and per-weapon Aimbot profiles.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye anti-cheat bakımı içerir.",
								"Destek ve yasal sorular için support@tarkovhack.com.",
							],
						},
					],
				},
				features: {
					title: "Özellikler | Full Feature List",
					description: "Özellikler: ESP, soft aim, radar controls. anında dijital teslimat. undetected — Windows PC.",
					h1: "Özellikler",
					intro: "TarkovHack, Tarkov için Windows PC üzerinde ESP wallhack, radar hack ve tarkov aimbot undetected paket sunar. Özellikler.",
					imageAlt: "TarkovHack features — ESP, soft aim, and radar screenshots",
					galleryTitle: "Özellikler",
					heroImage: "/images/tarkov-cheats-aimbot-view.webp",
					ctaPrimary: "TarkovHack satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Özellikler",
							paragraphs: [
								"TarkovHack, Tarkov için Windows PC üzerinde ESP wallhack, radar hack ve tarkov aimbot undetected paket sunar. ESP, soft aim, radar controls.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye anti-cheat bakımı içerir.",
								"Destek ve yasal sorular için support@tarkovhack.com.",
							],
						},
					],
				},
				pricing: {
					title: "Fiyatlar | Monthly & Lifetime",
					description: "Fiyatlar: $35 monthly or $150 lifetime licenses. anında dijital teslimat. undetected — Windows PC.",
					h1: "Fiyatlar",
					intro: "TarkovHack, Tarkov için Windows PC üzerinde ESP wallhack, radar hack ve tarkov aimbot undetected paket sunar. Fiyatlar.",
					imageAlt: "TarkovHack store plans for monthly and lifetime licenses",
					galleryTitle: "Fiyatlar",
					heroImage: "/images/tarkov-cheats-raid.webp",
					ctaPrimary: "TarkovHack satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Fiyatlar",
							paragraphs: [
								"TarkovHack, Tarkov için Windows PC üzerinde ESP wallhack, radar hack ve tarkov aimbot undetected paket sunar. $35 monthly or $150 lifetime licenses.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye anti-cheat bakımı içerir.",
								"Destek ve yasal sorular için support@tarkovhack.com.",
							],
						},
					],
				},
				setup: {
					title: "Kurulum | PC Setup Guide",
					description: "Kurulum: Windows PC activation and first-launch setup. anında dijital teslimat. undetected — Windows PC.",
					h1: "Kurulum",
					intro: "TarkovHack, Tarkov için Windows PC üzerinde ESP wallhack, radar hack ve tarkov aimbot undetected paket sunar. Kurulum.",
					imageAlt: "TarkovHack setup guide screenshot for Windows PC",
					galleryTitle: "Kurulum",
					heroImage: "/images/tarkov-cheats-radar.webp",
					ctaPrimary: "TarkovHack satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Kurulum",
							paragraphs: [
								"TarkovHack, Tarkov için Windows PC üzerinde ESP wallhack, radar hack ve tarkov aimbot undetected paket sunar. Windows PC activation and first-launch setup.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye anti-cheat bakımı içerir.",
								"Destek ve yasal sorular için support@tarkovhack.com.",
							],
						},
					],
				},
				updates: {
					title: "Güncellemeler | BattlEye Maintenance Log",
					description: "Güncellemeler: BattlEye patch status and rebuild notes. anında dijital teslimat. undetected — Windows PC.",
					h1: "Güncellemeler",
					intro: "TarkovHack, Tarkov için Windows PC üzerinde ESP wallhack, radar hack ve tarkov aimbot undetected paket sunar. Güncellemeler.",
					imageAlt: "TarkovHack live status after BattlEye and game patches",
					galleryTitle: "Güncellemeler",
					heroImage: "/images/tarkov-cheats-esp.webp",
					ctaPrimary: "TarkovHack satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/tarkov-cheats/",
					sections: [
						{
							h2: "Güncellemeler",
							paragraphs: [
								"TarkovHack, Tarkov için Windows PC üzerinde ESP wallhack, radar hack ve tarkov aimbot undetected paket sunar. BattlEye patch status and rebuild notes.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye anti-cheat bakımı içerir.",
								"Destek ve yasal sorular için support@tarkovhack.com.",
							],
						},
					],
				},
				faq: {
					title: "SSS | Common Answers",
					description: "SSS: ESP, soft aim, delivery, and BattlEye questions. anında dijital teslimat. undetected — Windows PC.",
					h1: "SSS",
					intro: "TarkovHack, Tarkov için Windows PC üzerinde ESP wallhack, radar hack ve tarkov aimbot undetected paket sunar. SSS.",
					imageAlt: "TarkovHack FAQ — delivery, setup, and update answers",
					galleryTitle: "SSS",
					heroImage: "/images/tarkov-cheats-aimbot-view.webp",
					ctaPrimary: "TarkovHack satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "SSS",
							paragraphs: [
								"TarkovHack, Tarkov için Windows PC üzerinde ESP wallhack, radar hack ve tarkov aimbot undetected paket sunar. ESP, soft aim, delivery, and BattlEye questions.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye anti-cheat bakımı içerir.",
								"Destek ve yasal sorular için support@tarkovhack.com.",
							],
						},
					],
				},
				support: {
					title: "Destek | Help & Contact",
					description: "Destek: order help and license support contact. anında dijital teslimat. undetected — Windows PC.",
					h1: "Destek",
					intro: "TarkovHack, Tarkov için Windows PC üzerinde ESP wallhack, radar hack ve tarkov aimbot undetected paket sunar. Destek.",
					imageAlt: "TarkovHack support page for license and setup help",
					galleryTitle: "Destek",
					heroImage: "/images/tarkov-cheats-raid.webp",
					ctaPrimary: "TarkovHack satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Destek",
							paragraphs: [
								"TarkovHack, Tarkov için Windows PC üzerinde ESP wallhack, radar hack ve tarkov aimbot undetected paket sunar. order help and license support contact.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye anti-cheat bakımı içerir.",
								"Destek ve yasal sorular için support@tarkovhack.com.",
							],
						},
					],
				},
				undetected: {
					title: "Undetected hileler | BattlEye Safe Status",
					description: "Undetected hileler: undetected maintenance after BattlEye anti-cheat patches. anında dijital teslimat. undetected — Windows PC.",
					h1: "Undetected hileler",
					intro: "TarkovHack, Tarkov için Windows PC üzerinde ESP wallhack, radar hack ve tarkov aimbot undetected paket sunar. Undetected hileler.",
					imageAlt: "TarkovHack undetected status overview for Windows PC",
					galleryTitle: "Undetected hileler",
					heroImage: "/images/tarkov-cheats-wallhack.webp",
					ctaPrimary: "TarkovHack satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/tarkov-cheats/",
					sections: [
						{
							h2: "Undetected hileler",
							paragraphs: [
								"TarkovHack, Tarkov için Windows PC üzerinde ESP wallhack, radar hack ve tarkov aimbot undetected paket sunar. undetected maintenance after BattlEye anti-cheat patches.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye anti-cheat bakımı içerir.",
								"Destek ve yasal sorular için support@tarkovhack.com.",
							],
						},
					],
				},
				wallhack: {
					title: "Tarkov Wallhack | ESP Visibility",
					description: "Tarkov Wallhack: wallhack ESP for players, loot, and distance. anında dijital teslimat. undetected — Windows PC.",
					h1: "Tarkov Wallhack",
					intro: "TarkovHack, Tarkov için Windows PC üzerinde ESP wallhack, radar hack ve tarkov aimbot undetected paket sunar. Tarkov Wallhack.",
					imageAlt: "Tarkov wallhack visibility through walls in a raid",
					galleryTitle: "Tarkov Wallhack",
					heroImage: "/images/tarkov-cheats-wallhack.webp",
					ctaPrimary: "TarkovHack satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/tarkov-esp/",
					sections: [
						{
							h2: "Tarkov Wallhack",
							paragraphs: [
								"TarkovHack, Tarkov için Windows PC üzerinde ESP wallhack, radar hack ve tarkov aimbot undetected paket sunar. wallhack ESP for players, loot, and distance.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye anti-cheat bakımı içerir.",
								"Destek ve yasal sorular için support@tarkovhack.com.",
							],
						},
					],
				},
				radar: {
					title: "Radar hack | 2D Threat Overlay",
					description: "Radar hack: 2D radar cues for flanks and rotations. anında dijital teslimat. undetected — Windows PC.",
					h1: "Radar hack",
					intro: "TarkovHack, Tarkov için Windows PC üzerinde ESP wallhack, radar hack ve tarkov aimbot undetected paket sunar. Radar hack.",
					imageAlt: "Tarkov 2D radar overlay showing nearby threats",
					galleryTitle: "Radar hack",
					heroImage: "/images/tarkov-cheats-radar.webp",
					ctaPrimary: "TarkovHack satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/tarkov-esp/",
					sections: [
						{
							h2: "Radar hack",
							paragraphs: [
								"TarkovHack, Tarkov için Windows PC üzerinde ESP wallhack, radar hack ve tarkov aimbot undetected paket sunar. 2D radar cues for flanks and rotations.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye anti-cheat bakımı içerir.",
								"Destek ve yasal sorular için support@tarkovhack.com.",
							],
						},
					],
				},
				battleye: {
					title: "BattlEye bypass | Patch Maintenance",
					description: "BattlEye bypass: how BattlEye updates are handled for Escape from Tarkov hacks. anında dijital teslimat. undetected — Windows PC.",
					h1: "BattlEye bypass",
					intro: "TarkovHack, Tarkov için Windows PC üzerinde ESP wallhack, radar hack ve tarkov aimbot undetected paket sunar. BattlEye bypass.",
					imageAlt: "TarkovHack maintenance after a BattlEye patch",
					galleryTitle: "BattlEye bypass",
					heroImage: "/images/tarkov-cheats-aimbot.webp",
					ctaPrimary: "TarkovHack satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "BattlEye bypass",
							paragraphs: [
								"TarkovHack, Tarkov için Windows PC üzerinde ESP wallhack, radar hack ve tarkov aimbot undetected paket sunar. how BattlEye updates are handled for Escape from Tarkov hacks.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye anti-cheat bakımı içerir.",
								"Destek ve yasal sorular için support@tarkovhack.com.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Tarkov Hileleri 2026 | Buyer Guide",
					description: "Tarkov Hileleri 2026: 2026 TarkovHack checklist before checkout. anında dijital teslimat. undetected — Windows PC.",
					h1: "Tarkov Hileleri 2026",
					intro: "TarkovHack, Tarkov için Windows PC üzerinde ESP wallhack, radar hack ve tarkov aimbot undetected paket sunar. Tarkov Hileleri 2026.",
					imageAlt: "TarkovHack product overview for Escape from Tarkov",
					galleryTitle: "Tarkov Hileleri 2026",
					heroImage: "/images/tarkov-cheats-esp.webp",
					ctaPrimary: "TarkovHack satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/tarkov-cheats/",
					sections: [
						{
							h2: "Tarkov Hileleri 2026",
							paragraphs: [
								"TarkovHack, Tarkov için Windows PC üzerinde ESP wallhack, radar hack ve tarkov aimbot undetected paket sunar. 2026 TarkovHack checklist before checkout.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye anti-cheat bakımı içerir.",
								"Destek ve yasal sorular için support@tarkovhack.com.",
							],
						},
					],
				},
				hacks: {
					title: "Tarkov Hileleri | ESP Aimbot Guide",
					description: "Tarkov Hileleri: the Escape from Tarkov hacks pillar for ESP and Aimbot. anında dijital teslimat. undetected — Windows PC.",
					h1: "Tarkov Hileleri",
					intro: "TarkovHack, Tarkov için Windows PC üzerinde ESP wallhack, radar hack ve tarkov aimbot undetected paket sunar. Tarkov Hileleri.",
					imageAlt: "TarkovHack product page — ESP, aimbot, and radar",
					galleryTitle: "Tarkov Hileleri",
					heroImage: "/images/tarkov-cheats-raid.webp",
					ctaPrimary: "TarkovHack satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Tarkov Hileleri",
							paragraphs: [
								"TarkovHack, Tarkov için Windows PC üzerinde ESP wallhack, radar hack ve tarkov aimbot undetected paket sunar. the Escape from Tarkov hacks pillar for ESP and Aimbot.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye anti-cheat bakımı içerir.",
								"Destek ve yasal sorular için support@tarkovhack.com.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Tarkov Hile İndir | Instant Access",
					description: "Tarkov Hile İndir: digital license download after payment. anında dijital teslimat. undetected — Windows PC.",
					h1: "Tarkov Hile İndir",
					intro: "TarkovHack, Tarkov için Windows PC üzerinde ESP wallhack, radar hack ve tarkov aimbot undetected paket sunar. Tarkov Hile İndir.",
					imageAlt: "TarkovHack download and install delivery flow",
					galleryTitle: "Tarkov Hile İndir",
					heroImage: "/images/tarkov-cheats-raid.webp",
					ctaPrimary: "TarkovHack satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Tarkov Hile İndir",
							paragraphs: [
								"TarkovHack, Tarkov için Windows PC üzerinde ESP wallhack, radar hack ve tarkov aimbot undetected paket sunar. digital license download after payment.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye anti-cheat bakımı içerir.",
								"Destek ve yasal sorular için support@tarkovhack.com.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Tarkov Mod Menü | In-Game Toggles",
					description: "Tarkov Mod Menü: in-client ESP and soft aim toggles. anında dijital teslimat. undetected — Windows PC.",
					h1: "Tarkov Mod Menü",
					intro: "TarkovHack, Tarkov için Windows PC üzerinde ESP wallhack, radar hack ve tarkov aimbot undetected paket sunar. Tarkov Mod Menü.",
					imageAlt: "TarkovHack in-game menu controls",
					galleryTitle: "Tarkov Mod Menü",
					heroImage: "/images/tarkov-cheats-radar.webp",
					ctaPrimary: "TarkovHack satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Tarkov Mod Menü",
							paragraphs: [
								"TarkovHack, Tarkov için Windows PC üzerinde ESP wallhack, radar hack ve tarkov aimbot undetected paket sunar. in-client ESP and soft aim toggles.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye anti-cheat bakımı içerir.",
								"Destek ve yasal sorular için support@tarkovhack.com.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Tarkov Soft Aim | Smooth Aim Settings",
					description: "Tarkov Soft Aim: smooth soft aim settings for Windows PC. anında dijital teslimat. undetected — Windows PC.",
					h1: "Tarkov Soft Aim",
					intro: "TarkovHack, Tarkov için Windows PC üzerinde ESP wallhack, radar hack ve tarkov aimbot undetected paket sunar. Tarkov Soft Aim.",
					imageAlt: "Tarkov soft aim FOV and smoothness settings",
					galleryTitle: "Tarkov Soft Aim",
					heroImage: "/images/tarkov-cheats-aimbot-view.webp",
					ctaPrimary: "TarkovHack satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/tarkov-aimbot/",
					sections: [
						{
							h2: "Tarkov Soft Aim",
							paragraphs: [
								"TarkovHack, Tarkov için Windows PC üzerinde ESP wallhack, radar hack ve tarkov aimbot undetected paket sunar. smooth soft aim settings for Windows PC.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye anti-cheat bakımı içerir.",
								"Destek ve yasal sorular için support@tarkovhack.com.",
							],
						},
					],
				},
				"best-cheats": {
					title: "En İyi Tarkov Hileleri | Buyer Checklist",
					description: "En İyi Tarkov Hileleri: what to compare before buying TarkovHack. anında dijital teslimat. undetected — Windows PC.",
					h1: "En İyi Tarkov Hileleri",
					intro: "TarkovHack, Tarkov için Windows PC üzerinde ESP wallhack, radar hack ve tarkov aimbot undetected paket sunar. En İyi Tarkov Hileleri.",
					imageAlt: "TarkovHack overview for Escape from Tarkov on PC",
					galleryTitle: "En İyi Tarkov Hileleri",
					heroImage: "/images/tarkov-cheats-esp.webp",
					ctaPrimary: "TarkovHack satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "En İyi Tarkov Hileleri",
							paragraphs: [
								"TarkovHack, Tarkov için Windows PC üzerinde ESP wallhack, radar hack ve tarkov aimbot undetected paket sunar. what to compare before buying TarkovHack.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye anti-cheat bakımı içerir.",
								"Destek ve yasal sorular için support@tarkovhack.com.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Tarkov Aimbot Hilesi | Soft Aim Assist",
					description: "Tarkov Aimbot Hilesi: undetected Aimbot hack assist for Escape from Tarkov. anında dijital teslimat. undetected — Windows PC.",
					h1: "Tarkov Aimbot Hilesi",
					intro: "TarkovHack, Tarkov için Windows PC üzerinde ESP wallhack, radar hack ve tarkov aimbot undetected paket sunar. Tarkov Aimbot Hilesi.",
					imageAlt: "Tarkov aimbot hack controls and bone priority",
					galleryTitle: "Tarkov Aimbot Hilesi",
					heroImage: "/images/tarkov-cheats-aimbot-view.webp",
					ctaPrimary: "TarkovHack satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/tarkov-aimbot/",
					sections: [
						{
							h2: "Tarkov Aimbot Hilesi",
							paragraphs: [
								"TarkovHack, Tarkov için Windows PC üzerinde ESP wallhack, radar hack ve tarkov aimbot undetected paket sunar. undetected Aimbot hack assist for Escape from Tarkov.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye anti-cheat bakımı içerir.",
								"Destek ve yasal sorular için support@tarkovhack.com.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Tarkov ESP Hilesi | Boxes & Loot",
					description: "Tarkov ESP Hilesi: ESP hack boxes, loot pins, and distance. anında dijital teslimat. undetected — Windows PC.",
					h1: "Tarkov ESP Hilesi",
					intro: "TarkovHack, Tarkov için Windows PC üzerinde ESP wallhack, radar hack ve tarkov aimbot undetected paket sunar. Tarkov ESP Hilesi.",
					imageAlt: "Tarkov ESP hack boxes and loot markers",
					galleryTitle: "Tarkov ESP Hilesi",
					heroImage: "/images/tarkov-cheats-wallhack.webp",
					ctaPrimary: "TarkovHack satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/tarkov-esp/",
					sections: [
						{
							h2: "Tarkov ESP Hilesi",
							paragraphs: [
								"TarkovHack, Tarkov için Windows PC üzerinde ESP wallhack, radar hack ve tarkov aimbot undetected paket sunar. ESP hack boxes, loot pins, and distance.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye anti-cheat bakımı içerir.",
								"Destek ve yasal sorular için support@tarkovhack.com.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Tarkov Unlock All | What It Means",
					description: "Tarkov Unlock All: unlock-all searches vs real ESP and Aimbot tools. anında dijital teslimat. undetected — Windows PC.",
					h1: "Tarkov Unlock All",
					intro: "TarkovHack, Tarkov için Windows PC üzerinde ESP wallhack, radar hack ve tarkov aimbot undetected paket sunar. Tarkov Unlock All.",
					imageAlt: "TarkovHack license features overview",
					galleryTitle: "Tarkov Unlock All",
					heroImage: "/images/tarkov-cheats-radar.webp",
					ctaPrimary: "TarkovHack satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Tarkov Unlock All",
							paragraphs: [
								"TarkovHack, Tarkov için Windows PC üzerinde ESP wallhack, radar hack ve tarkov aimbot undetected paket sunar. unlock-all searches vs real ESP and Aimbot tools.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye anti-cheat bakımı içerir.",
								"Destek ve yasal sorular için support@tarkovhack.com.",
							],
						},
					],
				},
				privacy: {
					title: "Gizlilik politikası | TarkovHack",
					description: "Gizlilik politikası for TarkovHack — ESP wallhack, Aimbot, Windows PC.",
					h1: "Gizlilik politikası",
					intro: "TarkovHack, Tarkov için Windows PC üzerinde ESP wallhack, radar hack ve tarkov aimbot undetected paket sunar. Gizlilik politikası for tarkovhack.com and Escape from Tarkov licenses.",
					imageAlt: "TarkovHack",
					galleryTitle: "TarkovHack",
					heroImage: "/images/tarkov-cheats-aimbot.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read terms",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we collect",
							paragraphs: [
								"TarkovHack, Tarkov için Windows PC üzerinde ESP wallhack, radar hack ve tarkov aimbot undetected paket sunar. Contact email, Zadeyo order references, and basic site security data.",
								"Payment details are processed by Zadeyo checkout — not stored on tarkovhack.com.",
							],
						},
						{
							h2: "How we use data",
							paragraphs: [
								"TarkovHack, Tarkov için Windows PC üzerinde ESP wallhack, radar hack ve tarkov aimbot undetected paket sunar. Support responses, order resolution, and legal compliance when required.",
								"BattlEye anti-cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
							],
						},
						{
							h2: "Your rights",
							paragraphs: [
								"Destek ve yasal sorular için support@tarkovhack.com.",
								"Email: support@tarkovhack.com",
							],
						},
					],
				},
				refund: {
					title: "İade politikası | TarkovHack",
					description: "İade politikası for TarkovHack — ESP wallhack, Aimbot, Windows PC.",
					h1: "İade politikası",
					intro: "TarkovHack, Tarkov için Windows PC üzerinde ESP wallhack, radar hack ve tarkov aimbot undetected paket sunar. İade politikası for tarkovhack.com and Escape from Tarkov licenses.",
					imageAlt: "TarkovHack",
					galleryTitle: "TarkovHack",
					heroImage: "/images/tarkov-cheats-raid.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digital delivery",
							paragraphs: [
								"TarkovHack, Tarkov için Windows PC üzerinde ESP wallhack, radar hack ve tarkov aimbot undetected paket sunar. Contact email, Zadeyo order references, and basic site security data.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "Refund approval",
							paragraphs: [
								"TarkovHack, Tarkov için Windows PC üzerinde ESP wallhack, radar hack ve tarkov aimbot undetected paket sunar. Support responses, order resolution, and legal compliance when required.",
								"BattlEye anti-cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
							],
						},
						{
							h2: "How to request",
							paragraphs: [
								"Destek ve yasal sorular için support@tarkovhack.com.",
								"Email: support@tarkovhack.com",
							],
						},
					],
				},
				terms: {
					title: "Kullanım şartları | TarkovHack",
					description: "Kullanım şartları for TarkovHack — ESP wallhack, Aimbot, Windows PC.",
					h1: "Kullanım şartları",
					intro: "TarkovHack, Tarkov için Windows PC üzerinde ESP wallhack, radar hack ve tarkov aimbot undetected paket sunar. Kullanım şartları for tarkovhack.com and Escape from Tarkov licenses.",
					imageAlt: "TarkovHack",
					galleryTitle: "TarkovHack",
					heroImage: "/images/tarkov-cheats-aimbot-view.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Acceptance of terms",
							paragraphs: [
								"TarkovHack, Tarkov için Windows PC üzerinde ESP wallhack, radar hack ve tarkov aimbot undetected paket sunar. Contact email, Zadeyo order references, and basic site security data.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları BattlEye anti-cheat bakımı içerir.",
							],
						},
						{
							h2: "Risk disclaimer",
							paragraphs: [
								"TarkovHack, Tarkov için Windows PC üzerinde ESP wallhack, radar hack ve tarkov aimbot undetected paket sunar. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "Policy changes",
							paragraphs: [
								"Destek ve yasal sorular için support@tarkovhack.com.",
								"Email: support@tarkovhack.com",
							],
						},
					],
				},
			},
		},
		ar: {
			ui: {
				nav: {
					home: "الرئيسية",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "الميزات",
					pricing: "الأسعار",
					setup: "التثبيت",
					updates: "التحديثات",
					faq: "الأسئلة",
					buyNow: "اشترِ الآن",
				},
				hero: {
					accent: "غش Tarkov غير مكتشف",
					accentShort: "TarkovHack",
					subtitle: "ESP wallhack ورadar hack وAimbot لـ Tarkov على Windows PC — صيانة BattlEye anti-cheat مشمولة.",
					subtitleShort: "ESP ورadar وAimbot لـ Tarkov PC",
					buyNow: "اشترِ الآن",
					seeFeatures: "عرض الميزات",
				},
				trust: {
					status: "متصل",
					statusNote: "حزمة TarkovHack نشطة لـ Tarkov على Windows PC.",
					statusShort: "نشط",
					delivery: "تسليم رقمي فوري",
					platform: "Windows 10 و11",
					antiCheat: "دعم صيانة BattlEye anti-cheat",
					antiCheatShort: "دعم BattlEye anti-cheat",
				},
				product: {
					title: "TarkovHack",
					addToCart: "أضف إلى السلة",
					monthly: "شهري",
					lifetime: "مدى الحياة",
					available: "متوفر الآن",
					gameBadge: "Tarkov",
					platformBadge: "Windows PC",
					statusBadge: "حزمة غير مكتشفة",
				},
				reviews: {
					title: "ماذا يقول اللاعبون",
					subtitle: "آراء حديثة من مشتري TarkovHack",
					outOf: "من 5",
					countLabel: "مراجعات",
				},
				common: {
					buyNow: "اشترِ الآن",
					readGuide: "اقرأ الدليل",
					language: "اللغة",
					officialLanguageNote: "الإنجليزية هي اللغة الرسمية. اللغات الأخرى مترجمة لتحسين SEO العالمي.",
					relatedPages: "صفحات ذات صلة",
				},
				footer: {
					explore: "استكشف",
					help: "المساعدة والقانون",
					tagline: "ESP وwallhack ورadar وAimbot غير مكتشف لـ Tarkov — الدفع عبر Zadeyo.",
				},
				images: {
					hero: "TarkovHack hero — ESP and aimbot overlay in Escape from Tarkov",
					espWallhack: "Wallhack outlines showing PMCs and Scavs through walls",
					aimbotCombat: "Soft aim assist overlay during an Escape from Tarkov raid",
					squadFight: "TarkovHack combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Tarkov raid",
					headerArt: "Aimbot view and bone priority controls for Tarkov",
					cheatsPackage: "2D radar threat overlay for Escape from Tarkov",
					rebootFight: "Aimbot assist during a Tarkov firefight",
					battleRoyale: "TarkovHack in-raid overview for Windows PC",
					battleRoyaleIsland: "ESP markers for loot and extracts in Tarkov",
				},
			},
			pages: {
				home: {
					title: "TarkovHack 2026 | ESP وWallhack وAimbot",
					description: "غش Escape from Tarkov undetected لـ Escape from Tarkov على PC. ESP wallhack ورadar hack وAimbot مع صيانة BattlEye anti-cheat. تسليم رقمي فوري.",
					h1: "TarkovHack — ESP وWallhack وAimbot غير مكتشف",
					intro: "حزمة undetected لـ Escape from Tarkov على Windows PC: ESP wallhack ورadar وAimbot مع صيانة BattlEye anti-cheat.",
					imageAlt: "Tarkov ESP player tags hack",
					galleryTitle: "معرض TarkovHack — ESP وAimbot وwallhack",
					heroImage: "/images/tarkov-cheats-esp.webp",
					ctaPrimary: "اشترِ TarkovHack",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "لماذا TarkovHack في 2026",
							paragraphs: [
								"TarkovHack يجمع ESP wallhack وradar hack وtarkov aimbot غير مكتشف لـ Tarkov على Windows PC. مثالي لقراءة فرق العدو في BR وscav-run.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye anti-cheat.",
							],
						},
						{
							h2: "ESP wallhack ورadar وAimbot في ترخيص واحد",
							paragraphs: [
								"TarkovHack يجمع ESP wallhack وradar hack وtarkov aimbot غير مكتشف لـ Tarkov على Windows PC. ترخيص واحد بدلاً من أدوات منفصلة.",
								"راجع Updates بعد تص patches BattlEye anti-cheat. لا يضمن أي غش حالة undetected دائمة.",
							],
						},
					],
				},
				"tarkov-esp": {
					title: "ESP Tarkov | Player Boxes & Wallhack",
					description: "ESP Tarkov: player boxes, loot markers, and wallhack overlays. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "ESP Tarkov",
					intro: "TarkovHack يجمع ESP wallhack وradar hack وtarkov aimbot غير مكتشف لـ Tarkov على Windows PC. ESP Tarkov.",
					imageAlt: "Tarkov ESP player boxes and distance readouts in a raid",
					galleryTitle: "ESP Tarkov",
					heroImage: "/images/tarkov-cheats-radar.webp",
					ctaPrimary: "اشترِ TarkovHack",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/tarkov-cheats/",
					sections: [
						{
							h2: "ESP Tarkov",
							paragraphs: [
								"TarkovHack يجمع ESP wallhack وradar hack وtarkov aimbot غير مكتشف لـ Tarkov على Windows PC. player boxes, loot markers, and wallhack overlays.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye anti-cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches BattlEye anti-cheat. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye anti-cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye anti-cheat.",
								"support@tarkovhack.com للدعم والطلبات القانونية.",
							],
						},
					],
				},
				"tarkov-aimbot": {
					title: "Aimbot Tarkov | Soft Aim Controls",
					description: "Aimbot Tarkov: soft aim, FOV, and per-weapon Aimbot profiles. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "Aimbot Tarkov",
					intro: "TarkovHack يجمع ESP wallhack وradar hack وtarkov aimbot غير مكتشف لـ Tarkov على Windows PC. Aimbot Tarkov.",
					imageAlt: "Tarkov aimbot and soft aim controls on Windows PC",
					galleryTitle: "Aimbot Tarkov",
					heroImage: "/images/tarkov-cheats-aimbot.webp",
					ctaPrimary: "اشترِ TarkovHack",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/tarkov-esp/",
					sections: [
						{
							h2: "Aimbot Tarkov",
							paragraphs: [
								"TarkovHack يجمع ESP wallhack وradar hack وtarkov aimbot غير مكتشف لـ Tarkov على Windows PC. soft aim, FOV, and per-weapon Aimbot profiles.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye anti-cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches BattlEye anti-cheat. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye anti-cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye anti-cheat.",
								"support@tarkovhack.com للدعم والطلبات القانونية.",
							],
						},
					],
				},
				features: {
					title: "الميزات | Full Feature List",
					description: "الميزات: ESP, soft aim, radar controls. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "الميزات",
					intro: "TarkovHack يجمع ESP wallhack وradar hack وtarkov aimbot غير مكتشف لـ Tarkov على Windows PC. الميزات.",
					imageAlt: "TarkovHack features — ESP, soft aim, and radar screenshots",
					galleryTitle: "الميزات",
					heroImage: "/images/tarkov-cheats-aimbot-view.webp",
					ctaPrimary: "اشترِ TarkovHack",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "الميزات",
							paragraphs: [
								"TarkovHack يجمع ESP wallhack وradar hack وtarkov aimbot غير مكتشف لـ Tarkov على Windows PC. ESP, soft aim, radar controls.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye anti-cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches BattlEye anti-cheat. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye anti-cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye anti-cheat.",
								"support@tarkovhack.com للدعم والطلبات القانونية.",
							],
						},
					],
				},
				pricing: {
					title: "الأسعار | Monthly & Lifetime",
					description: "الأسعار: $35 monthly or $150 lifetime licenses. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "الأسعار",
					intro: "TarkovHack يجمع ESP wallhack وradar hack وtarkov aimbot غير مكتشف لـ Tarkov على Windows PC. الأسعار.",
					imageAlt: "TarkovHack store plans for monthly and lifetime licenses",
					galleryTitle: "الأسعار",
					heroImage: "/images/tarkov-cheats-raid.webp",
					ctaPrimary: "اشترِ TarkovHack",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "الأسعار",
							paragraphs: [
								"TarkovHack يجمع ESP wallhack وradar hack وtarkov aimbot غير مكتشف لـ Tarkov على Windows PC. $35 monthly or $150 lifetime licenses.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye anti-cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches BattlEye anti-cheat. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye anti-cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye anti-cheat.",
								"support@tarkovhack.com للدعم والطلبات القانونية.",
							],
						},
					],
				},
				setup: {
					title: "التثبيت | PC Setup Guide",
					description: "التثبيت: Windows PC activation and first-launch setup. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "التثبيت",
					intro: "TarkovHack يجمع ESP wallhack وradar hack وtarkov aimbot غير مكتشف لـ Tarkov على Windows PC. التثبيت.",
					imageAlt: "TarkovHack setup guide screenshot for Windows PC",
					galleryTitle: "التثبيت",
					heroImage: "/images/tarkov-cheats-radar.webp",
					ctaPrimary: "اشترِ TarkovHack",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "التثبيت",
							paragraphs: [
								"TarkovHack يجمع ESP wallhack وradar hack وtarkov aimbot غير مكتشف لـ Tarkov على Windows PC. Windows PC activation and first-launch setup.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye anti-cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches BattlEye anti-cheat. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye anti-cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye anti-cheat.",
								"support@tarkovhack.com للدعم والطلبات القانونية.",
							],
						},
					],
				},
				updates: {
					title: "التحديثات | BattlEye Maintenance Log",
					description: "التحديثات: BattlEye patch status and rebuild notes. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "التحديثات",
					intro: "TarkovHack يجمع ESP wallhack وradar hack وtarkov aimbot غير مكتشف لـ Tarkov على Windows PC. التحديثات.",
					imageAlt: "TarkovHack live status after BattlEye and game patches",
					galleryTitle: "التحديثات",
					heroImage: "/images/tarkov-cheats-esp.webp",
					ctaPrimary: "اشترِ TarkovHack",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/tarkov-cheats/",
					sections: [
						{
							h2: "التحديثات",
							paragraphs: [
								"TarkovHack يجمع ESP wallhack وradar hack وtarkov aimbot غير مكتشف لـ Tarkov على Windows PC. BattlEye patch status and rebuild notes.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye anti-cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches BattlEye anti-cheat. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye anti-cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye anti-cheat.",
								"support@tarkovhack.com للدعم والطلبات القانونية.",
							],
						},
					],
				},
				faq: {
					title: "الأسئلة | Common Answers",
					description: "الأسئلة: ESP, soft aim, delivery, and BattlEye questions. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "الأسئلة",
					intro: "TarkovHack يجمع ESP wallhack وradar hack وtarkov aimbot غير مكتشف لـ Tarkov على Windows PC. الأسئلة.",
					imageAlt: "TarkovHack FAQ — delivery, setup, and update answers",
					galleryTitle: "الأسئلة",
					heroImage: "/images/tarkov-cheats-aimbot-view.webp",
					ctaPrimary: "اشترِ TarkovHack",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "الأسئلة",
							paragraphs: [
								"TarkovHack يجمع ESP wallhack وradar hack وtarkov aimbot غير مكتشف لـ Tarkov على Windows PC. ESP, soft aim, delivery, and BattlEye questions.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye anti-cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches BattlEye anti-cheat. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye anti-cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye anti-cheat.",
								"support@tarkovhack.com للدعم والطلبات القانونية.",
							],
						},
					],
				},
				support: {
					title: "الدعم | Help & Contact",
					description: "الدعم: order help and license support contact. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "الدعم",
					intro: "TarkovHack يجمع ESP wallhack وradar hack وtarkov aimbot غير مكتشف لـ Tarkov على Windows PC. الدعم.",
					imageAlt: "TarkovHack support page for license and setup help",
					galleryTitle: "الدعم",
					heroImage: "/images/tarkov-cheats-raid.webp",
					ctaPrimary: "اشترِ TarkovHack",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "الدعم",
							paragraphs: [
								"TarkovHack يجمع ESP wallhack وradar hack وtarkov aimbot غير مكتشف لـ Tarkov على Windows PC. order help and license support contact.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye anti-cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches BattlEye anti-cheat. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye anti-cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye anti-cheat.",
								"support@tarkovhack.com للدعم والطلبات القانونية.",
							],
						},
					],
				},
				undetected: {
					title: "غش undetected | BattlEye Safe Status",
					description: "غش undetected: undetected maintenance after BattlEye anti-cheat patches. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "غش undetected",
					intro: "TarkovHack يجمع ESP wallhack وradar hack وtarkov aimbot غير مكتشف لـ Tarkov على Windows PC. غش undetected.",
					imageAlt: "TarkovHack undetected status overview for Windows PC",
					galleryTitle: "غش undetected",
					heroImage: "/images/tarkov-cheats-wallhack.webp",
					ctaPrimary: "اشترِ TarkovHack",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/tarkov-cheats/",
					sections: [
						{
							h2: "غش undetected",
							paragraphs: [
								"TarkovHack يجمع ESP wallhack وradar hack وtarkov aimbot غير مكتشف لـ Tarkov على Windows PC. undetected maintenance after BattlEye anti-cheat patches.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye anti-cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches BattlEye anti-cheat. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye anti-cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye anti-cheat.",
								"support@tarkovhack.com للدعم والطلبات القانونية.",
							],
						},
					],
				},
				wallhack: {
					title: "Wallhack Tarkov | ESP Visibility",
					description: "Wallhack Tarkov: wallhack ESP for players, loot, and distance. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "Wallhack Tarkov",
					intro: "TarkovHack يجمع ESP wallhack وradar hack وtarkov aimbot غير مكتشف لـ Tarkov على Windows PC. Wallhack Tarkov.",
					imageAlt: "Tarkov wallhack visibility through walls in a raid",
					galleryTitle: "Wallhack Tarkov",
					heroImage: "/images/tarkov-cheats-wallhack.webp",
					ctaPrimary: "اشترِ TarkovHack",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/tarkov-esp/",
					sections: [
						{
							h2: "Wallhack Tarkov",
							paragraphs: [
								"TarkovHack يجمع ESP wallhack وradar hack وtarkov aimbot غير مكتشف لـ Tarkov على Windows PC. wallhack ESP for players, loot, and distance.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye anti-cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches BattlEye anti-cheat. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye anti-cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye anti-cheat.",
								"support@tarkovhack.com للدعم والطلبات القانونية.",
							],
						},
					],
				},
				radar: {
					title: "Radar hack | 2D Threat Overlay",
					description: "Radar hack: 2D radar cues for flanks and rotations. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "Radar hack",
					intro: "TarkovHack يجمع ESP wallhack وradar hack وtarkov aimbot غير مكتشف لـ Tarkov على Windows PC. Radar hack.",
					imageAlt: "Tarkov 2D radar overlay showing nearby threats",
					galleryTitle: "Radar hack",
					heroImage: "/images/tarkov-cheats-radar.webp",
					ctaPrimary: "اشترِ TarkovHack",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/tarkov-esp/",
					sections: [
						{
							h2: "Radar hack",
							paragraphs: [
								"TarkovHack يجمع ESP wallhack وradar hack وtarkov aimbot غير مكتشف لـ Tarkov على Windows PC. 2D radar cues for flanks and rotations.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye anti-cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches BattlEye anti-cheat. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye anti-cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye anti-cheat.",
								"support@tarkovhack.com للدعم والطلبات القانونية.",
							],
						},
					],
				},
				battleye: {
					title: "Bypass BattlEye | Patch Maintenance",
					description: "Bypass BattlEye: how BattlEye updates are handled for Escape from Tarkov hacks. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "Bypass BattlEye",
					intro: "TarkovHack يجمع ESP wallhack وradar hack وtarkov aimbot غير مكتشف لـ Tarkov على Windows PC. Bypass BattlEye.",
					imageAlt: "TarkovHack maintenance after a BattlEye patch",
					galleryTitle: "Bypass BattlEye",
					heroImage: "/images/tarkov-cheats-aimbot.webp",
					ctaPrimary: "اشترِ TarkovHack",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Bypass BattlEye",
							paragraphs: [
								"TarkovHack يجمع ESP wallhack وradar hack وtarkov aimbot غير مكتشف لـ Tarkov على Windows PC. how BattlEye updates are handled for Escape from Tarkov hacks.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye anti-cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches BattlEye anti-cheat. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye anti-cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye anti-cheat.",
								"support@tarkovhack.com للدعم والطلبات القانونية.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "غش Tarkov 2026 | Buyer Guide",
					description: "غش Tarkov 2026: 2026 TarkovHack checklist before checkout. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "غش Tarkov 2026",
					intro: "TarkovHack يجمع ESP wallhack وradar hack وtarkov aimbot غير مكتشف لـ Tarkov على Windows PC. غش Tarkov 2026.",
					imageAlt: "TarkovHack product overview for Escape from Tarkov",
					galleryTitle: "غش Tarkov 2026",
					heroImage: "/images/tarkov-cheats-esp.webp",
					ctaPrimary: "اشترِ TarkovHack",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/tarkov-cheats/",
					sections: [
						{
							h2: "غش Tarkov 2026",
							paragraphs: [
								"TarkovHack يجمع ESP wallhack وradar hack وtarkov aimbot غير مكتشف لـ Tarkov على Windows PC. 2026 TarkovHack checklist before checkout.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye anti-cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches BattlEye anti-cheat. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye anti-cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye anti-cheat.",
								"support@tarkovhack.com للدعم والطلبات القانونية.",
							],
						},
					],
				},
				hacks: {
					title: "غش Tarkov | ESP Aimbot Guide",
					description: "غش Tarkov: the Escape from Tarkov hacks pillar for ESP and Aimbot. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "غش Tarkov",
					intro: "TarkovHack يجمع ESP wallhack وradar hack وtarkov aimbot غير مكتشف لـ Tarkov على Windows PC. غش Tarkov.",
					imageAlt: "TarkovHack product page — ESP, aimbot, and radar",
					galleryTitle: "غش Tarkov",
					heroImage: "/images/tarkov-cheats-raid.webp",
					ctaPrimary: "اشترِ TarkovHack",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "غش Tarkov",
							paragraphs: [
								"TarkovHack يجمع ESP wallhack وradar hack وtarkov aimbot غير مكتشف لـ Tarkov على Windows PC. the Escape from Tarkov hacks pillar for ESP and Aimbot.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye anti-cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches BattlEye anti-cheat. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye anti-cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye anti-cheat.",
								"support@tarkovhack.com للدعم والطلبات القانونية.",
							],
						},
					],
				},
				"cheat-download": {
					title: "تحميل TarkovHack | Instant Access",
					description: "تحميل TarkovHack: digital license download after payment. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "تحميل TarkovHack",
					intro: "TarkovHack يجمع ESP wallhack وradar hack وtarkov aimbot غير مكتشف لـ Tarkov على Windows PC. تحميل TarkovHack.",
					imageAlt: "TarkovHack download and install delivery flow",
					galleryTitle: "تحميل TarkovHack",
					heroImage: "/images/tarkov-cheats-raid.webp",
					ctaPrimary: "اشترِ TarkovHack",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "تحميل TarkovHack",
							paragraphs: [
								"TarkovHack يجمع ESP wallhack وradar hack وtarkov aimbot غير مكتشف لـ Tarkov على Windows PC. digital license download after payment.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye anti-cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches BattlEye anti-cheat. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye anti-cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye anti-cheat.",
								"support@tarkovhack.com للدعم والطلبات القانونية.",
							],
						},
					],
				},
				"mod-menu": {
					title: "قائمة مود Tarkov | In-Game Toggles",
					description: "قائمة مود Tarkov: in-client ESP and soft aim toggles. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "قائمة مود Tarkov",
					intro: "TarkovHack يجمع ESP wallhack وradar hack وtarkov aimbot غير مكتشف لـ Tarkov على Windows PC. قائمة مود Tarkov.",
					imageAlt: "TarkovHack in-game menu controls",
					galleryTitle: "قائمة مود Tarkov",
					heroImage: "/images/tarkov-cheats-radar.webp",
					ctaPrimary: "اشترِ TarkovHack",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "قائمة مود Tarkov",
							paragraphs: [
								"TarkovHack يجمع ESP wallhack وradar hack وtarkov aimbot غير مكتشف لـ Tarkov على Windows PC. in-client ESP and soft aim toggles.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye anti-cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches BattlEye anti-cheat. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye anti-cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye anti-cheat.",
								"support@tarkovhack.com للدعم والطلبات القانونية.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Soft aim Tarkov | Smooth Aim Settings",
					description: "Soft aim Tarkov: smooth soft aim settings for Windows PC. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "Soft aim Tarkov",
					intro: "TarkovHack يجمع ESP wallhack وradar hack وtarkov aimbot غير مكتشف لـ Tarkov على Windows PC. Soft aim Tarkov.",
					imageAlt: "Tarkov soft aim FOV and smoothness settings",
					galleryTitle: "Soft aim Tarkov",
					heroImage: "/images/tarkov-cheats-aimbot-view.webp",
					ctaPrimary: "اشترِ TarkovHack",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/tarkov-aimbot/",
					sections: [
						{
							h2: "Soft aim Tarkov",
							paragraphs: [
								"TarkovHack يجمع ESP wallhack وradar hack وtarkov aimbot غير مكتشف لـ Tarkov على Windows PC. smooth soft aim settings for Windows PC.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye anti-cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches BattlEye anti-cheat. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye anti-cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye anti-cheat.",
								"support@tarkovhack.com للدعم والطلبات القانونية.",
							],
						},
					],
				},
				"best-cheats": {
					title: "أفضل غش Tarkov | Buyer Checklist",
					description: "أفضل غش Tarkov: what to compare before buying TarkovHack. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "أفضل غش Tarkov",
					intro: "TarkovHack يجمع ESP wallhack وradar hack وtarkov aimbot غير مكتشف لـ Tarkov على Windows PC. أفضل غش Tarkov.",
					imageAlt: "TarkovHack overview for Escape from Tarkov on PC",
					galleryTitle: "أفضل غش Tarkov",
					heroImage: "/images/tarkov-cheats-esp.webp",
					ctaPrimary: "اشترِ TarkovHack",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "أفضل غش Tarkov",
							paragraphs: [
								"TarkovHack يجمع ESP wallhack وradar hack وtarkov aimbot غير مكتشف لـ Tarkov على Windows PC. what to compare before buying TarkovHack.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye anti-cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches BattlEye anti-cheat. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye anti-cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye anti-cheat.",
								"support@tarkovhack.com للدعم والطلبات القانونية.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "هاك Aimbot Tarkov | Soft Aim Assist",
					description: "هاك Aimbot Tarkov: undetected Aimbot hack assist for Escape from Tarkov. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "هاك Aimbot Tarkov",
					intro: "TarkovHack يجمع ESP wallhack وradar hack وtarkov aimbot غير مكتشف لـ Tarkov على Windows PC. هاك Aimbot Tarkov.",
					imageAlt: "Tarkov aimbot hack controls and bone priority",
					galleryTitle: "هاك Aimbot Tarkov",
					heroImage: "/images/tarkov-cheats-aimbot-view.webp",
					ctaPrimary: "اشترِ TarkovHack",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/tarkov-aimbot/",
					sections: [
						{
							h2: "هاك Aimbot Tarkov",
							paragraphs: [
								"TarkovHack يجمع ESP wallhack وradar hack وtarkov aimbot غير مكتشف لـ Tarkov على Windows PC. undetected Aimbot hack assist for Escape from Tarkov.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye anti-cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches BattlEye anti-cheat. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye anti-cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye anti-cheat.",
								"support@tarkovhack.com للدعم والطلبات القانونية.",
							],
						},
					],
				},
				"esp-hack": {
					title: "هاك ESP Tarkov | Boxes & Loot",
					description: "هاك ESP Tarkov: ESP hack boxes, loot pins, and distance. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "هاك ESP Tarkov",
					intro: "TarkovHack يجمع ESP wallhack وradar hack وtarkov aimbot غير مكتشف لـ Tarkov على Windows PC. هاك ESP Tarkov.",
					imageAlt: "Tarkov ESP hack boxes and loot markers",
					galleryTitle: "هاك ESP Tarkov",
					heroImage: "/images/tarkov-cheats-wallhack.webp",
					ctaPrimary: "اشترِ TarkovHack",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/tarkov-esp/",
					sections: [
						{
							h2: "هاك ESP Tarkov",
							paragraphs: [
								"TarkovHack يجمع ESP wallhack وradar hack وtarkov aimbot غير مكتشف لـ Tarkov على Windows PC. ESP hack boxes, loot pins, and distance.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye anti-cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches BattlEye anti-cheat. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye anti-cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye anti-cheat.",
								"support@tarkovhack.com للدعم والطلبات القانونية.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Unlock all Tarkov | What It Means",
					description: "Unlock all Tarkov: unlock-all searches vs real ESP and Aimbot tools. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "Unlock all Tarkov",
					intro: "TarkovHack يجمع ESP wallhack وradar hack وtarkov aimbot غير مكتشف لـ Tarkov على Windows PC. Unlock all Tarkov.",
					imageAlt: "TarkovHack license features overview",
					galleryTitle: "Unlock all Tarkov",
					heroImage: "/images/tarkov-cheats-radar.webp",
					ctaPrimary: "اشترِ TarkovHack",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unlock all Tarkov",
							paragraphs: [
								"TarkovHack يجمع ESP wallhack وradar hack وtarkov aimbot غير مكتشف لـ Tarkov على Windows PC. unlock-all searches vs real ESP and Aimbot tools.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye anti-cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches BattlEye anti-cheat. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye anti-cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye anti-cheat.",
								"support@tarkovhack.com للدعم والطلبات القانونية.",
							],
						},
					],
				},
				privacy: {
					title: "سياسة الخصوصية | TarkovHack",
					description: "سياسة الخصوصية for TarkovHack — ESP wallhack, Aimbot, Windows PC.",
					h1: "سياسة الخصوصية",
					intro: "TarkovHack يجمع ESP wallhack وradar hack وtarkov aimbot غير مكتشف لـ Tarkov على Windows PC. سياسة الخصوصية for tarkovhack.com and Escape from Tarkov licenses.",
					imageAlt: "TarkovHack",
					galleryTitle: "TarkovHack",
					heroImage: "/images/tarkov-cheats-aimbot.webp",
					ctaPrimary: "مراسلة الدعم",
					ctaSecondary: "اقرأ الشروط",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "المعلومات التي نجمعها",
							paragraphs: [
								"TarkovHack يجمع ESP wallhack وradar hack وtarkov aimbot غير مكتشف لـ Tarkov على Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"Payment details are processed by Zadeyo checkout — not stored on tarkovhack.com.",
							],
						},
						{
							h2: "استخدام المعلومات",
							paragraphs: [
								"TarkovHack يجمع ESP wallhack وradar hack وtarkov aimbot غير مكتشف لـ Tarkov على Windows PC. Support responses, order resolution, and legal compliance when required.",
								"راجع Updates بعد تص patches BattlEye anti-cheat. لا يضمن أي غش حالة undetected دائمة.",
							],
						},
						{
							h2: "حقوقك",
							paragraphs: [
								"support@tarkovhack.com للدعم والطلبات القانونية.",
								"Email: support@tarkovhack.com",
							],
						},
					],
				},
				refund: {
					title: "سياسة الاسترداد | TarkovHack",
					description: "سياسة الاسترداد for TarkovHack — ESP wallhack, Aimbot, Windows PC.",
					h1: "سياسة الاسترداد",
					intro: "TarkovHack يجمع ESP wallhack وradar hack وtarkov aimbot غير مكتشف لـ Tarkov على Windows PC. سياسة الاسترداد for tarkovhack.com and Escape from Tarkov licenses.",
					imageAlt: "TarkovHack",
					galleryTitle: "TarkovHack",
					heroImage: "/images/tarkov-cheats-raid.webp",
					ctaPrimary: "مراسلة الدعم",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "التسليم الرقمي",
							paragraphs: [
								"TarkovHack يجمع ESP wallhack وradar hack وtarkov aimbot غير مكتشف لـ Tarkov على Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye anti-cheat.",
							],
						},
						{
							h2: "موافقة الاسترداد",
							paragraphs: [
								"TarkovHack يجمع ESP wallhack وradar hack وtarkov aimbot غير مكتشف لـ Tarkov على Windows PC. Support responses, order resolution, and legal compliance when required.",
								"راجع Updates بعد تص patches BattlEye anti-cheat. لا يضمن أي غش حالة undetected دائمة.",
							],
						},
						{
							h2: "كيفية الطلب",
							paragraphs: [
								"support@tarkovhack.com للدعم والطلبات القانونية.",
								"Email: support@tarkovhack.com",
							],
						},
					],
				},
				terms: {
					title: "شروط الاستخدام | TarkovHack",
					description: "شروط الاستخدام for TarkovHack — ESP wallhack, Aimbot, Windows PC.",
					h1: "شروط الاستخدام",
					intro: "TarkovHack يجمع ESP wallhack وradar hack وtarkov aimbot غير مكتشف لـ Tarkov على Windows PC. شروط الاستخدام for tarkovhack.com and Escape from Tarkov licenses.",
					imageAlt: "TarkovHack",
					galleryTitle: "TarkovHack",
					heroImage: "/images/tarkov-cheats-aimbot-view.webp",
					ctaPrimary: "مراسلة الدعم",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "قبول الشروط",
							paragraphs: [
								"TarkovHack يجمع ESP wallhack وradar hack وtarkov aimbot غير مكتشف لـ Tarkov على Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة BattlEye anti-cheat.",
							],
						},
						{
							h2: "المخاطر",
							paragraphs: [
								"TarkovHack يجمع ESP wallhack وradar hack وtarkov aimbot غير مكتشف لـ Tarkov على Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "التغييرات",
							paragraphs: [
								"support@tarkovhack.com للدعم والطلبات القانونية.",
								"Email: support@tarkovhack.com",
							],
						},
					],
				},
			},
		},
		ja: {
			ui: {
				nav: {
					home: "ホーム",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "機能",
					pricing: "料金",
					setup: "セットアップ",
					updates: "更新",
					faq: "FAQ",
					buyNow: "今すぐ購入",
				},
				hero: {
					accent: "Undetected Tarkovチート",
					accentShort: "TarkovHack",
					subtitle: "Tarkov Windows PC向けESP wallhack、radar hack、Aimbot — BattlEye anti-cheatメンテナンス付き。",
					subtitleShort: "Tarkov PC向けESP・radar・Aimbot",
					buyNow: "今すぐ購入",
					seeFeatures: "機能を見る",
				},
				trust: {
					status: "オンライン",
					statusNote: "TarkovHackパッケージはTarkov Windows PCで利用可能です。",
					statusShort: "稼働中",
					delivery: "即時デジタル配信",
					platform: "Windows 10 & 11",
					antiCheat: "BattlEye anti-cheatメンテナンス対応",
					antiCheatShort: "BattlEye anti-cheat対応",
				},
				product: {
					title: "TarkovHack",
					addToCart: "カートに追加",
					monthly: "月額",
					lifetime: "永久",
					available: "現在利用可能",
					gameBadge: "Tarkov",
					platformBadge: "Windows PC",
					statusBadge: "Undetectedパッケージ",
				},
				reviews: {
					title: "プレイヤーの声",
					subtitle: "TarkovHack購入者からの最近のフィードバック",
					outOf: "/5",
					countLabel: "件のレビュー",
				},
				common: {
					buyNow: "今すぐ購入",
					readGuide: "ガイドを読む",
					language: "言語",
					officialLanguageNote: "英語が公式言語です。他言語はグローバルSEO向けに翻訳されています。",
					relatedPages: "関連ページ",
				},
				footer: {
					explore: "探索",
					help: "ヘルプと法務",
					tagline: "Tarkov向けundetected ESP、wallhack、radar、Aimbot — Zadeyoで購入。",
				},
				images: {
					hero: "TarkovHack hero — ESP and aimbot overlay in Escape from Tarkov",
					espWallhack: "Wallhack outlines showing PMCs and Scavs through walls",
					aimbotCombat: "Soft aim assist overlay during an Escape from Tarkov raid",
					squadFight: "TarkovHack combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Tarkov raid",
					headerArt: "Aimbot view and bone priority controls for Tarkov",
					cheatsPackage: "2D radar threat overlay for Escape from Tarkov",
					rebootFight: "Aimbot assist during a Tarkov firefight",
					battleRoyale: "TarkovHack in-raid overview for Windows PC",
					battleRoyaleIsland: "ESP markers for loot and extracts in Tarkov",
				},
			},
			pages: {
				home: {
					title: "TarkovHack 2026 | ESP・Wallhack・Aimbot",
					description: "Escape from Tarkov向けundetectedチート。ESP wallhack、radar hack、Aimbot、BattlEye anti-cheatメンテナンス。即時デジタル配信。",
					h1: "TarkovHack — Undetected ESP・Wallhack・Aimbot",
					intro: "Escape from Tarkov Windows PC向けundetectedパッケージ：ESP wallhack、radar、Aimbot、BattlEye anti-cheatメンテナンス付き。",
					imageAlt: "TarkovHack hero ESP aimbot wallhack",
					galleryTitle: "TarkovHackギャラリー — ESP、Aimbot、wallhack",
					heroImage: "/images/tarkov-cheats-esp.webp",
					ctaPrimary: "TarkovHackを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "2026年にTarkovHackを選ぶ理由",
							paragraphs: [
								"TarkovHackはTarkov向けWindows PC用ESP wallhack、radar hack、tarkov aimbotのundetectedパッケージです。BRとscav-runで敵スクワッドを読むのに最適。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEye anti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "ESP wallhack、radar、Aimbotが1ライセンス",
							paragraphs: [
								"TarkovHackはTarkov向けWindows PC用ESP wallhack、radar hack、tarkov aimbotのundetectedパッケージです。別ツールではなく1ライセンス。",
								"BattlEye anti-cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
							],
						},
					],
				},
				"tarkov-esp": {
					title: "Tarkov ESP | Player Boxes & Wallhack",
					description: "Tarkov ESP: player boxes, loot markers, and wallhack overlays. 即時デジタル配信. undetected — Windows PC.",
					h1: "Tarkov ESP",
					intro: "TarkovHackはTarkov向けWindows PC用ESP wallhack、radar hack、tarkov aimbotのundetectedパッケージです。Tarkov ESP.",
					imageAlt: "Tarkov ESP player boxes and distance readouts in a raid",
					galleryTitle: "Tarkov ESP",
					heroImage: "/images/tarkov-cheats-radar.webp",
					ctaPrimary: "TarkovHackを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/tarkov-cheats/",
					sections: [
						{
							h2: "Tarkov ESP",
							paragraphs: [
								"TarkovHackはTarkov向けWindows PC用ESP wallhack、radar hack、tarkov aimbotのundetectedパッケージです。player boxes, loot markers, and wallhack overlays.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEye anti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEye anti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEye anti-cheatメンテナンス含む。",
								"サポート・法務: support@tarkovhack.com",
							],
						},
					],
				},
				"tarkov-aimbot": {
					title: "Tarkov Aimbot | Soft Aim Controls",
					description: "Tarkov Aimbot: soft aim, FOV, and per-weapon Aimbot profiles. 即時デジタル配信. undetected — Windows PC.",
					h1: "Tarkov Aimbot",
					intro: "TarkovHackはTarkov向けWindows PC用ESP wallhack、radar hack、tarkov aimbotのundetectedパッケージです。Tarkov Aimbot.",
					imageAlt: "Tarkov aimbot and soft aim controls on Windows PC",
					galleryTitle: "Tarkov Aimbot",
					heroImage: "/images/tarkov-cheats-aimbot.webp",
					ctaPrimary: "TarkovHackを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/tarkov-esp/",
					sections: [
						{
							h2: "Tarkov Aimbot",
							paragraphs: [
								"TarkovHackはTarkov向けWindows PC用ESP wallhack、radar hack、tarkov aimbotのundetectedパッケージです。soft aim, FOV, and per-weapon Aimbot profiles.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEye anti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEye anti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEye anti-cheatメンテナンス含む。",
								"サポート・法務: support@tarkovhack.com",
							],
						},
					],
				},
				features: {
					title: "機能 | Full Feature List",
					description: "機能: ESP, soft aim, radar controls. 即時デジタル配信. undetected — Windows PC.",
					h1: "機能",
					intro: "TarkovHackはTarkov向けWindows PC用ESP wallhack、radar hack、tarkov aimbotのundetectedパッケージです。機能.",
					imageAlt: "TarkovHack features — ESP, soft aim, and radar screenshots",
					galleryTitle: "機能",
					heroImage: "/images/tarkov-cheats-aimbot-view.webp",
					ctaPrimary: "TarkovHackを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "機能",
							paragraphs: [
								"TarkovHackはTarkov向けWindows PC用ESP wallhack、radar hack、tarkov aimbotのundetectedパッケージです。ESP, soft aim, radar controls.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEye anti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEye anti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEye anti-cheatメンテナンス含む。",
								"サポート・法務: support@tarkovhack.com",
							],
						},
					],
				},
				pricing: {
					title: "料金 | Monthly & Lifetime",
					description: "料金: $35 monthly or $150 lifetime licenses. 即時デジタル配信. undetected — Windows PC.",
					h1: "料金",
					intro: "TarkovHackはTarkov向けWindows PC用ESP wallhack、radar hack、tarkov aimbotのundetectedパッケージです。料金.",
					imageAlt: "TarkovHack store plans for monthly and lifetime licenses",
					galleryTitle: "料金",
					heroImage: "/images/tarkov-cheats-raid.webp",
					ctaPrimary: "TarkovHackを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "料金",
							paragraphs: [
								"TarkovHackはTarkov向けWindows PC用ESP wallhack、radar hack、tarkov aimbotのundetectedパッケージです。$35 monthly or $150 lifetime licenses.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEye anti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEye anti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEye anti-cheatメンテナンス含む。",
								"サポート・法務: support@tarkovhack.com",
							],
						},
					],
				},
				setup: {
					title: "セットアップ | PC Setup Guide",
					description: "セットアップ: Windows PC activation and first-launch setup. 即時デジタル配信. undetected — Windows PC.",
					h1: "セットアップ",
					intro: "TarkovHackはTarkov向けWindows PC用ESP wallhack、radar hack、tarkov aimbotのundetectedパッケージです。セットアップ.",
					imageAlt: "TarkovHack setup guide screenshot for Windows PC",
					galleryTitle: "セットアップ",
					heroImage: "/images/tarkov-cheats-radar.webp",
					ctaPrimary: "TarkovHackを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "セットアップ",
							paragraphs: [
								"TarkovHackはTarkov向けWindows PC用ESP wallhack、radar hack、tarkov aimbotのundetectedパッケージです。Windows PC activation and first-launch setup.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEye anti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEye anti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEye anti-cheatメンテナンス含む。",
								"サポート・法務: support@tarkovhack.com",
							],
						},
					],
				},
				updates: {
					title: "更新 | BattlEye Maintenance Log",
					description: "更新: BattlEye patch status and rebuild notes. 即時デジタル配信. undetected — Windows PC.",
					h1: "更新",
					intro: "TarkovHackはTarkov向けWindows PC用ESP wallhack、radar hack、tarkov aimbotのundetectedパッケージです。更新.",
					imageAlt: "TarkovHack live status after BattlEye and game patches",
					galleryTitle: "更新",
					heroImage: "/images/tarkov-cheats-esp.webp",
					ctaPrimary: "TarkovHackを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/tarkov-cheats/",
					sections: [
						{
							h2: "更新",
							paragraphs: [
								"TarkovHackはTarkov向けWindows PC用ESP wallhack、radar hack、tarkov aimbotのundetectedパッケージです。BattlEye patch status and rebuild notes.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEye anti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEye anti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEye anti-cheatメンテナンス含む。",
								"サポート・法務: support@tarkovhack.com",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Common Answers",
					description: "FAQ: ESP, soft aim, delivery, and BattlEye questions. 即時デジタル配信. undetected — Windows PC.",
					h1: "FAQ",
					intro: "TarkovHackはTarkov向けWindows PC用ESP wallhack、radar hack、tarkov aimbotのundetectedパッケージです。FAQ.",
					imageAlt: "TarkovHack FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/tarkov-cheats-aimbot-view.webp",
					ctaPrimary: "TarkovHackを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"TarkovHackはTarkov向けWindows PC用ESP wallhack、radar hack、tarkov aimbotのundetectedパッケージです。ESP, soft aim, delivery, and BattlEye questions.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEye anti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEye anti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEye anti-cheatメンテナンス含む。",
								"サポート・法務: support@tarkovhack.com",
							],
						},
					],
				},
				support: {
					title: "サポート | Help & Contact",
					description: "サポート: order help and license support contact. 即時デジタル配信. undetected — Windows PC.",
					h1: "サポート",
					intro: "TarkovHackはTarkov向けWindows PC用ESP wallhack、radar hack、tarkov aimbotのundetectedパッケージです。サポート.",
					imageAlt: "TarkovHack support page for license and setup help",
					galleryTitle: "サポート",
					heroImage: "/images/tarkov-cheats-raid.webp",
					ctaPrimary: "TarkovHackを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "サポート",
							paragraphs: [
								"TarkovHackはTarkov向けWindows PC用ESP wallhack、radar hack、tarkov aimbotのundetectedパッケージです。order help and license support contact.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEye anti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEye anti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEye anti-cheatメンテナンス含む。",
								"サポート・法務: support@tarkovhack.com",
							],
						},
					],
				},
				undetected: {
					title: "Undetectedチート | BattlEye Safe Status",
					description: "Undetectedチート: undetected maintenance after BattlEye anti-cheat patches. 即時デジタル配信. undetected — Windows PC.",
					h1: "Undetectedチート",
					intro: "TarkovHackはTarkov向けWindows PC用ESP wallhack、radar hack、tarkov aimbotのundetectedパッケージです。Undetectedチート.",
					imageAlt: "TarkovHack undetected status overview for Windows PC",
					galleryTitle: "Undetectedチート",
					heroImage: "/images/tarkov-cheats-wallhack.webp",
					ctaPrimary: "TarkovHackを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/tarkov-cheats/",
					sections: [
						{
							h2: "Undetectedチート",
							paragraphs: [
								"TarkovHackはTarkov向けWindows PC用ESP wallhack、radar hack、tarkov aimbotのundetectedパッケージです。undetected maintenance after BattlEye anti-cheat patches.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEye anti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEye anti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEye anti-cheatメンテナンス含む。",
								"サポート・法務: support@tarkovhack.com",
							],
						},
					],
				},
				wallhack: {
					title: "Tarkov Wallhack | ESP Visibility",
					description: "Tarkov Wallhack: wallhack ESP for players, loot, and distance. 即時デジタル配信. undetected — Windows PC.",
					h1: "Tarkov Wallhack",
					intro: "TarkovHackはTarkov向けWindows PC用ESP wallhack、radar hack、tarkov aimbotのundetectedパッケージです。Tarkov Wallhack.",
					imageAlt: "Tarkov wallhack visibility through walls in a raid",
					galleryTitle: "Tarkov Wallhack",
					heroImage: "/images/tarkov-cheats-wallhack.webp",
					ctaPrimary: "TarkovHackを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/tarkov-esp/",
					sections: [
						{
							h2: "Tarkov Wallhack",
							paragraphs: [
								"TarkovHackはTarkov向けWindows PC用ESP wallhack、radar hack、tarkov aimbotのundetectedパッケージです。wallhack ESP for players, loot, and distance.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEye anti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEye anti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEye anti-cheatメンテナンス含む。",
								"サポート・法務: support@tarkovhack.com",
							],
						},
					],
				},
				radar: {
					title: "Radar Hack | 2D Threat Overlay",
					description: "Radar Hack: 2D radar cues for flanks and rotations. 即時デジタル配信. undetected — Windows PC.",
					h1: "Radar Hack",
					intro: "TarkovHackはTarkov向けWindows PC用ESP wallhack、radar hack、tarkov aimbotのundetectedパッケージです。Radar Hack.",
					imageAlt: "Tarkov 2D radar overlay showing nearby threats",
					galleryTitle: "Radar Hack",
					heroImage: "/images/tarkov-cheats-radar.webp",
					ctaPrimary: "TarkovHackを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/tarkov-esp/",
					sections: [
						{
							h2: "Radar Hack",
							paragraphs: [
								"TarkovHackはTarkov向けWindows PC用ESP wallhack、radar hack、tarkov aimbotのundetectedパッケージです。2D radar cues for flanks and rotations.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEye anti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEye anti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEye anti-cheatメンテナンス含む。",
								"サポート・法務: support@tarkovhack.com",
							],
						},
					],
				},
				battleye: {
					title: "BattlEye Bypass | Patch Maintenance",
					description: "BattlEye Bypass: how BattlEye updates are handled for Escape from Tarkov hacks. 即時デジタル配信. undetected — Windows PC.",
					h1: "BattlEye Bypass",
					intro: "TarkovHackはTarkov向けWindows PC用ESP wallhack、radar hack、tarkov aimbotのundetectedパッケージです。BattlEye Bypass.",
					imageAlt: "TarkovHack maintenance after a BattlEye patch",
					galleryTitle: "BattlEye Bypass",
					heroImage: "/images/tarkov-cheats-aimbot.webp",
					ctaPrimary: "TarkovHackを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "BattlEye Bypass",
							paragraphs: [
								"TarkovHackはTarkov向けWindows PC用ESP wallhack、radar hack、tarkov aimbotのundetectedパッケージです。how BattlEye updates are handled for Escape from Tarkov hacks.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEye anti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEye anti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEye anti-cheatメンテナンス含む。",
								"サポート・法務: support@tarkovhack.com",
							],
						},
					],
				},
				"cheats-2026": {
					title: "TarkovHack 2026 | Buyer Guide",
					description: "TarkovHack 2026: 2026 TarkovHack checklist before checkout. 即時デジタル配信. undetected — Windows PC.",
					h1: "TarkovHack 2026",
					intro: "TarkovHackはTarkov向けWindows PC用ESP wallhack、radar hack、tarkov aimbotのundetectedパッケージです。TarkovHack 2026.",
					imageAlt: "TarkovHack product overview for Escape from Tarkov",
					galleryTitle: "TarkovHack 2026",
					heroImage: "/images/tarkov-cheats-esp.webp",
					ctaPrimary: "TarkovHackを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/tarkov-cheats/",
					sections: [
						{
							h2: "TarkovHack 2026",
							paragraphs: [
								"TarkovHackはTarkov向けWindows PC用ESP wallhack、radar hack、tarkov aimbotのundetectedパッケージです。2026 TarkovHack checklist before checkout.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEye anti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEye anti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEye anti-cheatメンテナンス含む。",
								"サポート・法務: support@tarkovhack.com",
							],
						},
					],
				},
				hacks: {
					title: "TarkovHack | ESP Aimbot Guide",
					description: "TarkovHack: the Escape from Tarkov hacks pillar for ESP and Aimbot. 即時デジタル配信. undetected — Windows PC.",
					h1: "TarkovHack",
					intro: "TarkovHackはTarkov向けWindows PC用ESP wallhack、radar hack、tarkov aimbotのundetectedパッケージです。TarkovHack.",
					imageAlt: "TarkovHack product page — ESP, aimbot, and radar",
					galleryTitle: "TarkovHack",
					heroImage: "/images/tarkov-cheats-raid.webp",
					ctaPrimary: "TarkovHackを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "TarkovHack",
							paragraphs: [
								"TarkovHackはTarkov向けWindows PC用ESP wallhack、radar hack、tarkov aimbotのundetectedパッケージです。the Escape from Tarkov hacks pillar for ESP and Aimbot.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEye anti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEye anti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEye anti-cheatメンテナンス含む。",
								"サポート・法務: support@tarkovhack.com",
							],
						},
					],
				},
				"cheat-download": {
					title: "Tarkov Cheat Download | Instant Access",
					description: "Tarkov Cheat Download: digital license download after payment. 即時デジタル配信. undetected — Windows PC.",
					h1: "Tarkov Cheat Download",
					intro: "TarkovHackはTarkov向けWindows PC用ESP wallhack、radar hack、tarkov aimbotのundetectedパッケージです。Tarkov Cheat Download.",
					imageAlt: "TarkovHack download and install delivery flow",
					galleryTitle: "Tarkov Cheat Download",
					heroImage: "/images/tarkov-cheats-raid.webp",
					ctaPrimary: "TarkovHackを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Tarkov Cheat Download",
							paragraphs: [
								"TarkovHackはTarkov向けWindows PC用ESP wallhack、radar hack、tarkov aimbotのundetectedパッケージです。digital license download after payment.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEye anti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEye anti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEye anti-cheatメンテナンス含む。",
								"サポート・法務: support@tarkovhack.com",
							],
						},
					],
				},
				"mod-menu": {
					title: "Tarkov Mod Menu | In-Game Toggles",
					description: "Tarkov Mod Menu: in-client ESP and soft aim toggles. 即時デジタル配信. undetected — Windows PC.",
					h1: "Tarkov Mod Menu",
					intro: "TarkovHackはTarkov向けWindows PC用ESP wallhack、radar hack、tarkov aimbotのundetectedパッケージです。Tarkov Mod Menu.",
					imageAlt: "TarkovHack in-game menu controls",
					galleryTitle: "Tarkov Mod Menu",
					heroImage: "/images/tarkov-cheats-radar.webp",
					ctaPrimary: "TarkovHackを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Tarkov Mod Menu",
							paragraphs: [
								"TarkovHackはTarkov向けWindows PC用ESP wallhack、radar hack、tarkov aimbotのundetectedパッケージです。in-client ESP and soft aim toggles.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEye anti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEye anti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEye anti-cheatメンテナンス含む。",
								"サポート・法務: support@tarkovhack.com",
							],
						},
					],
				},
				"soft-aim": {
					title: "Tarkov Soft Aim | Smooth Aim Settings",
					description: "Tarkov Soft Aim: smooth soft aim settings for Windows PC. 即時デジタル配信. undetected — Windows PC.",
					h1: "Tarkov Soft Aim",
					intro: "TarkovHackはTarkov向けWindows PC用ESP wallhack、radar hack、tarkov aimbotのundetectedパッケージです。Tarkov Soft Aim.",
					imageAlt: "Tarkov soft aim FOV and smoothness settings",
					galleryTitle: "Tarkov Soft Aim",
					heroImage: "/images/tarkov-cheats-aimbot-view.webp",
					ctaPrimary: "TarkovHackを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/tarkov-aimbot/",
					sections: [
						{
							h2: "Tarkov Soft Aim",
							paragraphs: [
								"TarkovHackはTarkov向けWindows PC用ESP wallhack、radar hack、tarkov aimbotのundetectedパッケージです。smooth soft aim settings for Windows PC.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEye anti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEye anti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEye anti-cheatメンテナンス含む。",
								"サポート・法務: support@tarkovhack.com",
							],
						},
					],
				},
				"best-cheats": {
					title: "最強Tarkovチート | Buyer Checklist",
					description: "最強Tarkovチート: what to compare before buying TarkovHack. 即時デジタル配信. undetected — Windows PC.",
					h1: "最強Tarkovチート",
					intro: "TarkovHackはTarkov向けWindows PC用ESP wallhack、radar hack、tarkov aimbotのundetectedパッケージです。最強Tarkovチート.",
					imageAlt: "TarkovHack overview for Escape from Tarkov on PC",
					galleryTitle: "最強Tarkovチート",
					heroImage: "/images/tarkov-cheats-esp.webp",
					ctaPrimary: "TarkovHackを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "最強Tarkovチート",
							paragraphs: [
								"TarkovHackはTarkov向けWindows PC用ESP wallhack、radar hack、tarkov aimbotのundetectedパッケージです。what to compare before buying TarkovHack.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEye anti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEye anti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEye anti-cheatメンテナンス含む。",
								"サポート・法務: support@tarkovhack.com",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Tarkov Aimbot Hack | Soft Aim Assist",
					description: "Tarkov Aimbot Hack: undetected Aimbot hack assist for Escape from Tarkov. 即時デジタル配信. undetected — Windows PC.",
					h1: "Tarkov Aimbot Hack",
					intro: "TarkovHackはTarkov向けWindows PC用ESP wallhack、radar hack、tarkov aimbotのundetectedパッケージです。Tarkov Aimbot Hack.",
					imageAlt: "Tarkov aimbot hack controls and bone priority",
					galleryTitle: "Tarkov Aimbot Hack",
					heroImage: "/images/tarkov-cheats-aimbot-view.webp",
					ctaPrimary: "TarkovHackを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/tarkov-aimbot/",
					sections: [
						{
							h2: "Tarkov Aimbot Hack",
							paragraphs: [
								"TarkovHackはTarkov向けWindows PC用ESP wallhack、radar hack、tarkov aimbotのundetectedパッケージです。undetected Aimbot hack assist for Escape from Tarkov.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEye anti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEye anti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEye anti-cheatメンテナンス含む。",
								"サポート・法務: support@tarkovhack.com",
							],
						},
					],
				},
				"esp-hack": {
					title: "Tarkov ESP Hack | Boxes & Loot",
					description: "Tarkov ESP Hack: ESP hack boxes, loot pins, and distance. 即時デジタル配信. undetected — Windows PC.",
					h1: "Tarkov ESP Hack",
					intro: "TarkovHackはTarkov向けWindows PC用ESP wallhack、radar hack、tarkov aimbotのundetectedパッケージです。Tarkov ESP Hack.",
					imageAlt: "Tarkov ESP hack boxes and loot markers",
					galleryTitle: "Tarkov ESP Hack",
					heroImage: "/images/tarkov-cheats-wallhack.webp",
					ctaPrimary: "TarkovHackを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/tarkov-esp/",
					sections: [
						{
							h2: "Tarkov ESP Hack",
							paragraphs: [
								"TarkovHackはTarkov向けWindows PC用ESP wallhack、radar hack、tarkov aimbotのundetectedパッケージです。ESP hack boxes, loot pins, and distance.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEye anti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEye anti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEye anti-cheatメンテナンス含む。",
								"サポート・法務: support@tarkovhack.com",
							],
						},
					],
				},
				"unlock-all": {
					title: "Tarkov Unlock All | What It Means",
					description: "Tarkov Unlock All: unlock-all searches vs real ESP and Aimbot tools. 即時デジタル配信. undetected — Windows PC.",
					h1: "Tarkov Unlock All",
					intro: "TarkovHackはTarkov向けWindows PC用ESP wallhack、radar hack、tarkov aimbotのundetectedパッケージです。Tarkov Unlock All.",
					imageAlt: "TarkovHack license features overview",
					galleryTitle: "Tarkov Unlock All",
					heroImage: "/images/tarkov-cheats-radar.webp",
					ctaPrimary: "TarkovHackを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Tarkov Unlock All",
							paragraphs: [
								"TarkovHackはTarkov向けWindows PC用ESP wallhack、radar hack、tarkov aimbotのundetectedパッケージです。unlock-all searches vs real ESP and Aimbot tools.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEye anti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEye anti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEye anti-cheatメンテナンス含む。",
								"サポート・法務: support@tarkovhack.com",
							],
						},
					],
				},
				privacy: {
					title: "プライバシーポリシー | TarkovHack",
					description: "プライバシーポリシー for TarkovHack — ESP wallhack, Aimbot, Windows PC.",
					h1: "プライバシーポリシー",
					intro: "TarkovHackはTarkov向けWindows PC用ESP wallhack、radar hack、tarkov aimbotのundetectedパッケージです。プライバシーポリシー for tarkovhack.com and Escape from Tarkov licenses.",
					imageAlt: "TarkovHack",
					galleryTitle: "TarkovHack",
					heroImage: "/images/tarkov-cheats-aimbot.webp",
					ctaPrimary: "サポートにメール",
					ctaSecondary: "利用規約",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "収集する情報",
							paragraphs: [
								"TarkovHackはTarkov向けWindows PC用ESP wallhack、radar hack、tarkov aimbotのundetectedパッケージです。Contact email, Zadeyo order references, and basic site security data.",
								"Payment details are processed by Zadeyo checkout — not stored on tarkovhack.com.",
							],
						},
						{
							h2: "情報の利用",
							paragraphs: [
								"TarkovHackはTarkov向けWindows PC用ESP wallhack、radar hack、tarkov aimbotのundetectedパッケージです。Support responses, order resolution, and legal compliance when required.",
								"BattlEye anti-cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
							],
						},
						{
							h2: "あなたの権利",
							paragraphs: [
								"サポート・法務: support@tarkovhack.com",
								"Email: support@tarkovhack.com",
							],
						},
					],
				},
				refund: {
					title: "返金ポリシー | TarkovHack",
					description: "返金ポリシー for TarkovHack — ESP wallhack, Aimbot, Windows PC.",
					h1: "返金ポリシー",
					intro: "TarkovHackはTarkov向けWindows PC用ESP wallhack、radar hack、tarkov aimbotのundetectedパッケージです。返金ポリシー for tarkovhack.com and Escape from Tarkov licenses.",
					imageAlt: "TarkovHack",
					galleryTitle: "TarkovHack",
					heroImage: "/images/tarkov-cheats-raid.webp",
					ctaPrimary: "サポートにメール",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "デジタル配信",
							paragraphs: [
								"TarkovHackはTarkov向けWindows PC用ESP wallhack、radar hack、tarkov aimbotのundetectedパッケージです。Contact email, Zadeyo order references, and basic site security data.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEye anti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "返金承認",
							paragraphs: [
								"TarkovHackはTarkov向けWindows PC用ESP wallhack、radar hack、tarkov aimbotのundetectedパッケージです。Support responses, order resolution, and legal compliance when required.",
								"BattlEye anti-cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
							],
						},
						{
							h2: "申請方法",
							paragraphs: [
								"サポート・法務: support@tarkovhack.com",
								"Email: support@tarkovhack.com",
							],
						},
					],
				},
				terms: {
					title: "利用規約 | TarkovHack",
					description: "利用規約 for TarkovHack — ESP wallhack, Aimbot, Windows PC.",
					h1: "利用規約",
					intro: "TarkovHackはTarkov向けWindows PC用ESP wallhack、radar hack、tarkov aimbotのundetectedパッケージです。利用規約 for tarkovhack.com and Escape from Tarkov licenses.",
					imageAlt: "TarkovHack",
					galleryTitle: "TarkovHack",
					heroImage: "/images/tarkov-cheats-aimbot-view.webp",
					ctaPrimary: "サポートにメール",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "規約への同意",
							paragraphs: [
								"TarkovHackはTarkov向けWindows PC用ESP wallhack、radar hack、tarkov aimbotのundetectedパッケージです。Contact email, Zadeyo order references, and basic site security data.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにBattlEye anti-cheatメンテナンス含む。",
							],
						},
						{
							h2: "リスク",
							paragraphs: [
								"TarkovHackはTarkov向けWindows PC用ESP wallhack、radar hack、tarkov aimbotのundetectedパッケージです。Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "変更",
							paragraphs: [
								"サポート・法務: support@tarkovhack.com",
								"Email: support@tarkovhack.com",
							],
						},
					],
				},
			},
		},
		ko: {
			ui: {
				nav: {
					home: "홈",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "기능",
					pricing: "가격",
					setup: "설치",
					updates: "업데이트",
					faq: "FAQ",
					buyNow: "구매하기",
				},
				hero: {
					accent: "Undetected Tarkov 치트",
					accentShort: "TarkovHack",
					subtitle: "Tarkov Windows PC용 ESP wallhack, radar hack, Aimbot — BattlEye anti-cheat 유지보수 포함.",
					subtitleShort: "Tarkov PC용 ESP, radar, Aimbot",
					buyNow: "지금 구매",
					seeFeatures: "기능 보기",
				},
				trust: {
					status: "온라인",
					statusNote: "TarkovHack 패키지는 Tarkov Windows PC에서 이용 가능합니다.",
					statusShort: "가동 중",
					delivery: "즉시 디지털 배송",
					platform: "Windows 10 & 11",
					antiCheat: "BattlEye anti-cheat 유지보수 지원",
					antiCheatShort: "BattlEye anti-cheat 지원",
				},
				product: {
					title: "TarkovHack",
					addToCart: "장바구니에 추가",
					monthly: "월간",
					lifetime: "평생",
					available: "지금 이용 가능",
					gameBadge: "Tarkov",
					platformBadge: "Windows PC",
					statusBadge: "Undetected 패키지",
				},
				reviews: {
					title: "플레이어 후기",
					subtitle: "TarkovHack 구매자 최근 피드백",
					outOf: "/5",
					countLabel: "리뷰",
				},
				common: {
					buyNow: "지금 구매",
					readGuide: "가이드 읽기",
					language: "언어",
					officialLanguageNote: "영어가 공식 언어입니다. 다른 언어는 글로벌 SEO를 위해 번역되었습니다.",
					relatedPages: "관련 페이지",
				},
				footer: {
					explore: "탐색",
					help: "도움말 및 법적",
					tagline: "Tarkov용 undetected ESP, wallhack, radar, Aimbot — Zadeyo 결제.",
				},
				images: {
					hero: "TarkovHack hero — ESP and aimbot overlay in Escape from Tarkov",
					espWallhack: "Wallhack outlines showing PMCs and Scavs through walls",
					aimbotCombat: "Soft aim assist overlay during an Escape from Tarkov raid",
					squadFight: "TarkovHack combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Tarkov raid",
					headerArt: "Aimbot view and bone priority controls for Tarkov",
					cheatsPackage: "2D radar threat overlay for Escape from Tarkov",
					rebootFight: "Aimbot assist during a Tarkov firefight",
					battleRoyale: "TarkovHack in-raid overview for Windows PC",
					battleRoyaleIsland: "ESP markers for loot and extracts in Tarkov",
				},
			},
			pages: {
				home: {
					title: "TarkovHack 2026 | ESP, Wallhack, Aimbot",
					description: "Escape from Tarkov undetected 치트. ESP wallhack, radar hack, Aimbot, BattlEye anti-cheat 유지보수. 즉시 디지털 배송.",
					h1: "TarkovHack — Undetected ESP, Wallhack, Aimbot",
					intro: "Escape from Tarkov Windows PC undetected 패키지: ESP wallhack, radar, Aimbot, BattlEye anti-cheat 유지보수 포함.",
					imageAlt: "TarkovHack hero ESP aimbot wallhack",
					galleryTitle: "TarkovHack 갤러리 — ESP, Aimbot, wallhack",
					heroImage: "/images/tarkov-cheats-esp.webp",
					ctaPrimary: "TarkovHack 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "2026년 TarkovHack를 선택하는 이유",
							paragraphs: [
								"TarkovHack는 Tarkov Windows PC용 ESP wallhack, radar hack, tarkov aimbot undetected 패키지입니다. BR 및 scav-run에서 적 분대 읽기에 이상적.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "ESP wallhack, radar, Aimbot 단일 라이선스",
							paragraphs: [
								"TarkovHack는 Tarkov Windows PC용 ESP wallhack, radar hack, tarkov aimbot undetected 패키지입니다. 별도 도구 대신 단일 라이선스.",
								"BattlEye anti-cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
							],
						},
					],
				},
				"tarkov-esp": {
					title: "Tarkov ESP | Player Boxes & Wallhack",
					description: "Tarkov ESP: player boxes, loot markers, and wallhack overlays. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "Tarkov ESP",
					intro: "TarkovHack는 Tarkov Windows PC용 ESP wallhack, radar hack, tarkov aimbot undetected 패키지입니다. Tarkov ESP.",
					imageAlt: "Tarkov ESP player boxes and distance readouts in a raid",
					galleryTitle: "Tarkov ESP",
					heroImage: "/images/tarkov-cheats-radar.webp",
					ctaPrimary: "TarkovHack 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/tarkov-cheats/",
					sections: [
						{
							h2: "Tarkov ESP",
							paragraphs: [
								"TarkovHack는 Tarkov Windows PC용 ESP wallhack, radar hack, tarkov aimbot undetected 패키지입니다. player boxes, loot markers, and wallhack overlays.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye anti-cheat 유지보수 포함.",
								"지원 및 법무: support@tarkovhack.com",
							],
						},
					],
				},
				"tarkov-aimbot": {
					title: "Tarkov Aimbot | Soft Aim Controls",
					description: "Tarkov Aimbot: soft aim, FOV, and per-weapon Aimbot profiles. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "Tarkov Aimbot",
					intro: "TarkovHack는 Tarkov Windows PC용 ESP wallhack, radar hack, tarkov aimbot undetected 패키지입니다. Tarkov Aimbot.",
					imageAlt: "Tarkov aimbot and soft aim controls on Windows PC",
					galleryTitle: "Tarkov Aimbot",
					heroImage: "/images/tarkov-cheats-aimbot.webp",
					ctaPrimary: "TarkovHack 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/tarkov-esp/",
					sections: [
						{
							h2: "Tarkov Aimbot",
							paragraphs: [
								"TarkovHack는 Tarkov Windows PC용 ESP wallhack, radar hack, tarkov aimbot undetected 패키지입니다. soft aim, FOV, and per-weapon Aimbot profiles.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye anti-cheat 유지보수 포함.",
								"지원 및 법무: support@tarkovhack.com",
							],
						},
					],
				},
				features: {
					title: "기능 | Full Feature List",
					description: "기능: ESP, soft aim, radar controls. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "기능",
					intro: "TarkovHack는 Tarkov Windows PC용 ESP wallhack, radar hack, tarkov aimbot undetected 패키지입니다. 기능.",
					imageAlt: "TarkovHack features — ESP, soft aim, and radar screenshots",
					galleryTitle: "기능",
					heroImage: "/images/tarkov-cheats-aimbot-view.webp",
					ctaPrimary: "TarkovHack 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "기능",
							paragraphs: [
								"TarkovHack는 Tarkov Windows PC용 ESP wallhack, radar hack, tarkov aimbot undetected 패키지입니다. ESP, soft aim, radar controls.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye anti-cheat 유지보수 포함.",
								"지원 및 법무: support@tarkovhack.com",
							],
						},
					],
				},
				pricing: {
					title: "가격 | Monthly & Lifetime",
					description: "가격: $35 monthly or $150 lifetime licenses. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "가격",
					intro: "TarkovHack는 Tarkov Windows PC용 ESP wallhack, radar hack, tarkov aimbot undetected 패키지입니다. 가격.",
					imageAlt: "TarkovHack store plans for monthly and lifetime licenses",
					galleryTitle: "가격",
					heroImage: "/images/tarkov-cheats-raid.webp",
					ctaPrimary: "TarkovHack 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "가격",
							paragraphs: [
								"TarkovHack는 Tarkov Windows PC용 ESP wallhack, radar hack, tarkov aimbot undetected 패키지입니다. $35 monthly or $150 lifetime licenses.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye anti-cheat 유지보수 포함.",
								"지원 및 법무: support@tarkovhack.com",
							],
						},
					],
				},
				setup: {
					title: "설치 | PC Setup Guide",
					description: "설치: Windows PC activation and first-launch setup. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "설치",
					intro: "TarkovHack는 Tarkov Windows PC용 ESP wallhack, radar hack, tarkov aimbot undetected 패키지입니다. 설치.",
					imageAlt: "TarkovHack setup guide screenshot for Windows PC",
					galleryTitle: "설치",
					heroImage: "/images/tarkov-cheats-radar.webp",
					ctaPrimary: "TarkovHack 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "설치",
							paragraphs: [
								"TarkovHack는 Tarkov Windows PC용 ESP wallhack, radar hack, tarkov aimbot undetected 패키지입니다. Windows PC activation and first-launch setup.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye anti-cheat 유지보수 포함.",
								"지원 및 법무: support@tarkovhack.com",
							],
						},
					],
				},
				updates: {
					title: "업데이트 | BattlEye Maintenance Log",
					description: "업데이트: BattlEye patch status and rebuild notes. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "업데이트",
					intro: "TarkovHack는 Tarkov Windows PC용 ESP wallhack, radar hack, tarkov aimbot undetected 패키지입니다. 업데이트.",
					imageAlt: "TarkovHack live status after BattlEye and game patches",
					galleryTitle: "업데이트",
					heroImage: "/images/tarkov-cheats-esp.webp",
					ctaPrimary: "TarkovHack 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/tarkov-cheats/",
					sections: [
						{
							h2: "업데이트",
							paragraphs: [
								"TarkovHack는 Tarkov Windows PC용 ESP wallhack, radar hack, tarkov aimbot undetected 패키지입니다. BattlEye patch status and rebuild notes.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye anti-cheat 유지보수 포함.",
								"지원 및 법무: support@tarkovhack.com",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Common Answers",
					description: "FAQ: ESP, soft aim, delivery, and BattlEye questions. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "FAQ",
					intro: "TarkovHack는 Tarkov Windows PC용 ESP wallhack, radar hack, tarkov aimbot undetected 패키지입니다. FAQ.",
					imageAlt: "TarkovHack FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/tarkov-cheats-aimbot-view.webp",
					ctaPrimary: "TarkovHack 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"TarkovHack는 Tarkov Windows PC용 ESP wallhack, radar hack, tarkov aimbot undetected 패키지입니다. ESP, soft aim, delivery, and BattlEye questions.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye anti-cheat 유지보수 포함.",
								"지원 및 법무: support@tarkovhack.com",
							],
						},
					],
				},
				support: {
					title: "지원 | Help & Contact",
					description: "지원: order help and license support contact. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "지원",
					intro: "TarkovHack는 Tarkov Windows PC용 ESP wallhack, radar hack, tarkov aimbot undetected 패키지입니다. 지원.",
					imageAlt: "TarkovHack support page for license and setup help",
					galleryTitle: "지원",
					heroImage: "/images/tarkov-cheats-raid.webp",
					ctaPrimary: "TarkovHack 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "지원",
							paragraphs: [
								"TarkovHack는 Tarkov Windows PC용 ESP wallhack, radar hack, tarkov aimbot undetected 패키지입니다. order help and license support contact.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye anti-cheat 유지보수 포함.",
								"지원 및 법무: support@tarkovhack.com",
							],
						},
					],
				},
				undetected: {
					title: "Undetected 치트 | BattlEye Safe Status",
					description: "Undetected 치트: undetected maintenance after BattlEye anti-cheat patches. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "Undetected 치트",
					intro: "TarkovHack는 Tarkov Windows PC용 ESP wallhack, radar hack, tarkov aimbot undetected 패키지입니다. Undetected 치트.",
					imageAlt: "TarkovHack undetected status overview for Windows PC",
					galleryTitle: "Undetected 치트",
					heroImage: "/images/tarkov-cheats-wallhack.webp",
					ctaPrimary: "TarkovHack 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/tarkov-cheats/",
					sections: [
						{
							h2: "Undetected 치트",
							paragraphs: [
								"TarkovHack는 Tarkov Windows PC용 ESP wallhack, radar hack, tarkov aimbot undetected 패키지입니다. undetected maintenance after BattlEye anti-cheat patches.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye anti-cheat 유지보수 포함.",
								"지원 및 법무: support@tarkovhack.com",
							],
						},
					],
				},
				wallhack: {
					title: "Tarkov Wallhack | ESP Visibility",
					description: "Tarkov Wallhack: wallhack ESP for players, loot, and distance. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "Tarkov Wallhack",
					intro: "TarkovHack는 Tarkov Windows PC용 ESP wallhack, radar hack, tarkov aimbot undetected 패키지입니다. Tarkov Wallhack.",
					imageAlt: "Tarkov wallhack visibility through walls in a raid",
					galleryTitle: "Tarkov Wallhack",
					heroImage: "/images/tarkov-cheats-wallhack.webp",
					ctaPrimary: "TarkovHack 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/tarkov-esp/",
					sections: [
						{
							h2: "Tarkov Wallhack",
							paragraphs: [
								"TarkovHack는 Tarkov Windows PC용 ESP wallhack, radar hack, tarkov aimbot undetected 패키지입니다. wallhack ESP for players, loot, and distance.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye anti-cheat 유지보수 포함.",
								"지원 및 법무: support@tarkovhack.com",
							],
						},
					],
				},
				radar: {
					title: "Radar Hack | 2D Threat Overlay",
					description: "Radar Hack: 2D radar cues for flanks and rotations. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "Radar Hack",
					intro: "TarkovHack는 Tarkov Windows PC용 ESP wallhack, radar hack, tarkov aimbot undetected 패키지입니다. Radar Hack.",
					imageAlt: "Tarkov 2D radar overlay showing nearby threats",
					galleryTitle: "Radar Hack",
					heroImage: "/images/tarkov-cheats-radar.webp",
					ctaPrimary: "TarkovHack 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/tarkov-esp/",
					sections: [
						{
							h2: "Radar Hack",
							paragraphs: [
								"TarkovHack는 Tarkov Windows PC용 ESP wallhack, radar hack, tarkov aimbot undetected 패키지입니다. 2D radar cues for flanks and rotations.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye anti-cheat 유지보수 포함.",
								"지원 및 법무: support@tarkovhack.com",
							],
						},
					],
				},
				battleye: {
					title: "BattlEye Bypass | Patch Maintenance",
					description: "BattlEye Bypass: how BattlEye updates are handled for Escape from Tarkov hacks. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "BattlEye Bypass",
					intro: "TarkovHack는 Tarkov Windows PC용 ESP wallhack, radar hack, tarkov aimbot undetected 패키지입니다. BattlEye Bypass.",
					imageAlt: "TarkovHack maintenance after a BattlEye patch",
					galleryTitle: "BattlEye Bypass",
					heroImage: "/images/tarkov-cheats-aimbot.webp",
					ctaPrimary: "TarkovHack 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "BattlEye Bypass",
							paragraphs: [
								"TarkovHack는 Tarkov Windows PC용 ESP wallhack, radar hack, tarkov aimbot undetected 패키지입니다. how BattlEye updates are handled for Escape from Tarkov hacks.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye anti-cheat 유지보수 포함.",
								"지원 및 법무: support@tarkovhack.com",
							],
						},
					],
				},
				"cheats-2026": {
					title: "TarkovHack 2026 | Buyer Guide",
					description: "TarkovHack 2026: 2026 TarkovHack checklist before checkout. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "TarkovHack 2026",
					intro: "TarkovHack는 Tarkov Windows PC용 ESP wallhack, radar hack, tarkov aimbot undetected 패키지입니다. TarkovHack 2026.",
					imageAlt: "TarkovHack product overview for Escape from Tarkov",
					galleryTitle: "TarkovHack 2026",
					heroImage: "/images/tarkov-cheats-esp.webp",
					ctaPrimary: "TarkovHack 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/tarkov-cheats/",
					sections: [
						{
							h2: "TarkovHack 2026",
							paragraphs: [
								"TarkovHack는 Tarkov Windows PC용 ESP wallhack, radar hack, tarkov aimbot undetected 패키지입니다. 2026 TarkovHack checklist before checkout.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye anti-cheat 유지보수 포함.",
								"지원 및 법무: support@tarkovhack.com",
							],
						},
					],
				},
				hacks: {
					title: "TarkovHack | ESP Aimbot Guide",
					description: "TarkovHack: the Escape from Tarkov hacks pillar for ESP and Aimbot. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "TarkovHack",
					intro: "TarkovHack는 Tarkov Windows PC용 ESP wallhack, radar hack, tarkov aimbot undetected 패키지입니다. TarkovHack.",
					imageAlt: "TarkovHack product page — ESP, aimbot, and radar",
					galleryTitle: "TarkovHack",
					heroImage: "/images/tarkov-cheats-raid.webp",
					ctaPrimary: "TarkovHack 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "TarkovHack",
							paragraphs: [
								"TarkovHack는 Tarkov Windows PC용 ESP wallhack, radar hack, tarkov aimbot undetected 패키지입니다. the Escape from Tarkov hacks pillar for ESP and Aimbot.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye anti-cheat 유지보수 포함.",
								"지원 및 법무: support@tarkovhack.com",
							],
						},
					],
				},
				"cheat-download": {
					title: "Tarkov Cheat Download | Instant Access",
					description: "Tarkov Cheat Download: digital license download after payment. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "Tarkov Cheat Download",
					intro: "TarkovHack는 Tarkov Windows PC용 ESP wallhack, radar hack, tarkov aimbot undetected 패키지입니다. Tarkov Cheat Download.",
					imageAlt: "TarkovHack download and install delivery flow",
					galleryTitle: "Tarkov Cheat Download",
					heroImage: "/images/tarkov-cheats-raid.webp",
					ctaPrimary: "TarkovHack 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Tarkov Cheat Download",
							paragraphs: [
								"TarkovHack는 Tarkov Windows PC용 ESP wallhack, radar hack, tarkov aimbot undetected 패키지입니다. digital license download after payment.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye anti-cheat 유지보수 포함.",
								"지원 및 법무: support@tarkovhack.com",
							],
						},
					],
				},
				"mod-menu": {
					title: "Tarkov 모드 메뉴 | In-Game Toggles",
					description: "Tarkov 모드 메뉴: in-client ESP and soft aim toggles. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "Tarkov 모드 메뉴",
					intro: "TarkovHack는 Tarkov Windows PC용 ESP wallhack, radar hack, tarkov aimbot undetected 패키지입니다. Tarkov 모드 메뉴.",
					imageAlt: "TarkovHack in-game menu controls",
					galleryTitle: "Tarkov 모드 메뉴",
					heroImage: "/images/tarkov-cheats-radar.webp",
					ctaPrimary: "TarkovHack 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Tarkov 모드 메뉴",
							paragraphs: [
								"TarkovHack는 Tarkov Windows PC용 ESP wallhack, radar hack, tarkov aimbot undetected 패키지입니다. in-client ESP and soft aim toggles.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye anti-cheat 유지보수 포함.",
								"지원 및 법무: support@tarkovhack.com",
							],
						},
					],
				},
				"soft-aim": {
					title: "Tarkov Soft Aim | Smooth Aim Settings",
					description: "Tarkov Soft Aim: smooth soft aim settings for Windows PC. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "Tarkov Soft Aim",
					intro: "TarkovHack는 Tarkov Windows PC용 ESP wallhack, radar hack, tarkov aimbot undetected 패키지입니다. Tarkov Soft Aim.",
					imageAlt: "Tarkov soft aim FOV and smoothness settings",
					galleryTitle: "Tarkov Soft Aim",
					heroImage: "/images/tarkov-cheats-aimbot-view.webp",
					ctaPrimary: "TarkovHack 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/tarkov-aimbot/",
					sections: [
						{
							h2: "Tarkov Soft Aim",
							paragraphs: [
								"TarkovHack는 Tarkov Windows PC용 ESP wallhack, radar hack, tarkov aimbot undetected 패키지입니다. smooth soft aim settings for Windows PC.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye anti-cheat 유지보수 포함.",
								"지원 및 법무: support@tarkovhack.com",
							],
						},
					],
				},
				"best-cheats": {
					title: "최고의 Tarkov 치트 | Buyer Checklist",
					description: "최고의 Tarkov 치트: what to compare before buying TarkovHack. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "최고의 Tarkov 치트",
					intro: "TarkovHack는 Tarkov Windows PC용 ESP wallhack, radar hack, tarkov aimbot undetected 패키지입니다. 최고의 Tarkov 치트.",
					imageAlt: "TarkovHack overview for Escape from Tarkov on PC",
					galleryTitle: "최고의 Tarkov 치트",
					heroImage: "/images/tarkov-cheats-esp.webp",
					ctaPrimary: "TarkovHack 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "최고의 Tarkov 치트",
							paragraphs: [
								"TarkovHack는 Tarkov Windows PC용 ESP wallhack, radar hack, tarkov aimbot undetected 패키지입니다. what to compare before buying TarkovHack.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye anti-cheat 유지보수 포함.",
								"지원 및 법무: support@tarkovhack.com",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Tarkov 에임봇 핵 | Soft Aim Assist",
					description: "Tarkov 에임봇 핵: undetected Aimbot hack assist for Escape from Tarkov. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "Tarkov 에임봇 핵",
					intro: "TarkovHack는 Tarkov Windows PC용 ESP wallhack, radar hack, tarkov aimbot undetected 패키지입니다. Tarkov 에임봇 핵.",
					imageAlt: "Tarkov aimbot hack controls and bone priority",
					galleryTitle: "Tarkov 에임봇 핵",
					heroImage: "/images/tarkov-cheats-aimbot-view.webp",
					ctaPrimary: "TarkovHack 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/tarkov-aimbot/",
					sections: [
						{
							h2: "Tarkov 에임봇 핵",
							paragraphs: [
								"TarkovHack는 Tarkov Windows PC용 ESP wallhack, radar hack, tarkov aimbot undetected 패키지입니다. undetected Aimbot hack assist for Escape from Tarkov.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye anti-cheat 유지보수 포함.",
								"지원 및 법무: support@tarkovhack.com",
							],
						},
					],
				},
				"esp-hack": {
					title: "Tarkov ESP 핵 | Boxes & Loot",
					description: "Tarkov ESP 핵: ESP hack boxes, loot pins, and distance. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "Tarkov ESP 핵",
					intro: "TarkovHack는 Tarkov Windows PC용 ESP wallhack, radar hack, tarkov aimbot undetected 패키지입니다. Tarkov ESP 핵.",
					imageAlt: "Tarkov ESP hack boxes and loot markers",
					galleryTitle: "Tarkov ESP 핵",
					heroImage: "/images/tarkov-cheats-wallhack.webp",
					ctaPrimary: "TarkovHack 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/tarkov-esp/",
					sections: [
						{
							h2: "Tarkov ESP 핵",
							paragraphs: [
								"TarkovHack는 Tarkov Windows PC용 ESP wallhack, radar hack, tarkov aimbot undetected 패키지입니다. ESP hack boxes, loot pins, and distance.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye anti-cheat 유지보수 포함.",
								"지원 및 법무: support@tarkovhack.com",
							],
						},
					],
				},
				"unlock-all": {
					title: "Tarkov Unlock All | What It Means",
					description: "Tarkov Unlock All: unlock-all searches vs real ESP and Aimbot tools. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "Tarkov Unlock All",
					intro: "TarkovHack는 Tarkov Windows PC용 ESP wallhack, radar hack, tarkov aimbot undetected 패키지입니다. Tarkov Unlock All.",
					imageAlt: "TarkovHack license features overview",
					galleryTitle: "Tarkov Unlock All",
					heroImage: "/images/tarkov-cheats-radar.webp",
					ctaPrimary: "TarkovHack 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Tarkov Unlock All",
							paragraphs: [
								"TarkovHack는 Tarkov Windows PC용 ESP wallhack, radar hack, tarkov aimbot undetected 패키지입니다. unlock-all searches vs real ESP and Aimbot tools.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye anti-cheat 유지보수 포함.",
								"지원 및 법무: support@tarkovhack.com",
							],
						},
					],
				},
				privacy: {
					title: "개인정보 처리방침 | TarkovHack",
					description: "개인정보 처리방침 for TarkovHack — ESP wallhack, Aimbot, Windows PC.",
					h1: "개인정보 처리방침",
					intro: "TarkovHack는 Tarkov Windows PC용 ESP wallhack, radar hack, tarkov aimbot undetected 패키지입니다. 개인정보 처리방침 for tarkovhack.com and Escape from Tarkov licenses.",
					imageAlt: "TarkovHack",
					galleryTitle: "TarkovHack",
					heroImage: "/images/tarkov-cheats-aimbot.webp",
					ctaPrimary: "지원 이메일",
					ctaSecondary: "Read terms",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we collect",
							paragraphs: [
								"TarkovHack는 Tarkov Windows PC용 ESP wallhack, radar hack, tarkov aimbot undetected 패키지입니다. Contact email, Zadeyo order references, and basic site security data.",
								"Payment details are processed by Zadeyo checkout — not stored on tarkovhack.com.",
							],
						},
						{
							h2: "How we use data",
							paragraphs: [
								"TarkovHack는 Tarkov Windows PC용 ESP wallhack, radar hack, tarkov aimbot undetected 패키지입니다. Support responses, order resolution, and legal compliance when required.",
								"BattlEye anti-cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
							],
						},
						{
							h2: "Your rights",
							paragraphs: [
								"지원 및 법무: support@tarkovhack.com",
								"Email: support@tarkovhack.com",
							],
						},
					],
				},
				refund: {
					title: "환불 정책 | TarkovHack",
					description: "환불 정책 for TarkovHack — ESP wallhack, Aimbot, Windows PC.",
					h1: "환불 정책",
					intro: "TarkovHack는 Tarkov Windows PC용 ESP wallhack, radar hack, tarkov aimbot undetected 패키지입니다. 환불 정책 for tarkovhack.com and Escape from Tarkov licenses.",
					imageAlt: "TarkovHack",
					galleryTitle: "TarkovHack",
					heroImage: "/images/tarkov-cheats-raid.webp",
					ctaPrimary: "지원 이메일",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digital delivery",
							paragraphs: [
								"TarkovHack는 Tarkov Windows PC용 ESP wallhack, radar hack, tarkov aimbot undetected 패키지입니다. Contact email, Zadeyo order references, and basic site security data.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "Refund approval",
							paragraphs: [
								"TarkovHack는 Tarkov Windows PC용 ESP wallhack, radar hack, tarkov aimbot undetected 패키지입니다. Support responses, order resolution, and legal compliance when required.",
								"BattlEye anti-cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
							],
						},
						{
							h2: "How to request",
							paragraphs: [
								"지원 및 법무: support@tarkovhack.com",
								"Email: support@tarkovhack.com",
							],
						},
					],
				},
				terms: {
					title: "이용 약관 | TarkovHack",
					description: "이용 약관 for TarkovHack — ESP wallhack, Aimbot, Windows PC.",
					h1: "이용 약관",
					intro: "TarkovHack는 Tarkov Windows PC용 ESP wallhack, radar hack, tarkov aimbot undetected 패키지입니다. 이용 약관 for tarkovhack.com and Escape from Tarkov licenses.",
					imageAlt: "TarkovHack",
					galleryTitle: "TarkovHack",
					heroImage: "/images/tarkov-cheats-aimbot-view.webp",
					ctaPrimary: "지원 이메일",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Acceptance of terms",
							paragraphs: [
								"TarkovHack는 Tarkov Windows PC용 ESP wallhack, radar hack, tarkov aimbot undetected 패키지입니다. Contact email, Zadeyo order references, and basic site security data.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 BattlEye anti-cheat 유지보수 포함.",
							],
						},
						{
							h2: "Risk disclaimer",
							paragraphs: [
								"TarkovHack는 Tarkov Windows PC용 ESP wallhack, radar hack, tarkov aimbot undetected 패키지입니다. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "Policy changes",
							paragraphs: [
								"지원 및 법무: support@tarkovhack.com",
								"Email: support@tarkovhack.com",
							],
						},
					],
				},
			},
		},
		zh: {
			ui: {
				nav: {
					home: "首页",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "功能",
					pricing: "价格",
					setup: "安装",
					updates: "更新",
					faq: "常见问题",
					buyNow: "立即购买",
				},
				hero: {
					accent: "Undetected Tarkov作弊",
					accentShort: "TarkovHack",
					subtitle: "适用于Tarkov Windows PC的ESP wallhack、radar hack和Aimbot — 含BattlEye anti-cheat维护。",
					subtitleShort: "Tarkov PC版ESP、radar与Aimbot",
					buyNow: "立即购买",
					seeFeatures: "查看功能",
				},
				trust: {
					status: "在线",
					statusNote: "TarkovHack套餐已在Tarkov Windows PC上线。",
					statusShort: "运行中",
					delivery: "即时数字交付",
					platform: "Windows 10 和 11",
					antiCheat: "支持BattlEye anti-cheat维护",
					antiCheatShort: "BattlEye anti-cheat支持",
				},
				product: {
					title: "TarkovHack",
					addToCart: "加入购物车",
					monthly: "月付",
					lifetime: "终身",
					available: "现已可用",
					gameBadge: "Tarkov",
					platformBadge: "Windows PC",
					statusBadge: "Undetected套餐",
				},
				reviews: {
					title: "玩家评价",
					subtitle: "TarkovHack 买家近期反馈",
					outOf: "/5",
					countLabel: "条评价",
				},
				common: {
					buyNow: "立即购买",
					readGuide: "阅读指南",
					language: "语言",
					officialLanguageNote: "英语为官方语言。其他语言为全球SEO翻译版本。",
					relatedPages: "相关页面",
				},
				footer: {
					explore: "探索",
					help: "帮助与法律",
					tagline: "Tarkov undetected ESP、wallhack、radar与Aimbot — 通过Zadeyo结账。",
				},
				images: {
					hero: "TarkovHack hero — ESP and aimbot overlay in Escape from Tarkov",
					espWallhack: "Wallhack outlines showing PMCs and Scavs through walls",
					aimbotCombat: "Soft aim assist overlay during an Escape from Tarkov raid",
					squadFight: "TarkovHack combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Tarkov raid",
					headerArt: "Aimbot view and bone priority controls for Tarkov",
					cheatsPackage: "2D radar threat overlay for Escape from Tarkov",
					rebootFight: "Aimbot assist during a Tarkov firefight",
					battleRoyale: "TarkovHack in-raid overview for Windows PC",
					battleRoyaleIsland: "ESP markers for loot and extracts in Tarkov",
				},
			},
			pages: {
				home: {
					title: "TarkovHack 2026 | ESP、Wallhack、Aimbot",
					description: "Escape from Tarkov undetected作弊。ESP wallhack、radar hack、Aimbot、BattlEye anti-cheat维护。即时数字交付。",
					h1: "TarkovHack — Undetected ESP、Wallhack、Aimbot",
					intro: "Escape from Tarkov Windows PC undetected套餐：ESP wallhack、radar、Aimbot，含BattlEye anti-cheat维护。",
					imageAlt: "TarkovHack hero ESP aimbot wallhack",
					galleryTitle: "TarkovHack图库 — ESP、Aimbot、wallhack",
					heroImage: "/images/tarkov-cheats-esp.webp",
					ctaPrimary: "购买 TarkovHack",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "2026年选择TarkovHack的原因",
							paragraphs: [
								"TarkovHack为TarkovWindows PC提供ESP wallhack、radar hack和tarkov aimbotundetected套餐。适合在BR和scav-run中读取敌方小队。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye anti-cheat维护。",
							],
						},
						{
							h2: "ESP wallhack、radar、Aimbot单一许可证",
							paragraphs: [
								"TarkovHack为TarkovWindows PC提供ESP wallhack、radar hack和tarkov aimbotundetected套餐。一个许可证而非多个工具。",
								"BattlEye anti-cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
							],
						},
					],
				},
				"tarkov-esp": {
					title: "Tarkov ESP | Player Boxes & Wallhack",
					description: "Tarkov ESP: player boxes, loot markers, and wallhack overlays. 即时数字交付. undetected — Windows PC.",
					h1: "Tarkov ESP",
					intro: "TarkovHack为TarkovWindows PC提供ESP wallhack、radar hack和tarkov aimbotundetected套餐。Tarkov ESP.",
					imageAlt: "Tarkov ESP player boxes and distance readouts in a raid",
					galleryTitle: "Tarkov ESP",
					heroImage: "/images/tarkov-cheats-radar.webp",
					ctaPrimary: "购买 TarkovHack",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/tarkov-cheats/",
					sections: [
						{
							h2: "Tarkov ESP",
							paragraphs: [
								"TarkovHack为TarkovWindows PC提供ESP wallhack、radar hack和tarkov aimbotundetected套餐。player boxes, loot markers, and wallhack overlays.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye anti-cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye anti-cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye anti-cheat维护。",
								"支持与法务：support@tarkovhack.com",
							],
						},
					],
				},
				"tarkov-aimbot": {
					title: "Tarkov Aimbot | Soft Aim Controls",
					description: "Tarkov Aimbot: soft aim, FOV, and per-weapon Aimbot profiles. 即时数字交付. undetected — Windows PC.",
					h1: "Tarkov Aimbot",
					intro: "TarkovHack为TarkovWindows PC提供ESP wallhack、radar hack和tarkov aimbotundetected套餐。Tarkov Aimbot.",
					imageAlt: "Tarkov aimbot and soft aim controls on Windows PC",
					galleryTitle: "Tarkov Aimbot",
					heroImage: "/images/tarkov-cheats-aimbot.webp",
					ctaPrimary: "购买 TarkovHack",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/tarkov-esp/",
					sections: [
						{
							h2: "Tarkov Aimbot",
							paragraphs: [
								"TarkovHack为TarkovWindows PC提供ESP wallhack、radar hack和tarkov aimbotundetected套餐。soft aim, FOV, and per-weapon Aimbot profiles.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye anti-cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye anti-cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye anti-cheat维护。",
								"支持与法务：support@tarkovhack.com",
							],
						},
					],
				},
				features: {
					title: "功能 | Full Feature List",
					description: "功能: ESP, soft aim, radar controls. 即时数字交付. undetected — Windows PC.",
					h1: "功能",
					intro: "TarkovHack为TarkovWindows PC提供ESP wallhack、radar hack和tarkov aimbotundetected套餐。功能.",
					imageAlt: "TarkovHack features — ESP, soft aim, and radar screenshots",
					galleryTitle: "功能",
					heroImage: "/images/tarkov-cheats-aimbot-view.webp",
					ctaPrimary: "购买 TarkovHack",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "功能",
							paragraphs: [
								"TarkovHack为TarkovWindows PC提供ESP wallhack、radar hack和tarkov aimbotundetected套餐。ESP, soft aim, radar controls.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye anti-cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye anti-cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye anti-cheat维护。",
								"支持与法务：support@tarkovhack.com",
							],
						},
					],
				},
				pricing: {
					title: "价格 | Monthly & Lifetime",
					description: "价格: $35 monthly or $150 lifetime licenses. 即时数字交付. undetected — Windows PC.",
					h1: "价格",
					intro: "TarkovHack为TarkovWindows PC提供ESP wallhack、radar hack和tarkov aimbotundetected套餐。价格.",
					imageAlt: "TarkovHack store plans for monthly and lifetime licenses",
					galleryTitle: "价格",
					heroImage: "/images/tarkov-cheats-raid.webp",
					ctaPrimary: "购买 TarkovHack",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "价格",
							paragraphs: [
								"TarkovHack为TarkovWindows PC提供ESP wallhack、radar hack和tarkov aimbotundetected套餐。$35 monthly or $150 lifetime licenses.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye anti-cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye anti-cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye anti-cheat维护。",
								"支持与法务：support@tarkovhack.com",
							],
						},
					],
				},
				setup: {
					title: "安装 | PC Setup Guide",
					description: "安装: Windows PC activation and first-launch setup. 即时数字交付. undetected — Windows PC.",
					h1: "安装",
					intro: "TarkovHack为TarkovWindows PC提供ESP wallhack、radar hack和tarkov aimbotundetected套餐。安装.",
					imageAlt: "TarkovHack setup guide screenshot for Windows PC",
					galleryTitle: "安装",
					heroImage: "/images/tarkov-cheats-radar.webp",
					ctaPrimary: "购买 TarkovHack",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "安装",
							paragraphs: [
								"TarkovHack为TarkovWindows PC提供ESP wallhack、radar hack和tarkov aimbotundetected套餐。Windows PC activation and first-launch setup.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye anti-cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye anti-cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye anti-cheat维护。",
								"支持与法务：support@tarkovhack.com",
							],
						},
					],
				},
				updates: {
					title: "更新 | BattlEye Maintenance Log",
					description: "更新: BattlEye patch status and rebuild notes. 即时数字交付. undetected — Windows PC.",
					h1: "更新",
					intro: "TarkovHack为TarkovWindows PC提供ESP wallhack、radar hack和tarkov aimbotundetected套餐。更新.",
					imageAlt: "TarkovHack live status after BattlEye and game patches",
					galleryTitle: "更新",
					heroImage: "/images/tarkov-cheats-esp.webp",
					ctaPrimary: "购买 TarkovHack",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/tarkov-cheats/",
					sections: [
						{
							h2: "更新",
							paragraphs: [
								"TarkovHack为TarkovWindows PC提供ESP wallhack、radar hack和tarkov aimbotundetected套餐。BattlEye patch status and rebuild notes.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye anti-cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye anti-cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye anti-cheat维护。",
								"支持与法务：support@tarkovhack.com",
							],
						},
					],
				},
				faq: {
					title: "常见问题 | Common Answers",
					description: "常见问题: ESP, soft aim, delivery, and BattlEye questions. 即时数字交付. undetected — Windows PC.",
					h1: "常见问题",
					intro: "TarkovHack为TarkovWindows PC提供ESP wallhack、radar hack和tarkov aimbotundetected套餐。常见问题.",
					imageAlt: "TarkovHack FAQ — delivery, setup, and update answers",
					galleryTitle: "常见问题",
					heroImage: "/images/tarkov-cheats-aimbot-view.webp",
					ctaPrimary: "购买 TarkovHack",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "常见问题",
							paragraphs: [
								"TarkovHack为TarkovWindows PC提供ESP wallhack、radar hack和tarkov aimbotundetected套餐。ESP, soft aim, delivery, and BattlEye questions.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye anti-cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye anti-cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye anti-cheat维护。",
								"支持与法务：support@tarkovhack.com",
							],
						},
					],
				},
				support: {
					title: "支持 | Help & Contact",
					description: "支持: order help and license support contact. 即时数字交付. undetected — Windows PC.",
					h1: "支持",
					intro: "TarkovHack为TarkovWindows PC提供ESP wallhack、radar hack和tarkov aimbotundetected套餐。支持.",
					imageAlt: "TarkovHack support page for license and setup help",
					galleryTitle: "支持",
					heroImage: "/images/tarkov-cheats-raid.webp",
					ctaPrimary: "购买 TarkovHack",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "支持",
							paragraphs: [
								"TarkovHack为TarkovWindows PC提供ESP wallhack、radar hack和tarkov aimbotundetected套餐。order help and license support contact.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye anti-cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye anti-cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye anti-cheat维护。",
								"支持与法务：support@tarkovhack.com",
							],
						},
					],
				},
				undetected: {
					title: "Undetected作弊 | BattlEye Safe Status",
					description: "Undetected作弊: undetected maintenance after BattlEye anti-cheat patches. 即时数字交付. undetected — Windows PC.",
					h1: "Undetected作弊",
					intro: "TarkovHack为TarkovWindows PC提供ESP wallhack、radar hack和tarkov aimbotundetected套餐。Undetected作弊.",
					imageAlt: "TarkovHack undetected status overview for Windows PC",
					galleryTitle: "Undetected作弊",
					heroImage: "/images/tarkov-cheats-wallhack.webp",
					ctaPrimary: "购买 TarkovHack",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/tarkov-cheats/",
					sections: [
						{
							h2: "Undetected作弊",
							paragraphs: [
								"TarkovHack为TarkovWindows PC提供ESP wallhack、radar hack和tarkov aimbotundetected套餐。undetected maintenance after BattlEye anti-cheat patches.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye anti-cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye anti-cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye anti-cheat维护。",
								"支持与法务：support@tarkovhack.com",
							],
						},
					],
				},
				wallhack: {
					title: "Tarkov Wallhack | ESP Visibility",
					description: "Tarkov Wallhack: wallhack ESP for players, loot, and distance. 即时数字交付. undetected — Windows PC.",
					h1: "Tarkov Wallhack",
					intro: "TarkovHack为TarkovWindows PC提供ESP wallhack、radar hack和tarkov aimbotundetected套餐。Tarkov Wallhack.",
					imageAlt: "Tarkov wallhack visibility through walls in a raid",
					galleryTitle: "Tarkov Wallhack",
					heroImage: "/images/tarkov-cheats-wallhack.webp",
					ctaPrimary: "购买 TarkovHack",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/tarkov-esp/",
					sections: [
						{
							h2: "Tarkov Wallhack",
							paragraphs: [
								"TarkovHack为TarkovWindows PC提供ESP wallhack、radar hack和tarkov aimbotundetected套餐。wallhack ESP for players, loot, and distance.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye anti-cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye anti-cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye anti-cheat维护。",
								"支持与法务：support@tarkovhack.com",
							],
						},
					],
				},
				radar: {
					title: "Radar Hack | 2D Threat Overlay",
					description: "Radar Hack: 2D radar cues for flanks and rotations. 即时数字交付. undetected — Windows PC.",
					h1: "Radar Hack",
					intro: "TarkovHack为TarkovWindows PC提供ESP wallhack、radar hack和tarkov aimbotundetected套餐。Radar Hack.",
					imageAlt: "Tarkov 2D radar overlay showing nearby threats",
					galleryTitle: "Radar Hack",
					heroImage: "/images/tarkov-cheats-radar.webp",
					ctaPrimary: "购买 TarkovHack",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/tarkov-esp/",
					sections: [
						{
							h2: "Radar Hack",
							paragraphs: [
								"TarkovHack为TarkovWindows PC提供ESP wallhack、radar hack和tarkov aimbotundetected套餐。2D radar cues for flanks and rotations.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye anti-cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye anti-cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye anti-cheat维护。",
								"支持与法务：support@tarkovhack.com",
							],
						},
					],
				},
				battleye: {
					title: "BattlEye Bypass | Patch Maintenance",
					description: "BattlEye Bypass: how BattlEye updates are handled for Escape from Tarkov hacks. 即时数字交付. undetected — Windows PC.",
					h1: "BattlEye Bypass",
					intro: "TarkovHack为TarkovWindows PC提供ESP wallhack、radar hack和tarkov aimbotundetected套餐。BattlEye Bypass.",
					imageAlt: "TarkovHack maintenance after a BattlEye patch",
					galleryTitle: "BattlEye Bypass",
					heroImage: "/images/tarkov-cheats-aimbot.webp",
					ctaPrimary: "购买 TarkovHack",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "BattlEye Bypass",
							paragraphs: [
								"TarkovHack为TarkovWindows PC提供ESP wallhack、radar hack和tarkov aimbotundetected套餐。how BattlEye updates are handled for Escape from Tarkov hacks.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye anti-cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye anti-cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye anti-cheat维护。",
								"支持与法务：support@tarkovhack.com",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Tarkov作弊 2026 | Buyer Guide",
					description: "Tarkov作弊 2026: 2026 TarkovHack checklist before checkout. 即时数字交付. undetected — Windows PC.",
					h1: "Tarkov作弊 2026",
					intro: "TarkovHack为TarkovWindows PC提供ESP wallhack、radar hack和tarkov aimbotundetected套餐。Tarkov作弊 2026.",
					imageAlt: "TarkovHack product overview for Escape from Tarkov",
					galleryTitle: "Tarkov作弊 2026",
					heroImage: "/images/tarkov-cheats-esp.webp",
					ctaPrimary: "购买 TarkovHack",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/tarkov-cheats/",
					sections: [
						{
							h2: "Tarkov作弊 2026",
							paragraphs: [
								"TarkovHack为TarkovWindows PC提供ESP wallhack、radar hack和tarkov aimbotundetected套餐。2026 TarkovHack checklist before checkout.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye anti-cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye anti-cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye anti-cheat维护。",
								"支持与法务：support@tarkovhack.com",
							],
						},
					],
				},
				hacks: {
					title: "Tarkov作弊 | ESP Aimbot Guide",
					description: "Tarkov作弊: the Escape from Tarkov hacks pillar for ESP and Aimbot. 即时数字交付. undetected — Windows PC.",
					h1: "Tarkov作弊",
					intro: "TarkovHack为TarkovWindows PC提供ESP wallhack、radar hack和tarkov aimbotundetected套餐。Tarkov作弊.",
					imageAlt: "TarkovHack product page — ESP, aimbot, and radar",
					galleryTitle: "Tarkov作弊",
					heroImage: "/images/tarkov-cheats-raid.webp",
					ctaPrimary: "购买 TarkovHack",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Tarkov作弊",
							paragraphs: [
								"TarkovHack为TarkovWindows PC提供ESP wallhack、radar hack和tarkov aimbotundetected套餐。the Escape from Tarkov hacks pillar for ESP and Aimbot.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye anti-cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye anti-cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye anti-cheat维护。",
								"支持与法务：support@tarkovhack.com",
							],
						},
					],
				},
				"cheat-download": {
					title: "Tarkov作弊下载 | Instant Access",
					description: "Tarkov作弊下载: digital license download after payment. 即时数字交付. undetected — Windows PC.",
					h1: "Tarkov作弊下载",
					intro: "TarkovHack为TarkovWindows PC提供ESP wallhack、radar hack和tarkov aimbotundetected套餐。Tarkov作弊下载.",
					imageAlt: "TarkovHack download and install delivery flow",
					galleryTitle: "Tarkov作弊下载",
					heroImage: "/images/tarkov-cheats-raid.webp",
					ctaPrimary: "购买 TarkovHack",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Tarkov作弊下载",
							paragraphs: [
								"TarkovHack为TarkovWindows PC提供ESP wallhack、radar hack和tarkov aimbotundetected套餐。digital license download after payment.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye anti-cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye anti-cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye anti-cheat维护。",
								"支持与法务：support@tarkovhack.com",
							],
						},
					],
				},
				"mod-menu": {
					title: "Tarkov修改菜单 | In-Game Toggles",
					description: "Tarkov修改菜单: in-client ESP and soft aim toggles. 即时数字交付. undetected — Windows PC.",
					h1: "Tarkov修改菜单",
					intro: "TarkovHack为TarkovWindows PC提供ESP wallhack、radar hack和tarkov aimbotundetected套餐。Tarkov修改菜单.",
					imageAlt: "TarkovHack in-game menu controls",
					galleryTitle: "Tarkov修改菜单",
					heroImage: "/images/tarkov-cheats-radar.webp",
					ctaPrimary: "购买 TarkovHack",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Tarkov修改菜单",
							paragraphs: [
								"TarkovHack为TarkovWindows PC提供ESP wallhack、radar hack和tarkov aimbotundetected套餐。in-client ESP and soft aim toggles.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye anti-cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye anti-cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye anti-cheat维护。",
								"支持与法务：support@tarkovhack.com",
							],
						},
					],
				},
				"soft-aim": {
					title: "Tarkov Soft Aim | Smooth Aim Settings",
					description: "Tarkov Soft Aim: smooth soft aim settings for Windows PC. 即时数字交付. undetected — Windows PC.",
					h1: "Tarkov Soft Aim",
					intro: "TarkovHack为TarkovWindows PC提供ESP wallhack、radar hack和tarkov aimbotundetected套餐。Tarkov Soft Aim.",
					imageAlt: "Tarkov soft aim FOV and smoothness settings",
					galleryTitle: "Tarkov Soft Aim",
					heroImage: "/images/tarkov-cheats-aimbot-view.webp",
					ctaPrimary: "购买 TarkovHack",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/tarkov-aimbot/",
					sections: [
						{
							h2: "Tarkov Soft Aim",
							paragraphs: [
								"TarkovHack为TarkovWindows PC提供ESP wallhack、radar hack和tarkov aimbotundetected套餐。smooth soft aim settings for Windows PC.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye anti-cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye anti-cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye anti-cheat维护。",
								"支持与法务：support@tarkovhack.com",
							],
						},
					],
				},
				"best-cheats": {
					title: "最佳Tarkov作弊 | Buyer Checklist",
					description: "最佳Tarkov作弊: what to compare before buying TarkovHack. 即时数字交付. undetected — Windows PC.",
					h1: "最佳Tarkov作弊",
					intro: "TarkovHack为TarkovWindows PC提供ESP wallhack、radar hack和tarkov aimbotundetected套餐。最佳Tarkov作弊.",
					imageAlt: "TarkovHack overview for Escape from Tarkov on PC",
					galleryTitle: "最佳Tarkov作弊",
					heroImage: "/images/tarkov-cheats-esp.webp",
					ctaPrimary: "购买 TarkovHack",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "最佳Tarkov作弊",
							paragraphs: [
								"TarkovHack为TarkovWindows PC提供ESP wallhack、radar hack和tarkov aimbotundetected套餐。what to compare before buying TarkovHack.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye anti-cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye anti-cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye anti-cheat维护。",
								"支持与法务：support@tarkovhack.com",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Tarkov自瞄外挂 | Soft Aim Assist",
					description: "Tarkov自瞄外挂: undetected Aimbot hack assist for Escape from Tarkov. 即时数字交付. undetected — Windows PC.",
					h1: "Tarkov自瞄外挂",
					intro: "TarkovHack为TarkovWindows PC提供ESP wallhack、radar hack和tarkov aimbotundetected套餐。Tarkov自瞄外挂.",
					imageAlt: "Tarkov aimbot hack controls and bone priority",
					galleryTitle: "Tarkov自瞄外挂",
					heroImage: "/images/tarkov-cheats-aimbot-view.webp",
					ctaPrimary: "购买 TarkovHack",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/tarkov-aimbot/",
					sections: [
						{
							h2: "Tarkov自瞄外挂",
							paragraphs: [
								"TarkovHack为TarkovWindows PC提供ESP wallhack、radar hack和tarkov aimbotundetected套餐。undetected Aimbot hack assist for Escape from Tarkov.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye anti-cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye anti-cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye anti-cheat维护。",
								"支持与法务：support@tarkovhack.com",
							],
						},
					],
				},
				"esp-hack": {
					title: "Tarkov ESP外挂 | Boxes & Loot",
					description: "Tarkov ESP外挂: ESP hack boxes, loot pins, and distance. 即时数字交付. undetected — Windows PC.",
					h1: "Tarkov ESP外挂",
					intro: "TarkovHack为TarkovWindows PC提供ESP wallhack、radar hack和tarkov aimbotundetected套餐。Tarkov ESP外挂.",
					imageAlt: "Tarkov ESP hack boxes and loot markers",
					galleryTitle: "Tarkov ESP外挂",
					heroImage: "/images/tarkov-cheats-wallhack.webp",
					ctaPrimary: "购买 TarkovHack",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/tarkov-esp/",
					sections: [
						{
							h2: "Tarkov ESP外挂",
							paragraphs: [
								"TarkovHack为TarkovWindows PC提供ESP wallhack、radar hack和tarkov aimbotundetected套餐。ESP hack boxes, loot pins, and distance.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye anti-cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye anti-cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye anti-cheat维护。",
								"支持与法务：support@tarkovhack.com",
							],
						},
					],
				},
				"unlock-all": {
					title: "Tarkov Unlock All | What It Means",
					description: "Tarkov Unlock All: unlock-all searches vs real ESP and Aimbot tools. 即时数字交付. undetected — Windows PC.",
					h1: "Tarkov Unlock All",
					intro: "TarkovHack为TarkovWindows PC提供ESP wallhack、radar hack和tarkov aimbotundetected套餐。Tarkov Unlock All.",
					imageAlt: "TarkovHack license features overview",
					galleryTitle: "Tarkov Unlock All",
					heroImage: "/images/tarkov-cheats-radar.webp",
					ctaPrimary: "购买 TarkovHack",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Tarkov Unlock All",
							paragraphs: [
								"TarkovHack为TarkovWindows PC提供ESP wallhack、radar hack和tarkov aimbotundetected套餐。unlock-all searches vs real ESP and Aimbot tools.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye anti-cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye anti-cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye anti-cheat维护。",
								"支持与法务：support@tarkovhack.com",
							],
						},
					],
				},
				privacy: {
					title: "隐私政策 | TarkovHack",
					description: "隐私政策 for TarkovHack — ESP wallhack, Aimbot, Windows PC.",
					h1: "隐私政策",
					intro: "TarkovHack为TarkovWindows PC提供ESP wallhack、radar hack和tarkov aimbotundetected套餐。隐私政策 for tarkovhack.com and Escape from Tarkov licenses.",
					imageAlt: "TarkovHack",
					galleryTitle: "TarkovHack",
					heroImage: "/images/tarkov-cheats-aimbot.webp",
					ctaPrimary: "邮件支持",
					ctaSecondary: "Read terms",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we collect",
							paragraphs: [
								"TarkovHack为TarkovWindows PC提供ESP wallhack、radar hack和tarkov aimbotundetected套餐。Contact email, Zadeyo order references, and basic site security data.",
								"Payment details are processed by Zadeyo checkout — not stored on tarkovhack.com.",
							],
						},
						{
							h2: "How we use data",
							paragraphs: [
								"TarkovHack为TarkovWindows PC提供ESP wallhack、radar hack和tarkov aimbotundetected套餐。Support responses, order resolution, and legal compliance when required.",
								"BattlEye anti-cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
							],
						},
						{
							h2: "Your rights",
							paragraphs: [
								"支持与法务：support@tarkovhack.com",
								"Email: support@tarkovhack.com",
							],
						},
					],
				},
				refund: {
					title: "退款政策 | TarkovHack",
					description: "退款政策 for TarkovHack — ESP wallhack, Aimbot, Windows PC.",
					h1: "退款政策",
					intro: "TarkovHack为TarkovWindows PC提供ESP wallhack、radar hack和tarkov aimbotundetected套餐。退款政策 for tarkovhack.com and Escape from Tarkov licenses.",
					imageAlt: "TarkovHack",
					galleryTitle: "TarkovHack",
					heroImage: "/images/tarkov-cheats-raid.webp",
					ctaPrimary: "邮件支持",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digital delivery",
							paragraphs: [
								"TarkovHack为TarkovWindows PC提供ESP wallhack、radar hack和tarkov aimbotundetected套餐。Contact email, Zadeyo order references, and basic site security data.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye anti-cheat维护。",
							],
						},
						{
							h2: "Refund approval",
							paragraphs: [
								"TarkovHack为TarkovWindows PC提供ESP wallhack、radar hack和tarkov aimbotundetected套餐。Support responses, order resolution, and legal compliance when required.",
								"BattlEye anti-cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
							],
						},
						{
							h2: "How to request",
							paragraphs: [
								"支持与法务：support@tarkovhack.com",
								"Email: support@tarkovhack.com",
							],
						},
					],
				},
				terms: {
					title: "使用条款 | TarkovHack",
					description: "使用条款 for TarkovHack — ESP wallhack, Aimbot, Windows PC.",
					h1: "使用条款",
					intro: "TarkovHack为TarkovWindows PC提供ESP wallhack、radar hack和tarkov aimbotundetected套餐。使用条款 for tarkovhack.com and Escape from Tarkov licenses.",
					imageAlt: "TarkovHack",
					galleryTitle: "TarkovHack",
					heroImage: "/images/tarkov-cheats-aimbot-view.webp",
					ctaPrimary: "邮件支持",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Acceptance of terms",
							paragraphs: [
								"TarkovHack为TarkovWindows PC提供ESP wallhack、radar hack和tarkov aimbotundetected套餐。Contact email, Zadeyo order references, and basic site security data.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含BattlEye anti-cheat维护。",
							],
						},
						{
							h2: "Risk disclaimer",
							paragraphs: [
								"TarkovHack为TarkovWindows PC提供ESP wallhack、radar hack和tarkov aimbotundetected套餐。Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "Policy changes",
							paragraphs: [
								"支持与法务：support@tarkovhack.com",
								"Email: support@tarkovhack.com",
							],
						},
					],
				},
			},
		},
		hi: {
			ui: {
				nav: {
					home: "होम",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "फ़ीचर्स",
					pricing: "कीमत",
					setup: "सेटअप",
					updates: "अपडेट",
					faq: "FAQ",
					buyNow: "अभी खरीदें",
				},
				hero: {
					accent: "Undetected TarkovHack",
					accentShort: "TarkovHack",
					subtitle: "Tarkov Windows PC के लिए ESP wallhack, radar hack और Aimbot — BattlEye maintenance शामिल।",
					subtitleShort: "Tarkov PC के लिए ESP, radar और Aimbot",
					buyNow: "अभी खरीदें",
					seeFeatures: "फ़ीचर्स देखें",
				},
				trust: {
					status: "ऑनलाइन",
					statusNote: "TarkovHack पैकेज Tarkov Windows PC के लिए सक्रिय है।",
					statusShort: "सक्रिय",
					delivery: "तुरंत डिजिटल डिलीवरी",
					platform: "Windows 10 और 11",
					antiCheat: "BattlEye maintenance समर्थित",
					antiCheatShort: "BattlEye anti-cheat समर्थित",
				},
				product: {
					title: "TarkovHack",
					addToCart: "कार्ट में जोड़ें",
					monthly: "मासिक",
					lifetime: "लाइफ़टाइम",
					available: "अभी उपलब्ध",
					gameBadge: "Tarkov",
					platformBadge: "Windows PC",
					statusBadge: "Undetected पैकेज",
				},
				reviews: {
					title: "खिलाड़ी क्या कहते हैं",
					subtitle: "TarkovHack खरीदारों की हाल की प्रतिक्रिया",
					outOf: "/5",
					countLabel: "समीक्षाएँ",
				},
				common: {
					buyNow: "अभी खरीदें",
					readGuide: "गाइड पढ़ें",
					language: "भाषा",
					officialLanguageNote: "अंग्रेज़ी आधिकारिक भाषा है। अन्य भाषाएँ वैश्विक SEO के लिए अनुवादित हैं।",
					relatedPages: "संबंधित पेज",
				},
				footer: {
					explore: "एक्सप्लोर",
					help: "सहायता और कानूनी",
					tagline: "Tarkov के लिए undetected ESP, wallhack, radar और Aimbot — Zadeyo checkout।",
				},
				images: {
					hero: "TarkovHack hero — ESP and aimbot overlay in Escape from Tarkov",
					espWallhack: "Wallhack outlines showing PMCs and Scavs through walls",
					aimbotCombat: "Soft aim assist overlay during an Escape from Tarkov raid",
					squadFight: "TarkovHack combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Tarkov raid",
					headerArt: "Aimbot view and bone priority controls for Tarkov",
					cheatsPackage: "2D radar threat overlay for Escape from Tarkov",
					rebootFight: "Aimbot assist during a Tarkov firefight",
					battleRoyale: "TarkovHack in-raid overview for Windows PC",
					battleRoyaleIsland: "ESP markers for loot and extracts in Tarkov",
				},
			},
			pages: {
				home: {
					title: "TarkovHack 2026 | ESP, Wallhack और Aimbot",
					description: "Escape from Tarkov undetected cheats. ESP wallhack, radar hack, Aimbot, BattlEye maintenance. Instant digital delivery.",
					h1: "TarkovHack — Undetected ESP, Wallhack और Aimbot",
					intro: "Escape from Tarkov Windows PC undetected पैकेज: ESP wallhack, radar, Aimbot, BattlEye maintenance सहित.",
					imageAlt: "TarkovHack hero ESP aimbot wallhack",
					galleryTitle: "TarkovHack gallery — ESP, Aimbot, wallhack",
					heroImage: "/images/tarkov-cheats-esp.webp",
					ctaPrimary: "TarkovHack खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "2026 में TarkovHack क्यों",
							paragraphs: [
								"TarkovHack Tarkov के लिए Windows PC पर ESP wallhack, radar hack और tarkov aimbot undetected पैकेज देता है। BR और scav-run में दुश्मन squad पढ़ने के लिए आदर्श.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "ESP wallhack, radar, Aimbot एक लाइसेंस में",
							paragraphs: [
								"TarkovHack Tarkov के लिए Windows PC पर ESP wallhack, radar hack और tarkov aimbot undetected पैकेज देता है। अलग टूल्स के बजाय एक लाइसेंस.",
								"BattlEye anti-cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
							],
						},
					],
				},
				"tarkov-esp": {
					title: "Tarkov ESP | Player Boxes & Wallhack",
					description: "Tarkov ESP: player boxes, loot markers, and wallhack overlays. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "Tarkov ESP",
					intro: "TarkovHack Tarkov के लिए Windows PC पर ESP wallhack, radar hack और tarkov aimbot undetected पैकेज देता है। Tarkov ESP.",
					imageAlt: "Tarkov ESP player boxes and distance readouts in a raid",
					galleryTitle: "Tarkov ESP",
					heroImage: "/images/tarkov-cheats-radar.webp",
					ctaPrimary: "TarkovHack खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/tarkov-cheats/",
					sections: [
						{
							h2: "Tarkov ESP",
							paragraphs: [
								"TarkovHack Tarkov के लिए Windows PC पर ESP wallhack, radar hack और tarkov aimbot undetected पैकेज देता है। player boxes, loot markers, and wallhack overlays.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye anti-cheat maintenance शामिल।",
								"सहायता: support@tarkovhack.com",
							],
						},
					],
				},
				"tarkov-aimbot": {
					title: "Tarkov Aimbot | Soft Aim Controls",
					description: "Tarkov Aimbot: soft aim, FOV, and per-weapon Aimbot profiles. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "Tarkov Aimbot",
					intro: "TarkovHack Tarkov के लिए Windows PC पर ESP wallhack, radar hack और tarkov aimbot undetected पैकेज देता है। Tarkov Aimbot.",
					imageAlt: "Tarkov aimbot and soft aim controls on Windows PC",
					galleryTitle: "Tarkov Aimbot",
					heroImage: "/images/tarkov-cheats-aimbot.webp",
					ctaPrimary: "TarkovHack खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/tarkov-esp/",
					sections: [
						{
							h2: "Tarkov Aimbot",
							paragraphs: [
								"TarkovHack Tarkov के लिए Windows PC पर ESP wallhack, radar hack और tarkov aimbot undetected पैकेज देता है। soft aim, FOV, and per-weapon Aimbot profiles.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye anti-cheat maintenance शामिल।",
								"सहायता: support@tarkovhack.com",
							],
						},
					],
				},
				features: {
					title: "फ़ीचर्स | Full Feature List",
					description: "फ़ीचर्स: ESP, soft aim, radar controls. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "फ़ीचर्स",
					intro: "TarkovHack Tarkov के लिए Windows PC पर ESP wallhack, radar hack और tarkov aimbot undetected पैकेज देता है। फ़ीचर्स.",
					imageAlt: "TarkovHack features — ESP, soft aim, and radar screenshots",
					galleryTitle: "फ़ीचर्स",
					heroImage: "/images/tarkov-cheats-aimbot-view.webp",
					ctaPrimary: "TarkovHack खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "फ़ीचर्स",
							paragraphs: [
								"TarkovHack Tarkov के लिए Windows PC पर ESP wallhack, radar hack और tarkov aimbot undetected पैकेज देता है। ESP, soft aim, radar controls.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye anti-cheat maintenance शामिल।",
								"सहायता: support@tarkovhack.com",
							],
						},
					],
				},
				pricing: {
					title: "कीमत | Monthly & Lifetime",
					description: "कीमत: $35 monthly or $150 lifetime licenses. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "कीमत",
					intro: "TarkovHack Tarkov के लिए Windows PC पर ESP wallhack, radar hack और tarkov aimbot undetected पैकेज देता है। कीमत.",
					imageAlt: "TarkovHack store plans for monthly and lifetime licenses",
					galleryTitle: "कीमत",
					heroImage: "/images/tarkov-cheats-raid.webp",
					ctaPrimary: "TarkovHack खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "कीमत",
							paragraphs: [
								"TarkovHack Tarkov के लिए Windows PC पर ESP wallhack, radar hack और tarkov aimbot undetected पैकेज देता है। $35 monthly or $150 lifetime licenses.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye anti-cheat maintenance शामिल।",
								"सहायता: support@tarkovhack.com",
							],
						},
					],
				},
				setup: {
					title: "सेटअप | PC Setup Guide",
					description: "सेटअप: Windows PC activation and first-launch setup. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "सेटअप",
					intro: "TarkovHack Tarkov के लिए Windows PC पर ESP wallhack, radar hack और tarkov aimbot undetected पैकेज देता है। सेटअप.",
					imageAlt: "TarkovHack setup guide screenshot for Windows PC",
					galleryTitle: "सेटअप",
					heroImage: "/images/tarkov-cheats-radar.webp",
					ctaPrimary: "TarkovHack खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "सेटअप",
							paragraphs: [
								"TarkovHack Tarkov के लिए Windows PC पर ESP wallhack, radar hack और tarkov aimbot undetected पैकेज देता है। Windows PC activation and first-launch setup.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye anti-cheat maintenance शामिल।",
								"सहायता: support@tarkovhack.com",
							],
						},
					],
				},
				updates: {
					title: "अपडेट | BattlEye Maintenance Log",
					description: "अपडेट: BattlEye patch status and rebuild notes. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "अपडेट",
					intro: "TarkovHack Tarkov के लिए Windows PC पर ESP wallhack, radar hack और tarkov aimbot undetected पैकेज देता है। अपडेट.",
					imageAlt: "TarkovHack live status after BattlEye and game patches",
					galleryTitle: "अपडेट",
					heroImage: "/images/tarkov-cheats-esp.webp",
					ctaPrimary: "TarkovHack खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/tarkov-cheats/",
					sections: [
						{
							h2: "अपडेट",
							paragraphs: [
								"TarkovHack Tarkov के लिए Windows PC पर ESP wallhack, radar hack और tarkov aimbot undetected पैकेज देता है। BattlEye patch status and rebuild notes.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye anti-cheat maintenance शामिल।",
								"सहायता: support@tarkovhack.com",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Common Answers",
					description: "FAQ: ESP, soft aim, delivery, and BattlEye questions. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "FAQ",
					intro: "TarkovHack Tarkov के लिए Windows PC पर ESP wallhack, radar hack और tarkov aimbot undetected पैकेज देता है। FAQ.",
					imageAlt: "TarkovHack FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/tarkov-cheats-aimbot-view.webp",
					ctaPrimary: "TarkovHack खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"TarkovHack Tarkov के लिए Windows PC पर ESP wallhack, radar hack और tarkov aimbot undetected पैकेज देता है। ESP, soft aim, delivery, and BattlEye questions.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye anti-cheat maintenance शामिल।",
								"सहायता: support@tarkovhack.com",
							],
						},
					],
				},
				support: {
					title: "सहायता | Help & Contact",
					description: "सहायता: order help and license support contact. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "सहायता",
					intro: "TarkovHack Tarkov के लिए Windows PC पर ESP wallhack, radar hack और tarkov aimbot undetected पैकेज देता है। सहायता.",
					imageAlt: "TarkovHack support page for license and setup help",
					galleryTitle: "सहायता",
					heroImage: "/images/tarkov-cheats-raid.webp",
					ctaPrimary: "TarkovHack खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "सहायता",
							paragraphs: [
								"TarkovHack Tarkov के लिए Windows PC पर ESP wallhack, radar hack और tarkov aimbot undetected पैकेज देता है। order help and license support contact.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye anti-cheat maintenance शामिल।",
								"सहायता: support@tarkovhack.com",
							],
						},
					],
				},
				undetected: {
					title: "Undetected cheats | BattlEye Safe Status",
					description: "Undetected cheats: undetected maintenance after BattlEye anti-cheat patches. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "Undetected cheats",
					intro: "TarkovHack Tarkov के लिए Windows PC पर ESP wallhack, radar hack और tarkov aimbot undetected पैकेज देता है। Undetected cheats.",
					imageAlt: "TarkovHack undetected status overview for Windows PC",
					galleryTitle: "Undetected cheats",
					heroImage: "/images/tarkov-cheats-wallhack.webp",
					ctaPrimary: "TarkovHack खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/tarkov-cheats/",
					sections: [
						{
							h2: "Undetected cheats",
							paragraphs: [
								"TarkovHack Tarkov के लिए Windows PC पर ESP wallhack, radar hack और tarkov aimbot undetected पैकेज देता है। undetected maintenance after BattlEye anti-cheat patches.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye anti-cheat maintenance शामिल।",
								"सहायता: support@tarkovhack.com",
							],
						},
					],
				},
				wallhack: {
					title: "Tarkov Wallhack | ESP Visibility",
					description: "Tarkov Wallhack: wallhack ESP for players, loot, and distance. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "Tarkov Wallhack",
					intro: "TarkovHack Tarkov के लिए Windows PC पर ESP wallhack, radar hack और tarkov aimbot undetected पैकेज देता है। Tarkov Wallhack.",
					imageAlt: "Tarkov wallhack visibility through walls in a raid",
					galleryTitle: "Tarkov Wallhack",
					heroImage: "/images/tarkov-cheats-wallhack.webp",
					ctaPrimary: "TarkovHack खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/tarkov-esp/",
					sections: [
						{
							h2: "Tarkov Wallhack",
							paragraphs: [
								"TarkovHack Tarkov के लिए Windows PC पर ESP wallhack, radar hack और tarkov aimbot undetected पैकेज देता है। wallhack ESP for players, loot, and distance.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye anti-cheat maintenance शामिल।",
								"सहायता: support@tarkovhack.com",
							],
						},
					],
				},
				radar: {
					title: "Radar Hack | 2D Threat Overlay",
					description: "Radar Hack: 2D radar cues for flanks and rotations. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "Radar Hack",
					intro: "TarkovHack Tarkov के लिए Windows PC पर ESP wallhack, radar hack और tarkov aimbot undetected पैकेज देता है। Radar Hack.",
					imageAlt: "Tarkov 2D radar overlay showing nearby threats",
					galleryTitle: "Radar Hack",
					heroImage: "/images/tarkov-cheats-radar.webp",
					ctaPrimary: "TarkovHack खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/tarkov-esp/",
					sections: [
						{
							h2: "Radar Hack",
							paragraphs: [
								"TarkovHack Tarkov के लिए Windows PC पर ESP wallhack, radar hack और tarkov aimbot undetected पैकेज देता है। 2D radar cues for flanks and rotations.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye anti-cheat maintenance शामिल।",
								"सहायता: support@tarkovhack.com",
							],
						},
					],
				},
				battleye: {
					title: "BattlEye Bypass | Patch Maintenance",
					description: "BattlEye Bypass: how BattlEye updates are handled for Escape from Tarkov hacks. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "BattlEye Bypass",
					intro: "TarkovHack Tarkov के लिए Windows PC पर ESP wallhack, radar hack और tarkov aimbot undetected पैकेज देता है। BattlEye Bypass.",
					imageAlt: "TarkovHack maintenance after a BattlEye patch",
					galleryTitle: "BattlEye Bypass",
					heroImage: "/images/tarkov-cheats-aimbot.webp",
					ctaPrimary: "TarkovHack खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "BattlEye Bypass",
							paragraphs: [
								"TarkovHack Tarkov के लिए Windows PC पर ESP wallhack, radar hack और tarkov aimbot undetected पैकेज देता है। how BattlEye updates are handled for Escape from Tarkov hacks.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye anti-cheat maintenance शामिल।",
								"सहायता: support@tarkovhack.com",
							],
						},
					],
				},
				"cheats-2026": {
					title: "TarkovHack 2026 | Buyer Guide",
					description: "TarkovHack 2026: 2026 TarkovHack checklist before checkout. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "TarkovHack 2026",
					intro: "TarkovHack Tarkov के लिए Windows PC पर ESP wallhack, radar hack और tarkov aimbot undetected पैकेज देता है। TarkovHack 2026.",
					imageAlt: "TarkovHack product overview for Escape from Tarkov",
					galleryTitle: "TarkovHack 2026",
					heroImage: "/images/tarkov-cheats-esp.webp",
					ctaPrimary: "TarkovHack खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/tarkov-cheats/",
					sections: [
						{
							h2: "TarkovHack 2026",
							paragraphs: [
								"TarkovHack Tarkov के लिए Windows PC पर ESP wallhack, radar hack और tarkov aimbot undetected पैकेज देता है। 2026 TarkovHack checklist before checkout.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye anti-cheat maintenance शामिल।",
								"सहायता: support@tarkovhack.com",
							],
						},
					],
				},
				hacks: {
					title: "TarkovHack | ESP Aimbot Guide",
					description: "TarkovHack: the Escape from Tarkov hacks pillar for ESP and Aimbot. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "TarkovHack",
					intro: "TarkovHack Tarkov के लिए Windows PC पर ESP wallhack, radar hack और tarkov aimbot undetected पैकेज देता है। TarkovHack.",
					imageAlt: "TarkovHack product page — ESP, aimbot, and radar",
					galleryTitle: "TarkovHack",
					heroImage: "/images/tarkov-cheats-raid.webp",
					ctaPrimary: "TarkovHack खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "TarkovHack",
							paragraphs: [
								"TarkovHack Tarkov के लिए Windows PC पर ESP wallhack, radar hack और tarkov aimbot undetected पैकेज देता है। the Escape from Tarkov hacks pillar for ESP and Aimbot.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye anti-cheat maintenance शामिल।",
								"सहायता: support@tarkovhack.com",
							],
						},
					],
				},
				"cheat-download": {
					title: "Tarkov Cheat Download | Instant Access",
					description: "Tarkov Cheat Download: digital license download after payment. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "Tarkov Cheat Download",
					intro: "TarkovHack Tarkov के लिए Windows PC पर ESP wallhack, radar hack और tarkov aimbot undetected पैकेज देता है। Tarkov Cheat Download.",
					imageAlt: "TarkovHack download and install delivery flow",
					galleryTitle: "Tarkov Cheat Download",
					heroImage: "/images/tarkov-cheats-raid.webp",
					ctaPrimary: "TarkovHack खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Tarkov Cheat Download",
							paragraphs: [
								"TarkovHack Tarkov के लिए Windows PC पर ESP wallhack, radar hack और tarkov aimbot undetected पैकेज देता है। digital license download after payment.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye anti-cheat maintenance शामिल।",
								"सहायता: support@tarkovhack.com",
							],
						},
					],
				},
				"mod-menu": {
					title: "Tarkov Mod Menu | In-Game Toggles",
					description: "Tarkov Mod Menu: in-client ESP and soft aim toggles. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "Tarkov Mod Menu",
					intro: "TarkovHack Tarkov के लिए Windows PC पर ESP wallhack, radar hack और tarkov aimbot undetected पैकेज देता है। Tarkov Mod Menu.",
					imageAlt: "TarkovHack in-game menu controls",
					galleryTitle: "Tarkov Mod Menu",
					heroImage: "/images/tarkov-cheats-radar.webp",
					ctaPrimary: "TarkovHack खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Tarkov Mod Menu",
							paragraphs: [
								"TarkovHack Tarkov के लिए Windows PC पर ESP wallhack, radar hack और tarkov aimbot undetected पैकेज देता है। in-client ESP and soft aim toggles.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye anti-cheat maintenance शामिल।",
								"सहायता: support@tarkovhack.com",
							],
						},
					],
				},
				"soft-aim": {
					title: "Tarkov Soft Aim | Smooth Aim Settings",
					description: "Tarkov Soft Aim: smooth soft aim settings for Windows PC. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "Tarkov Soft Aim",
					intro: "TarkovHack Tarkov के लिए Windows PC पर ESP wallhack, radar hack और tarkov aimbot undetected पैकेज देता है। Tarkov Soft Aim.",
					imageAlt: "Tarkov soft aim FOV and smoothness settings",
					galleryTitle: "Tarkov Soft Aim",
					heroImage: "/images/tarkov-cheats-aimbot-view.webp",
					ctaPrimary: "TarkovHack खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/tarkov-aimbot/",
					sections: [
						{
							h2: "Tarkov Soft Aim",
							paragraphs: [
								"TarkovHack Tarkov के लिए Windows PC पर ESP wallhack, radar hack और tarkov aimbot undetected पैकेज देता है। smooth soft aim settings for Windows PC.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye anti-cheat maintenance शामिल।",
								"सहायता: support@tarkovhack.com",
							],
						},
					],
				},
				"best-cheats": {
					title: "सर्वश्रेष्ठ TarkovHack | Buyer Checklist",
					description: "सर्वश्रेष्ठ TarkovHack: what to compare before buying TarkovHack. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "सर्वश्रेष्ठ TarkovHack",
					intro: "TarkovHack Tarkov के लिए Windows PC पर ESP wallhack, radar hack और tarkov aimbot undetected पैकेज देता है। सर्वश्रेष्ठ TarkovHack.",
					imageAlt: "TarkovHack overview for Escape from Tarkov on PC",
					galleryTitle: "सर्वश्रेष्ठ TarkovHack",
					heroImage: "/images/tarkov-cheats-esp.webp",
					ctaPrimary: "TarkovHack खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "सर्वश्रेष्ठ TarkovHack",
							paragraphs: [
								"TarkovHack Tarkov के लिए Windows PC पर ESP wallhack, radar hack और tarkov aimbot undetected पैकेज देता है। what to compare before buying TarkovHack.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye anti-cheat maintenance शामिल।",
								"सहायता: support@tarkovhack.com",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Tarkov Aimbot Hack | Soft Aim Assist",
					description: "Tarkov Aimbot Hack: undetected Aimbot hack assist for Escape from Tarkov. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "Tarkov Aimbot Hack",
					intro: "TarkovHack Tarkov के लिए Windows PC पर ESP wallhack, radar hack और tarkov aimbot undetected पैकेज देता है। Tarkov Aimbot Hack.",
					imageAlt: "Tarkov aimbot hack controls and bone priority",
					galleryTitle: "Tarkov Aimbot Hack",
					heroImage: "/images/tarkov-cheats-aimbot-view.webp",
					ctaPrimary: "TarkovHack खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/tarkov-aimbot/",
					sections: [
						{
							h2: "Tarkov Aimbot Hack",
							paragraphs: [
								"TarkovHack Tarkov के लिए Windows PC पर ESP wallhack, radar hack और tarkov aimbot undetected पैकेज देता है। undetected Aimbot hack assist for Escape from Tarkov.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye anti-cheat maintenance शामिल।",
								"सहायता: support@tarkovhack.com",
							],
						},
					],
				},
				"esp-hack": {
					title: "Tarkov ESP Hack | Boxes & Loot",
					description: "Tarkov ESP Hack: ESP hack boxes, loot pins, and distance. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "Tarkov ESP Hack",
					intro: "TarkovHack Tarkov के लिए Windows PC पर ESP wallhack, radar hack और tarkov aimbot undetected पैकेज देता है। Tarkov ESP Hack.",
					imageAlt: "Tarkov ESP hack boxes and loot markers",
					galleryTitle: "Tarkov ESP Hack",
					heroImage: "/images/tarkov-cheats-wallhack.webp",
					ctaPrimary: "TarkovHack खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/tarkov-esp/",
					sections: [
						{
							h2: "Tarkov ESP Hack",
							paragraphs: [
								"TarkovHack Tarkov के लिए Windows PC पर ESP wallhack, radar hack और tarkov aimbot undetected पैकेज देता है। ESP hack boxes, loot pins, and distance.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye anti-cheat maintenance शामिल।",
								"सहायता: support@tarkovhack.com",
							],
						},
					],
				},
				"unlock-all": {
					title: "Tarkov Unlock All | What It Means",
					description: "Tarkov Unlock All: unlock-all searches vs real ESP and Aimbot tools. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "Tarkov Unlock All",
					intro: "TarkovHack Tarkov के लिए Windows PC पर ESP wallhack, radar hack और tarkov aimbot undetected पैकेज देता है। Tarkov Unlock All.",
					imageAlt: "TarkovHack license features overview",
					galleryTitle: "Tarkov Unlock All",
					heroImage: "/images/tarkov-cheats-radar.webp",
					ctaPrimary: "TarkovHack खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Tarkov Unlock All",
							paragraphs: [
								"TarkovHack Tarkov के लिए Windows PC पर ESP wallhack, radar hack और tarkov aimbot undetected पैकेज देता है। unlock-all searches vs real ESP and Aimbot tools.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"BattlEye anti-cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye anti-cheat maintenance शामिल।",
								"सहायता: support@tarkovhack.com",
							],
						},
					],
				},
				privacy: {
					title: "गोपनीयता नीति | TarkovHack",
					description: "गोपनीयता नीति for TarkovHack — ESP wallhack, Aimbot, Windows PC.",
					h1: "गोपनीयता नीति",
					intro: "TarkovHack Tarkov के लिए Windows PC पर ESP wallhack, radar hack और tarkov aimbot undetected पैकेज देता है। गोपनीयता नीति for tarkovhack.com and Escape from Tarkov licenses.",
					imageAlt: "TarkovHack",
					galleryTitle: "TarkovHack",
					heroImage: "/images/tarkov-cheats-aimbot.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read terms",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we collect",
							paragraphs: [
								"TarkovHack Tarkov के लिए Windows PC पर ESP wallhack, radar hack और tarkov aimbot undetected पैकेज देता है। Contact email, Zadeyo order references, and basic site security data.",
								"Payment details are processed by Zadeyo checkout — not stored on tarkovhack.com.",
							],
						},
						{
							h2: "How we use data",
							paragraphs: [
								"TarkovHack Tarkov के लिए Windows PC पर ESP wallhack, radar hack और tarkov aimbot undetected पैकेज देता है। Support responses, order resolution, and legal compliance when required.",
								"BattlEye anti-cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
							],
						},
						{
							h2: "Your rights",
							paragraphs: [
								"सहायता: support@tarkovhack.com",
								"Email: support@tarkovhack.com",
							],
						},
					],
				},
				refund: {
					title: "रिफंड नीति | TarkovHack",
					description: "रिफंड नीति for TarkovHack — ESP wallhack, Aimbot, Windows PC.",
					h1: "रिफंड नीति",
					intro: "TarkovHack Tarkov के लिए Windows PC पर ESP wallhack, radar hack और tarkov aimbot undetected पैकेज देता है। रिफंड नीति for tarkovhack.com and Escape from Tarkov licenses.",
					imageAlt: "TarkovHack",
					galleryTitle: "TarkovHack",
					heroImage: "/images/tarkov-cheats-raid.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digital delivery",
							paragraphs: [
								"TarkovHack Tarkov के लिए Windows PC पर ESP wallhack, radar hack और tarkov aimbot undetected पैकेज देता है। Contact email, Zadeyo order references, and basic site security data.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "Refund approval",
							paragraphs: [
								"TarkovHack Tarkov के लिए Windows PC पर ESP wallhack, radar hack और tarkov aimbot undetected पैकेज देता है। Support responses, order resolution, and legal compliance when required.",
								"BattlEye anti-cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
							],
						},
						{
							h2: "How to request",
							paragraphs: [
								"सहायता: support@tarkovhack.com",
								"Email: support@tarkovhack.com",
							],
						},
					],
				},
				terms: {
					title: "उपयोग की शर्तें | TarkovHack",
					description: "उपयोग की शर्तें for TarkovHack — ESP wallhack, Aimbot, Windows PC.",
					h1: "उपयोग की शर्तें",
					intro: "TarkovHack Tarkov के लिए Windows PC पर ESP wallhack, radar hack और tarkov aimbot undetected पैकेज देता है। उपयोग की शर्तें for tarkovhack.com and Escape from Tarkov licenses.",
					imageAlt: "TarkovHack",
					galleryTitle: "TarkovHack",
					heroImage: "/images/tarkov-cheats-aimbot-view.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Acceptance of terms",
							paragraphs: [
								"TarkovHack Tarkov के लिए Windows PC पर ESP wallhack, radar hack और tarkov aimbot undetected पैकेज देता है। Contact email, Zadeyo order references, and basic site security data.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में BattlEye anti-cheat maintenance शामिल।",
							],
						},
						{
							h2: "Risk disclaimer",
							paragraphs: [
								"TarkovHack Tarkov के लिए Windows PC पर ESP wallhack, radar hack और tarkov aimbot undetected पैकेज देता है। Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "Policy changes",
							paragraphs: [
								"सहायता: support@tarkovhack.com",
								"Email: support@tarkovhack.com",
							],
						},
					],
				},
			},
		},
		id: {
			ui: {
				nav: {
					home: "Beranda",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Fitur",
					pricing: "Harga",
					setup: "Setup",
					updates: "Pembaruan",
					faq: "FAQ",
					buyNow: "Beli sekarang",
				},
				hero: {
					accent: "Cheat Tarkov undetected",
					accentShort: "TarkovHack",
					subtitle: "ESP wallhack, radar hack, dan Aimbot untuk Tarkov di PC Windows — pemeliharaan BattlEye anti-cheat termasuk.",
					subtitleShort: "ESP, radar & Aimbot untuk Tarkov PC",
					buyNow: "Beli sekarang",
					seeFeatures: "Lihat fitur",
				},
				trust: {
					status: "Online",
					statusNote: "Paket TarkovHack aktif untuk Tarkov di PC Windows.",
					statusShort: "Aktif",
					delivery: "Pengiriman digital instan",
					platform: "Windows 10 & 11",
					antiCheat: "Pemeliharaan BattlEye anti-cheat didukung",
					antiCheatShort: "BattlEye anti-cheat didukung",
				},
				product: {
					title: "TarkovHack",
					addToCart: "Tambah ke keranjang",
					monthly: "Bulanan",
					lifetime: "Seumur hidup",
					available: "Tersedia sekarang",
					gameBadge: "Tarkov",
					platformBadge: "Windows PC",
					statusBadge: "Paket undetected",
				},
				reviews: {
					title: "Apa kata pemain",
					subtitle: "Umpan balik terbaru dari pembeli TarkovHack",
					outOf: "dari 5",
					countLabel: "ulasan",
				},
				common: {
					buyNow: "Beli sekarang",
					readGuide: "Baca panduan",
					language: "Bahasa",
					officialLanguageNote: "Bahasa Inggris adalah bahasa resmi. Bahasa lain diterjemahkan untuk SEO global.",
					relatedPages: "Halaman terkait",
				},
				footer: {
					explore: "Jelajahi",
					help: "Bantuan & legal",
					tagline: "ESP, wallhack, radar, dan Aimbot undetected untuk Tarkov — checkout via Zadeyo.",
				},
				images: {
					hero: "TarkovHack hero — ESP and aimbot overlay in Escape from Tarkov",
					espWallhack: "Wallhack outlines showing PMCs and Scavs through walls",
					aimbotCombat: "Soft aim assist overlay during an Escape from Tarkov raid",
					squadFight: "TarkovHack combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Tarkov raid",
					headerArt: "Aimbot view and bone priority controls for Tarkov",
					cheatsPackage: "2D radar threat overlay for Escape from Tarkov",
					rebootFight: "Aimbot assist during a Tarkov firefight",
					battleRoyale: "TarkovHack in-raid overview for Windows PC",
					battleRoyaleIsland: "ESP markers for loot and extracts in Tarkov",
				},
			},
			pages: {
				home: {
					title: "TarkovHack 2026 | ESP, Wallhack & Aimbot",
					description: "Cheat Escape from Tarkov undetected untuk Escape from Tarkov di PC. ESP wallhack, radar hack, Aimbot, pemeliharaan BattlEye anti-cheat. Pengiriman digital",
					h1: "TarkovHack — Undetected ESP, Wallhack & Aimbot",
					intro: "Paket undetected Escape from Tarkov di Windows PC: ESP wallhack, radar, Aimbot dengan pemeliharaan BattlEye anti-cheat.",
					imageAlt: "Tarkov ESP player tags hack",
					galleryTitle: "Galeri TarkovHack — ESP, Aimbot, wallhack",
					heroImage: "/images/tarkov-cheats-esp.webp",
					ctaPrimary: "Beli TarkovHack",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Mengapa TarkovHack di 2026",
							paragraphs: [
								"TarkovHack menyediakan ESP wallhack, radar hack, dan tarkov aimbot undetected untuk Tarkov di PC Windows. Ideal membaca squad musuh di BR dan scav-run.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye anti-cheat.",
							],
						},
						{
							h2: "ESP wallhack, radar, Aimbot dalam satu lisensi",
							paragraphs: [
								"TarkovHack menyediakan ESP wallhack, radar hack, dan tarkov aimbot undetected untuk Tarkov di PC Windows. Satu lisensi alih-alih alat terpisah.",
								"Periksa Updates setelah patch BattlEye anti-cheat. Tidak ada cheat yang menjamin undetected permanen.",
							],
						},
					],
				},
				"tarkov-esp": {
					title: "ESP Tarkov | Player Boxes & Wallhack",
					description: "ESP Tarkov: player boxes, loot markers, and wallhack overlays. pengiriman digital instan. undetected — PC Windows.",
					h1: "ESP Tarkov",
					intro: "TarkovHack menyediakan ESP wallhack, radar hack, dan tarkov aimbot undetected untuk Tarkov di PC Windows. ESP Tarkov.",
					imageAlt: "Tarkov ESP player boxes and distance readouts in a raid",
					galleryTitle: "ESP Tarkov",
					heroImage: "/images/tarkov-cheats-radar.webp",
					ctaPrimary: "Beli TarkovHack",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/tarkov-cheats/",
					sections: [
						{
							h2: "ESP Tarkov",
							paragraphs: [
								"TarkovHack menyediakan ESP wallhack, radar hack, dan tarkov aimbot undetected untuk Tarkov di PC Windows. player boxes, loot markers, and wallhack overlays.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch BattlEye anti-cheat. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye anti-cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye anti-cheat.",
								"support@tarkovhack.com untuk dukungan dan legal.",
							],
						},
					],
				},
				"tarkov-aimbot": {
					title: "Aimbot Tarkov | Soft Aim Controls",
					description: "Aimbot Tarkov: soft aim, FOV, and per-weapon Aimbot profiles. pengiriman digital instan. undetected — PC Windows.",
					h1: "Aimbot Tarkov",
					intro: "TarkovHack menyediakan ESP wallhack, radar hack, dan tarkov aimbot undetected untuk Tarkov di PC Windows. Aimbot Tarkov.",
					imageAlt: "Tarkov aimbot and soft aim controls on Windows PC",
					galleryTitle: "Aimbot Tarkov",
					heroImage: "/images/tarkov-cheats-aimbot.webp",
					ctaPrimary: "Beli TarkovHack",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/tarkov-esp/",
					sections: [
						{
							h2: "Aimbot Tarkov",
							paragraphs: [
								"TarkovHack menyediakan ESP wallhack, radar hack, dan tarkov aimbot undetected untuk Tarkov di PC Windows. soft aim, FOV, and per-weapon Aimbot profiles.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch BattlEye anti-cheat. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye anti-cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye anti-cheat.",
								"support@tarkovhack.com untuk dukungan dan legal.",
							],
						},
					],
				},
				features: {
					title: "Fitur | Full Feature List",
					description: "Fitur: ESP, soft aim, radar controls. pengiriman digital instan. undetected — PC Windows.",
					h1: "Fitur",
					intro: "TarkovHack menyediakan ESP wallhack, radar hack, dan tarkov aimbot undetected untuk Tarkov di PC Windows. Fitur.",
					imageAlt: "TarkovHack features — ESP, soft aim, and radar screenshots",
					galleryTitle: "Fitur",
					heroImage: "/images/tarkov-cheats-aimbot-view.webp",
					ctaPrimary: "Beli TarkovHack",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Fitur",
							paragraphs: [
								"TarkovHack menyediakan ESP wallhack, radar hack, dan tarkov aimbot undetected untuk Tarkov di PC Windows. ESP, soft aim, radar controls.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch BattlEye anti-cheat. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye anti-cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye anti-cheat.",
								"support@tarkovhack.com untuk dukungan dan legal.",
							],
						},
					],
				},
				pricing: {
					title: "Harga | Monthly & Lifetime",
					description: "Harga: $35 monthly or $150 lifetime licenses. pengiriman digital instan. undetected — PC Windows.",
					h1: "Harga",
					intro: "TarkovHack menyediakan ESP wallhack, radar hack, dan tarkov aimbot undetected untuk Tarkov di PC Windows. Harga.",
					imageAlt: "TarkovHack store plans for monthly and lifetime licenses",
					galleryTitle: "Harga",
					heroImage: "/images/tarkov-cheats-raid.webp",
					ctaPrimary: "Beli TarkovHack",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Harga",
							paragraphs: [
								"TarkovHack menyediakan ESP wallhack, radar hack, dan tarkov aimbot undetected untuk Tarkov di PC Windows. $35 monthly or $150 lifetime licenses.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch BattlEye anti-cheat. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye anti-cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye anti-cheat.",
								"support@tarkovhack.com untuk dukungan dan legal.",
							],
						},
					],
				},
				setup: {
					title: "Setup | PC Setup Guide",
					description: "Setup: Windows PC activation and first-launch setup. pengiriman digital instan. undetected — PC Windows.",
					h1: "Setup",
					intro: "TarkovHack menyediakan ESP wallhack, radar hack, dan tarkov aimbot undetected untuk Tarkov di PC Windows. Setup.",
					imageAlt: "TarkovHack setup guide screenshot for Windows PC",
					galleryTitle: "Setup",
					heroImage: "/images/tarkov-cheats-radar.webp",
					ctaPrimary: "Beli TarkovHack",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Setup",
							paragraphs: [
								"TarkovHack menyediakan ESP wallhack, radar hack, dan tarkov aimbot undetected untuk Tarkov di PC Windows. Windows PC activation and first-launch setup.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch BattlEye anti-cheat. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye anti-cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye anti-cheat.",
								"support@tarkovhack.com untuk dukungan dan legal.",
							],
						},
					],
				},
				updates: {
					title: "Pembaruan | BattlEye Maintenance Log",
					description: "Pembaruan: BattlEye patch status and rebuild notes. pengiriman digital instan. undetected — PC Windows.",
					h1: "Pembaruan",
					intro: "TarkovHack menyediakan ESP wallhack, radar hack, dan tarkov aimbot undetected untuk Tarkov di PC Windows. Pembaruan.",
					imageAlt: "TarkovHack live status after BattlEye and game patches",
					galleryTitle: "Pembaruan",
					heroImage: "/images/tarkov-cheats-esp.webp",
					ctaPrimary: "Beli TarkovHack",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/tarkov-cheats/",
					sections: [
						{
							h2: "Pembaruan",
							paragraphs: [
								"TarkovHack menyediakan ESP wallhack, radar hack, dan tarkov aimbot undetected untuk Tarkov di PC Windows. BattlEye patch status and rebuild notes.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch BattlEye anti-cheat. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye anti-cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye anti-cheat.",
								"support@tarkovhack.com untuk dukungan dan legal.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Common Answers",
					description: "FAQ: ESP, soft aim, delivery, and BattlEye questions. pengiriman digital instan. undetected — PC Windows.",
					h1: "FAQ",
					intro: "TarkovHack menyediakan ESP wallhack, radar hack, dan tarkov aimbot undetected untuk Tarkov di PC Windows. FAQ.",
					imageAlt: "TarkovHack FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/tarkov-cheats-aimbot-view.webp",
					ctaPrimary: "Beli TarkovHack",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"TarkovHack menyediakan ESP wallhack, radar hack, dan tarkov aimbot undetected untuk Tarkov di PC Windows. ESP, soft aim, delivery, and BattlEye questions.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch BattlEye anti-cheat. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye anti-cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye anti-cheat.",
								"support@tarkovhack.com untuk dukungan dan legal.",
							],
						},
					],
				},
				support: {
					title: "Dukungan | Help & Contact",
					description: "Dukungan: order help and license support contact. pengiriman digital instan. undetected — PC Windows.",
					h1: "Dukungan",
					intro: "TarkovHack menyediakan ESP wallhack, radar hack, dan tarkov aimbot undetected untuk Tarkov di PC Windows. Dukungan.",
					imageAlt: "TarkovHack support page for license and setup help",
					galleryTitle: "Dukungan",
					heroImage: "/images/tarkov-cheats-raid.webp",
					ctaPrimary: "Beli TarkovHack",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Dukungan",
							paragraphs: [
								"TarkovHack menyediakan ESP wallhack, radar hack, dan tarkov aimbot undetected untuk Tarkov di PC Windows. order help and license support contact.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch BattlEye anti-cheat. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye anti-cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye anti-cheat.",
								"support@tarkovhack.com untuk dukungan dan legal.",
							],
						},
					],
				},
				undetected: {
					title: "Cheat undetected | BattlEye Safe Status",
					description: "Cheat undetected: undetected maintenance after BattlEye anti-cheat patches. pengiriman digital instan. undetected — PC Windows.",
					h1: "Cheat undetected",
					intro: "TarkovHack menyediakan ESP wallhack, radar hack, dan tarkov aimbot undetected untuk Tarkov di PC Windows. Cheat undetected.",
					imageAlt: "TarkovHack undetected status overview for Windows PC",
					galleryTitle: "Cheat undetected",
					heroImage: "/images/tarkov-cheats-wallhack.webp",
					ctaPrimary: "Beli TarkovHack",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/tarkov-cheats/",
					sections: [
						{
							h2: "Cheat undetected",
							paragraphs: [
								"TarkovHack menyediakan ESP wallhack, radar hack, dan tarkov aimbot undetected untuk Tarkov di PC Windows. undetected maintenance after BattlEye anti-cheat patches.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch BattlEye anti-cheat. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye anti-cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye anti-cheat.",
								"support@tarkovhack.com untuk dukungan dan legal.",
							],
						},
					],
				},
				wallhack: {
					title: "Wallhack Tarkov | ESP Visibility",
					description: "Wallhack Tarkov: wallhack ESP for players, loot, and distance. pengiriman digital instan. undetected — PC Windows.",
					h1: "Wallhack Tarkov",
					intro: "TarkovHack menyediakan ESP wallhack, radar hack, dan tarkov aimbot undetected untuk Tarkov di PC Windows. Wallhack Tarkov.",
					imageAlt: "Tarkov wallhack visibility through walls in a raid",
					galleryTitle: "Wallhack Tarkov",
					heroImage: "/images/tarkov-cheats-wallhack.webp",
					ctaPrimary: "Beli TarkovHack",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/tarkov-esp/",
					sections: [
						{
							h2: "Wallhack Tarkov",
							paragraphs: [
								"TarkovHack menyediakan ESP wallhack, radar hack, dan tarkov aimbot undetected untuk Tarkov di PC Windows. wallhack ESP for players, loot, and distance.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch BattlEye anti-cheat. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye anti-cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye anti-cheat.",
								"support@tarkovhack.com untuk dukungan dan legal.",
							],
						},
					],
				},
				radar: {
					title: "Radar hack | 2D Threat Overlay",
					description: "Radar hack: 2D radar cues for flanks and rotations. pengiriman digital instan. undetected — PC Windows.",
					h1: "Radar hack",
					intro: "TarkovHack menyediakan ESP wallhack, radar hack, dan tarkov aimbot undetected untuk Tarkov di PC Windows. Radar hack.",
					imageAlt: "Tarkov 2D radar overlay showing nearby threats",
					galleryTitle: "Radar hack",
					heroImage: "/images/tarkov-cheats-radar.webp",
					ctaPrimary: "Beli TarkovHack",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/tarkov-esp/",
					sections: [
						{
							h2: "Radar hack",
							paragraphs: [
								"TarkovHack menyediakan ESP wallhack, radar hack, dan tarkov aimbot undetected untuk Tarkov di PC Windows. 2D radar cues for flanks and rotations.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch BattlEye anti-cheat. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye anti-cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye anti-cheat.",
								"support@tarkovhack.com untuk dukungan dan legal.",
							],
						},
					],
				},
				battleye: {
					title: "Bypass BattlEye | Patch Maintenance",
					description: "Bypass BattlEye: how BattlEye updates are handled for Escape from Tarkov hacks. pengiriman digital instan. undetected — PC Windows.",
					h1: "Bypass BattlEye",
					intro: "TarkovHack menyediakan ESP wallhack, radar hack, dan tarkov aimbot undetected untuk Tarkov di PC Windows. Bypass BattlEye.",
					imageAlt: "TarkovHack maintenance after a BattlEye patch",
					galleryTitle: "Bypass BattlEye",
					heroImage: "/images/tarkov-cheats-aimbot.webp",
					ctaPrimary: "Beli TarkovHack",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Bypass BattlEye",
							paragraphs: [
								"TarkovHack menyediakan ESP wallhack, radar hack, dan tarkov aimbot undetected untuk Tarkov di PC Windows. how BattlEye updates are handled for Escape from Tarkov hacks.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch BattlEye anti-cheat. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye anti-cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye anti-cheat.",
								"support@tarkovhack.com untuk dukungan dan legal.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Cheat Tarkov 2026 | Buyer Guide",
					description: "Cheat Tarkov 2026: 2026 TarkovHack checklist before checkout. pengiriman digital instan. undetected — PC Windows.",
					h1: "Cheat Tarkov 2026",
					intro: "TarkovHack menyediakan ESP wallhack, radar hack, dan tarkov aimbot undetected untuk Tarkov di PC Windows. Cheat Tarkov 2026.",
					imageAlt: "TarkovHack product overview for Escape from Tarkov",
					galleryTitle: "Cheat Tarkov 2026",
					heroImage: "/images/tarkov-cheats-esp.webp",
					ctaPrimary: "Beli TarkovHack",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/tarkov-cheats/",
					sections: [
						{
							h2: "Cheat Tarkov 2026",
							paragraphs: [
								"TarkovHack menyediakan ESP wallhack, radar hack, dan tarkov aimbot undetected untuk Tarkov di PC Windows. 2026 TarkovHack checklist before checkout.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch BattlEye anti-cheat. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye anti-cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye anti-cheat.",
								"support@tarkovhack.com untuk dukungan dan legal.",
							],
						},
					],
				},
				hacks: {
					title: "Cheat Tarkov | ESP Aimbot Guide",
					description: "Cheat Tarkov: the Escape from Tarkov hacks pillar for ESP and Aimbot. pengiriman digital instan. undetected — PC Windows.",
					h1: "Cheat Tarkov",
					intro: "TarkovHack menyediakan ESP wallhack, radar hack, dan tarkov aimbot undetected untuk Tarkov di PC Windows. Cheat Tarkov.",
					imageAlt: "TarkovHack product page — ESP, aimbot, and radar",
					galleryTitle: "Cheat Tarkov",
					heroImage: "/images/tarkov-cheats-raid.webp",
					ctaPrimary: "Beli TarkovHack",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Cheat Tarkov",
							paragraphs: [
								"TarkovHack menyediakan ESP wallhack, radar hack, dan tarkov aimbot undetected untuk Tarkov di PC Windows. the Escape from Tarkov hacks pillar for ESP and Aimbot.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch BattlEye anti-cheat. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye anti-cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye anti-cheat.",
								"support@tarkovhack.com untuk dukungan dan legal.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Download Cheat Tarkov | Instant Access",
					description: "Download Cheat Tarkov: digital license download after payment. pengiriman digital instan. undetected — PC Windows.",
					h1: "Download Cheat Tarkov",
					intro: "TarkovHack menyediakan ESP wallhack, radar hack, dan tarkov aimbot undetected untuk Tarkov di PC Windows. Download Cheat Tarkov.",
					imageAlt: "TarkovHack download and install delivery flow",
					galleryTitle: "Download Cheat Tarkov",
					heroImage: "/images/tarkov-cheats-raid.webp",
					ctaPrimary: "Beli TarkovHack",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Download Cheat Tarkov",
							paragraphs: [
								"TarkovHack menyediakan ESP wallhack, radar hack, dan tarkov aimbot undetected untuk Tarkov di PC Windows. digital license download after payment.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch BattlEye anti-cheat. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye anti-cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye anti-cheat.",
								"support@tarkovhack.com untuk dukungan dan legal.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Menu mod Tarkov | In-Game Toggles",
					description: "Menu mod Tarkov: in-client ESP and soft aim toggles. pengiriman digital instan. undetected — PC Windows.",
					h1: "Menu mod Tarkov",
					intro: "TarkovHack menyediakan ESP wallhack, radar hack, dan tarkov aimbot undetected untuk Tarkov di PC Windows. Menu mod Tarkov.",
					imageAlt: "TarkovHack in-game menu controls",
					galleryTitle: "Menu mod Tarkov",
					heroImage: "/images/tarkov-cheats-radar.webp",
					ctaPrimary: "Beli TarkovHack",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Menu mod Tarkov",
							paragraphs: [
								"TarkovHack menyediakan ESP wallhack, radar hack, dan tarkov aimbot undetected untuk Tarkov di PC Windows. in-client ESP and soft aim toggles.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch BattlEye anti-cheat. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye anti-cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye anti-cheat.",
								"support@tarkovhack.com untuk dukungan dan legal.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Soft aim Tarkov | Smooth Aim Settings",
					description: "Soft aim Tarkov: smooth soft aim settings for Windows PC. pengiriman digital instan. undetected — PC Windows.",
					h1: "Soft aim Tarkov",
					intro: "TarkovHack menyediakan ESP wallhack, radar hack, dan tarkov aimbot undetected untuk Tarkov di PC Windows. Soft aim Tarkov.",
					imageAlt: "Tarkov soft aim FOV and smoothness settings",
					galleryTitle: "Soft aim Tarkov",
					heroImage: "/images/tarkov-cheats-aimbot-view.webp",
					ctaPrimary: "Beli TarkovHack",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/tarkov-aimbot/",
					sections: [
						{
							h2: "Soft aim Tarkov",
							paragraphs: [
								"TarkovHack menyediakan ESP wallhack, radar hack, dan tarkov aimbot undetected untuk Tarkov di PC Windows. smooth soft aim settings for Windows PC.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch BattlEye anti-cheat. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye anti-cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye anti-cheat.",
								"support@tarkovhack.com untuk dukungan dan legal.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Cheat Tarkov terbaik | Buyer Checklist",
					description: "Cheat Tarkov terbaik: what to compare before buying TarkovHack. pengiriman digital instan. undetected — PC Windows.",
					h1: "Cheat Tarkov terbaik",
					intro: "TarkovHack menyediakan ESP wallhack, radar hack, dan tarkov aimbot undetected untuk Tarkov di PC Windows. Cheat Tarkov terbaik.",
					imageAlt: "TarkovHack overview for Escape from Tarkov on PC",
					galleryTitle: "Cheat Tarkov terbaik",
					heroImage: "/images/tarkov-cheats-esp.webp",
					ctaPrimary: "Beli TarkovHack",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Cheat Tarkov terbaik",
							paragraphs: [
								"TarkovHack menyediakan ESP wallhack, radar hack, dan tarkov aimbot undetected untuk Tarkov di PC Windows. what to compare before buying TarkovHack.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch BattlEye anti-cheat. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye anti-cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye anti-cheat.",
								"support@tarkovhack.com untuk dukungan dan legal.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Hack aimbot Tarkov | Soft Aim Assist",
					description: "Hack aimbot Tarkov: undetected Aimbot hack assist for Escape from Tarkov. pengiriman digital instan. undetected — PC Windows.",
					h1: "Hack aimbot Tarkov",
					intro: "TarkovHack menyediakan ESP wallhack, radar hack, dan tarkov aimbot undetected untuk Tarkov di PC Windows. Hack aimbot Tarkov.",
					imageAlt: "Tarkov aimbot hack controls and bone priority",
					galleryTitle: "Hack aimbot Tarkov",
					heroImage: "/images/tarkov-cheats-aimbot-view.webp",
					ctaPrimary: "Beli TarkovHack",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/tarkov-aimbot/",
					sections: [
						{
							h2: "Hack aimbot Tarkov",
							paragraphs: [
								"TarkovHack menyediakan ESP wallhack, radar hack, dan tarkov aimbot undetected untuk Tarkov di PC Windows. undetected Aimbot hack assist for Escape from Tarkov.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch BattlEye anti-cheat. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye anti-cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye anti-cheat.",
								"support@tarkovhack.com untuk dukungan dan legal.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Hack ESP Tarkov | Boxes & Loot",
					description: "Hack ESP Tarkov: ESP hack boxes, loot pins, and distance. pengiriman digital instan. undetected — PC Windows.",
					h1: "Hack ESP Tarkov",
					intro: "TarkovHack menyediakan ESP wallhack, radar hack, dan tarkov aimbot undetected untuk Tarkov di PC Windows. Hack ESP Tarkov.",
					imageAlt: "Tarkov ESP hack boxes and loot markers",
					galleryTitle: "Hack ESP Tarkov",
					heroImage: "/images/tarkov-cheats-wallhack.webp",
					ctaPrimary: "Beli TarkovHack",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/tarkov-esp/",
					sections: [
						{
							h2: "Hack ESP Tarkov",
							paragraphs: [
								"TarkovHack menyediakan ESP wallhack, radar hack, dan tarkov aimbot undetected untuk Tarkov di PC Windows. ESP hack boxes, loot pins, and distance.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch BattlEye anti-cheat. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye anti-cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye anti-cheat.",
								"support@tarkovhack.com untuk dukungan dan legal.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Unlock all Tarkov | What It Means",
					description: "Unlock all Tarkov: unlock-all searches vs real ESP and Aimbot tools. pengiriman digital instan. undetected — PC Windows.",
					h1: "Unlock all Tarkov",
					intro: "TarkovHack menyediakan ESP wallhack, radar hack, dan tarkov aimbot undetected untuk Tarkov di PC Windows. Unlock all Tarkov.",
					imageAlt: "TarkovHack license features overview",
					galleryTitle: "Unlock all Tarkov",
					heroImage: "/images/tarkov-cheats-radar.webp",
					ctaPrimary: "Beli TarkovHack",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unlock all Tarkov",
							paragraphs: [
								"TarkovHack menyediakan ESP wallhack, radar hack, dan tarkov aimbot undetected untuk Tarkov di PC Windows. unlock-all searches vs real ESP and Aimbot tools.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch BattlEye anti-cheat. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye anti-cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye anti-cheat.",
								"support@tarkovhack.com untuk dukungan dan legal.",
							],
						},
					],
				},
				privacy: {
					title: "Kebijakan privasi | TarkovHack",
					description: "Kebijakan privasi for TarkovHack — ESP wallhack, Aimbot, PC Windows.",
					h1: "Kebijakan privasi",
					intro: "TarkovHack menyediakan ESP wallhack, radar hack, dan tarkov aimbot undetected untuk Tarkov di PC Windows. Kebijakan privasi for tarkovhack.com and Escape from Tarkov licenses.",
					imageAlt: "TarkovHack",
					galleryTitle: "TarkovHack",
					heroImage: "/images/tarkov-cheats-aimbot.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read terms",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we collect",
							paragraphs: [
								"TarkovHack menyediakan ESP wallhack, radar hack, dan tarkov aimbot undetected untuk Tarkov di PC Windows. Contact email, Zadeyo order references, and basic site security data.",
								"Payment details are processed by Zadeyo checkout — not stored on tarkovhack.com.",
							],
						},
						{
							h2: "How we use data",
							paragraphs: [
								"TarkovHack menyediakan ESP wallhack, radar hack, dan tarkov aimbot undetected untuk Tarkov di PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Periksa Updates setelah patch BattlEye anti-cheat. Tidak ada cheat yang menjamin undetected permanen.",
							],
						},
						{
							h2: "Your rights",
							paragraphs: [
								"support@tarkovhack.com untuk dukungan dan legal.",
								"Email: support@tarkovhack.com",
							],
						},
					],
				},
				refund: {
					title: "Kebijakan refund | TarkovHack",
					description: "Kebijakan refund for TarkovHack — ESP wallhack, Aimbot, PC Windows.",
					h1: "Kebijakan refund",
					intro: "TarkovHack menyediakan ESP wallhack, radar hack, dan tarkov aimbot undetected untuk Tarkov di PC Windows. Kebijakan refund for tarkovhack.com and Escape from Tarkov licenses.",
					imageAlt: "TarkovHack",
					galleryTitle: "TarkovHack",
					heroImage: "/images/tarkov-cheats-raid.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digital delivery",
							paragraphs: [
								"TarkovHack menyediakan ESP wallhack, radar hack, dan tarkov aimbot undetected untuk Tarkov di PC Windows. Contact email, Zadeyo order references, and basic site security data.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye anti-cheat.",
							],
						},
						{
							h2: "Refund approval",
							paragraphs: [
								"TarkovHack menyediakan ESP wallhack, radar hack, dan tarkov aimbot undetected untuk Tarkov di PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Periksa Updates setelah patch BattlEye anti-cheat. Tidak ada cheat yang menjamin undetected permanen.",
							],
						},
						{
							h2: "How to request",
							paragraphs: [
								"support@tarkovhack.com untuk dukungan dan legal.",
								"Email: support@tarkovhack.com",
							],
						},
					],
				},
				terms: {
					title: "Syarat penggunaan | TarkovHack",
					description: "Syarat penggunaan for TarkovHack — ESP wallhack, Aimbot, PC Windows.",
					h1: "Syarat penggunaan",
					intro: "TarkovHack menyediakan ESP wallhack, radar hack, dan tarkov aimbot undetected untuk Tarkov di PC Windows. Syarat penggunaan for tarkovhack.com and Escape from Tarkov licenses.",
					imageAlt: "TarkovHack",
					galleryTitle: "TarkovHack",
					heroImage: "/images/tarkov-cheats-aimbot-view.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Acceptance of terms",
							paragraphs: [
								"TarkovHack menyediakan ESP wallhack, radar hack, dan tarkov aimbot undetected untuk Tarkov di PC Windows. Contact email, Zadeyo order references, and basic site security data.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan BattlEye anti-cheat.",
							],
						},
						{
							h2: "Risk disclaimer",
							paragraphs: [
								"TarkovHack menyediakan ESP wallhack, radar hack, dan tarkov aimbot undetected untuk Tarkov di PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "Policy changes",
							paragraphs: [
								"support@tarkovhack.com untuk dukungan dan legal.",
								"Email: support@tarkovhack.com",
							],
						},
					],
				},
			},
		},
		th: {
			ui: {
				nav: {
					home: "หน้าแรก",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "ฟีเจอร์",
					pricing: "ราคา",
					setup: "ติดตั้ง",
					updates: "อัปเดต",
					faq: "FAQ",
					buyNow: "ซื้อเลย",
				},
				hero: {
					accent: "TarkovHack ไม่ถูกตรวจจับ",
					accentShort: "TarkovHack",
					subtitle: "ESP wallhack, radar hack และ Aimbot สำหรับ Tarkov บน Windows PC — รวมการดูแล BattlEye anti-cheat",
					subtitleShort: "ESP, radar และ Aimbot สำหรับ Tarkov PC",
					buyNow: "ซื้อเลย",
					seeFeatures: "ดูฟีเจอร์",
				},
				trust: {
					status: "ออนไลน์",
					statusNote: "แพ็กเกจ TarkovHack พร้อมใช้งานสำหรับ Tarkov บน Windows PC",
					statusShort: "ใช้งาน",
					delivery: "จัดส่งดิจิทัลทันที",
					platform: "Windows 10 และ 11",
					antiCheat: "รองรับการดูแล BattlEye anti-cheat",
					antiCheatShort: "BattlEye anti-cheat รองรับ",
				},
				product: {
					title: "TarkovHack",
					addToCart: "เพิ่มในตะกร้า",
					monthly: "รายเดือน",
					lifetime: "ตลอดชีพ",
					available: "พร้อมใช้งาน",
					gameBadge: "Tarkov",
					platformBadge: "Windows PC",
					statusBadge: "แพ็กเกจ undetected",
				},
				reviews: {
					title: "ผู้เล่นพูดว่าอย่างไร",
					subtitle: "ความคิดเห็นล่าสุดจากผู้ซื้อ TarkovHack",
					outOf: "จาก 5",
					countLabel: "รีวิว",
				},
				common: {
					buyNow: "ซื้อเลย",
					readGuide: "อ่านคู่มือ",
					language: "ภาษา",
					officialLanguageNote: "ภาษาอังกฤษเป็นภาษาทางการ ภาษาอื่นแปลเพื่อ SEO ระดับโลก",
					relatedPages: "หน้าที่เกี่ยวข้อง",
				},
				footer: {
					explore: "สำรวจ",
					help: "ช่วยเหลือและกฎหมาย",
					tagline: "ESP, wallhack, radar และ Aimbot ไม่ถูกตรวจจับสำหรับ Tarkov — ชำระผ่าน Zadeyo",
				},
				images: {
					hero: "TarkovHack hero — ESP and aimbot overlay in Escape from Tarkov",
					espWallhack: "Wallhack outlines showing PMCs and Scavs through walls",
					aimbotCombat: "Soft aim assist overlay during an Escape from Tarkov raid",
					squadFight: "TarkovHack combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Tarkov raid",
					headerArt: "Aimbot view and bone priority controls for Tarkov",
					cheatsPackage: "2D radar threat overlay for Escape from Tarkov",
					rebootFight: "Aimbot assist during a Tarkov firefight",
					battleRoyale: "TarkovHack in-raid overview for Windows PC",
					battleRoyaleIsland: "ESP markers for loot and extracts in Tarkov",
				},
			},
			pages: {
				home: {
					title: "TarkovHack 2026 | ESP, Wallhack และ Aimbot",
					description: "Cheat Escape from Tarkov undetected สำหรับ Escape from Tarkov บน PC. ESP wallhack, radar hack, Aimbot, BattlEye maintenance. จัดส่งดิจิทัลทันที.",
					h1: "TarkovHack — Undetected ESP, Wallhack และ Aimbot",
					intro: "แพ็ก undetected สำหรับ Escape from Tarkov บน Windows PC: ESP wallhack, radar, Aimbot พร้อม BattlEye maintenance",
					imageAlt: "Tarkov ESP player tags hack",
					galleryTitle: "แกลเลอรี TarkovHack — ESP, Aimbot, wallhack",
					heroImage: "/images/tarkov-cheats-esp.webp",
					ctaPrimary: "ซื้อ TarkovHack",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "ทำไมเลือก TarkovHack ปี 2026",
							paragraphs: [
								"TarkovHack รวม ESP wallhack, radar hack และ tarkov aimbot แบบ undetected สำหรับ Tarkov บน Windows PC เหมาะสำหรับอ่าน squad ศัตรูใน BR และ scav-run",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye anti-cheat",
							],
						},
						{
							h2: "ESP wallhack, radar, Aimbot ในใบอนุญาตเดียว",
							paragraphs: [
								"TarkovHack รวม ESP wallhack, radar hack และ tarkov aimbot แบบ undetected สำหรับ Tarkov บน Windows PC ใบอนุญาตเดียวแทนเครื่องมือแยก",
								"ตรวจ Updates หลังแพตช์ BattlEye anti-cheat ไม่มี cheat รับประกัน undetected ถาวร",
							],
						},
					],
				},
				"tarkov-esp": {
					title: "Tarkov ESP | Player Boxes & Wallhack",
					description: "Tarkov ESP: player boxes, loot markers, and wallhack overlays. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "Tarkov ESP",
					intro: "TarkovHack รวม ESP wallhack, radar hack และ tarkov aimbot แบบ undetected สำหรับ Tarkov บน Windows PC Tarkov ESP.",
					imageAlt: "Tarkov ESP player boxes and distance readouts in a raid",
					galleryTitle: "Tarkov ESP",
					heroImage: "/images/tarkov-cheats-radar.webp",
					ctaPrimary: "ซื้อ TarkovHack",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/tarkov-cheats/",
					sections: [
						{
							h2: "Tarkov ESP",
							paragraphs: [
								"TarkovHack รวม ESP wallhack, radar hack และ tarkov aimbot แบบ undetected สำหรับ Tarkov บน Windows PC player boxes, loot markers, and wallhack overlays.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye anti-cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ BattlEye anti-cheat ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye anti-cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye anti-cheat",
								"support@tarkovhack.com สำหรับการสนับสนุน",
							],
						},
					],
				},
				"tarkov-aimbot": {
					title: "Tarkov Aimbot | Soft Aim Controls",
					description: "Tarkov Aimbot: soft aim, FOV, and per-weapon Aimbot profiles. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "Tarkov Aimbot",
					intro: "TarkovHack รวม ESP wallhack, radar hack และ tarkov aimbot แบบ undetected สำหรับ Tarkov บน Windows PC Tarkov Aimbot.",
					imageAlt: "Tarkov aimbot and soft aim controls on Windows PC",
					galleryTitle: "Tarkov Aimbot",
					heroImage: "/images/tarkov-cheats-aimbot.webp",
					ctaPrimary: "ซื้อ TarkovHack",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/tarkov-esp/",
					sections: [
						{
							h2: "Tarkov Aimbot",
							paragraphs: [
								"TarkovHack รวม ESP wallhack, radar hack และ tarkov aimbot แบบ undetected สำหรับ Tarkov บน Windows PC soft aim, FOV, and per-weapon Aimbot profiles.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye anti-cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ BattlEye anti-cheat ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye anti-cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye anti-cheat",
								"support@tarkovhack.com สำหรับการสนับสนุน",
							],
						},
					],
				},
				features: {
					title: "ฟีเจอร์ | Full Feature List",
					description: "ฟีเจอร์: ESP, soft aim, radar controls. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "ฟีเจอร์",
					intro: "TarkovHack รวม ESP wallhack, radar hack และ tarkov aimbot แบบ undetected สำหรับ Tarkov บน Windows PC ฟีเจอร์.",
					imageAlt: "TarkovHack features — ESP, soft aim, and radar screenshots",
					galleryTitle: "ฟีเจอร์",
					heroImage: "/images/tarkov-cheats-aimbot-view.webp",
					ctaPrimary: "ซื้อ TarkovHack",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "ฟีเจอร์",
							paragraphs: [
								"TarkovHack รวม ESP wallhack, radar hack และ tarkov aimbot แบบ undetected สำหรับ Tarkov บน Windows PC ESP, soft aim, radar controls.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye anti-cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ BattlEye anti-cheat ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye anti-cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye anti-cheat",
								"support@tarkovhack.com สำหรับการสนับสนุน",
							],
						},
					],
				},
				pricing: {
					title: "ราคา | Monthly & Lifetime",
					description: "ราคา: $35 monthly or $150 lifetime licenses. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "ราคา",
					intro: "TarkovHack รวม ESP wallhack, radar hack และ tarkov aimbot แบบ undetected สำหรับ Tarkov บน Windows PC ราคา.",
					imageAlt: "TarkovHack store plans for monthly and lifetime licenses",
					galleryTitle: "ราคา",
					heroImage: "/images/tarkov-cheats-raid.webp",
					ctaPrimary: "ซื้อ TarkovHack",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "ราคา",
							paragraphs: [
								"TarkovHack รวม ESP wallhack, radar hack และ tarkov aimbot แบบ undetected สำหรับ Tarkov บน Windows PC $35 monthly or $150 lifetime licenses.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye anti-cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ BattlEye anti-cheat ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye anti-cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye anti-cheat",
								"support@tarkovhack.com สำหรับการสนับสนุน",
							],
						},
					],
				},
				setup: {
					title: "ติดตั้ง | PC Setup Guide",
					description: "ติดตั้ง: Windows PC activation and first-launch setup. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "ติดตั้ง",
					intro: "TarkovHack รวม ESP wallhack, radar hack และ tarkov aimbot แบบ undetected สำหรับ Tarkov บน Windows PC ติดตั้ง.",
					imageAlt: "TarkovHack setup guide screenshot for Windows PC",
					galleryTitle: "ติดตั้ง",
					heroImage: "/images/tarkov-cheats-radar.webp",
					ctaPrimary: "ซื้อ TarkovHack",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "ติดตั้ง",
							paragraphs: [
								"TarkovHack รวม ESP wallhack, radar hack และ tarkov aimbot แบบ undetected สำหรับ Tarkov บน Windows PC Windows PC activation and first-launch setup.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye anti-cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ BattlEye anti-cheat ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye anti-cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye anti-cheat",
								"support@tarkovhack.com สำหรับการสนับสนุน",
							],
						},
					],
				},
				updates: {
					title: "อัปเดต | BattlEye Maintenance Log",
					description: "อัปเดต: BattlEye patch status and rebuild notes. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "อัปเดต",
					intro: "TarkovHack รวม ESP wallhack, radar hack และ tarkov aimbot แบบ undetected สำหรับ Tarkov บน Windows PC อัปเดต.",
					imageAlt: "TarkovHack live status after BattlEye and game patches",
					galleryTitle: "อัปเดต",
					heroImage: "/images/tarkov-cheats-esp.webp",
					ctaPrimary: "ซื้อ TarkovHack",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/tarkov-cheats/",
					sections: [
						{
							h2: "อัปเดต",
							paragraphs: [
								"TarkovHack รวม ESP wallhack, radar hack และ tarkov aimbot แบบ undetected สำหรับ Tarkov บน Windows PC BattlEye patch status and rebuild notes.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye anti-cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ BattlEye anti-cheat ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye anti-cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye anti-cheat",
								"support@tarkovhack.com สำหรับการสนับสนุน",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Common Answers",
					description: "FAQ: ESP, soft aim, delivery, and BattlEye questions. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "FAQ",
					intro: "TarkovHack รวม ESP wallhack, radar hack และ tarkov aimbot แบบ undetected สำหรับ Tarkov บน Windows PC FAQ.",
					imageAlt: "TarkovHack FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/tarkov-cheats-aimbot-view.webp",
					ctaPrimary: "ซื้อ TarkovHack",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"TarkovHack รวม ESP wallhack, radar hack และ tarkov aimbot แบบ undetected สำหรับ Tarkov บน Windows PC ESP, soft aim, delivery, and BattlEye questions.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye anti-cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ BattlEye anti-cheat ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye anti-cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye anti-cheat",
								"support@tarkovhack.com สำหรับการสนับสนุน",
							],
						},
					],
				},
				support: {
					title: "สนับสนุน | Help & Contact",
					description: "สนับสนุน: order help and license support contact. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "สนับสนุน",
					intro: "TarkovHack รวม ESP wallhack, radar hack และ tarkov aimbot แบบ undetected สำหรับ Tarkov บน Windows PC สนับสนุน.",
					imageAlt: "TarkovHack support page for license and setup help",
					galleryTitle: "สนับสนุน",
					heroImage: "/images/tarkov-cheats-raid.webp",
					ctaPrimary: "ซื้อ TarkovHack",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "สนับสนุน",
							paragraphs: [
								"TarkovHack รวม ESP wallhack, radar hack และ tarkov aimbot แบบ undetected สำหรับ Tarkov บน Windows PC order help and license support contact.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye anti-cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ BattlEye anti-cheat ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye anti-cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye anti-cheat",
								"support@tarkovhack.com สำหรับการสนับสนุน",
							],
						},
					],
				},
				undetected: {
					title: "Cheats undetected | BattlEye Safe Status",
					description: "Cheats undetected: undetected maintenance after BattlEye anti-cheat patches. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "Cheats undetected",
					intro: "TarkovHack รวม ESP wallhack, radar hack และ tarkov aimbot แบบ undetected สำหรับ Tarkov บน Windows PC Cheats undetected.",
					imageAlt: "TarkovHack undetected status overview for Windows PC",
					galleryTitle: "Cheats undetected",
					heroImage: "/images/tarkov-cheats-wallhack.webp",
					ctaPrimary: "ซื้อ TarkovHack",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/tarkov-cheats/",
					sections: [
						{
							h2: "Cheats undetected",
							paragraphs: [
								"TarkovHack รวม ESP wallhack, radar hack และ tarkov aimbot แบบ undetected สำหรับ Tarkov บน Windows PC undetected maintenance after BattlEye anti-cheat patches.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye anti-cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ BattlEye anti-cheat ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye anti-cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye anti-cheat",
								"support@tarkovhack.com สำหรับการสนับสนุน",
							],
						},
					],
				},
				wallhack: {
					title: "Tarkov Wallhack | ESP Visibility",
					description: "Tarkov Wallhack: wallhack ESP for players, loot, and distance. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "Tarkov Wallhack",
					intro: "TarkovHack รวม ESP wallhack, radar hack และ tarkov aimbot แบบ undetected สำหรับ Tarkov บน Windows PC Tarkov Wallhack.",
					imageAlt: "Tarkov wallhack visibility through walls in a raid",
					galleryTitle: "Tarkov Wallhack",
					heroImage: "/images/tarkov-cheats-wallhack.webp",
					ctaPrimary: "ซื้อ TarkovHack",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/tarkov-esp/",
					sections: [
						{
							h2: "Tarkov Wallhack",
							paragraphs: [
								"TarkovHack รวม ESP wallhack, radar hack และ tarkov aimbot แบบ undetected สำหรับ Tarkov บน Windows PC wallhack ESP for players, loot, and distance.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye anti-cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ BattlEye anti-cheat ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye anti-cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye anti-cheat",
								"support@tarkovhack.com สำหรับการสนับสนุน",
							],
						},
					],
				},
				radar: {
					title: "Radar Hack | 2D Threat Overlay",
					description: "Radar Hack: 2D radar cues for flanks and rotations. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "Radar Hack",
					intro: "TarkovHack รวม ESP wallhack, radar hack และ tarkov aimbot แบบ undetected สำหรับ Tarkov บน Windows PC Radar Hack.",
					imageAlt: "Tarkov 2D radar overlay showing nearby threats",
					galleryTitle: "Radar Hack",
					heroImage: "/images/tarkov-cheats-radar.webp",
					ctaPrimary: "ซื้อ TarkovHack",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/tarkov-esp/",
					sections: [
						{
							h2: "Radar Hack",
							paragraphs: [
								"TarkovHack รวม ESP wallhack, radar hack และ tarkov aimbot แบบ undetected สำหรับ Tarkov บน Windows PC 2D radar cues for flanks and rotations.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye anti-cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ BattlEye anti-cheat ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye anti-cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye anti-cheat",
								"support@tarkovhack.com สำหรับการสนับสนุน",
							],
						},
					],
				},
				battleye: {
					title: "BattlEye Bypass | Patch Maintenance",
					description: "BattlEye Bypass: how BattlEye updates are handled for Escape from Tarkov hacks. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "BattlEye Bypass",
					intro: "TarkovHack รวม ESP wallhack, radar hack และ tarkov aimbot แบบ undetected สำหรับ Tarkov บน Windows PC BattlEye Bypass.",
					imageAlt: "TarkovHack maintenance after a BattlEye patch",
					galleryTitle: "BattlEye Bypass",
					heroImage: "/images/tarkov-cheats-aimbot.webp",
					ctaPrimary: "ซื้อ TarkovHack",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "BattlEye Bypass",
							paragraphs: [
								"TarkovHack รวม ESP wallhack, radar hack และ tarkov aimbot แบบ undetected สำหรับ Tarkov บน Windows PC how BattlEye updates are handled for Escape from Tarkov hacks.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye anti-cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ BattlEye anti-cheat ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye anti-cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye anti-cheat",
								"support@tarkovhack.com สำหรับการสนับสนุน",
							],
						},
					],
				},
				"cheats-2026": {
					title: "TarkovHack 2026 | Buyer Guide",
					description: "TarkovHack 2026: 2026 TarkovHack checklist before checkout. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "TarkovHack 2026",
					intro: "TarkovHack รวม ESP wallhack, radar hack และ tarkov aimbot แบบ undetected สำหรับ Tarkov บน Windows PC TarkovHack 2026.",
					imageAlt: "TarkovHack product overview for Escape from Tarkov",
					galleryTitle: "TarkovHack 2026",
					heroImage: "/images/tarkov-cheats-esp.webp",
					ctaPrimary: "ซื้อ TarkovHack",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/tarkov-cheats/",
					sections: [
						{
							h2: "TarkovHack 2026",
							paragraphs: [
								"TarkovHack รวม ESP wallhack, radar hack และ tarkov aimbot แบบ undetected สำหรับ Tarkov บน Windows PC 2026 TarkovHack checklist before checkout.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye anti-cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ BattlEye anti-cheat ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye anti-cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye anti-cheat",
								"support@tarkovhack.com สำหรับการสนับสนุน",
							],
						},
					],
				},
				hacks: {
					title: "TarkovHack | ESP Aimbot Guide",
					description: "TarkovHack: the Escape from Tarkov hacks pillar for ESP and Aimbot. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "TarkovHack",
					intro: "TarkovHack รวม ESP wallhack, radar hack และ tarkov aimbot แบบ undetected สำหรับ Tarkov บน Windows PC TarkovHack.",
					imageAlt: "TarkovHack product page — ESP, aimbot, and radar",
					galleryTitle: "TarkovHack",
					heroImage: "/images/tarkov-cheats-raid.webp",
					ctaPrimary: "ซื้อ TarkovHack",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "TarkovHack",
							paragraphs: [
								"TarkovHack รวม ESP wallhack, radar hack และ tarkov aimbot แบบ undetected สำหรับ Tarkov บน Windows PC the Escape from Tarkov hacks pillar for ESP and Aimbot.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye anti-cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ BattlEye anti-cheat ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye anti-cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye anti-cheat",
								"support@tarkovhack.com สำหรับการสนับสนุน",
							],
						},
					],
				},
				"cheat-download": {
					title: "ดาวน์โหลด TarkovHack | Instant Access",
					description: "ดาวน์โหลด TarkovHack: digital license download after payment. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "ดาวน์โหลด TarkovHack",
					intro: "TarkovHack รวม ESP wallhack, radar hack และ tarkov aimbot แบบ undetected สำหรับ Tarkov บน Windows PC ดาวน์โหลด TarkovHack.",
					imageAlt: "TarkovHack download and install delivery flow",
					galleryTitle: "ดาวน์โหลด TarkovHack",
					heroImage: "/images/tarkov-cheats-raid.webp",
					ctaPrimary: "ซื้อ TarkovHack",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "ดาวน์โหลด TarkovHack",
							paragraphs: [
								"TarkovHack รวม ESP wallhack, radar hack และ tarkov aimbot แบบ undetected สำหรับ Tarkov บน Windows PC digital license download after payment.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye anti-cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ BattlEye anti-cheat ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye anti-cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye anti-cheat",
								"support@tarkovhack.com สำหรับการสนับสนุน",
							],
						},
					],
				},
				"mod-menu": {
					title: "เมนูมอด Tarkov | In-Game Toggles",
					description: "เมนูมอด Tarkov: in-client ESP and soft aim toggles. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "เมนูมอด Tarkov",
					intro: "TarkovHack รวม ESP wallhack, radar hack และ tarkov aimbot แบบ undetected สำหรับ Tarkov บน Windows PC เมนูมอด Tarkov.",
					imageAlt: "TarkovHack in-game menu controls",
					galleryTitle: "เมนูมอด Tarkov",
					heroImage: "/images/tarkov-cheats-radar.webp",
					ctaPrimary: "ซื้อ TarkovHack",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "เมนูมอด Tarkov",
							paragraphs: [
								"TarkovHack รวม ESP wallhack, radar hack และ tarkov aimbot แบบ undetected สำหรับ Tarkov บน Windows PC in-client ESP and soft aim toggles.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye anti-cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ BattlEye anti-cheat ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye anti-cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye anti-cheat",
								"support@tarkovhack.com สำหรับการสนับสนุน",
							],
						},
					],
				},
				"soft-aim": {
					title: "Tarkov Soft Aim | Smooth Aim Settings",
					description: "Tarkov Soft Aim: smooth soft aim settings for Windows PC. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "Tarkov Soft Aim",
					intro: "TarkovHack รวม ESP wallhack, radar hack และ tarkov aimbot แบบ undetected สำหรับ Tarkov บน Windows PC Tarkov Soft Aim.",
					imageAlt: "Tarkov soft aim FOV and smoothness settings",
					galleryTitle: "Tarkov Soft Aim",
					heroImage: "/images/tarkov-cheats-aimbot-view.webp",
					ctaPrimary: "ซื้อ TarkovHack",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/tarkov-aimbot/",
					sections: [
						{
							h2: "Tarkov Soft Aim",
							paragraphs: [
								"TarkovHack รวม ESP wallhack, radar hack และ tarkov aimbot แบบ undetected สำหรับ Tarkov บน Windows PC smooth soft aim settings for Windows PC.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye anti-cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ BattlEye anti-cheat ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye anti-cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye anti-cheat",
								"support@tarkovhack.com สำหรับการสนับสนุน",
							],
						},
					],
				},
				"best-cheats": {
					title: "Cheat Tarkov ที่ดีที่สุด | Buyer Checklist",
					description: "Cheat Tarkov ที่ดีที่สุด: what to compare before buying TarkovHack. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "Cheat Tarkov ที่ดีที่สุด",
					intro: "TarkovHack รวม ESP wallhack, radar hack และ tarkov aimbot แบบ undetected สำหรับ Tarkov บน Windows PC Cheat Tarkov ที่ดีที่สุด.",
					imageAlt: "TarkovHack overview for Escape from Tarkov on PC",
					galleryTitle: "Cheat Tarkov ที่ดีที่สุด",
					heroImage: "/images/tarkov-cheats-esp.webp",
					ctaPrimary: "ซื้อ TarkovHack",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Cheat Tarkov ที่ดีที่สุด",
							paragraphs: [
								"TarkovHack รวม ESP wallhack, radar hack และ tarkov aimbot แบบ undetected สำหรับ Tarkov บน Windows PC what to compare before buying TarkovHack.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye anti-cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ BattlEye anti-cheat ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye anti-cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye anti-cheat",
								"support@tarkovhack.com สำหรับการสนับสนุน",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Hack Aimbot Tarkov | Soft Aim Assist",
					description: "Hack Aimbot Tarkov: undetected Aimbot hack assist for Escape from Tarkov. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "Hack Aimbot Tarkov",
					intro: "TarkovHack รวม ESP wallhack, radar hack และ tarkov aimbot แบบ undetected สำหรับ Tarkov บน Windows PC Hack Aimbot Tarkov.",
					imageAlt: "Tarkov aimbot hack controls and bone priority",
					galleryTitle: "Hack Aimbot Tarkov",
					heroImage: "/images/tarkov-cheats-aimbot-view.webp",
					ctaPrimary: "ซื้อ TarkovHack",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/tarkov-aimbot/",
					sections: [
						{
							h2: "Hack Aimbot Tarkov",
							paragraphs: [
								"TarkovHack รวม ESP wallhack, radar hack และ tarkov aimbot แบบ undetected สำหรับ Tarkov บน Windows PC undetected Aimbot hack assist for Escape from Tarkov.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye anti-cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ BattlEye anti-cheat ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye anti-cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye anti-cheat",
								"support@tarkovhack.com สำหรับการสนับสนุน",
							],
						},
					],
				},
				"esp-hack": {
					title: "Hack ESP Tarkov | Boxes & Loot",
					description: "Hack ESP Tarkov: ESP hack boxes, loot pins, and distance. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "Hack ESP Tarkov",
					intro: "TarkovHack รวม ESP wallhack, radar hack และ tarkov aimbot แบบ undetected สำหรับ Tarkov บน Windows PC Hack ESP Tarkov.",
					imageAlt: "Tarkov ESP hack boxes and loot markers",
					galleryTitle: "Hack ESP Tarkov",
					heroImage: "/images/tarkov-cheats-wallhack.webp",
					ctaPrimary: "ซื้อ TarkovHack",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/tarkov-esp/",
					sections: [
						{
							h2: "Hack ESP Tarkov",
							paragraphs: [
								"TarkovHack รวม ESP wallhack, radar hack และ tarkov aimbot แบบ undetected สำหรับ Tarkov บน Windows PC ESP hack boxes, loot pins, and distance.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye anti-cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ BattlEye anti-cheat ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye anti-cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye anti-cheat",
								"support@tarkovhack.com สำหรับการสนับสนุน",
							],
						},
					],
				},
				"unlock-all": {
					title: "Tarkov Unlock All | What It Means",
					description: "Tarkov Unlock All: unlock-all searches vs real ESP and Aimbot tools. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "Tarkov Unlock All",
					intro: "TarkovHack รวม ESP wallhack, radar hack และ tarkov aimbot แบบ undetected สำหรับ Tarkov บน Windows PC Tarkov Unlock All.",
					imageAlt: "TarkovHack license features overview",
					galleryTitle: "Tarkov Unlock All",
					heroImage: "/images/tarkov-cheats-radar.webp",
					ctaPrimary: "ซื้อ TarkovHack",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Tarkov Unlock All",
							paragraphs: [
								"TarkovHack รวม ESP wallhack, radar hack และ tarkov aimbot แบบ undetected สำหรับ Tarkov บน Windows PC unlock-all searches vs real ESP and Aimbot tools.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye anti-cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ BattlEye anti-cheat ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye anti-cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye anti-cheat",
								"support@tarkovhack.com สำหรับการสนับสนุน",
							],
						},
					],
				},
				privacy: {
					title: "นโยบายความเป็นส่วนตัว | TarkovHack",
					description: "นโยบายความเป็นส่วนตัว for TarkovHack — ESP wallhack, Aimbot, Windows PC.",
					h1: "นโยบายความเป็นส่วนตัว",
					intro: "TarkovHack รวม ESP wallhack, radar hack และ tarkov aimbot แบบ undetected สำหรับ Tarkov บน Windows PC นโยบายความเป็นส่วนตัว for tarkovhack.com and Escape from Tarkov licenses.",
					imageAlt: "TarkovHack",
					galleryTitle: "TarkovHack",
					heroImage: "/images/tarkov-cheats-aimbot.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read terms",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we collect",
							paragraphs: [
								"TarkovHack รวม ESP wallhack, radar hack และ tarkov aimbot แบบ undetected สำหรับ Tarkov บน Windows PC Contact email, Zadeyo order references, and basic site security data.",
								"Payment details are processed by Zadeyo checkout — not stored on tarkovhack.com.",
							],
						},
						{
							h2: "How we use data",
							paragraphs: [
								"TarkovHack รวม ESP wallhack, radar hack และ tarkov aimbot แบบ undetected สำหรับ Tarkov บน Windows PC Support responses, order resolution, and legal compliance when required.",
								"ตรวจ Updates หลังแพตช์ BattlEye anti-cheat ไม่มี cheat รับประกัน undetected ถาวร",
							],
						},
						{
							h2: "Your rights",
							paragraphs: [
								"support@tarkovhack.com สำหรับการสนับสนุน",
								"Email: support@tarkovhack.com",
							],
						},
					],
				},
				refund: {
					title: "นโยบายการคืนเงิน | TarkovHack",
					description: "นโยบายการคืนเงิน for TarkovHack — ESP wallhack, Aimbot, Windows PC.",
					h1: "นโยบายการคืนเงิน",
					intro: "TarkovHack รวม ESP wallhack, radar hack และ tarkov aimbot แบบ undetected สำหรับ Tarkov บน Windows PC นโยบายการคืนเงิน for tarkovhack.com and Escape from Tarkov licenses.",
					imageAlt: "TarkovHack",
					galleryTitle: "TarkovHack",
					heroImage: "/images/tarkov-cheats-raid.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digital delivery",
							paragraphs: [
								"TarkovHack รวม ESP wallhack, radar hack และ tarkov aimbot แบบ undetected สำหรับ Tarkov บน Windows PC Contact email, Zadeyo order references, and basic site security data.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye anti-cheat",
							],
						},
						{
							h2: "Refund approval",
							paragraphs: [
								"TarkovHack รวม ESP wallhack, radar hack และ tarkov aimbot แบบ undetected สำหรับ Tarkov บน Windows PC Support responses, order resolution, and legal compliance when required.",
								"ตรวจ Updates หลังแพตช์ BattlEye anti-cheat ไม่มี cheat รับประกัน undetected ถาวร",
							],
						},
						{
							h2: "How to request",
							paragraphs: [
								"support@tarkovhack.com สำหรับการสนับสนุน",
								"Email: support@tarkovhack.com",
							],
						},
					],
				},
				terms: {
					title: "ข้อกำหนดการใช้งาน | TarkovHack",
					description: "ข้อกำหนดการใช้งาน for TarkovHack — ESP wallhack, Aimbot, Windows PC.",
					h1: "ข้อกำหนดการใช้งาน",
					intro: "TarkovHack รวม ESP wallhack, radar hack และ tarkov aimbot แบบ undetected สำหรับ Tarkov บน Windows PC ข้อกำหนดการใช้งาน for tarkovhack.com and Escape from Tarkov licenses.",
					imageAlt: "TarkovHack",
					galleryTitle: "TarkovHack",
					heroImage: "/images/tarkov-cheats-aimbot-view.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Acceptance of terms",
							paragraphs: [
								"TarkovHack รวม ESP wallhack, radar hack และ tarkov aimbot แบบ undetected สำหรับ Tarkov บน Windows PC Contact email, Zadeyo order references, and basic site security data.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล BattlEye anti-cheat",
							],
						},
						{
							h2: "Risk disclaimer",
							paragraphs: [
								"TarkovHack รวม ESP wallhack, radar hack และ tarkov aimbot แบบ undetected สำหรับ Tarkov บน Windows PC Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "Policy changes",
							paragraphs: [
								"support@tarkovhack.com สำหรับการสนับสนุน",
								"Email: support@tarkovhack.com",
							],
						},
					],
				},
			},
		},
		vi: {
			ui: {
				nav: {
					home: "Trang chủ",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Tính năng",
					pricing: "Giá",
					setup: "Cài đặt",
					updates: "Cập nhật",
					faq: "FAQ",
					buyNow: "Mua ngay",
				},
				hero: {
					accent: "Cheat Tarkov undetected",
					accentShort: "TarkovHack",
					subtitle: "ESP wallhack, radar hack và Aimbot cho Tarkov trên PC Windows — bảo trì BattlEye anti-cheat bao gồm.",
					subtitleShort: "ESP, radar & Aimbot cho Tarkov PC",
					buyNow: "Mua ngay",
					seeFeatures: "Xem tính năng",
				},
				trust: {
					status: "Trực tuyến",
					statusNote: "Gói TarkovHack đang hoạt động cho Tarkov trên PC Windows.",
					statusShort: "Hoạt động",
					delivery: "Giao hàng kỹ thuật số tức thì",
					platform: "Windows 10 & 11",
					antiCheat: "Hỗ trợ bảo trì BattlEye anti-cheat",
					antiCheatShort: "Hỗ trợ BattlEye anti-cheat",
				},
				product: {
					title: "TarkovHack",
					addToCart: "Thêm vào giỏ",
					monthly: "Hàng tháng",
					lifetime: "Trọn đời",
					available: "Có sẵn ngay",
					gameBadge: "Tarkov",
					platformBadge: "Windows PC",
					statusBadge: "Gói undetected",
				},
				reviews: {
					title: "Người chơi nói gì",
					subtitle: "Phản hồi gần đây từ người mua TarkovHack",
					outOf: "/5",
					countLabel: "đánh giá",
				},
				common: {
					buyNow: "Mua ngay",
					readGuide: "Đọc hướng dẫn",
					language: "Ngôn ngữ",
					officialLanguageNote: "Tiếng Anh là ngôn ngữ chính thức. Các ngôn ngữ khác được dịch cho SEO toàn cầu.",
					relatedPages: "Trang liên quan",
				},
				footer: {
					explore: "Khám phá",
					help: "Trợ giúp & pháp lý",
					tagline: "ESP, wallhack, radar và Aimbot undetected cho Tarkov — thanh toán qua Zadeyo.",
				},
				images: {
					hero: "TarkovHack hero — ESP and aimbot overlay in Escape from Tarkov",
					espWallhack: "Wallhack outlines showing PMCs and Scavs through walls",
					aimbotCombat: "Soft aim assist overlay during an Escape from Tarkov raid",
					squadFight: "TarkovHack combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Tarkov raid",
					headerArt: "Aimbot view and bone priority controls for Tarkov",
					cheatsPackage: "2D radar threat overlay for Escape from Tarkov",
					rebootFight: "Aimbot assist during a Tarkov firefight",
					battleRoyale: "TarkovHack in-raid overview for Windows PC",
					battleRoyaleIsland: "ESP markers for loot and extracts in Tarkov",
				},
			},
			pages: {
				home: {
					title: "TarkovHack 2026 | ESP, Wallhack & Aimbot",
					description: "Cheat Escape from Tarkov undetected cho Escape from Tarkov trên PC. ESP wallhack, radar hack, Aimbot, bảo trì BattlEye anti-cheat. Giao hàng kỹ thuật số tức",
					h1: "TarkovHack — Undetected ESP, Wallhack & Aimbot",
					intro: "Gói undetected Escape from Tarkov trên Windows PC: ESP wallhack, radar, Aimbot với bảo trì BattlEye anti-cheat.",
					imageAlt: "Tarkov ESP player tags hack",
					galleryTitle: "Thư viện TarkovHack — ESP, Aimbot, wallhack",
					heroImage: "/images/tarkov-cheats-esp.webp",
					ctaPrimary: "Mua TarkovHack",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Vì sao chọn TarkovHack 2026",
							paragraphs: [
								"TarkovHack cung cấp ESP wallhack, radar hack và tarkov aimbot undetected cho Tarkov trên PC Windows. Lý tưởng đọc squad địch trong BR và scav-run.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye anti-cheat.",
							],
						},
						{
							h2: "ESP wallhack, radar, Aimbot trong một giấy phép",
							paragraphs: [
								"TarkovHack cung cấp ESP wallhack, radar hack và tarkov aimbot undetected cho Tarkov trên PC Windows. Một giấy phép thay vì công cụ riêng.",
								"Kiểm tra Updates sau bản vá BattlEye anti-cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
							],
						},
					],
				},
				"tarkov-esp": {
					title: "ESP Tarkov | Player Boxes & Wallhack",
					description: "ESP Tarkov: player boxes, loot markers, and wallhack overlays. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "ESP Tarkov",
					intro: "TarkovHack cung cấp ESP wallhack, radar hack và tarkov aimbot undetected cho Tarkov trên PC Windows. ESP Tarkov.",
					imageAlt: "Tarkov ESP player boxes and distance readouts in a raid",
					galleryTitle: "ESP Tarkov",
					heroImage: "/images/tarkov-cheats-radar.webp",
					ctaPrimary: "Mua TarkovHack",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/tarkov-cheats/",
					sections: [
						{
							h2: "ESP Tarkov",
							paragraphs: [
								"TarkovHack cung cấp ESP wallhack, radar hack và tarkov aimbot undetected cho Tarkov trên PC Windows. player boxes, loot markers, and wallhack overlays.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá BattlEye anti-cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye anti-cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye anti-cheat.",
								"support@tarkovhack.com cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				"tarkov-aimbot": {
					title: "Aimbot Tarkov | Soft Aim Controls",
					description: "Aimbot Tarkov: soft aim, FOV, and per-weapon Aimbot profiles. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Aimbot Tarkov",
					intro: "TarkovHack cung cấp ESP wallhack, radar hack và tarkov aimbot undetected cho Tarkov trên PC Windows. Aimbot Tarkov.",
					imageAlt: "Tarkov aimbot and soft aim controls on Windows PC",
					galleryTitle: "Aimbot Tarkov",
					heroImage: "/images/tarkov-cheats-aimbot.webp",
					ctaPrimary: "Mua TarkovHack",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/tarkov-esp/",
					sections: [
						{
							h2: "Aimbot Tarkov",
							paragraphs: [
								"TarkovHack cung cấp ESP wallhack, radar hack và tarkov aimbot undetected cho Tarkov trên PC Windows. soft aim, FOV, and per-weapon Aimbot profiles.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá BattlEye anti-cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye anti-cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye anti-cheat.",
								"support@tarkovhack.com cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				features: {
					title: "Tính năng | Full Feature List",
					description: "Tính năng: ESP, soft aim, radar controls. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Tính năng",
					intro: "TarkovHack cung cấp ESP wallhack, radar hack và tarkov aimbot undetected cho Tarkov trên PC Windows. Tính năng.",
					imageAlt: "TarkovHack features — ESP, soft aim, and radar screenshots",
					galleryTitle: "Tính năng",
					heroImage: "/images/tarkov-cheats-aimbot-view.webp",
					ctaPrimary: "Mua TarkovHack",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Tính năng",
							paragraphs: [
								"TarkovHack cung cấp ESP wallhack, radar hack và tarkov aimbot undetected cho Tarkov trên PC Windows. ESP, soft aim, radar controls.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá BattlEye anti-cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye anti-cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye anti-cheat.",
								"support@tarkovhack.com cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				pricing: {
					title: "Giá | Monthly & Lifetime",
					description: "Giá: $35 monthly or $150 lifetime licenses. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Giá",
					intro: "TarkovHack cung cấp ESP wallhack, radar hack và tarkov aimbot undetected cho Tarkov trên PC Windows. Giá.",
					imageAlt: "TarkovHack store plans for monthly and lifetime licenses",
					galleryTitle: "Giá",
					heroImage: "/images/tarkov-cheats-raid.webp",
					ctaPrimary: "Mua TarkovHack",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Giá",
							paragraphs: [
								"TarkovHack cung cấp ESP wallhack, radar hack và tarkov aimbot undetected cho Tarkov trên PC Windows. $35 monthly or $150 lifetime licenses.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá BattlEye anti-cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye anti-cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye anti-cheat.",
								"support@tarkovhack.com cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				setup: {
					title: "Cài đặt | PC Setup Guide",
					description: "Cài đặt: Windows PC activation and first-launch setup. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Cài đặt",
					intro: "TarkovHack cung cấp ESP wallhack, radar hack và tarkov aimbot undetected cho Tarkov trên PC Windows. Cài đặt.",
					imageAlt: "TarkovHack setup guide screenshot for Windows PC",
					galleryTitle: "Cài đặt",
					heroImage: "/images/tarkov-cheats-radar.webp",
					ctaPrimary: "Mua TarkovHack",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Cài đặt",
							paragraphs: [
								"TarkovHack cung cấp ESP wallhack, radar hack và tarkov aimbot undetected cho Tarkov trên PC Windows. Windows PC activation and first-launch setup.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá BattlEye anti-cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye anti-cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye anti-cheat.",
								"support@tarkovhack.com cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				updates: {
					title: "Cập nhật | BattlEye Maintenance Log",
					description: "Cập nhật: BattlEye patch status and rebuild notes. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Cập nhật",
					intro: "TarkovHack cung cấp ESP wallhack, radar hack và tarkov aimbot undetected cho Tarkov trên PC Windows. Cập nhật.",
					imageAlt: "TarkovHack live status after BattlEye and game patches",
					galleryTitle: "Cập nhật",
					heroImage: "/images/tarkov-cheats-esp.webp",
					ctaPrimary: "Mua TarkovHack",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/tarkov-cheats/",
					sections: [
						{
							h2: "Cập nhật",
							paragraphs: [
								"TarkovHack cung cấp ESP wallhack, radar hack và tarkov aimbot undetected cho Tarkov trên PC Windows. BattlEye patch status and rebuild notes.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá BattlEye anti-cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye anti-cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye anti-cheat.",
								"support@tarkovhack.com cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Common Answers",
					description: "FAQ: ESP, soft aim, delivery, and BattlEye questions. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "FAQ",
					intro: "TarkovHack cung cấp ESP wallhack, radar hack và tarkov aimbot undetected cho Tarkov trên PC Windows. FAQ.",
					imageAlt: "TarkovHack FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/tarkov-cheats-aimbot-view.webp",
					ctaPrimary: "Mua TarkovHack",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"TarkovHack cung cấp ESP wallhack, radar hack và tarkov aimbot undetected cho Tarkov trên PC Windows. ESP, soft aim, delivery, and BattlEye questions.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá BattlEye anti-cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye anti-cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye anti-cheat.",
								"support@tarkovhack.com cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				support: {
					title: "Hỗ trợ | Help & Contact",
					description: "Hỗ trợ: order help and license support contact. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Hỗ trợ",
					intro: "TarkovHack cung cấp ESP wallhack, radar hack và tarkov aimbot undetected cho Tarkov trên PC Windows. Hỗ trợ.",
					imageAlt: "TarkovHack support page for license and setup help",
					galleryTitle: "Hỗ trợ",
					heroImage: "/images/tarkov-cheats-raid.webp",
					ctaPrimary: "Mua TarkovHack",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Hỗ trợ",
							paragraphs: [
								"TarkovHack cung cấp ESP wallhack, radar hack và tarkov aimbot undetected cho Tarkov trên PC Windows. order help and license support contact.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá BattlEye anti-cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye anti-cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye anti-cheat.",
								"support@tarkovhack.com cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				undetected: {
					title: "Cheat undetected | BattlEye Safe Status",
					description: "Cheat undetected: undetected maintenance after BattlEye anti-cheat patches. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Cheat undetected",
					intro: "TarkovHack cung cấp ESP wallhack, radar hack và tarkov aimbot undetected cho Tarkov trên PC Windows. Cheat undetected.",
					imageAlt: "TarkovHack undetected status overview for Windows PC",
					galleryTitle: "Cheat undetected",
					heroImage: "/images/tarkov-cheats-wallhack.webp",
					ctaPrimary: "Mua TarkovHack",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/tarkov-cheats/",
					sections: [
						{
							h2: "Cheat undetected",
							paragraphs: [
								"TarkovHack cung cấp ESP wallhack, radar hack và tarkov aimbot undetected cho Tarkov trên PC Windows. undetected maintenance after BattlEye anti-cheat patches.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá BattlEye anti-cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye anti-cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye anti-cheat.",
								"support@tarkovhack.com cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				wallhack: {
					title: "Wallhack Tarkov | ESP Visibility",
					description: "Wallhack Tarkov: wallhack ESP for players, loot, and distance. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Wallhack Tarkov",
					intro: "TarkovHack cung cấp ESP wallhack, radar hack và tarkov aimbot undetected cho Tarkov trên PC Windows. Wallhack Tarkov.",
					imageAlt: "Tarkov wallhack visibility through walls in a raid",
					galleryTitle: "Wallhack Tarkov",
					heroImage: "/images/tarkov-cheats-wallhack.webp",
					ctaPrimary: "Mua TarkovHack",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/tarkov-esp/",
					sections: [
						{
							h2: "Wallhack Tarkov",
							paragraphs: [
								"TarkovHack cung cấp ESP wallhack, radar hack và tarkov aimbot undetected cho Tarkov trên PC Windows. wallhack ESP for players, loot, and distance.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá BattlEye anti-cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye anti-cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye anti-cheat.",
								"support@tarkovhack.com cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				radar: {
					title: "Radar hack | 2D Threat Overlay",
					description: "Radar hack: 2D radar cues for flanks and rotations. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Radar hack",
					intro: "TarkovHack cung cấp ESP wallhack, radar hack và tarkov aimbot undetected cho Tarkov trên PC Windows. Radar hack.",
					imageAlt: "Tarkov 2D radar overlay showing nearby threats",
					galleryTitle: "Radar hack",
					heroImage: "/images/tarkov-cheats-radar.webp",
					ctaPrimary: "Mua TarkovHack",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/tarkov-esp/",
					sections: [
						{
							h2: "Radar hack",
							paragraphs: [
								"TarkovHack cung cấp ESP wallhack, radar hack và tarkov aimbot undetected cho Tarkov trên PC Windows. 2D radar cues for flanks and rotations.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá BattlEye anti-cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye anti-cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye anti-cheat.",
								"support@tarkovhack.com cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				battleye: {
					title: "Bypass BattlEye | Patch Maintenance",
					description: "Bypass BattlEye: how BattlEye updates are handled for Escape from Tarkov hacks. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Bypass BattlEye",
					intro: "TarkovHack cung cấp ESP wallhack, radar hack và tarkov aimbot undetected cho Tarkov trên PC Windows. Bypass BattlEye.",
					imageAlt: "TarkovHack maintenance after a BattlEye patch",
					galleryTitle: "Bypass BattlEye",
					heroImage: "/images/tarkov-cheats-aimbot.webp",
					ctaPrimary: "Mua TarkovHack",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Bypass BattlEye",
							paragraphs: [
								"TarkovHack cung cấp ESP wallhack, radar hack và tarkov aimbot undetected cho Tarkov trên PC Windows. how BattlEye updates are handled for Escape from Tarkov hacks.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá BattlEye anti-cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye anti-cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye anti-cheat.",
								"support@tarkovhack.com cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Cheat Tarkov 2026 | Buyer Guide",
					description: "Cheat Tarkov 2026: 2026 TarkovHack checklist before checkout. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Cheat Tarkov 2026",
					intro: "TarkovHack cung cấp ESP wallhack, radar hack và tarkov aimbot undetected cho Tarkov trên PC Windows. Cheat Tarkov 2026.",
					imageAlt: "TarkovHack product overview for Escape from Tarkov",
					galleryTitle: "Cheat Tarkov 2026",
					heroImage: "/images/tarkov-cheats-esp.webp",
					ctaPrimary: "Mua TarkovHack",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/tarkov-cheats/",
					sections: [
						{
							h2: "Cheat Tarkov 2026",
							paragraphs: [
								"TarkovHack cung cấp ESP wallhack, radar hack và tarkov aimbot undetected cho Tarkov trên PC Windows. 2026 TarkovHack checklist before checkout.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá BattlEye anti-cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye anti-cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye anti-cheat.",
								"support@tarkovhack.com cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				hacks: {
					title: "Cheat Tarkov | ESP Aimbot Guide",
					description: "Cheat Tarkov: the Escape from Tarkov hacks pillar for ESP and Aimbot. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Cheat Tarkov",
					intro: "TarkovHack cung cấp ESP wallhack, radar hack và tarkov aimbot undetected cho Tarkov trên PC Windows. Cheat Tarkov.",
					imageAlt: "TarkovHack product page — ESP, aimbot, and radar",
					galleryTitle: "Cheat Tarkov",
					heroImage: "/images/tarkov-cheats-raid.webp",
					ctaPrimary: "Mua TarkovHack",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Cheat Tarkov",
							paragraphs: [
								"TarkovHack cung cấp ESP wallhack, radar hack và tarkov aimbot undetected cho Tarkov trên PC Windows. the Escape from Tarkov hacks pillar for ESP and Aimbot.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá BattlEye anti-cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye anti-cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye anti-cheat.",
								"support@tarkovhack.com cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Tải Cheat Tarkov | Instant Access",
					description: "Tải Cheat Tarkov: digital license download after payment. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Tải Cheat Tarkov",
					intro: "TarkovHack cung cấp ESP wallhack, radar hack và tarkov aimbot undetected cho Tarkov trên PC Windows. Tải Cheat Tarkov.",
					imageAlt: "TarkovHack download and install delivery flow",
					galleryTitle: "Tải Cheat Tarkov",
					heroImage: "/images/tarkov-cheats-raid.webp",
					ctaPrimary: "Mua TarkovHack",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Tải Cheat Tarkov",
							paragraphs: [
								"TarkovHack cung cấp ESP wallhack, radar hack và tarkov aimbot undetected cho Tarkov trên PC Windows. digital license download after payment.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá BattlEye anti-cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye anti-cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye anti-cheat.",
								"support@tarkovhack.com cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Mod menu Tarkov | In-Game Toggles",
					description: "Mod menu Tarkov: in-client ESP and soft aim toggles. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Mod menu Tarkov",
					intro: "TarkovHack cung cấp ESP wallhack, radar hack và tarkov aimbot undetected cho Tarkov trên PC Windows. Mod menu Tarkov.",
					imageAlt: "TarkovHack in-game menu controls",
					galleryTitle: "Mod menu Tarkov",
					heroImage: "/images/tarkov-cheats-radar.webp",
					ctaPrimary: "Mua TarkovHack",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Mod menu Tarkov",
							paragraphs: [
								"TarkovHack cung cấp ESP wallhack, radar hack và tarkov aimbot undetected cho Tarkov trên PC Windows. in-client ESP and soft aim toggles.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá BattlEye anti-cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye anti-cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye anti-cheat.",
								"support@tarkovhack.com cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Soft aim Tarkov | Smooth Aim Settings",
					description: "Soft aim Tarkov: smooth soft aim settings for Windows PC. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Soft aim Tarkov",
					intro: "TarkovHack cung cấp ESP wallhack, radar hack và tarkov aimbot undetected cho Tarkov trên PC Windows. Soft aim Tarkov.",
					imageAlt: "Tarkov soft aim FOV and smoothness settings",
					galleryTitle: "Soft aim Tarkov",
					heroImage: "/images/tarkov-cheats-aimbot-view.webp",
					ctaPrimary: "Mua TarkovHack",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/tarkov-aimbot/",
					sections: [
						{
							h2: "Soft aim Tarkov",
							paragraphs: [
								"TarkovHack cung cấp ESP wallhack, radar hack và tarkov aimbot undetected cho Tarkov trên PC Windows. smooth soft aim settings for Windows PC.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá BattlEye anti-cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye anti-cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye anti-cheat.",
								"support@tarkovhack.com cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Cheat Tarkov tốt nhất | Buyer Checklist",
					description: "Cheat Tarkov tốt nhất: what to compare before buying TarkovHack. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Cheat Tarkov tốt nhất",
					intro: "TarkovHack cung cấp ESP wallhack, radar hack và tarkov aimbot undetected cho Tarkov trên PC Windows. Cheat Tarkov tốt nhất.",
					imageAlt: "TarkovHack overview for Escape from Tarkov on PC",
					galleryTitle: "Cheat Tarkov tốt nhất",
					heroImage: "/images/tarkov-cheats-esp.webp",
					ctaPrimary: "Mua TarkovHack",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Cheat Tarkov tốt nhất",
							paragraphs: [
								"TarkovHack cung cấp ESP wallhack, radar hack và tarkov aimbot undetected cho Tarkov trên PC Windows. what to compare before buying TarkovHack.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá BattlEye anti-cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye anti-cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye anti-cheat.",
								"support@tarkovhack.com cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Hack aimbot Tarkov | Soft Aim Assist",
					description: "Hack aimbot Tarkov: undetected Aimbot hack assist for Escape from Tarkov. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Hack aimbot Tarkov",
					intro: "TarkovHack cung cấp ESP wallhack, radar hack và tarkov aimbot undetected cho Tarkov trên PC Windows. Hack aimbot Tarkov.",
					imageAlt: "Tarkov aimbot hack controls and bone priority",
					galleryTitle: "Hack aimbot Tarkov",
					heroImage: "/images/tarkov-cheats-aimbot-view.webp",
					ctaPrimary: "Mua TarkovHack",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/tarkov-aimbot/",
					sections: [
						{
							h2: "Hack aimbot Tarkov",
							paragraphs: [
								"TarkovHack cung cấp ESP wallhack, radar hack và tarkov aimbot undetected cho Tarkov trên PC Windows. undetected Aimbot hack assist for Escape from Tarkov.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá BattlEye anti-cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye anti-cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye anti-cheat.",
								"support@tarkovhack.com cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Hack ESP Tarkov | Boxes & Loot",
					description: "Hack ESP Tarkov: ESP hack boxes, loot pins, and distance. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Hack ESP Tarkov",
					intro: "TarkovHack cung cấp ESP wallhack, radar hack và tarkov aimbot undetected cho Tarkov trên PC Windows. Hack ESP Tarkov.",
					imageAlt: "Tarkov ESP hack boxes and loot markers",
					galleryTitle: "Hack ESP Tarkov",
					heroImage: "/images/tarkov-cheats-wallhack.webp",
					ctaPrimary: "Mua TarkovHack",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/tarkov-esp/",
					sections: [
						{
							h2: "Hack ESP Tarkov",
							paragraphs: [
								"TarkovHack cung cấp ESP wallhack, radar hack và tarkov aimbot undetected cho Tarkov trên PC Windows. ESP hack boxes, loot pins, and distance.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá BattlEye anti-cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye anti-cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye anti-cheat.",
								"support@tarkovhack.com cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Unlock all Tarkov | What It Means",
					description: "Unlock all Tarkov: unlock-all searches vs real ESP and Aimbot tools. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Unlock all Tarkov",
					intro: "TarkovHack cung cấp ESP wallhack, radar hack và tarkov aimbot undetected cho Tarkov trên PC Windows. Unlock all Tarkov.",
					imageAlt: "TarkovHack license features overview",
					galleryTitle: "Unlock all Tarkov",
					heroImage: "/images/tarkov-cheats-radar.webp",
					ctaPrimary: "Mua TarkovHack",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unlock all Tarkov",
							paragraphs: [
								"TarkovHack cung cấp ESP wallhack, radar hack và tarkov aimbot undetected cho Tarkov trên PC Windows. unlock-all searches vs real ESP and Aimbot tools.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá BattlEye anti-cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye anti-cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye anti-cheat.",
								"support@tarkovhack.com cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				privacy: {
					title: "Chính sách bảo mật | TarkovHack",
					description: "Chính sách bảo mật for TarkovHack — ESP wallhack, Aimbot, PC Windows.",
					h1: "Chính sách bảo mật",
					intro: "TarkovHack cung cấp ESP wallhack, radar hack và tarkov aimbot undetected cho Tarkov trên PC Windows. Chính sách bảo mật for tarkovhack.com and Escape from Tarkov licenses.",
					imageAlt: "TarkovHack",
					galleryTitle: "TarkovHack",
					heroImage: "/images/tarkov-cheats-aimbot.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read terms",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we collect",
							paragraphs: [
								"TarkovHack cung cấp ESP wallhack, radar hack và tarkov aimbot undetected cho Tarkov trên PC Windows. Contact email, Zadeyo order references, and basic site security data.",
								"Payment details are processed by Zadeyo checkout — not stored on tarkovhack.com.",
							],
						},
						{
							h2: "How we use data",
							paragraphs: [
								"TarkovHack cung cấp ESP wallhack, radar hack và tarkov aimbot undetected cho Tarkov trên PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Kiểm tra Updates sau bản vá BattlEye anti-cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
							],
						},
						{
							h2: "Your rights",
							paragraphs: [
								"support@tarkovhack.com cho hỗ trợ và pháp lý.",
								"Email: support@tarkovhack.com",
							],
						},
					],
				},
				refund: {
					title: "Chính sách hoàn tiền | TarkovHack",
					description: "Chính sách hoàn tiền for TarkovHack — ESP wallhack, Aimbot, PC Windows.",
					h1: "Chính sách hoàn tiền",
					intro: "TarkovHack cung cấp ESP wallhack, radar hack và tarkov aimbot undetected cho Tarkov trên PC Windows. Chính sách hoàn tiền for tarkovhack.com and Escape from Tarkov licenses.",
					imageAlt: "TarkovHack",
					galleryTitle: "TarkovHack",
					heroImage: "/images/tarkov-cheats-raid.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digital delivery",
							paragraphs: [
								"TarkovHack cung cấp ESP wallhack, radar hack và tarkov aimbot undetected cho Tarkov trên PC Windows. Contact email, Zadeyo order references, and basic site security data.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye anti-cheat.",
							],
						},
						{
							h2: "Refund approval",
							paragraphs: [
								"TarkovHack cung cấp ESP wallhack, radar hack và tarkov aimbot undetected cho Tarkov trên PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Kiểm tra Updates sau bản vá BattlEye anti-cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
							],
						},
						{
							h2: "How to request",
							paragraphs: [
								"support@tarkovhack.com cho hỗ trợ và pháp lý.",
								"Email: support@tarkovhack.com",
							],
						},
					],
				},
				terms: {
					title: "Điều khoản sử dụng | TarkovHack",
					description: "Điều khoản sử dụng for TarkovHack — ESP wallhack, Aimbot, PC Windows.",
					h1: "Điều khoản sử dụng",
					intro: "TarkovHack cung cấp ESP wallhack, radar hack và tarkov aimbot undetected cho Tarkov trên PC Windows. Điều khoản sử dụng for tarkovhack.com and Escape from Tarkov licenses.",
					imageAlt: "TarkovHack",
					galleryTitle: "TarkovHack",
					heroImage: "/images/tarkov-cheats-aimbot-view.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Acceptance of terms",
							paragraphs: [
								"TarkovHack cung cấp ESP wallhack, radar hack và tarkov aimbot undetected cho Tarkov trên PC Windows. Contact email, Zadeyo order references, and basic site security data.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì BattlEye anti-cheat.",
							],
						},
						{
							h2: "Risk disclaimer",
							paragraphs: [
								"TarkovHack cung cấp ESP wallhack, radar hack và tarkov aimbot undetected cho Tarkov trên PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "Policy changes",
							paragraphs: [
								"support@tarkovhack.com cho hỗ trợ và pháp lý.",
								"Email: support@tarkovhack.com",
							],
						},
					],
				},
			},
		},
		uk: {
			ui: {
				nav: {
					home: "Головна",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Функції",
					pricing: "Ціни",
					setup: "Встановлення",
					updates: "Оновлення",
					faq: "FAQ",
					buyNow: "Купити",
				},
				hero: {
					accent: "Undetected чіти Tarkov",
					accentShort: "TarkovHack",
					subtitle: "ESP wallhack, radar hack і Aimbot для Tarkov на Windows PC — обслуговування BattlEye anti-cheat включено.",
					subtitleShort: "ESP, radar і Aimbot для Tarkov PC",
					buyNow: "Купити",
					seeFeatures: "Дивитися функції",
				},
				trust: {
					status: "Онлайн",
					statusNote: "Пакет TarkovHack активний для Tarkov на Windows PC.",
					statusShort: "Активний",
					delivery: "Миттєва цифрова доставка",
					platform: "Windows 10 і 11",
					antiCheat: "Підтримка обслуговування BattlEye anti-cheat",
					antiCheatShort: "BattlEye anti-cheat підтримка",
				},
				product: {
					title: "TarkovHack",
					addToCart: "До кошика",
					monthly: "Щомісяця",
					lifetime: "Назавжди",
					available: "Доступно зараз",
					gameBadge: "Tarkov",
					platformBadge: "Windows PC",
					statusBadge: "Undetected пакет",
				},
				reviews: {
					title: "Що кажуть гравці",
					subtitle: "Останні відгуки покупців TarkovHack",
					outOf: "з 5",
					countLabel: "відгуків",
				},
				common: {
					buyNow: "Купити",
					readGuide: "Читати гайд",
					language: "Мова",
					officialLanguageNote: "Англійська — офіційна мова. Інші версії перекладені для глобального SEO.",
					relatedPages: "Пов'язані сторінки",
				},
				footer: {
					explore: "Огляд",
					help: "Допомога та право",
					tagline: "Undetected ESP, wallhack, radar і Aimbot для Tarkov — оплата через Zadeyo.",
				},
				images: {
					hero: "TarkovHack hero — ESP and aimbot overlay in Escape from Tarkov",
					espWallhack: "Wallhack outlines showing PMCs and Scavs through walls",
					aimbotCombat: "Soft aim assist overlay during an Escape from Tarkov raid",
					squadFight: "TarkovHack combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Tarkov raid",
					headerArt: "Aimbot view and bone priority controls for Tarkov",
					cheatsPackage: "2D radar threat overlay for Escape from Tarkov",
					rebootFight: "Aimbot assist during a Tarkov firefight",
					battleRoyale: "TarkovHack in-raid overview for Windows PC",
					battleRoyaleIsland: "ESP markers for loot and extracts in Tarkov",
				},
			},
			pages: {
				home: {
					title: "TarkovHack 2026 | ESP, Wallhack і Aimbot",
					description: "Undetected чіти Escape from Tarkov для Escape from Tarkov на PC. ESP wallhack, radar hack, Aimbot, обслуговування BattlEye anti-cheat. Мгновенная цифровая",
					h1: "TarkovHack — Undetected ESP, Wallhack і Aimbot",
					intro: "Undetected пакет для Escape from Tarkov на Windows PC: ESP wallhack, radar, Aimbot з обслуговуванням BattlEye anti-cheat.",
					imageAlt: "Tarkov ESP player tags hack",
					galleryTitle: "Галерея TarkovHack — ESP, Aimbot, wallhack",
					heroImage: "/images/tarkov-cheats-esp.webp",
					ctaPrimary: "Купити TarkovHack",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Чому TarkovHack у 2026",
							paragraphs: [
								"TarkovHack об'єднує ESP wallhack, radar hack і tarkov aimbot у undetected пакеті для Tarkov на Windows PC. Ідеально для читання ворожих загонів у BR і scav-run.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye anti-cheat.",
							],
						},
						{
							h2: "ESP wallhack, radar і Aimbot в одній ліцензії",
							paragraphs: [
								"TarkovHack об'єднує ESP wallhack, radar hack і tarkov aimbot у undetected пакеті для Tarkov на Windows PC. Одна ліцензія замість окремих інструментів.",
								"Перевіряйте Updates після патчів BattlEye anti-cheat. Жоден чит не гарантує постійний undetected статус.",
							],
						},
					],
				},
				"tarkov-esp": {
					title: "ESP Tarkov | Player Boxes & Wallhack",
					description: "ESP Tarkov: player boxes, loot markers, and wallhack overlays. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "ESP Tarkov",
					intro: "TarkovHack об'єднує ESP wallhack, radar hack і tarkov aimbot у undetected пакеті для Tarkov на Windows PC. ESP Tarkov.",
					imageAlt: "Tarkov ESP player boxes and distance readouts in a raid",
					galleryTitle: "ESP Tarkov",
					heroImage: "/images/tarkov-cheats-radar.webp",
					ctaPrimary: "Купити TarkovHack",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/tarkov-cheats/",
					sections: [
						{
							h2: "ESP Tarkov",
							paragraphs: [
								"TarkovHack об'єднує ESP wallhack, radar hack і tarkov aimbot у undetected пакеті для Tarkov на Windows PC. player boxes, loot markers, and wallhack overlays.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів BattlEye anti-cheat. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye anti-cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye anti-cheat.",
								"support@tarkovhack.com для підтримки та правових питань.",
							],
						},
					],
				},
				"tarkov-aimbot": {
					title: "Aimbot Tarkov | Soft Aim Controls",
					description: "Aimbot Tarkov: soft aim, FOV, and per-weapon Aimbot profiles. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Aimbot Tarkov",
					intro: "TarkovHack об'єднує ESP wallhack, radar hack і tarkov aimbot у undetected пакеті для Tarkov на Windows PC. Aimbot Tarkov.",
					imageAlt: "Tarkov aimbot and soft aim controls on Windows PC",
					galleryTitle: "Aimbot Tarkov",
					heroImage: "/images/tarkov-cheats-aimbot.webp",
					ctaPrimary: "Купити TarkovHack",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/tarkov-esp/",
					sections: [
						{
							h2: "Aimbot Tarkov",
							paragraphs: [
								"TarkovHack об'єднує ESP wallhack, radar hack і tarkov aimbot у undetected пакеті для Tarkov на Windows PC. soft aim, FOV, and per-weapon Aimbot profiles.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів BattlEye anti-cheat. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye anti-cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye anti-cheat.",
								"support@tarkovhack.com для підтримки та правових питань.",
							],
						},
					],
				},
				features: {
					title: "Функції | Full Feature List",
					description: "Функції: ESP, soft aim, radar controls. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Функції",
					intro: "TarkovHack об'єднує ESP wallhack, radar hack і tarkov aimbot у undetected пакеті для Tarkov на Windows PC. Функції.",
					imageAlt: "TarkovHack features — ESP, soft aim, and radar screenshots",
					galleryTitle: "Функції",
					heroImage: "/images/tarkov-cheats-aimbot-view.webp",
					ctaPrimary: "Купити TarkovHack",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Функції",
							paragraphs: [
								"TarkovHack об'єднує ESP wallhack, radar hack і tarkov aimbot у undetected пакеті для Tarkov на Windows PC. ESP, soft aim, radar controls.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів BattlEye anti-cheat. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye anti-cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye anti-cheat.",
								"support@tarkovhack.com для підтримки та правових питань.",
							],
						},
					],
				},
				pricing: {
					title: "Ціни | Monthly & Lifetime",
					description: "Ціни: $35 monthly or $150 lifetime licenses. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Ціни",
					intro: "TarkovHack об'єднує ESP wallhack, radar hack і tarkov aimbot у undetected пакеті для Tarkov на Windows PC. Ціни.",
					imageAlt: "TarkovHack store plans for monthly and lifetime licenses",
					galleryTitle: "Ціни",
					heroImage: "/images/tarkov-cheats-raid.webp",
					ctaPrimary: "Купити TarkovHack",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Ціни",
							paragraphs: [
								"TarkovHack об'єднує ESP wallhack, radar hack і tarkov aimbot у undetected пакеті для Tarkov на Windows PC. $35 monthly or $150 lifetime licenses.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів BattlEye anti-cheat. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye anti-cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye anti-cheat.",
								"support@tarkovhack.com для підтримки та правових питань.",
							],
						},
					],
				},
				setup: {
					title: "Встановлення | PC Setup Guide",
					description: "Встановлення: Windows PC activation and first-launch setup. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Встановлення",
					intro: "TarkovHack об'єднує ESP wallhack, radar hack і tarkov aimbot у undetected пакеті для Tarkov на Windows PC. Встановлення.",
					imageAlt: "TarkovHack setup guide screenshot for Windows PC",
					galleryTitle: "Встановлення",
					heroImage: "/images/tarkov-cheats-radar.webp",
					ctaPrimary: "Купити TarkovHack",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Встановлення",
							paragraphs: [
								"TarkovHack об'єднує ESP wallhack, radar hack і tarkov aimbot у undetected пакеті для Tarkov на Windows PC. Windows PC activation and first-launch setup.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів BattlEye anti-cheat. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye anti-cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye anti-cheat.",
								"support@tarkovhack.com для підтримки та правових питань.",
							],
						},
					],
				},
				updates: {
					title: "Оновлення | BattlEye Maintenance Log",
					description: "Оновлення: BattlEye patch status and rebuild notes. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Оновлення",
					intro: "TarkovHack об'єднує ESP wallhack, radar hack і tarkov aimbot у undetected пакеті для Tarkov на Windows PC. Оновлення.",
					imageAlt: "TarkovHack live status after BattlEye and game patches",
					galleryTitle: "Оновлення",
					heroImage: "/images/tarkov-cheats-esp.webp",
					ctaPrimary: "Купити TarkovHack",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/tarkov-cheats/",
					sections: [
						{
							h2: "Оновлення",
							paragraphs: [
								"TarkovHack об'єднує ESP wallhack, radar hack і tarkov aimbot у undetected пакеті для Tarkov на Windows PC. BattlEye patch status and rebuild notes.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів BattlEye anti-cheat. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye anti-cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye anti-cheat.",
								"support@tarkovhack.com для підтримки та правових питань.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Common Answers",
					description: "FAQ: ESP, soft aim, delivery, and BattlEye questions. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "FAQ",
					intro: "TarkovHack об'єднує ESP wallhack, radar hack і tarkov aimbot у undetected пакеті для Tarkov на Windows PC. FAQ.",
					imageAlt: "TarkovHack FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/tarkov-cheats-aimbot-view.webp",
					ctaPrimary: "Купити TarkovHack",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"TarkovHack об'єднує ESP wallhack, radar hack і tarkov aimbot у undetected пакеті для Tarkov на Windows PC. ESP, soft aim, delivery, and BattlEye questions.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів BattlEye anti-cheat. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye anti-cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye anti-cheat.",
								"support@tarkovhack.com для підтримки та правових питань.",
							],
						},
					],
				},
				support: {
					title: "Підтримка | Help & Contact",
					description: "Підтримка: order help and license support contact. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Підтримка",
					intro: "TarkovHack об'єднує ESP wallhack, radar hack і tarkov aimbot у undetected пакеті для Tarkov на Windows PC. Підтримка.",
					imageAlt: "TarkovHack support page for license and setup help",
					galleryTitle: "Підтримка",
					heroImage: "/images/tarkov-cheats-raid.webp",
					ctaPrimary: "Купити TarkovHack",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Підтримка",
							paragraphs: [
								"TarkovHack об'єднує ESP wallhack, radar hack і tarkov aimbot у undetected пакеті для Tarkov на Windows PC. order help and license support contact.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів BattlEye anti-cheat. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye anti-cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye anti-cheat.",
								"support@tarkovhack.com для підтримки та правових питань.",
							],
						},
					],
				},
				undetected: {
					title: "Undetected чіти | BattlEye Safe Status",
					description: "Undetected чіти: undetected maintenance after BattlEye anti-cheat patches. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Undetected чіти",
					intro: "TarkovHack об'єднує ESP wallhack, radar hack і tarkov aimbot у undetected пакеті для Tarkov на Windows PC. Undetected чіти.",
					imageAlt: "TarkovHack undetected status overview for Windows PC",
					galleryTitle: "Undetected чіти",
					heroImage: "/images/tarkov-cheats-wallhack.webp",
					ctaPrimary: "Купити TarkovHack",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/tarkov-cheats/",
					sections: [
						{
							h2: "Undetected чіти",
							paragraphs: [
								"TarkovHack об'єднує ESP wallhack, radar hack і tarkov aimbot у undetected пакеті для Tarkov на Windows PC. undetected maintenance after BattlEye anti-cheat patches.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів BattlEye anti-cheat. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye anti-cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye anti-cheat.",
								"support@tarkovhack.com для підтримки та правових питань.",
							],
						},
					],
				},
				wallhack: {
					title: "Wallhack Tarkov | ESP Visibility",
					description: "Wallhack Tarkov: wallhack ESP for players, loot, and distance. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Wallhack Tarkov",
					intro: "TarkovHack об'єднує ESP wallhack, radar hack і tarkov aimbot у undetected пакеті для Tarkov на Windows PC. Wallhack Tarkov.",
					imageAlt: "Tarkov wallhack visibility through walls in a raid",
					galleryTitle: "Wallhack Tarkov",
					heroImage: "/images/tarkov-cheats-wallhack.webp",
					ctaPrimary: "Купити TarkovHack",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/tarkov-esp/",
					sections: [
						{
							h2: "Wallhack Tarkov",
							paragraphs: [
								"TarkovHack об'єднує ESP wallhack, radar hack і tarkov aimbot у undetected пакеті для Tarkov на Windows PC. wallhack ESP for players, loot, and distance.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів BattlEye anti-cheat. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye anti-cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye anti-cheat.",
								"support@tarkovhack.com для підтримки та правових питань.",
							],
						},
					],
				},
				radar: {
					title: "Radar hack | 2D Threat Overlay",
					description: "Radar hack: 2D radar cues for flanks and rotations. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Radar hack",
					intro: "TarkovHack об'єднує ESP wallhack, radar hack і tarkov aimbot у undetected пакеті для Tarkov на Windows PC. Radar hack.",
					imageAlt: "Tarkov 2D radar overlay showing nearby threats",
					galleryTitle: "Radar hack",
					heroImage: "/images/tarkov-cheats-radar.webp",
					ctaPrimary: "Купити TarkovHack",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/tarkov-esp/",
					sections: [
						{
							h2: "Radar hack",
							paragraphs: [
								"TarkovHack об'єднує ESP wallhack, radar hack і tarkov aimbot у undetected пакеті для Tarkov на Windows PC. 2D radar cues for flanks and rotations.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів BattlEye anti-cheat. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye anti-cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye anti-cheat.",
								"support@tarkovhack.com для підтримки та правових питань.",
							],
						},
					],
				},
				battleye: {
					title: "Bypass BattlEye | Patch Maintenance",
					description: "Bypass BattlEye: how BattlEye updates are handled for Escape from Tarkov hacks. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Bypass BattlEye",
					intro: "TarkovHack об'єднує ESP wallhack, radar hack і tarkov aimbot у undetected пакеті для Tarkov на Windows PC. Bypass BattlEye.",
					imageAlt: "TarkovHack maintenance after a BattlEye patch",
					galleryTitle: "Bypass BattlEye",
					heroImage: "/images/tarkov-cheats-aimbot.webp",
					ctaPrimary: "Купити TarkovHack",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Bypass BattlEye",
							paragraphs: [
								"TarkovHack об'єднує ESP wallhack, radar hack і tarkov aimbot у undetected пакеті для Tarkov на Windows PC. how BattlEye updates are handled for Escape from Tarkov hacks.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів BattlEye anti-cheat. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye anti-cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye anti-cheat.",
								"support@tarkovhack.com для підтримки та правових питань.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Чіти Tarkov 2026 | Buyer Guide",
					description: "Чіти Tarkov 2026: 2026 TarkovHack checklist before checkout. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Чіти Tarkov 2026",
					intro: "TarkovHack об'єднує ESP wallhack, radar hack і tarkov aimbot у undetected пакеті для Tarkov на Windows PC. Чіти Tarkov 2026.",
					imageAlt: "TarkovHack product overview for Escape from Tarkov",
					galleryTitle: "Чіти Tarkov 2026",
					heroImage: "/images/tarkov-cheats-esp.webp",
					ctaPrimary: "Купити TarkovHack",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/tarkov-cheats/",
					sections: [
						{
							h2: "Чіти Tarkov 2026",
							paragraphs: [
								"TarkovHack об'єднує ESP wallhack, radar hack і tarkov aimbot у undetected пакеті для Tarkov на Windows PC. 2026 TarkovHack checklist before checkout.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів BattlEye anti-cheat. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye anti-cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye anti-cheat.",
								"support@tarkovhack.com для підтримки та правових питань.",
							],
						},
					],
				},
				hacks: {
					title: "Чіти Tarkov | ESP Aimbot Guide",
					description: "Чіти Tarkov: the Escape from Tarkov hacks pillar for ESP and Aimbot. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Чіти Tarkov",
					intro: "TarkovHack об'єднує ESP wallhack, radar hack і tarkov aimbot у undetected пакеті для Tarkov на Windows PC. Чіти Tarkov.",
					imageAlt: "TarkovHack product page — ESP, aimbot, and radar",
					galleryTitle: "Чіти Tarkov",
					heroImage: "/images/tarkov-cheats-raid.webp",
					ctaPrimary: "Купити TarkovHack",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Чіти Tarkov",
							paragraphs: [
								"TarkovHack об'єднує ESP wallhack, radar hack і tarkov aimbot у undetected пакеті для Tarkov на Windows PC. the Escape from Tarkov hacks pillar for ESP and Aimbot.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів BattlEye anti-cheat. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye anti-cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye anti-cheat.",
								"support@tarkovhack.com для підтримки та правових питань.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Завантаження TarkovHack | Instant Access",
					description: "Завантаження TarkovHack: digital license download after payment. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Завантаження TarkovHack",
					intro: "TarkovHack об'єднує ESP wallhack, radar hack і tarkov aimbot у undetected пакеті для Tarkov на Windows PC. Завантаження TarkovHack.",
					imageAlt: "TarkovHack download and install delivery flow",
					galleryTitle: "Завантаження TarkovHack",
					heroImage: "/images/tarkov-cheats-raid.webp",
					ctaPrimary: "Купити TarkovHack",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Завантаження TarkovHack",
							paragraphs: [
								"TarkovHack об'єднує ESP wallhack, radar hack і tarkov aimbot у undetected пакеті для Tarkov на Windows PC. digital license download after payment.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів BattlEye anti-cheat. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye anti-cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye anti-cheat.",
								"support@tarkovhack.com для підтримки та правових питань.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Мод-меню Tarkov | In-Game Toggles",
					description: "Мод-меню Tarkov: in-client ESP and soft aim toggles. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Мод-меню Tarkov",
					intro: "TarkovHack об'єднує ESP wallhack, radar hack і tarkov aimbot у undetected пакеті для Tarkov на Windows PC. Мод-меню Tarkov.",
					imageAlt: "TarkovHack in-game menu controls",
					galleryTitle: "Мод-меню Tarkov",
					heroImage: "/images/tarkov-cheats-radar.webp",
					ctaPrimary: "Купити TarkovHack",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Мод-меню Tarkov",
							paragraphs: [
								"TarkovHack об'єднує ESP wallhack, radar hack і tarkov aimbot у undetected пакеті для Tarkov на Windows PC. in-client ESP and soft aim toggles.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів BattlEye anti-cheat. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye anti-cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye anti-cheat.",
								"support@tarkovhack.com для підтримки та правових питань.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Soft aim Tarkov | Smooth Aim Settings",
					description: "Soft aim Tarkov: smooth soft aim settings for Windows PC. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Soft aim Tarkov",
					intro: "TarkovHack об'єднує ESP wallhack, radar hack і tarkov aimbot у undetected пакеті для Tarkov на Windows PC. Soft aim Tarkov.",
					imageAlt: "Tarkov soft aim FOV and smoothness settings",
					galleryTitle: "Soft aim Tarkov",
					heroImage: "/images/tarkov-cheats-aimbot-view.webp",
					ctaPrimary: "Купити TarkovHack",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/tarkov-aimbot/",
					sections: [
						{
							h2: "Soft aim Tarkov",
							paragraphs: [
								"TarkovHack об'єднує ESP wallhack, radar hack і tarkov aimbot у undetected пакеті для Tarkov на Windows PC. smooth soft aim settings for Windows PC.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів BattlEye anti-cheat. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye anti-cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye anti-cheat.",
								"support@tarkovhack.com для підтримки та правових питань.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Найкращі чіти Tarkov | Buyer Checklist",
					description: "Найкращі чіти Tarkov: what to compare before buying TarkovHack. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Найкращі чіти Tarkov",
					intro: "TarkovHack об'єднує ESP wallhack, radar hack і tarkov aimbot у undetected пакеті для Tarkov на Windows PC. Найкращі чіти Tarkov.",
					imageAlt: "TarkovHack overview for Escape from Tarkov on PC",
					galleryTitle: "Найкращі чіти Tarkov",
					heroImage: "/images/tarkov-cheats-esp.webp",
					ctaPrimary: "Купити TarkovHack",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Найкращі чіти Tarkov",
							paragraphs: [
								"TarkovHack об'єднує ESP wallhack, radar hack і tarkov aimbot у undetected пакеті для Tarkov на Windows PC. what to compare before buying TarkovHack.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів BattlEye anti-cheat. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye anti-cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye anti-cheat.",
								"support@tarkovhack.com для підтримки та правових питань.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Хак aimbot Tarkov | Soft Aim Assist",
					description: "Хак aimbot Tarkov: undetected Aimbot hack assist for Escape from Tarkov. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Хак aimbot Tarkov",
					intro: "TarkovHack об'єднує ESP wallhack, radar hack і tarkov aimbot у undetected пакеті для Tarkov на Windows PC. Хак aimbot Tarkov.",
					imageAlt: "Tarkov aimbot hack controls and bone priority",
					galleryTitle: "Хак aimbot Tarkov",
					heroImage: "/images/tarkov-cheats-aimbot-view.webp",
					ctaPrimary: "Купити TarkovHack",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/tarkov-aimbot/",
					sections: [
						{
							h2: "Хак aimbot Tarkov",
							paragraphs: [
								"TarkovHack об'єднує ESP wallhack, radar hack і tarkov aimbot у undetected пакеті для Tarkov на Windows PC. undetected Aimbot hack assist for Escape from Tarkov.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів BattlEye anti-cheat. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye anti-cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye anti-cheat.",
								"support@tarkovhack.com для підтримки та правових питань.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Хак ESP Tarkov | Boxes & Loot",
					description: "Хак ESP Tarkov: ESP hack boxes, loot pins, and distance. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Хак ESP Tarkov",
					intro: "TarkovHack об'єднує ESP wallhack, radar hack і tarkov aimbot у undetected пакеті для Tarkov на Windows PC. Хак ESP Tarkov.",
					imageAlt: "Tarkov ESP hack boxes and loot markers",
					galleryTitle: "Хак ESP Tarkov",
					heroImage: "/images/tarkov-cheats-wallhack.webp",
					ctaPrimary: "Купити TarkovHack",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/tarkov-esp/",
					sections: [
						{
							h2: "Хак ESP Tarkov",
							paragraphs: [
								"TarkovHack об'єднує ESP wallhack, radar hack і tarkov aimbot у undetected пакеті для Tarkov на Windows PC. ESP hack boxes, loot pins, and distance.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів BattlEye anti-cheat. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye anti-cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye anti-cheat.",
								"support@tarkovhack.com для підтримки та правових питань.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Unlock all Tarkov | What It Means",
					description: "Unlock all Tarkov: unlock-all searches vs real ESP and Aimbot tools. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Unlock all Tarkov",
					intro: "TarkovHack об'єднує ESP wallhack, radar hack і tarkov aimbot у undetected пакеті для Tarkov на Windows PC. Unlock all Tarkov.",
					imageAlt: "TarkovHack license features overview",
					galleryTitle: "Unlock all Tarkov",
					heroImage: "/images/tarkov-cheats-radar.webp",
					ctaPrimary: "Купити TarkovHack",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unlock all Tarkov",
							paragraphs: [
								"TarkovHack об'єднує ESP wallhack, radar hack і tarkov aimbot у undetected пакеті для Tarkov на Windows PC. unlock-all searches vs real ESP and Aimbot tools.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів BattlEye anti-cheat. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye anti-cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye anti-cheat.",
								"support@tarkovhack.com для підтримки та правових питань.",
							],
						},
					],
				},
				privacy: {
					title: "Політика конфіденційності | TarkovHack",
					description: "Політика конфіденційності for TarkovHack — ESP wallhack, Aimbot, Windows PC.",
					h1: "Політика конфіденційності",
					intro: "TarkovHack об'єднує ESP wallhack, radar hack і tarkov aimbot у undetected пакеті для Tarkov на Windows PC. Політика конфіденційності for tarkovhack.com and Escape from Tarkov licenses.",
					imageAlt: "TarkovHack",
					galleryTitle: "TarkovHack",
					heroImage: "/images/tarkov-cheats-aimbot.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read terms",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we collect",
							paragraphs: [
								"TarkovHack об'єднує ESP wallhack, radar hack і tarkov aimbot у undetected пакеті для Tarkov на Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"Payment details are processed by Zadeyo checkout — not stored on tarkovhack.com.",
							],
						},
						{
							h2: "How we use data",
							paragraphs: [
								"TarkovHack об'єднує ESP wallhack, radar hack і tarkov aimbot у undetected пакеті для Tarkov на Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Перевіряйте Updates після патчів BattlEye anti-cheat. Жоден чит не гарантує постійний undetected статус.",
							],
						},
						{
							h2: "Your rights",
							paragraphs: [
								"support@tarkovhack.com для підтримки та правових питань.",
								"Email: support@tarkovhack.com",
							],
						},
					],
				},
				refund: {
					title: "Політика повернення | TarkovHack",
					description: "Політика повернення for TarkovHack — ESP wallhack, Aimbot, Windows PC.",
					h1: "Політика повернення",
					intro: "TarkovHack об'єднує ESP wallhack, radar hack і tarkov aimbot у undetected пакеті для Tarkov на Windows PC. Політика повернення for tarkovhack.com and Escape from Tarkov licenses.",
					imageAlt: "TarkovHack",
					galleryTitle: "TarkovHack",
					heroImage: "/images/tarkov-cheats-raid.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digital delivery",
							paragraphs: [
								"TarkovHack об'єднує ESP wallhack, radar hack і tarkov aimbot у undetected пакеті для Tarkov на Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye anti-cheat.",
							],
						},
						{
							h2: "Refund approval",
							paragraphs: [
								"TarkovHack об'єднує ESP wallhack, radar hack і tarkov aimbot у undetected пакеті для Tarkov на Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Перевіряйте Updates після патчів BattlEye anti-cheat. Жоден чит не гарантує постійний undetected статус.",
							],
						},
						{
							h2: "How to request",
							paragraphs: [
								"support@tarkovhack.com для підтримки та правових питань.",
								"Email: support@tarkovhack.com",
							],
						},
					],
				},
				terms: {
					title: "Умови використання | TarkovHack",
					description: "Умови використання for TarkovHack — ESP wallhack, Aimbot, Windows PC.",
					h1: "Умови використання",
					intro: "TarkovHack об'єднує ESP wallhack, radar hack і tarkov aimbot у undetected пакеті для Tarkov на Windows PC. Умови використання for tarkovhack.com and Escape from Tarkov licenses.",
					imageAlt: "TarkovHack",
					galleryTitle: "TarkovHack",
					heroImage: "/images/tarkov-cheats-aimbot-view.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Acceptance of terms",
							paragraphs: [
								"TarkovHack об'єднує ESP wallhack, radar hack і tarkov aimbot у undetected пакеті для Tarkov на Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування BattlEye anti-cheat.",
							],
						},
						{
							h2: "Risk disclaimer",
							paragraphs: [
								"TarkovHack об'єднує ESP wallhack, radar hack і tarkov aimbot у undetected пакеті для Tarkov на Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "Policy changes",
							paragraphs: [
								"support@tarkovhack.com для підтримки та правових питань.",
								"Email: support@tarkovhack.com",
							],
						},
					],
				},
			},
		},
		cs: {
			ui: {
				nav: {
					home: "Domů",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Funkce",
					pricing: "Ceny",
					setup: "Instalace",
					updates: "Aktualizace",
					faq: "FAQ",
					buyNow: "Koupit",
				},
				hero: {
					accent: "Undetected Tarkov cheaty",
					accentShort: "TarkovHack",
					subtitle: "ESP wallhack, radar hack a Aimbot pro Tarkov na Windows PC — údržba BattlEye anti-cheat v ceně.",
					subtitleShort: "ESP, radar a Aimbot pro Tarkov PC",
					buyNow: "Koupit",
					seeFeatures: "Zobrazit funkce",
				},
				trust: {
					status: "Online",
					statusNote: "Balíček TarkovHack je aktivní pro Tarkov na Windows PC.",
					statusShort: "Aktivní",
					delivery: "Okamžité digitální doručení",
					platform: "Windows 10 a 11",
					antiCheat: "Podpora údržby BattlEye anti-cheat",
					antiCheatShort: "BattlEye anti-cheat podpora",
				},
				product: {
					title: "TarkovHack",
					addToCart: "Přidat do košíku",
					monthly: "Měsíčně",
					lifetime: "Doživotně",
					available: "Dostupné nyní",
					gameBadge: "Tarkov",
					platformBadge: "Windows PC",
					statusBadge: "Undetected balíček",
				},
				reviews: {
					title: "Co říkají hráči",
					subtitle: "Nedávná zpětná vazba od kupujících TarkovHack",
					outOf: "z 5",
					countLabel: "recenzí",
				},
				common: {
					buyNow: "Koupit",
					readGuide: "Číst průvodce",
					language: "Jazyk",
					officialLanguageNote: "Angličtina je oficiální jazyk. Ostatní jazyky jsou přeloženy pro globální SEO.",
					relatedPages: "Související stránky",
				},
				footer: {
					explore: "Prozkoumat",
					help: "Nápověda a právo",
					tagline: "Undetected ESP, wallhack, radar a Aimbot pro Tarkov — checkout přes Zadeyo.",
				},
				images: {
					hero: "TarkovHack hero — ESP and aimbot overlay in Escape from Tarkov",
					espWallhack: "Wallhack outlines showing PMCs and Scavs through walls",
					aimbotCombat: "Soft aim assist overlay during an Escape from Tarkov raid",
					squadFight: "TarkovHack combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Tarkov raid",
					headerArt: "Aimbot view and bone priority controls for Tarkov",
					cheatsPackage: "2D radar threat overlay for Escape from Tarkov",
					rebootFight: "Aimbot assist during a Tarkov firefight",
					battleRoyale: "TarkovHack in-raid overview for Windows PC",
					battleRoyaleIsland: "ESP markers for loot and extracts in Tarkov",
				},
			},
			pages: {
				home: {
					title: "TarkovHack 2026 | ESP, Wallhack a Aimbot",
					description: "Undetected Tarkov cheaty pro Escape from Tarkov na PC. ESP wallhack, radar hack, Aimbot, údržba BattlEye anti-cheat. Okamžité digitální doručení.",
					h1: "TarkovHack — Undetected ESP, Wallhack a Aimbot",
					intro: "Undetected balíček pro Escape from Tarkov na Windows PC: ESP wallhack, radar, Aimbot s údržbou BattlEye anti-cheat.",
					imageAlt: "Tarkov ESP player tags hack",
					galleryTitle: "Galerie TarkovHack — ESP, Aimbot, wallhack",
					heroImage: "/images/tarkov-cheats-esp.webp",
					ctaPrimary: "Koupit TarkovHack",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Proč TarkovHack v roce 2026",
							paragraphs: [
								"TarkovHack spojuje ESP wallhack, radar hack a tarkov aimbot jako undetected balíček pro Tarkov na Windows PC. Ideální pro čtení nepřátelských squadů v BR a scav-run.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye anti-cheat.",
							],
						},
						{
							h2: "ESP wallhack, radar a Aimbot v jedné licenci",
							paragraphs: [
								"TarkovHack spojuje ESP wallhack, radar hack a tarkov aimbot jako undetected balíček pro Tarkov na Windows PC. Jedna licence místo samostatných nástrojů.",
								"Po patchích BattlEye anti-cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
							],
						},
					],
				},
				"tarkov-esp": {
					title: "Tarkov ESP | Player Boxes & Wallhack",
					description: "Tarkov ESP: player boxes, loot markers, and wallhack overlays. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Tarkov ESP",
					intro: "TarkovHack spojuje ESP wallhack, radar hack a tarkov aimbot jako undetected balíček pro Tarkov na Windows PC. Tarkov ESP.",
					imageAlt: "Tarkov ESP player boxes and distance readouts in a raid",
					galleryTitle: "Tarkov ESP",
					heroImage: "/images/tarkov-cheats-radar.webp",
					ctaPrimary: "Koupit TarkovHack",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/tarkov-cheats/",
					sections: [
						{
							h2: "Tarkov ESP",
							paragraphs: [
								"TarkovHack spojuje ESP wallhack, radar hack a tarkov aimbot jako undetected balíček pro Tarkov na Windows PC. player boxes, loot markers, and wallhack overlays.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích BattlEye anti-cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye anti-cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye anti-cheat.",
								"support@tarkovhack.com pro podporu a právní dotazy.",
							],
						},
					],
				},
				"tarkov-aimbot": {
					title: "Tarkov Aimbot | Soft Aim Controls",
					description: "Tarkov Aimbot: soft aim, FOV, and per-weapon Aimbot profiles. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Tarkov Aimbot",
					intro: "TarkovHack spojuje ESP wallhack, radar hack a tarkov aimbot jako undetected balíček pro Tarkov na Windows PC. Tarkov Aimbot.",
					imageAlt: "Tarkov aimbot and soft aim controls on Windows PC",
					galleryTitle: "Tarkov Aimbot",
					heroImage: "/images/tarkov-cheats-aimbot.webp",
					ctaPrimary: "Koupit TarkovHack",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/tarkov-esp/",
					sections: [
						{
							h2: "Tarkov Aimbot",
							paragraphs: [
								"TarkovHack spojuje ESP wallhack, radar hack a tarkov aimbot jako undetected balíček pro Tarkov na Windows PC. soft aim, FOV, and per-weapon Aimbot profiles.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích BattlEye anti-cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye anti-cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye anti-cheat.",
								"support@tarkovhack.com pro podporu a právní dotazy.",
							],
						},
					],
				},
				features: {
					title: "Funkce | Full Feature List",
					description: "Funkce: ESP, soft aim, radar controls. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Funkce",
					intro: "TarkovHack spojuje ESP wallhack, radar hack a tarkov aimbot jako undetected balíček pro Tarkov na Windows PC. Funkce.",
					imageAlt: "TarkovHack features — ESP, soft aim, and radar screenshots",
					galleryTitle: "Funkce",
					heroImage: "/images/tarkov-cheats-aimbot-view.webp",
					ctaPrimary: "Koupit TarkovHack",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Funkce",
							paragraphs: [
								"TarkovHack spojuje ESP wallhack, radar hack a tarkov aimbot jako undetected balíček pro Tarkov na Windows PC. ESP, soft aim, radar controls.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích BattlEye anti-cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye anti-cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye anti-cheat.",
								"support@tarkovhack.com pro podporu a právní dotazy.",
							],
						},
					],
				},
				pricing: {
					title: "Ceny | Monthly & Lifetime",
					description: "Ceny: $35 monthly or $150 lifetime licenses. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Ceny",
					intro: "TarkovHack spojuje ESP wallhack, radar hack a tarkov aimbot jako undetected balíček pro Tarkov na Windows PC. Ceny.",
					imageAlt: "TarkovHack store plans for monthly and lifetime licenses",
					galleryTitle: "Ceny",
					heroImage: "/images/tarkov-cheats-raid.webp",
					ctaPrimary: "Koupit TarkovHack",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Ceny",
							paragraphs: [
								"TarkovHack spojuje ESP wallhack, radar hack a tarkov aimbot jako undetected balíček pro Tarkov na Windows PC. $35 monthly or $150 lifetime licenses.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích BattlEye anti-cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye anti-cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye anti-cheat.",
								"support@tarkovhack.com pro podporu a právní dotazy.",
							],
						},
					],
				},
				setup: {
					title: "Instalace | PC Setup Guide",
					description: "Instalace: Windows PC activation and first-launch setup. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Instalace",
					intro: "TarkovHack spojuje ESP wallhack, radar hack a tarkov aimbot jako undetected balíček pro Tarkov na Windows PC. Instalace.",
					imageAlt: "TarkovHack setup guide screenshot for Windows PC",
					galleryTitle: "Instalace",
					heroImage: "/images/tarkov-cheats-radar.webp",
					ctaPrimary: "Koupit TarkovHack",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Instalace",
							paragraphs: [
								"TarkovHack spojuje ESP wallhack, radar hack a tarkov aimbot jako undetected balíček pro Tarkov na Windows PC. Windows PC activation and first-launch setup.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích BattlEye anti-cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye anti-cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye anti-cheat.",
								"support@tarkovhack.com pro podporu a právní dotazy.",
							],
						},
					],
				},
				updates: {
					title: "Aktualizace | BattlEye Maintenance Log",
					description: "Aktualizace: BattlEye patch status and rebuild notes. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Aktualizace",
					intro: "TarkovHack spojuje ESP wallhack, radar hack a tarkov aimbot jako undetected balíček pro Tarkov na Windows PC. Aktualizace.",
					imageAlt: "TarkovHack live status after BattlEye and game patches",
					galleryTitle: "Aktualizace",
					heroImage: "/images/tarkov-cheats-esp.webp",
					ctaPrimary: "Koupit TarkovHack",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/tarkov-cheats/",
					sections: [
						{
							h2: "Aktualizace",
							paragraphs: [
								"TarkovHack spojuje ESP wallhack, radar hack a tarkov aimbot jako undetected balíček pro Tarkov na Windows PC. BattlEye patch status and rebuild notes.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích BattlEye anti-cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye anti-cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye anti-cheat.",
								"support@tarkovhack.com pro podporu a právní dotazy.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Common Answers",
					description: "FAQ: ESP, soft aim, delivery, and BattlEye questions. okamžité digitální doručení. undetected — Windows PC.",
					h1: "FAQ",
					intro: "TarkovHack spojuje ESP wallhack, radar hack a tarkov aimbot jako undetected balíček pro Tarkov na Windows PC. FAQ.",
					imageAlt: "TarkovHack FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/tarkov-cheats-aimbot-view.webp",
					ctaPrimary: "Koupit TarkovHack",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"TarkovHack spojuje ESP wallhack, radar hack a tarkov aimbot jako undetected balíček pro Tarkov na Windows PC. ESP, soft aim, delivery, and BattlEye questions.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích BattlEye anti-cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye anti-cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye anti-cheat.",
								"support@tarkovhack.com pro podporu a právní dotazy.",
							],
						},
					],
				},
				support: {
					title: "Podpora | Help & Contact",
					description: "Podpora: order help and license support contact. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Podpora",
					intro: "TarkovHack spojuje ESP wallhack, radar hack a tarkov aimbot jako undetected balíček pro Tarkov na Windows PC. Podpora.",
					imageAlt: "TarkovHack support page for license and setup help",
					galleryTitle: "Podpora",
					heroImage: "/images/tarkov-cheats-raid.webp",
					ctaPrimary: "Koupit TarkovHack",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Podpora",
							paragraphs: [
								"TarkovHack spojuje ESP wallhack, radar hack a tarkov aimbot jako undetected balíček pro Tarkov na Windows PC. order help and license support contact.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích BattlEye anti-cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye anti-cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye anti-cheat.",
								"support@tarkovhack.com pro podporu a právní dotazy.",
							],
						},
					],
				},
				undetected: {
					title: "Undetected cheaty | BattlEye Safe Status",
					description: "Undetected cheaty: undetected maintenance after BattlEye anti-cheat patches. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Undetected cheaty",
					intro: "TarkovHack spojuje ESP wallhack, radar hack a tarkov aimbot jako undetected balíček pro Tarkov na Windows PC. Undetected cheaty.",
					imageAlt: "TarkovHack undetected status overview for Windows PC",
					galleryTitle: "Undetected cheaty",
					heroImage: "/images/tarkov-cheats-wallhack.webp",
					ctaPrimary: "Koupit TarkovHack",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/tarkov-cheats/",
					sections: [
						{
							h2: "Undetected cheaty",
							paragraphs: [
								"TarkovHack spojuje ESP wallhack, radar hack a tarkov aimbot jako undetected balíček pro Tarkov na Windows PC. undetected maintenance after BattlEye anti-cheat patches.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích BattlEye anti-cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye anti-cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye anti-cheat.",
								"support@tarkovhack.com pro podporu a právní dotazy.",
							],
						},
					],
				},
				wallhack: {
					title: "Tarkov Wallhack | ESP Visibility",
					description: "Tarkov Wallhack: wallhack ESP for players, loot, and distance. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Tarkov Wallhack",
					intro: "TarkovHack spojuje ESP wallhack, radar hack a tarkov aimbot jako undetected balíček pro Tarkov na Windows PC. Tarkov Wallhack.",
					imageAlt: "Tarkov wallhack visibility through walls in a raid",
					galleryTitle: "Tarkov Wallhack",
					heroImage: "/images/tarkov-cheats-wallhack.webp",
					ctaPrimary: "Koupit TarkovHack",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/tarkov-esp/",
					sections: [
						{
							h2: "Tarkov Wallhack",
							paragraphs: [
								"TarkovHack spojuje ESP wallhack, radar hack a tarkov aimbot jako undetected balíček pro Tarkov na Windows PC. wallhack ESP for players, loot, and distance.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích BattlEye anti-cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye anti-cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye anti-cheat.",
								"support@tarkovhack.com pro podporu a právní dotazy.",
							],
						},
					],
				},
				radar: {
					title: "Radar Hack | 2D Threat Overlay",
					description: "Radar Hack: 2D radar cues for flanks and rotations. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Radar Hack",
					intro: "TarkovHack spojuje ESP wallhack, radar hack a tarkov aimbot jako undetected balíček pro Tarkov na Windows PC. Radar Hack.",
					imageAlt: "Tarkov 2D radar overlay showing nearby threats",
					galleryTitle: "Radar Hack",
					heroImage: "/images/tarkov-cheats-radar.webp",
					ctaPrimary: "Koupit TarkovHack",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/tarkov-esp/",
					sections: [
						{
							h2: "Radar Hack",
							paragraphs: [
								"TarkovHack spojuje ESP wallhack, radar hack a tarkov aimbot jako undetected balíček pro Tarkov na Windows PC. 2D radar cues for flanks and rotations.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích BattlEye anti-cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye anti-cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye anti-cheat.",
								"support@tarkovhack.com pro podporu a právní dotazy.",
							],
						},
					],
				},
				battleye: {
					title: "BattlEye Bypass | Patch Maintenance",
					description: "BattlEye Bypass: how BattlEye updates are handled for Escape from Tarkov hacks. okamžité digitální doručení. undetected — Windows PC.",
					h1: "BattlEye Bypass",
					intro: "TarkovHack spojuje ESP wallhack, radar hack a tarkov aimbot jako undetected balíček pro Tarkov na Windows PC. BattlEye Bypass.",
					imageAlt: "TarkovHack maintenance after a BattlEye patch",
					galleryTitle: "BattlEye Bypass",
					heroImage: "/images/tarkov-cheats-aimbot.webp",
					ctaPrimary: "Koupit TarkovHack",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "BattlEye Bypass",
							paragraphs: [
								"TarkovHack spojuje ESP wallhack, radar hack a tarkov aimbot jako undetected balíček pro Tarkov na Windows PC. how BattlEye updates are handled for Escape from Tarkov hacks.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích BattlEye anti-cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye anti-cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye anti-cheat.",
								"support@tarkovhack.com pro podporu a právní dotazy.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Tarkov cheaty 2026 | Buyer Guide",
					description: "Tarkov cheaty 2026: 2026 TarkovHack checklist before checkout. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Tarkov cheaty 2026",
					intro: "TarkovHack spojuje ESP wallhack, radar hack a tarkov aimbot jako undetected balíček pro Tarkov na Windows PC. Tarkov cheaty 2026.",
					imageAlt: "TarkovHack product overview for Escape from Tarkov",
					galleryTitle: "Tarkov cheaty 2026",
					heroImage: "/images/tarkov-cheats-esp.webp",
					ctaPrimary: "Koupit TarkovHack",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/tarkov-cheats/",
					sections: [
						{
							h2: "Tarkov cheaty 2026",
							paragraphs: [
								"TarkovHack spojuje ESP wallhack, radar hack a tarkov aimbot jako undetected balíček pro Tarkov na Windows PC. 2026 TarkovHack checklist before checkout.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích BattlEye anti-cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye anti-cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye anti-cheat.",
								"support@tarkovhack.com pro podporu a právní dotazy.",
							],
						},
					],
				},
				hacks: {
					title: "Tarkov cheaty | ESP Aimbot Guide",
					description: "Tarkov cheaty: the Escape from Tarkov hacks pillar for ESP and Aimbot. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Tarkov cheaty",
					intro: "TarkovHack spojuje ESP wallhack, radar hack a tarkov aimbot jako undetected balíček pro Tarkov na Windows PC. Tarkov cheaty.",
					imageAlt: "TarkovHack product page — ESP, aimbot, and radar",
					galleryTitle: "Tarkov cheaty",
					heroImage: "/images/tarkov-cheats-raid.webp",
					ctaPrimary: "Koupit TarkovHack",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Tarkov cheaty",
							paragraphs: [
								"TarkovHack spojuje ESP wallhack, radar hack a tarkov aimbot jako undetected balíček pro Tarkov na Windows PC. the Escape from Tarkov hacks pillar for ESP and Aimbot.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích BattlEye anti-cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye anti-cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye anti-cheat.",
								"support@tarkovhack.com pro podporu a právní dotazy.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Stáhnout TarkovHack | Instant Access",
					description: "Stáhnout TarkovHack: digital license download after payment. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Stáhnout TarkovHack",
					intro: "TarkovHack spojuje ESP wallhack, radar hack a tarkov aimbot jako undetected balíček pro Tarkov na Windows PC. Stáhnout TarkovHack.",
					imageAlt: "TarkovHack download and install delivery flow",
					galleryTitle: "Stáhnout TarkovHack",
					heroImage: "/images/tarkov-cheats-raid.webp",
					ctaPrimary: "Koupit TarkovHack",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Stáhnout TarkovHack",
							paragraphs: [
								"TarkovHack spojuje ESP wallhack, radar hack a tarkov aimbot jako undetected balíček pro Tarkov na Windows PC. digital license download after payment.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích BattlEye anti-cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye anti-cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye anti-cheat.",
								"support@tarkovhack.com pro podporu a právní dotazy.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Tarkov mod menu | In-Game Toggles",
					description: "Tarkov mod menu: in-client ESP and soft aim toggles. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Tarkov mod menu",
					intro: "TarkovHack spojuje ESP wallhack, radar hack a tarkov aimbot jako undetected balíček pro Tarkov na Windows PC. Tarkov mod menu.",
					imageAlt: "TarkovHack in-game menu controls",
					galleryTitle: "Tarkov mod menu",
					heroImage: "/images/tarkov-cheats-radar.webp",
					ctaPrimary: "Koupit TarkovHack",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Tarkov mod menu",
							paragraphs: [
								"TarkovHack spojuje ESP wallhack, radar hack a tarkov aimbot jako undetected balíček pro Tarkov na Windows PC. in-client ESP and soft aim toggles.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích BattlEye anti-cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye anti-cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye anti-cheat.",
								"support@tarkovhack.com pro podporu a právní dotazy.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Tarkov Soft Aim | Smooth Aim Settings",
					description: "Tarkov Soft Aim: smooth soft aim settings for Windows PC. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Tarkov Soft Aim",
					intro: "TarkovHack spojuje ESP wallhack, radar hack a tarkov aimbot jako undetected balíček pro Tarkov na Windows PC. Tarkov Soft Aim.",
					imageAlt: "Tarkov soft aim FOV and smoothness settings",
					galleryTitle: "Tarkov Soft Aim",
					heroImage: "/images/tarkov-cheats-aimbot-view.webp",
					ctaPrimary: "Koupit TarkovHack",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/tarkov-aimbot/",
					sections: [
						{
							h2: "Tarkov Soft Aim",
							paragraphs: [
								"TarkovHack spojuje ESP wallhack, radar hack a tarkov aimbot jako undetected balíček pro Tarkov na Windows PC. smooth soft aim settings for Windows PC.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích BattlEye anti-cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye anti-cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye anti-cheat.",
								"support@tarkovhack.com pro podporu a právní dotazy.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Nejlepší Tarkov cheaty | Buyer Checklist",
					description: "Nejlepší Tarkov cheaty: what to compare before buying TarkovHack. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Nejlepší Tarkov cheaty",
					intro: "TarkovHack spojuje ESP wallhack, radar hack a tarkov aimbot jako undetected balíček pro Tarkov na Windows PC. Nejlepší Tarkov cheaty.",
					imageAlt: "TarkovHack overview for Escape from Tarkov on PC",
					galleryTitle: "Nejlepší Tarkov cheaty",
					heroImage: "/images/tarkov-cheats-esp.webp",
					ctaPrimary: "Koupit TarkovHack",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Nejlepší Tarkov cheaty",
							paragraphs: [
								"TarkovHack spojuje ESP wallhack, radar hack a tarkov aimbot jako undetected balíček pro Tarkov na Windows PC. what to compare before buying TarkovHack.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích BattlEye anti-cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye anti-cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye anti-cheat.",
								"support@tarkovhack.com pro podporu a právní dotazy.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Tarkov aimbot hack | Soft Aim Assist",
					description: "Tarkov aimbot hack: undetected Aimbot hack assist for Escape from Tarkov. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Tarkov aimbot hack",
					intro: "TarkovHack spojuje ESP wallhack, radar hack a tarkov aimbot jako undetected balíček pro Tarkov na Windows PC. Tarkov aimbot hack.",
					imageAlt: "Tarkov aimbot hack controls and bone priority",
					galleryTitle: "Tarkov aimbot hack",
					heroImage: "/images/tarkov-cheats-aimbot-view.webp",
					ctaPrimary: "Koupit TarkovHack",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/tarkov-aimbot/",
					sections: [
						{
							h2: "Tarkov aimbot hack",
							paragraphs: [
								"TarkovHack spojuje ESP wallhack, radar hack a tarkov aimbot jako undetected balíček pro Tarkov na Windows PC. undetected Aimbot hack assist for Escape from Tarkov.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích BattlEye anti-cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye anti-cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye anti-cheat.",
								"support@tarkovhack.com pro podporu a právní dotazy.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Tarkov ESP hack | Boxes & Loot",
					description: "Tarkov ESP hack: ESP hack boxes, loot pins, and distance. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Tarkov ESP hack",
					intro: "TarkovHack spojuje ESP wallhack, radar hack a tarkov aimbot jako undetected balíček pro Tarkov na Windows PC. Tarkov ESP hack.",
					imageAlt: "Tarkov ESP hack boxes and loot markers",
					galleryTitle: "Tarkov ESP hack",
					heroImage: "/images/tarkov-cheats-wallhack.webp",
					ctaPrimary: "Koupit TarkovHack",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/tarkov-esp/",
					sections: [
						{
							h2: "Tarkov ESP hack",
							paragraphs: [
								"TarkovHack spojuje ESP wallhack, radar hack a tarkov aimbot jako undetected balíček pro Tarkov na Windows PC. ESP hack boxes, loot pins, and distance.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích BattlEye anti-cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye anti-cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye anti-cheat.",
								"support@tarkovhack.com pro podporu a právní dotazy.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Tarkov Unlock All | What It Means",
					description: "Tarkov Unlock All: unlock-all searches vs real ESP and Aimbot tools. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Tarkov Unlock All",
					intro: "TarkovHack spojuje ESP wallhack, radar hack a tarkov aimbot jako undetected balíček pro Tarkov na Windows PC. Tarkov Unlock All.",
					imageAlt: "TarkovHack license features overview",
					galleryTitle: "Tarkov Unlock All",
					heroImage: "/images/tarkov-cheats-radar.webp",
					ctaPrimary: "Koupit TarkovHack",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Tarkov Unlock All",
							paragraphs: [
								"TarkovHack spojuje ESP wallhack, radar hack a tarkov aimbot jako undetected balíček pro Tarkov na Windows PC. unlock-all searches vs real ESP and Aimbot tools.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích BattlEye anti-cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye anti-cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye anti-cheat.",
								"support@tarkovhack.com pro podporu a právní dotazy.",
							],
						},
					],
				},
				privacy: {
					title: "Zásady ochrany soukromí | TarkovHack",
					description: "Zásady ochrany soukromí for TarkovHack — ESP wallhack, Aimbot, Windows PC.",
					h1: "Zásady ochrany soukromí",
					intro: "TarkovHack spojuje ESP wallhack, radar hack a tarkov aimbot jako undetected balíček pro Tarkov na Windows PC. Zásady ochrany soukromí for tarkovhack.com and Escape from Tarkov licenses.",
					imageAlt: "TarkovHack",
					galleryTitle: "TarkovHack",
					heroImage: "/images/tarkov-cheats-aimbot.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read terms",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we collect",
							paragraphs: [
								"TarkovHack spojuje ESP wallhack, radar hack a tarkov aimbot jako undetected balíček pro Tarkov na Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"Payment details are processed by Zadeyo checkout — not stored on tarkovhack.com.",
							],
						},
						{
							h2: "How we use data",
							paragraphs: [
								"TarkovHack spojuje ESP wallhack, radar hack a tarkov aimbot jako undetected balíček pro Tarkov na Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Po patchích BattlEye anti-cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
							],
						},
						{
							h2: "Your rights",
							paragraphs: [
								"support@tarkovhack.com pro podporu a právní dotazy.",
								"Email: support@tarkovhack.com",
							],
						},
					],
				},
				refund: {
					title: "Zásady vrácení peněz | TarkovHack",
					description: "Zásady vrácení peněz for TarkovHack — ESP wallhack, Aimbot, Windows PC.",
					h1: "Zásady vrácení peněz",
					intro: "TarkovHack spojuje ESP wallhack, radar hack a tarkov aimbot jako undetected balíček pro Tarkov na Windows PC. Zásady vrácení peněz for tarkovhack.com and Escape from Tarkov licenses.",
					imageAlt: "TarkovHack",
					galleryTitle: "TarkovHack",
					heroImage: "/images/tarkov-cheats-raid.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digital delivery",
							paragraphs: [
								"TarkovHack spojuje ESP wallhack, radar hack a tarkov aimbot jako undetected balíček pro Tarkov na Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye anti-cheat.",
							],
						},
						{
							h2: "Refund approval",
							paragraphs: [
								"TarkovHack spojuje ESP wallhack, radar hack a tarkov aimbot jako undetected balíček pro Tarkov na Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Po patchích BattlEye anti-cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
							],
						},
						{
							h2: "How to request",
							paragraphs: [
								"support@tarkovhack.com pro podporu a právní dotazy.",
								"Email: support@tarkovhack.com",
							],
						},
					],
				},
				terms: {
					title: "Podmínky použití | TarkovHack",
					description: "Podmínky použití for TarkovHack — ESP wallhack, Aimbot, Windows PC.",
					h1: "Podmínky použití",
					intro: "TarkovHack spojuje ESP wallhack, radar hack a tarkov aimbot jako undetected balíček pro Tarkov na Windows PC. Podmínky použití for tarkovhack.com and Escape from Tarkov licenses.",
					imageAlt: "TarkovHack",
					galleryTitle: "TarkovHack",
					heroImage: "/images/tarkov-cheats-aimbot-view.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Acceptance of terms",
							paragraphs: [
								"TarkovHack spojuje ESP wallhack, radar hack a tarkov aimbot jako undetected balíček pro Tarkov na Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby BattlEye anti-cheat.",
							],
						},
						{
							h2: "Risk disclaimer",
							paragraphs: [
								"TarkovHack spojuje ESP wallhack, radar hack a tarkov aimbot jako undetected balíček pro Tarkov na Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "Policy changes",
							paragraphs: [
								"support@tarkovhack.com pro podporu a právní dotazy.",
								"Email: support@tarkovhack.com",
							],
						},
					],
				},
			},
		},
		ro: {
			ui: {
				nav: {
					home: "Acasă",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Funcții",
					pricing: "Prețuri",
					setup: "Instalare",
					updates: "Actualizări",
					faq: "FAQ",
					buyNow: "Cumpără",
				},
				hero: {
					accent: "Cheats Tarkov undetected",
					accentShort: "TarkovHack",
					subtitle: "ESP wallhack, radar hack și Aimbot pentru Tarkov pe PC Windows — mentenanță BattlEye anti-cheat inclusă.",
					subtitleShort: "ESP, radar și Aimbot pentru Tarkov PC",
					buyNow: "Cumpără acum",
					seeFeatures: "Vezi funcții",
				},
				trust: {
					status: "Online",
					statusNote: "Pachetul TarkovHack este activ pentru Tarkov pe PC Windows.",
					statusShort: "Activ",
					delivery: "Livrare digitală instantă",
					platform: "Windows 10 și 11",
					antiCheat: "Mentenanță BattlEye anti-cheat suportată",
					antiCheatShort: "BattlEye anti-cheat suportat",
				},
				product: {
					title: "TarkovHack",
					addToCart: "Adaugă în coș",
					monthly: "Lunar",
					lifetime: "Pe viață",
					available: "Disponibil acum",
					gameBadge: "Tarkov",
					platformBadge: "Windows PC",
					statusBadge: "Pachet undetected",
				},
				reviews: {
					title: "Ce spun jucătorii",
					subtitle: "Feedback recent de la cumpărătorii TarkovHack",
					outOf: "din 5",
					countLabel: "recenzii",
				},
				common: {
					buyNow: "Cumpără acum",
					readGuide: "Citește ghidul",
					language: "Limbă",
					officialLanguageNote: "Engleza este limba oficială. Alte limbi sunt traduse pentru SEO global.",
					relatedPages: "Pagini related",
				},
				footer: {
					explore: "Explorează",
					help: "Ajutor și legal",
					tagline: "ESP, wallhack, radar și Aimbot undetected pentru Tarkov — checkout via Zadeyo.",
				},
				images: {
					hero: "TarkovHack hero — ESP and aimbot overlay in Escape from Tarkov",
					espWallhack: "Wallhack outlines showing PMCs and Scavs through walls",
					aimbotCombat: "Soft aim assist overlay during an Escape from Tarkov raid",
					squadFight: "TarkovHack combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Tarkov raid",
					headerArt: "Aimbot view and bone priority controls for Tarkov",
					cheatsPackage: "2D radar threat overlay for Escape from Tarkov",
					rebootFight: "Aimbot assist during a Tarkov firefight",
					battleRoyale: "TarkovHack in-raid overview for Windows PC",
					battleRoyaleIsland: "ESP markers for loot and extracts in Tarkov",
				},
			},
			pages: {
				home: {
					title: "TarkovHack 2026 | ESP, Wallhack și Aimbot",
					description: "Cheats Escape from Tarkov undetected pentru Escape from Tarkov pe PC. ESP wallhack, radar hack, Aimbot, mentenanță BattlEye anti-cheat. Livrare digitală",
					h1: "TarkovHack — Undetected ESP, Wallhack și Aimbot",
					intro: "Pachet undetected Escape from Tarkov pe Windows PC: ESP wallhack, radar, Aimbot cu mentenanță BattlEye anti-cheat.",
					imageAlt: "Tarkov ESP player tags hack",
					galleryTitle: "Galerie TarkovHack — ESP, Aimbot, wallhack",
					heroImage: "/images/tarkov-cheats-esp.webp",
					ctaPrimary: "Cumpără TarkovHack",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "De ce TarkovHack în 2026",
							paragraphs: [
								"TarkovHack combină ESP wallhack, radar hack și tarkov aimbot undetected pentru Tarkov pe PC Windows. Ideal pentru citirea squad-urilor inamice în BR și scav-run.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye anti-cheat.",
							],
						},
						{
							h2: "ESP wallhack, radar și Aimbot într-o licență",
							paragraphs: [
								"TarkovHack combină ESP wallhack, radar hack și tarkov aimbot undetected pentru Tarkov pe PC Windows. O licență în loc de instrumente separate.",
								"Verificați Updates după patch-uri BattlEye anti-cheat. Niciun cheat nu garantează undetected permanent.",
							],
						},
					],
				},
				"tarkov-esp": {
					title: "ESP Tarkov | Player Boxes & Wallhack",
					description: "ESP Tarkov: player boxes, loot markers, and wallhack overlays. livrare digitală instantă. undetected — PC Windows.",
					h1: "ESP Tarkov",
					intro: "TarkovHack combină ESP wallhack, radar hack și tarkov aimbot undetected pentru Tarkov pe PC Windows. ESP Tarkov.",
					imageAlt: "Tarkov ESP player boxes and distance readouts in a raid",
					galleryTitle: "ESP Tarkov",
					heroImage: "/images/tarkov-cheats-radar.webp",
					ctaPrimary: "Cumpără TarkovHack",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/tarkov-cheats/",
					sections: [
						{
							h2: "ESP Tarkov",
							paragraphs: [
								"TarkovHack combină ESP wallhack, radar hack și tarkov aimbot undetected pentru Tarkov pe PC Windows. player boxes, loot markers, and wallhack overlays.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri BattlEye anti-cheat. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye anti-cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye anti-cheat.",
								"support@tarkovhack.com pentru suport și legal.",
							],
						},
					],
				},
				"tarkov-aimbot": {
					title: "Aimbot Tarkov | Soft Aim Controls",
					description: "Aimbot Tarkov: soft aim, FOV, and per-weapon Aimbot profiles. livrare digitală instantă. undetected — PC Windows.",
					h1: "Aimbot Tarkov",
					intro: "TarkovHack combină ESP wallhack, radar hack și tarkov aimbot undetected pentru Tarkov pe PC Windows. Aimbot Tarkov.",
					imageAlt: "Tarkov aimbot and soft aim controls on Windows PC",
					galleryTitle: "Aimbot Tarkov",
					heroImage: "/images/tarkov-cheats-aimbot.webp",
					ctaPrimary: "Cumpără TarkovHack",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/tarkov-esp/",
					sections: [
						{
							h2: "Aimbot Tarkov",
							paragraphs: [
								"TarkovHack combină ESP wallhack, radar hack și tarkov aimbot undetected pentru Tarkov pe PC Windows. soft aim, FOV, and per-weapon Aimbot profiles.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri BattlEye anti-cheat. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye anti-cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye anti-cheat.",
								"support@tarkovhack.com pentru suport și legal.",
							],
						},
					],
				},
				features: {
					title: "Funcții | Full Feature List",
					description: "Funcții: ESP, soft aim, radar controls. livrare digitală instantă. undetected — PC Windows.",
					h1: "Funcții",
					intro: "TarkovHack combină ESP wallhack, radar hack și tarkov aimbot undetected pentru Tarkov pe PC Windows. Funcții.",
					imageAlt: "TarkovHack features — ESP, soft aim, and radar screenshots",
					galleryTitle: "Funcții",
					heroImage: "/images/tarkov-cheats-aimbot-view.webp",
					ctaPrimary: "Cumpără TarkovHack",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Funcții",
							paragraphs: [
								"TarkovHack combină ESP wallhack, radar hack și tarkov aimbot undetected pentru Tarkov pe PC Windows. ESP, soft aim, radar controls.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri BattlEye anti-cheat. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye anti-cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye anti-cheat.",
								"support@tarkovhack.com pentru suport și legal.",
							],
						},
					],
				},
				pricing: {
					title: "Prețuri | Monthly & Lifetime",
					description: "Prețuri: $35 monthly or $150 lifetime licenses. livrare digitală instantă. undetected — PC Windows.",
					h1: "Prețuri",
					intro: "TarkovHack combină ESP wallhack, radar hack și tarkov aimbot undetected pentru Tarkov pe PC Windows. Prețuri.",
					imageAlt: "TarkovHack store plans for monthly and lifetime licenses",
					galleryTitle: "Prețuri",
					heroImage: "/images/tarkov-cheats-raid.webp",
					ctaPrimary: "Cumpără TarkovHack",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Prețuri",
							paragraphs: [
								"TarkovHack combină ESP wallhack, radar hack și tarkov aimbot undetected pentru Tarkov pe PC Windows. $35 monthly or $150 lifetime licenses.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri BattlEye anti-cheat. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye anti-cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye anti-cheat.",
								"support@tarkovhack.com pentru suport și legal.",
							],
						},
					],
				},
				setup: {
					title: "Instalare | PC Setup Guide",
					description: "Instalare: Windows PC activation and first-launch setup. livrare digitală instantă. undetected — PC Windows.",
					h1: "Instalare",
					intro: "TarkovHack combină ESP wallhack, radar hack și tarkov aimbot undetected pentru Tarkov pe PC Windows. Instalare.",
					imageAlt: "TarkovHack setup guide screenshot for Windows PC",
					galleryTitle: "Instalare",
					heroImage: "/images/tarkov-cheats-radar.webp",
					ctaPrimary: "Cumpără TarkovHack",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Instalare",
							paragraphs: [
								"TarkovHack combină ESP wallhack, radar hack și tarkov aimbot undetected pentru Tarkov pe PC Windows. Windows PC activation and first-launch setup.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri BattlEye anti-cheat. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye anti-cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye anti-cheat.",
								"support@tarkovhack.com pentru suport și legal.",
							],
						},
					],
				},
				updates: {
					title: "Actualizări | BattlEye Maintenance Log",
					description: "Actualizări: BattlEye patch status and rebuild notes. livrare digitală instantă. undetected — PC Windows.",
					h1: "Actualizări",
					intro: "TarkovHack combină ESP wallhack, radar hack și tarkov aimbot undetected pentru Tarkov pe PC Windows. Actualizări.",
					imageAlt: "TarkovHack live status after BattlEye and game patches",
					galleryTitle: "Actualizări",
					heroImage: "/images/tarkov-cheats-esp.webp",
					ctaPrimary: "Cumpără TarkovHack",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/tarkov-cheats/",
					sections: [
						{
							h2: "Actualizări",
							paragraphs: [
								"TarkovHack combină ESP wallhack, radar hack și tarkov aimbot undetected pentru Tarkov pe PC Windows. BattlEye patch status and rebuild notes.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri BattlEye anti-cheat. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye anti-cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye anti-cheat.",
								"support@tarkovhack.com pentru suport și legal.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Common Answers",
					description: "FAQ: ESP, soft aim, delivery, and BattlEye questions. livrare digitală instantă. undetected — PC Windows.",
					h1: "FAQ",
					intro: "TarkovHack combină ESP wallhack, radar hack și tarkov aimbot undetected pentru Tarkov pe PC Windows. FAQ.",
					imageAlt: "TarkovHack FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/tarkov-cheats-aimbot-view.webp",
					ctaPrimary: "Cumpără TarkovHack",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"TarkovHack combină ESP wallhack, radar hack și tarkov aimbot undetected pentru Tarkov pe PC Windows. ESP, soft aim, delivery, and BattlEye questions.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri BattlEye anti-cheat. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye anti-cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye anti-cheat.",
								"support@tarkovhack.com pentru suport și legal.",
							],
						},
					],
				},
				support: {
					title: "Suport | Help & Contact",
					description: "Suport: order help and license support contact. livrare digitală instantă. undetected — PC Windows.",
					h1: "Suport",
					intro: "TarkovHack combină ESP wallhack, radar hack și tarkov aimbot undetected pentru Tarkov pe PC Windows. Suport.",
					imageAlt: "TarkovHack support page for license and setup help",
					galleryTitle: "Suport",
					heroImage: "/images/tarkov-cheats-raid.webp",
					ctaPrimary: "Cumpără TarkovHack",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Suport",
							paragraphs: [
								"TarkovHack combină ESP wallhack, radar hack și tarkov aimbot undetected pentru Tarkov pe PC Windows. order help and license support contact.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri BattlEye anti-cheat. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye anti-cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye anti-cheat.",
								"support@tarkovhack.com pentru suport și legal.",
							],
						},
					],
				},
				undetected: {
					title: "Cheats undetected | BattlEye Safe Status",
					description: "Cheats undetected: undetected maintenance after BattlEye anti-cheat patches. livrare digitală instantă. undetected — PC Windows.",
					h1: "Cheats undetected",
					intro: "TarkovHack combină ESP wallhack, radar hack și tarkov aimbot undetected pentru Tarkov pe PC Windows. Cheats undetected.",
					imageAlt: "TarkovHack undetected status overview for Windows PC",
					galleryTitle: "Cheats undetected",
					heroImage: "/images/tarkov-cheats-wallhack.webp",
					ctaPrimary: "Cumpără TarkovHack",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/tarkov-cheats/",
					sections: [
						{
							h2: "Cheats undetected",
							paragraphs: [
								"TarkovHack combină ESP wallhack, radar hack și tarkov aimbot undetected pentru Tarkov pe PC Windows. undetected maintenance after BattlEye anti-cheat patches.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri BattlEye anti-cheat. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye anti-cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye anti-cheat.",
								"support@tarkovhack.com pentru suport și legal.",
							],
						},
					],
				},
				wallhack: {
					title: "Wallhack Tarkov | ESP Visibility",
					description: "Wallhack Tarkov: wallhack ESP for players, loot, and distance. livrare digitală instantă. undetected — PC Windows.",
					h1: "Wallhack Tarkov",
					intro: "TarkovHack combină ESP wallhack, radar hack și tarkov aimbot undetected pentru Tarkov pe PC Windows. Wallhack Tarkov.",
					imageAlt: "Tarkov wallhack visibility through walls in a raid",
					galleryTitle: "Wallhack Tarkov",
					heroImage: "/images/tarkov-cheats-wallhack.webp",
					ctaPrimary: "Cumpără TarkovHack",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/tarkov-esp/",
					sections: [
						{
							h2: "Wallhack Tarkov",
							paragraphs: [
								"TarkovHack combină ESP wallhack, radar hack și tarkov aimbot undetected pentru Tarkov pe PC Windows. wallhack ESP for players, loot, and distance.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri BattlEye anti-cheat. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye anti-cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye anti-cheat.",
								"support@tarkovhack.com pentru suport și legal.",
							],
						},
					],
				},
				radar: {
					title: "Radar hack | 2D Threat Overlay",
					description: "Radar hack: 2D radar cues for flanks and rotations. livrare digitală instantă. undetected — PC Windows.",
					h1: "Radar hack",
					intro: "TarkovHack combină ESP wallhack, radar hack și tarkov aimbot undetected pentru Tarkov pe PC Windows. Radar hack.",
					imageAlt: "Tarkov 2D radar overlay showing nearby threats",
					galleryTitle: "Radar hack",
					heroImage: "/images/tarkov-cheats-radar.webp",
					ctaPrimary: "Cumpără TarkovHack",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/tarkov-esp/",
					sections: [
						{
							h2: "Radar hack",
							paragraphs: [
								"TarkovHack combină ESP wallhack, radar hack și tarkov aimbot undetected pentru Tarkov pe PC Windows. 2D radar cues for flanks and rotations.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri BattlEye anti-cheat. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye anti-cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye anti-cheat.",
								"support@tarkovhack.com pentru suport și legal.",
							],
						},
					],
				},
				battleye: {
					title: "Bypass BattlEye | Patch Maintenance",
					description: "Bypass BattlEye: how BattlEye updates are handled for Escape from Tarkov hacks. livrare digitală instantă. undetected — PC Windows.",
					h1: "Bypass BattlEye",
					intro: "TarkovHack combină ESP wallhack, radar hack și tarkov aimbot undetected pentru Tarkov pe PC Windows. Bypass BattlEye.",
					imageAlt: "TarkovHack maintenance after a BattlEye patch",
					galleryTitle: "Bypass BattlEye",
					heroImage: "/images/tarkov-cheats-aimbot.webp",
					ctaPrimary: "Cumpără TarkovHack",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Bypass BattlEye",
							paragraphs: [
								"TarkovHack combină ESP wallhack, radar hack și tarkov aimbot undetected pentru Tarkov pe PC Windows. how BattlEye updates are handled for Escape from Tarkov hacks.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri BattlEye anti-cheat. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye anti-cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye anti-cheat.",
								"support@tarkovhack.com pentru suport și legal.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Cheats Tarkov 2026 | Buyer Guide",
					description: "Cheats Tarkov 2026: 2026 TarkovHack checklist before checkout. livrare digitală instantă. undetected — PC Windows.",
					h1: "Cheats Tarkov 2026",
					intro: "TarkovHack combină ESP wallhack, radar hack și tarkov aimbot undetected pentru Tarkov pe PC Windows. Cheats Tarkov 2026.",
					imageAlt: "TarkovHack product overview for Escape from Tarkov",
					galleryTitle: "Cheats Tarkov 2026",
					heroImage: "/images/tarkov-cheats-esp.webp",
					ctaPrimary: "Cumpără TarkovHack",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/tarkov-cheats/",
					sections: [
						{
							h2: "Cheats Tarkov 2026",
							paragraphs: [
								"TarkovHack combină ESP wallhack, radar hack și tarkov aimbot undetected pentru Tarkov pe PC Windows. 2026 TarkovHack checklist before checkout.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri BattlEye anti-cheat. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye anti-cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye anti-cheat.",
								"support@tarkovhack.com pentru suport și legal.",
							],
						},
					],
				},
				hacks: {
					title: "Cheats Tarkov | ESP Aimbot Guide",
					description: "Cheats Tarkov: the Escape from Tarkov hacks pillar for ESP and Aimbot. livrare digitală instantă. undetected — PC Windows.",
					h1: "Cheats Tarkov",
					intro: "TarkovHack combină ESP wallhack, radar hack și tarkov aimbot undetected pentru Tarkov pe PC Windows. Cheats Tarkov.",
					imageAlt: "TarkovHack product page — ESP, aimbot, and radar",
					galleryTitle: "Cheats Tarkov",
					heroImage: "/images/tarkov-cheats-raid.webp",
					ctaPrimary: "Cumpără TarkovHack",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Cheats Tarkov",
							paragraphs: [
								"TarkovHack combină ESP wallhack, radar hack și tarkov aimbot undetected pentru Tarkov pe PC Windows. the Escape from Tarkov hacks pillar for ESP and Aimbot.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri BattlEye anti-cheat. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye anti-cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye anti-cheat.",
								"support@tarkovhack.com pentru suport și legal.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Descărcare TarkovHack | Instant Access",
					description: "Descărcare TarkovHack: digital license download after payment. livrare digitală instantă. undetected — PC Windows.",
					h1: "Descărcare TarkovHack",
					intro: "TarkovHack combină ESP wallhack, radar hack și tarkov aimbot undetected pentru Tarkov pe PC Windows. Descărcare TarkovHack.",
					imageAlt: "TarkovHack download and install delivery flow",
					galleryTitle: "Descărcare TarkovHack",
					heroImage: "/images/tarkov-cheats-raid.webp",
					ctaPrimary: "Cumpără TarkovHack",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Descărcare TarkovHack",
							paragraphs: [
								"TarkovHack combină ESP wallhack, radar hack și tarkov aimbot undetected pentru Tarkov pe PC Windows. digital license download after payment.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri BattlEye anti-cheat. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye anti-cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye anti-cheat.",
								"support@tarkovhack.com pentru suport și legal.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Meniu mod Tarkov | In-Game Toggles",
					description: "Meniu mod Tarkov: in-client ESP and soft aim toggles. livrare digitală instantă. undetected — PC Windows.",
					h1: "Meniu mod Tarkov",
					intro: "TarkovHack combină ESP wallhack, radar hack și tarkov aimbot undetected pentru Tarkov pe PC Windows. Meniu mod Tarkov.",
					imageAlt: "TarkovHack in-game menu controls",
					galleryTitle: "Meniu mod Tarkov",
					heroImage: "/images/tarkov-cheats-radar.webp",
					ctaPrimary: "Cumpără TarkovHack",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Meniu mod Tarkov",
							paragraphs: [
								"TarkovHack combină ESP wallhack, radar hack și tarkov aimbot undetected pentru Tarkov pe PC Windows. in-client ESP and soft aim toggles.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri BattlEye anti-cheat. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye anti-cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye anti-cheat.",
								"support@tarkovhack.com pentru suport și legal.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Soft aim Tarkov | Smooth Aim Settings",
					description: "Soft aim Tarkov: smooth soft aim settings for Windows PC. livrare digitală instantă. undetected — PC Windows.",
					h1: "Soft aim Tarkov",
					intro: "TarkovHack combină ESP wallhack, radar hack și tarkov aimbot undetected pentru Tarkov pe PC Windows. Soft aim Tarkov.",
					imageAlt: "Tarkov soft aim FOV and smoothness settings",
					galleryTitle: "Soft aim Tarkov",
					heroImage: "/images/tarkov-cheats-aimbot-view.webp",
					ctaPrimary: "Cumpără TarkovHack",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/tarkov-aimbot/",
					sections: [
						{
							h2: "Soft aim Tarkov",
							paragraphs: [
								"TarkovHack combină ESP wallhack, radar hack și tarkov aimbot undetected pentru Tarkov pe PC Windows. smooth soft aim settings for Windows PC.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri BattlEye anti-cheat. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye anti-cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye anti-cheat.",
								"support@tarkovhack.com pentru suport și legal.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Cele mai bune cheats Tarkov | Buyer Checklist",
					description: "Cele mai bune cheats Tarkov: what to compare before buying TarkovHack. livrare digitală instantă. undetected — PC Windows.",
					h1: "Cele mai bune cheats Tarkov",
					intro: "TarkovHack combină ESP wallhack, radar hack și tarkov aimbot undetected pentru Tarkov pe PC Windows. Cele mai bune cheats Tarkov.",
					imageAlt: "TarkovHack overview for Escape from Tarkov on PC",
					galleryTitle: "Cele mai bune cheats Tarkov",
					heroImage: "/images/tarkov-cheats-esp.webp",
					ctaPrimary: "Cumpără TarkovHack",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Cele mai bune cheats Tarkov",
							paragraphs: [
								"TarkovHack combină ESP wallhack, radar hack și tarkov aimbot undetected pentru Tarkov pe PC Windows. what to compare before buying TarkovHack.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri BattlEye anti-cheat. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye anti-cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye anti-cheat.",
								"support@tarkovhack.com pentru suport și legal.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Hack aimbot Tarkov | Soft Aim Assist",
					description: "Hack aimbot Tarkov: undetected Aimbot hack assist for Escape from Tarkov. livrare digitală instantă. undetected — PC Windows.",
					h1: "Hack aimbot Tarkov",
					intro: "TarkovHack combină ESP wallhack, radar hack și tarkov aimbot undetected pentru Tarkov pe PC Windows. Hack aimbot Tarkov.",
					imageAlt: "Tarkov aimbot hack controls and bone priority",
					galleryTitle: "Hack aimbot Tarkov",
					heroImage: "/images/tarkov-cheats-aimbot-view.webp",
					ctaPrimary: "Cumpără TarkovHack",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/tarkov-aimbot/",
					sections: [
						{
							h2: "Hack aimbot Tarkov",
							paragraphs: [
								"TarkovHack combină ESP wallhack, radar hack și tarkov aimbot undetected pentru Tarkov pe PC Windows. undetected Aimbot hack assist for Escape from Tarkov.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri BattlEye anti-cheat. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye anti-cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye anti-cheat.",
								"support@tarkovhack.com pentru suport și legal.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Hack ESP Tarkov | Boxes & Loot",
					description: "Hack ESP Tarkov: ESP hack boxes, loot pins, and distance. livrare digitală instantă. undetected — PC Windows.",
					h1: "Hack ESP Tarkov",
					intro: "TarkovHack combină ESP wallhack, radar hack și tarkov aimbot undetected pentru Tarkov pe PC Windows. Hack ESP Tarkov.",
					imageAlt: "Tarkov ESP hack boxes and loot markers",
					galleryTitle: "Hack ESP Tarkov",
					heroImage: "/images/tarkov-cheats-wallhack.webp",
					ctaPrimary: "Cumpără TarkovHack",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/tarkov-esp/",
					sections: [
						{
							h2: "Hack ESP Tarkov",
							paragraphs: [
								"TarkovHack combină ESP wallhack, radar hack și tarkov aimbot undetected pentru Tarkov pe PC Windows. ESP hack boxes, loot pins, and distance.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri BattlEye anti-cheat. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye anti-cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye anti-cheat.",
								"support@tarkovhack.com pentru suport și legal.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Unlock all Tarkov | What It Means",
					description: "Unlock all Tarkov: unlock-all searches vs real ESP and Aimbot tools. livrare digitală instantă. undetected — PC Windows.",
					h1: "Unlock all Tarkov",
					intro: "TarkovHack combină ESP wallhack, radar hack și tarkov aimbot undetected pentru Tarkov pe PC Windows. Unlock all Tarkov.",
					imageAlt: "TarkovHack license features overview",
					galleryTitle: "Unlock all Tarkov",
					heroImage: "/images/tarkov-cheats-radar.webp",
					ctaPrimary: "Cumpără TarkovHack",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unlock all Tarkov",
							paragraphs: [
								"TarkovHack combină ESP wallhack, radar hack și tarkov aimbot undetected pentru Tarkov pe PC Windows. unlock-all searches vs real ESP and Aimbot tools.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye anti-cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri BattlEye anti-cheat. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye anti-cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye anti-cheat.",
								"support@tarkovhack.com pentru suport și legal.",
							],
						},
					],
				},
				privacy: {
					title: "Politica de confidențialitate | TarkovHack",
					description: "Politica de confidențialitate for TarkovHack — ESP wallhack, Aimbot, PC Windows.",
					h1: "Politica de confidențialitate",
					intro: "TarkovHack combină ESP wallhack, radar hack și tarkov aimbot undetected pentru Tarkov pe PC Windows. Politica de confidențialitate for tarkovhack.com and Escape from Tarkov licenses.",
					imageAlt: "TarkovHack",
					galleryTitle: "TarkovHack",
					heroImage: "/images/tarkov-cheats-aimbot.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read terms",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we collect",
							paragraphs: [
								"TarkovHack combină ESP wallhack, radar hack și tarkov aimbot undetected pentru Tarkov pe PC Windows. Contact email, Zadeyo order references, and basic site security data.",
								"Payment details are processed by Zadeyo checkout — not stored on tarkovhack.com.",
							],
						},
						{
							h2: "How we use data",
							paragraphs: [
								"TarkovHack combină ESP wallhack, radar hack și tarkov aimbot undetected pentru Tarkov pe PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Verificați Updates după patch-uri BattlEye anti-cheat. Niciun cheat nu garantează undetected permanent.",
							],
						},
						{
							h2: "Your rights",
							paragraphs: [
								"support@tarkovhack.com pentru suport și legal.",
								"Email: support@tarkovhack.com",
							],
						},
					],
				},
				refund: {
					title: "Politica de rambursare | TarkovHack",
					description: "Politica de rambursare for TarkovHack — ESP wallhack, Aimbot, PC Windows.",
					h1: "Politica de rambursare",
					intro: "TarkovHack combină ESP wallhack, radar hack și tarkov aimbot undetected pentru Tarkov pe PC Windows. Politica de rambursare for tarkovhack.com and Escape from Tarkov licenses.",
					imageAlt: "TarkovHack",
					galleryTitle: "TarkovHack",
					heroImage: "/images/tarkov-cheats-raid.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digital delivery",
							paragraphs: [
								"TarkovHack combină ESP wallhack, radar hack și tarkov aimbot undetected pentru Tarkov pe PC Windows. Contact email, Zadeyo order references, and basic site security data.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye anti-cheat.",
							],
						},
						{
							h2: "Refund approval",
							paragraphs: [
								"TarkovHack combină ESP wallhack, radar hack și tarkov aimbot undetected pentru Tarkov pe PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Verificați Updates după patch-uri BattlEye anti-cheat. Niciun cheat nu garantează undetected permanent.",
							],
						},
						{
							h2: "How to request",
							paragraphs: [
								"support@tarkovhack.com pentru suport și legal.",
								"Email: support@tarkovhack.com",
							],
						},
					],
				},
				terms: {
					title: "Termeni de utilizare | TarkovHack",
					description: "Termeni de utilizare for TarkovHack — ESP wallhack, Aimbot, PC Windows.",
					h1: "Termeni de utilizare",
					intro: "TarkovHack combină ESP wallhack, radar hack și tarkov aimbot undetected pentru Tarkov pe PC Windows. Termeni de utilizare for tarkovhack.com and Escape from Tarkov licenses.",
					imageAlt: "TarkovHack",
					galleryTitle: "TarkovHack",
					heroImage: "/images/tarkov-cheats-aimbot-view.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Acceptance of terms",
							paragraphs: [
								"TarkovHack combină ESP wallhack, radar hack și tarkov aimbot undetected pentru Tarkov pe PC Windows. Contact email, Zadeyo order references, and basic site security data.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță BattlEye anti-cheat.",
							],
						},
						{
							h2: "Risk disclaimer",
							paragraphs: [
								"TarkovHack combină ESP wallhack, radar hack și tarkov aimbot undetected pentru Tarkov pe PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "Policy changes",
							paragraphs: [
								"support@tarkovhack.com pentru suport și legal.",
								"Email: support@tarkovhack.com",
							],
						},
					],
				},
			},
		},
		sv: {
			ui: {
				nav: {
					home: "Hem",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Funktioner",
					pricing: "Priser",
					setup: "Installation",
					updates: "Uppdateringar",
					faq: "FAQ",
					buyNow: "Köp nu",
				},
				hero: {
					accent: "Undetected TarkovHack",
					accentShort: "TarkovHack",
					subtitle: "ESP wallhack, radar hack och Aimbot för Tarkov på Windows PC — BattlEye anti-cheat-underhåll ingår.",
					subtitleShort: "ESP, radar & Aimbot för Tarkov PC",
					buyNow: "Köp nu",
					seeFeatures: "Se funktioner",
				},
				trust: {
					status: "Online",
					statusNote: "TarkovHack-paketet är live för Tarkov på Windows PC.",
					statusShort: "Live",
					delivery: "Omedelbar digital leverans",
					platform: "Windows 10 & 11",
					antiCheat: "BattlEye anti-cheat-underhåll stöds",
					antiCheatShort: "BattlEye anti-cheat stöd",
				},
				product: {
					title: "TarkovHack",
					addToCart: "Lägg i varukorg",
					monthly: "Månadsvis",
					lifetime: "Lifetime",
					available: "Tillgänglig nu",
					gameBadge: "Tarkov",
					platformBadge: "Windows PC",
					statusBadge: "Undetected paket",
				},
				reviews: {
					title: "Vad spelare säger",
					subtitle: "Senaste feedback från TarkovHack-köpare",
					outOf: "av 5",
					countLabel: "recensioner",
				},
				common: {
					buyNow: "Köp nu",
					readGuide: "Läs guide",
					language: "Språk",
					officialLanguageNote: "Engelska är det officiella språket. Andra språk är översatta för global SEO.",
					relatedPages: "Relaterade sidor",
				},
				footer: {
					explore: "Utforska",
					help: "Hjälp & juridik",
					tagline: "Undetected ESP, wallhack, radar och Aimbot för Tarkov — checkout via Zadeyo.",
				},
				images: {
					hero: "TarkovHack hero — ESP and aimbot overlay in Escape from Tarkov",
					espWallhack: "Wallhack outlines showing PMCs and Scavs through walls",
					aimbotCombat: "Soft aim assist overlay during an Escape from Tarkov raid",
					squadFight: "TarkovHack combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Tarkov raid",
					headerArt: "Aimbot view and bone priority controls for Tarkov",
					cheatsPackage: "2D radar threat overlay for Escape from Tarkov",
					rebootFight: "Aimbot assist during a Tarkov firefight",
					battleRoyale: "TarkovHack in-raid overview for Windows PC",
					battleRoyaleIsland: "ESP markers for loot and extracts in Tarkov",
				},
			},
			pages: {
				home: {
					title: "TarkovHack 2026 | ESP, Wallhack & Aimbot",
					description: "Undetected TarkovHack för Escape from Tarkov på PC. ESP wallhack, radar hack, Aimbot, BattlEye anti-cheat-underhåll. Omedelbar digital leverans.",
					h1: "TarkovHack — Undetected ESP, Wallhack & Aimbot",
					intro: "Undetected paket för Escape from Tarkov på Windows PC: ESP wallhack, radar, Aimbot med BattlEye anti-cheat-underhåll.",
					imageAlt: "Tarkov ESP player tags hack",
					galleryTitle: "TarkovHack galleri — ESP, Aimbot, wallhack",
					heroImage: "/images/tarkov-cheats-esp.webp",
					ctaPrimary: "Köp TarkovHack",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Varför TarkovHack 2026",
							paragraphs: [
								"TarkovHack kombinerar ESP wallhack, radar hack och tarkov aimbot som undetected paket för Tarkov på Windows PC. Ideal för att läsa fiendesquads i BR och scav-run.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye anti-cheat-underhåll.",
							],
						},
						{
							h2: "ESP wallhack, radar och Aimbot i en licens",
							paragraphs: [
								"TarkovHack kombinerar ESP wallhack, radar hack och tarkov aimbot som undetected paket för Tarkov på Windows PC. En licens istället för separata verktyg.",
								"Kontrollera Updates efter BattlEye anti-cheat-patchar. Ingen cheat garanterar permanent undetected status.",
							],
						},
					],
				},
				"tarkov-esp": {
					title: "Tarkov ESP | Player Boxes & Wallhack",
					description: "Tarkov ESP: player boxes, loot markers, and wallhack overlays. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Tarkov ESP",
					intro: "TarkovHack kombinerar ESP wallhack, radar hack och tarkov aimbot som undetected paket för Tarkov på Windows PC. Tarkov ESP.",
					imageAlt: "Tarkov ESP player boxes and distance readouts in a raid",
					galleryTitle: "Tarkov ESP",
					heroImage: "/images/tarkov-cheats-radar.webp",
					ctaPrimary: "Köp TarkovHack",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/tarkov-cheats/",
					sections: [
						{
							h2: "Tarkov ESP",
							paragraphs: [
								"TarkovHack kombinerar ESP wallhack, radar hack och tarkov aimbot som undetected paket för Tarkov på Windows PC. player boxes, loot markers, and wallhack overlays.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye anti-cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter BattlEye anti-cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye anti-cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye anti-cheat-underhåll.",
								"support@tarkovhack.com för support och juridik.",
							],
						},
					],
				},
				"tarkov-aimbot": {
					title: "Tarkov Aimbot | Soft Aim Controls",
					description: "Tarkov Aimbot: soft aim, FOV, and per-weapon Aimbot profiles. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Tarkov Aimbot",
					intro: "TarkovHack kombinerar ESP wallhack, radar hack och tarkov aimbot som undetected paket för Tarkov på Windows PC. Tarkov Aimbot.",
					imageAlt: "Tarkov aimbot and soft aim controls on Windows PC",
					galleryTitle: "Tarkov Aimbot",
					heroImage: "/images/tarkov-cheats-aimbot.webp",
					ctaPrimary: "Köp TarkovHack",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/tarkov-esp/",
					sections: [
						{
							h2: "Tarkov Aimbot",
							paragraphs: [
								"TarkovHack kombinerar ESP wallhack, radar hack och tarkov aimbot som undetected paket för Tarkov på Windows PC. soft aim, FOV, and per-weapon Aimbot profiles.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye anti-cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter BattlEye anti-cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye anti-cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye anti-cheat-underhåll.",
								"support@tarkovhack.com för support och juridik.",
							],
						},
					],
				},
				features: {
					title: "Funktioner | Full Feature List",
					description: "Funktioner: ESP, soft aim, radar controls. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Funktioner",
					intro: "TarkovHack kombinerar ESP wallhack, radar hack och tarkov aimbot som undetected paket för Tarkov på Windows PC. Funktioner.",
					imageAlt: "TarkovHack features — ESP, soft aim, and radar screenshots",
					galleryTitle: "Funktioner",
					heroImage: "/images/tarkov-cheats-aimbot-view.webp",
					ctaPrimary: "Köp TarkovHack",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Funktioner",
							paragraphs: [
								"TarkovHack kombinerar ESP wallhack, radar hack och tarkov aimbot som undetected paket för Tarkov på Windows PC. ESP, soft aim, radar controls.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye anti-cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter BattlEye anti-cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye anti-cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye anti-cheat-underhåll.",
								"support@tarkovhack.com för support och juridik.",
							],
						},
					],
				},
				pricing: {
					title: "Priser | Monthly & Lifetime",
					description: "Priser: $35 monthly or $150 lifetime licenses. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Priser",
					intro: "TarkovHack kombinerar ESP wallhack, radar hack och tarkov aimbot som undetected paket för Tarkov på Windows PC. Priser.",
					imageAlt: "TarkovHack store plans for monthly and lifetime licenses",
					galleryTitle: "Priser",
					heroImage: "/images/tarkov-cheats-raid.webp",
					ctaPrimary: "Köp TarkovHack",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Priser",
							paragraphs: [
								"TarkovHack kombinerar ESP wallhack, radar hack och tarkov aimbot som undetected paket för Tarkov på Windows PC. $35 monthly or $150 lifetime licenses.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye anti-cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter BattlEye anti-cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye anti-cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye anti-cheat-underhåll.",
								"support@tarkovhack.com för support och juridik.",
							],
						},
					],
				},
				setup: {
					title: "Installation | PC Setup Guide",
					description: "Installation: Windows PC activation and first-launch setup. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Installation",
					intro: "TarkovHack kombinerar ESP wallhack, radar hack och tarkov aimbot som undetected paket för Tarkov på Windows PC. Installation.",
					imageAlt: "TarkovHack setup guide screenshot for Windows PC",
					galleryTitle: "Installation",
					heroImage: "/images/tarkov-cheats-radar.webp",
					ctaPrimary: "Köp TarkovHack",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Installation",
							paragraphs: [
								"TarkovHack kombinerar ESP wallhack, radar hack och tarkov aimbot som undetected paket för Tarkov på Windows PC. Windows PC activation and first-launch setup.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye anti-cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter BattlEye anti-cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye anti-cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye anti-cheat-underhåll.",
								"support@tarkovhack.com för support och juridik.",
							],
						},
					],
				},
				updates: {
					title: "Uppdateringar | BattlEye Maintenance Log",
					description: "Uppdateringar: BattlEye patch status and rebuild notes. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Uppdateringar",
					intro: "TarkovHack kombinerar ESP wallhack, radar hack och tarkov aimbot som undetected paket för Tarkov på Windows PC. Uppdateringar.",
					imageAlt: "TarkovHack live status after BattlEye and game patches",
					galleryTitle: "Uppdateringar",
					heroImage: "/images/tarkov-cheats-esp.webp",
					ctaPrimary: "Köp TarkovHack",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/tarkov-cheats/",
					sections: [
						{
							h2: "Uppdateringar",
							paragraphs: [
								"TarkovHack kombinerar ESP wallhack, radar hack och tarkov aimbot som undetected paket för Tarkov på Windows PC. BattlEye patch status and rebuild notes.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye anti-cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter BattlEye anti-cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye anti-cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye anti-cheat-underhåll.",
								"support@tarkovhack.com för support och juridik.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Common Answers",
					description: "FAQ: ESP, soft aim, delivery, and BattlEye questions. omedelbar digital leverans. undetected — Windows PC.",
					h1: "FAQ",
					intro: "TarkovHack kombinerar ESP wallhack, radar hack och tarkov aimbot som undetected paket för Tarkov på Windows PC. FAQ.",
					imageAlt: "TarkovHack FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/tarkov-cheats-aimbot-view.webp",
					ctaPrimary: "Köp TarkovHack",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"TarkovHack kombinerar ESP wallhack, radar hack och tarkov aimbot som undetected paket för Tarkov på Windows PC. ESP, soft aim, delivery, and BattlEye questions.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye anti-cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter BattlEye anti-cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye anti-cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye anti-cheat-underhåll.",
								"support@tarkovhack.com för support och juridik.",
							],
						},
					],
				},
				support: {
					title: "Support | Help & Contact",
					description: "Support: order help and license support contact. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Support",
					intro: "TarkovHack kombinerar ESP wallhack, radar hack och tarkov aimbot som undetected paket för Tarkov på Windows PC. Support.",
					imageAlt: "TarkovHack support page for license and setup help",
					galleryTitle: "Support",
					heroImage: "/images/tarkov-cheats-raid.webp",
					ctaPrimary: "Köp TarkovHack",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Support",
							paragraphs: [
								"TarkovHack kombinerar ESP wallhack, radar hack och tarkov aimbot som undetected paket för Tarkov på Windows PC. order help and license support contact.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye anti-cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter BattlEye anti-cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye anti-cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye anti-cheat-underhåll.",
								"support@tarkovhack.com för support och juridik.",
							],
						},
					],
				},
				undetected: {
					title: "Undetected cheats | BattlEye Safe Status",
					description: "Undetected cheats: undetected maintenance after BattlEye anti-cheat patches. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Undetected cheats",
					intro: "TarkovHack kombinerar ESP wallhack, radar hack och tarkov aimbot som undetected paket för Tarkov på Windows PC. Undetected cheats.",
					imageAlt: "TarkovHack undetected status overview for Windows PC",
					galleryTitle: "Undetected cheats",
					heroImage: "/images/tarkov-cheats-wallhack.webp",
					ctaPrimary: "Köp TarkovHack",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/tarkov-cheats/",
					sections: [
						{
							h2: "Undetected cheats",
							paragraphs: [
								"TarkovHack kombinerar ESP wallhack, radar hack och tarkov aimbot som undetected paket för Tarkov på Windows PC. undetected maintenance after BattlEye anti-cheat patches.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye anti-cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter BattlEye anti-cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye anti-cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye anti-cheat-underhåll.",
								"support@tarkovhack.com för support och juridik.",
							],
						},
					],
				},
				wallhack: {
					title: "Tarkov Wallhack | ESP Visibility",
					description: "Tarkov Wallhack: wallhack ESP for players, loot, and distance. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Tarkov Wallhack",
					intro: "TarkovHack kombinerar ESP wallhack, radar hack och tarkov aimbot som undetected paket för Tarkov på Windows PC. Tarkov Wallhack.",
					imageAlt: "Tarkov wallhack visibility through walls in a raid",
					galleryTitle: "Tarkov Wallhack",
					heroImage: "/images/tarkov-cheats-wallhack.webp",
					ctaPrimary: "Köp TarkovHack",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/tarkov-esp/",
					sections: [
						{
							h2: "Tarkov Wallhack",
							paragraphs: [
								"TarkovHack kombinerar ESP wallhack, radar hack och tarkov aimbot som undetected paket för Tarkov på Windows PC. wallhack ESP for players, loot, and distance.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye anti-cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter BattlEye anti-cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye anti-cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye anti-cheat-underhåll.",
								"support@tarkovhack.com för support och juridik.",
							],
						},
					],
				},
				radar: {
					title: "Radar Hack | 2D Threat Overlay",
					description: "Radar Hack: 2D radar cues for flanks and rotations. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Radar Hack",
					intro: "TarkovHack kombinerar ESP wallhack, radar hack och tarkov aimbot som undetected paket för Tarkov på Windows PC. Radar Hack.",
					imageAlt: "Tarkov 2D radar overlay showing nearby threats",
					galleryTitle: "Radar Hack",
					heroImage: "/images/tarkov-cheats-radar.webp",
					ctaPrimary: "Köp TarkovHack",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/tarkov-esp/",
					sections: [
						{
							h2: "Radar Hack",
							paragraphs: [
								"TarkovHack kombinerar ESP wallhack, radar hack och tarkov aimbot som undetected paket för Tarkov på Windows PC. 2D radar cues for flanks and rotations.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye anti-cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter BattlEye anti-cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye anti-cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye anti-cheat-underhåll.",
								"support@tarkovhack.com för support och juridik.",
							],
						},
					],
				},
				battleye: {
					title: "BattlEye Bypass | Patch Maintenance",
					description: "BattlEye Bypass: how BattlEye updates are handled for Escape from Tarkov hacks. omedelbar digital leverans. undetected — Windows PC.",
					h1: "BattlEye Bypass",
					intro: "TarkovHack kombinerar ESP wallhack, radar hack och tarkov aimbot som undetected paket för Tarkov på Windows PC. BattlEye Bypass.",
					imageAlt: "TarkovHack maintenance after a BattlEye patch",
					galleryTitle: "BattlEye Bypass",
					heroImage: "/images/tarkov-cheats-aimbot.webp",
					ctaPrimary: "Köp TarkovHack",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "BattlEye Bypass",
							paragraphs: [
								"TarkovHack kombinerar ESP wallhack, radar hack och tarkov aimbot som undetected paket för Tarkov på Windows PC. how BattlEye updates are handled for Escape from Tarkov hacks.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye anti-cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter BattlEye anti-cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye anti-cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye anti-cheat-underhåll.",
								"support@tarkovhack.com för support och juridik.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "TarkovHack 2026 | Buyer Guide",
					description: "TarkovHack 2026: 2026 TarkovHack checklist before checkout. omedelbar digital leverans. undetected — Windows PC.",
					h1: "TarkovHack 2026",
					intro: "TarkovHack kombinerar ESP wallhack, radar hack och tarkov aimbot som undetected paket för Tarkov på Windows PC. TarkovHack 2026.",
					imageAlt: "TarkovHack product overview for Escape from Tarkov",
					galleryTitle: "TarkovHack 2026",
					heroImage: "/images/tarkov-cheats-esp.webp",
					ctaPrimary: "Köp TarkovHack",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/tarkov-cheats/",
					sections: [
						{
							h2: "TarkovHack 2026",
							paragraphs: [
								"TarkovHack kombinerar ESP wallhack, radar hack och tarkov aimbot som undetected paket för Tarkov på Windows PC. 2026 TarkovHack checklist before checkout.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye anti-cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter BattlEye anti-cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye anti-cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye anti-cheat-underhåll.",
								"support@tarkovhack.com för support och juridik.",
							],
						},
					],
				},
				hacks: {
					title: "TarkovHack | ESP Aimbot Guide",
					description: "TarkovHack: the Escape from Tarkov hacks pillar for ESP and Aimbot. omedelbar digital leverans. undetected — Windows PC.",
					h1: "TarkovHack",
					intro: "TarkovHack kombinerar ESP wallhack, radar hack och tarkov aimbot som undetected paket för Tarkov på Windows PC. TarkovHack.",
					imageAlt: "TarkovHack product page — ESP, aimbot, and radar",
					galleryTitle: "TarkovHack",
					heroImage: "/images/tarkov-cheats-raid.webp",
					ctaPrimary: "Köp TarkovHack",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "TarkovHack",
							paragraphs: [
								"TarkovHack kombinerar ESP wallhack, radar hack och tarkov aimbot som undetected paket för Tarkov på Windows PC. the Escape from Tarkov hacks pillar for ESP and Aimbot.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye anti-cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter BattlEye anti-cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye anti-cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye anti-cheat-underhåll.",
								"support@tarkovhack.com för support och juridik.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Tarkov Cheat Download | Instant Access",
					description: "Tarkov Cheat Download: digital license download after payment. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Tarkov Cheat Download",
					intro: "TarkovHack kombinerar ESP wallhack, radar hack och tarkov aimbot som undetected paket för Tarkov på Windows PC. Tarkov Cheat Download.",
					imageAlt: "TarkovHack download and install delivery flow",
					galleryTitle: "Tarkov Cheat Download",
					heroImage: "/images/tarkov-cheats-raid.webp",
					ctaPrimary: "Köp TarkovHack",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Tarkov Cheat Download",
							paragraphs: [
								"TarkovHack kombinerar ESP wallhack, radar hack och tarkov aimbot som undetected paket för Tarkov på Windows PC. digital license download after payment.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye anti-cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter BattlEye anti-cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye anti-cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye anti-cheat-underhåll.",
								"support@tarkovhack.com för support och juridik.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Tarkov Mod-meny | In-Game Toggles",
					description: "Tarkov Mod-meny: in-client ESP and soft aim toggles. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Tarkov Mod-meny",
					intro: "TarkovHack kombinerar ESP wallhack, radar hack och tarkov aimbot som undetected paket för Tarkov på Windows PC. Tarkov Mod-meny.",
					imageAlt: "TarkovHack in-game menu controls",
					galleryTitle: "Tarkov Mod-meny",
					heroImage: "/images/tarkov-cheats-radar.webp",
					ctaPrimary: "Köp TarkovHack",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Tarkov Mod-meny",
							paragraphs: [
								"TarkovHack kombinerar ESP wallhack, radar hack och tarkov aimbot som undetected paket för Tarkov på Windows PC. in-client ESP and soft aim toggles.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye anti-cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter BattlEye anti-cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye anti-cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye anti-cheat-underhåll.",
								"support@tarkovhack.com för support och juridik.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Tarkov Soft Aim | Smooth Aim Settings",
					description: "Tarkov Soft Aim: smooth soft aim settings for Windows PC. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Tarkov Soft Aim",
					intro: "TarkovHack kombinerar ESP wallhack, radar hack och tarkov aimbot som undetected paket för Tarkov på Windows PC. Tarkov Soft Aim.",
					imageAlt: "Tarkov soft aim FOV and smoothness settings",
					galleryTitle: "Tarkov Soft Aim",
					heroImage: "/images/tarkov-cheats-aimbot-view.webp",
					ctaPrimary: "Köp TarkovHack",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/tarkov-aimbot/",
					sections: [
						{
							h2: "Tarkov Soft Aim",
							paragraphs: [
								"TarkovHack kombinerar ESP wallhack, radar hack och tarkov aimbot som undetected paket för Tarkov på Windows PC. smooth soft aim settings for Windows PC.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye anti-cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter BattlEye anti-cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye anti-cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye anti-cheat-underhåll.",
								"support@tarkovhack.com för support och juridik.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Bästa TarkovHack | Buyer Checklist",
					description: "Bästa TarkovHack: what to compare before buying TarkovHack. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Bästa TarkovHack",
					intro: "TarkovHack kombinerar ESP wallhack, radar hack och tarkov aimbot som undetected paket för Tarkov på Windows PC. Bästa TarkovHack.",
					imageAlt: "TarkovHack overview for Escape from Tarkov on PC",
					galleryTitle: "Bästa TarkovHack",
					heroImage: "/images/tarkov-cheats-esp.webp",
					ctaPrimary: "Köp TarkovHack",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Bästa TarkovHack",
							paragraphs: [
								"TarkovHack kombinerar ESP wallhack, radar hack och tarkov aimbot som undetected paket för Tarkov på Windows PC. what to compare before buying TarkovHack.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye anti-cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter BattlEye anti-cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye anti-cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye anti-cheat-underhåll.",
								"support@tarkovhack.com för support och juridik.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Tarkov Aimbot Hack | Soft Aim Assist",
					description: "Tarkov Aimbot Hack: undetected Aimbot hack assist for Escape from Tarkov. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Tarkov Aimbot Hack",
					intro: "TarkovHack kombinerar ESP wallhack, radar hack och tarkov aimbot som undetected paket för Tarkov på Windows PC. Tarkov Aimbot Hack.",
					imageAlt: "Tarkov aimbot hack controls and bone priority",
					galleryTitle: "Tarkov Aimbot Hack",
					heroImage: "/images/tarkov-cheats-aimbot-view.webp",
					ctaPrimary: "Köp TarkovHack",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/tarkov-aimbot/",
					sections: [
						{
							h2: "Tarkov Aimbot Hack",
							paragraphs: [
								"TarkovHack kombinerar ESP wallhack, radar hack och tarkov aimbot som undetected paket för Tarkov på Windows PC. undetected Aimbot hack assist for Escape from Tarkov.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye anti-cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter BattlEye anti-cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye anti-cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye anti-cheat-underhåll.",
								"support@tarkovhack.com för support och juridik.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Tarkov ESP Hack | Boxes & Loot",
					description: "Tarkov ESP Hack: ESP hack boxes, loot pins, and distance. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Tarkov ESP Hack",
					intro: "TarkovHack kombinerar ESP wallhack, radar hack och tarkov aimbot som undetected paket för Tarkov på Windows PC. Tarkov ESP Hack.",
					imageAlt: "Tarkov ESP hack boxes and loot markers",
					galleryTitle: "Tarkov ESP Hack",
					heroImage: "/images/tarkov-cheats-wallhack.webp",
					ctaPrimary: "Köp TarkovHack",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/tarkov-esp/",
					sections: [
						{
							h2: "Tarkov ESP Hack",
							paragraphs: [
								"TarkovHack kombinerar ESP wallhack, radar hack och tarkov aimbot som undetected paket för Tarkov på Windows PC. ESP hack boxes, loot pins, and distance.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye anti-cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter BattlEye anti-cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye anti-cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye anti-cheat-underhåll.",
								"support@tarkovhack.com för support och juridik.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Tarkov Unlock All | What It Means",
					description: "Tarkov Unlock All: unlock-all searches vs real ESP and Aimbot tools. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Tarkov Unlock All",
					intro: "TarkovHack kombinerar ESP wallhack, radar hack och tarkov aimbot som undetected paket för Tarkov på Windows PC. Tarkov Unlock All.",
					imageAlt: "TarkovHack license features overview",
					galleryTitle: "Tarkov Unlock All",
					heroImage: "/images/tarkov-cheats-radar.webp",
					ctaPrimary: "Köp TarkovHack",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Tarkov Unlock All",
							paragraphs: [
								"TarkovHack kombinerar ESP wallhack, radar hack och tarkov aimbot som undetected paket för Tarkov på Windows PC. unlock-all searches vs real ESP and Aimbot tools.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye anti-cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter BattlEye anti-cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye anti-cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye anti-cheat-underhåll.",
								"support@tarkovhack.com för support och juridik.",
							],
						},
					],
				},
				privacy: {
					title: "Integritetspolicy | TarkovHack",
					description: "Integritetspolicy for TarkovHack — ESP wallhack, Aimbot, Windows PC.",
					h1: "Integritetspolicy",
					intro: "TarkovHack kombinerar ESP wallhack, radar hack och tarkov aimbot som undetected paket för Tarkov på Windows PC. Integritetspolicy for tarkovhack.com and Escape from Tarkov licenses.",
					imageAlt: "TarkovHack",
					galleryTitle: "TarkovHack",
					heroImage: "/images/tarkov-cheats-aimbot.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read terms",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we collect",
							paragraphs: [
								"TarkovHack kombinerar ESP wallhack, radar hack och tarkov aimbot som undetected paket för Tarkov på Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"Payment details are processed by Zadeyo checkout — not stored on tarkovhack.com.",
							],
						},
						{
							h2: "How we use data",
							paragraphs: [
								"TarkovHack kombinerar ESP wallhack, radar hack och tarkov aimbot som undetected paket för Tarkov på Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Kontrollera Updates efter BattlEye anti-cheat-patchar. Ingen cheat garanterar permanent undetected status.",
							],
						},
						{
							h2: "Your rights",
							paragraphs: [
								"support@tarkovhack.com för support och juridik.",
								"Email: support@tarkovhack.com",
							],
						},
					],
				},
				refund: {
					title: "Återbetalningspolicy | TarkovHack",
					description: "Återbetalningspolicy for TarkovHack — ESP wallhack, Aimbot, Windows PC.",
					h1: "Återbetalningspolicy",
					intro: "TarkovHack kombinerar ESP wallhack, radar hack och tarkov aimbot som undetected paket för Tarkov på Windows PC. Återbetalningspolicy for tarkovhack.com and Escape from Tarkov licenses.",
					imageAlt: "TarkovHack",
					galleryTitle: "TarkovHack",
					heroImage: "/images/tarkov-cheats-raid.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digital delivery",
							paragraphs: [
								"TarkovHack kombinerar ESP wallhack, radar hack och tarkov aimbot som undetected paket för Tarkov på Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye anti-cheat-underhåll.",
							],
						},
						{
							h2: "Refund approval",
							paragraphs: [
								"TarkovHack kombinerar ESP wallhack, radar hack och tarkov aimbot som undetected paket för Tarkov på Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Kontrollera Updates efter BattlEye anti-cheat-patchar. Ingen cheat garanterar permanent undetected status.",
							],
						},
						{
							h2: "How to request",
							paragraphs: [
								"support@tarkovhack.com för support och juridik.",
								"Email: support@tarkovhack.com",
							],
						},
					],
				},
				terms: {
					title: "Användarvillkor | TarkovHack",
					description: "Användarvillkor for TarkovHack — ESP wallhack, Aimbot, Windows PC.",
					h1: "Användarvillkor",
					intro: "TarkovHack kombinerar ESP wallhack, radar hack och tarkov aimbot som undetected paket för Tarkov på Windows PC. Användarvillkor for tarkovhack.com and Escape from Tarkov licenses.",
					imageAlt: "TarkovHack",
					galleryTitle: "TarkovHack",
					heroImage: "/images/tarkov-cheats-aimbot-view.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Acceptance of terms",
							paragraphs: [
								"TarkovHack kombinerar ESP wallhack, radar hack och tarkov aimbot som undetected paket för Tarkov på Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. BattlEye anti-cheat-underhåll.",
							],
						},
						{
							h2: "Risk disclaimer",
							paragraphs: [
								"TarkovHack kombinerar ESP wallhack, radar hack och tarkov aimbot som undetected paket för Tarkov på Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "Policy changes",
							paragraphs: [
								"support@tarkovhack.com för support och juridik.",
								"Email: support@tarkovhack.com",
							],
						},
					],
				},
			},
		},
	};
