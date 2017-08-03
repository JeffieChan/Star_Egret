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

	public constructor(type: string, private _level?: number) {
		super(type);
	}

	get level(): number {
		return this._level;
	}
}