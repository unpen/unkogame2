// Generated by RPG Maker.
// Do not edit this file directly.
var $plugins =
[
{"name":"UR65_SmartPhoneUI","status":false,"description":"スマホ用UI  ver 1.0.0\nUIのサイズをスマートフォン向けに最適化します。","parameters":{"タイトル":"1","メニュー":"1","アイテム":"1","スキル":"1","装備":"1","オプション":"1","ゲーム終了":"1","戦闘":"1","ショップ":"1","イベント関係":"0","アイコン位置修正":"1"}},
{"name":"ElementMessagePlus","status":true,"description":"属性メッセージ追加プラグイン","parameters":{"WeakRate":"1.1","ResistRate":"0.9","WeakEffect":"true","ResistEffect":"true","GuardEffect":"true","ActorWeak":"","EnemyWeak":"","ActorResist":"","EnemyResist":"","ActorGuard":"","EnemyGuard":"","ActorImpartial":"","EnemyImpartial":""}},
{"name":"Mano_EnemyHelpWindow","status":true,"description":"攻撃対象を選ぶ段階で相手の弱点を表示します。","parameters":{"WindowRect":"","WindowWidth":"300","WindowHeight":"150","WindowX":"","WindowY":"","弱点判定ライン":"","WeakLine":"100","ResistanceLine":"100","displayName":"","WeakName":"弱点：","ResistanceName":"耐性：","displayMode":"text","iconList":"[\"64\",\"65\", \"66\", \"67\", \"68\", \"69\", \"70\", \"71\"]"}},
{"name":"AB_StateResistance","status":true,"description":"戦闘中にステートに耐性がついていくようになります。","parameters":{"DebugMode":"1","StateRateFormula":"stateRate - resistance","GrowResistanceFormula":"resistance + 1.00","TurnEndFormula":"resistance - 0.2","BattleEndFormula":"0"}},
{"name":"TYA_EnemyHPGauge","status":true,"description":"敵ターゲットウィンドウにＨＰゲージを表示させます。\r\n特定の敵のゲージを非表示にすることもできます。","parameters":{}},
{"name":"ShowStateTurns","status":true,"description":"ver1.00/アクターのステートやバフの残りターン数をアイコンに表示します。","parameters":{}},
{"name":"FTKR_ExEquipSlot","status":true,"description":"v1.1.0 同じ装備タイプの装備を２つ以上装備できるようにする","parameters":{"Enable Equip Same Items":"false"}},
{"name":"MPP_ChoiceEX","status":true,"description":"【ver.3.6】選択肢の機能拡張","parameters":{"maxPageRow":"8","=== Command ===":"","Plugin Commands":"{\"ChoicePos\":\"ChoicePos\",\"ChoiceVariableId\":\"ChoiceVariableId\",\"ChoiceRect\":\"ChoiceRect\"}","Event Comment":"{\"ChoiceHelp\":\"選択肢ヘルプ\"}"}},
{"name":"KillBonus","status":true,"description":"撃破ボーナスプラグイン","parameters":{}},
{"name":"SceneFormation","status":true,"description":"ver1.09/並び替えシーンを追加します。","parameters":{"Stand Members Size":"28","Max Battle Members Size":"4","Use Menu Formation Scene":"true","Formation Scene Battle Name":"戦闘メンバー","Formation Scene Stand Name":"待機メンバー","Use Battle Formation Switch ID":"20","Battle Command Formation":"Formation","Status Window Font Size":"24","Status Block Width":"372"}},
{"name":"UCHU_MobileOperation","status":true,"description":"スマホ操作用プラグイン。横持ち/縦持ちに対応した仮想ボタン、\r\nタッチ操作の方法を追加拡張し、スマホプレイを快適にします。","parameters":{"---PC Option---":"","PC BtnDisplay":"false","PC TouchExtend":"true","---File Path---":"","DPad Image":"./img/system/DirPad.png","ActionBtn Image":"./img/system/ActionButton.png","CancelBtn Image":"./img/system/CancelButton.png","---Button Customize---":"","Button Opacity":"0.7","Vertical BtnZoom":"1.7","Tablet BtnZoom":"0.8","TabVertical BtnZoom":"1.1","HideButton OnMessage":"true","DPad Visible":"true","DPad Size":"220","DPad Margin":"10; 10","DPad Orientation":"left; bottom","DPad OpelationRange":"1.3","DPad DiagonalRange":"0.3","ActionBtn Visible":"true","ActionBtn Size":"110","ActionBtn Margin":"10; 90","ActionBtn Orientation":"right; bottom","CancelBtn Visible":"true","CancelBtn Size":"110","CancelBtn Margin":"110; 10","CancelBtn Orientation":"right; bottom","---TouchInput Extend---":"","Flick PageUp-PageDown":"true","HoldCanvas ActionBtn":"true","OutCanvas CancelBtn":"false","OutCanvas ActionBtn":"false","--!need AnalogMove.js!--":"","Analog Move":"false","Analog Sensitivity":"1.8"}},
{"name":"CustomizeConfigDefault","status":true,"description":"オプションデフォルト値設定プラグイン","parameters":{"常時ダッシュ":"ON","コマンド記憶":"OFF","BGM音量":"100","BGS音量":"100","ME音量":"100","SE音量":"100","常時ダッシュ消去":"OFF","コマンド記憶消去":"OFF","BGM音量消去":"OFF","BGS音量消去":"OFF","ME音量消去":"OFF","SE音量消去":"OFF"}},
{"name":"TDDP_PreloadManager","status":true,"description":"マップ/シーン切り替え時、またブート時に素材の事前ロードを行います。","parameters":{"Preload System SFX":"true","Print Debug to Console":"false"}}
];
