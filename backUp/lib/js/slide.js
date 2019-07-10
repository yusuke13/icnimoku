$( document ).ready(function( $ ) {
	$('#caption').sliderPro({
		autoScaleLayers: true,//キャプションの自動変形
		waitForLayers: true,//キャプションのアニメーションが終了してからスライドするか
		width: '100%',//横幅
		responsive: true,//レスポンシヴに対応
		autoplay: true,//自動再生
		autoHeight: true,//スライダーの高さの自動調整
		centerImage: true,//画像を中央表示
		loop: true,//ループ
		fadeDuration: 1000,
		fade: true,//フェード処理
		arrows: true,//左右の矢印
		buttons: false,//ナビゲーションボタン
		slideDistance:0,//スライド同士の距離
	});
});