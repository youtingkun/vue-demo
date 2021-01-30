<template>
	<div>
		<form onsubmit="return false;">
			<h3>WebSocket 聊天室：</h3>
			<textarea id="responseText" style="width: 500px; height: 300px"></textarea>
			<br />
			<input type="text" name="message" style="width: 300px" value="Welcome to waylau.com" v-model="message" />
			<input type="button" value="发送消息" @click="send()" />
			<input type="button" @click="reset()" value="清空聊天记录" />
		</form>
	</div>
</template>

<script>
export default {
	name: '',
	data() {
		return {
			socket: '',
			message: '',
		};
	},
	mounted() {
		this.init();
	},
	methods: {
		init() {
			if (!window.WebSocket) {
				window.WebSocket = window.MozWebSocket;
			}
			if (window.WebSocket) {
				this.socket = new WebSocket('ws://localhost:3000');
				this.socket.onmessage = function (event) {
					var ta = document.getElementById('responseText');
					ta.value = ta.value + '\n' + event.data;
				};
				this.socket.onopen = function (event) {
					var ta = document.getElementById('responseText');
					ta.value = '连接开启!';
				};
				this.socket.onclose = function (event) {
					var ta = document.getElementById('responseText');
					ta.value = ta.value + '连接被关闭';
				};
			} else {
				alert('你的浏览器不支持 WebSocket！');
			}
		},
		send() {
			if (!window.WebSocket) {
				return;
			}
			if (this.socket.readyState == WebSocket.OPEN) {
				this.socket.send(this.message);
			} else {
				alert('连接没有开启.');
			}
		},
		reset() {},
	},
};
</script>

<style scoped></style>
