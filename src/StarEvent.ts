class StarEvent extends egret.Event {

	static ENTER_MAIN_SCREEN = 'enterMainScreen';

	static ENTER_LEVEL_SCREEN = 'enterLevelScreen';

	static ENTER_LEVEL = 'enterLevel';

	static SHOW_REDEEM_CODE = 'showRedeemCode';

	static SHOW_ACTIVITY = 'showActivity';

	static SHOW_SETTING = 'showSetting';

	static RESTAR = 'restar';

	static PAY_SUCCESS = 'paySuccess';

	static STAR_TYPE_CHANGED = 'starTypeChanged';

	static BUY_ITEM_SUCCESS = 'buyItemSuccess';

	static ENTER_LEVEL_2 = 'enterLevel2';

	static PLAY_LIU_XING = 'playLiuXing';

	static CHANGE_NAME = 'changeName';

	public constructor(type: string, private _level?: number, private _data?: string) {
		super(type);
	}

	get level(): number {
		return this._level;
	}

	get data(): string {
		return this._data;
	}
}